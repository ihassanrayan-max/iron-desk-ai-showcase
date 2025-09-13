import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Rocket, BarChart3, DollarSign, Settings } from "lucide-react";

const PlatformSection = () => {
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
    <section id="platform" className="py-16 section-divider">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            Your AI-Powered Growth System
          </h2>
          <p className="text-muted-foreground content-width mx-auto leading-relaxed">
            A pragmatic operating system for a new automation agency—ship fast, measure, iterate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={step.title}
                className="p-6 border border-border rounded-2xl bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => scrollToSection("agents")}
            className="text-accent border-accent hover:bg-accent hover:text-white"
          >
            Explore the Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;