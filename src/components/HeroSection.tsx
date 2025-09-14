import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import symbolSvg from "@/assets/symbol.svg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ paddingTop: 'calc(3.5rem + 1rem)' }}>
      {/* Premium background effects */}
      <div className="absolute inset-0 hero-bg" style={{ marginTop: '32px' }} />
      <div className="absolute inset-0 grid-overlay opacity-30" style={{ marginTop: '32px' }} />
      
      {/* Hero watermark behind H1 */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-8 blur-sm transition-transform duration-1000 ease-out"
        style={{ 
          marginTop: '32px',
          transform: 'translateY(var(--parallax-y, 0px))',
          zIndex: 1
        }}
      >
        <img 
          src={symbolSvg} 
          alt="" 
          aria-hidden="true"
          className="absolute top-1/2 left-1/4 w-48 md:w-64 text-tech-primary transform -translate-y-1/2"
          style={{ filter: 'blur(14px)' }}
        />
      </div>

      {/* Corner brand bug */}
      <div 
        className="fixed top-20 left-4 z-30 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: 'var(--corner-opacity, 0.6)' }}
      >
        <img 
          src={symbolSvg} 
          alt="" 
          aria-hidden="true"
          className="w-7 h-7 text-tech-primary/60"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] py-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none text-balance">
              <span className="flex items-center transform transition-all duration-700 hover:translate-y-[-6px]" style={{ transformStyle: 'preserve-3d' }}>
                <img 
                  src={symbolSvg} 
                  alt="" 
                  aria-hidden="true"
                  className="w-6 h-6 mr-6 text-tech-primary flex-shrink-0"
                  style={{ transform: 'translateY(-2px)' }}
                />
                Automation
              </span>
              <span className="block premium-gradient text-glow transform transition-all duration-700 hover:translate-y-[-6px] ml-12" style={{ transformStyle: 'preserve-3d' }}>that ships</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-ch-68 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-500">
              IronDeskAI builds lightweight AI workflows for service businesses. 
              Automate the boring, grow the business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="magnetic-button hover-glow group text-base px-8 py-4"
              >
                <img 
                  src={symbolSvg} 
                  alt="" 
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-current flex-shrink-0"
                />
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
          
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
              <img 
                src={heroMockup} 
                alt="IronDeskAI platform interface showing automated workflow dashboard"
                className="relative rounded-2xl shadow-2xl w-full object-cover transition-transform duration-700 hover:translate-y-[-3px]"
                style={{ 
                  aspectRatio: '16/10',
                  maxHeight: 'clamp(340px, 50vw, 520px)'
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          // Hero watermark parallax and corner brand fade
          let ticking = false;
          function updateHeroEffects() {
            const scrollY = window.scrollY;
            const hero = document.getElementById('hero');
            const watermark = hero?.querySelector('[style*="--parallax-y"]');
            const corner = document.querySelector('[style*="--corner-opacity"]');
            
            if (watermark && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              const parallaxY = Math.min(scrollY * 0.1, 4);
              watermark.style.setProperty('--parallax-y', parallaxY + 'px');
            }
            
            if (corner) {
              const opacity = Math.max(0, 0.6 - (scrollY / 200) * 0.6);
              corner.style.setProperty('--corner-opacity', opacity);
            }
            
            ticking = false;
          }
          
          function requestTick() {
            if (!ticking) {
              requestAnimationFrame(updateHeroEffects);
              ticking = true;
            }
          }
          
          window.addEventListener('scroll', requestTick, { passive: true });
        `
      }} />
    </section>
  );
};

export default HeroSection;