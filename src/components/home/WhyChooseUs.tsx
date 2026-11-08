import React from 'react';
import { motion } from 'framer-motion';
import { Award, Monitor, Users, Clock, CheckCircle2, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const pillars = [
    {
      icon: Award,
      title: 'Government Recognized Certificate',
      subtitle: 'MKCL & MSBTE Joint Certification (शासनमान्य प्रमाणपत्र)',
      desc: 'As per Maharashtra Government Resolution (GR), MS-CIT certification is mandatory for document verification across Talathi, Police Bharti, MPSC, Zilla Parishad, and Gram Sevak government recruitments.',
      highlight: 'Valid for all Govt. Jobs'
    },
    {
      icon: Monitor,
      title: '1 Student : 1 Computer Practical Lab',
      subtitle: 'ERA 2025 High-Tech Server Lab (१ विद्यार्थी : १ कॉम्प्युटर)',
      desc: 'Every enrolled student is allocated an individual PC workstation. Master Windows 11, MS Office 2024, typing, and online services with 2 hours of daily supervised practical practice.',
      highlight: '100% Practical Practice'
    },
    {
      icon: Users,
      title: 'Step-by-Step Friendly Mentorship',
      subtitle: 'Beginner-Friendly Teaching (सोप्या भाषेत शिकवणी)',
      desc: 'Never touched a computer before? Our patient instructors teach in clear, comfortable Marathi & English from basic mouse and keyboard usage to advanced office skills.',
      highlight: 'Zero Prior Knowledge Needed'
    },
    {
      icon: Clock,
      title: 'Flexible Batches & ₹4,500 Fee Plan',
      subtitle: 'Morning, Day & Evening Slots (२ सोपे हप्ते)',
      desc: 'Convenient batches from 07:30 AM to 07:00 PM designed for college students and working professionals. Transparent fee of ₹4,500 payable in 2 easy installments (₹2,500 + ₹2,000).',
      highlight: '2 Easy Installments'
    }
  ];

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-white border-y border-ice w-full relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-ice/50 px-3.5 py-1 rounded-full border border-ice inline-block">
            Why Prerna Academy Degloor
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-aubergine tracking-tight">
            Degloor’s Premier MS-CIT Center
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/70">
            Empowering students in Degloor and Nanded district for over 15 years with government-recognized IT skills.
          </p>
        </div>

        {/* 4 Fresh Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="modern-card p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-aubergine text-marigold flex items-center justify-center shrink-0 shadow-sm border border-marigold/30">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-ice text-aubergine border border-ice-300 uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-aubergine mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-marigold-600 mb-3 uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aubergine/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ice flex items-center gap-2 text-xs font-semibold text-aubergine/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Authorized MKCL Center Enrollment Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card in Deep Aubergine */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-aubergine border border-aubergine-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Reserve your individual PC for the upcoming batch!
            </h4>
            <p className="text-xs sm:text-sm text-ice">
              Limited seats per batch to maintain 1:1 computer ratio. Free 1-day demo session included.
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-gold px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 cursor-pointer shadow-marigold-glow"
          >
            <Sparkles className="w-4 h-4 text-aubergine-950" />
            <span>Apply for Batch</span>
          </button>
        </div>

      </div>
    </section>
  );
};
