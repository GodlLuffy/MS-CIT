import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Sparkles, 
  MapPin, 
  Award, 
  Monitor, 
  BookOpen, 
  GraduationCap,
  CreditCard,
  ChevronRight,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';
import { TelephoneIcon, WhatsAppIcon } from '../common/Icons';
import { InstituteLogo } from '../common/InstituteLogo';

interface NavbarProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
  onSecretAdminTrigger?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  shortLabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  is2xlOnly?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEnrollment, 
  onOpenSyllabus, 
  onSecretAdminTrigger 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const downwardScrollDistance = useRef(0);
  const isNavigatingRef = useRef(false);
  const [activeSection, setActiveSection] = useState('about');
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  // Helper: Smooth anchor navigation guard (keeps navbar rock-solid visible during section transitions)
  const handleNavAnchorClick = () => {
    isNavigatingRef.current = true;
    setIsVisible(true);
    downwardScrollDistance.current = 0;
    setTimeout(() => {
      isNavigatingRef.current = false;
      lastScrollY.current = window.scrollY || document.documentElement.scrollTop || 0;
    }, 1200);
  };

  // Secret Admin Trigger: 5 rapid taps on the PCA MKCL logo
  const handleSecretLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastClickTime < 1000) {
      const nextCount = clickCount + 1;
      setClickCount(nextCount);
      if (nextCount >= 5) {
        setClickCount(0);
        onSecretAdminTrigger?.();
      }
    } else {
      setClickCount(1);
    }
    setLastClickTime(now);
  };

  // Scroll spy & smart auto-hide navbar (hide on scroll down, reveal on scroll up)
  useEffect(() => {
    const sectionIds = ['about', 'pillars', 'certificate', 'lab', 'curriculum', 'ai-skills', 'packages', 'quiz', 'testimonials', 'admission', 'location-map'];

    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // 1. Navbar elevation styling (glass blur + border)
      setIsScrolled(currentScrollY > 20);

      // 2. Smart auto-hide logic:
      // Always show at top of page, during section navigation, or when mobile drawer is open
      if (currentScrollY <= 80 || mobileMenuOpen || isNavigatingRef.current) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        downwardScrollDistance.current = 0;
      } else {
        const delta = currentScrollY - lastScrollY.current;

        // SCROLL UP (delta < 0): Any upward scroll immediately shows the navbar and keeps it visible
        if (delta < 0) {
          setIsVisible(true);
          downwardScrollDistance.current = 0;
        } 
        // SCROLL DOWN (delta > 0): Accumulate downward distance; hide only on deliberate scroll (> 40px) past the header
        else if (delta > 0) {
          downwardScrollDistance.current += delta;
          if (downwardScrollDistance.current > 40 && currentScrollY > 120) {
            setIsVisible(false);
          }
        }

        lastScrollY.current = currentScrollY;
      }

      // 3. Detect active section based on scroll offset
      const scrollPosition = currentScrollY + 180;
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Clean, high-end vector icons (replacing cartoon emojis)
  const navItems: NavItem[] = [
    { id: 'about', label: 'About', icon: GraduationCap },
    { id: 'pillars', label: 'Pillars', icon: Award },
    { id: 'certificate', label: 'Certificate', icon: ShieldCheck, is2xlOnly: true },
    { id: 'lab', label: '1:1 Lab', icon: Monitor },
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'testimonials', label: 'Reviews', icon: Star, is2xlOnly: true },
    { id: 'admission', label: 'Fees & Batches', shortLabel: 'Fees', icon: CreditCard },
    { id: 'location-map', label: 'Degloor Center', shortLabel: 'Map', icon: MapPin },
  ];

  return (
    <div 
      className={`fixed top-0 inset-x-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}
    >
      {/* 1. Top Micro-Announcement Strip */}
      <div 
        className={`bg-[#240720] text-white border-b border-white/10 text-[11px] px-4 hidden sm:block transition-all duration-300 ${
          isScrolled 
            ? 'max-h-0 opacity-0 overflow-hidden py-0 border-none' 
            : 'max-h-12 opacity-100 py-1.5'
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between gap-4 font-medium">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white/90">
              Authorized <strong>MKCL ALC Center</strong> • Joint <strong>MSBTE IT Certification</strong> (शासनमान्य)
            </span>
          </div>

          <div className="flex items-center gap-4 text-ice">
            <span className="text-marigold font-bold hidden md:inline">
              🔥 Next Regular & Fast-Track Batch Starting Monday
            </span>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919970362555"
                className="hover:text-marigold transition-colors flex items-center gap-1.5 font-bold"
              >
                <TelephoneIcon className="w-3 h-3 text-marigold" />
                <span>+91 99703 62555</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://wa.me/919970362555?text=Hello%20Prerna%20Computer%20Academy%20Degloor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#20bd5a] transition-colors flex items-center gap-1 font-semibold"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main High-End Floating Navigation Header with Smart Auto-Hide */}
      <header 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF9F6]/95 backdrop-blur-xl border-b border-ice py-2.5 shadow-md' 
            : 'bg-[#FAF9F6]/90 backdrop-blur-lg border-b border-ice/60 py-3.5 shadow-sm'
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between gap-4">
            
            {/* Institute Brand Identity - PCA Monogram & Stature Lockup (Secret 5-click admin gateway) */}
            <InstituteLogo
              variant="horizontal"
              size={48}
              showGlow={true}
              showMarathiSub={false}
              showBadge={true}
              onClick={handleSecretLogoClick}
              className="py-1 shrink-0"
            />

            {/* Desktop Capsule Floating Dock Navigation with Refined Vector Icons */}
            <nav className="hidden lg:flex items-center p-1 xl:p-1.5 rounded-full bg-white/95 border border-ice shadow-sm backdrop-blur-md gap-0.5 xl:gap-1 shrink-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleNavAnchorClick}
                    style={{
                      backgroundColor: isActive ? '#3A0F34' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#2A0B25',
                    }}
                    className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                      item.is2xlOnly ? 'hidden 2xl:flex' : ''
                    } ${
                      isActive
                        ? 'shadow-md font-extrabold scale-[1.02]'
                        : 'hover:bg-ice/50 hover:text-marigold-600'
                    }`}
                  >
                    <IconComponent 
                      className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                        isActive ? 'text-marigold' : 'text-marigold-600'
                      }`} 
                    />
                    <span 
                      style={{ color: isActive ? '#FFFFFF' : '#2A0B25' }}
                      className={item.shortLabel ? 'xl:hidden' : ''}
                    >
                      {item.shortLabel || item.label}
                    </span>
                    {item.shortLabel && (
                      <span 
                        style={{ color: isActive ? '#FFFFFF' : '#2A0B25' }}
                        className="hidden xl:inline"
                      >
                        {item.label}
                      </span>
                    )}

                    {/* Badge if present */}
                    {item.badge && !isActive && (
                      <span className="hidden 2xl:inline-block text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-marigold/15 text-marigold-800 border border-marigold/30">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Group */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 pr-1 sm:pr-2">
              {/* Phone Helpline Pill */}
              <a
                href="tel:+919970362555"
                className="flex items-center gap-2 text-xs font-bold text-aubergine hover:text-marigold-600 p-2 xl:py-2 xl:px-3.5 rounded-full border border-ice bg-white hover:border-marigold transition-all whitespace-nowrap shrink-0 shadow-sm group"
                title="Call Institute Helpline: +91 99703 62555"
              >
                <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-marigold/15 text-marigold-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TelephoneIcon className="w-3 h-3" />
                </div>
                <span className="hidden xl:inline font-extrabold text-xs text-aubergine whitespace-nowrap">
                  99703 62555
                </span>
              </a>

              {/* Prospectus Trigger (Only on 2xl screens >= 1536px to prevent clipping on laptops) */}
              <button
                onClick={onOpenSyllabus}
                className="hidden 2xl:flex btn-outline text-xs py-2 px-3.5 items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 shadow-sm"
                title="Download Syllabus Prospectus (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-aubergine shrink-0" />
                <span>Prospectus</span>
              </button>

              {/* Radiant Marigold Enroll Now CTA Button (Guaranteed Zero Clipping & Full Text) */}
              <button
                onClick={onOpenEnrollment}
                className="py-2 xl:py-2.5 px-4 xl:px-5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#F5BE2E] via-[#EAAA00] to-[#F5BE2E] text-aubergine-950 shadow-md hover:shadow-marigold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-white/40 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-aubergine-950 shrink-0 animate-pulse" />
                <span className="font-black">Enroll Now</span>
              </button>
            </div>

            {/* Mobile / Tablet Controls (< lg screens) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <a
                href="tel:+919970362555"
                className="p-2.5 rounded-full bg-marigold text-aubergine-950 font-black active:scale-95 transition-transform shadow-md shrink-0 flex items-center justify-center"
                aria-label="Direct Helpline Call"
                title="Call +91 99703 62555"
              >
                <TelephoneIcon className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white text-aubergine border border-ice active:scale-95 transition-all shrink-0 cursor-pointer shadow-sm flex items-center justify-center"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-aubergine" /> : <Menu className="w-5 h-5 text-aubergine" />}
              </button>
            </div>

          </div>
        </div>

        {/* 3. Luxury Mobile Drawer Menu with Refined Vector Icon Badges */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-ice px-4 pt-4 pb-7 space-y-4 shadow-2xl animate-fadeIn">
            {/* Quick Admissions Alert Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-aubergine to-[#240720] text-white flex items-center justify-between shadow-md">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-marigold bg-marigold/15 px-2 py-0.5 rounded-full border border-marigold/30 inline-block">
                  Admissions Open 2025
                </span>
                <p className="font-serif font-bold text-sm text-white">MS-CIT New Batch Monday</p>
                <p className="text-[11px] text-ice">₹4,500 Total Fee • 2 Easy Installments</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="btn-gold text-[11px] py-1.5 px-3 uppercase tracking-wider font-extrabold shrink-0"
              >
                Book Seat
              </button>
            </div>

            {/* Navigation Links with Vector Icons */}
            <nav className="flex flex-col space-y-1.5 text-sm font-semibold text-aubergine">
              <a
                href="#about"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span>About Prerna Academy</span>
                </div>
                <ChevronRight className="w-4 h-4 text-aubergine/40" />
              </a>

              <a
                href="#pillars"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span>1 Student : 1 PC Practical Lab</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Individual PC
                </span>
              </a>

              <a
                href="#certificate"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span>MSBTE & MKCL Joint Certificate</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Govt. GR
                </span>
              </a>

              <a
                href="#lab"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span>High-Tech Lab & Campus (Rampur Rd)</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                  ERA 2025
                </span>
              </a>

              <a
                href="#curriculum"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>MS-CIT Course Curriculum</span>
                </div>
                <span className="text-[10px] font-bold text-aubergine/60">8 Modules</span>
              </a>

              <a
                href="#quiz"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Test Computer Readiness Quiz</span>
                </div>
                <ChevronRight className="w-4 h-4 text-aubergine/40" />
              </a>

              <a
                href="#testimonials"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <span>Student Success Stories (विद्यार्थी मनोगत)</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                  4.9★ Reviews
                </span>
              </a>

              <a
                href="#admission"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <span>₹4,500 Fees, Batches & Timings</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-marigold/20 text-aubergine">
                  ₹2,500 + ₹2,000
                </span>
              </a>

              <a
                href="#location-map"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavAnchorClick();
                }}
                className="p-2.5 rounded-2xl hover:bg-ice/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-aubergine/5 text-marigold-700 border border-ice flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Degloor Center Map & Directions</span>
                </div>
                <ChevronRight className="w-4 h-4 text-aubergine/40" />
              </a>
            </nav>

            {/* Direct 1-Tap Action Buttons */}
            <div className="pt-2 border-t border-ice space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919970362555"
                  className="py-3 px-3 rounded-2xl bg-ice/50 border border-ice text-aubergine font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <TelephoneIcon className="w-4 h-4 text-marigold-600" />
                  <span>Call 99703 62555</span>
                </a>

                <a
                  href="https://wa.me/919970362555?text=Hello%20Prerna%20Computer%20Academy%20Degloor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSyllabus();
                }}
                className="btn-outline w-full py-3 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-marigold-600" />
                <span>Download Official Prospectus (PDF)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="btn-gold w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-marigold-glow cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-aubergine-950" />
                <span>Book Free Demo Trial Class</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};