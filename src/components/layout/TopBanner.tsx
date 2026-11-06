import React from 'react';
import { Sparkles, Phone, ArrowRight } from 'lucide-react';

interface TopBannerProps {
  onOpenEnrollment: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenEnrollment }) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-brand-600 text-white text-xs sm:text-sm py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open:
          </span>
          <span className="text-slate-100 hidden sm:inline">
            New MS-CIT Batch starting next Monday! Authorized MKCL Center (ALC-411038)
          </span>
          <span className="text-slate-100 sm:hidden">
            New MS-CIT Batch starts next Monday!
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium ml-auto">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+91 98765 43210</span>
            <span className="md:hidden">Call</span>
          </a>
          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-white px-2.5 py-1 rounded-full transition-all border border-white/20 hover:scale-105"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
