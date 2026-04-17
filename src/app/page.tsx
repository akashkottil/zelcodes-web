import { Hero } from "@/components/Hero";
import { AnimationShowcase } from "@/components/AnimationShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { PatreonSection } from "@/components/PatreonSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimationShowcase />
      <HowItWorks />
      <PatreonSection />
      <CredibilitySection />
      <CTASection />
    </>
  );
}
