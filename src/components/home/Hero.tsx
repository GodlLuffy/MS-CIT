import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Calendar, 
  Laptop, 
  Award, 
  Star, 
  ArrowRight,
  MapPin,
  ExternalLink,
  Crown
} from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden w-full">
      {/* Background Ambient Glows in Deep Aubergine & Marigold */}
      <div className="glow-orb-marigold w-72 h-72 sm:w-96 sm:h-96 -top-20 -left-20"></div>
      <div className="glow-orb-aubergine w-80 h-80 sm:w-[550px] sm:h-[550px] top-1/4 -right-20"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAAA000a_1px,transparent_1px),linear-gradient(to_bottom,#EAAA000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Academy Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Trust Badge in Deep Aubergine & Marigold */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-aubergine-900/90 border border-marigold-500/40 text-[11px] sm:text-xs font-bold text-marigold-300 shadow-glow-marigold max-w-full">
              <span className="flex items-center gap-1.5 text-marigold-400 shrink-0">
                <Crown className="w-3.5 h-3.5" />
                <span>MKCL Authorized Premium Center</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-marigold-500/60 hidden sm:inline-block"></span>
              <span className="flex items-center gap-1 text-silver-300">
                <MapPin className="w-3 h-3 text-marigold-400" />
                <span>Degloor (Dist. Nanded)</span>
              </span>
            </div>

            {/* Main Heading with Three Luxury Colors */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black tracking-tight leading-[1.2] text-white">
              <span className="text-white">Prerna Computer Academy</span> <br className="hidden sm:inline" />
              <span className="text-gradient-marigold">Degloor’s Leading</span> <br />
              <span className="text-gradient-silver">MS-CIT Training Center</span>
            </h1>

            {/* Subtitle in Ice Silver */}
            <p className="text-silver-300 text-xs sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              प्रेरणा कॉम्प्युटर अकॅडमी देगलूर — Master Windows 11, Microsoft Office (Word, Excel, PowerPoint), 
              Cyber Security, AI tools & Government e-Services with 100% individual PC lab practice. 
              Authentic MSBTE & MKCL certificate mandatory for MPSC, Talathi, Police Bharti & state jobs.
            </p>

            {/* Key Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-silver-200 bg-aubergine-900/80 border border-marigold-500/25 p-2 sm:p-2.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-marigold-400 shrink-0" />
                <span className="truncate">1 Student : 1 PC</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-silver-200 bg-aubergine-900/80 border border-marigold-500/25 p-2 sm:p-2.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-marigold-400 shrink-0" />
                <span className="truncate">ERA 2025 Lab</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-silver-200 bg-aubergine-900/80 border border-marigold-500/25 p-2 sm:p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-marigold-400 shrink-0" />
                <span className="truncate">मराठी & English Medium</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenEnrollment}
                className="btn-marigold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-glow-marigold"
              >
                <span>Enroll at Degloor Center</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSyllabus}
                className="btn-silver px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-marigold-400" />
                <span>Official Prospectus (PDF)</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-silver-400">
              <div className="flex -space-x-2 shrink-0">
                <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-marigold-500/40 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-marigold-500/40 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-marigold-500/40 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <div className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-marigold-500 text-aubergine-950 font-black text-[9px] sm:text-[10px] ring-2 ring-aubergine-950">
                  +5k
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-marigold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
                  ))}
                  <span className="ml-1.5 font-black text-white text-xs">4.9 / 5.0</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-silver-400">
                  Trusted by 5,000+ students across Degloor, Biloli & Nanded
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Portal Card in Deep Aubergine & Marigold */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            
            <div className="relative p-0.5 sm:p-1 rounded-3xl bg-gradient-to-b from-marigold-500/60 via-aubergine-600 to-aubergine-900 shadow-luxury">
              <div className="glass-card rounded-[22px] p-4 sm:p-6 space-y-4 sm:space-y-5 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-marigold-500/20 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-marigold-500/20 border border-marigold-500/40 flex items-center justify-center text-marigold-400 shrink-0">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white">Prerna Academy Portal</h3>
                      <p className="text-[10px] sm:text-[11px] text-marigold-300 font-semibold">Degloor Center • Batch 2025</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-marigold-500/20 text-marigold-300 border border-marigold-500/40 whitespace-nowrap">
                    MKCL ALC
                  </span>
                </div>

                {/* Simulated Student Portal */}
                <div className="bg-aubergine-950/90 rounded-xl p-3.5 sm:p-4 border border-aubergine-800 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="text-silver-300 flex items-center gap-1.5 font-medium">
                      <Laptop className="w-3.5 h-3.5 text-marigold-400" />
                      ERA 2025 Assessment Lab
                    </span>
                    <span className="text-marigold-300 font-bold bg-marigold-500/15 border border-marigold-500/30 px-2 py-0.5 rounded text-[10px]">
                      Live ERA Sync
                    </span>
                  </div>

                  {/* Marigold Progress Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] sm:text-xs font-bold">
                      <span className="text-silver-200">Evaluation Mastery</span>
                      <span className="text-marigold-400">99.4% Distinction</span>
                    </div>
                    <div className="w-full bg-aubergine-900 h-2 rounded-full overflow-hidden border border-aubergine-800">
                      <div className="bg-gradient-to-r from-marigold-500 via-amber-400 to-yellow-200 h-full rounded-full w-[99%] shadow-glow-marigold"></div>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {['Excel MIS', 'Word Marathi Typing', 'Cyber Security', 'Aaple Sarkar', 'DigiLocker'].map((skill) => (
                      <span key={skill} className="text-[10px] font-semibold bg-aubergine-900 text-marigold-300 border border-marigold-500/25 px-2 py-0.5 rounded-md">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location & Upcoming Batch Details */}
                <div className="bg-gradient-to-r from-aubergine-900 to-aubergine-950 p-3 sm:p-3.5 rounded-xl border border-marigold-500/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-marigold-400 font-bold">Degloor Campus</p>
                      <p className="text-[11px] sm:text-xs font-semibold text-silver-100">Near Global English School, Rampur Rd</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-marigold-500/20 text-marigold-300 hover:text-white shrink-0 border border-marigold-500/30"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Fast Action CTA */}
                <div>
                  <button
                    onClick={onOpenEnrollment}
                    className="w-full py-3 rounded-xl btn-marigold uppercase tracking-wider transition-all shadow-glow-marigold active:scale-95 flex items-center justify-center gap-2 text-xs font-black"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reserve Demo Seat at Prerna Academy</span>
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-silver-400 mt-1.5 font-medium">
                    Limited 20 seats per batch • Free 1-Day Trial Session
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
