import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Rocket, BarChart3, DollarSign, Settings } from "lucide-react";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import accentPlatformImg from '@/assets/accent_platform.png';
import platformMockImg from '@/assets/platform_mock.png';

const PlatformSection = () => {
  const sectionRef = useScrollReveal();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      icon: Rocket,
      title: "Start",
      description: "Site + intake setup to capture leads seamlessly"
    },
    {
      icon: BarChart3,
      title: "Market", 
      description: "Pages + outbound campaigns that convert"
    },
    {
      icon: DollarSign,
      title: "Sell",
      description: "Discovery flows to proposal automation"
    },
    {
      icon: Settings,
      title: "Manage",
      description: "Simple ops and client communication"
    }
  ];

  return (
    <section ref={sectionRef} id="platform" className="section-spacing section-divider relative overflow-hidden">
      <div 
        className="section-accent opacity-5"
        style={{ backgroundImage: `url(${accentPlatformImg})` }}
      />
      
      <div className="container-system">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              <span className="premium-gradient">Platform built</span> for speed
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-ch-68">
              No more waiting months for custom automation. Our platform ships 
              workflows in days, not quarters.
            </p>
            
            <div className="space-y-3">
              {[
                "Deploy in days, not months",
                "No complex setup or training", 
                "Works with your existing tools",
                "Built for non-technical teams"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="premium-card rounded-2xl p-1">
              <img 
                src={platformMockImg} 
                alt="Platform dashboard showing automation workflows and analytics"
                className="w-full rounded-xl hover-lift"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={step.title}
                className="premium-card hover-glow p-4 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-3">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {step.description}
                </p>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => scrollToSection("agents")}
            className="magnetic-button premium-card"
          >
            Explore the Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;