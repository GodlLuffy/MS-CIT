import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Phone, Award, Monitor, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section id="about" className="relative pt-10 pb-20 sm:pt-20 sm:pb-32 overflow-hidden w-full bg-[#0B0F19]">
      
      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-gold/10 blur-[140px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* 1. Elite Pill Badge with Pulsing Live Status */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-accent-gold/35 shadow-lg backdrop-blur-md text-xs font-semibold text-slate-200 mb-6 hover:border-accent-gold/60 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold"></span>
          </span>
          <span className="tracking-wide">🌟 Authorized Learning Partner | Government Recognized</span>
        </motion.div>

        {/* 2. Hero Headline with Electric Gold Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
        >
          Master Digital Skills. <br />
          <span className="text-gradient-gold">Get Certified for Your Career.</span>
        </motion.h1>

        {/* 3. Subtitle with Local Identity */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-serif text-lg sm:text-2xl text-slate-300 tracking-wide"
        >
          Prerna Computer Academy Degloor • <span className="font-sans text-base sm:text-lg text-accent-gold font-bold">प्रेरणा कॉम्प्युटर अकॅडमी देगलूर</span>
        </motion.p>

        {/* 4. Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Official Maharashtra Government Resolution (GR) IT certification jointly issued by <strong>MKCL & MSBTE</strong>. 
          Mandatory for Talathi, Police Bharti, MPSC, Zilla Parishad & state recruitments. 
          100% individual PC lab practice with patient mentorship in Degloor!
        </motion.p>

        {/* 5. Dual CTAs + Live Counter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full max-w-md">
            <button
              onClick={onOpenEnrollment}
              className="btn-gold py-3.5 px-8 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-gold-glow cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#curriculum"
              className="btn-secondary py-3.5 px-7 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-accent-gold" />
              <span>Explore Curriculum</span>
            </a>
          </div>

          {/* Dynamic Live Enrollment Counter Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>🔥 42+ Students enrolled this month • New Batch Starting Monday</span>
          </div>

          {/* Quick Phone Helpline */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 pt-1">
            <Phone className="w-3.5 h-3.5 text-accent-gold" />
            <span>Admissions Helpline:</span>
            <a href="tel:+919975875005" className="text-white hover:text-accent-gold font-bold transition-colors">
              +91 99758 75005
            </a>
          </div>
        </motion.div>

        {/* 6. Floating Trust Feature Cards (Govt Certificate, Advanced Lab, Job-Ready, Flexible Batches) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {/* Card 1 */}
          <div className="modern-card p-5 group hover:border-accent-gold/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-accent-gold/30">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white mb-1">
              Govt. Recognized
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official MKCL & MSBTE joint certificate mandatory for Maharashtra government jobs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="modern-card p-5 group hover:border-accent-gold/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-accent-gold/30">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white mb-1">
              1:1 Advanced Lab
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every student gets a dedicated personal PC with daily ERA 2025 hands-on practice.
            </p>
          </div>

          {/* Card 3 */}
          <div className="modern-card p-5 group hover:border-accent-gold/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-accent-gold/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white mb-1">
              Job-Ready Skills
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Master Office 2024, Marathi typing, cyber safety, UPI transactions, and modern AI tools.
            </p>
          </div>

          {/* Card 4 */}
          <div className="modern-card p-5 group hover:border-accent-gold/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-accent-gold/30">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white mb-1">
              Flexible Batches
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Slots from 7:30 AM to 7:00 PM with transparent ₹4,500 fee payable in 2 easy installments.
            </p>
          </div>
        </motion.div>

        {/* 7. Key Institute Metrics Ribbon */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="text-center">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-white">5,000+</span>
            <span className="text-[11px] text-slate-400 font-medium">Degloor Alumni</span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-accent-gold">99.4%</span>
            <span className="text-[11px] text-slate-400 font-medium">Pass Rate</span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-white">15+ Yrs</span>
            <span className="text-[11px] text-slate-400 font-medium">Local Excellence</span>
          </div>
        </div>

      </div>
    </section>
  );
};
