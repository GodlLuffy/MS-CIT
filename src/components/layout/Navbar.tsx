import React, { useState } from 'react';
import { Phone, Menu, X, FileText, Sparkles, Award } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full modern-nav transition-all">
      {/* Top micro alert strip - Clean English with NO Marathi text */}
      <div className="bg-dark-900/90 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span>Admissions Open for MS-CIT 2025 Batch • Authorized MKCL Training Center</span>
          </span>
          <a
            href="tel:+919975875005"
            className="hidden sm:flex items-center gap-1.5 text-gold-400 font-bold hover:underline"
          >
            <Phone className="w-3 h-3 text-gold-400" />
            <span>Direct Helpline: +91 99758 75005</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Institute Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex flex-col items-center justify-center font-black shadow-glow-brand shrink-0">
              <span className="text-[12px] sm:text-sm tracking-tight leading-none">PCA</span>
              <span className="text-[8px] font-bold tracking-widest text-indigo-200 leading-none mt-0.5">MKCL</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-lg font-black text-white tracking-tight leading-tight group-hover:text-gold-400 transition-colors">
                  Prerna Computer Academy
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                  Degloor
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">
                Authorized MKCL IT Certification Center
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - Clean English with NO Marathi words */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-300">
            <a href="#curriculum" className="hover:text-gold-400 transition-colors">
              Courses
            </a>
            <a href="#pillars" className="hover:text-gold-400 transition-colors">
              Why Choose Us
            </a>
            <a href="#quiz" className="hover:text-gold-400 transition-colors">
              Computer Quiz
            </a>
            <a href="#admission" className="hover:text-gold-400 transition-colors">
              Fees & Batches
            </a>
            <a href="#location-map" className="hover:text-gold-400 transition-colors">
              Location Map
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSyllabus}
              className="btn-secondary px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-gold-400" />
              <span>Prospectus (PDF)</span>
            </button>

            <button
              onClick={onOpenEnrollment}
              className="btn-primary px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-dark-950" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+919975875005"
              className="p-2 rounded-xl bg-gold-500 text-dark-950 font-bold active:scale-95 transition-all shadow-glow-gold"
              aria-label="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu - Clean English with NO Marathi text */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark-900 border-b border-white/10 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-200">
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              📖 MS-CIT Course Curriculum
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              ⭐ Why Choose Prerna Academy
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              💻 Beginner Computer Quiz
            </a>
            <a
              href="#admission"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              💰 Fees, Batches & Admission Form
            </a>
            <a
              href="#location-map"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              📍 Center Location & Google Map
            </a>
          </nav>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="btn-secondary w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-gold-400" />
              <span>Download Official Prospectus (PDF)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="btn-primary w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-dark-950" />
              <span>Book Seat / Free Trial Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};