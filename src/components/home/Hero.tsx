import React from 'react';
import { Sparkles, ArrowRight, Download, CheckCircle2, Phone } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden w-full">
      {/* Background Ambient Glows in Deep Aubergine & Marigold */}
      <div className="glow-orb-marigold w-64 h-64 sm:w-96 sm:h-96 top-10 right-4 sm:right-20"></div>
      <div className="glow-orb-aubergine w-72 h-72 sm:w-[480px] sm:h-[480px] -bottom-10 -left-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Micro Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aubergine-900 border border-marigold-500/40 shadow-sm text-[11px] sm:text-xs font-bold text-marigold-300 mb-5">
          <span className="w-2 h-2 rounded-full bg-marigold-500 animate-pulse"></span>
          <span>MKCL अधिकृत MS-CIT केंद्र • देगलूर (जि. नांदेड)</span>
        </div>

        {/* High-Impact Marathi Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-silver-100 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          डिजिटल साक्षरता हीच तुमची <br />
          <span className="text-gradient-marigold">खरी ताकद व प्रगती!</span>
        </h1>

        {/* Marathi Academy Name with Golden Glow */}
        <p className="mt-4 text-base sm:text-2xl font-bold text-marigold-400 tracking-wide">
          प्रेरणा कॉम्प्युटर अकॅडमी देगलूर
        </p>

        {/* Value Subtitle in Clear Marathi */}
        <p className="mt-3 text-xs sm:text-base text-silver-300 max-w-2xl mx-auto leading-relaxed">
          महाराष्ट्र शासनमान्य (Govt. Recognized) अधिकृत <strong>MKCL & MSBTE</strong> प्रमाणपत्र. 
          तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद व सर्व शासकीय नोकऱ्यांसाठी अनिवार्य. 
          १००% वैयक्तिक संगणक प्रात्यक्षिक (1:1 PC Practical) आणि तज्ज्ञ शिक्षकांचे मराठीतून मार्गदर्शन!
        </p>

        {/* Action Buttons in 3 Colors */}
        <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenEnrollment}
            className="btn-marigold py-3.5 px-7 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-black flex items-center justify-center gap-2 group shadow-glow-marigold"
          >
            <Sparkles className="w-4 h-4 text-aubergine-950" />
            <span>प्रवेश अर्ज व मोफत डेमो (Book Seat)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSyllabus}
            className="btn-silver py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-marigold-400" />
            <span>अभ्यासक्रम प्रॉस्पेक्टस (PDF)</span>
          </button>
        </div>

        {/* Direct Phone Call Strip */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-silver-300">
          <Phone className="w-3.5 h-3.5 text-marigold-400" />
          <span>थेट फोनवर माहितीसाठी कॉल करा:</span>
          <a href="tel:+919975875005" className="text-marigold-400 underline font-black">
            ९९७५८ ७५००५
          </a>
        </div>

        {/* 3 Metric Cards */}
        <div className="mt-10 pt-8 border-t border-aubergine-800 grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
          <div className="luxury-card p-3 sm:p-5 rounded-2xl text-center">
            <span className="block text-xl sm:text-3xl font-black text-marigold-400">५,०००+</span>
            <span className="text-[10px] sm:text-xs text-silver-300 font-medium">यशस्वी विद्यार्थी (Alumni)</span>
          </div>

          <div className="luxury-card p-3 sm:p-5 rounded-2xl text-center">
            <span className="block text-xl sm:text-3xl font-black text-marigold-400">९९.४%</span>
            <span className="text-[10px] sm:text-xs text-silver-300 font-medium">MSBTE परीक्षा निकाल</span>
          </div>

          <div className="luxury-card p-3 sm:p-5 rounded-2xl text-center">
            <span className="block text-xl sm:text-3xl font-black text-marigold-400">१:१ PC</span>
            <span className="text-[10px] sm:text-xs text-silver-300 font-medium">स्वतंत्र कॉम्प्युटर लॅब</span>
          </div>
        </div>

      </div>
    </section>
  );
};