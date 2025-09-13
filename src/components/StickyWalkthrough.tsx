import { useState } from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const StickyWalkthrough = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky-walkthrough">
      <Button
        onClick={scrollToContact}
        className={`magnetic-button transition-all duration-300 rounded-full shadow-lg hover:shadow-xl ${
          isExpanded ? 'px-6' : 'w-14 h-14 p-0'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Phone className="w-5 h-5" />
        {isExpanded && (
          <span className="ml-2 whitespace-nowrap">Get a Walkthrough</span>
        )}
      </Button>
    </div>
  );
};

export default StickyWalkthrough;