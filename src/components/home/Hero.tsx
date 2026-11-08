import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Award, Monitor, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { TelephoneIcon } from '../common/Icons';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section id="about" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden w-full bg-[#FAF9F6] scroll-mt-20 lg:scroll-mt-24">
      
      {/* Subtle Warm Amber & Ice Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-marigold/10 blur-[130px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ice/60 blur-[100px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* 1. Pill Badge in Ice Silver & Aubergine */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-ice shadow-sm text-xs font-semibold text-aubergine mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-marigold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-marigold"></span>
          </span>
          <span className="tracking-wide">Authorized MKCL Learning Partner • Degloor (Nanded)</span>
        </motion.div>

        {/* 2. Hero Headline in Deep Aubergine & Marigold Highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-aubergine tracking-tight leading-[1.14] max-w-4xl mx-auto"
        >
          Master Digital Skills. <br />
          <span className="text-gradient-marigold italic">Get Certified for Your Career.</span>
        </motion.h1>

        {/* 3. Subtitle with Local Identity */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-serif text-lg sm:text-2xl text-aubergine/80 tracking-wide"
        >
          Prerna Computer Academy Degloor • <span className="font-sans text-base sm:text-lg text-marigold-600 font-bold">प्रेरणा कॉम्प्युटर अकॅडमी</span>
        </motion.p>

        {/* 4. Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-xs sm:text-base text-aubergine/70 max-w-2xl mx-auto leading-relaxed"
        >
          Official Maharashtra Government Recognized (GR) IT certification jointly issued by <strong>MKCL & MSBTE</strong>. 
          Mandatory for Talathi, Police Bharti, MPSC, Zilla Parishad & state recruitments. 
          100% individual PC lab practice with friendly mentorship in Degloor!
        </motion.p>

        {/* 5. Dual CTAs + Live Counter Badge */}
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
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <a
              href="tel:+919975875005"
              className="btn-outline py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm whitespace-nowrap shrink-0"
              title="Call Institute Helpline: +91 99758 75005"
            >
              <TelephoneIcon className="w-4 h-4 text-marigold-600 shrink-0" />
              <span className="whitespace-nowrap">Call: 99758 75005</span>
            </a>
          </div>

          {/* Dynamic Live Enrollment Counter Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ice/60 border border-ice text-aubergine text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>🔥 42+ Students enrolled this month • New Batch Starting Monday</span>
          </div>
        </motion.div>

        {/* 6. 4 Floating Trust Feature Cards in Ice Silver & Aubergine */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {/* Card 1 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              Govt. Recognized
            </h3>
            <p className="text-xs text-aubergine/70 leading-relaxed">
              Official MKCL & MSBTE joint certificate mandatory for Maharashtra government jobs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              1:1 Advanced Lab
            </h3>
            <p className="text-xs text-aubergine/70 leading-relaxed">
              Every student gets a dedicated personal PC with daily ERA 2025 hands-on practice.
            </p>
          </div>

          {/* Card 3 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              Job-Ready Skills
            </h3>
            <p className="text-xs text-aubergine/70 leading-relaxed">
              Master Office 2024, Marathi typing, cyber safety, UPI transactions, and modern AI tools.
            </p>
          </div>

          {/* Card 4 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              Flexible Batches
            </h3>
            <p className="text-xs text-aubergine/70 leading-relaxed">
              Slots from 7:30 AM to 7:00 PM with transparent ₹4,500 fee payable in 2 easy installments.
            </p>
          </div>
        </motion.div>

        {/* 7. Key Institute Metrics Ribbon */}
        <div className="mt-8 pt-8 border-t border-ice grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="text-center">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-aubergine">5,000+</span>
            <span className="text-[11px] text-aubergine/60 font-medium">Degloor Alumni</span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-marigold-600">99.4%</span>
            <span className="text-[11px] text-aubergine/60 font-medium">Pass Rate</span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-aubergine">15+ Yrs</span>
            <span className="text-[11px] text-aubergine/60 font-medium">Local Excellence</span>
          </div>
        </div>

      </div>
    </section>
  );
};
