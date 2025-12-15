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
          <div className="relative rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700/40 flex flex-col">
            {/* Background Image */}
            <div className="relative h-72 w-full">
              <img 
                src={dailyPayoutBg} 
                alt="Daily Payouts" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Content */}
            <div className="p-6 pt-4">
              <h3 className="text-lg font-bold text-white mb-2">Daily Payouts</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                No more waiting for your profits. The 10X Trader Program lets you withdraw daily, directly from your broker account – no approval process, no delays.
              </p>
            </div>
          </div>

          {/* Card 2 - Lightning Fast Payouts */}
          <div className="relative rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700/40 flex flex-col">
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-slate-800/90 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-600/50">
                3 hours avg. process time
              </span>
            </div>
            {/* Background Image */}
            <div className="relative h-72 w-full">
              <img 
                src={lightningFastBg} 
                alt="Lightning Fast Payouts" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Content */}
            <div className="p-6 pt-4">
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast Payouts</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                Enjoy the industry's fastest payouts – processing that delivers your profits without delay. Fast, easy, and completely hassle-free.
              </p>
            </div>
          </div>

          {/* Card 3 - Keep up to 100% of your profits */}
          <div className="relative rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700/40 flex flex-col">
            {/* Background Image */}
            <div className="relative h-72 w-full">
              <img 
                src={keepProfitBg} 
                alt="Keep your profits" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Content */}
            <div className="p-6 pt-4">
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
          <div className="relative z-10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white">Verified Payouts</h3>
              <button className="bg-slate-700/80 hover:bg-slate-600/80 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 border border-slate-600/50 w-fit">
                See all Payouts
              </button>
            </div>
            <div className="flex items-center">
              <span className="bg-slate-800/90 px-4 py-2.5 rounded-full border border-slate-600/50 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-white font-medium text-sm">Rise Works</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
