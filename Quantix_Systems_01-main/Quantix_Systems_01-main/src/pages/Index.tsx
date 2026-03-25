import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PlatformSection from "@/components/PlatformSection";
import ProductSuite from "@/components/ProductSuite";
import ArchitectureWorkflow from "@/components/ArchitectureWorkflow";
import IndustrySolutions from "@/components/IndustrySolutions";
import QuantumTechnology from "@/components/QuantumTechnology";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <PlatformSection />
      <ProductSuite />
      <ArchitectureWorkflow />
      <IndustrySolutions />
      <QuantumTechnology />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
