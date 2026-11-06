import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenEnrollment: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenEnrollment }) => {
  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden bg-cream/95 backdrop-blur-md border-t border-gray-light px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2"
      style={{ paddingBottom: 'calc(0.6rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Direct Call Button */}
      <a
        href="tel:+919975875005"
        className="flex-1 py-2.5 px-2 rounded-full bg-white border border-gray-light text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm"
        aria-label="Direct Call to Prerna Academy"
      >
        <Phone className="w-3.5 h-3.5 text-accent-gold" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm"
        aria-label="WhatsApp Inquiry"
      >
        <MessageSquare className="w-3.5 h-3.5 text-white" />
        <span>WhatsApp</span>
      </a>

      {/* Book Seat CTA */}
      <button
        onClick={onOpenEnrollment}
        className="flex-[1.3] py-2.5 px-3 rounded-full btn-gold font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-gold-glow uppercase tracking-wider"
        aria-label="Book Seat or Free Demo"
      >
        <Sparkles className="w-3.5 h-3.5 text-slate-950" />
        <span>Apply Now</span>
      </button>
    </div>
  );
};
