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
      subtitle: 'शासनमान्य प्रमाणपत्र (MKCL & MSBTE Joint Certification)',
      desc: 'As per Maharashtra Government Resolution (GR), the official MS-CIT certificate is mandatory for document verification in Talathi, Police Bharti, MPSC, Zilla Parishad, and Gram Sevak recruitments.',
      highlight: 'Valid for all Govt. Jobs'
    },
    {
      icon: Monitor,
      title: '1 Student : 1 Computer Practical Lab',
      subtitle: '१ विद्यार्थी : १ कॉम्प्युटर (ERA 2025 High-Tech Server Lab)',
      desc: 'Every student gets their own individual workstation. Master Windows 11, MS Office, typing, and the internet with 2 hours of daily supervised lab practicals.',
      highlight: '100% Practical Practice'
    },
    {
      icon: Users,
      title: 'Step-by-Step Friendly Mentorship',
      subtitle: 'सोप्या भाषेत शिकवणी (Beginner-Friendly Teaching)',
      desc: 'Never used a computer before? Our patient instructors teach in clear, comfortable Marathi & English from basic mouse and keyboard usage to advanced office skills.',
      highlight: 'Zero Prior Knowledge Needed'
    },
    {
      icon: Clock,
      title: 'Flexible Batches & ₹4,500 Fee Plan',
      subtitle: 'सोयीस्कर बॅचेस व सुलभ २ हप्ते (Morning, Day & Evening Slots)',
      desc: 'Convenient batches from 07:30 AM to 07:00 PM designed for college students and working professionals. Transparent fee of ₹4,500 payable in 2 easy installments (₹2,500 + ₹2,000).',
      highlight: '2 Easy Installments'
    }
  ];

  return (
    <section id="pillars" className="py-14 sm:py-20 bg-white border-y border-aubergine-700/10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-marigold-500/15 px-3 py-1 rounded-full border border-marigold-500/30">
            Why Prerna Academy Degloor
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-aubergine-900 tracking-tight">
            Degloor’s Premier MS-CIT Training Center
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700">
            Empowering thousands of students in Degloor and Nanded district for over 15 years.
          </p>
        </div>

        {/* 4 Clean Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-aubergine-700 text-marigold-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-silver-100 text-aubergine-800 border border-aubergine-700/15">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-aubergine-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-marigold-600 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aubergine-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-aubergine-700/10 flex items-center gap-1.5 text-xs font-bold text-aubergine-900">
                  <CheckCircle2 className="w-4 h-4 text-marigold-500" />
                  <span>Official MKCL Center Enrollment Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Bottom CTA Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-aubergine-900 text-silver-100 flex flex-col sm:flex-row items-center justify-between gap-4 border border-aubergine-800 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Reserve your seat for the upcoming 2025 batch!
            </h4>
            <p className="text-xs text-silver-300">
              Limited seats per batch • Free 1-day demo trial class available (मोफत डेमो क्लास)
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-marigold px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
          >
            Book Free Demo Seat
          </button>
        </div>

      </div>
    </section>
  );
};