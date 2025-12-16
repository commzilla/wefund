import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, CreditCard, Lock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";
import PaymentMethods from "./PaymentMethods";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  country: z.string().min(1, "Please select a country"),
  discountCode: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  accountType: string;
  accountSize: string;
  price: string;
}

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "IN", name: "India" },
  { code: "PK", name: "Pakistan" },
  { code: "SG", name: "Singapore" },
  { code: "NO", name: "Norway" },
  { code: "HK", name: "Hong Kong" },
  { code: "OM", name: "Oman" },
];

const CheckoutForm = ({ accountType, accountSize, price }: CheckoutFormProps) => {
  const [showDiscount, setShowDiscount] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      fullName: "",
      country: "",
      discountCode: "",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Checkout data:", { ...data, accountType, accountSize, price });
    
    toast({
      title: "Order Submitted! 🎉",
      description: "Payment integration coming soon. Your order details have been logged.",
    });
    
    setIsSubmitting(false);
  };

  return (
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

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 p-6 lg:p-8">
        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-sm flex items-center justify-center">1</span>
            Contact Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-muted-foreground mb-2 block">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-black/40 border-white/10 focus:border-cyan-500/50 h-12 text-foreground placeholder:text-muted-foreground"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="fullName" className="text-muted-foreground mb-2 block">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className="bg-black/40 border-white/10 focus:border-cyan-500/50 h-12 text-foreground placeholder:text-muted-foreground"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="country" className="text-muted-foreground mb-2 block">Country</Label>
              <div className="relative">
                <select
                  id="country"
                  className="w-full h-12 px-4 pr-10 bg-black/40 border border-white/10 rounded-md text-foreground focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 appearance-none cursor-pointer"
                  {...register("country")}
                >
                  <option value="" className="bg-slate-900">Select your country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code} className="bg-slate-900">
                      {country.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              </div>
              {errors.country && (
                <p className="text-red-400 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Discount Code */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setShowDiscount(!showDiscount)}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            <Tag className="w-4 h-4" />
            {showDiscount ? "Hide discount code" : "Have a discount code?"}
          </button>
          
          {showDiscount && (
            <div className="mt-3">
              <Input
                type="text"
                placeholder="Enter code"
                className="bg-black/40 border-white/10 focus:border-cyan-500/50 h-12 text-foreground placeholder:text-muted-foreground"
                {...register("discountCode")}
              />
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-sm flex items-center justify-center">2</span>
            Payment Method
          </h3>
          
          <PaymentMethods />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
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

        {/* Security note */}
        <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          Your payment information is encrypted and secure
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
