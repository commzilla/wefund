import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, Lock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";
import paymentsImage from "@/assets/payments.png";
import mobilePaymentsImage from "@/assets/mobile-pay-methods.png";
import PaymentMethods from "./PaymentMethods";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  country: z.string().min(1, "Please select a country"),
  streetAddress: z.string().min(3, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  discountCode: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  accountType: string;
  accountSize: string;
  price: string;
  onSubmitForm?: () => void;
  isMobile?: boolean;
}

const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Brazil" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CR", name: "Costa Rica" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Greece" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "North Korea" },
  { code: "KR", name: "South Korea" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "MK", name: "North Macedonia" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestine" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TW", name: "Taiwan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VA", name: "Vatican City" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

const CheckoutForm = ({ accountType, accountSize, price, onSubmitForm, isMobile = false }: CheckoutFormProps) => {
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
      streetAddress: "",
      city: "",
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

            <div>
              <Label htmlFor="streetAddress" className="text-muted-foreground mb-2 block">Street Address</Label>
              <Input
                id="streetAddress"
                type="text"
                placeholder="123 Main Street"
                className="bg-black/40 border-white/10 focus:border-cyan-500/50 h-12 text-foreground placeholder:text-muted-foreground"
                {...register("streetAddress")}
              />
              {errors.streetAddress && (
                <p className="text-red-400 text-sm mt-1">{errors.streetAddress.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="city" className="text-muted-foreground mb-2 block">Town / City</Label>
              <Input
                id="city"
                type="text"
                placeholder="New York"
                className="bg-black/40 border-white/10 focus:border-cyan-500/50 h-12 text-foreground placeholder:text-muted-foreground"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
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

        {/* Submit Button - Hidden on mobile (shown in OrderSummary) */}
        {!isMobile && (
          <>
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

            {/* Payment Icons - Desktop */}
            <div className="flex items-center justify-center mt-6">
              <img src={paymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[360px] opacity-90" />
            </div>

            {/* Security note */}
            <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Your payment information is encrypted and secure
            </p>
          </>
        )}

        {/* Payment Icons - Mobile only */}
        {isMobile && (
          <div className="flex items-center justify-center mt-4">
            <img src={mobilePaymentsImage} alt="Payment Methods" className="w-full h-auto max-w-[300px] opacity-90" />
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
