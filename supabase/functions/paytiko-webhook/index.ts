import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PaytikoWebhookPayload {
  event: string;
  paymentId: string;
  orderId?: string;
  status: string;
  amount?: number;
  currency?: string;
  transactionId?: string;
  timestamp?: string;
  metadata?: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Paytiko webhook received");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const PAYTIKO_API_KEY = Deno.env.get("PAYTIKO_API_KEY");

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Supabase credentials not configured");
      throw new Error("Database not configured");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Get raw body for signature verification if needed
    const rawBody = await req.text();
    console.log("Webhook raw body:", rawBody);

    let payload: PaytikoWebhookPayload;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      console.error("Invalid JSON payload");
      return new Response(
        JSON.stringify({ error: "Invalid JSON payload" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Webhook payload:", JSON.stringify(payload));

    // Extract order ID from payload or metadata
    const orderId = payload.orderId || payload.metadata?.orderId;
    const paymentId = payload.paymentId;

    if (!orderId && !paymentId) {
      console.error("Missing order or payment identifier");
      return new Response(
        JSON.stringify({ error: "Missing order or payment identifier" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Find the order
    let orderQuery = supabase.from("orders").select("*");
    
    if (orderId) {
      orderQuery = orderQuery.eq("id", orderId);
    } else if (paymentId) {
      orderQuery = orderQuery.eq("payment_id", paymentId);
    }

    const { data: order, error: orderError } = await orderQuery.single();

    if (orderError || !order) {
      console.error("Order not found:", { orderId, paymentId }, orderError);
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Order found:", { id: order.id, orderNumber: order.order_number });

    // Map Paytiko status to our order status
    let newStatus = order.status;
    let paidAt = order.paid_at;
    let completedAt = order.completed_at;

    const eventType = payload.event?.toLowerCase() || payload.status?.toLowerCase();
    
    switch (eventType) {
      case "payment.completed":
      case "payment.success":
      case "completed":
      case "success":
      case "paid":
        newStatus = "paid";
        paidAt = new Date().toISOString();
        console.log("Payment completed for order:", order.order_number);
        break;
      
      case "payment.failed":
      case "payment.declined":
      case "failed":
      case "declined":
        newStatus = "failed";
        console.log("Payment failed for order:", order.order_number);
        break;
      
      case "payment.pending":
      case "pending":
      case "processing":
        newStatus = "processing";
        console.log("Payment processing for order:", order.order_number);
        break;
      
      case "payment.cancelled":
      case "payment.refunded":
      case "cancelled":
      case "refunded":
        newStatus = "cancelled";
        console.log("Payment cancelled/refunded for order:", order.order_number);
        break;
      
      case "payment.expired":
      case "expired":
        newStatus = "expired";
        console.log("Payment expired for order:", order.order_number);
        break;
      
      default:
        console.log("Unknown event type:", eventType);
    }

    // Update order
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        status: newStatus,
        paid_at: paidAt,
        completed_at: completedAt,
        webhook_sent: true,
        webhook_response: payload,
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id);

    if (updateError) {
      console.error("Failed to update order:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update order" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Order updated successfully:", {
      orderId: order.id,
      orderNumber: order.order_number,
      newStatus,
    });

    // If payment completed, increment discount usage if applicable
    if (newStatus === "paid" && order.discount_code_id) {
      const { error: discountError } = await supabase.rpc("increment_discount_usage", {
        _code_id: order.discount_code_id,
      });
      
      if (discountError) {
        console.error("Failed to increment discount usage:", discountError);
      } else {
        console.log("Discount usage incremented for code:", order.discount_code_id);
      }
    }

    return new Response(
      JSON.stringify({ success: true, status: newStatus }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in paytiko-webhook function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
