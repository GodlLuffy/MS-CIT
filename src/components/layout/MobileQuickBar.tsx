import React from 'react';
import { Sparkles } from 'lucide-react';
import { WhatsAppIcon, TelephoneIcon } from '../common/Icons';

interface MobileQuickBarProps {
  onOpenEnrollment: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenEnrollment }) => {
  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-[#FAF9F6]/95 backdrop-blur-xl border-t border-ice px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2"
      style={{ paddingBottom: 'calc(0.6rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Direct Call Button */}
      <a
        href="tel:+919975875005"
        className="flex-1 py-2.5 px-2 rounded-full bg-white border border-ice text-aubergine font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm"
        aria-label="Direct Call to Prerna Academy"
      >
        <TelephoneIcon className="w-3.5 h-3.5 text-marigold-600" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button with Official WhatsApp Logo */}
      <a
        href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm"
        aria-label="WhatsApp Inquiry"
      >
        <WhatsAppIcon className="w-4 h-4 text-white" />
        <span>WhatsApp</span>
      </a>

      {/* Book Seat CTA */}
      <button
        onClick={onOpenEnrollment}
        className="flex-[1.3] py-2.5 px-3 rounded-full btn-gold font-extrabold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-marigold-glow uppercase tracking-wider cursor-pointer"
        aria-label="Book Seat or Free Demo"
      >
        <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
        <span>Apply Now</span>
      </button>
    </div>
  );
};