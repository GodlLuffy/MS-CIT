import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Award, Monitor, ShieldCheck, Clock, CheckCircle2, MapPin } from 'lucide-react';
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
            Authorized MKCL ALC Center • Maharashtra Govt. Joint MSBTE Certificate • Degloor
          </span>
        </motion.div>

        {/* 2. Main High-Impact Human Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-aubergine tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          Master Digital Skills. Build Your Career. <br />
          <span className="text-gradient-marigold italic">Government Authorized MS-CIT Institute.</span>
        </motion.h1>

        {/* 3. Subtitle with Local Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="font-serif text-lg sm:text-2xl text-aubergine/85 font-bold">
            Prerna Computer Academy Degloor
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-marigold/20 text-aubergine border border-marigold/30">
            प्रेरणा कॉम्प्युटर अकॅडमी देगलूर
          </span>
        </motion.div>

        {/* 4. Value Proposition Description in Clear English */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3.5 text-xs sm:text-base text-aubergine/75 max-w-3xl mx-auto leading-relaxed"
        >
          Mandatory government-recognized IT certification jointly issued by <strong>MKCL & MSBTE</strong> for Talathi, Police Bharti, Zilla Parishad, MPSC, and clerk recruitments. Dedicated <strong>1 Student : 1 PC</strong> workstation lab with patient, step-by-step guidance in Degloor.
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
              <span>Book Free Demo Class</span>
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
            <span>New Batch Starting Monday</span>
            <span className="text-aubergine/40">•</span>
            <span className="text-marigold-700 font-bold">Fee: ₹4,500 (2 Easy Installments)</span>
            <span className="text-aubergine/40">•</span>
            <span>Near Global English School, Rampur Road, Degloor</span>
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
              Govt. Recognized
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              Official MKCL & MSBTE joint certificate required for Maharashtra state government recruitments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              1:1 Practical Lab
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              Every student gets a dedicated personal PC with daily ERA 2025 hands-on practice. Zero sharing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              Job-Ready Skills
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              Master Office 2024, Marathi & English typing, cyber safety, net banking, and practical AI tools.
            </p>
          </div>

          {/* Card 4 */}
          <div className="modern-card p-5 group hover:border-marigold transition-all bg-white">
            <div className="w-10 h-10 rounded-xl bg-aubergine text-marigold flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-aubergine mb-1">
              Flexible Batches
            </h3>
            <p className="text-xs text-aubergine/75 leading-relaxed">
              Slots from 7:30 AM to 7:00 PM with uninterrupted power backup and friendly individual mentorship.
            </p>
          </div>
        </motion.div>

        {/* 7. Key Institute Metrics Ribbon */}
        <div className="mt-8 pt-6 border-t border-ice grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-aubergine">5,000+</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">Alumni Trained in Degloor</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-marigold-600">99.4%</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">Board Exam Pass Rate</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-aubergine">20+ Years</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">Educational Excellence</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-emerald-700">100%</span>
            <span className="text-[11px] text-aubergine/70 font-semibold">Hands-on Practical Labs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
