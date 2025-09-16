import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import AgentsSection from "@/components/AgentsSection";
import InlineContactBanner from "@/components/InlineContactBanner";
import ResourcesSection from "@/components/ResourcesSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorSystem from "@/components/CursorSystem";
import StickyWalkthrough from "@/components/StickyWalkthrough";
import BackToTop from "@/components/BackToTop";
import AnalyticsProvider from "@/components/AnalyticsProvider";

const Index = () => {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-background">
        <CursorSystem />
        <Header />
        <main>
          <HeroSection />
          <PlatformSection />
          <AgentsSection />
          <ResourcesSection />
          <ComparisonSection />
          <FAQSection />
          <AboutSection />
          <InlineContactBanner 
            title="Ready to automate your workflows?"
            description="Book a walkthrough and see how IronDeskAI can streamline your operations."
          />
          <ContactSection />
        </main>
        <Footer />
        <StickyWalkthrough />
        <BackToTop />
      </div>
    </AnalyticsProvider>
  );
};

export default Index;
