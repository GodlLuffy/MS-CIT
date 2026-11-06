import React from 'react';
import { Award, Monitor, Users, Clock, CheckCircle2 } from 'lucide-react';

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
    <section id="pillars" className="py-14 sm:py-20 bg-dark-900/60 border-y border-white/5 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
            Why Prerna Academy Degloor
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Degloor’s Premier MS-CIT Training Center
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Empowering students in Degloor and Nanded district for over 15 years with government-recognized IT skills.
          </p>
        </div>

        {/* 4 Clean Modern Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="modern-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 text-gold-400 flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-gold-400 border border-gold-500/30">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Authorized MKCL Center Enrollment Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Bottom CTA Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-dark-850 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Reserve your individual PC for the upcoming batch!
            </h4>
            <p className="text-xs text-slate-400">
              Limited seats per batch • Free 1-day demo trial class available (मोफत १ दिवस डेमो)
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-primary px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 shadow-glow-gold"
          >
            Claim Free Demo Seat
          </button>
        </div>

      </div>
    </section>
  );
};