import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AccountSelector } from "@/components/AccountSelector";

// Lazy load below-fold components to improve TTI
const PayoutsCarousel = lazy(() => import("@/components/PayoutsCarousel").then(m => ({ default: m.PayoutsCarousel })));
const FuelPassion = lazy(() => import("@/components/FuelPassion").then(m => ({ default: m.FuelPassion })));
const PayoutsSection = lazy(() => import("@/components/PayoutsSection").then(m => ({ default: m.PayoutsSection })));
const TechnologySection = lazy(() => import("@/components/TechnologySection").then(m => ({ default: m.TechnologySection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const WhyWeFund = lazy(() => import("@/components/WhyWeFund").then(m => ({ default: m.WhyWeFund })));
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const CommunitySupport = lazy(() => import("@/components/CommunitySupport").then(m => ({ default: m.CommunitySupport })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AccountSelector />
      <Suspense fallback={<div className="min-h-[200px]" />}>
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
      </Suspense>
    </div>
  );
};

export default Index;
