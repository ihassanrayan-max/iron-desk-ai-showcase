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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 h-14 md:h-16 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-slate-800/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
        <div className="flex items-center justify-between h-full w-full">
          {/* Left Side - Animated Logo */}
          <div className="flex items-center">
            <AnimatedLogo 
              onClick={() => scrollToSection("hero")}
              className="transform transition-all duration-300 hover:rotate-1"
            />
          </div>

          {/* Center - Navigation (Desktop only) */}
          <nav className="hidden lg:flex items-center space-x-8 h-full absolute left-1/2 transform -translate-x-1/2">
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
                className="relative text-foreground/80 hover:text-foreground transition-colors duration-200 group leading-none flex items-center h-full"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-primary to-tech-bright transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Side - CTA Button */}
          <div className="flex items-center">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="magnetic-button text-sm px-6 py-2"
              >
                Get a Walkthrough
              </Button>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="premium-card text-sm px-4 py-2"
              >
                Get a Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;