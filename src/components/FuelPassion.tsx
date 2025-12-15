import heroBg from "@/assets/herobg.webp";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const cards = [
  {
    title: "2-Step Account",
    subtitle: "The Traditional Way of Prop Trading",
    price: "$35",
    priceLabel: "/starting",
    features: [
      "Payout on Demand",
      "8% + 5% Profit Targets",
      "Up to 90% Profit Split",
      "Unlimited Trading Days",
      "Refundable Fee",
    ],
    isPopular: false,
  },
  {
    title: "1-Step Account",
    subtitle: "Your Fast-Track to Trading Success",
    price: "$110",
    priceLabel: "/starting",
    features: [
      "HFT/Algo Allowed",
      "$400k Max Allocation",
      "No News Restrictions",
      "No Minimum Trading days",
      "Bi-weekly Add-on available",
      "Crypto Weekend Trading",
      "Scale Your Payout into 10X",
    ],
    isPopular: true,
  },
  {
    title: "10X Trader",
    subtitle: "Introducing the Future of Prop Trading",
    price: null,
    priceLabel: "Deposit with Your Broker",
    features: [
      "Daily Payouts",
      "100% Profit Split",
      "No Trading Restrictions",
      "Scale up to $2m",
      "Only 1 Trading Rule",
    ],
    isPopular: false,
  },
];

const PricingCard = ({ card, index }: { card: typeof cards[0]; index: number }) => (
  <div
    className={`bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 h-full ${
      card.isPopular
        ? "border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.3)] md:scale-105"
        : "border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    }`}
  >
    <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
      <h3 className="text-white text-2xl md:text-3xl font-bold">{card.title}</h3>
      {card.isPopular && (
        <span className="bg-cyan-400 text-slate-900 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold">
          Most popular
        </span>
      )}
    </div>
    <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">{card.subtitle}</p>

    <div className="mb-2">
      {card.price ? (
        <>
          <span className="text-white text-4xl md:text-5xl font-bold">{card.price}</span>
          <span className="text-gray-400 text-sm md:text-base ml-2">{card.priceLabel}</span>
        </>
      ) : (
        <span className="text-cyan-400 text-lg md:text-xl font-normal">{card.priceLabel}</span>
      )}
    </div>

    <div className={`h-px bg-gradient-to-r from-transparent ${card.isPopular ? 'via-cyan-400/30' : 'via-cyan-500/20'} to-transparent my-6 md:my-8`}></div>

    <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
      {card.features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3">
          <Check className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0" />
          <span className="text-white text-sm md:text-base">{feature}</span>
        </div>
      ))}
    </div>

    <Button
      className={`w-full rounded-xl py-6 md:py-7 text-sm md:text-base font-medium ${
        card.isPopular
          ? "bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold"
          : "bg-cyan-900/40 hover:bg-cyan-900/60 text-white border border-cyan-500/30"
      }`}
    >
      Join the Challenge
    </Button>
  </div>
);

export const FuelPassion = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-4 bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-7xl mx-auto py-8 md:py-12 z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Fuel Your Passion. Fund Your Potential.
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto px-4">
            Choose the program that fits your strategy, risk profile, and goals. Whether you're starting out
            or scaling up — we've built a path for you.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <PricingCard card={card} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {cards.map((card, index) => (
            <PricingCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
