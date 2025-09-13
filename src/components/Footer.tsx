import { Button } from "./ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 section-divider">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div className="text-center mb-12 py-8 border border-border rounded-2xl bg-card">
          <h3 className="text-xl font-semibold mb-3">Ready to automate your workflows?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Book a walkthrough and see how IronDeskAI can streamline your operations.
          </p>
          <Button
            variant="hero"
            onClick={() => scrollToSection("contact")}
          >
            Get a Walkthrough
          </Button>
        </div>
        
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <button className="hover:text-accent transition-colors">Privacy</button>
            <button className="hover:text-accent transition-colors">Terms</button>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IronDeskAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;