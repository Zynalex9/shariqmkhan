import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import OrganizationsSection from "@/components/sections/OrganizationsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import CampaignImpactSection from "@/components/sections/CampaignImpactSection";
import TrainingSection from "@/components/sections/TrainingSection";
import GallerySection from "@/components/sections/GallerySection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <HeroSection />
        <IntroSection />
        <AboutSection />
        <OrganizationsSection />
        <FeaturedProjectsSection />
        <CampaignImpactSection />
        <TrainingSection />
        <GallerySection />
        <ConnectSection />
      </main>
      <BackToTop />
    </>
  );
}
