import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: "🛡️",
      title: "Start Your Evaluation",
      description:
        "Your journey to funding starts here. Sign up for free, choose your 1- or 2-Step Challenge, prove your skill in the evaluation, and unlock your full trading potential.",
    },
    {
      number: 2,
      icon: "💳",
      title: "Start Trading & Earn",
      description:
        "Once verified, you become an official WeFund Funded Trader – withdraw profits on demand, daily, or bi-weekly, and enjoy profit splits of up to 100%.",
    },
    {
      number: 3,
      icon: "📈",
      title: "Scale Your Capital",
      description:
        "Get funded up to $400K and scale to $2M in real A-book funding. WeFund – where real traders unlock real opportunities.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Trading Journey Starts Here</h2>
          <p className="text-lg text-muted-foreground">
            We Guide You Along the Way, in Every Step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <span className="text-sm text-primary font-semibold">Step {step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">Register Now</Button>
        </div>
      </div>
    </section>
  );
};
