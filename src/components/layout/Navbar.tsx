import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, FileText, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full editorial-nav transition-all">
      {/* Top micro alert strip */}
      <div className="bg-aubergine-900 text-silver-200 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-aubergine-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-silver-300 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-marigold-500 animate-pulse"></span>
            <span>नवीन MS-CIT प्रवेश सुरू! Batch 2025 Admissions Open in Degloor</span>
          </span>
          <a
            href="tel:+919975875005"
            className="hidden sm:flex items-center gap-1.5 text-marigold-400 font-bold hover:underline"
          >
            <Phone className="w-3 h-3" />
            <span>हेल्पलाईन: 99758 75005</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Institute Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-aubergine-700 text-silver-100 flex flex-col items-center justify-center font-black border border-marigold-500/40 shadow-sm shrink-0">
              <span className="text-[12px] sm:text-sm tracking-tight leading-none text-marigold-400">PCA</span>
              <span className="text-[8px] font-bold tracking-widest text-silver-300 leading-none mt-0.5">MKCL</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-lg font-black text-aubergine-900 tracking-tight leading-tight">
                  PRERNA ACADEMY
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-marigold-500/20 text-aubergine-900 border border-marigold-500/40">
                  DEGLOOR
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-aubergine-700 font-semibold leading-tight">
                प्रेरणा कॉम्प्युटर अकॅडमी (MKCL ALC Center)
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-aubergine-800">
            <a href="#curriculum" className="hover:text-marigold-600 transition-colors">
              Syllabus (अभ्यासक्रम)
            </a>
            <a href="#pillars" className="hover:text-marigold-600 transition-colors">
              Why Us (वैशिष्ट्ये)
            </a>
            <a href="#quiz" className="hover:text-marigold-600 transition-colors">
              Computer Quiz
            </a>
            <a href="#admission" className="hover:text-marigold-600 transition-colors">
              Fees & Batches
            </a>
            <a href="#contact" className="hover:text-marigold-600 transition-colors">
              Location
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenSyllabus}
              className="btn-silver px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-aubergine-700" />
              <span>Prospectus PDF</span>
            </button>

            <button
              onClick={onOpenEnrollment}
              className="btn-marigold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 font-black uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
              <span>Book Seat</span>
            </button>
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+919975875005"
              className="p-2 rounded-xl bg-aubergine-700 text-marigold-400 active:scale-95 transition-all"
              aria-label="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-silver-200 text-aubergine-900 border border-aubergine-700/20 active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-silver-100 border-b border-aubergine-700/15 px-4 pt-3 pb-5 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-sm font-bold text-aubergine-900">
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-silver-200"
            >
              📖 MS-CIT Syllabus (अभ्यासक्रम)
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-silver-200"
            >
              ⭐ Why Choose Prerna Academy
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-silver-200"
            >
              💻 Beginner Computer Quiz
            </a>
            <a
              href="#admission"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-silver-200"
            >
              💰 Fees, Batches & Admission Form
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-silver-200"
            >
              📍 Degloor Center Location
            </a>
          </nav>

          <div className="pt-2 border-t border-aubergine-700/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="btn-silver w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-aubergine-700" />
              <span>Download Official Prospectus PDF</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="btn-marigold w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-aubergine-950" />
              <span>Book Seat / Free Demo Class</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};