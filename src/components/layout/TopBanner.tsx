import React from 'react';
import { Sparkles, Phone, ArrowRight, MapPin } from 'lucide-react';

interface TopBannerProps {
  onOpenEnrollment: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenEnrollment }) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-brand-600 text-white text-xs py-2 px-3 sm:px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
        
        {/* Left Side: Notice & Location */}
        <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 flex-wrap">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="inline-flex items-center gap-1 font-bold text-emerald-300 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open:
          </span>
          <span className="text-slate-100 font-medium">
            New MS-CIT Batch at <strong className="text-white">Prerna Computer Academy Degloor</strong>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300 text-[11px] bg-white/10 px-2 py-0.5 rounded-full">
            <MapPin className="w-3 h-3 text-emerald-300" />
            Near Global English School, Rampur Rd, Degloor
          </span>
        </div>

        {/* Right Side: Quick Action & Call */}
        <div className="flex items-center justify-center gap-3 text-xs font-semibold shrink-0">
          <a
            href="tel:+919421867123"
            className="flex items-center gap-1 text-emerald-200 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Helpline: +91 94218 67123</span>
          </a>
          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-white px-2.5 py-1 rounded-full transition-all border border-white/20 hover:scale-105 active:scale-95 text-[11px]"
          >
            <span>Book Free Seat</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
