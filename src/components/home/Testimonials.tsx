import React from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { Star, Quote, Award, CheckCircle2, ThumbsUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Alumni Hall of Fame</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Stories, <span className="text-gradient-gold">Tangible Career Impact</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read how our practical computer mentorship empowered students to clear government recruitments, 
            ace job interviews, and master modern workplace technology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <div>
                {/* Header with stars and grade score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Scored {item.score}% ({item.grade})</span>
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-slate-300 italic mb-6 leading-relaxed">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </h4>
                    <p className="text-xs text-brand-300 font-medium">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.location} • {item.year}</p>
                  </div>
                </div>

                <div className="text-slate-600 opacity-60">
                  <Quote className="w-7 h-7" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
