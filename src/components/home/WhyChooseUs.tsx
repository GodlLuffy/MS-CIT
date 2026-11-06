import React from 'react';
import { 
  Laptop, 
  Server, 
  Languages, 
  FileCheck2, 
  Briefcase, 
  Clock, 
  Sparkles,
  ArrowRight,
  MapPin
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const features = [
    {
      icon: Laptop,
      title: 'Dedicated 1:1 PC for Every Student',
      description: 'At Prerna Computer Academy Degloor, every student gets their own individual high-speed desktop PC. Zero sharing, maximum hands-on practice.',
      highlight: '100% individual lab practice',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-brand-400'
    },
    {
      icon: Server,
      title: 'Authorized MKCL ERA 2025 Server',
      description: 'Equipped with official MKCL e-Learning servers running the latest ERA 2025 syllabus with interactive video tutorials in Marathi and English.',
      highlight: 'Real-time ERA daily scoring',
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Languages,
      title: 'मराठी व English सोप्या भाषेत मार्गदर्शन',
      description: 'Special attention for students from vernacular / Marathi medium schools and colleges. Friendly trainers explain every concept step-by-step.',
      highlight: 'स्थानिक विद्यार्थ्यांसाठी अनुकूल मार्गदर्शन',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: FileCheck2,
      title: 'Unlimited Mock Exam Simulations',
      description: 'Full exam hall simulation with past question papers, objective drills, and practical challenges so you score Grade A+ (85%+) in the final MKCL exam.',
      highlight: '99.4% first-attempt success rate',
      color: 'from-indigo-500/20 to-purple-500/20',
      iconColor: 'text-indigo-400'
    },
    {
      icon: Briefcase,
      title: 'MPSC, Talathi & Govt Job Eligibility',
      description: 'MS-CIT from Prerna Academy is officially approved by Maharashtra State Board (MSBTE) for all state government job document verifications.',
      highlight: 'Lifetime valid government certificate',
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400'
    },
    {
      icon: Clock,
      title: 'Flexible Timings for Degloor Students',
      description: 'Morning, afternoon, and evening batches designed specifically to accommodate school, college (Degloor College / Shivaji College), and working timings.',
      highlight: 'Backup sessions for missed lectures',
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400'
    }
  ];

  return (
    <section id="features" className="py-14 sm:py-20 bg-slate-900/40 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Degloor Prefers Prerna Academy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Setting the Standard for <span className="text-gradient-emerald">IT Education in Degloor</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            From complete computer beginners to job-ready professionals, 
            Prerna Computer Academy has been the trusted learning home for thousands of students across Degloor taluka.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-5 sm:p-7 border border-slate-800 hover:border-slate-700 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feat.color} border border-white/5 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feat.iconColor}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {feat.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenEnrollment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue active:scale-95 transition-all"
          >
            <span>Visit Prerna Academy Lab in Degloor - Book Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
