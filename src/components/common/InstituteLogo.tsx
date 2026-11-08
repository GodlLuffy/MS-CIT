import React from 'react';

interface InstituteLogoProps {
  /** Size for the emblem (width & height in px) */
  size?: number | string;
  /** Custom extra CSS classes */
  className?: string;
  /** Visual color theme: 'light' for dark canvas, 'dark' for light canvas, 'auto' */
  theme?: 'light' | 'dark' | 'auto';
  /** Show subtle ambient lighting halo */
  showGlow?: boolean;
  /** Optional variant: 'icon' for emblem seal, 'full' for emblem + brand text */
  variant?: 'icon' | 'full';
  showBadge?: boolean;
}

/**
 * Prerna Computer Academy - Official Normal Institute Logo Emblem
 * 
 * Standard Academic Seal & Prestigious Monogram:
 * - Outer Concentric Beveled Rim in 24K Liquid Gold
 * - Rich Royal Aubergine Medallion Canvas (#3A0F34 -> #120210)
 * - Tri-Star Summit (Govt Recognized • MKCL Authorized • MSBTE Certified)
 * - High-Contrast Bold "PCA" Monogram
 * - Lower Academic Honor Laurel Wreath
 * - Official "MKCL ALC" Accreditation Plaque
 */
export const InstituteLogo: React.FC<InstituteLogoProps> = ({ 
  size = 48,
  className = '',
  showGlow = true,
  variant = 'icon'
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 select-none group transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size }}
      aria-label="PCA - Prerna Computer Academy Official Emblem"
    >
      {/* Ambient Warm Golden Halo Glow */}
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full bg-marigold/25 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
          style={{ transform: 'scale(0.95)' }}
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_4px_12px_rgba(58,15,52,0.22)]"
      >
        <defs>
          {/* 1. Deep Velvet Royal Aubergine Canvas */}
          <radialGradient id="acadCanvas" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#4D1445" />
            <stop offset="50%" stopColor="#2A0B26" />
            <stop offset="90%" stopColor="#140213" />
            <stop offset="100%" stopColor="#0B010A" />
          </radialGradient>

          {/* 2. 24K Liquid Gold Metallic Gradient */}
          <linearGradient id="acadGold" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="25%" stopColor="#F5BE2E" />
            <stop offset="65%" stopColor="#EAAA00" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* 3. High-Contrast Border Gold */}
          <linearGradient id="acadGoldBorder" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#F5BE2E" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#92400E" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#F5BE2E" stopOpacity="0.95" />
          </linearGradient>

          {/* 4. Drop Shadow for Metallic Embossing */}
          <filter id="acadEmboss" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* 1. Outer Circular Base */}
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="url(#acadCanvas)"
          stroke="url(#acadGoldBorder)"
          strokeWidth="2.4"
        />

        {/* 2. Concentric Precision Guilloché Ring */}
        <circle
          cx="50"
          cy="50"
          r="42.5"
          stroke="url(#acadGoldBorder)"
          strokeWidth="0.8"
          strokeDasharray="2 2.5"
          strokeOpacity="0.65"
          fill="none"
        />

        {/* 3. Inner Fine Golden Frame */}
        <circle
          cx="50"
          cy="50"
          r="38.5"
          stroke="url(#acadGold)"
          strokeWidth="0.6"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* 4. TRI-STAR SUMMIT (Govt Recognized • MKCL • MSBTE) */}
        <g fill="url(#acadGold)">
          {/* Center Star (Slightly larger) */}
          <polygon points="50,15.5 51.5,19.5 55.5,19.5 52.2,22 53.5,26 50,23.5 46.5,26 47.8,22 44.5,19.5 48.5,19.5" />
          {/* Left Star */}
          <polygon points="36,19 37.2,22.2 40.5,22.2 37.8,24.2 38.8,27.5 36,25.5 33.2,27.5 34.2,24.2 31.5,22.2 34.8,22.2" transform="scale(0.85) translate(8, 3)" />
          {/* Right Star */}
          <polygon points="64,19 65.2,22.2 68.5,22.2 65.8,24.2 66.8,27.5 64,25.5 61.2,27.5 62.2,24.2 59.5,22.2 62.8,22.2" transform="scale(0.85) translate(8, 3)" />
        </g>

        {/* 5. CENTERPIECE: BOLD MAJESTIC "PCA" MONOGRAM */}
        <g filter="url(#acadEmboss)">
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="24"
            letterSpacing="1.5px"
            fill="url(#acadGold)"
          >
            PCA
          </text>
        </g>

        {/* 6. GOLDEN ACCREDITATION DIVIDER & PLAQUE: "MKCL ALC" */}
        <g filter="url(#acadEmboss)">
          {/* Subtle Ribbon/Plaque Backing */}
          <rect
            x="24"
            y="61"
            width="52"
            height="11"
            rx="3"
            fill="#230620"
            stroke="url(#acadGold)"
            strokeWidth="0.8"
          />
          {/* Laser-sharp Accreditation Text */}
          <text
            x="50"
            y="69"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6.8"
            letterSpacing="1.8px"
            fill="#FFFDF0"
          >
            MKCL ALC
          </text>
        </g>

        {/* 7. CLASSIC ACADEMIC LAUREL WREATH (Lower Arc) */}
        <g fill="url(#acadGold)" opacity="0.85">
          {/* Left Laurel Branch */}
          <path d="M22 68 C20 72 23 76 27 79 C28 77 28 74 25 71 Z" />
          <path d="M28 78 C31 82 35 84 40 85 C40 83 39 80 35 78 Z" />
          <path d="M20 58 C18 63 20 67 23 70 C24 67 24 64 22 61 Z" />

          {/* Right Laurel Branch */}
          <path d="M78 68 C80 72 77 76 73 79 C72 77 72 74 75 71 Z" />
          <path d="M72 78 C69 82 65 84 60 85 C60 83 61 80 65 78 Z" />
          <path d="M80 58 C82 63 80 67 77 70 C76 67 76 64 78 61 Z" />

          {/* Center Honor Star Node */}
          <circle cx="50" cy="85.5" r="1.6" fill="#FFFDF0" />
        </g>
      </svg>
    </div>
  );
};
