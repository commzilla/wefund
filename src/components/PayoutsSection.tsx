import payoutBadge from "@/assets/payout-badge.png";
import dailyPayoutBg from "@/assets/daily-payout-bg-image.png";
import lightningFastBg from "@/assets/lightning-fast-bg-image.png";
import keepProfitBg from "@/assets/keep-profit-bg-image.png";
import riseScaled from "@/assets/rise-scaled.png";

export const PayoutsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <img 
            src={payoutBadge} 
            alt="Payout System" 
            width={120}
            height={32}
            className="h-6 md:h-8 mx-auto mb-4 md:mb-6"
            loading="lazy"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 text-white">
            Payouts Made Easy
          </h2>
          <p className="text-sm md:text-base font-normal text-slate-500 max-w-2xl mx-auto px-4">
            Experience a payout system designed for real traders – fast, transparent, and effortless, so you can focus on performance and real growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {/* Card 1 - Daily Payouts */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 min-h-[320px] md:min-h-[420px]">
            {/* Full Background Image */}
            <img 
              src={dailyPayoutBg} 
              alt="Daily Payouts" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-white mb-2">Daily Payouts</h3>
              <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed">
                No more waiting for your profits. The 10X Trader Program lets you withdraw daily, directly from your broker account – no approval process, no delays.
              </p>
            </div>
          </div>

          {/* Card 2 - Lightning Fast Payouts */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 min-h-[320px] md:min-h-[420px]">
            {/* Badge */}
            <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
              <span className="bg-slate-800/90 text-slate-300 text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-slate-600/50">
                3 hours avg. process time
              </span>
            </div>
            {/* Full Background Image */}
            <img 
              src={lightningFastBg} 
              alt="Lightning Fast Payouts" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-white mb-2">Lightning Fast Payouts</h3>
              <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed">
                Enjoy the industry's fastest payouts – processing that delivers your profits without delay. Fast, easy, and completely hassle-free.
              </p>
            </div>
          </div>

          {/* Card 3 - Keep up to 100% of your profits */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 min-h-[320px] md:min-h-[420px]">
            {/* Full Background Image */}
            <img 
              src={keepProfitBg} 
              alt="Keep your profits" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-white mb-2">Keep up to 100% of your profits</h3>
              <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed">
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
              loading="lazy"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 md:p-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">Verified Payouts</h3>
              <button className="bg-slate-700/80 hover:bg-slate-600/80 text-white font-medium px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-all duration-300 border border-slate-600/50 w-fit text-sm md:text-base">
                See all Payouts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
