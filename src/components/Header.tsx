import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Animated Logo */}
          <AnimatedLogo 
            onClick={() => scrollToSection("hero")}
            className="transform transition-all duration-300 hover:rotate-1"
          />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: "Agents", id: "agents" },
              { label: "Platform", id: "platform" },
              { label: "About", id: "about" },
              { label: "Resources", id: "resources" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground/80 hover:text-foreground transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-primary to-tech-bright transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="magnetic-button text-sm px-6 py-2"
            >
              Get a Walkthrough
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="premium-card text-sm px-4 py-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;