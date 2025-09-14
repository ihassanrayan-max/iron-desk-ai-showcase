import { Button } from "./ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-spacing section-divider">
      <div className="container-system">
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