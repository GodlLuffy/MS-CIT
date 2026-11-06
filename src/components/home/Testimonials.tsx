import React from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { Star, Quote, Award, CheckCircle2, ThumbsUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-950 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Student Success Stories from Degloor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Students Across <span className="text-gradient-gold">Degloor & Nanded</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Hear from our alumni who cleared Talathi, Police Bharti, MPSC exams, and college assessments 
            after training at Prerna Computer Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-5 sm:p-7 border border-slate-800 hover:border-slate-700 flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <div>
                {/* Header with stars and grade score */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] sm:text-xs font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.score}% ({item.grade})</span>
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-slate-300 italic mb-5 leading-relaxed">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-brand-500/40 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-brand-300 font-medium">{item.role}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">{item.location} • {item.year}</p>
                  </div>
                </div>

                <div className="text-slate-600 opacity-60">
                  <Quote className="w-6 h-6" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
