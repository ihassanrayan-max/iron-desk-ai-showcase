import { Button } from "./ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-screen flex items-center pt-16">
      <div className="hero-bg absolute inset-0 pointer-events-none" />
      <div className="relative page-width mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none">
                Automate the boring.{" "}
                <span className="block">Grow the business.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed content-width">
                IronDeskAI builds lightweight AI workflows for service businesses. 
                This is the front-end—book a walkthrough; features roll out next.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base px-8 py-6 h-auto"
              >
                Get a Walkthrough
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                onClick={() => scrollToSection("platform")}
                className="text-base px-8 py-6 h-auto"
              >
                Explore the Platform
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroMockup}
                alt="IronDeskAI platform preview"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;