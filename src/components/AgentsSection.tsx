import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, FileText, Globe, ArrowRight } from "lucide-react";

const AgentsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const agents = [
    {
      icon: Mail,
      title: "AI Cold Email Agent",
      description: "Prospect, personalize, schedule replies",
      status: "front-end preview"
    },
    {
      icon: Phone,
      title: "AI Receptionist/Booker",
      description: "Capture & route calls; logs to CRM",
      status: "coming soon"
    },
    {
      icon: FileText,
      title: "Proposal Drafter",
      description: "Turn discovery notes into a clean offer",
      status: "preview ready"
    },
    {
      icon: Globe,
      title: "Website Updater",
      description: "Update services/pricing site-wide without dev time",
      status: "in development"
    }
  ];

  return (
    <section id="agents" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Agents & Automations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preview what's coming. Today: demo the flows; full features ship next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <Card
                key={agent.title}
                className="p-8 border border-border rounded-2xl bg-card hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-foreground" />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {agent.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{agent.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {agent.description}
                </p>
                
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                  className="p-0 h-auto font-medium text-accent hover:text-accent/80 group"
                >
                  Learn more
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

export default AgentsSection;