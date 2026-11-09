import React from 'react';

export interface InstituteLogoProps {
  /** Size of the emblem mark in pixels (default: 48) */
  size?: number | string;
  /** Custom additional CSS classes */
  className?: string;
  /** Visual lockup variant: 'icon' (seal only), 'horizontal' (emblem + text), 'stacked' (vertical lockup) */
  variant?: 'icon' | 'horizontal' | 'stacked' | 'full';
  /** Color theme: 'dark' (for light/white backgrounds), 'light' (for dark aubergine backgrounds), 'auto' */
  theme?: 'dark' | 'light' | 'auto';
  /** Show subtle golden halo illumination */
  showGlow?: boolean;
  /** Show Marathi subtitle in horizontal/stacked lockup */
  showMarathiSub?: boolean;
  /** Show government accreditation badge */
  showBadge?: boolean;
  /** Optional click handler (used for navigation or 5-tap secret admin trigger) */
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Prerna Computer Academy - Official Master Institute Logo
 * Designed strictly adhering to UI UX Pro Max Brand & Logo Specification:
 * - 4 Canonical Variants: Icon Seal, Full Horizontal Lockup, Stacked Lockup, Light/Dark Themes
 * - 24K Liquid Gold Guilloché Geometry & Deep Royal Aubergine Canvas (#3A0F34)
 * - Tri-Star Accreditation Summit (Govt Recognized • MKCL Authorized • MSBTE Certified)
 * - "Prerna Jyoti" (Torch of Inspiration & Wisdom) + Open Digital Book of Learning
 * - Laser-sharp "PCA" Monogram & "MKCL ALC" Accreditation Plaque
 * - Classical Academic Laurel Wreath of Educational Legacy
 */
export const InstituteLogo: React.FC<InstituteLogoProps> = ({
  size = 48,
  className = '',
  variant = 'icon',
  theme = 'auto',
  showGlow = true,
  showMarathiSub = true,
  showBadge = true,
  onClick
}) => {
  const numericSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;

  // The Emblem SVG component with scalable vector definitions
  const renderEmblem = () => (
    <div 
      className="relative inline-flex items-center justify-center shrink-0 select-none group"
      style={{ width: `${numericSize}px`, height: `${numericSize}px` }}
    >
      {/* Ambient Warm Golden Halo Glow */}
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full bg-marigold/30 blur-md opacity-45 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none"
          style={{ transform: 'scale(0.92)' }}
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_4px_14px_rgba(58,15,52,0.25)] transition-transform duration-300 group-hover:scale-[1.03]"
        aria-label="PCA - Prerna Computer Academy Official Seal"
      >
        <defs>
          {/* 1. Deep Velvet Royal Aubergine Medallion Canvas */}
          <radialGradient id="pcaCanvasGrad" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#4E1546" />
            <stop offset="45%" stopColor="#2A0B26" />
            <stop offset="85%" stopColor="#150214" />
            <stop offset="100%" stopColor="#0B010A" />
          </radialGradient>

          {/* 2. 24K Liquid Gold Metallic Gradient */}
          <linearGradient id="pcaGoldMetallic" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFEE8" />
            <stop offset="20%" stopColor="#F5BE2E" />
            <stop offset="55%" stopColor="#EAAA00" />
            <stop offset="85%" stopColor="#BF8500" />
            <stop offset="100%" stopColor="#853A00" />
          </linearGradient>

          {/* 3. High-Contrast Border Gold */}
          <linearGradient id="pcaGoldBorder" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFEE8" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#F5BE2E" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#853A00" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F5BE2E" stopOpacity="0.95" />
          </linearGradient>

          {/* 4. Drop Shadow for Metallic Embossing */}
          <filter id="pcaEmboss" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.65" />
          </filter>

          {/* 5. Subtle Inner Lighting Filter */}
          <filter id="pcaGlowFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#EAAA00" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. Outer Circular Base */}
        <circle
          cx="50"
          cy="50"
          r="47.5"
          fill="url(#pcaCanvasGrad)"
          stroke="url(#pcaGoldBorder)"
          strokeWidth="2.4"
        />

        {/* 2. Concentric Precision Guilloché Dot Ring */}
        <circle
          cx="50"
          cy="50"
          r="43.5"
          stroke="url(#pcaGoldBorder)"
          strokeWidth="0.8"
          strokeDasharray="2.2 2.2"
          strokeOpacity="0.75"
          fill="none"
        />

        {/* 3. Inner Fine Golden Frame */}
        <circle
          cx="50"
          cy="50"
          r="39.5"
          stroke="url(#pcaGoldMetallic)"
          strokeWidth="0.6"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* 4. TRI-STAR ACCREDITATION SUMMIT (Govt Recognized • MKCL • MSBTE) */}
        <g fill="url(#pcaGoldMetallic)" filter="url(#pcaGlowFilter)">
          {/* Center Star (Stature Leader) */}
          <polygon points="50,13.5 51.5,17.5 55.8,17.5 52.4,20.2 53.7,24.2 50,21.7 46.3,24.2 47.6,20.2 44.2,17.5 48.5,17.5" />
          {/* Left Star */}
          <polygon points="36,16.5 37.2,19.7 40.5,19.7 37.8,21.7 38.8,25 36,23 33.2,25 34.2,21.7 31.5,19.7 34.8,19.7" transform="scale(0.85) translate(8, 2.5)" />
          {/* Right Star */}
          <polygon points="64,16.5 65.2,19.7 68.5,19.7 65.8,21.7 66.8,25 64,23 61.2,25 62.2,21.7 59.5,19.7 62.8,19.7" transform="scale(0.85) translate(8, 2.5)" />
        </g>

        {/* 5. PRERNA INSPIRATION FLAME & TORCH ("प्रेरणा ज्योती") */}
        <g opacity="0.9" fill="url(#pcaGoldMetallic)">
          {/* Torch Flame Center Curl */}
          <path d="M50 25 C47.5 28.5 45.5 31.5 47 34.5 C48 36.5 50.5 37 50 39 C49.5 37 52 36.5 53 34.5 C54.5 31.5 52.5 28.5 50 25 Z" />
          {/* Left Flame Wing */}
          <path d="M46.5 30 C44 32.5 43.5 34.5 44.5 36.5 C45.5 35 46.5 34 47 32 Z" opacity="0.75" />
          {/* Right Flame Wing */}
          <path d="M53.5 30 C56 32.5 56.5 34.5 55.5 36.5 C54.5 35 53.5 34 53 32 Z" opacity="0.75" />
        </g>

        {/* 6. CENTERPIECE: BOLD MAJESTIC "PCA" MONOGRAM */}
        <g filter="url(#pcaEmboss)">
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="23"
            letterSpacing="1.8px"
            fill="url(#pcaGoldMetallic)"
          >
            PCA
          </text>
        </g>

        {/* 7. GOLDEN ACCREDITATION DIVIDER & PLAQUE: "MKCL ALC" */}
        <g filter="url(#pcaEmboss)">
          {/* Plaque Backing */}
          <rect
            x="23"
            y="60.5"
            width="54"
            height="11.5"
            rx="3"
            fill="#230620"
            stroke="url(#pcaGoldMetallic)"
            strokeWidth="0.85"
          />
          {/* Laser-sharp Accreditation Text */}
          <text
            x="50"
            y="69"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="7"
            letterSpacing="1.8px"
            fill="#FFFEE8"
          >
            MKCL ALC
          </text>
        </g>

        {/* 8. CLASSIC ACADEMIC LAUREL WREATH (Lower Arc of Distinction) */}
        <g fill="url(#pcaGoldMetallic)" opacity="0.9">
          {/* Left Laurel Branch */}
          <path d="M22 68 C20 72 23 76 27 79 C28 77 28 74 25 71 Z" />
          <path d="M28 78 C31 82 35 84 40 85 C40 83 39 80 35 78 Z" />
          <path d="M20 58 C18 63 20 67 23 70 C24 67 24 64 22 61 Z" />

          {/* Right Laurel Branch */}
          <path d="M78 68 C80 72 77 76 73 79 C72 77 72 74 75 71 Z" />
          <path d="M72 78 C69 82 65 84 60 85 C60 83 61 80 65 78 Z" />
          <path d="M80 58 C82 63 80 67 77 70 C76 67 76 64 78 61 Z" />

          {/* Center Honor Star Node */}
          <circle cx="50" cy="85.5" r="1.6" fill="#FFFEE8" />
        </g>
      </svg>
    </div>
  );

  // Variant A: Just the Icon Seal
  if (variant === 'icon') {
    return (
      <div 
        onClick={onClick}
        className={`inline-flex items-center justify-center ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        {renderEmblem()}
      </div>
    );
  }

  // Determine text coloring based on theme
  const isLightTheme = theme === 'light'; // dark background, light text
  const titleColor = isLightTheme ? 'text-white' : 'text-aubergine';
  const subtitleColor = isLightTheme ? 'text-ice/85' : 'text-aubergine/75';
  const marathiColor = isLightTheme ? 'text-marigold' : 'text-aubergine-900';

  // Variant B: Stacked Lockup (Emblem on top, text centered below)
  if (variant === 'stacked') {
    return (
      <div 
        onClick={onClick}
        className={`flex flex-col items-center text-center gap-2.5 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        {renderEmblem()}
        <div>
          <h2 className={`font-serif text-2xl sm:text-3xl font-black tracking-wider leading-none ${titleColor}`}>
            PRERNA ACADEMY
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-1 text-[11px] font-bold tracking-widest uppercase">
            <span className={subtitleColor}>COMPUTER ACADEMY</span>
            <span className="text-marigold">✦</span>
            <span className="text-marigold-600 font-extrabold">DEGLOOR</span>
          </div>
          {showMarathiSub && (
            <p className={`text-[11px] font-semibold mt-1 ${marathiColor}`}>
              प्रेरणा कॉम्प्युटर अकॅडमी देगलूर • अधिकृत MKCL केंद्र
            </p>
          )}
        </div>
      </div>
    );
  }

  // Variant C: Full Horizontal Lockup (Emblem on Left, Typography on Right)
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3.5 group select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      title="Prerna Computer Academy Degloor • MKCL ALC Authorized Center"
    >
      {renderEmblem()}

      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-serif text-xl sm:text-2xl font-black tracking-[0.05em] leading-none group-hover:text-marigold transition-colors ${titleColor}`}>
            PRERNA
          </span>
          {showBadge && (
            <span className="text-[9.5px] font-extrabold tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-aubergine text-marigold border border-marigold/30 uppercase shadow-sm shrink-0">
              DEGLOOR
            </span>
          )}
        </div>

        <div className={`flex items-center gap-1.5 mt-1 text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] uppercase whitespace-nowrap ${subtitleColor}`}>
          <span>COMPUTER ACADEMY</span>
          <span className="text-marigold font-black text-[8px]">✦</span>
          <span className="text-marigold-600 font-extrabold">MKCL ALC</span>
        </div>

        {showMarathiSub && (
          <p className={`text-[10px] font-medium tracking-normal mt-0.5 hidden sm:block ${marathiColor}`}>
            प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (MS-CIT)
          </p>
        )}
      </div>
    </div>
  );
};
