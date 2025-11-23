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
      
      <div className="relative w-full max-w-7xl mx-auto py-12 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fuel Your Passion. Fund Your Potential.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose the program that fits your strategy, risk profile, and goals. Whether you're starting out
            or scaling up — we've built a path for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 2-Step Account */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-white text-2xl font-bold mb-2">2-Step Account</h3>
            <p className="text-gray-400 mb-6">The Traditional Way of Prop Trading</p>
            
            <div className="mb-6">
              <span className="text-cyan-400 text-4xl font-bold">$35</span>
              <span className="text-gray-400 text-sm ml-2">/starting</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Payout on Demand</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">8% + 5% Profit Targets</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Up to 90% Profit Split</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Unlimited Trading Days</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Refundable Fee</span>
              </div>
            </div>

            <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl py-6">
              Join the Challenge
            </Button>
          </div>

          {/* 1-Step Account - Most Popular */}
          <div className="bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <h3 className="text-white text-2xl font-bold mb-2">1-Step Account</h3>
            <p className="text-gray-400 mb-6">Your Fast-Track to Trading Success</p>
            
            <div className="mb-6">
              <span className="text-cyan-400 text-4xl font-bold">$110</span>
              <span className="text-gray-400 text-sm ml-2">/starting</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">HFT/Algo Allowed</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">$400k Max Allocation</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">No News Restrictions</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">No Minimum Trading days</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Bi-weekly Add-on available</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Crypto Weekend Trading</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Scale Your Payout into 10X</span>
              </div>
            </div>

            <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 rounded-xl py-6 font-semibold">
              Join the Challenge
            </Button>
          </div>

          {/* 10X Trader */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-white text-2xl font-bold mb-2">10X Trader</h3>
            <p className="text-gray-400 mb-6">Introducing the Future of Prop Trading</p>
            
            <div className="mb-6">
              <span className="text-cyan-400 text-2xl font-bold">Deposit with Your Broker</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Daily Payouts</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">100% Profit Split</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">No Trading Restrictions</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Scale up to $2m</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Only 1 Trading Rule</span>
              </div>
            </div>

            <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl py-6">
              Join the Challenge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
