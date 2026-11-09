import React from 'react';
import { motion } from 'framer-motion';
import { Award, Monitor, Users, Clock, CheckCircle2, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const pillars = [
    {
      icon: Award,
      badge: 'Govt. GR Approved',
      title: 'Government Recognized Certificate',
      subtitle: 'MKCL & MSBTE Joint Certification (शासनमान्य प्रमाणपत्र)',
      desc: 'Mandatory by official Maharashtra Government Resolution (GR) for document verification across Talathi, Police Bharti, MPSC, Zilla Parishad, Gram Sevak, and court clerk recruitments.',
      highlight: 'Valid for all Govt. Jobs',
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200'
    },
    {
      icon: Monitor,
      badge: '1 Student : 1 PC Guaranteed',
      title: '1 Student : 1 Computer Practical Lab',
      subtitle: 'ERA 2025 Server Lab (१ विद्यार्थी : १ कॉम्प्युटर)',
      desc: 'Zero screen sharing. Every enrolled student gets an individual workstation. Learn Windows 11, MS Office 2024, Marathi & English typing, and ERA e-Learning with 2 hours daily practical practice.',
      highlight: '100% Individual Hands-on PC',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200'
    },
    {
      icon: HeartHandshake,
      badge: 'Zero Experience Needed',
      title: 'Beginner-Friendly Mentorship',
      subtitle: 'Step-by-Step Patient Teaching (सोप्या भाषेत शिकवणी)',
      desc: 'Never touched a computer before? Our patient instructors guide you step-by-step from holding the mouse and keyboard finger typing to advanced spreadsheet formulas and modern AI productivity tools.',
      highlight: 'Learn Comfortably from Scratch',
      tagColor: 'text-purple-800 bg-purple-50 border-purple-200'
    },
    {
      icon: Clock,
      badge: 'Transparent ₹4,500 Fee',
      title: 'Flexible Batches & 2 Installments',
      subtitle: 'Morning, Afternoon & Evening Slots (२ सोपे हप्ते)',
      desc: 'Convenient batches from 07:30 AM to 07:00 PM designed for college students and working professionals. Transparent fee of ₹4,500 payable in 2 installments (₹2,500 + ₹2,000) including books and exam fees.',
      highlight: '2 Easy Installments Plan',
      tagColor: 'text-blue-800 bg-blue-50 border-blue-200'
    }
  ];

  return (
    <section id="pillars" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-ice w-full relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-ice/60 px-3.5 py-1 rounded-full border border-ice inline-block">
            Why Prerna Academy Degloor • Key Pillars
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-aubergine tracking-tight">
            Degloor’s Premier & Trusted <br className="hidden sm:inline" />
            <span className="text-gradient-marigold">MS-CIT Training Institute</span>
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/75 max-w-2xl mx-auto leading-relaxed">
            Empowering students across Degloor, Biloli, Mukhed, and Dharmabad for over 20 years with certified computing skills and personal mentorship.
          </p>
        </div>

        {/* 4 Fresh Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="modern-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-ice hover:border-marigold transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-aubergine text-marigold flex items-center justify-center shrink-0 shadow-sm border border-marigold/30 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-aubergine mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-marigold-600 mb-3 tracking-wide">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aubergine/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-ice flex items-center justify-between text-xs font-semibold text-aubergine/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-800 font-bold">{item.highlight}</span>
                  </div>
                  <span className="text-[11px] text-aubergine/50 hidden sm:inline">Admissions Open</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA Banner */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-aubergine text-white border border-aubergine-800 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-luxury">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-marigold">
              Experience the Lab (Free Demo Class)
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Visit our academy today & take a free trial practical!
            </h4>
            <p className="text-xs text-ice/80">
              Rampur Road, Near Global English School, Degloor • Helpline: +91 99703 62555
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-gold py-3 px-7 rounded-full text-xs font-extrabold uppercase tracking-wider shrink-0 cursor-pointer shadow-marigold-glow"
          >
            Book Free Demo Class
          </button>
        </div>

      </div>
    </section>
  );
};
