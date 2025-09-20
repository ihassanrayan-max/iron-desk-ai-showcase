import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, FileText, Globe, ArrowRight } from "lucide-react";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import conceptAnalytics from '@/assets/concept_analytics.webp';
import agentColdEmail from '@/assets/agent_cold_email.webp';
import agentCalendar from '@/assets/agent_calendar.webp';
import agentContent from '@/assets/agent_content.webp';
import agentWebResearch from '@/assets/agent_web_research.webp';

const AgentsSection = () => {
  const sectionRef = useScrollReveal();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const agents = [
    {
      icon: Mail,
      title: "AI Cold Email Agent",
      description: "Prospect, personalize, schedule replies",
      status: "front-end preview",
      image: agentColdEmail
    },
    {
      icon: Phone,
      title: "AI Receptionist/Booker",
      description: "Capture & route calls; logs to CRM",
      status: "coming soon",
      image: agentCalendar
    },
    {
      icon: FileText,
      title: "Proposal Drafter",
      description: "Turn discovery notes into a clean offer",
      status: "preview ready",
      image: agentContent
    },
    {
      icon: Globe,
      title: "Website Updater",
      description: "Update services/pricing site-wide without dev time",
      status: "in development",
      image: agentWebResearch
    }
  ];

  return (
    <section ref={sectionRef} id="agents" className="section-medium section-divider relative overflow-hidden">
      <div 
        className="section-accent opacity-5"
        style={{ backgroundImage: `url(${conceptAnalytics})` }}
      />
      
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="premium-gradient">AI workforce</span>
          </h2>
          <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
            Preview what's coming. Today: demo the flows; full features ship next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <Card
                key={agent.title}
                className="premium-card hover-glow p-4 group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={agent.image} 
                    alt={`${agent.title} concept visualization`}
                    className="w-full h-full object-cover scroll-reveal"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {agent.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{agent.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => scrollToSection("resources")}
            className="magnetic-button premium-card"
          >
            Explore the Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;