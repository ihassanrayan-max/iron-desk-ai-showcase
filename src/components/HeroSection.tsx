import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative hero-tight overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none text-balance">
              <span className="block">Automation</span>
              <span className="block premium-gradient text-glow">that ships</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-ch-68 leading-relaxed">
              IronDeskAI builds lightweight AI workflows for service businesses. 
              Automate the boring, grow the business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="magnetic-button hover-glow group text-base px-8 py-4"
              >
                Get a Walkthrough
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("platform")}
                size="lg"
                className="premium-card hover-glow text-base px-8 py-4"
              >
                Explore the Platform
              </Button>
            </div>
          </div>
          
          <div className="relative lg:ml-8">
            <div className="relative transform lg:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
              <img 
                src={heroMockup} 
                alt="IronDeskAI platform interface showing automated workflow dashboard"
                className="relative rounded-2xl shadow-2xl hover-lift"
                style={{ aspectRatio: '16/10' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;