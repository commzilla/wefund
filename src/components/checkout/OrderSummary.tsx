import { Check, Shield, Clock, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";
import mobilePaymentsImage from "@/assets/mobile-pay-methods.png";

interface OrderSummaryProps {
  accountType: string;
  accountSize: string;
  price: string;
  showMobileButton?: boolean;
  isSubmitting?: boolean;
  onSubmit?: () => void;
}

const OrderSummary = ({ accountType, accountSize, price, showMobileButton = false, isSubmitting = false, onSubmit }: OrderSummaryProps) => {
  const benefits = [
    { icon: TrendingUp, text: "100% Profit Split" },
    { icon: Clock, text: "No Time Limit" },
    { icon: Shield, text: "Instant Funding" },
    { icon: Check, text: "Free Retry on Loss" },
  ];

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

          {/* Total */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-foreground">${price}</span>
                <span className="text-sm text-muted-foreground block">One-time payment</span>
              </div>
            </div>
          </div>

          {/* Mobile Complete Purchase Button */}
          {showMobileButton && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={onSubmit}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Complete Purchase - ${price}
                  </span>
                )}
              </Button>

              {/* Payment Icons - Mobile */}
              <div className="flex items-center justify-center mt-4">
                <img src={mobilePaymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[300px] opacity-90" />
              </div>

              {/* Security note */}
              <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Your payment information is encrypted and secure
              </p>
            </div>
          )}

          {/* Trust badges - hide on mobile when button is shown */}
          {!showMobileButton && (
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Instant Access</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
