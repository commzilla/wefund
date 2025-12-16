import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import wefundTextLogo from "@/assets/wefund-text-logo.png?format=webp&quality=80";
import heroBackground from "@/assets/hero-background-new.png?format=webp&quality=80";
import tradersFundedImage from "@/assets/mobile-traders-funded-image-1.png?format=webp&quality=75";
import communityUsersImage from "@/assets/Group-48161.webp";
import countriesImage from "@/assets/bg-image-countries.png?format=webp&quality=75";
import aBookImage from "@/assets/a-book-execution.png?format=webp&quality=75";
import scalingPlanImage from "@/assets/scaling-plan.png?format=webp&quality=75";
import futureImage from "@/assets/future-prop-trading.png?format=webp&quality=75";
import payoutsProcessedImage from "@/assets/payouts-processed-bg.png?format=webp&quality=75";
import highestPayoutImage from "@/assets/highest-payout-bg.png?format=webp&quality=75";
import avgPayoutImage from "@/assets/avg-payout-bg.png?format=webp&quality=75";
import heroTrustBadge from "@/assets/hero-trust.png?format=webp&quality=80";
import trustpilotBadge from "@/assets/trustpilot-hero.png";
import ttpBadge from "@/assets/trustedprop-hero.png";
import itemIcon1 from "@/assets/item-icon-1.png";
import itemIcon2 from "@/assets/item-icon-2.png";
import itemIcon3 from "@/assets/item-icon-3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const CommunityCard = () => (
  <div className="bg-black border border-border/40 rounded-2xl pt-3 px-3 pb-1 hover:border-primary/50 transition-all h-full">
    <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
      <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span className="text-xs md:text-sm font-medium">Community</span>
    </div>
    
    <div className="relative mb-2">
      <img src={tradersFundedImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
      <div className="absolute top-3 md:top-4 left-3 md:left-4">
        <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">180+</div>
        <div className="text-xs md:text-sm text-muted-foreground">Traders Max Funded</div>
      </div>
    </div>

    <div className="relative mb-2">
      <img src={communityUsersImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
      <div className="absolute top-1/2 right-3 md:right-4 -translate-y-1/2 text-right">
        <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">2,000+</div>
        <div className="text-xs md:text-sm text-muted-foreground">Active Traders</div>
      </div>
    </div>

    <div className="relative">
      <img src={countriesImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
      <div className="absolute top-1/2 left-3 md:left-4 -translate-y-1/2">
        <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">128</div>
        <div className="text-xs md:text-sm text-muted-foreground">Countries</div>
      </div>
    </div>
  </div>
);

const TraderCard = () => (
  <div className="bg-black border border-border/40 rounded-2xl pt-3 px-3 pb-1 hover:border-primary/50 transition-all h-full">
    <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
      <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span className="text-xs md:text-sm font-medium">10X Trader</span>
    </div>
    
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-2">
        <div className="relative">
          <img src={aBookImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
            <div className="text-xl md:text-3xl font-bold text-foreground mb-1">A-Book</div>
            <div className="text-xs md:text-sm text-muted-foreground">Execution</div>
          </div>
        </div>

        <div className="relative">
          <img src={scalingPlanImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
            <div className="text-xl md:text-3xl font-bold text-foreground mb-1">$2m</div>
            <div className="text-xs md:text-sm text-muted-foreground">Scaling Plan</div>
          </div>
        </div>
      </div>

      <div className="relative flex items-end justify-center pb-5">
        <img src={futureImage} alt="" className="w-full h-full object-cover rounded-xl border border-border/50" loading="lazy" />
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-2 md:px-4">
          <div className="text-lg md:text-2xl font-bold text-foreground mb-1">The Future</div>
          <div className="text-xs md:text-sm text-muted-foreground">of Prop Trading</div>
        </div>
      </div>
    </div>
  </div>
);

const PayoutsCard = () => (
  <div className="bg-black border border-border/40 rounded-2xl pt-3 px-3 pb-1 hover:border-primary/50 transition-all h-full">
    <div className="flex items-center gap-2 text-muted-foreground mb-2 px-1">
      <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-xs md:text-sm font-medium">Payouts</span>
    </div>
    
    <div className="space-y-2">
      <div className="relative">
        <img src={payoutsProcessedImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
        <div className="absolute top-3 md:top-4 left-3 md:left-4">
          <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">500+</div>
          <div className="text-xs md:text-sm text-muted-foreground">Payouts Processed</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <img src={highestPayoutImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
          <div className="absolute bottom-3 md:bottom-4 left-2 md:left-4">
            <div className="text-lg md:text-3xl font-bold text-foreground mb-1">$5,782.50</div>
            <div className="text-[10px] md:text-sm text-muted-foreground">Highest Payout</div>
          </div>
        </div>

        <div className="relative">
          <img src={avgPayoutImage} alt="" className="w-full h-auto rounded-xl border border-border/50" loading="lazy" />
          <div className="absolute bottom-3 md:bottom-4 left-2 md:left-4">
            <div className="text-lg md:text-3xl font-bold text-foreground mb-1">$1,228</div>
            <div className="text-[10px] md:text-sm text-muted-foreground">Average Payout</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mobile Feature Item component
const MobileFeatureItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/50 rounded-xl px-4 py-3">
    <img src={icon} alt="" className="w-5 h-5" />
    <span className="text-sm text-muted-foreground">{text}</span>
  </div>
);

export const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24">
      {/* Hero Background */}
      <img 
        src={heroBackground} 
        alt="" 
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
        fetchPriority="high"
      />
      {/* Fade to black gradient at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-12 text-center">
        {/* Trust Badges - Desktop */}
        <div className="hidden md:flex items-center justify-center gap-3 mb-8">
          <img 
            src="/images/mt5-badge.webp" 
            alt="MetaTrader 5" 
            width="149"
            height="40"
            className="h-12 animate-glow" 
            fetchPriority="high"
          />
          <img src={heroTrustBadge} alt="TTP The Trusted Prop - Trustpilot" className="h-12" />
        </div>

        {/* MT5 Badge - Mobile Only */}
        <div className="md:hidden flex justify-center mb-6">
          <img 
            src="/images/mt5-badge.webp" 
            alt="MetaTrader 5" 
            width="149"
            height="40"
            className="h-10 animate-glow" 
            fetchPriority="high"
          />
        </div>

        {/* Main Headline - Desktop */}
        <h1 className="hidden md:flex items-center justify-center gap-4 text-6xl lg:text-8xl font-extrabold text-foreground mb-6 leading-none flex-wrap">
          <span>You Trade,</span>
          <img src={wefundTextLogo} alt="We Fund" className="h-[0.7em] inline-block align-baseline" />
        </h1>

        {/* Main Headline - Mobile */}
        <h1 className="md:hidden flex flex-col items-center text-5xl font-extrabold text-foreground mb-4 leading-tight">
          <span>You Trade,</span>
          <img src={wefundTextLogo} alt="We Fund" className="h-[0.7em] mt-1" />
        </h1>

        {/* Subtitle - Desktop */}
        <p className="hidden md:block text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed px-2">
          Get Funded up to $400K with the Most Trusted Prop Firm, Get Payouts with Profit Splits Up To 100%,
          <br />
          And Scale Up to $2M – <span className="text-foreground font-semibold">This Is The Future Of Prop Trading</span>
        </p>

        {/* Subtitle - Mobile */}
        <p className="md:hidden text-sm text-muted-foreground mb-6">
          Get Funded with the <span className="text-foreground font-semibold">Most Trusted Prop Firm</span>
        </p>

        {/* Mobile Feature Items */}
        <div className="md:hidden flex flex-col gap-2 mb-6 px-2">
          <MobileFeatureItem icon={itemIcon1} text="Zero reward denials" />
          <MobileFeatureItem icon={itemIcon2} text="Fair and simple trading rules" />
          <MobileFeatureItem icon={itemIcon3} text="Keep up to 100% of your profits" />
        </div>

        {/* CTAs - Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 px-8 py-6 text-base font-semibold rounded-lg">
            Start Now
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 bg-card/30 hover:bg-card/50 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-lg">
            Dashboard
          </Button>
        </div>

        {/* CTA - Mobile */}
        <div className="md:hidden mb-6 px-2">
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 py-6 text-base font-semibold rounded-xl">
            Start Now
          </Button>
        </div>

        {/* Mobile Trust Badges */}
        <div className="md:hidden flex flex-col gap-3 px-2 mb-6">
          <img src={trustpilotBadge} alt="Trustpilot Rating" className="w-full h-auto" />
          <img src={ttpBadge} alt="The Trusted Prop Rating" className="w-full h-auto" />
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-4 px-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full min-h-[315px]"
          >
            <CarouselContent className="-ml-2">
              <CarouselItem className="pl-2 basis-[95%]">
                <CommunityCard />
              </CarouselItem>
              <CarouselItem className="pl-2 basis-[95%]">
                <TraderCard />
              </CarouselItem>
              <CarouselItem className="pl-2 basis-[95%]">
                <PayoutsCard />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index 
                    ? "bg-white w-3" 
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Stats Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mt-8 md:mt-16 px-2 md:px-4">
          <CommunityCard />
          <TraderCard />
          <PayoutsCard />
        </div>
      </div>
    </section>
  );
};
