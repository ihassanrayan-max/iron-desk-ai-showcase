import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Map, CheckCircle, ArrowRight } from "lucide-react";

const ResourcesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const resources = [
    {
      icon: FileText,
      title: "The 3-Step AI Sales Flow",
      type: "Playbook",
      description: "Complete guide to implementing AI in your sales process"
    },
    {
      icon: Map,
      title: "DIY Local SEO for Service SMBs",
      type: "Guide", 
      description: "Step-by-step local search optimization for service businesses"
    },
    {
      icon: CheckCircle,
      title: "An Intake Form That Converts",
      type: "Template",
      description: "Proven intake form template to qualify and convert leads"
    }
  ];

  return (
    <section id="resources" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Resources
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card
                key={resource.title}
                className="p-8 border border-border rounded-2xl bg-card hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {resource.description}
                </p>
                
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                  className="p-0 h-auto font-medium text-accent hover:text-accent/80 group"
                >
                  Coming soon
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;