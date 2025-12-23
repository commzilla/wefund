import { lazy, Suspense, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { useAnalytics } from "@/hooks/useAnalytics";

// Lazy load below-fold components to improve TTI
const AccountSelector = lazy(() => import("@/components/AccountSelector").then(m => ({ default: m.AccountSelector })));
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
  const { trackScrollDepth } = useAnalytics();
  const scrollMilestones = useRef<Set<number>>(new Set());

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="min-h-[600px] bg-black" />}>
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
      </Suspense>
    </div>
  );
};

export default Index;
