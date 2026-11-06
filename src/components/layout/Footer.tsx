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
    <footer className="bg-dark-900 text-slate-300 border-t border-white/10 pt-12 pb-24 sm:pb-12 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Institute Brand & MKCL Notice */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex flex-col items-center justify-center font-black shadow-glow-brand shrink-0">
                <span className="text-[11px] leading-none">PCA</span>
                <span className="text-[7px] text-indigo-200 leading-none mt-0.5">MKCL</span>
              </div>
              <div>
                <h3 className="text-base font-black text-white tracking-wide">
                  PRERNA COMPUTER ACADEMY
                </h3>
                <p className="text-xs text-gold-400 font-semibold">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Authorized MKCL ALC Center & MSBTE Computer Training Center. Empowering students across Degloor, Biloli, and Nanded with certified IT education, typing, and digital employment skills for over 15 years.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-gold-400 font-semibold">
              <Award className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Certified under Maharashtra Govt. Resolution (GR) for State Services</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#curriculum" className="hover:text-gold-400 transition-colors">
                  MS-CIT Syllabus (8 Modules)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-gold-400 transition-colors">
                  1 Student : 1 PC Practical Lab
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-gold-400 transition-colors">
                  Beginner Computer Quiz
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-gold-400 transition-colors">
                  Fees & Batch Timings
                </a>
              </li>
              <li>
                <a href="#location-map" className="hover:text-gold-400 transition-colors">
                  Degloor Center Google Map
                </a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-gold-400 transition-colors text-left">
                  Official Prospectus (A4 PDF)
                </button>
              </li>
              <li>
                <button onClick={onOpenEnrollment} className="hover:text-gold-400 transition-colors text-left">
                  Book Free Seat / Demo Class
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Contact & Center Address
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)</span>
              </p>
              
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919975875005" className="hover:text-gold-400 font-bold text-white transition-colors">
                  +91 99758 75005 (Helpline)
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-slate-300"
                >
                  WhatsApp: +91 99758 75005
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Prerna Computer Academy Degloor. Authorized MKCL ALC.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-gold-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
