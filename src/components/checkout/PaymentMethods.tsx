import { CreditCard, Wallet, Bitcoin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PaymentMethod = "card" | "crypto";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("card");

  const methods = [
    {
      id: "card" as PaymentMethod,
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, Amex",
    },
    {
      id: "crypto" as PaymentMethod,
      name: "Cryptocurrency",
      icon: Bitcoin,
      description: "BTC, ETH, USDT",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Payment method selection */}
      <div className="grid grid-cols-2 gap-3">
        {methods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => setSelectedMethod(method.id)}
            className={cn(
              "relative p-4 rounded-xl border transition-all duration-200 text-left",
              selectedMethod === method.id
                ? "border-cyan-500/50 bg-cyan-500/10"
                : "border-white/10 bg-black/20 hover:border-white/20"
            )}
          >
            {selectedMethod === method.id && (
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />
            )}
            <method.icon className={cn(
              "w-6 h-6 mb-2",
              selectedMethod === method.id ? "text-cyan-400" : "text-muted-foreground"
            )} />
            <p className={cn(
              "font-medium text-sm",
              selectedMethod === method.id ? "text-foreground" : "text-muted-foreground"
            )}>
              {method.name}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{method.description}</p>
          </button>
        ))}
      </div>

      {/* Card placeholder */}
      {selectedMethod === "card" && (
        <div className="p-4 rounded-xl bg-black/30 border border-white/10">
          <p className="text-sm text-muted-foreground text-center py-6">
            Card payment form will be integrated with Paytiko
          </p>
        </div>
      )}

      {/* Crypto placeholder */}
      {selectedMethod === "crypto" && (
        <div className="p-4 rounded-xl bg-black/30 border border-white/10">
          <p className="text-sm text-muted-foreground text-center py-6">
            Crypto payment will be integrated with Confirmo
          </p>
        </div>
      )}

      {/* Accepted payment icons */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <span className="text-xs text-muted-foreground">We accept:</span>
        <div className="flex items-center gap-2">
          {["Visa", "MC", "Amex", "BTC", "ETH"].map((brand) => (
            <span 
              key={brand}
              className="px-2 py-1 text-xs bg-white/5 rounded text-muted-foreground border border-white/10"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
