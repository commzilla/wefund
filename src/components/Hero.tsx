import { Button } from "@/components/ui/button";
import wefundTextLogo from "@/assets/wefund-text-logo.png";
import heroBackground from "@/assets/hero-background-new.png";
import tradersFundedImage from "@/assets/mobile-traders-funded-image-1.png";
import communityUsersImage from "@/assets/Group-48161.webp";
import countriesImage from "@/assets/bg-image-countries.png";
import aBookImage from "@/assets/a-book-execution.png";
import scalingPlanImage from "@/assets/scaling-plan.png";
import futureImage from "@/assets/future-prop-trading.png";
import payoutsProcessedImage from "@/assets/payouts-processed-bg.png";
import highestPayoutImage from "@/assets/highest-payout-bg.png";
import avgPayoutImage from "@/assets/avg-payout-bg.png";
import mt5Logo from "@/assets/mt5-logo.png";
import trustStars from "@/assets/trust-stars.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero Background */}
      <img 
        src={heroBackground} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
      />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {/* MetaTrader 5 Badge */}
          <div className="px-3 py-2 bg-card/40 backdrop-blur-sm rounded-full border border-primary/40">
            <img src={mt5Logo} alt="MetaTrader 5" className="h-6" />
          </div>
          
          {/* TTP Trustpilot Badge */}
          <div className="px-4 py-2 bg-card/40 backdrop-blur-sm rounded-full border border-primary/40 flex items-center gap-2.5">
            <span className="text-xs font-medium text-foreground">TTP The Trusted Prop</span>
            <img src={trustStars} alt="Trustpilot 5 stars" className="h-4" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="flex items-center justify-center gap-4 text-6xl md:text-8xl font-bold text-foreground mb-6 leading-none flex-wrap">
          <span>You Trade,</span>
          <img src={wefundTextLogo} alt="We Fund" className="h-[0.7em] inline-block align-baseline" />
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          Get Funded up to $400K with the Most Trusted Prop Firm, Get Payouts with Profit Splits Up To 100%,
          <br />
          And Scale Up to $2M – <span className="text-foreground font-semibold">This Is The Future Of Prop Trading</span>
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 px-8 py-6 text-base font-semibold rounded-lg">
            Start Now
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 bg-card/30 hover:bg-card/50 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-lg">
            Dashboard
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16 px-4">
          {/* Community Card */}
          <div className="bg-black border border-border/40 rounded-2xl pt-3 px-3 pb-1 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium">Community</span>
            </div>
            
            {/* Top Section - 180+ Traders Max Funded */}
            <div className="relative mb-2">
              <img src={tradersFundedImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
              <div className="absolute top-4 left-4">
                <div className="text-4xl font-bold text-foreground mb-1">180+</div>
                <div className="text-sm text-muted-foreground">Traders Max Funded</div>
              </div>
            </div>

            {/* Middle Section - 2,000+ Active Traders */}
            <div className="relative mb-2">
              <img src={communityUsersImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
              <div className="absolute top-1/2 right-4 -translate-y-1/2 text-right">
                <div className="text-4xl font-bold text-foreground mb-1">2,000+</div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
            </div>

            {/* Bottom Section - 128 Countries */}
            <div className="relative">
              <img src={countriesImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <div className="text-4xl font-bold text-foreground mb-1">128</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* 10X Trader Card */}
          <div className="bg-black border border-border/40 rounded-2xl pt-3 px-3 pb-1 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium">10X Trader</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {/* Left Column - A-Book and $2m */}
              <div className="space-y-2">
                {/* A-Book Execution */}
                <div className="relative">
                  <img src={aBookImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-foreground mb-1">A-Book</div>
                    <div className="text-sm text-muted-foreground">Execution</div>
                  </div>
                </div>

                {/* $2m Scaling Plan */}
                <div className="relative">
                  <img src={scalingPlanImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-foreground mb-1">$2m</div>
                    <div className="text-sm text-muted-foreground">Scaling Plan</div>
                  </div>
                </div>
              </div>

              {/* Right Column - The Future */}
              <div className="relative flex items-end justify-center pb-5">
                <img src={futureImage} alt="" className="w-full h-full object-cover rounded-xl border border-border/50" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-4">
                  <div className="text-2xl font-bold text-foreground mb-1">The Future</div>
                  <div className="text-sm text-muted-foreground">of Prop Trading</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payouts Card */}
          <div className="bg-black border border-border/40 rounded-2xl pt-3 px-3 pb-1 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Payouts</span>
            </div>
            
            <div className="space-y-2">
              {/* 500+ Payouts Processed */}
              <div className="relative">
                <img src={payoutsProcessedImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
                <div className="absolute top-4 left-4">
                  <div className="text-4xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Payouts Processed</div>
                </div>
              </div>

              {/* Highest and Average in 2 columns */}
              <div className="grid grid-cols-2 gap-2">
                {/* Highest Payout */}
                <div className="relative">
                  <img src={highestPayoutImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-foreground mb-1">$5,782.50</div>
                    <div className="text-sm text-muted-foreground">Highest Payout</div>
                  </div>
                </div>

                {/* Average Payout */}
                <div className="relative">
                  <img src={avgPayoutImage} alt="" className="w-full h-auto rounded-xl border border-border/50" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-foreground mb-1">$1,228</div>
                    <div className="text-sm text-muted-foreground">Average Payout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
