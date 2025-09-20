import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, Calendar, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorSystem from '@/components/CursorSystem';
import BackToTop from '@/components/BackToTop';
import StickyWalkthrough from '@/components/StickyWalkthrough';
import conceptLeads from '@/assets/concept_leads.webp';

const UseCases = () => {
  const heroRef = useScrollReveal();
  const useCasesRef = useScrollReveal();

  const useCases = [
    {
      icon: Mail,
      title: "Lead Intake Automation",
      description: "Transform website visitors into qualified leads with intelligent intake forms and instant follow-up sequences.",
      href: "/use-cases/lead-intake",
      process: ["Visitor submits form", "AI qualifies lead", "Auto-sends follow-up", "Schedules next action"]
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Automate appointment scheduling, confirmations, and reminders to reduce no-shows and maximize efficiency.",
      href: "/use-cases/booking",
      process: ["Customer requests time", "System checks availability", "Confirms appointment", "Sends reminders"]
    },
    {
      icon: FileText,
      title: "Cold Email Sequences",
      description: "Generate personalized cold email campaigns that convert prospects into meetings automatically.",
      href: "/use-cases/cold-email", 
      process: ["Research prospect", "Generate personalized email", "Send sequence", "Track engagement"]
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
            style={{ backgroundImage: `url(${conceptLeads})` }}
          />
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Real Automation Use Cases
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-ch-68 mx-auto">
                See exactly how IronDeskAI workflows solve common business challenges. 
                From lead capture to customer follow-up, we automate the tedious tasks.
              </p>
              <Button 
                onClick={() => scrollToSection('use-cases')}
                className="magnetic-button"
              >
                Explore Use Cases
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section ref={useCasesRef} id="use-cases" className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Automation Workflows
              </h2>
              <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
                These workflows typically take weeks to set up manually. With IronDeskAI, they're ready in days.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card 
                  key={index} 
                  className="hover-lift cursor-pointer transition-all duration-300"
                  onClick={() => window.location.href = useCase.href}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <useCase.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                    <CardDescription className="text-base">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        How it works:
                      </h4>
                      <ol className="space-y-2">
                        {useCase.process.map((step, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <Button variant="outline" className="w-full group">
                      See Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                From Idea to Implementation
              </h2>
              <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
                Our proven process takes you from concept to live automation in record time.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery", desc: "We map your current processes and identify automation opportunities." },
                { step: "2", title: "Design", desc: "Create custom workflows tailored to your specific business needs." },
                { step: "3", title: "Build", desc: "Develop and test your automation with real data and scenarios." },
                { step: "4", title: "Deploy", desc: "Launch your automation and provide ongoing support and optimization." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-ch-68 mx-auto">
                Book a walkthrough and we'll show you exactly how these automations work for your business.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="magnetic-button"
              >
                Schedule Your Walkthrough
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

export default UseCases;