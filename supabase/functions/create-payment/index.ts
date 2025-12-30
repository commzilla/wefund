import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PaymentRequest {
  orderId: string;
  amount: number;
  currency: string;
  customerEmail: string;
  customerName: string;
  description: string;
  returnUrl: string;
  cancelUrl: string;
}

interface PaytikoPaymentResponse {
  success: boolean;
  paymentId?: string;
  paymentUrl?: string;
  error?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Create payment function invoked");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const PAYTIKO_API_KEY = Deno.env.get("PAYTIKO_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!PAYTIKO_API_KEY) {
      console.error("PAYTIKO_API_KEY not configured");
      throw new Error("Payment gateway not configured");
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Supabase credentials not configured");
      throw new Error("Database not configured");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const body: PaymentRequest = await req.json();
    console.log("Payment request received:", {
      orderId: body.orderId,
      amount: body.amount,
      currency: body.currency,
      customerEmail: body.customerEmail,
    });

    // Validate required fields
    if (!body.orderId || !body.amount || !body.customerEmail) {
      console.error("Missing required fields:", body);
      return new Response(
        JSON.stringify({ error: "Missing required fields: orderId, amount, customerEmail" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Verify order exists and get details
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", body.orderId)
      .single();

    if (orderError || !order) {
      console.error("Order not found:", body.orderId, orderError);
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Order found:", { orderNumber: order.order_number, total: order.total });

    // Create payment with Paytiko
    // Note: This is a template structure - actual API endpoint and payload
    // should be adjusted based on Paytiko's API documentation
    const paytikoPayload = {
      apiKey: PAYTIKO_API_KEY,
      orderId: body.orderId,
      orderNumber: order.order_number,
      amount: body.amount,
      currency: body.currency || "USD",
      customer: {
        email: body.customerEmail,
        name: body.customerName,
      },
      description: body.description || `Order #${order.order_number}`,
      returnUrl: body.returnUrl,
      cancelUrl: body.cancelUrl,
      metadata: {
        orderId: body.orderId,
        orderNumber: order.order_number,
      },
    };

    console.log("Sending request to Paytiko...");

    // TODO: Replace with actual Paytiko API endpoint
    // This is a placeholder - update with real Paytiko API URL when available
    const PAYTIKO_API_URL = "https://api.paytiko.com/v1/payments";
    
    const paytikoResponse = await fetch(PAYTIKO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PAYTIKO_API_KEY}`,
        "X-API-Key": PAYTIKO_API_KEY,
      },
      body: JSON.stringify(paytikoPayload),
    });

    const paytikoData = await paytikoResponse.json();
    console.log("Paytiko response status:", paytikoResponse.status);
    console.log("Paytiko response:", JSON.stringify(paytikoData));

    if (!paytikoResponse.ok) {
      console.error("Paytiko API error:", paytikoData);
      
      // Update order with error
      await supabase
        .from("orders")
        .update({
          payment_method: "paytiko",
          notes: `Payment creation failed: ${paytikoData.error || paytikoData.message || "Unknown error"}`,
        })
        .eq("id", body.orderId);

      return new Response(
        JSON.stringify({ 
          error: "Payment creation failed", 
          details: paytikoData.error || paytikoData.message 
        }),
        {
          status: paytikoResponse.status,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Update order with payment information
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_method: "paytiko",
        payment_id: paytikoData.paymentId || paytikoData.id,
        payment_url: paytikoData.paymentUrl || paytikoData.redirectUrl || paytikoData.url,
        status: "awaiting_payment",
      })
      .eq("id", body.orderId);

    if (updateError) {
      console.error("Failed to update order:", updateError);
    }

    const response: PaytikoPaymentResponse = {
      success: true,
      paymentId: paytikoData.paymentId || paytikoData.id,
      paymentUrl: paytikoData.paymentUrl || paytikoData.redirectUrl || paytikoData.url,
    };

    console.log("Payment created successfully:", response);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in create-payment function:", error);
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
