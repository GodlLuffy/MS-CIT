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
  ChevronRight
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

  const navLinks = [
    { name: 'Curriculum', href: '#curriculum', icon: BookOpen },
    { name: 'Why Us', href: '#features', icon: ShieldCheck },
    { name: 'Batches & Fees', href: '#batches', icon: Calendar },
    { name: 'Certificate', href: '#certificate', icon: Award },
    { name: 'Campus Lab', href: '#gallery', icon: Laptop },
    { name: 'Digital Quiz', href: '#quiz', icon: Sparkles },
    { name: 'FAQs', href: '#faqs', icon: HelpCircle },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/30 border-b border-slate-800/80 py-3'
          : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Institute Branding */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-emerald-400 p-0.5 shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Laptop className="w-5 h-5 text-brand-400 group-hover:text-emerald-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-brand-300 transition-colors">
                  APEX <span className="text-brand-400">MS-CIT</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Authorized
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none flex items-center gap-1.5 mt-0.5">
                <span>MKCL ALC Code: 411038</span>
                <span className="inline-block w-1 h-1 rounded-full bg-slate-600"></span>
                <span>Govt. Recognized</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSyllabus}
              className="text-xs font-semibold text-slate-300 hover:text-brand-400 px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all"
            >
              Syllabus PDF
            </button>

            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-2 rounded-lg hover:bg-emerald-900/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>98765 43210</span>
            </a>

            <button
              onClick={onOpenEnrollment}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-xl group bg-gradient-to-br from-brand-500 via-indigo-600 to-emerald-500 hover:shadow-glow-blue transition-all"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] group-hover:bg-transparent flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                <span>Enroll Online</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-brand-300 hover:bg-slate-900"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-400" />
                    {link.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSyllabus();
              }}
              className="w-full text-center py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 text-sm font-medium"
            >
              Download Course Brochure (PDF)
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-sm shadow-glow-blue flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Enroll / Book Free Demo Seat</span>
            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 py-2 text-xs text-slate-400 hover:text-emerald-400"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Institute Helpline: +91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
