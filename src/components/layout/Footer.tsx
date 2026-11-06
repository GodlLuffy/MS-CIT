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
              <div className="w-10 h-10 rounded-xl bg-aubergine-850 text-marigold-400 flex flex-col items-center justify-center font-black border border-marigold-500/40 shrink-0">
                <span className="text-xs leading-none">PCA</span>
                <span className="text-[7px] text-silver-300 leading-none mt-0.5">MKCL</span>
              </div>
              <div>
                <h3 className="text-base font-black text-silver-100 tracking-wide">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर
                </h3>
                <p className="text-xs text-marigold-400 font-semibold">
                  अधिकृत MKCL MS-CIT प्रशिक्षण केंद्र (जि. नांदेड)
                </p>
              </div>
            </div>

            <p className="text-xs text-silver-300 leading-relaxed max-w-sm">
              गेल्या १५ वर्षांपासून देगलूर परिसरातील विद्यार्थ्यांना शासनमान्य संगणक शिक्षण, टायपिंग आणि रोजगाराभिमुख कौशल्यांचे परिपूर्ण प्रशिक्षण देणारे अग्रगण्य केंद्र.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-marigold-400 font-semibold">
              <Award className="w-4 h-4 text-marigold-400 shrink-0" />
              <span>महाराष्ट्र शासन निर्णय (GR) अंतर्गत सर्व सरकारी नोकऱ्यांसाठी वैध</span>
            </div>
          </div>

          {/* Col 2: Quick Links in Marathi */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-silver-100 tracking-wider">
              महत्त्वाच्या लिंक्स (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs text-silver-300">
              <li>
                <a href="#curriculum" className="hover:text-marigold-400 transition-colors">
                  MS-CIT अभ्यासक्रम (८ मॉड्युल्स)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-marigold-400 transition-colors">
                  १ विद्यार्थी : १ संगणक लॅब सराव
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-marigold-400 transition-colors">
                  सोपी संगणक प्रश्नमंजुषा (Quiz)
                </a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-marigold-400 transition-colors text-left">
                  अधिकृत प्रॉस्पेक्टस (A4 PDF)
                </button>
              </li>
              <li>
                <button onClick={onOpenEnrollment} className="hover:text-marigold-400 transition-colors text-left">
                  प्रवेश अर्ज व मोफत डेमो क्लास
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address in Marathi */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-silver-100 tracking-wider">
              संपर्क व केंद्राचा पत्ता (Contact)
            </h4>
            <div className="space-y-2 text-xs text-silver-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-marigold-400 shrink-0 mt-0.5" />
                <span>ग्लोबल इंग्लिश स्कूलजवळ, रामपूर रोड / नाथनगर, देगलूर – ४३१७१७ (जि. नांदेड)</span>
              </p>
              
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-marigold-400 shrink-0" />
                <a href="tel:+919975875005" className="hover:text-white font-bold text-marigold-300">
                  +९१ ९९७५८ ७५००५ (हेल्पलाईन)
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
                  WhatsApp: ९९७५८ ७५००५
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-silver-400">
          <p>
            © {new Date().getFullYear()} प्रेरणा कॉम्प्युटर अकॅडमी देगलूर. सर्व हक्क राखीव.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-silver-300 hover:text-marigold-400 transition-colors"
          >
            <span>वर जा (Top)</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};