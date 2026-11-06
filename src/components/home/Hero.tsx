import React from 'react';
import { Sparkles, ArrowRight, Download, Phone, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section id="about" className="relative pt-10 pb-16 sm:pt-20 sm:pb-28 overflow-hidden w-full bg-cream">
      {/* Background Soft Golden Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent-gold/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 rounded-full bg-gold-light blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Luxury Golden Trust Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-light border border-accent-gold/30 shadow-sm text-xs font-semibold text-slate-800 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
          <span>Authorized MKCL Training Center • Degloor (Dist. Nanded)</span>
        </div>

        {/* High-End Editorial Serif Headline (KLP Academy Style) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Master Digital Skills. <br />
          <span className="text-gradient-gold italic">Get Certified for Your Career.</span>
        </h1>

        {/* Subtitle with Local Identity */}
        <p className="mt-4 font-serif text-lg sm:text-2xl text-slate-700 tracking-wide">
          Prerna Computer Academy Degloor • <span className="font-sans text-base sm:text-lg text-accent-gold font-bold">प्रेरणा कॉम्प्युटर अकॅडमी देगलूर</span>
        </p>

        {/* Value Proposition Description */}
        <p className="mt-4 text-xs sm:text-base text-gray-medium max-w-2xl mx-auto leading-relaxed">
          Official Maharashtra Government Recognized (GR) IT certification jointly issued by <strong>MKCL & MSBTE</strong>. 
          Mandatory for Talathi, Police Bharti, MPSC, Zilla Parishad & state government recruitments. 
          100% individual PC lab practice with friendly mentorship in Degloor!
        </p>

        {/* KLP-Style Pill Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenEnrollment}
            className="btn-gold py-3.5 px-8 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Book Seat & Free Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSyllabus}
            className="btn-outline py-3.5 px-7 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-800" />
            <span>Official Syllabus (PDF)</span>
          </button>
        </div>

        {/* Quick Phone Helpline */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-gray-medium">
          <Phone className="w-3.5 h-3.5 text-accent-gold" />
          <span>Direct Admissions Helpline:</span>
          <a href="tel:+919975875005" className="text-slate-900 hover:text-accent-gold font-bold transition-colors">
            +91 99758 75005
          </a>
        </div>

        {/* 3 Elevated White Metric Cards on Cream Background */}
        <div className="mt-14 pt-10 border-t border-gray-light grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
          <div className="card-luxury p-4 sm:p-6 text-center">
            <span className="block font-serif text-2xl sm:text-4xl font-bold text-slate-900">5,000+</span>
            <span className="text-[11px] sm:text-xs text-gray-medium font-medium mt-1 block">Certified Students in Degloor</span>
          </div>

          <div className="card-luxury p-4 sm:p-6 text-center">
            <span className="block font-serif text-2xl sm:text-4xl font-bold text-accent-gold">99.4%</span>
            <span className="text-[11px] sm:text-xs text-gray-medium font-medium mt-1 block">MSBTE Exam Pass Rate</span>
          </div>

          <div className="card-luxury p-4 sm:p-6 text-center">
            <span className="block font-serif text-2xl sm:text-4xl font-bold text-slate-900">1:1 PC</span>
            <span className="text-[11px] sm:text-xs text-gray-medium font-medium mt-1 block">Personal Lab Workstation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
