import { Key } from "lucide-react";
import realScalingBg from "@/assets/real-scaling-bg.png";
import profitScalingBg from "@/assets/profit-scaling-bg-image.png";
import balanceDrawdownBg from "@/assets/balance-drawdown-bg.png";
import noTimeLimitBg from "@/assets/no-time-limit-bg.png";
import competitiveSpreadsBg from "@/assets/competitive-spreads-bg.png";
import fastPayoutsBg from "@/assets/fast-payouts-bg.png";
import supportiveAddonsBg from "@/assets/supportive-addons-bg.png";
import easyRulesBg from "@/assets/easy-rules-bg.png";

export const WhyWeFund = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Key className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Benefits</span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Traders Love WeFund
          </h2>
          
          {/* Subtitle */}
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We empower traders who perform. Our platform rewards consistency, discipline, and growth —
            <br className="hidden md:block" />
            giving you the tools and capital to scale without limits.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Real Scaling Plan */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-[220px]">
              <img 
                src={realScalingBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Real Scaling Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Scale your payout into a 10x account and scale up to $2M in A-book funding.
                </p>
              </div>
            </div>

            {/* Balance Based Drawdown */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-[220px]">
              <img 
                src={balanceDrawdownBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Balance Based Drawdown</h3>
                <p className="text-sm text-muted-foreground">
                  Allowing traders the freedom to hold positions.
                </p>
              </div>
            </div>

            {/* Competitive Spreads */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-[220px]">
              <img 
                src={competitiveSpreadsBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Competitive Spreads</h3>
                <p className="text-sm text-muted-foreground">
                  WeFund is dedicated to providing the ultimate trading environment.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-4">
            {/* Profit Scaling */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-[220px]">
              <img 
                src={profitScalingBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Profit Scaling</h3>
                <p className="text-sm text-muted-foreground">
                  Trade bigger. Earn bigger.
                </p>
              </div>
            </div>

            {/* No Time Limit */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-[220px]">
              <img 
                src={noTimeLimitBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">No Time Limit</h3>
                <p className="text-sm text-muted-foreground">
                  Trade at your pace, without time limits or pressure.
                </p>
              </div>
            </div>

            {/* Fast Payouts */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-[220px]">
              <img 
                src={fastPayoutsBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Fast Payouts</h3>
                <p className="text-sm text-muted-foreground">
                  Withdraw profits in hours, not days — built for trader speed and flow.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Taller cards */}
          <div className="flex flex-col gap-4">
            {/* Supportive Add-ons */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 flex-1 min-h-[340px]">
              <img 
                src={supportiveAddonsBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Supportive Add-ons</h3>
                <p className="text-sm text-muted-foreground">
                  Designed to help you stay ahead and trade with confidence.
                </p>
              </div>
            </div>

            {/* Easy to Read Rules */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 flex-1 min-h-[340px]">
              <img 
                src={easyRulesBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Easy to Read Rules</h3>
                <p className="text-sm text-muted-foreground">
                  Trust first, then trade with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
