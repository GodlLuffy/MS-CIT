import React from 'react';
import { MapPin, Award, ArrowUp, Clock, FileText, Sparkles, Navigation, Lock } from 'lucide-react';
import { WhatsAppIcon, TelephoneIcon } from '../common/Icons';
import { InstituteLogo } from '../common/InstituteLogo';

interface FooterProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
  onSecretAdminTrigger?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenEnrollment, 
  onOpenSyllabus, 
  onSecretAdminTrigger 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      style={{ backgroundColor: '#3A0F34', color: '#FFFFFF' }}
      className="relative pt-16 sm:pt-20 pb-32 lg:pb-16 w-full overflow-hidden border-t-2 border-marigold/40 shadow-2xl bg-[#3A0F34]"
    >
      {/* Giant Subtle Background Watermark */}
      <div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 font-serif font-black text-white/[0.03] text-[clamp(7rem,22vw,20rem)] leading-none pointer-events-none select-none z-0 whitespace-nowrap"
      >
        PRERNA
      </div>

      {/* Subtle Marigold Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-marigold/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer Action Banner (Deep Aubergine 900 Card) */}
        <div 
          style={{ backgroundColor: '#240720' }}
          className="mb-14 -mt-8 sm:-mt-12 p-6 sm:p-8 rounded-3xl border border-ice/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-marigold bg-marigold/15 px-3 py-1 rounded-full border border-marigold/30 inline-block">
              Admissions Open 2025 • Degloor Center
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
              Ready to Master Computers & Get Certified?
            </h3>
            <p className="text-xs sm:text-sm text-ice">
              Claim your free 1-day demo trial class & reserve your dedicated PC workstation in Degloor today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+919970362555"
              className="w-full sm:w-auto text-xs py-3 px-6 rounded-full border border-white/25 hover:border-marigold text-white hover:text-marigold font-bold transition-all flex items-center justify-center gap-2 bg-white/5"
            >
              <TelephoneIcon className="w-3.5 h-3.5 text-marigold" />
              <span>Call: +91 99703 62555</span>
            </a>

            <button
              onClick={onOpenEnrollment}
              className="btn-gold w-full sm:w-auto text-xs py-3 px-7 uppercase tracking-wider font-extrabold shadow-marigold-glow flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-aubergine-950" />
              <span>Book Demo Class</span>
            </button>
          </div>
        </div>

        {/* Main 4-Column Footer Grid (Crystal-Clear High-Contrast Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/15 text-white">
          
          {/* Column 1: Institute Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <InstituteLogo size={54} theme="light" showGlow={true} />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-wider leading-none">
                  PRERNA ACADEMY
                </h3>
                <p className="text-[11px] text-marigold font-extrabold tracking-widest uppercase mt-1">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
                </p>
                <p className="text-[10px] text-ice/80 font-medium mt-0.5">
                  अधिकृत MKCL ALC & MSBTE केंद्र • शासनमान्य
                </p>
              </div>
            </div>

            <p className="text-xs text-ice leading-relaxed max-w-sm">
              Authorized MKCL ALC Center & MSBTE Computer Training Center. Empowering students across Degloor, Biloli, and Nanded with certified IT education, typing, and digital employment skills for over 15 years.
            </p>

            {/* Social & Contact Circular Pills */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="tel:+919970362555"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:border-marigold hover:bg-marigold hover:text-aubergine-950 text-marigold flex items-center justify-center transition-all shadow-sm"
                title="Call Helpline: +91 99703 62555"
                aria-label="Direct Phone Helpline"
              >
                <TelephoneIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919970362555?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#25D366] flex items-center justify-center transition-all shadow-sm"
                title="WhatsApp Chat: +91 99703 62555"
                aria-label="WhatsApp Inquiry"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:border-marigold hover:bg-marigold hover:text-aubergine-950 text-marigold flex items-center justify-center transition-all shadow-sm"
                title="Google Maps Location: Degloor"
                aria-label="Google Maps Location"
              >
                <Navigation className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenSyllabus}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:border-marigold hover:bg-marigold hover:text-aubergine-950 text-marigold flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title="Download Prospectus (PDF)"
                aria-label="Download Prospectus"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-marigold font-semibold">
              <Award className="w-4 h-4 text-marigold shrink-0" />
              <span>Certified under Maharashtra Govt. Resolution (GR) for State Services</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-3">
                Quick Links
                <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-marigold"></span>
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-ice">
              <li>
                <a href="#about" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> About Academy
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> Institutional Pillars
                </a>
              </li>
              <li>
                <a href="#certificate" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> Govt GR Certificate
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> High-Tech 1:1 Lab
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> 8 Modules Syllabus
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> Student Success (मनोगत)
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> ₹4,500 Fees & Batches
                </a>
              </li>
              <li>
                <a href="#location-map" className="hover:text-marigold transition-colors flex items-center gap-1.5 text-ice hover:underline">
                  <span className="text-marigold">›</span> Degloor Center Map
                </a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-marigold transition-colors text-left flex items-center gap-1.5 cursor-pointer text-ice hover:underline">
                  <span className="text-marigold">›</span> Prospectus (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Course Curriculum Checklist (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-3">
                Curriculum
                <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-marigold"></span>
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-ice">
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>Windows 11 OS</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>MS Word & Excel</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>PowerPoint & Slides</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>Marathi Typing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>Cyber & UPI Safety</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>Aaple Sarkar Services</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-marigold font-bold">✓</span>
                <span>AI Tools (ChatGPT)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Center Address (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-3">
                Degloor Center
                <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-marigold"></span>
              </h4>
            </div>

            <div className="space-y-3 text-xs text-ice">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-marigold transition-colors text-white"
                >
                  Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)
                </a>
              </p>
              
              <p className="flex items-center gap-2.5">
                <TelephoneIcon className="w-4 h-4 text-marigold shrink-0" />
                <a href="tel:+919970362555" className="hover:text-marigold font-bold text-marigold text-sm transition-colors">
                  +91 99703 62555 (Helpline)
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/919970362555?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#25D366] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp: +91 99703 62555</span>
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-marigold shrink-0" />
                <span>Lab Hours: Daily 07:30 AM – 07:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Secret Admin Access */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ice">
          <p className="text-center sm:text-left flex items-center gap-1.5 flex-wrap">
            <span>© {new Date().getFullYear()} Prerna Computer Academy Degloor. Authorized MKCL ALC Center. Joint MSBTE Certification.</span>
            {onSecretAdminTrigger && (
              <button
                onClick={onSecretAdminTrigger}
                className="opacity-20 hover:opacity-80 transition-opacity p-0.5 text-ice hover:text-marigold cursor-pointer"
                title="Management"
                aria-label="Management Portal Access"
              >
                <Lock className="w-3 h-3" />
              </button>
            )}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-ice hover:text-marigold transition-colors group p-1 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};