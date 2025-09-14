interface SymbolIconProps {
  className?: string;
  size?: number;
}

const SymbolIcon = ({ className = "", size = 16 }: SymbolIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-70"
      />
      
      {/* Circuit Tree Pattern */}
      <g stroke="currentColor" strokeWidth="2.5" fill="none">
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
        <circle cx="50" cy="35" r="2.5" fill="currentColor" />
        <circle cx="35" cy="35" r="2.5" fill="currentColor" />
        <circle cx="65" cy="35" r="2.5" fill="currentColor" />
        <circle cx="50" cy="50" r="2.5" fill="currentColor" />
        
        {/* End nodes */}
        <circle cx="25" cy="25" r="2" fill="currentColor" className="opacity-80" />
        <circle cx="25" cy="45" r="2" fill="currentColor" className="opacity-80" />
        <circle cx="75" cy="25" r="2" fill="currentColor" className="opacity-80" />
        <circle cx="75" cy="45" r="2" fill="currentColor" className="opacity-80" />
        <circle cx="35" cy="55" r="2" fill="currentColor" className="opacity-80" />
        <circle cx="65" cy="55" r="2" fill="currentColor" className="opacity-80" />
      </g>
    </svg>
  );
};

export default SymbolIcon;