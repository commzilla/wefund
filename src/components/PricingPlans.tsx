import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fuel Your Passion. Fund Your Potential.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the program that fits your strategy, risk profile, and goals. Whether you're
            starting out or scaling up — we've built a path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.subtitle}</p>
                <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                {plan.price.startsWith("$") && (
                  <p className="text-sm text-muted-foreground">/starting</p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                  Join the Challenge
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
