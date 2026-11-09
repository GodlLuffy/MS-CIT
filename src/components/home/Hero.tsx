import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Award, Monitor, ShieldCheck, Clock, CheckCircle2, MapPin } from 'lucide-react';
import { TelephoneIcon, WhatsAppIcon } from '../common/Icons';
import { InteractiveBallpit } from './InteractiveBallpit';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section id="about" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden w-full bg-[#FDFBF7] mandala-bg scroll-mt-20 lg:scroll-mt-24">
      
      {/* Interactive Ballpit Floating Canvas Accent (KLP Academy Signature Element) */}
      <div className="absolute inset-0 pointer-events-auto opacity-35 sm:opacity-45 z-0">
        <InteractiveBallpit className="w-full h-full" />
      </div>

      {/* Subtle Warm Amber & Gold Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center pointer-events-none">
        
        {/* 1. Official Government Accreditation Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E2E8F0] shadow-sm text-xs font-semibold text-[#0F172A] mb-5 pointer-events-auto"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="tracking-wide">
            Authorized MKCL ALC Center • Maharashtra Govt. Joint MSBTE Certificate • Degloor
          </span>
        </motion.div>

        {/* 2. Main High-Impact Human Headline (Playfair Display) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] max-w-5xl mx-auto pointer-events-auto"
        >
          Master Digital Skills. Build Your Career. <br />
          <span className="text-gradient-gold italic">Government Authorized MS-CIT Institute.</span>
        </motion.h1>

        {/* 3. Subtitle with Local Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2 pointer-events-auto"
        >
          <span className="font-serif text-lg sm:text-2xl text-[#0F172A]/85 font-bold">
            Prerna Computer Academy Degloor
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#0F172A] border border-[#D4AF37]/40 shadow-sm">
            प्रेरणा कॉम्प्युटर अकॅडमी देगलूर
          </span>
        </motion.div>

        {/* 4. Value Proposition Description in Clear English */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-xs sm:text-base text-[#64748B] max-w-3xl mx-auto leading-relaxed pointer-events-auto"
        >
          Mandatory government-recognized IT certification jointly awarded by <strong>MKCL & MSBTE</strong> for Talathi, Police Bharti, Zilla Parishad, MPSC, and clerical selections. Dedicated <strong>1 Student : 1 PC</strong> practical lab with patient, step-by-step guidance in Degloor.
        </motion.p>

        {/* 5. Action Buttons (KLP Academy Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-4 pointer-events-auto"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full max-w-xl">
            <button
              onClick={onOpenEnrollment}
              className="btn-gold py-3.5 px-8 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-lg cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 text-[#0F172A] shrink-0" />
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <a
              href="tel:+919970362555"
              className="px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all whitespace-nowrap shrink-0"
              title="Call Institute Helpline: +91 99703 62555"
            >
              <TelephoneIcon className="w-4 h-4 text-[#D4AF37] shrink-0" />
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
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>New Batch Starting Monday</span>
            <span className="text-[#0F172A]/40">•</span>
            <span className="text-[#D4AF37] font-bold">Fee: ₹4,500 (2 Easy Installments)</span>
            <span className="text-[#0F172A]/40">•</span>
            <span>Near Global English School, Rampur Road, Degloor</span>
          </div>
        </motion.div>

        {/* 6. 4 Real Institutional Pillar Feature Cards (KLP Academy Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left pointer-events-auto"
        >
          {/* Card 1 */}
          <div className="modern-card p-5 group hover:border-[#D4AF37] transition-all bg-white shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0F172A] mb-1">
              Govt. Recognized
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Official MKCL & MSBTE joint certificate required for Maharashtra state government recruitments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="modern-card p-5 group hover:border-[#D4AF37] transition-all bg-white shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0F172A] mb-1">
              1:1 Practical Lab
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Every student gets a dedicated personal PC with daily ERA 2025 hands-on practice. Zero sharing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="modern-card p-5 group hover:border-[#D4AF37] transition-all bg-white shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0F172A] mb-1">
              Job-Ready Skills
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Master Office 2024, Marathi & English typing, cyber safety, net banking, and practical AI tools.
            </p>
          </div>

          {/* Card 4 */}
          <div className="modern-card p-5 group hover:border-[#D4AF37] transition-all bg-white shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#0F172A] mb-1">
              Flexible Batches
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Slots from 7:30 AM to 7:00 PM with uninterrupted power backup and friendly individual mentorship.
            </p>
          </div>
        </motion.div>

        {/* 7. Key Institute Metrics Ribbon */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pointer-events-auto">
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#0F172A]">5,000+</span>
            <span className="text-[11px] text-[#64748B] font-semibold">Alumni Trained in Degloor</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">99.4%</span>
            <span className="text-[11px] text-[#64748B] font-semibold">Board Exam Pass Rate</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#0F172A]">20+ Years</span>
            <span className="text-[11px] text-[#64748B] font-semibold">Educational Excellence</span>
          </div>
          <div className="text-center p-2">
            <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-emerald-700">100%</span>
            <span className="text-[11px] text-[#64748B] font-semibold">Hands-on Practical Labs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
