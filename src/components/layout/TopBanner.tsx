import React from 'react';
import { Sparkles, Phone, ArrowRight, MapPin, Award } from 'lucide-react';

interface TopBannerProps {
  onOpenEnrollment: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenEnrollment }) => {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white text-xs py-2 px-3 sm:px-4 shadow-sm border-b border-gold-500/30 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
        
        {/* Left Side: Notice & Location */}
        <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 flex-wrap">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
          </span>
          <span className="inline-flex items-center gap-1 font-extrabold text-gold-300 whitespace-nowrap">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            Admissions Open:
          </span>
          <span className="text-slate-200 font-medium text-[11px] sm:text-xs">
            New MS-CIT Batch at <strong className="text-gold-200 font-bold">Prerna Computer Academy Degloor</strong>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300 text-[10px] bg-gold-500/10 border border-gold-500/20 px-2 py-0.5 rounded-full">
            <MapPin className="w-3 h-3 text-gold-400" />
            Near Global English School, Rampur Rd, Degloor
          </span>
        </div>

        {/* Right Side: Quick Action & Call */}
        <div className="flex items-center justify-center gap-3 text-xs font-semibold shrink-0">
          <a
            href="tel:+919421867123"
            className="flex items-center gap-1 text-gold-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span className="whitespace-nowrap font-bold">+91 94218 67123</span>
          </a>
          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-1 bg-gold-500 hover:bg-gold-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full transition-all hover:scale-105 active:scale-95 text-[11px] shadow-sm"
          >
            <span>Book Free Seat</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
