import React, { useState } from 'react';
import { labFacilities } from '../../data/testimonialsData';
import { Laptop, CheckCircle2, Zap, MapPin } from 'lucide-react';

export const LabGallery: React.FC = () => {
  const [selectedLabIndex, setSelectedLabIndex] = useState(0);

  const labImages = [
    {
      title: 'Degloor Center 1:1 Computer Lab',
      caption: 'High-performance desktop PCs with modern Core processors, SSD storage, and ergonomic chairs.',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900',
      tag: '1:1 Student Workstations'
    },
    {
      title: 'MKCL ERA 2025 Smart Training Hall',
      caption: 'Digital interactive demonstration screen with audio-visual guidance in Marathi & English.',
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900',
      tag: 'Interactive Smart Class'
    },
    {
      title: 'Exam Simulation & Speed Typing Zone',
      caption: 'Dedicated exam hall setup designed to mirror actual MKCL final exam conditions.',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900',
      tag: 'Mock Exam Simulator'
    },
    {
      title: 'Faculty Mentorship & Doubt Clearing Space',
      caption: 'Experienced trainers available throughout the day for individual doubt resolution.',
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=900',
      tag: 'Personal Mentorship'
    }
  ];

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-slate-950 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Laptop className="w-3.5 h-3.5" />
            <span>Campus Infrastructure in Degloor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            State-of-the-Art <span className="text-gradient-blue">Computer Lab</span> in Degloor
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Take a look inside Prerna Computer Academy's spacious, air-cooled computing facility 
            located on Rampur Road, Degloor.
          </p>
        </div>

        {/* Gallery Grid & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center mb-10 sm:mb-14">
          
          {/* Main Selected Image Viewer */}
          <div className="lg:col-span-8 w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group aspect-[16/10] bg-slate-900">
              <img
                src={labImages[selectedLabIndex].url}
                alt={labImages[selectedLabIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-7">
                <span className="inline-block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider bg-brand-500 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md w-fit mb-1.5">
                  {labImages[selectedLabIndex].tag}
                </span>
                <h3 className="text-base sm:text-2xl font-bold text-white mb-1">
                  {labImages[selectedLabIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-2 sm:line-clamp-none">
                  {labImages[selectedLabIndex].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Picker */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2.5 sm:gap-3 w-full">
            {labImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLabIndex(idx)}
                className={`flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl text-left border transition-all duration-200 ${
                  selectedLabIndex === idx
                    ? 'bg-slate-900 border-brand-500/80 shadow-glow-blue/20 scale-[1.01]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl object-cover shrink-0 border border-slate-800"
                />
                <div className="overflow-hidden hidden sm:block">
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-wider block">
                    {img.tag}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate">
                    {img.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Feature Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {labFacilities.map((lab) => (
            <div key={lab.id} className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                  {lab.category}
                </span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">{lab.title}</h4>
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
