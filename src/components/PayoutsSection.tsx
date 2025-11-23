export const PayoutsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Payouts Made Easy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience a payout system designed for real traders – fast, transparent, and effortless,
            so you can focus on performance and real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold">Daily Payouts</h3>
            <p className="text-muted-foreground">
              No more waiting for your profits. The 10X Trader Program lets you withdraw daily,
              directly from your broker account – no approval process, no delays.
            </p>
            <p className="text-sm text-primary">3 hours avg. process time</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold">Lightning Fast Payouts</h3>
            <p className="text-muted-foreground">
              Enjoy the industry's fastest payouts – processing that delivers your profits without
              delay. Fast, easy, and completely hassle-free.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💯</span>
            </div>
            <h3 className="text-2xl font-bold">Keep up to 100% of your profits</h3>
            <p className="text-muted-foreground">
              Unlock up to 100% of your profits. Every trade you win is yours to withdraw.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
