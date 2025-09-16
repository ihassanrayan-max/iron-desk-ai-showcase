import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import AnimatedLogo from "./AnimatedLogo";
import SymbolIcon from "./SymbolIcon";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    workflow: ""
  });
  
  const { submitLead, isSubmitting } = useFormSubmission();
  const { trackFormStart, trackCTAClick } = useAnalytics();
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      first_workflow: formData.workflow,
    }, 'walkthrough_form');

    if (result.success) {
      setFormData({ name: "", email: "", company: "", workflow: "" });
      setHasStartedForm(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Track form start on first interaction
    if (!hasStartedForm) {
      trackFormStart('walkthrough_form');
      setHasStartedForm(true);
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName, 'contact_section');
  };

  return (
    <section id="contact" className="py-16 section-divider">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-bold mb-4">
              Book a quick walkthrough
            </h2>
            <p className="text-muted-foreground leading-relaxed content-width mx-auto">
              Tell us your niche and stack. We'll map the first workflow to ship.
            </p>
          </div>

          <Card className="p-6 md:p-8 border border-border rounded-2xl bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company/Niche"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>
              
              <div>
                <Textarea
                  name="workflow"
                  placeholder="What's the one workflow to automate first?"
                  value={formData.workflow}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>
              
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto text-base px-12 py-6 h-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Additional CTA with Animated Logo */}
          <div className="mt-16 p-8 bg-secondary rounded-2xl">
            <div className="flex flex-col items-center space-y-6">
              {/* Animated Logo */}
              <AnimatedLogo className="transform scale-125" />
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Ready to automate your business?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join our early adopters and get priority access to new features.
                </p>
                <div className="flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-base px-8 py-6 h-auto flex items-center gap-3"
                    onClick={() => handleCTAClick('get_started_today')}
                  >
                    <SymbolIcon size={20} className="text-current" />
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;