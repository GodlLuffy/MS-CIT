import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenEnrollment: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenEnrollment }) => {
  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden bg-dark-950/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 shadow-2xl flex items-center justify-between gap-2"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Direct Call Button */}
      <a
        href="tel:+919975875005"
        className="flex-1 py-2.5 px-2 rounded-xl bg-slate-900 border border-white/15 text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        aria-label="Direct Call to Prerna Academy"
      >
        <Phone className="w-3.5 h-3.5 text-gold-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        aria-label="WhatsApp Inquiry"
      >
        <MessageSquare className="w-3.5 h-3.5 text-white" />
        <span>WhatsApp</span>
      </a>

      {/* Book Seat CTA */}
      <button
        onClick={onOpenEnrollment}
        className="flex-[1.2] py-2.5 px-3 rounded-xl btn-primary font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-glow-gold uppercase tracking-wider"
        aria-label="Book Seat or Free Demo"
      >
        <Sparkles className="w-3.5 h-3.5 text-dark-950" />
        <span>Apply Now</span>
      </button>
    </div>
  );
};
