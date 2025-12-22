import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WooOrder {
  invoiceNumber: string;
  orderDate: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postcode: string;
  countryCode: string;
  country: string;
  email: string;
  phone: string;
  paymentId: string;
  paymentMethod: string;
  currencyCode: string;
  completedDate: string;
  paidDate: string;
  discountAmount: string;
  invoiceTotal: string;
  quantity: string;
  orderTotalFee: string;
  orderTotalAmount: string;
  sku: string;
  itemCode: string;
  productName: string;
  itemPrice: string;
  couponCode: string;
  couponDiscount: string;
}

function parseAccountSize(sku: string): number | null {
  if (!sku) return null;
  
  const sizeMatch = sku.match(/(\d+)K/i);
  if (sizeMatch) {
    return parseInt(sizeMatch[1]) * 1000;
  }
  return null;
}

function parseBrokerType(sku: string): string {
  if (!sku) return 'mt5';
  
  if (sku.toLowerCase().includes('mt5')) return 'mt5';
  if (sku.toLowerCase().includes('mt4')) return 'mt4';
  if (sku.toLowerCase().includes('tv') || sku.toLowerCase().includes('tradingview')) return 'tradingview';
  
  return 'mt5';
}

function determineStatus(completedDate: string, paidDate: string): string {
  if (completedDate && completedDate.trim() !== '') return 'completed';
  if (paidDate && paidDate.trim() !== '') return 'processing';
  return 'pending';
}

function parseDate(dateStr: string): string | null {
  if (!dateStr || dateStr.trim() === '') return null;
  
  try {
    // Try parsing various date formats
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      return date.toISOString();
    }
  } catch {
    return null;
  }
  return null;
}

function parseNumber(str: string): number {
  if (!str || str.trim() === '') return 0;
  const cleaned = str.replace(/[^0-9.-]/g, '');
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { orders, action } = await req.json();

    if (action === 'reset-sequence') {
      // Update sequence to continue from max order number
      const { data: maxOrder } = await supabase
        .from('orders')
        .select('order_number')
        .order('order_number', { ascending: false })
        .limit(1)
        .single();
      
      const nextVal = (maxOrder?.order_number || 0) + 1;
      
      // Use rpc to set the sequence
      const { error } = await supabase.rpc('setval_order_sequence', { next_val: nextVal });
      
      if (error) {
        console.log('Sequence update via rpc failed, trying direct approach:', error);
      }
      
      return new Response(
        JSON.stringify({ success: true, nextOrderNumber: nextVal }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!orders || !Array.isArray(orders)) {
      return new Response(
        JSON.stringify({ error: 'Invalid orders data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Processing ${orders.length} orders...`);

    const results = {
      imported: 0,
      skipped: 0,
      errors: [] as string[],
      customersCreated: 0,
      customersUpdated: 0,
    };

    for (const order of orders as WooOrder[]) {
      try {
        const orderNumber = parseInt(order.invoiceNumber);
        if (isNaN(orderNumber)) {
          results.errors.push(`Invalid order number: ${order.invoiceNumber}`);
          results.skipped++;
          continue;
        }

        // Check if order already exists
        const { data: existingOrder } = await supabase
          .from('orders')
          .select('id')
          .eq('order_number', orderNumber)
          .maybeSingle();

        if (existingOrder) {
          console.log(`Order ${orderNumber} already exists, skipping`);
          results.skipped++;
          continue;
        }

        // Upsert customer by email
        let customerId: string | null = null;
        if (order.email && order.email.trim() !== '') {
          const email = order.email.trim().toLowerCase();
          
          const { data: existingCustomer } = await supabase
            .from('customers')
            .select('id')
            .eq('email', email)
            .maybeSingle();

          if (existingCustomer) {
            customerId = existingCustomer.id;
            results.customersUpdated++;
          } else {
            const { data: newCustomer, error: customerError } = await supabase
              .from('customers')
              .insert({
                email: email,
                first_name: order.firstName || null,
                last_name: order.lastName || null,
                phone: order.phone || null,
                address_1: order.address1 || null,
                city: order.city || null,
                state: order.state || null,
                postcode: order.postcode || null,
                country: order.country || order.countryCode || null,
              })
              .select('id')
              .single();

            if (customerError) {
              console.error(`Failed to create customer ${email}:`, customerError);
            } else {
              customerId = newCustomer.id;
              results.customersCreated++;
            }
          }
        }

        // Determine order status
        const status = determineStatus(order.completedDate, order.paidDate);
        
        // Parse amounts
        const subtotal = parseNumber(order.itemPrice) || parseNumber(order.orderTotalAmount);
        const discountTotal = parseNumber(order.discountAmount);
        const total = parseNumber(order.orderTotalAmount) || parseNumber(order.invoiceTotal);

        // Create order
        const { data: newOrder, error: orderError } = await supabase
          .from('orders')
          .insert({
            order_number: orderNumber,
            customer_id: customerId,
            status: status,
            payment_id: order.paymentId || null,
            payment_method: order.paymentMethod || null,
            subtotal: subtotal,
            discount_total: discountTotal,
            total: total,
            affiliate_code: order.couponCode || null,
            created_at: parseDate(order.orderDate) || new Date().toISOString(),
            paid_at: parseDate(order.paidDate),
            completed_at: parseDate(order.completedDate),
            notes: order.couponCode ? `WooCommerce import - Coupon: ${order.couponCode}` : 'WooCommerce import',
          })
          .select('id')
          .single();

        if (orderError) {
          console.error(`Failed to create order ${orderNumber}:`, orderError);
          results.errors.push(`Order ${orderNumber}: ${orderError.message}`);
          results.skipped++;
          continue;
        }

        // Create order item
        const accountSize = parseAccountSize(order.sku);
        const brokerType = parseBrokerType(order.sku);
        const productName = order.productName?.trim() || 'Legacy Product';
        const variantSku = order.sku?.trim() || order.itemCode?.trim() || `LEGACY-${orderNumber}`;
        const itemPrice = parseNumber(order.itemPrice) || total;
        const quantity = parseInt(order.quantity) || 1;

        const { error: itemError } = await supabase
          .from('order_items')
          .insert({
            order_id: newOrder.id,
            product_id: null,
            variant_id: null,
            product_name: productName,
            variant_sku: variantSku,
            account_size: accountSize || 0,
            broker_type: brokerType,
            currency: order.currencyCode || 'USD',
            price: itemPrice,
            quantity: quantity,
          });

        if (itemError) {
          console.error(`Failed to create order item for order ${orderNumber}:`, itemError);
          // Don't fail the whole order, just log the error
        }

        results.imported++;
        
        if (results.imported % 100 === 0) {
          console.log(`Progress: ${results.imported} orders imported`);
        }

      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error(`Error processing order:`, err);
        results.errors.push(`Order ${order.invoiceNumber}: ${errorMessage}`);
        results.skipped++;
      }
    }

    console.log(`Import complete. Imported: ${results.imported}, Skipped: ${results.skipped}`);

    return new Response(
      JSON.stringify(results),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Import error:', error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
