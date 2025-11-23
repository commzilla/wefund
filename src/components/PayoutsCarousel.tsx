import { ArrowUpRight } from "lucide-react";

export const PayoutsCarousel = () => {
  const payouts = [
    { amount: "$2,284.38", name: "Yassine", country: "🇨🇦" },
    { amount: "$4,953.00", name: "Muammer", country: "🇩🇪" },
    { amount: "$3,000.00", name: "Bernard", country: "🇦🇪" },
    { amount: "$4,583.97", name: "Kashif", country: "🇵🇰" },
    { amount: "$2,808.70", name: "Vaibhav", country: "🇮🇳" },
    { amount: "$5,782.50", name: "Mohamed", country: "🇸🇬" },
    { amount: "$2,486.25", name: "Jack", country: "🇬🇧" },
    { amount: "$4,091.68", name: "Imran", country: "🇬🇧" },
    { amount: "$3,730.08", name: "Faisal", country: "🇳🇴" },
    { amount: "$4,803.28", name: "Hamza", country: "🇦🇺" },
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

      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {[...payouts, ...payouts].map((payout, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-blue-950/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-5xl flex-shrink-0">{payout.country}</div>
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
