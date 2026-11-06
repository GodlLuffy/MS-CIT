import React, { useState } from 'react';
import { Phone, Menu, X, FileText, Sparkles, Shield, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEnrollment, 
  onOpenSyllabus, 
  onOpenAdmin 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 transition-all shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Institute Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-accent-gold to-amber-600 text-slate-950 flex flex-col items-center justify-center font-black shadow-lg shadow-accent-gold/20 shrink-0 group-hover:scale-105 transition-transform border border-amber-300/40">
              <span className="text-sm font-black leading-none">PCA</span>
              <span className="text-[7px] font-extrabold tracking-widest text-slate-900 leading-none mt-0.5">MKCL</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-none group-hover:text-accent-gold transition-colors">
                  PRERNA
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-accent-gold/15 text-accent-gold border border-accent-gold/30 uppercase tracking-wider">
                  Degloor
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-accent-gold font-bold tracking-widest uppercase mt-0.5">
                Computer Academy • MKCL ALC
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-accent-gold transition-colors">
              About
            </a>
            <a href="#curriculum" className="hover:text-accent-gold transition-colors">
              Curriculum
            </a>
            <a href="#pillars" className="hover:text-accent-gold transition-colors">
              1:1 Lab
            </a>
            <a href="#quiz" className="hover:text-accent-gold transition-colors">
              Readiness Quiz
            </a>
            <a href="#admission" className="hover:text-accent-gold transition-colors">
              Fees & Batches
            </a>
            <a href="#location-map" className="hover:text-accent-gold transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent-gold" />
              <span>Location</span>
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Helpline */}
            <a
              href="tel:+919975875005"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-accent-gold px-3.5 py-2 rounded-full border border-white/15 hover:border-accent-gold/50 bg-white/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span>99758 75005</span>
            </a>

            {/* Prospectus Trigger */}
            <button
              onClick={onOpenSyllabus}
              className="btn-secondary text-xs py-2 px-3.5 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-accent-gold" />
              <span>Prospectus</span>
            </button>

            {/* Admin Portal Toggle */}
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-3 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 flex items-center gap-1.5 transition-all"
                title="Open Administrative Dashboard"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin</span>
              </button>
            )}

            {/* Primary Enroll Gold CTA */}
            <button
              onClick={onOpenEnrollment}
              className="btn-gold text-xs py-2.5 px-5 uppercase tracking-wider font-extrabold shadow-gold-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile & Tablet Right Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="p-2 rounded-xl bg-white/5 border border-white/15 text-emerald-400 active:scale-95 transition-transform"
                title="Admin Dashboard"
                aria-label="Admin Portal"
              >
                <Shield className="w-4 h-4" />
              </button>
            )}

            <a
              href="tel:+919975875005"
              className="p-2.5 rounded-full bg-accent-gold text-slate-950 font-bold active:scale-95 transition-transform shadow-md"
              aria-label="Direct Helpline Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white/10 text-white border border-white/15 active:scale-95 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A]/98 backdrop-blur-2xl border-b border-white/10 px-5 pt-4 pb-7 space-y-3 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-1.5 text-sm font-semibold text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>🏛️ About Prerna Academy</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>📖 MS-CIT Course Curriculum</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>⭐ 1 Student : 1 PC Practical Lab</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>💻 Test Computer Readiness Quiz</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#admission"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>💰 ₹4,500 Fees, Batches & Admission</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
            <a
              href="#location-map"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>📍 Degloor Center Map & Directions</span>
              <span className="text-xs text-accent-gold font-bold">›</span>
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="tel:+919975875005"
              className="w-full py-3 rounded-full bg-white/5 border border-white/15 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent-gold" />
              <span>Helpline: +91 99758 75005</span>
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

            {onOpenAdmin && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-3 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Admin Dashboard Portal</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="btn-gold w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book Free Demo Seat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
