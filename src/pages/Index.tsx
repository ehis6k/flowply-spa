import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductPillars } from "@/components/sections/ProductPillars";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhyFlowPly } from "@/components/sections/WhyFlowPly";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductPillars />
        <SocialProof />
        <WhyFlowPly />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
