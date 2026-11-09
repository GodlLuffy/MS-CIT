import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Award, Monitor, ShieldCheck, Clock, CheckCircle2, MapPin, Zap } from 'lucide-react';
import { TelephoneIcon, WhatsAppIcon } from '../common/Icons';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section id="about" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden w-full bg-[#FAF9F6] scroll-mt-20 lg:scroll-mt-24">
      
      {/* Subtle Warm Amber & Ice Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-marigold/10 blur-[130px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ice/60 blur-[100px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* 1. Official Government Accreditation Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-ice shadow-sm text-xs font-semibold text-aubergine mb-5"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="tracking-wide">
            अधिकृत MKCL ALC केंद्र • महाराष्ट्र शासनमान्य MSBTE प्रमाणपत्र • देगलूर
          </span>
        </motion.div>

        {/* 2. Main Human-Crafted Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-aubergine tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          शासकीय व खाजगी नोकरीसाठी आवश्यक <br />
          <span className="text-gradient-marigold italic">अधिकृत MS-CIT संगणक प्रशिक्षण</span>
        </motion.h1>

        {/* 3. Subtitle with Proud Local Identity */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-serif text-base sm:text-xl md:text-2xl text-aubergine/85 tracking-wide max-w-3xl mx-auto"
        >
          Prerna Computer Academy Degloor • <span className="font-sans font-bold text-marigold-600">प्रेरणा कॉम्प्युटर अकॅडमी</span>
        </motion.p>

        {/* 4. Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3.5 text-xs sm:text-base text-aubergine/75 max-w-3xl mx-auto leading-relaxed"
        >
          तलाठी, पोलीस भरती, ZP, ग्रामसेवक, MPSC व लिपिक पदांसाठी <strong>शासन निर्णय (GR)</strong> अन्वये अनिवार्य असलेले अधिकृत प्रमाणपत्र. 
          प्रत्येक विद्यार्थ्याला स्वतंत्र संगणक (1:1 PC Lab), अनुभवी प्राध्यापक, व मराठीतून सोप्या भाषेत मार्गदर्शन!
        </motion.p>

        {/* 5. Dual CTAs + Live Admission Notification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full max-w-xl">
            <button
              onClick={onOpenEnrollment}
              className="btn-gold py-3.5 px-8 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-marigold-glow cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 text-aubergine-950 shrink-0" />
              <span>प्रवेश निश्चित करा / Book Seat</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <a
              href="tel:+919970362555"
              className="btn-outline py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm whitespace-nowrap shrink-0"
              title="Call Institute Helpline: +91 99703 62555"
            >
              <TelephoneIcon className="w-4 h-4 text-marigold-600 shrink-0" />
              <span className="whitespace-nowrap">Call: 99703 62555</span>
            </a>

            <a
              href="https://wa.me/919970362555?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20to%20inquire%20about%20MS-CIT%20Admission."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Dynamic Live Admission Banner with Real Local Assurance */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-ice/60 border border-ice text-aubergine text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>सोमवारपासून नवीन बॅच सुरू</span>
            <span className="text-aubergine/40">•</span>
            <span className="text-marigold-700 font-bold">फी ₹४,५०० (२ सोप्या हप्त्यांत उपलब्ध)</span>
            <span className="text-aubergine/40">•</span>
            <span>ग्लोबल स्कूल जवळ, रामपूर रोड, देगलूर</span>
          </div>
        </motion.div>

        {/* 6. 4 Real Institutional Pillar Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {/* Card 1 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              शासनमान्य प्रमाणपत्र
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              MKCL व MSBTE चे संयुक्त अधिकृत प्रमाणपत्र; महाराष्ट्र शासन सेवेतील भरतीसाठी अनिवार्य.
            </p>
          </div>

          {/* Card 2 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              १ विद्यार्थी : १ संगणक
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              प्रत्येक विद्यार्थ्याला स्वतंत्र PC वर्कस्टेशन; रोज २ तास प्रत्यक्ष प्रॅक्टिकल सराव.
            </p>
          </div>

          {/* Card 3 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              मराठी व इंग्रजी टायपिंग
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              Office 2024, मराठी टायपिंग, सायबर सुरक्षा, UPI बँकिंग, व आधुनिक AI टूल्सचे सखोल ज्ञान.
            </p>
          </div>

          {/* Card 4 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              सकाळी ७:३० ते संध्या. ७:००
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              कॉलेज व नोकरदारांसाठी सोयीच्या बॅचेस; वीज खंडित झाल्यावरही अखंड इन्व्हर्टर बॅकअप.
            </p>
          </div>
        </motion.div>

        {/* 7. Key Institute Metrics Ribbon */}
        <div className="mt-8 pt-6 border-t border-ice grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-aubergine">५,०००+</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">देगलूर व परिसरातील विद्यार्थी</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-marigold-600">९९.४%</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">बोर्ड परीक्षा निकाल</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-aubergine">२०+ वर्षे</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">अखंड शैक्षणिक परंपरा</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-emerald-700">१००%</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">हँड्स-ऑन प्रॅक्टिकल लॅब</span>
          </div>
        </div>

      </div>
    </section>
  );
};
