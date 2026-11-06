import React, { useState } from 'react';
import { Phone, Menu, X, FileText, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full modern-nav transition-all">
      {/* Top micro alert strip - Clean English */}
      <div className="bg-gold-light/80 text-slate-700 text-[11px] sm:text-xs py-1.5 px-4 font-medium border-b border-gray-light/80">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
            <span>Admissions Open for MS-CIT 2025 Batch • Authorized MKCL Training Center</span>
          </span>
          <a
            href="tel:+919975875005"
            className="hidden sm:flex items-center gap-1.5 text-slate-900 font-bold hover:text-accent-gold transition-colors"
          >
            <Phone className="w-3 h-3 text-accent-gold" />
            <span>Direct Helpline: +91 99758 75005</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Institute Identity (KLP Academy Serif Style) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-gold-hover text-slate-950 flex flex-col items-center justify-center font-black shadow-md shrink-0">
              <span className="text-[13px] sm:text-sm font-black tracking-tight leading-none">PCA</span>
              <span className="text-[7px] font-bold tracking-widest text-slate-900 leading-none mt-0.5">MKCL</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-2xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-accent-gold transition-colors">
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-700">
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
              Computer Quiz
            </a>
            <a href="#admission" className="hover:text-accent-gold transition-colors">
              Fees & Batches
            </a>
            <a href="#location-map" className="hover:text-accent-gold transition-colors">
              Center Map
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSyllabus}
              className="btn-secondary text-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-accent-gold" />
              <span>Prospectus (PDF)</span>
            </button>

            <button
              onClick={onOpenEnrollment}
              className="btn-gold text-xs flex items-center gap-1.5 uppercase tracking-wider font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Right Action & Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
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
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cream border-b border-gray-light px-5 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gold-light transition-colors"
            >
              🏛️ About Prerna Academy
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gold-light transition-colors"
            >
              📖 MS-CIT Course Curriculum
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gold-light transition-colors"
            >
              ⭐ 1 Student : 1 PC Practical Lab
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gold-light transition-colors"
            >
              💻 Beginner Computer Quiz
            </a>
            <a
              href="#admission"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gold-light transition-colors"
            >
              💰 Fees, Batches & Admission Form
            </a>
            <a
              href="#location-map"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gold-light transition-colors"
            >
              📍 Center Location & Google Map
            </a>
          </nav>

          <div className="pt-2 border-t border-gray-light flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="btn-secondary w-full py-2.5 rounded-full text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-accent-gold" />
              <span>Download Official Prospectus (PDF)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="btn-gold w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
