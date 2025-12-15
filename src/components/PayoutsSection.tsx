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
          <p className="text-base font-normal text-slate-500 max-w-2xl mx-auto">
            Experience a payout system designed for real traders – fast, transparent, and effortless, so you can focus on performance and real growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Card 1 - Daily Payouts */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 flex flex-col">
            {/* Background Image */}
            <div className="relative h-72 w-full bg-slate-900/60">
              <img 
                src={dailyPayoutBg} 
                alt="Daily Payouts" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Content */}
            <div className="p-6 pt-4 bg-transparent">
              <h3 className="text-lg font-bold text-white mb-2">Daily Payouts</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                No more waiting for your profits. The 10X Trader Program lets you withdraw daily, directly from your broker account – no approval process, no delays.
              </p>
            </div>
          </div>

          {/* Card 2 - Lightning Fast Payouts */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 flex flex-col">
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-slate-800/90 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-600/50">
                3 hours avg. process time
              </span>
            </div>
            {/* Background Image */}
            <div className="relative h-72 w-full bg-slate-900/60">
              <img 
                src={lightningFastBg} 
                alt="Lightning Fast Payouts" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Content */}
            <div className="p-6 pt-4 bg-transparent">
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast Payouts</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                Enjoy the industry's fastest payouts – processing that delivers your profits without delay. Fast, easy, and completely hassle-free.
              </p>
            </div>
          </div>

          {/* Card 3 - Keep up to 100% of your profits */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 flex flex-col">
            {/* Background Image */}
            <div className="relative h-72 w-full bg-slate-900/60">
              <img 
                src={keepProfitBg} 
                alt="Keep your profits" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Content */}
            <div className="p-6 pt-4 bg-transparent">
              <h3 className="text-lg font-bold text-white mb-2">Keep up to 100% of your profits</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                Unlock up to 100% of your profits. Every trade you win is yours to withdraw.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Payouts Banner */}
        <div className="relative rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700/40">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={riseScaled} 
              alt="Rise Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white">Verified Payouts</h3>
              <button className="bg-slate-700/80 hover:bg-slate-600/80 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 border border-slate-600/50 w-fit">
                See all Payouts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
