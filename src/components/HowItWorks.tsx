import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle, Wallet, BarChart3 } from "lucide-react";
import createVerifyBg from "@/assets/create-verify-bg-image.png?format=webp&quality=70";
import tradingEarnBg from "@/assets/trading-earn-bg-image.png?format=webp&quality=70";
import scaleCapitalBg from "@/assets/scale-capital-bg-image.png?format=webp&quality=70";

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
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6">
            <RefreshCw className="w-3 md:w-4 h-3 md:h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs md:text-sm font-medium">How it works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Your Trading Journey Starts Here
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-cyan-400">
            We Guide You Along the Way, in Every Step
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/60 border border-slate-700/50 rounded-3xl overflow-hidden min-h-[320px] md:min-h-[420px] flex flex-col"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Step Badge - positioned on top */}
                <div className="relative z-10 p-3 md:p-4">
                  <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-600/40 rounded-full px-2.5 md:px-3 py-1 md:py-1.5">
                    <IconComponent className="w-3 md:w-4 h-3 md:h-4 text-cyan-400" />
                    <span className="text-white text-xs md:text-sm font-medium">Step {step.number}</span>
                  </div>
                </div>

                {/* Spacer to push content down */}
                <div className="flex-1" />

                {/* Content at bottom */}
                <div className="relative z-10 p-4 md:p-6 pt-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
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
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 md:px-12 py-5 md:py-6 rounded-full text-sm md:text-base"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};
