import payoutBadge from "@/assets/payout-badge.png";
import dailyPayoutBg from "@/assets/daily-payout-bg-image.png";
import lightningFastBg from "@/assets/lightning-fast-bg-image.png";
import keepProfitBg from "@/assets/keep-profit-bg-image.png";
import riseScaled from "@/assets/rise-scaled.png";

export const PayoutsSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={payoutBadge} 
            alt="Payout System" 
            className="h-8 mx-auto mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Payouts Made Easy
          </h2>
          <p className="text-lg font-normal text-slate-400 max-w-3xl mx-auto">
            Experience a payout system designed for real traders – fast, transparent, and effortless,
            so you can focus on performance and real growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 - Daily Payouts */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/90 via-slate-900/80 to-slate-950 border border-slate-700/30">
            <div className="h-56 relative overflow-hidden">
              <img 
                src={dailyPayoutBg} 
                alt="Daily Payouts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Daily Payouts</h3>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
                No more waiting for your profits. The 10X Trader Program lets you withdraw daily,
                directly from your broker account – no approval process, no delays.
              </p>
            </div>
          </div>

          {/* Card 2 - Lightning Fast Payouts */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/90 via-slate-900/80 to-slate-950 border border-slate-700/30">
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1.5 rounded-full border border-cyan-500/30">
                3 hours avg. process time
              </span>
            </div>
            <div className="h-56 relative overflow-hidden">
              <img 
                src={lightningFastBg} 
                alt="Lightning Fast Payouts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Payouts</h3>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
                Enjoy the industry's fastest payouts – processing that delivers your profits without
                delay. Fast, easy, and completely hassle-free.
              </p>
            </div>
          </div>

          {/* Card 3 - Keep up to 100% of your profits */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/90 via-slate-900/80 to-slate-950 border border-slate-700/30">
            <div className="h-56 relative overflow-hidden">
              <img 
                src={keepProfitBg} 
                alt="Keep your profits" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Keep up to 100% of your profits</h3>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
                Unlock up to 100% of your profits. Every trade you win is yours to withdraw.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Payouts Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/30">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={riseScaled} 
              alt="Rise Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Verified Payouts</h3>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25">
                See all Payouts
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm">Verified by</span>
              <span className="bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/50">
                <span className="text-white font-semibold">Rise</span>
                <span className="text-cyan-400 font-semibold">Works</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
