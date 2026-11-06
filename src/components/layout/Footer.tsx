import React from 'react';
import { Phone, MessageSquare, MapPin, Award, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-dark text-white pt-20 pb-28 sm:pb-12 w-full relative overflow-hidden">
      {/* Giant Subtle Background Watermark (KLP Academy Signature Style) */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-serif font-black text-white/[0.03] text-[clamp(8rem,22vw,20rem)] leading-none pointer-events-none select-none z-0 whitespace-nowrap"
      >
        PRERNA
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Institute Brand & MKCL Notice */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-gold text-slate-950 flex flex-col items-center justify-center font-black shadow-md shrink-0">
                <span className="text-sm font-black leading-none">PCA</span>
                <span className="text-[7px] text-slate-900 font-bold leading-none mt-0.5">MKCL</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide leading-none">
                  PRERNA
                </h3>
                <p className="text-[10px] text-accent-gold font-bold tracking-widest uppercase mt-0.5">
                  Computer Academy • Degloor
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Authorized MKCL ALC Center & MSBTE Computer Training Center. Empowering students across Degloor, Biloli, and Nanded with certified IT education, typing, and digital employment skills for over 15 years.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-accent-gold font-semibold">
              <Award className="w-4 h-4 text-accent-gold shrink-0" />
              <span>Certified under Maharashtra Govt. Resolution (GR) for State Services</span>
            </div>
          </div>

          {/* Col 2: Quick Links with Gold Underline */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-4">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-accent-gold"></span>
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-accent-gold transition-colors">
                  About Academy
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-accent-gold transition-colors">
                  MS-CIT Curriculum (8 Modules)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-accent-gold transition-colors">
                  1 Student : 1 PC Lab
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-accent-gold transition-colors">
                  Beginner Computer Quiz
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-accent-gold transition-colors">
                  Fees & Batches
                </a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-accent-gold transition-colors text-left">
                  Prospectus (A4 PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info with Gold Underline */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-4">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-accent-gold"></span>
              </h4>
            </div>

            <div className="space-y-3 text-xs text-white/80">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-gold transition-colors"
                >
                  Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)
                </a>
              </p>
              
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                <a href="tel:+919975875005" className="hover:text-accent-gold font-bold text-white transition-colors">
                  +91 99758 75005 (Helpline)
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 99758 75005
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Prerna Computer Academy Degloor. Authorized MKCL ALC.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-accent-gold transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
