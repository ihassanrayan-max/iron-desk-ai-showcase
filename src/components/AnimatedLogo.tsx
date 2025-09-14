import { useState, useEffect } from "react";

interface AnimatedLogoProps {
  onClick?: () => void;
  className?: string;
}

const AnimatedLogo = ({ onClick, className = "" }: AnimatedLogoProps) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Initial animation
    const initialTimer = setTimeout(() => setAnimationPhase(1), 100);
    
    // Repeating animation cycle every 5 seconds
    const interval = setInterval(() => {
      setAnimationPhase(0);
      setTimeout(() => setAnimationPhase(1), 100);
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer group relative ${className}`}
      style={{
        height: 'clamp(20px, 5vw, 24px)', // Mobile first
      }}
    >
      <style>
        {`
          @media (min-width: 768px) {
            .logo-container {
              height: clamp(22px, 2.8vw, 28px) !important;
            }
          }
        `}
      </style>
      {/* Container with hover effects */}
      <div className="logo-container relative flex flex-col items-center justify-center h-full transition-all duration-300 hover:rotate-1" style={{ height: 'inherit' }}>
        {/* Circuit Symbol with Bounce Animation */}
        <div 
          className={`relative transition-all duration-500 ease-out ${
            animationPhase === 1
              ? 'animate-[bounce_0.8s_ease-out] opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[-6px]'
          }`}
          style={{ 
            filter: 'drop-shadow(0 0 6px hsl(var(--tech-primary) / 0.6))',
            height: '60%',
            minHeight: '18px',
            maxHeight: '24px'
          }}
        >
          {/* Tech Circuit Symbol */}
          <div className="w-full h-full mx-auto relative" style={{ aspectRatio: '1' }}>
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
          className={`text-center transition-all duration-700 ease-out ${
            animationPhase === 1
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: animationPhase === 1 ? '300ms' : '0ms',
            fontFamily: 'var(--font-tech, monospace)',
            textShadow: '0 0 3px hsl(var(--tech-primary) / 0.4)',
            fontSize: 'clamp(9px, 1.4vw, 11px)',
            lineHeight: '1'
          }}
        >
          <h1 className="font-bold tracking-wider text-tech-bright">
            IRONDESKAI
          </h1>
        </div>

        {/* Slogan with Slide Right Animation */}
        <div 
          className={`text-center transition-all duration-700 ease-out ${
            animationPhase === 1
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-[-12px]'
          }`}
          style={{ 
            transitionDelay: animationPhase === 1 ? '600ms' : '0ms',
            textShadow: '0 0 2px hsl(var(--tech-primary) / 0.3)',
            fontSize: 'clamp(6px, 0.9vw, 8px)',
            lineHeight: '1'
          }}
        >
          <p className="tracking-widest text-tech-primary/70 uppercase">
            Grow While You Sleep
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;