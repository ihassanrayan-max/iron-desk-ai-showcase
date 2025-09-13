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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PlatformSection />
        <AgentsSection />
        <InlineContactBanner 
          title="See it in action"
          description="Ready to preview your first automation? Book a walkthrough."
        />
        <ResourcesSection />
        <InlineContactBanner 
          title="Want to dive deeper?"
          description="Book a walkthrough and we'll map your first workflow live."
        />
        <ComparisonSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
