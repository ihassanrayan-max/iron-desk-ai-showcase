import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Home, Building } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorSystem from '@/components/CursorSystem';
import BackToTop from '@/components/BackToTop';
import StickyWalkthrough from '@/components/StickyWalkthrough';
import conceptPlatform from '@/assets/concept_platform.webp';

const Solutions = () => {
  const heroRef = useScrollReveal();
  const solutionsRef = useScrollReveal();

  const solutions = [
    {
      icon: Users,
      title: "Dental Practices",
      description: "Automate patient intake, appointment scheduling, and follow-up communications. Streamline your practice operations.",
      href: "/solutions/dentists",
      features: ["Patient intake automation", "Appointment scheduling", "Follow-up sequences", "Insurance verification"]
    },
    {
      icon: Home,
      title: "Home Services",
      description: "From lead capture to project completion, automate your entire customer journey for home improvement and maintenance.",
      href: "/solutions/home-services", 
      features: ["Lead qualification", "Quote generation", "Project management", "Customer follow-up"]
    },
    {
      icon: Building,
      title: "Medical Clinics",
      description: "Enhance patient care with automated administrative tasks, appointment management, and treatment coordination.",
      href: "/solutions/clinics",
      features: ["Patient onboarding", "Treatment scheduling", "Prescription management", "Care coordination"]
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
            style={{ backgroundImage: `url(${conceptPlatform})` }}
          />
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Solutions Built for Your Industry
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-ch-68 mx-auto">
                IronDeskAI creates custom automation workflows tailored to your specific business needs. 
                Choose your industry to see how we can transform your operations.
              </p>
              <Button 
                onClick={() => scrollToSection('solutions')}
                className="magnetic-button"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section ref={solutionsRef} id="solutions" className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
                Each solution is crafted with deep understanding of your industry's unique challenges and workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card 
                  key={index} 
                  className="hover-lift cursor-pointer transition-all duration-300"
                  onClick={() => window.location.href = solution.href}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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

        {/* CTA Section */}
        <section className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-ch-68 mx-auto">
                We work with businesses across all sectors. Let's discuss how IronDeskAI can be customized for your specific needs.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="magnetic-button"
              >
                Book a Custom Consultation
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

export default Solutions;