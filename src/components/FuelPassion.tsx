import heroBg from "@/assets/herobg.webp";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FuelPassion = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center px-4 bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative w-full max-w-7xl mx-auto py-8 md:py-12 z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Fuel Your Passion. Fund Your Potential.
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto px-4">
            Choose the program that fits your strategy, risk profile, and goals. Whether you're starting out
            or scaling up — we've built a path for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {/* 2-Step Account */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">2-Step Account</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">The Traditional Way of Prop Trading</p>
            
            <div className="mb-2">
              <span className="text-white text-4xl md:text-5xl font-bold">$35</span>
              <span className="text-gray-400 text-sm md:text-base ml-2">/starting</span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-6 md:my-8"></div>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Payout on Demand</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">8% + 5% Profit Targets</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Up to 90% Profit Split</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Unlimited Trading Days</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Refundable Fee</span>
              </div>
            </div>

            <Button className="w-full bg-cyan-900/40 hover:bg-cyan-900/60 text-white border border-cyan-500/30 rounded-xl py-6 md:py-7 text-sm md:text-base font-medium">
              Join the Challenge
            </Button>
          </div>

          {/* 1-Step Account - Most Popular */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm border-2 border-cyan-400/50 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(34,211,238,0.3)] relative md:scale-105">
            <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
              <h3 className="text-white text-2xl md:text-3xl font-bold">1-Step Account</h3>
              <span className="bg-cyan-400 text-slate-900 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold">
                Most popular
              </span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">Your Fast-Track to Trading Success</p>
            
            <div className="mb-2">
              <span className="text-white text-4xl md:text-5xl font-bold">$110</span>
              <span className="text-gray-400 text-sm md:text-base ml-2">/starting</span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-6 md:my-8"></div>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">HFT/Algo Allowed</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">$400k Max Allocation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">No News Restrictions</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">No Minimum Trading days</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Bi-weekly Add-on available</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Crypto Weekend Trading</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Scale Your Payout into 10X</span>
              </div>
            </div>

            <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 rounded-xl py-6 md:py-7 text-sm md:text-base font-semibold">
              Join the Challenge
            </Button>
          </div>

          {/* 10X Trader */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">10X Trader</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">Introducing the Future of Prop Trading</p>
            
            <div className="mb-6 md:mb-8">
              <span className="text-cyan-400 text-lg md:text-xl font-normal">Deposit with Your Broker</span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-6 md:my-8"></div>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Daily Payouts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">100% Profit Split</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">No Trading Restrictions</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Scale up to $2m</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">Only 1 Trading Rule</span>
              </div>
            </div>

            <Button className="w-full bg-cyan-900/40 hover:bg-cyan-900/60 text-white border border-cyan-500/30 rounded-xl py-6 md:py-7 text-sm md:text-base font-medium">
              Join the Challenge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
