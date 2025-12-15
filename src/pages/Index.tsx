import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AccountSelector } from "@/components/AccountSelector";
import { PayoutsCarousel } from "@/components/PayoutsCarousel";
import { FuelPassion } from "@/components/FuelPassion";
import { PricingPlans } from "@/components/PricingPlans";
import { PayoutsSection } from "@/components/PayoutsSection";
import { TechnologySection } from "@/components/TechnologySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyWeFund } from "@/components/WhyWeFund";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CommunitySupport } from "@/components/CommunitySupport";
import { Footer } from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AccountSelector />
      <PayoutsCarousel />
      <FuelPassion />
      
      <PayoutsSection />
      <TechnologySection />
      <TestimonialsSection />
      <WhyWeFund />
      <HowItWorks />
      <FAQ />
      <CommunitySupport />
      <Footer />
    </div>;
};
export default Index;