import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import conceptHero from "@/assets/concept_hero.webp";
import SymbolIcon from "./SymbolIcon";

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
              <span className="block transform transition-all duration-700 hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>Automation</span>
              <span className="block premium-gradient text-glow transform transition-all duration-700 hover:scale-105 hover:rotateX(5deg)" style={{ transformStyle: 'preserve-3d' }}>that ships</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-ch-68 leading-relaxed">
              IronDeskAI builds lightweight AI workflows for service businesses. 
              Automate the boring, grow the business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="magnetic-button hover-glow group text-base px-8 py-4 flex items-center gap-3"
              >
                <SymbolIcon size={20} className="text-current" />
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
                src={conceptHero} 
                alt="IronDeskAI automation workflows with central brain-circuit symbol and orbiting automation elements"
                className="relative rounded-2xl shadow-2xl hover-lift scroll-reveal"
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