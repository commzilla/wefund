import { Button } from "@/components/ui/button";
import wefundTextLogo from "@/assets/wefund-text-logo.png";
import heroBackground from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <img 
        src={heroBackground} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover object-[center_50%]"
      />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <div className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-full" />
            <span className="text-sm text-foreground">MetaTrader 5</span>
          </div>
          <div className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 flex items-center gap-2">
            <span className="text-sm text-foreground">TTP The Trusted Prop</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-green-500 rounded-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight flex items-center justify-center gap-4 flex-wrap">
          <span>You Trade,</span>
          <img src={wefundTextLogo} alt="WeFund" className="h-10 md:h-14 inline-block align-middle" />
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
          Get Funded up to $400K with the Most Trusted Prop Firm, Get Payouts with Profit Splits Up To 100%,
          <br />
          And Scale Up to $2M – <span className="text-foreground font-semibold">This Is The Future Of Prop Trading</span>
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 px-8">
            Start Now
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-card">
            Dashboard
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          {/* Community Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <div className="w-5 h-5 bg-primary/20 rounded-full" />
              <span className="text-sm">Community</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-foreground">180+</span>
                <div className="text-sm text-muted-foreground">Traders Max Funded</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-foreground">2,000+</span>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-foreground">128</span>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* 10X Trader Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <div className="w-5 h-5 bg-primary/20 rounded-full" />
              <span className="text-sm">10X Trader</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">A-Book</div>
                <div className="text-sm text-muted-foreground">Execution</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">$2m</div>
                <div className="text-sm text-muted-foreground">Scaling Plan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">The Future</div>
                <div className="text-sm text-muted-foreground">of Prop Trading</div>
              </div>
            </div>
          </div>

          {/* Payouts Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <div className="w-5 h-5 bg-primary/20 rounded-full" />
              <span className="text-sm">Payouts</span>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-4xl font-bold text-foreground">500+</span>
                <div className="text-sm text-muted-foreground mt-1">Payouts Processed</div>
              </div>
              <div>
                <span className="text-4xl font-bold text-primary">$5,782.50</span>
                <div className="text-sm text-muted-foreground mt-1">Highest Payout</div>
              </div>
              <div>
                <span className="text-4xl font-bold text-foreground">$1,228</span>
                <div className="text-sm text-muted-foreground mt-1">Average Payout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
