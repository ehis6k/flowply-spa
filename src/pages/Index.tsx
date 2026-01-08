import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { OwnershipDiagram } from "@/components/sections/OwnershipDiagram";
import { AntiPitchGrid } from "@/components/sections/AntiPitchGrid";
import { UseCaseCategories } from "@/components/sections/UseCaseCategories";
import { GovernanceControls } from "@/components/sections/GovernanceControls";
import { VendorPartnerSection } from "@/components/sections/VendorPartnerSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OwnershipDiagram />
        <AntiPitchGrid />
        <UseCaseCategories />
        <GovernanceControls />
        <VendorPartnerSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
