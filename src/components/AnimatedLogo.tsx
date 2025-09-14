import { useState, useEffect } from "react";
import logoAnimated from "@/assets/logo-animated.png";

interface AnimatedLogoProps {
  onClick?: () => void;
  className?: string;
}

const AnimatedLogo = ({ onClick, className = "" }: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer group relative ${className}`}
    >
      {/* Container with hover effects */}
      <div className="relative transform transition-all duration-300 hover:scale-105">
        {/* Circuit Symbol with Bounce Animation */}
        <div 
          className={`relative mb-2 transition-all duration-[310ms] ease-out ${
            isVisible 
              ? 'animate-[bounce_0.6s_ease-out] opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[-20px]'
          }`}
          style={{ 
            animationDelay: '0ms',
            filter: 'drop-shadow(0 0 15px hsl(var(--tech-primary) / 0.4))'
          }}
        >
          {/* Tech Circuit Symbol */}
          <div className="w-12 h-12 mx-auto relative">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--tech-primary))"
                strokeWidth="2"
                className="opacity-60"
              />
              
              {/* Circuit Tree Pattern */}
              <g stroke="hsl(var(--tech-bright))" strokeWidth="1.5" fill="none" className="drop-shadow-sm">
                {/* Main trunk */}
                <path d="M50 75 L50 25" />
                
                {/* Branch Level 1 */}
                <path d="M50 35 L35 35" />
                <path d="M50 35 L65 35" />
                
                {/* Branch Level 2 */}
                <path d="M35 35 L25 25" />
                <path d="M35 35 L25 45" />
                <path d="M65 35 L75 25" />
                <path d="M65 35 L75 45" />
                
                {/* Sub-branches */}
                <path d="M50 50 L40 50" />
                <path d="M50 50 L60 50" />
                <path d="M40 50 L35 55" />
                <path d="M60 50 L65 55" />
                
                {/* Connection nodes */}
                <circle cx="50" cy="35" r="2" fill="hsl(var(--tech-bright))" />
                <circle cx="35" cy="35" r="2" fill="hsl(var(--tech-bright))" />
                <circle cx="65" cy="35" r="2" fill="hsl(var(--tech-bright))" />
                <circle cx="50" cy="50" r="2" fill="hsl(var(--tech-bright))" />
                
                {/* End nodes */}
                <circle cx="25" cy="25" r="1.5" fill="hsl(var(--tech-primary))" />
                <circle cx="25" cy="45" r="1.5" fill="hsl(var(--tech-primary))" />
                <circle cx="75" cy="25" r="1.5" fill="hsl(var(--tech-primary))" />
                <circle cx="75" cy="45" r="1.5" fill="hsl(var(--tech-primary))" />
                <circle cx="35" cy="55" r="1.5" fill="hsl(var(--tech-primary))" />
                <circle cx="65" cy="55" r="1.5" fill="hsl(var(--tech-primary))" />
              </g>
            </svg>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 to-tech-bright/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* IRONDESKAI Text with Fade Animation */}
        <div 
          className={`text-center mb-1 transition-all duration-[620ms] ease-out ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
          style={{ 
            animationDelay: '200ms',
            fontFamily: 'var(--font-tech, monospace)',
            textShadow: '0 0 10px hsl(var(--tech-primary) / 0.5)'
          }}
        >
          <h1 className="text-lg font-bold tracking-wider text-tech-bright">
            IRONDESKAI
          </h1>
        </div>

        {/* Slogan with Slide Right Animation */}
        <div 
          className={`text-center transition-all duration-[620ms] ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-[-30px]'
          }`}
          style={{ 
            animationDelay: '400ms',
            textShadow: '0 0 8px hsl(var(--tech-primary) / 0.3)'
          }}
        >
          <p className="text-xs tracking-widest text-tech-primary/80 uppercase">
            Grow While You Sleep
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;