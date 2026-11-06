import React from 'react';
import { Sparkles, ArrowRight, Download, CheckCircle2, Phone, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 overflow-hidden w-full">
      {/* Background Ambient Glows */}
      <div className="glow-orb-gold w-72 h-72 sm:w-96 sm:h-96 top-10 right-4 sm:right-20"></div>
      <div className="glow-orb-indigo w-80 h-80 sm:w-[500px] sm:h-[500px] -bottom-10 -left-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-sm text-[11px] sm:text-xs font-bold text-slate-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
          <span>Authorized MKCL Training Center • Degloor (Dist. Nanded)</span>
        </div>

        {/* High-Impact Modern Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Master Digital Skills. <br />
          <span className="text-gradient-gold">Get Certified for Your Career.</span>
        </h1>

        {/* Subtitle with Local Identity */}
        <p className="mt-4 text-base sm:text-xl font-bold text-slate-200 tracking-wide">
          Prerna Computer Academy Degloor • प्रेरणा कॉम्प्युटर अकॅडमी देगलूर
        </p>

        {/* Value Proposition Description */}
        <p className="mt-3 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Official Maharashtra Government Recognized (GR) IT certification jointly issued by <strong>MKCL & MSBTE</strong>. 
          Mandatory for Talathi, Police Bharti, MPSC, Zilla Parishad & state government services. 
          100% individual PC lab practice with expert mentorship in Degloor!
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenEnrollment}
            className="btn-primary py-3.5 px-7 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-black flex items-center justify-center gap-2 group shadow-glow-gold"
          >
            <Sparkles className="w-4 h-4 text-dark-950" />
            <span>Book Seat & Free Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSyllabus}
            className="btn-secondary py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-gold-400" />
            <span>Official Syllabus (PDF)</span>
          </button>
        </div>

        {/* Quick Phone Hotline */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span>Direct Admissions Helpline:</span>
          <a href="tel:+919975875005" className="text-white hover:text-gold-400 underline font-bold">
            +91 99758 75005
          </a>
        </div>

        {/* 3 Trust Metrics */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
          <div className="modern-card p-3 sm:p-5 rounded-2xl text-center">
            <span className="block text-xl sm:text-3xl font-black text-white">5,000+</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Certified Students in Degloor</span>
          </div>

          <div className="modern-card p-3 sm:p-5 rounded-2xl text-center">
            <span className="block text-xl sm:text-3xl font-black text-white">99.4%</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">MSBTE Exam Pass Rate</span>
          </div>

          <div className="modern-card p-3 sm:p-5 rounded-2xl text-center">
            <span className="block text-xl sm:text-3xl font-black text-white">1:1 PC</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Personal Lab Computer</span>
          </div>
        </div>

      </div>
    </section>
  );
};