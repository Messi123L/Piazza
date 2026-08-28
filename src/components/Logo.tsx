import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon-only';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PiazzaLogo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  const isDark = theme === 'dark';
  
  // Icon dimensions
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG mimicking the official Studio Legale Piazza mark */}
      <div className={`relative shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Outer Octagram / Moroccan-Italian Geometric Star */}
          <rect 
            x="24" 
            y="24" 
            width="72" 
            height="72" 
            transform="rotate(45 60 60)" 
            stroke="#c8a86b" 
            strokeWidth="3" 
            strokeLinejoin="round"
          />
          <rect 
            x="24" 
            y="24" 
            width="72" 
            height="72" 
            stroke={isDark ? "#ffffff" : "#0c2340"} 
            strokeWidth="3.5" 
            strokeLinejoin="round"
          />

          {/* Arch framing */}
          <path
            d="M40 86V54C40 43 49 34 60 28C71 34 80 43 80 54V86"
            stroke={isDark ? "#ffffff" : "#0c2340"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Scales of Justice Pillar */}
          <path
            d="M60 30L60 88"
            stroke={isDark ? "#c8a86b" : "#0c2340"}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M48 88H72"
            stroke={isDark ? "#c8a86b" : "#0c2340"}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Scales Balance Beam */}
          <path
            d="M34 46C46 44 54 41 60 41C66 41 74 44 86 46"
            stroke={isDark ? "#ffffff" : "#0c2340"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Pan Chains & Pan */}
          <path
            d="M34 46L24 64H44L34 46Z"
            stroke={isDark ? "#c8a86b" : "#0c2340"}
            strokeWidth="3"
            strokeLinejoin="round"
            fill={isDark ? "rgba(200,168,107,0.15)" : "rgba(12,35,64,0.08)"}
          />

          {/* Right Pan Chains & Pan */}
          <path
            d="M86 46L76 64H96L86 46Z"
            stroke={isDark ? "#c8a86b" : "#0c2340"}
            strokeWidth="3"
            strokeLinejoin="round"
            fill={isDark ? "rgba(200,168,107,0.15)" : "rgba(12,35,64,0.08)"}
          />
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col text-right leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] sm:text-xs tracking-widest uppercase font-serif font-bold ${
              isDark ? 'text-[#c8a86b]' : 'text-[#8c6d37]'
            }`}>
              STUDIO LEGALE
            </span>
          </div>
          <span className={`text-base sm:text-lg lg:text-xl font-black tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-[#0c2340]'
          }`}>
            PIAZZA
          </span>
          <span className={`text-[11px] sm:text-xs font-bold ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            مكتب PIAZZA للمحاماة
          </span>
        </div>
      )}
    </div>
  );
};
