import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SpeakersSection from "@/components/sections/speakers-section";
import ProgramFlowSection from "@/components/sections/program-flow-section";
import LocationSection from "@/components/sections/location-section";
import SponsorsSection from "@/components/sections/sponsors-section";
import FaqSection from "@/components/sections/faq-section";
import CtaSection from "@/components/sections/cta-section";
import FooterSection from "@/components/sections/footer-section";
import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <AmbientStarfield className="absolute inset-0 z-1  " density={30} />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ProgramFlowSection />
      <LocationSection />
      <SponsorsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
