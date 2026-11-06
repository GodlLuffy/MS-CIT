import React, { useState } from 'react';
import { Phone, Menu, X, FileText, Sparkles, Navigation, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-md border-b border-gray-light transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Institute Identity (KLP Academy Serif Style) */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-gold-hover text-slate-950 flex flex-col items-center justify-center font-black shadow-md shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-sm font-black leading-none">PCA</span>
              <span className="text-[7px] font-bold tracking-widest text-slate-900 leading-none mt-0.5">MKCL</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-accent-gold transition-colors">
                  PRERNA
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gold-light text-accent-gold border border-accent-gold/30 uppercase tracking-wider">
                  Degloor
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-accent-gold font-bold tracking-widest uppercase mt-0.5">
                Academy • MKCL ALC
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on lg screens 1024px+) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#about" className="hover:text-accent-gold transition-colors">
              About
            </a>
            <a href="#curriculum" className="hover:text-accent-gold transition-colors">
              Curriculum
            </a>
            <a href="#pillars" className="hover:text-accent-gold transition-colors">
              Lab Features
            </a>
            <a href="#quiz" className="hover:text-accent-gold transition-colors">
              Quiz
            </a>
            <a href="#admission" className="hover:text-accent-gold transition-colors">
              Fees & Batches
            </a>
            <a href="#location-map" className="hover:text-accent-gold transition-colors">
              Center Map
            </a>
          </nav>

          {/* Desktop Action Buttons (Visible on lg screens 1024px+) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919975875005"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-accent-gold px-3 py-2 rounded-full border border-gray-light hover:border-accent-gold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span>99758 75005</span>
            </a>

            <button
              onClick={onOpenSyllabus}
              className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-accent-gold" />
              <span>Prospectus</span>
            </button>

            <button
              onClick={onOpenEnrollment}
              className="btn-gold text-xs py-2.5 px-5 uppercase tracking-wider font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile & Tablet Right Actions (Visible on screens < 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+919975875005"
              className="p-2.5 rounded-full bg-accent-gold text-slate-950 font-bold active:scale-95 transition-transform shadow-sm"
              aria-label="Direct Helpline Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white text-slate-800 border border-gray-light active:scale-95 transition-all shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Visible on screens < 1024px when open) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-b border-gray-light px-5 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-gold-light transition-colors flex items-center justify-between"
            >
              <span>🏛️ About Prerna Academy</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-gold-light transition-colors flex items-center justify-between"
            >
              <span>📖 MS-CIT Course Curriculum</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-gold-light transition-colors flex items-center justify-between"
            >
              <span>⭐ 1 Student : 1 PC Practical Lab</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-gold-light transition-colors flex items-center justify-between"
            >
              <span>💻 Beginner Computer Quiz</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#admission"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-gold-light transition-colors flex items-center justify-between"
            >
              <span>💰 Fees, Batches & Admission Form</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#location-map"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-gold-light transition-colors flex items-center justify-between"
            >
              <span>📍 Center Location & Google Map</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
          </nav>

          <div className="pt-3 border-t border-gray-light flex flex-col gap-2.5">
            <a
              href="tel:+919975875005"
              className="w-full py-3 rounded-full bg-white border border-gray-light text-slate-900 font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-accent-gold" />
              <span>Call Helpline: +91 99758 75005</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="btn-secondary w-full py-3 rounded-full text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-accent-gold" />
              <span>Download Official Prospectus (PDF)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="btn-gold w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book Seat / Free Trial Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
