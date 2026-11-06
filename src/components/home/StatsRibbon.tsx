import React from 'react';
import { Users, Award, Clock, Laptop, CheckCircle, ShieldCheck } from 'lucide-react';

export const StatsRibbon: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '15,000+',
      label: 'Certified Alumni',
      description: 'Successfully placed in govt & private jobs',
      color: 'text-brand-400',
      bgColor: 'bg-brand-500/10'
    },
    {
      icon: Award,
      value: '99.4%',
      label: 'Exam Pass Rate',
      description: 'First attempt distinction record',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Clock,
      value: '18+ Years',
      label: 'Excellence in IT',
      description: 'Trusted computer training center',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: Laptop,
      value: '1 : 1',
      label: 'Computer Ratio',
      description: 'Individual PC dedicated per student',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10'
    },
  ];

  return (
    <section className="relative z-20 py-8 bg-slate-900/60 border-y border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </h4>
                  <p className="text-sm font-semibold text-slate-200">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Govt GR Notification Stripe */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium text-slate-300">
              Government of Maharashtra Resolution (GR):
            </span>
            <span>MS-CIT certified candidates are eligible for direct state government clerical & administrative postings.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" /> MSBTE Recognized
            </span>
            <span className="flex items-center gap-1.5 text-brand-400">
              <CheckCircle className="w-3.5 h-3.5" /> MKCL ALC Authorized
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
