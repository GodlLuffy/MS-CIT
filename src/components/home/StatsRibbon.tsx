import React from 'react';
import { Users, Award, Clock, Laptop, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

export const StatsRibbon: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '5,000+',
      label: 'Certified Students',
      description: 'From Degloor, Biloli, Mukhed & Nanded',
    },
    {
      icon: Award,
      value: '99.4%',
      label: 'Exam Pass Rate',
      description: 'First attempt distinction record',
    },
    {
      icon: Clock,
      value: '15+ Years',
      label: 'Legacy in Degloor',
      description: 'Most trusted IT training center in city',
    },
    {
      icon: Laptop,
      value: '1 : 1',
      label: 'Computer Ratio',
      description: 'Dedicated PC for every single student',
    },
  ];

  return (
    <section className="relative z-20 py-6 sm:py-8 bg-aubergine-950/90 border-y border-marigold-500/25 backdrop-blur-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-xl bg-aubergine-900/60 border border-marigold-500/20 hover:border-marigold-500/40 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-marigold-500/15 border border-marigold-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-marigold-400" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                    {item.value}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-marigold-400">{item.label}</p>
                  <p className="text-[10px] sm:text-xs text-silver-400 mt-0.5 hidden sm:block">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Govt GR Notification Stripe */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-marigold-500/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-silver-300 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-marigold-400 shrink-0" />
            <span className="font-semibold text-white">
              Maharashtra Government Resolution (GR):
            </span>
            <span>MS-CIT from Prerna Academy is 100% valid for Talathi, MPSC, and state recruitment document verification.</span>
          </div>
          <div className="flex items-center gap-3 text-silver-300 font-semibold shrink-0">
            <span className="flex items-center gap-1 text-marigold-400">
              <CheckCircle className="w-3.5 h-3.5" /> MSBTE Joint Seal
            </span>
            <span className="flex items-center gap-1 text-silver-100">
              <MapPin className="w-3.5 h-3.5 text-marigold-400" /> Degloor (Nanded)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
