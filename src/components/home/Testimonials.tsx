import React from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { Star, Quote, Award, CheckCircle2, ThumbsUp, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-24 bg-aubergine text-white relative w-full overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-marigold/10 blur-[130px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-aubergine-700/30 blur-[100px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold/15 border border-marigold/30 text-xs font-bold text-marigold">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Student Success Stories • प्रेरणा अकॅडमी यशोगाथा</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Proven Results. Real Stories. <span className="text-gradient-marigold">From Our Degloor Alumni</span>
          </h2>
          
          <p className="text-ice/80 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Read how students from Degloor, Biloli, and surrounding areas mastered practical computing, earned Distinction scores (90%+), and qualified for Talathi, Police Bharti, and MPSC appointments.
          </p>

          {/* Social Proof Metric Badge */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs font-semibold text-ice">
            <div className="flex items-center text-marigold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>4.9 / 5.0 Rating • 5,000+ Certified Alumni from Degloor</span>
          </div>
        </div>

        {/* Testimonials Grid (2x2 on Desktop, 1 Col on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 sm:p-8 bg-[#2A0B25] border border-white/10 hover:border-marigold/50 flex flex-col justify-between relative group hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Header with stars and grade score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-marigold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-xs font-black px-3 py-1 rounded-full bg-marigold/20 text-marigold border border-marigold/40 flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-marigold" />
                    <span>{item.score}% ({item.grade})</span>
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-ice/90 leading-relaxed mb-6 font-normal">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-marigold/50 shrink-0 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {item.verified && (
                        <span title="Verified MKCL Student">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-marigold font-semibold">{item.role}</p>
                    <p className="text-[11px] text-ice/60">{item.location} • {item.year}</p>
                  </div>
                </div>

                <div className="text-white/20 group-hover:text-marigold/40 transition-colors">
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
