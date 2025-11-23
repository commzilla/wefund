import { Check } from "lucide-react";

export const Features = () => {
  const features = [
    { icon: "🛡️", text: "Zero reward denials" },
    { icon: "⚖️", text: "Fair and simple trading rules" },
    { icon: "💰", text: "Keep up to 100% of your profits" },
  ];

  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get Funded with the <span className="text-primary">Most Trusted Prop Firm</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 text-foreground">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <span className="text-lg">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
