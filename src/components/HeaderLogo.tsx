import { useState, useEffect } from "react";

interface HeaderLogoProps {
  onClick?: () => void;
  className?: string;
}

const HeaderLogo = ({ onClick, className = "" }: HeaderLogoProps) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Initial animation
    const initialTimer = setTimeout(() => setAnimationPhase(1), 100);
    
    // Repeating animation cycle every 6 seconds
    const interval = setInterval(() => {
      setAnimationPhase(0);
      setTimeout(() => setAnimationPhase(1), 100);
    }, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer group relative ${className}`}
    >
      <div className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">
        {/* Circuit Symbol - Larger and more visible */}
        <div 
          className={`relative transition-all duration-500 ease-out ${
            animationPhase === 1
              ? 'animate-[bounce_0.8s_ease-out] opacity-100 rotate-0' 
              : 'opacity-0 rotate-[-10deg]'
          }`}
          style={{ 
            filter: 'drop-shadow(0 0 12px hsl(var(--tech-primary) / 0.6))'
          }}
        >
          <div className="w-12 h-12 relative">
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
                className="opacity-70"
              />
              
              {/* Circuit Tree Pattern */}
              <g stroke="hsl(var(--tech-bright))" strokeWidth="2" fill="none" className="drop-shadow-sm">
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
                <circle cx="50" cy="35" r="2.5" fill="hsl(var(--tech-bright))" />
                <circle cx="35" cy="35" r="2.5" fill="hsl(var(--tech-bright))" />
                <circle cx="65" cy="35" r="2.5" fill="hsl(var(--tech-bright))" />
                <circle cx="50" cy="50" r="2.5" fill="hsl(var(--tech-bright))" />
                
                {/* End nodes */}
                <circle cx="25" cy="25" r="2" fill="hsl(var(--tech-primary))" />
                <circle cx="25" cy="45" r="2" fill="hsl(var(--tech-primary))" />
                <circle cx="75" cy="25" r="2" fill="hsl(var(--tech-primary))" />
                <circle cx="75" cy="45" r="2" fill="hsl(var(--tech-primary))" />
                <circle cx="35" cy="55" r="2" fill="hsl(var(--tech-primary))" />
                <circle cx="65" cy="55" r="2" fill="hsl(var(--tech-primary))" />
              </g>
            </svg>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/30 to-tech-bright/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* IRONDESKAI Text with Slide Animation */}
        <div 
          className={`transition-all duration-700 ease-out ${
            animationPhase === 1
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-[-20px]'
          }`}
          style={{ 
            transitionDelay: animationPhase === 1 ? '300ms' : '0ms',
            fontFamily: 'var(--font-tech, monospace)',
            textShadow: '0 0 8px hsl(var(--tech-primary) / 0.4)'
          }}
        >
          <h1 className="text-xl font-bold tracking-wider text-tech-bright">
            IRONDESKAI
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;