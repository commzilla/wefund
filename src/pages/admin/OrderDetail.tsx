import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, User, Package, CreditCard, MapPin, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface OrderDetail {
  id: string;
  order_number: number;
  status: string;
  subtotal: number;
  discount_total: number;
  total: number;
  payment_method: string | null;
  payment_id: string | null;
  affiliate_code: string | null;
  notes: string | null;
  webhook_sent: boolean;
  created_at: string;
  paid_at: string | null;
  completed_at: string | null;
  customer: {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    address_1: string | null;
    city: string | null;
    country: string | null;
  } | null;
  items: {
    id: string;
    product_name: string;
    variant_sku: string;
    account_size: number;
    price: number;
    quantity: number;
  }[];
  addons: {
    id: string;
    addon_name: string;
    price: number;
  }[];
}

export default function AdminOrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (id) fetchOrder(id);
  }, [id]);

  const fetchOrder = async (orderId: string) => {
    try {
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .select(`
          *,
          customer:customers(*),
          items:order_items(*),
          addons:order_addons(*)
        `)
        .eq('id', orderId)
        .single();

      if (orderError) throw orderError;
      setOrder(orderData);
    } catch (error) {
      console.error('Error fetching order:', error);
      toast({
        title: "Error",
        description: "Failed to load order",
        variant: "destructive"
      });
      navigate('/admin/orders');
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (newStatus: string) => {
    if (!order) return;
    setIsUpdating(true);

    try {
      const updates: any = { status: newStatus };
      if (newStatus === 'completed') {
        updates.completed_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('orders')
        .update(updates)
        .eq('id', order.id);

      if (error) throw error;

      toast({ title: `Order status updated to ${newStatus}` });
      fetchOrder(order.id);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Skeleton className="h-64 lg:col-span-2" />
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/admin/orders')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">
              Order #{order.order_number}
            </h1>
            <StatusBadge status={order.status} />
          </div>
          <p className="text-muted-foreground">
            {format(new Date(order.created_at), 'MMMM d, yyyy \'at\' HH:mm')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select 
            value={order.status} 
            onValueChange={updateStatus}
            disabled={isUpdating}
          >
            <SelectTrigger className="w-40">
              {isUpdating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <SelectValue />
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Items */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" /> Order Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                  >
                    <div>
                      <p className="font-medium">{item.product_name}</p>
                      <p className="text-sm text-muted-foreground">
                        SKU: {item.variant_sku} • Account Size: ${item.account_size.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${Number(item.price).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}

                {order.addons.length > 0 && (
                  <>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground mb-2">Add-ons</p>
                      {order.addons.map((addon) => (
                        <div 
                          key={addon.id}
                          className="flex items-center justify-between py-2"
                        >
                          <span>{addon.addon_name}</span>
                          <span>${Number(addon.price).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Totals */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${Number(order.subtotal).toFixed(2)}</span>
                  </div>
                  {Number(order.discount_total) > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="text-green-500">-${Number(order.discount_total).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${Number(order.total).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" /> Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Payment Method</p>
                  <p className="font-medium">{order.payment_method || '-'}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Payment ID</p>
                  <p className="font-medium font-mono text-xs">{order.payment_id || '-'}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Affiliate Code</p>
                  <p className="font-medium">{order.affiliate_code || '-'}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Webhook Sent</p>
                  <p className="font-medium">{order.webhook_sent ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" /> Customer
              </CardTitle>
            </CardHeader>
            <CardContent>
              {order.customer ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium text-primary">
                        {order.customer.first_name?.[0] || order.customer.email[0].toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">
                        {order.customer.first_name} {order.customer.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                    </div>
                  </div>
                  {order.customer.phone && (
                    <div className="text-sm">
                      <p className="text-muted-foreground">Phone</p>
                      <p>{order.customer.phone}</p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground">Guest checkout</p>
              )}
            </CardContent>
          </Card>

          {/* Billing Address */}
          {order.customer?.address_1 && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" /> Billing Address
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>{order.customer.address_1}</p>
                <p>
                  {order.customer.city}
                  {order.customer.country && `, ${order.customer.country}`}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Timeline */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium">Order Created</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(order.created_at), 'MMM d, yyyy HH:mm')}
                    </p>
                  </div>
                </div>
                {order.paid_at && (
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="text-sm font-medium">Payment Received</p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(order.paid_at), 'MMM d, yyyy HH:mm')}
                      </p>
                    </div>
                  </div>
                )}
                {order.completed_at && (
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="text-sm font-medium">Order Completed</p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(order.completed_at), 'MMM d, yyyy HH:mm')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
