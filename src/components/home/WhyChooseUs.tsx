import React from 'react';
import { 
  Laptop, 
  Server, 
  GraduationCap, 
  Languages, 
  FileCheck2, 
  Briefcase, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const features = [
    {
      icon: Laptop,
      title: 'Dedicated 1:1 Computer Ratio',
      description: 'Every student gets their own modern workstation with dual-head display, high-speed SSD, and ergonomic seating throughout every practical session.',
      highlight: 'Zero sharing, 100% individual lab time',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-brand-400'
    },
    {
      icon: Server,
      title: 'Authorized MKCL ERA 2025 Lab',
      description: 'Equipped with the official MKCL ERA e-Learning local network server ensuring zero lag, instant interactive video modules, and automated scoring.',
      highlight: 'Official continuous internal assessment',
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Languages,
      title: 'Bilingual Instruction (Marathi & English)',
      description: 'Learn concepts comfortably in Marathi or English. Our trainers simplify complex computer jargon into easily digestible everyday language.',
      highlight: 'Student-friendly native language support',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: FileCheck2,
      title: 'Unlimited Mock Exam Simulations',
      description: 'Practice real exam patterns with over 500+ past question bank problems, speed tests, and mock software simulations to guarantee distinction grades.',
      highlight: '99.4% first-attempt success rate',
      color: 'from-indigo-500/20 to-purple-500/20',
      iconColor: 'text-indigo-400'
    },
    {
      icon: Briefcase,
      title: 'Govt. Job & Career Verification',
      description: 'MS-CIT is mandatory for Maharashtra Govt recruitment. We help candidates with certificate verification for MPSC, Talathi, Police Bharti & Zilla Parishad.',
      highlight: 'MSBTE Recognized Lifetime Certificate',
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400'
    },
    {
      icon: Clock,
      title: 'Flexible Morning & Evening Batches',
      description: 'Convenient time slots starting from 7:30 AM to 8:30 PM, plus specialized 1-Month Express and Weekend batches for working professionals.',
      highlight: 'Free backup sessions for missed classes',
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why 15,000+ Students Trust Apex Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Setting the Benchmark for <span className="text-gradient-emerald">Computer Literacy</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We don't just teach theory; we prepare you for real-world office productivity, 
            government competitive examinations, and digital self-reliance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {feat.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-glow-blue hover:scale-105 transition-all"
          >
            <span>Experience Our Lab - Book a Free Trial Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
