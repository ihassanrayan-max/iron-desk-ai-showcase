import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Mail, FileText, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorSystem from '@/components/CursorSystem';
import BackToTop from '@/components/BackToTop';
import StickyWalkthrough from '@/components/StickyWalkthrough';
import conceptAnalytics from '@/assets/concept_analytics.webp';

const Agents = () => {
  const heroRef = useScrollReveal();
  const agentsRef = useScrollReveal();

  const agents = [
    {
      icon: Bot,
      title: "AI Receptionist",
      description: "24/7 customer service that handles inquiries, schedules appointments, and qualifies leads without missing a beat.",
      href: "/agents/receptionist",
      capabilities: ["Answer customer questions", "Schedule appointments", "Qualify leads", "Transfer complex calls"]
    },
    {
      icon: Mail,
      title: "Cold Email Agent", 
      description: "Research prospects, craft personalized emails, and manage follow-up sequences that actually get responses.",
      href: "/agents/cold-email",
      capabilities: ["Prospect research", "Email personalization", "Follow-up sequences", "Response tracking"]
    },
    {
      icon: FileText,
      title: "Proposal Generator",
      description: "Transform client requirements into professional proposals with accurate pricing and timelines automatically.",
      href: "/agents/proposals",
      capabilities: ["Requirements analysis", "Pricing calculation", "Timeline estimation", "Document formatting"]
    },
    {
      icon: Globe,
      title: "Site Updater",
      description: "Keep your website content fresh with automated updates, blog posts, and SEO optimizations.",
      href: "/agents/site-updater", 
      capabilities: ["Content updates", "Blog publishing", "SEO optimization", "Performance monitoring"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <CursorSystem />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 lg:py-24 overflow-hidden">
          <div 
            className="section-accent"
            style={{ backgroundImage: `url(${conceptAnalytics})` }}
          />
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                AI Agents That Actually Work
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-ch-68 mx-auto">
                Meet your new AI workforce. Each agent is designed to handle specific business tasks 
                with the reliability and consistency you need to scale.
              </p>
              <Button 
                onClick={() => scrollToSection('agents')}
                className="magnetic-button"
              >
                Meet Your Agents
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section ref={agentsRef} id="agents" className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your AI Team Members
              </h2>
              <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
                Each agent specializes in specific tasks, working together to create a seamless automated workflow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {agents.map((agent, index) => (
                <Card 
                  key={index} 
                  className="hover-lift cursor-pointer transition-all duration-300"
                  onClick={() => window.location.href = agent.href}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <agent.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{agent.title}</CardTitle>
                    <CardDescription className="text-base">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        Key Capabilities:
                      </h4>
                      <ul className="space-y-2">
                        {agent.capabilities.map((capability, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                How AI Agents Transform Your Business
              </h2>
              <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
                Unlike generic chatbots, our agents are trained specifically for your business processes and industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry Training",
                  description: "Each agent learns your industry's specific language, processes, and best practices."
                },
                {
                  title: "Custom Workflows", 
                  description: "Agents work within your existing systems and follow your established procedures."
                },
                {
                  title: "Continuous Learning",
                  description: "Agents improve over time, learning from interactions and feedback to serve you better."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-accent rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Deploy Your AI Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-ch-68 mx-auto">
                Book a walkthrough and we'll show you exactly how each agent can work within your business.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="magnetic-button"
              >
                See Agents in Action
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWalkthrough />
      <BackToTop />
    </div>
  );
};

export default Agents;