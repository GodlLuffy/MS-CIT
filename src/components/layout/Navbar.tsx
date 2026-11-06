import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Menu, 
  X, 
  PhoneCall, 
  Award, 
  BookOpen, 
  Calendar, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Curriculum', href: '#curriculum', icon: BookOpen },
    { name: 'Why Prerna', href: '#features', icon: ShieldCheck },
    { name: 'Batches & Fees', href: '#batches', icon: Calendar },
    { name: 'Certificate', href: '#certificate', icon: Award },
    { name: 'Degloor Lab', href: '#gallery', icon: Laptop },
    { name: 'Quiz', href: '#quiz', icon: Sparkles },
    { name: 'Location Map', href: '#location', icon: MapPin },
    { name: 'FAQs', href: '#faqs', icon: HelpCircle },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'glass-nav shadow-luxury border-b border-marigold-500/25 py-2.5 sm:py-3'
          : 'bg-aubergine-950/90 backdrop-blur-md border-b border-marigold-500/15 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Institute Branding */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-aubergine-700 via-marigold-500 to-amber-300 p-0.5 shadow-glow-marigold group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-aubergine-950 rounded-[10px] flex items-center justify-center">
                <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-marigold-400 group-hover:text-amber-200 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-sm sm:text-lg tracking-tight text-white group-hover:text-marigold-400 transition-colors whitespace-nowrap">
                  PRERNA <span className="text-marigold-400">ACADEMY</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded bg-marigold-500/15 text-marigold-300 border border-marigold-500/35 whitespace-nowrap">
                  DEGLOOR
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-silver-300 font-medium leading-none flex items-center gap-1 sm:gap-1.5 mt-0.5 whitespace-nowrap">
                <span>MKCL Authorized MS-CIT Center</span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-marigold-500/50"></span>
                <span className="hidden sm:inline text-marigold-400 font-semibold">Nanded Dist.</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-bold text-silver-200 hover:text-marigold-400 rounded-lg hover:bg-aubergine-800/60 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenSyllabus}
              className="text-xs font-bold text-silver-200 hover:text-white px-3 py-2 rounded-lg border border-silver-300/30 hover:border-marigold-400 hover:bg-aubergine-800/80 transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-marigold-400" />
              <span>Syllabus PDF</span>
            </button>

            <a
              href="tel:+919975875005"
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-marigold-400 bg-aubergine-800/60 border border-marigold-500/30 px-3 py-2 rounded-lg hover:bg-aubergine-700/80 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>99758 75005</span>
            </a>

            <button
              onClick={onOpenEnrollment}
              className="btn-marigold px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-glow-marigold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Quick Call & Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href="tel:+919975875005"
              className="p-2 rounded-lg bg-marigold-500/15 text-marigold-400 border border-marigold-500/30"
              aria-label="Call Prerna Computer Academy"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-silver-200 hover:text-white hover:bg-aubergine-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay in Deep Aubergine & Marigold */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[57px] bottom-0 bg-aubergine-950/98 backdrop-blur-2xl border-t border-marigold-500/25 px-4 pt-4 pb-8 overflow-y-auto z-50 animate-fadeIn">
          <div className="flex flex-col gap-1 pb-4 border-b border-aubergine-800">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-silver-200 hover:text-marigold-400 hover:bg-aubergine-900 active:bg-aubergine-800"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-marigold-400" />
                    {link.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-aubergine-400" />
                </a>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="w-full text-center py-3 rounded-xl border border-marigold-500/30 bg-aubergine-900 text-marigold-300 text-sm font-bold"
            >
              Download Course Syllabus & Prospectus (PDF)
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3.5 rounded-xl btn-marigold font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Demo Seat at Degloor Center</span>
            </button>

            <a
              href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs text-marigold-400 hover:text-white"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>View Prerna Academy on Google Maps (Degloor)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
