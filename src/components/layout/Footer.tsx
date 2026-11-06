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
    <footer className="bg-aubergine-950 text-silver-200 border-t border-aubergine-800 pt-12 pb-24 sm:pb-12 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-aubergine-800">
          
          {/* Col 1: Institute Brand & MKCL Notice */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-aubergine-800 text-marigold-400 flex flex-col items-center justify-center font-black border border-marigold-500/40 shrink-0">
                <span className="text-xs leading-none">PCA</span>
                <span className="text-[7px] text-silver-300 leading-none mt-0.5">MKCL</span>
              </div>
              <div>
                <h3 className="text-base font-black text-silver-100 tracking-wide">
                  PRERNA COMPUTER ACADEMY
                </h3>
                <p className="text-xs text-marigold-400 font-semibold">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
                </p>
              </div>
            </div>

            <p className="text-xs text-silver-300 leading-relaxed max-w-sm">
              Authorized MKCL ALC Center & MSBTE Computer Training Center. Empowering students across Degloor, Biloli, and Nanded with certified IT education, typing, and digital employment skills for over 15 years.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-marigold-400 font-semibold">
              <Award className="w-4 h-4 text-marigold-400 shrink-0" />
              <span>Certified under Maharashtra Govt. Resolution (GR) for State Services</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-silver-100 tracking-wider">
              Quick Links (महत्त्वाच्या लिंक्स)
            </h4>
            <ul className="space-y-2 text-xs text-silver-300">
              <li>
                <a href="#curriculum" className="hover:text-marigold-400 transition-colors">
                  MS-CIT Syllabus (८ मॉड्यूल्स)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-marigold-400 transition-colors">
                  1 Student : 1 PC Practical Lab
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-marigold-400 transition-colors">
                  Beginner Computer Quiz
                </a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-marigold-400 transition-colors text-left">
                  Official Prospectus (A4 PDF)
                </button>
              </li>
              <li>
                <button onClick={onOpenEnrollment} className="hover:text-marigold-400 transition-colors text-left">
                  Book Free Seat / Demo Class
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-silver-100 tracking-wider">
              Contact & Center Address
            </h4>
            <div className="space-y-2 text-xs text-silver-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-marigold-400 shrink-0 mt-0.5" />
                <span>Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)</span>
              </p>
              
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-marigold-400 shrink-0" />
                <a href="tel:+919975875005" className="hover:text-white font-bold text-marigold-300">
                  +91 99758 75005 (Helpline)
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +91 99758 75005
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-silver-400">
          <p>
            © {new Date().getFullYear()} Prerna Computer Academy Degloor. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-silver-300 hover:text-marigold-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};