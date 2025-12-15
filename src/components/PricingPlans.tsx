import { Button } from "@/components/ui/button";
import cardsCarouselBg from "@/assets/cards-carousel-bg-2.png";

export const PricingPlans = () => {
  const plans = [
    {
      name: "2-Step Account",
      subtitle: "The Traditional Way of Prop Trading",
      price: "$35",
      features: [
        "Payout on Demand",
        "8% + 5% Profit Targets",
        "Up to 90% Profit Split",
        "Unlimited Trading Days",
        "Refundable Fee",
      ],
      popular: false,
    },
    {
      name: "1-Step Account",
      subtitle: "Your Fast-Track to Trading Success",
      price: "$110",
      features: [
        "HFT/Algo Allowed",
        "$400k Max Allocation",
        "No News Restrictions",
        "No Minimum Trading days",
        "Bi-weekly Add-on available",
        "Crypto Weekend Trading",
        "Scale Your Payout into 10X",
      ],
      popular: true,
    },
    {
      name: "10X Trader",
      subtitle: "Introducing the Future of Prop Trading",
      price: "Deposit with Your Broker",
      features: [
        "Daily Payouts",
        "100% Profit Split",
        "No Trading Restrictions",
        "Scale up to $2m",
        "Only 1 Trading Rule",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Fuel Your Passion. Fund Your Potential.
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Choose the program that fits your strategy, risk profile, and goals. Whether you're
            starting out or scaling up — we've built a path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-[2px] rounded-[28px] bg-gradient-to-br ${
                plan.popular 
                  ? "from-cyan-400/80 via-cyan-500/60 via-30% to-slate-900/80" 
                  : "from-cyan-400/40 via-cyan-500/20 via-30% to-slate-900/80"
              } overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] ${
                plan.popular ? "scale-105 z-10" : ""
              }`}
            >
              {/* Border glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-900/40 to-cyan-400/30 blur-[1px]" />
              
              {/* Card inner content */}
              <div 
                className="relative rounded-[26px] bg-gradient-to-br from-slate-900/98 via-slate-950/95 to-blue-950/90 backdrop-blur-sm overflow-hidden h-full"
                style={{ 
                  backgroundImage: `url(${cardsCarouselBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />
                
                {/* Inner stars */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-[1px] h-[1px] bg-white/30 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Inner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px]" />

                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div className="w-px h-3 bg-cyan-400/40"></div>
                    <span className="text-[11px] px-4 py-1.5 bg-slate-900/70 text-cyan-300 rounded-full whitespace-nowrap font-semibold border border-cyan-400/30 shadow-lg backdrop-blur-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 p-8 pt-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-cyan-400">{plan.price}</span>
                    {plan.price.startsWith("$") && (
                      <span className="text-sm text-slate-500 ml-1">/starting</span>
                    )}
                  </div>

                  <div className="space-y-3 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full mt-8 rounded-xl py-6 font-semibold text-base transition-all ${
                      plan.popular 
                        ? "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)]" 
                        : "bg-slate-800/60 hover:bg-slate-700/60 text-white border border-cyan-500/30"
                    }`}
                  >
                    Join the Challenge
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
