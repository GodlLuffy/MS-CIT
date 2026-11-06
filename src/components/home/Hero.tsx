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
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden w-full">
      {/* Background Ambient Glows - clamped to avoid overflow */}
      <div className="glow-orb w-64 h-64 sm:w-96 sm:h-96 bg-brand-500/15 -top-20 -left-20"></div>
      <div className="glow-orb w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/15 top-1/3 -right-20"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Academy Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Trust Badge with Degloor location */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-[11px] sm:text-xs font-semibold text-brand-300 shadow-inner max-w-full">
              <span className="flex items-center gap-1.5 text-emerald-400 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>MKCL Authorized ALC Center</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline-block"></span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-brand-400" />
                <span>Degloor (Dist. Nanded)</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black tracking-tight leading-[1.2] text-white">
              <span className="text-white">Prerna Computer Academy</span> <br className="hidden sm:inline" />
              <span className="text-gradient-blue">Degloor’s Premier</span> <br />
              <span className="text-gradient-emerald">MS-CIT Training Center</span>
            </h1>

            {/* Marathi / English Subtitle */}
            <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              प्रेरणा कॉम्प्युटर अकॅडमी देगलूर — Master Windows 11, MS Office (Word, Excel, PowerPoint), 
              Cyber Security, AI tools & Citizen Services with 100% individual PC practical training. 
              Govt. recognized MSBTE & MKCL certification for MPSC, Talathi, Police Bharti & competitive exams.
            </p>

            {/* Key Feature Chips - Grid safe on 320px+ phones */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-200 bg-slate-900/60 border border-slate-800 p-2 sm:p-2.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">1 Student : 1 PC</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-200 bg-slate-900/60 border border-slate-800 p-2 sm:p-2.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">ERA 2025 Lab</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-200 bg-slate-900/60 border border-slate-800 p-2 sm:p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">मराठी & English Medium</span>
              </div>
            </div>

            {/* Action Buttons - Safe for phone taps */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenEnrollment}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue hover:shadow-glow-emerald active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Enroll at Degloor Center</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSyllabus}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700/80 hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-400" />
                <span>Syllabus Booklet (PDF)</span>
              </button>
            </div>

            {/* Social Proof & Rating snippet */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2 shrink-0">
                <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <div className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-brand-600 text-white font-bold text-[9px] sm:text-[10px] ring-2 ring-slate-900">
                  +5k
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
                  ))}
                  <span className="ml-1.5 font-bold text-white text-xs">4.9 / 5.0</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400">
                  Trusted by students across Degloor, Biloli & Nanded
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Portal Card - Clamped cleanly to prevent mobile overflow */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            
            <div className="relative p-0.5 sm:p-1 rounded-3xl bg-gradient-to-b from-brand-500/40 via-indigo-500/20 to-emerald-500/40 shadow-2xl">
              <div className="glass-card rounded-[22px] p-4 sm:p-6 space-y-4 sm:space-y-5 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white">Prerna Academy Portal</h3>
                      <p className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">Degloor Center • Batch 2025</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 whitespace-nowrap">
                    MKCL ALC
                  </span>
                </div>

                {/* Simulated Student Portal */}
                <div className="bg-slate-950/80 rounded-xl p-3.5 sm:p-4 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 text-brand-400" />
                      ERA 2025 Assessment
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                      Live Sync
                    </span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] sm:text-xs font-semibold">
                      <span className="text-slate-200">Continuous Evaluation</span>
                      <span className="text-brand-400">99.4% Pass Record</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-500 to-emerald-400 h-full rounded-full w-[99%]"></div>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {['Excel MIS', 'Word Marathi Typing', 'Cyber Security', 'Aaple Sarkar', 'DigiLocker'].map((skill) => (
                      <span key={skill} className="text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location & Upcoming Batch Details */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-3 sm:p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-medium">Degloor Campus</p>
                      <p className="text-[11px] sm:text-xs font-bold text-white">Near Global English School, Rampur Rd</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-brand-600/20 text-brand-400 hover:text-white shrink-0"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Fast Action CTA */}
                <div>
                  <button
                    onClick={onOpenEnrollment}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-brand-500 hover:from-emerald-400 hover:to-brand-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow-emerald active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reserve Demo Seat at Prerna Academy</span>
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-1.5 font-medium">
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
