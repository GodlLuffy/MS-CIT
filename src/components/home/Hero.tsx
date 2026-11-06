import React from 'react';
import { Sparkles, ArrowRight, Download, CheckCircle2, Phone } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden w-full editorial-grid-lines">
      {/* Ambient Marigold & Aubergine Glows */}
      <div className="glow-orb-marigold w-64 h-64 sm:w-96 sm:h-96 top-10 right-4 sm:right-20"></div>
      <div className="glow-orb-aubergine w-72 h-72 sm:w-[480px] sm:h-[480px] -bottom-10 -left-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Micro Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-aubergine-700/15 shadow-sm text-[11px] sm:text-xs font-bold text-aubergine-900 mb-5">
          <span className="w-2 h-2 rounded-full bg-marigold-500"></span>
          <span>MKCL Authorized ALC Center • Degloor (जि. नांदेड)</span>
        </div>

        {/* High-Impact English Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-aubergine-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Master Essential Digital Skills. <br />
          <span className="text-gradient-marigold">Get Certified for Your Future.</span>
        </h1>

        {/* Marathi Subtitle */}
        <p className="mt-4 text-base sm:text-xl font-bold text-aubergine-800 tracking-wide">
          प्रेरणा कॉम्प्युटर अकॅडमी देगलूर <span className="text-marigold-600">•</span> अधिकृत MS-CIT प्रशिक्षण केंद्र
        </p>

        {/* Value Proposition Description */}
        <p className="mt-3 text-xs sm:text-base text-aubergine-700 max-w-2xl mx-auto leading-relaxed">
          Maharashtra Government Recognized (GR) official IT certification jointly issued by <strong>MKCL & MSBTE</strong>. 
          Mandatory for Talathi, Police Bharti, MPSC, Zilla Parishad & state services. 
          100% individual computer lab practice with friendly mentorship in Degloor!
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenEnrollment}
            className="btn-marigold py-3.5 px-7 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-black flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-aubergine-950" />
            <span>Book Seat & Free Demo (प्रवेश अर्ज)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSyllabus}
            className="btn-aubergine py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-marigold-400" />
            <span>Official Syllabus (PDF)</span>
          </button>
        </div>

        {/* Quick Phone Hotline */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-aubergine-800">
          <Phone className="w-3.5 h-3.5 text-marigold-600" />
          <span>Call for admission inquiries:</span>
          <a href="tel:+919975875005" className="text-aubergine-950 underline decoration-marigold-500 font-black">
            +91 99758 75005
          </a>
        </div>

        {/* 3 Trust Metrics */}
        <div className="mt-10 pt-8 border-t border-aubergine-700/10 grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
          <div className="p-3 sm:p-5 rounded-2xl bg-white border border-aubergine-700/10 text-center shadow-sm">
            <span className="block text-xl sm:text-3xl font-black text-aubergine-900">5,000+</span>
            <span className="text-[10px] sm:text-xs text-aubergine-700 font-semibold">Certified Students in Degloor</span>
          </div>

          <div className="p-3 sm:p-5 rounded-2xl bg-white border border-aubergine-700/10 text-center shadow-sm">
            <span className="block text-xl sm:text-3xl font-black text-aubergine-900">99.4%</span>
            <span className="text-[10px] sm:text-xs text-aubergine-700 font-semibold">MSBTE Exam Pass Rate</span>
          </div>

          <div className="p-3 sm:p-5 rounded-2xl bg-white border border-aubergine-700/10 text-center shadow-sm">
            <span className="block text-xl sm:text-3xl font-black text-aubergine-900">1:1 PC</span>
            <span className="text-[10px] sm:text-xs text-aubergine-700 font-semibold">Personal Lab Computer</span>
          </div>
        </div>

      </div>
    </section>
  );
};