import React, { useState } from 'react';
import { labFacilities } from '../../data/testimonialsData';
import { Laptop, Sparkles, CheckCircle2, Eye, ShieldCheck, Zap } from 'lucide-react';

export const LabGallery: React.FC = () => {
  const [selectedLabIndex, setSelectedLabIndex] = useState(0);

  const labImages = [
    {
      title: 'Main Computing Lab & 1:1 Workstations',
      caption: '30+ high-performance PCs with Intel Core processors and 24-inch HD monitors.',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900',
      tag: 'Individual Workstations'
    },
    {
      title: 'ERA 2025 Smart Classroom & Projector Hall',
      caption: 'Live instructor demonstrations on widescreen interactive digital board with Marathi & English audio.',
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900',
      tag: 'Smart Class'
    },
    {
      title: 'Mock Examination & Speed Typing Arena',
      caption: 'Simulated examination partitions recreating actual MKCL final exam hall environments.',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900',
      tag: 'Exam Ready'
    },
    {
      title: 'Collaborative Practice & Doubt Clearing Hub',
      caption: 'Friendly mentors available at all hours for one-on-one doubt resolution and typing practice.',
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=900',
      tag: 'Faculty Assistance'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Laptop className="w-3.5 h-3.5" />
            <span>Campus Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            World-Class <span className="text-gradient-blue">Practical Lab</span> Facilities
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience an air-conditioned, state-of-the-art learning atmosphere designed for 
            focused concentration, zero system latency, and 100% hands-on learning.
          </p>
        </div>

        {/* Gallery Grid & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Main Selected Image Viewer */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group aspect-[16/10]">
              <img
                src={labImages[selectedLabIndex].url}
                alt={labImages[selectedLabIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="inline-block text-[10px] uppercase font-extrabold tracking-wider bg-brand-500 text-white px-2.5 py-1 rounded-md w-fit mb-2">
                  {labImages[selectedLabIndex].tag}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">
                  {labImages[selectedLabIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {labImages[selectedLabIndex].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Picker */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {labImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLabIndex(idx)}
                className={`flex items-center gap-3.5 p-3 rounded-2xl text-left border transition-all duration-200 ${
                  selectedLabIndex === idx
                    ? 'bg-slate-900 border-brand-500/80 shadow-glow-blue/20 scale-[1.02]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-800"
                />
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block">
                    {img.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {img.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Feature Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labFacilities.map((lab) => (
            <div key={lab.id} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                  {lab.category}
                </span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-white">{lab.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{lab.description}</p>
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                {lab.specs.map((spec, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
