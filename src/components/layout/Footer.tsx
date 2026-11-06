import React from 'react';
import { 
  Laptop, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowUp,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative z-20">
      
      {/* Upper Footer: 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Institute Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-brand-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block">
                  APEX <span className="text-brand-400">MS-CIT</span> ACADEMY
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  Authorized MKCL Center (ALC-411038)
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Pioneering digital empowerment and government-recognized IT certification in Maharashtra. 
              Over 18+ years of educational excellence, modern 1:1 computer labs, and a 99.4% first-attempt 
              pass rate.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>MSBTE & MKCL Joint Certification Center</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">Course Syllabus</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#batches" className="hover:text-white transition-colors">Batch Timings</a>
              </li>
              <li>
                <a href="#certificate" className="hover:text-white transition-colors">Govt. Certificate</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Campus Lab</a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">Digital Readiness Quiz</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">Admission FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Syllabus Modules */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Modules
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Windows 11 & OS Architecture</li>
              <li>Microsoft Word & Documentation</li>
              <li>Microsoft Excel & Data Analysis</li>
              <li>Microsoft PowerPoint & Presenter</li>
              <li>Cyber Security & Digital Banking</li>
              <li>Maharashtra Aaple Sarkar & Citizen Portals</li>
              <li>AI Tools & Modern Copilot Skills</li>
              <li>MKCL ERA Online Exam Simulator</li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Institute Center
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <p className="text-slate-300">
                2nd Floor, IT Synergy Arcade, Near Shivaji Bus Station, Pune, Maharashtra 411005
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+919876543210" className="text-white hover:text-brand-300 transition-colors font-semibold">
                +91 98765 43210 / 020-25678901
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="mailto:admissions@apexmscit.edu.in" className="hover:text-white transition-colors">
                admissions@apexmscit.edu.in
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mon - Sat: 07:30 AM – 08:30 PM (Sun Open for Batches)</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenEnrollment}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-glow-blue transition-all"
              >
                Enroll Online
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-500/30 transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Disclaimers */}
      <div className="border-t border-slate-900 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Apex MS-CIT Training Academy. All Rights Reserved. 
            Authorized Learning Center (ALC) affiliated with Maharashtra Knowledge Corporation Limited (MKCL).
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
          </button>
        </div>
      </div>

    </footer>
  );
};
