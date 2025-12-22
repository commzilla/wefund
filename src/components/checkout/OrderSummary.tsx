import { useState } from "react";
import { Check, Shield, Clock, TrendingUp, Lock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";
import paymentsImage from "@/assets/payments.png";
import mobilePaymentsImage from "@/assets/mobile-pay-methods.png";
import trustBadgeIcon from "@/assets/trust-badge-icon.png";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductAddon {
  id: string;
  name: string;
  description: string | null;
  price_type: string;
  price_value: number;
}

interface OrderSummaryProps {
  accountType: string;
  accountSize: string;
  price: string;
  addons?: ProductAddon[];
  selectedAddons?: string[];
  onToggleAddon?: (addonId: string) => void;
  addonsTotal?: number;
  isSubmitting?: boolean;
  onSubmit?: () => void;
}

const OrderSummary = ({ 
  accountType, 
  accountSize, 
  price, 
  addons = [], 
  selectedAddons = [], 
  onToggleAddon,
  addonsTotal = 0,
  isSubmitting = false, 
  onSubmit 
}: OrderSummaryProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const isMobile = useIsMobile();

  const basePrice = parseFloat(price);
  const totalPrice = (basePrice + addonsTotal).toFixed(2);

  const benefits = [
    { icon: TrendingUp, text: "100% Profit Split" },
    { icon: Clock, text: "No Time Limit" },
    { icon: Shield, text: "Instant Funding" },
    { icon: Check, text: "Free Retry on Loss" },
  ];

  const handleSubmit = () => {
    if (!termsAccepted) return;
    onSubmit?.();
  };

  return (
    <div className="lg:sticky lg:top-6">
      <div 
        className="relative rounded-2xl overflow-hidden border border-cyan-500/20"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(23, 37, 84, 0.6) 100%)',
        }}
      >
        {/* Background texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${cardsCarouselBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 p-6 lg:p-8">
          {/* Header */}
          <h2 className="text-lg font-semibold text-foreground mb-6">Order Summary</h2>
          
          {/* Account Type Badge */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <span className="text-muted-foreground">Challenge Type</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {accountType}
            </span>
          </div>

          {/* Account Size */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <span className="text-muted-foreground">Account Size</span>
            <span className="text-xl font-bold text-foreground">${accountSize}</span>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <span className="text-sm text-muted-foreground mb-3 block">What's Included</span>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <benefit.icon className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-sm text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons Section */}
          {addons.length > 0 && (
            <div className="mb-6">
              <span className="text-sm text-muted-foreground mb-3 block">Available Add-ons</span>
              <div className="space-y-3">
                {addons.map((addon) => (
                  <div 
                    key={addon.id}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      selectedAddons.includes(addon.id) 
                        ? 'bg-cyan-500/10 border border-cyan-500/30' 
                        : 'bg-black/20 border border-white/5 hover:border-white/10'
                    }`}
                    onClick={() => onToggleAddon?.(addon.id)}
                  >
                    <Checkbox
                      checked={selectedAddons.includes(addon.id)}
                      onCheckedChange={() => onToggleAddon?.(addon.id)}
                      className="mt-0.5 border-white/20 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{addon.name}</span>
                        <span className={`text-sm font-semibold ${addon.price_type === 'free' ? 'text-green-400' : 'text-cyan-400'}`}>
                          {addon.price_type === 'free' ? (
                            <span className="flex items-center gap-1">
                              <Gift className="w-3 h-3" /> Free
                            </span>
                          ) : (
                            `+$${addon.price_value}`
                          )}
                        </span>
                      </div>
                      {addon.description && (
                        <p className="text-xs text-muted-foreground mt-0.5">{addon.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Total */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${price}</span>
            </div>
            {addonsTotal > 0 && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Add-ons</span>
                <span className="text-foreground">+${addonsTotal.toFixed(2)}</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <span className="text-muted-foreground">Total</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-foreground">${totalPrice}</span>
                <span className="text-sm text-muted-foreground block">One-time payment</span>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your personal data will be used to process your order, support your experience throughout this website,
              and for other purposes described in our{" "}
              <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                privacy policy
              </a>.
            </p>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mt-4 flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              className="mt-0.5 border-white/20 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
            />
            <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              I have read and agree to the website{" "}
              <a href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                Privacy Policy
              </a>
              . *
            </label>
          </div>

          {/* Complete Purchase Button */}
          <div className="mt-6">
            <Button
              type="button"
              disabled={isSubmitting || !termsAccepted}
              onClick={handleSubmit}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Complete Purchase - ${totalPrice}
                </span>
              )}
            </Button>

            {/* Payment Icons */}
            <div className="flex items-center justify-center mt-4">
              <img 
                src={isMobile ? mobilePaymentsImage : paymentsImage} 
                alt="Payment Methods" 
                className={`w-full h-auto opacity-90 ${isMobile ? 'max-w-[300px]' : 'max-w-[360px]'}`}
              />
            </div>

            {/* Security note */}
            <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Your payment information is encrypted and secure
            </p>
          </div>

          {/* Trust Banner */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div 
              className="rounded-xl px-4 py-3 flex items-center justify-between gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              }}
            >
              <div className="flex items-center gap-3">
                <img 
                  src={trustBadgeIcon} 
                  alt="Trust Badge" 
                  className="w-8 h-8"
                  style={{ filter: 'invert(58%) sepia(89%) saturate(1000%) hue-rotate(155deg) brightness(95%) contrast(101%)' }}
                />
                <p className="text-xs text-foreground leading-tight">
                  Trusted by traders in 120+<br />
                  countries worldwide
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">
                  <span className="text-cyan-400">$400K+</span>{" "}
                  <span className="text-foreground">Paid Out</span>
                </p>
                <p className="text-[10px] text-muted-foreground">
                  In rewards under 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;