import React from 'react';
import { Phone, ArrowRight, MapPin, Award } from 'lucide-react';

interface TopBannerProps {
  onOpenEnrollment: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenEnrollment }) => {
  return (
    <div className="bg-aubergine-950 text-silver-200 text-xs py-2 px-3 sm:px-4 shadow-sm border-b border-marigold-500/35 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
        
        {/* Left Side: Notice & Location in Ice Silver & Marigold */}
        <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 flex-wrap">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-marigold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-marigold-400"></span>
          </span>
          <span className="inline-flex items-center gap-1 font-extrabold text-marigold-400 whitespace-nowrap">
            <Award className="w-3.5 h-3.5" />
            Admissions Open:
          </span>
          <span className="text-silver-200 font-medium text-[11px] sm:text-xs">
            New MS-CIT Batch at <strong className="text-white font-bold">Prerna Computer Academy Degloor</strong>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-silver-300 text-[10px] bg-aubergine-800/80 border border-marigold-500/30 px-2 py-0.5 rounded-full">
            <MapPin className="w-3 h-3 text-marigold-400" />
            Near Global English School, Rampur Rd, Degloor
          </span>
        </div>

        {/* Right Side: Quick Action & Call */}
        <div className="flex items-center justify-center gap-3 text-xs font-semibold shrink-0">
          <a
            href="tel:+919970362555"
            className="flex items-center gap-1 text-marigold-400 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap font-bold">+91 99703 62555</span>
          </a>
          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-1 bg-marigold-500 hover:bg-marigold-400 text-aubergine-950 font-black px-2.5 py-0.5 rounded-full transition-all hover:scale-105 active:scale-95 text-[11px] shadow-sm"
          >
            <span>Book Free Seat</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
