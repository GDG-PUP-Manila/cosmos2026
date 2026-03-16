import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SpeakersSection from "@/components/sections/speakers-section";
import ProgramFlowSection from "@/components/sections/program-flow-section";
import GallerySection from "@/components/sections/gallery-section";
import SponsorsSection from "@/components/sections/sponsors-section";
import PropertyAssetsSection from "@/components/sections/property-assets-section";
import CtaSection from "@/components/sections/cta-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ProgramFlowSection />
      <GallerySection />
      <SponsorsSection />
      <PropertyAssetsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
