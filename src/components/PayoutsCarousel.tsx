import { ArrowUpRight } from "lucide-react";
import cardBg from "@/assets/cards-carousel-bg-2.png";
import australiaFlag from "@/assets/flags/Australia.png";
import canadaFlag from "@/assets/flags/Canada.png";
import germanyFlag from "@/assets/flags/Germany.png";
import indiaFlag from "@/assets/flags/India.png";
import ukFlag from "@/assets/flags/UK.png";
import flag2 from "@/assets/flags/flag-2.png";
import flag4 from "@/assets/flags/flag-4.png";
import flag5 from "@/assets/flags/flag-5.png";
import flag6 from "@/assets/flags/flag-6.png";

export const PayoutsCarousel = () => {
  const payouts = [
    { amount: "$2,284.38", name: "Yassine", flag: canadaFlag },
    { amount: "$4,953.00", name: "Muammer", flag: germanyFlag },
    { amount: "$3,000.00", name: "Bernard", flag: flag2 },
    { amount: "$4,583.97", name: "Kashif", flag: flag4 },
    { amount: "$2,808.70", name: "Vaibhav", flag: indiaFlag },
    { amount: "$5,782.50", name: "Mohamed", flag: flag5 },
    { amount: "$2,486.25", name: "Jack", flag: ukFlag },
    { amount: "$4,091.68", name: "Imran", flag: ukFlag },
    { amount: "$3,730.08", name: "Faisal", flag: flag6 },
    { amount: "$4,803.28", name: "Hamza", flag: australiaFlag },
  ];

  const payouts2 = [
    { amount: "$3,124.50", name: "Ahmed", flag: flag2 },
    { amount: "$5,291.80", name: "Carlos", flag: flag4 },
    { amount: "$2,750.00", name: "Emma", flag: ukFlag },
    { amount: "$4,125.90", name: "Raj", flag: indiaFlag },
    { amount: "$3,500.25", name: "Lucas", flag: canadaFlag },
    { amount: "$4,890.00", name: "Sophie", flag: germanyFlag },
    { amount: "$2,950.75", name: "David", flag: australiaFlag },
    { amount: "$5,100.50", name: "Nina", flag: flag5 },
    { amount: "$3,825.40", name: "Viktor", flag: flag6 },
    { amount: "$4,250.00", name: "Sarah", flag: ukFlag },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Real Traders. Real Results.
        </h2>
        <p className="text-lg text-gray-400">
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
      <div className="relative mb-6">
        <div className="flex gap-6 animate-scroll">
          {[...payouts, ...payouts].map((payout, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-blue-950/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all shadow-xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-shrink-0 w-16 h-16">
                  <img src={payout.flag} alt="Country flag" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white mb-1">{payout.amount}</div>
                  <div className="text-gray-400 text-base">{payout.name}</div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second carousel - scrolls right */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll-reverse">
          {[...payouts2, ...payouts2].map((payout, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-blue-950/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all shadow-xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-shrink-0 w-16 h-16">
                  <img src={payout.flag} alt="Country flag" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white mb-1">{payout.amount}</div>
                  <div className="text-gray-400 text-base">{payout.name}</div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
