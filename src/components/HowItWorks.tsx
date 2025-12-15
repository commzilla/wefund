import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle, Wallet, BarChart3 } from "lucide-react";
import createVerifyBg from "@/assets/create-verify-bg-image.png";
import tradingEarnBg from "@/assets/trading-earn-bg-image.png";
import scaleCapitalBg from "@/assets/scale-capital-bg-image.png";

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: CheckCircle,
      image: createVerifyBg,
      title: "Start Your Evaluation",
      description:
        "Your journey to funding starts here. Sign up for free, choose your 1- or 2-Step Challenge, prove your skill in the evaluation, and unlock your full trading potential.",
    },
    {
      number: 2,
      icon: Wallet,
      image: tradingEarnBg,
      title: "Start Trading & Earn",
      description:
        "Once verified, you become an official WeFund Funded Trader – withdraw profits on demand, daily, or bi-weekly, and enjoy profit splits of up to 100%.",
    },
    {
      number: 3,
      icon: BarChart3,
      image: scaleCapitalBg,
      title: "Scale Your Capital",
      description:
        "Get funded up to $400K and scale to $2M in real A-book funding. WeFund – where real traders unlock real opportunities.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Your Trading Journey Starts Here
          </h2>
          <p className="text-xl md:text-2xl text-cyan-400">
            We Guide You Along the Way, in Every Step
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-gradient-to-b from-slate-800/40 to-slate-900/60 border border-slate-700/50 rounded-3xl overflow-hidden"
              >
                {/* Step Badge */}
                <div className="p-4 pb-0">
                  <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-600/40 rounded-full px-3 py-1.5">
                    <IconComponent className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">Step {step.number}</span>
                  </div>
                </div>

                {/* Image */}
                <div className="h-56 flex items-center justify-center p-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-12 py-6 rounded-full"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};
