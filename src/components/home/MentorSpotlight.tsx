import React from 'react';
import { Award, CheckCircle2, Sparkles, GraduationCap, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TelephoneIcon, WhatsAppIcon } from '../common/Icons';

interface MentorSpotlightProps {
  onOpenEnrollment: () => void;
}

export const MentorSpotlight: React.FC<MentorSpotlightProps> = ({ onOpenEnrollment }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F9F5EC] border-y border-[#E2E8F0] relative overflow-hidden mandala-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Dedicated Faculty & Mentorship • देगलूर केंद्र</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Meet Your <span className="text-gradient-gold italic">Certified Instructors</span>
          </h2>
          
          <p className="text-[#64748B] text-xs sm:text-base leading-relaxed">
            Personal 1:1 attention, daily doubt clearing, and continuous guidance from MKCL-certified trainers with over 20 years of academic excellence in Degloor.
          </p>
        </div>

        {/* Mentor Spotlight Card */}
        <div className="rounded-[28px] bg-white border border-[#E2E8F0] p-7 sm:p-12 shadow-xl hover:shadow-2xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Mentor Photo / Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37] via-[#0F172A] to-[#D4AF37] opacity-30 blur-lg"></div>
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-[#0F172A]">
                <img
                  src="/mentor.jpg"
                  alt="Academic Director & Chief Mentor at Prerna Computer Academy Degloor"
                  className="w-full h-80 sm:h-96 object-cover object-top filter contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#0F172A]/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">Academic Director & Chief Mentor</h4>
                      <p className="text-[11px] text-[#D4AF37] font-semibold">Authorized MKCL Center Lead • Degloor</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#0F172A] text-[10px] font-black uppercase">
                      20+ Yrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-[#0F172A] text-white p-3.5 rounded-2xl border-2 border-[#D4AF37] shadow-xl flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                <div>
                  <span className="block text-xs font-black text-[#D4AF37]">100% Certified</span>
                  <span className="block text-[10px] text-slate-300">MKCL Master Trainer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Bio & Institutional Guarantees */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-block">
                Academic Leadership
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#0F172A]">
                Director & Chief Mentor
              </h3>
              <p className="text-xs sm:text-sm text-[#D4AF37] font-bold">
                प्रेरणा कॉम्प्युटर अकॅडमी देगलूर — संचालक व मुख्य मार्गदर्शक
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              At Prerna Computer Academy Degloor, we believe every student deserves patient, step-by-step guidance. Whether you are holding a mouse for the very first time, preparing for government recruitment tests, or mastering advanced Excel formulas and modern AI productivity tools, our certified instructors sit beside you until every doubt is resolved.
            </p>

            {/* 3 Core Mentorship Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-serif text-xs font-bold text-[#0F172A]">1:1 Personal Attention</h5>
                  <p className="text-[11px] text-[#64748B]">Zero rush. Learn at your own comfortable pace.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-serif text-xs font-bold text-[#0F172A]">Daily Practical Drills</h5>
                  <p className="text-[11px] text-[#64748B]">2 full hours daily hands-on practice on dedicated PC.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-serif text-xs font-bold text-[#0F172A]">Govt. Exam Mock Drills</h5>
                  <p className="text-[11px] text-[#64748B]">Talathi, Police Bharti & MPSC specific test preparation.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-serif text-xs font-bold text-[#0F172A]">Free Demo Class</h5>
                  <p className="text-[11px] text-[#64748B]">Experience our teaching firsthand before enrolling.</p>
                </div>
              </div>
            </div>

            {/* Direct Mentor Call CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEnrollment}
                className="btn-gold py-3 px-6 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#0F172A]" />
                <span>Book 1-Day Trial Class</span>
              </button>

              <a
                href="tel:+919970362555"
                className="px-5 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <TelephoneIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Helpline: 99703 62555</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
