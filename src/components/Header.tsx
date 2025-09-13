import { useState, useEffect } from "react";
import { Button } from "./ui/button";

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
          {/* Logo with 3D effect */}
          <div 
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:rotate-1"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/src/assets/logo-irondeskai.png" 
                  alt="IronDeskAI" 
                  className="h-10 w-auto transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 10px hsl(var(--tech-primary) / 0.3))'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 to-tech-bright/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

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