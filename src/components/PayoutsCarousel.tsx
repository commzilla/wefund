import cardBg from "@/assets/cards-carousel-bg-2.png?format=webp&quality=75";
import arrowLogo from "@/assets/arrow-logo.png?format=webp&quality=80";
import australiaFlag from "@/assets/flags/Australia.png?format=webp&quality=80";
import canadaFlag from "@/assets/flags/Canada.png?format=webp&quality=80";
import germanyFlag from "@/assets/flags/Germany.png?format=webp&quality=80";
import indiaFlag from "@/assets/flags/India.png?format=webp&quality=80";
import ukFlag from "@/assets/flags/UK.png?format=webp&quality=80";
import norwayFlag from "@/assets/flags/Norway.png?format=webp&quality=80";
import omanFlag from "@/assets/flags/Oman.png?format=webp&quality=80";
import pakistanFlag from "@/assets/flags/Pakistan.png?format=webp&quality=80";
import singaporeFlag from "@/assets/flags/Singapore.png?format=webp&quality=80";
import uaeFlag from "@/assets/flags/UAE.png?format=webp&quality=80";
import flag2 from "@/assets/flags/flag-2.png?format=webp&quality=80";
import flag4 from "@/assets/flags/flag-4.png?format=webp&quality=80";
import flag5 from "@/assets/flags/flag-5.png?format=webp&quality=80";
import flag6 from "@/assets/flags/flag-6.png?format=webp&quality=80";

export const PayoutsCarousel = () => {
  const payouts = [
    { amount: "$2,284.38", name: "Yassine", flag: canadaFlag },
    { amount: "$4,953.00", name: "Muammer", flag: germanyFlag },
    { amount: "$3,000.00", name: "Bernard", flag: uaeFlag },
    { amount: "$4,583.97", name: "Kashif", flag: pakistanFlag },
    { amount: "$2,808.70", name: "Vaibhav", flag: indiaFlag },
    { amount: "$5,782.50", name: "Mohamed", flag: singaporeFlag },
    { amount: "$2,486.25", name: "Jack", flag: ukFlag },
    { amount: "$4,091.68", name: "Imran", flag: ukFlag },
    { amount: "$3,730.08", name: "Faisal", flag: norwayFlag },
    { amount: "$4,803.28", name: "Hamza", flag: australiaFlag },
  ];

  const payouts2 = [
    { amount: "$3,124.50", name: "Ahmed", flag: omanFlag },
    { amount: "$5,291.80", name: "Carlos", flag: flag4 },
    { amount: "$2,750.00", name: "Emma", flag: ukFlag },
    { amount: "$4,125.90", name: "Raj", flag: indiaFlag },
    { amount: "$3,500.25", name: "Lucas", flag: canadaFlag },
    { amount: "$4,890.00", name: "Sophie", flag: germanyFlag },
    { amount: "$2,950.75", name: "David", flag: australiaFlag },
    { amount: "$5,100.50", name: "Nina", flag: flag5 },
    { amount: "$3,825.40", name: "Viktor", flag: flag6 },
    { amount: "$4,250.00", name: "Sarah", flag: singaporeFlag },
  ];

  return (
    <section className="py-12 md:py-20 px-4 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
          Real Traders. Real Results.
        </h2>
        <p className="text-base md:text-lg text-gray-400">
          See all payouts on{" "}
          <a
            href="https://arbiscan.io/tokentxns?a=0xB3a371932142975EE482B2ce63f6e0c8FBb80798&p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            here
          </a>
        </p>
      </div>

      {/* First carousel - scrolls left */}
      <div className="relative mb-4 md:mb-6">
        <div className="flex gap-4 md:gap-6 animate-scroll">
          {[...payouts, ...payouts].map((payout, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] md:w-80 bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-blue-950/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 md:p-6 hover:border-blue-500/40 transition-all shadow-xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center justify-between gap-3 md:gap-4">
                <div className="flex-shrink-0 w-12 md:w-16 h-12 md:h-16">
                  <img src={payout.flag} alt="Country flag" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{payout.amount}</div>
                  <div className="text-gray-400 text-sm md:text-base">{payout.name}</div>
                </div>
                <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={arrowLogo} alt="Arrow" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second carousel - scrolls right */}
      <div className="relative">
        <div className="flex gap-4 md:gap-6 animate-scroll-reverse">
          {[...payouts2, ...payouts2].map((payout, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] md:w-80 bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-blue-950/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 md:p-6 hover:border-blue-500/40 transition-all shadow-xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center justify-between gap-3 md:gap-4">
                <div className="flex-shrink-0 w-12 md:w-16 h-12 md:h-16">
                  <img src={payout.flag} alt="Country flag" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{payout.amount}</div>
                  <div className="text-gray-400 text-sm md:text-base">{payout.name}</div>
                </div>
                <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={arrowLogo} alt="Arrow" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
