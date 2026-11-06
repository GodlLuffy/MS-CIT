import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Play, 
  Download, 
  Calendar, 
  Laptop, 
  Award, 
  Users, 
  Star, 
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onOpenSyllabus }) => {
  return (
    <section className="relative pt-6 pb-20 lg:pt-14 lg:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="glow-orb w-[500px] h-[500px] bg-brand-500/20 -top-32 -left-32"></div>
      <div className="glow-orb w-[600px] h-[600px] bg-emerald-500/15 top-1/3 -right-32"></div>
      <div className="glow-orb w-[400px] h-[400px] bg-indigo-500/15 bottom-0 left-1/3"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High Conversion Messaging */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-semibold text-brand-300 shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Authorized MKCL Training Center</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
              <span className="text-slate-300">Govt. Recognized Certification</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Master Essential <br className="hidden sm:inline" />
              <span className="text-gradient-blue">Computer Skills</span> & <br />
              Get <span className="text-gradient-emerald">MS-CIT Certified</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Empower your future with practical 1-on-1 lab training in Windows 11, MS Office 
              (Word, Excel, PowerPoint), Cyber Safety, AI Productivity, and Government e-Services. 
              Mandatory for Maharashtra State Government jobs & career growth.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-900/50 border border-slate-800 p-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 Student : 1 PC Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-900/50 border border-slate-800 p-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MKCL ERA 2025 Lab</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-900/50 border border-slate-800 p-2 rounded-lg col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>English & Marathi Batch</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenEnrollment}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-emerald-500 text-white font-bold text-sm sm:text-base shadow-glow-blue hover:shadow-glow-emerald hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Enroll in Next Batch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSyllabus}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-400" />
                <span>Download Syllabus (PDF)</span>
              </button>
            </div>

            {/* Social Proof & Rating snippet */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" alt="Student" />
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-600 text-white font-bold text-[10px] ring-2 ring-slate-900">
                  +15k
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="ml-1.5 font-bold text-white text-xs">4.9 / 5.0</span>
                </div>
                <span className="text-[11px] text-slate-400">Over 15,000+ Certified Alumni</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Interactive Portal Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer card frame with gradient border */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-brand-500/40 via-indigo-500/20 to-emerald-500/40 shadow-2xl">
              <div className="glass-card rounded-[22px] p-6 space-y-6 relative overflow-hidden">
                
                {/* Header of Interactive Card */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">MKCL MS-CIT Portal</h3>
                      <p className="text-[11px] text-emerald-400 font-medium">Batch 2025 Admissions Open</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    ALC #411038
                  </span>
                </div>

                {/* Simulated Student Success / Certificate Mock */}
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 text-brand-400" />
                      Practical Exam Simulator
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      Live ERA Sync
                    </span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">MS Office & Digital Literacy</span>
                      <span className="text-brand-400">98% Mastery</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-500 to-emerald-400 h-full rounded-full w-[98%] transition-all duration-1000"></div>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Excel Formulas', 'Word Mail Merge', 'PowerPoint Morph', 'Cyber Hygiene', 'DigiLocker', 'AI Tools'].map((skill) => (
                      <span key={skill} className="text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Next Batch Schedule Box */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Upcoming Batch Date</p>
                      <p className="text-xs font-bold text-white">Starting Coming Monday</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                      Fast Filling
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Limited 20 seats/batch</p>
                  </div>
                </div>

                {/* Instant Action CTA Card */}
                <div className="pt-1">
                  <button
                    onClick={onOpenEnrollment}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-brand-500 hover:from-emerald-400 hover:to-brand-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow-emerald flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Reserve Your Free Seat Now</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                    No upfront registration charges • 100% Free Demo Session
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Floating Stat Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-card p-3.5 rounded-2xl border border-slate-700 shadow-xl items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Pass Rate</p>
                <p className="text-sm font-extrabold text-white">99.4% First Attempt</p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 glass-card p-3 rounded-2xl border border-slate-700 shadow-xl items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-semibold text-slate-200">
                100% Practical Exam Prep
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
