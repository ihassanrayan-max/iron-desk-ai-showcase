import { Button } from "./ui/button";
import symbolSvg from "@/assets/symbol.svg";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 section-divider relative overflow-hidden">
      {/* Footer lockup - large symbol behind content */}
      <div className="absolute inset-0 pointer-events-none opacity-6 flex items-center justify-center">
        <img 
          src={symbolSvg} 
          alt="" 
          aria-hidden="true"
          className="w-48 md:w-64 text-tech-primary/20"
          style={{ filter: 'blur(2px)' }}
        />
      </div>
      
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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