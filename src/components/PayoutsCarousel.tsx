export const PayoutsCarousel = () => {
  const payouts = [
    { amount: "$2,284.38", name: "Yassine", country: "🇨🇦" },
    { amount: "$4,953.00", name: "Muammer", country: "🇩🇪" },
    { amount: "$3,000.00", name: "Bernard", country: "🇦🇪" },
    { amount: "$4,583.97", name: "Kashif", country: "🇵🇰" },
    { amount: "$2,808.70", name: "Vaibhav", country: "🇮🇳" },
    { amount: "$5,782.50", name: "Mohamed", country: "🇸🇬" },
    { amount: "$2,486.25", name: "Jack", country: "🇬🇧" },
    { amount: "$4,091.68", name: "Imran", country: "🇬🇧" },
    { amount: "$3,730.08", name: "Faisal", country: "🇳🇴" },
    { amount: "$4,803.28", name: "Hamza", country: "🇦🇺" },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden bg-card/30">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Real Traders. Real Results.
        </h2>
        <p className="text-lg text-muted-foreground">
          See all payouts on{" "}
          <a
            href="https://arbiscan.io/tokentxns?a=0xB3a371932142975EE482B2ce63f6e0c8FBb80798&p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            here
          </a>
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {[...payouts, ...payouts].map((payout, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{payout.country}</span>
                <span className="text-2xl font-bold text-primary">{payout.amount}</span>
              </div>
              <p className="text-lg font-semibold">{payout.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
