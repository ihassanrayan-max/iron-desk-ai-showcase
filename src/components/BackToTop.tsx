import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className="fixed bottom-20 right-6 z-40 rounded-full shadow-lg animate-fade-in hover-lift"
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
  );
};

export default BackToTop;