import { Button } from "./ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 section-divider">
      <div className="page-width mx-auto px-4 sm:px-6 lg:px-8">
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