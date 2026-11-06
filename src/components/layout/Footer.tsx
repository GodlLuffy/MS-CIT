import React from 'react';
import { 
  Laptop, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  MessageSquare,
  Navigation
} from 'lucide-react';

interface FooterProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapsUrl = "https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316";

  return (
    <footer className="bg-aubergine-950 border-t border-marigold-500/25 text-silver-300 text-xs relative z-20 w-full overflow-hidden">
      
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Column 1: Institute Info */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-aubergine-700 via-marigold-500 to-amber-300 p-0.5 shadow-glow-marigold shrink-0">
                <div className="w-full h-full bg-aubergine-950 rounded-[10px] flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-marigold-400" />
                </div>
              </div>
              <div>
                <span className="font-black text-base sm:text-lg tracking-tight text-white block">
                  PRERNA COMPUTER ACADEMY
                </span>
                <span className="text-[11px] text-marigold-400 font-bold block">
                  Authorized MKCL Learning Center • Degloor
                </span>
              </div>
            </div>

            <p className="text-silver-300 text-xs leading-relaxed">
              प्रेरणा कॉम्प्युटर अकॅडमी देगलूर — Dedicated to empowering students, job aspirants, 
              and citizens of Degloor, Biloli, Mukhed, and Nanded district with modern digital skills, 
              MS Office proficiency, and authentic MS-CIT certification.
            </p>

            <div className="flex items-center gap-2 pt-1 text-silver-200">
              <ShieldCheck className="w-4 h-4 text-marigold-400 shrink-0" />
              <span>MSBTE & MKCL Joint Recognized Examination Center</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#curriculum" className="hover:text-marigold-400 transition-colors">Course Syllabus</a>
              </li>
              <li>
                <a href="#features" className="hover:text-marigold-400 transition-colors">Why Prerna Academy</a>
              </li>
              <li>
                <a href="#batches" className="hover:text-marigold-400 transition-colors">Batch Timings & Fees</a>
              </li>
              <li>
                <a href="#certificate" className="hover:text-marigold-400 transition-colors">Govt. Certificate</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-marigold-400 transition-colors">Degloor Computer Lab</a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-marigold-400 transition-colors">Digital Readiness Quiz</a>
              </li>
              <li>
                <a href="#location" className="hover:text-marigold-400 transition-colors">Google Maps Location</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-marigold-400 transition-colors">Admission FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Syllabus Modules */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              MS-CIT Modules
            </h4>
            <ul className="space-y-1.5 text-silver-400 text-xs">
              <li>Windows 11 OS & Computer Basics</li>
              <li>Microsoft Word & Marathi Typing</li>
              <li>Microsoft Excel & Financial Formulas</li>
              <li>Microsoft PowerPoint Presentations</li>
              <li>Cyber Security, DigiLocker & UPI Safety</li>
              <li>Maharashtra Aaple Sarkar Citizen Services</li>
              <li>AI Productivity (ChatGPT & Copilot)</li>
              <li>MKCL ERA Online Examination Drills</li>
            </ul>
          </div>

          {/* Column 4: Contact & Degloor Office Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Degloor Center Contact
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-marigold-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold">Prerna Computer Academy</p>
                <p className="text-silver-300 text-[11px] mt-0.5">
                  Near Global English School, Rampur Road / Nathnagar, Degloor, Dist. Nanded, Maharashtra - 431717
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-marigold-400 shrink-0" />
              <a href="tel:+919975875005" className="text-white hover:text-marigold-400 transition-colors font-bold">
                +91 99758 75005
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-marigold-400 shrink-0" />
              <a href="mailto:prerna.degloor@gmail.com" className="text-silver-200 hover:text-white transition-colors">
                prerna.degloor@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-silver-300">
              <Clock className="w-4 h-4 text-marigold-400 shrink-0" />
              <span>Daily: 07:30 AM – 08:30 PM (All 7 Days)</span>
            </div>

            {/* Google Maps & WhatsApp Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-aubergine-900 text-marigold-400 hover:bg-marigold-500 hover:text-aubergine-950 border border-marigold-500/35 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href="https://wa.me/919975875005"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-aubergine-900 text-silver-200 hover:bg-marigold-500 hover:text-aubergine-950 border border-marigold-500/25 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenEnrollment}
                className="btn-marigold px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all"
              >
                Enroll Online
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Location Pin */}
      <div className="border-t border-aubergine-900 bg-aubergine-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-silver-400">
            © {new Date().getFullYear()} Prerna Computer Academy Degloor (प्रेरणा कॉम्प्युटर अकॅडमी देगलूर). All Rights Reserved. 
            Authorized Learning Center affiliated with Maharashtra Knowledge Corporation Limited (MKCL).
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-aubergine-900 hover:bg-aubergine-800 text-silver-200 hover:text-white border border-marigold-500/25 transition-colors shrink-0"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-marigold-400" />
          </button>
        </div>
      </div>

    </footer>
  );
};
