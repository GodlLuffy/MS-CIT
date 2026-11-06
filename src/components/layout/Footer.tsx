import React from 'react';
import { Phone, MessageSquare, MapPin, Award, ArrowUp, Clock, FileText, Sparkles, Navigation, Mail, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-slate-950 text-white pt-20 pb-28 sm:pb-12 w-full overflow-hidden border-t-2 border-accent-gold/40">
      
      {/* Giant Subtle Background Watermark (KLP Academy Signature Style) */}
      <div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 font-serif font-black text-white/[0.02] text-[clamp(8rem,24vw,22rem)] leading-none pointer-events-none select-none z-0 whitespace-nowrap"
      >
        PRERNA
      </div>

      {/* Background Soft Golden Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer Action Banner (Floating Luxury Card) */}
        <div className="mb-16 -mt-8 sm:-mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-accent-gold/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full border border-accent-gold/30 inline-block">
              Admissions Open 2025
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
              Ready to Master Computers in Degloor?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Claim your free 1-day demo trial class & reserve your personal PC workstation today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+919975875005"
              className="btn-outline text-white border-white/20 hover:border-accent-gold hover:text-accent-gold w-full sm:w-auto text-xs py-3 px-6 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span>Call: +91 99758 75005</span>
            </a>

            <button
              onClick={onOpenEnrollment}
              className="btn-gold w-full sm:w-auto text-xs py-3 px-7 uppercase tracking-wider font-bold shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book Demo Class</span>
            </button>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Institute Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-gold-hover text-slate-950 flex flex-col items-center justify-center font-black shadow-md shrink-0">
                <span className="text-sm font-black leading-none">PCA</span>
                <span className="text-[7px] text-slate-900 font-bold leading-none mt-0.5">MKCL</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide leading-none">
                  PRERNA ACADEMY
                </h3>
                <p className="text-[10px] text-accent-gold font-bold tracking-widest uppercase mt-0.5">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Authorized MKCL ALC Center & MSBTE Computer Training Center. Empowering students across Degloor, Biloli, and Nanded with certified IT education, typing, and digital employment skills for over 15 years.
            </p>

            {/* Social & Contact Circular Pills */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="tel:+919975875005"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold hover:bg-accent-gold hover:text-slate-950 text-accent-gold flex items-center justify-center transition-all shadow-sm"
                title="Call Helpline"
                aria-label="Direct Phone Helpline"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white text-emerald-400 flex items-center justify-center transition-all shadow-sm"
                title="WhatsApp Chat"
                aria-label="WhatsApp Inquiry"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold hover:bg-accent-gold hover:text-slate-950 text-accent-gold flex items-center justify-center transition-all shadow-sm"
                title="Google Maps Location"
                aria-label="Google Maps Location"
              >
                <Navigation className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenSyllabus}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold hover:bg-accent-gold hover:text-slate-950 text-accent-gold flex items-center justify-center transition-all shadow-sm"
                title="Download Prospectus"
                aria-label="Download Prospectus"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-accent-gold font-semibold">
              <Award className="w-4 h-4 text-accent-gold shrink-0" />
              <span>Certified under Maharashtra Govt. Resolution (GR) for State Services</span>
            </div>
          </div>

          {/* Column 2: Quick Links with Gold Underline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-3">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent-gold"></span>
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> About Academy
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> 8 Modules Syllabus
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> 1:1 PC Lab Setup
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> Computer Quiz
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> Fees & Batches
                </a>
              </li>
              <li>
                <a href="#location-map" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> Degloor Center Map
                </a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-accent-gold transition-colors text-left flex items-center gap-1.5">
                  <span className="text-accent-gold">›</span> Prospectus (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Course Specializations (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-3">
                Curriculum
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent-gold"></span>
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>Windows 11 OS</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>MS Word & Excel</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>PowerPoint & Slides</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>Marathi Typing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>Cyber & UPI Safety</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>Aaple Sarkar e-Services</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span>AI Tools (ChatGPT)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Center Address (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white relative inline-block mb-3">
                Center Info
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent-gold"></span>
              </h4>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
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

              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Lab Hours: Daily 07:30 AM – 07:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Prerna Computer Academy Degloor. Authorized MKCL ALC Center. Joint MSBTE Certification.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-accent-gold transition-colors group p-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
