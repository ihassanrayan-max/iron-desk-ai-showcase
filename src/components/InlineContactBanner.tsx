import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface InlineContactBannerProps {
  title?: string;
  description?: string;
}

const InlineContactBanner = ({ 
  title = "Ready to see it in action?", 
  description = "Book a walkthrough and we'll map your first automation." 
}: InlineContactBannerProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 border border-border rounded-2xl bg-card text-center">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-6 content-width mx-auto">
            {description}
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="mx-auto"
          >
            Get a Walkthrough
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default InlineContactBanner;