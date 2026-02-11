import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import StatsSection from "@/components/StatsSection";
import PlatformSection from "@/components/PlatformSection";
import InvestmentFocus from "@/components/InvestmentFocus";
import ApproachSection from "@/components/ApproachSection";
import LeadershipSection from "@/components/LeadershipSection";
import SucaGroup from "@/components/SucaGroup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <WhoWeAre />
      <StatsSection />
      <PlatformSection />
      <InvestmentFocus />
      <ApproachSection />
      <LeadershipSection />
      <SucaGroup />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
