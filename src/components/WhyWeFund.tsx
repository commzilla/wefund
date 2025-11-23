export const WhyWeFund = () => {
  const benefits = [
    {
      title: "Real Scaling Plan",
      description: "Scale your payout into a 10x account and scale up to $2M in A-book funding.",
    },
    {
      title: "Profit Scaling",
      description: "Trade bigger. Earn bigger.",
    },
    {
      title: "Balance Based Drawdown",
      description: "Allowing traders the freedom to hold positions.",
    },
    {
      title: "No Time Limit",
      description: "Trade at your pace, without time limits or pressure.",
    },
    {
      title: "Competitive Spreads",
      description: "WeFund is dedicated to providing the ultimate trading environment.",
    },
    {
      title: "Fast Payouts",
      description: "Withdraw profits in hours, not days — built for trader speed and flow.",
    },
    {
      title: "Supportive Add-ons",
      description: "Designed to help you stay ahead and trade with confidence.",
    },
    {
      title: "Easy to Read Rules",
      description: "Trust first, then trade with confidence.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Traders Love WeFund</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We empower traders who perform. Our platform rewards consistency, discipline, and growth —
            giving you the tools and capital to scale without limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
