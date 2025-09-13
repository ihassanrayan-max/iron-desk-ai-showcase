import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorSystem from '@/components/CursorSystem';
import BackToTop from '@/components/BackToTop';
import StickyWalkthrough from '@/components/StickyWalkthrough';
import accentPlatformImg from '@/assets/accent_platform.png';

const Pricing = () => {
  const heroRef = useScrollReveal();
  const pricingRef = useScrollReveal();

  const plans = [
    {
      name: "Starter",
      description: "Perfect for testing automation with a single workflow",
      price: "Custom",
      features: [
        "1 automated workflow",
        "Basic AI agent setup",
        "Email support",
        "Monthly optimization review",
        "Standard integrations"
      ],
      cta: "Start Small",
      popular: false
    },
    {
      name: "Pilot",
      description: "Scale to multiple workflows and advanced automation",
      price: "Custom", 
      features: [
        "Up to 3 automated workflows",
        "Multiple AI agents",
        "Priority support",
        "Weekly optimization reviews",
        "Advanced integrations",
        "Custom reporting dashboard"
      ],
      cta: "Scale Up",
      popular: true
    },
    {
      name: "Studio",
      description: "Full automation suite for enterprise-level operations",
      price: "Custom",
      features: [
        "Unlimited automated workflows",
        "Full AI agent team", 
        "Dedicated success manager",
        "Daily optimization reviews",
        "Enterprise integrations",
        "Advanced analytics suite",
        "Custom AI training"
      ],
      cta: "Go Enterprise", 
      popular: false
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
            style={{ backgroundImage: `url(${accentPlatformImg})` }}
          />
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Transparent, Value-Based Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-ch-68 mx-auto">
                Every automation project is unique. Our pricing reflects the real value we deliver 
                to your business, not arbitrary subscription tiers.
              </p>
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="magnetic-button"
              >
                View Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section ref={pricingRef} id="pricing" className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Automation Level
              </h2>
              <p className="text-lg text-muted-foreground max-ch-68 mx-auto">
                Start with what you need today, scale as your automation requirements grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`hover-lift transition-all duration-300 relative ${
                    plan.popular ? 'ring-2 ring-accent shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">Priced per project</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full magnetic-button ${
                        plan.popular ? '' : 'variant-outline'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => scrollToSection('contact')}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Custom Pricing?
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Value-Based Investment</h3>
                    <p className="text-muted-foreground">
                      We price based on the time and money our automation saves you, not arbitrary features.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">No Hidden Costs</h3>
                    <p className="text-muted-foreground">
                      Everything is included in your project price. No setup fees, no per-user charges, no surprises.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Transparent Process</h3>
                    <p className="text-muted-foreground">
                      We'll walk through exactly what your automation will cost before any work begins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-accent/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Typical Project Timeline</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Discovery & Planning</span>
                    <span className="text-muted-foreground">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Development & Testing</span>
                    <span className="text-muted-foreground">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deployment & Training</span>
                    <span className="text-muted-foreground">1 week</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total Project Time</span>
                    <span>4-7 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 section-divider">
          <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Pricing Questions?
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do you determine project pricing?",
                  answer: "We base pricing on the complexity of your workflows, the time savings generated, and the number of integrations required. Every quote is custom to your specific needs."
                },
                {
                  question: "Are there ongoing monthly fees?",
                  answer: "No recurring monthly fees. You pay for the project upfront, and we include 90 days of support and optimization. After that, ongoing support is optional."
                },
                {
                  question: "What if I need changes after launch?",
                  answer: "Minor tweaks and optimizations are included in your 90-day support period. Major changes or new workflows are scoped as separate projects."
                },
                {
                  question: "Do you offer payment plans?",
                  answer: "Yes, for larger projects we can structure milestone-based payments throughout the development process."
                }
              ].map((faq, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
                Ready for a Custom Quote?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-ch-68 mx-auto">
                Book a walkthrough and we'll provide a detailed, transparent quote for your automation project.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="magnetic-button"
              >
                Get Your Custom Quote
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

export default Pricing;