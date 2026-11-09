import React from 'react';
import { Check, Sparkles, ShieldCheck, Clock, Award, BookOpen, Monitor } from 'lucide-react';
import { TelephoneIcon, WhatsAppIcon } from '../common/Icons';

interface PricingPackagesProps {
  onOpenEnrollment: () => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Investment Packages • अभ्यासक्रम व फी रचना</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Transparent <span className="text-gradient-gold italic">Admission Plans</span>
          </h2>
          
          <p className="text-[#64748B] text-xs sm:text-base leading-relaxed">
            Choose the perfect batch schedule for your learning goals. 100% all-inclusive pricing with zero hidden charges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Regular Classroom Plan (2 Months - Recommended) */}
          <div className="rounded-[28px] p-6 sm:p-8 bg-[#FDFBF7] border-2 border-[#D4AF37] relative flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all">
            
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-[#0F172A] font-black text-[10px] uppercase tracking-wider shadow-md">
              Most Popular • विद्यार्थी पसंती
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Comprehensive Program
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  2 Months
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-1">
                MS-CIT Regular Classroom
              </h3>
              <p className="text-xs text-[#64748B] mb-5">
                Ideal for beginners, school & college students, and government recruitment aspirants.
              </p>

              {/* Price Lockup */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#0F172A]">₹4,500</span>
                  <span className="text-xs text-[#64748B]">all-inclusive</span>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-[#D4AF37] border-t border-slate-100 pt-2 flex items-center justify-between">
                  <span>२ सोपे हप्ते:</span>
                  <span>₹2,500 + ₹2,000 (३० दिवसांत)</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-[#0F172A]/85 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1 Student : 1 PC</strong> dedicated daily workstation (2 hrs/day)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Original <strong>MKCL Full-Color Textbook</strong> included free</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>MKCL ERA 2025</strong> cloud e-learning personal login ID</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Office 2024, Word, Excel, PPT & <strong>ISM Marathi Typing</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Final MSBTE Board Exam Fee</strong> & certificate delivery</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEnrollment}
              className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#0F172A]" />
              <span>Enroll For Regular Batch</span>
            </button>
          </div>

          {/* Card 2: Fast-Track Intensive Plan (1 Month) */}
          <div className="rounded-[28px] p-6 sm:p-8 bg-white border border-[#E2E8F0] relative flex flex-col justify-between shadow-lg hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Intensive Mode
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                  1 Month Fast-Track
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-1">
                Fast-Track Crash Course
              </h3>
              <p className="text-xs text-[#64748B] mb-5">
                For urgent job applicants, police bharti aspirants, and university graduates with tight deadlines.
              </p>

              {/* Price Lockup */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#0F172A]">₹4,500</span>
                  <span className="text-xs text-[#64748B]">all-inclusive</span>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-[#0F172A] border-t border-slate-200 pt-2 flex items-center justify-between">
                  <span>Intensive Schedule:</span>
                  <span>4 Hours Daily Practicals</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-[#0F172A]/85 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Double Lab Practice (4 Hours Daily)</strong> for fast completion</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Targeted ERA completion drills with continuous trainer review</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Daily mock board test simulations (50 Questions/hour)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Original MKCL textbook + official ERA login</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Priority registration for upcoming MSBTE board exam date</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEnrollment}
              className="px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm text-center"
            >
              Enroll In Fast-Track
            </button>
          </div>

          {/* Card 3: Free 1-Day Trial Demo (Zero Risk) */}
          <div className="rounded-[28px] p-6 sm:p-8 bg-[#0F172A] text-white relative flex flex-col justify-between shadow-2xl hover:shadow-2xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Try Before You Decide
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0F172A] text-[10px] font-black uppercase">
                  100% Free
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                1-Day Free Lab Trial Class
              </h3>
              <p className="text-xs text-slate-300 mb-5">
                Sit in our live Degloor lab, use a dedicated PC, and experience our faculty guidance completely free.
              </p>

              {/* Price Lockup */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#D4AF37]">₹0</span>
                  <span className="text-xs text-slate-300">no commitment</span>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-emerald-400 border-t border-white/10 pt-2 flex items-center justify-between">
                  <span>Zero Risk Guarantee:</span>
                  <span>Try First, Enroll Later</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-slate-200 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Full 2-hour practical session on dedicated Intel Core PC</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Hands-on typing drill & Windows 11 orientation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Inspection of original MKCL colored syllabus books</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>One-on-one batch timing consultation with faculty</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>No payment required on trial day</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEnrollment}
              className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#0F172A]" />
              <span>Book Free Demo Trial</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
