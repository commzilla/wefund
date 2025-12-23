import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAnalytics } from "@/hooks/useAnalytics";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Footer } from "@/components/Footer";

interface ProductAddon {
  id: string;
  name: string;
  description: string | null;
  price_type: string;
  price_value: number;
}

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { trackCheckoutInitiated, trackAddonSelected } = useAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addons, setAddons] = useState<ProductAddon[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  const type = searchParams.get("type") || "1step-algo";
  const productId = searchParams.get("productId") || "";
  const size = searchParams.get("size") || "100k";
  const price = searchParams.get("price") || "547";

  // Track checkout initiation on mount
  useEffect(() => {
    trackCheckoutInitiated({
      productId,
      accountType: type,
      accountSize: size,
      price,
    });
  }, []);

  useEffect(() => {
    if (productId) {
      fetchAddons(productId);
    }
  }, [productId]);

  const fetchAddons = async (prodId: string) => {
    const { data, error } = await supabase
      .from('product_addons')
      .select('id, name, description, price_type, price_value')
      .contains('applies_to_products', [prodId])
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (!error && data) {
      setAddons(data);
    }
  };

  const toggleAddon = (addonId: string) => {
    const addon = addons.find(a => a.id === addonId);
    const isSelected = selectedAddons.includes(addonId);
    
    if (addon) {
      trackAddonSelected(addonId, addon.name, addon.price_value, !isSelected);
    }
    
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const calculateAddonsTotal = () => {
    return addons
      .filter(addon => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + (addon.price_type === 'fixed' ? addon.price_value : 0), 0);
  };

  const getAccountTypeName = (type: string) => {
    switch (type) {
      case "1step-algo": return "1 Step - Algo";
      case "1step-pro": return "1 Step - Pro";
      case "2step": return "2 Step";
      default: return "1 Step - Algo";
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Order Submitted! 🎉",
      description: "Payment integration coming soon. Your order details have been logged.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-6 lg:py-12">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Challenge Selection
        </Button>

        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Secure Checkout
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Complete Your <span className="text-cyan-400">Challenge</span>
          </h1>
        </div>

        {/* Main content - two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Left column - Form */}
          <div className="order-2 lg:order-1">
            <CheckoutForm 
              accountType={getAccountTypeName(type)}
              accountSize={size}
              price={price}
            />
          </div>

          {/* Right column - Order Summary */}
          <div className="order-1 lg:order-2">
            <OrderSummary 
              accountType={getAccountTypeName(type)}
              accountSize={size}
              price={price}
              addons={addons}
              selectedAddons={selectedAddons}
              onToggleAddon={toggleAddon}
              addonsTotal={calculateAddonsTotal()}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Checkout;
