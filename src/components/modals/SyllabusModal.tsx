import React, { useState } from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  Clock, 
  Award, 
  ShieldCheck, 
  Sparkles,
  FileText,
  Building2,
  Calendar,
  Check,
  MapPin,
  Phone
} from 'lucide-react';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModule: CourseModule | null;
  onOpenEnrollment: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  selectedModule,
  onOpenEnrollment,
}) => {
  const [activeView, setActiveView] = useState<'prospectus' | 'modules'>('prospectus');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-4xl rounded-3xl border border-gold-500/40 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-gold-500/25 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                <span>Official MS-CIT Syllabus & Prospectus</span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                  Prerna Academy Degloor
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="hidden sm:inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveView('prospectus')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  activeView === 'prospectus'
                    ? 'bg-gold-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Official Prospectus
              </button>
              <button
                onClick={() => setActiveView('modules')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  activeView === 'modules'
                    ? 'bg-gold-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Module Explorer
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-slate-950 border border-gold-500/40 text-xs font-bold transition-all"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-4 sm:p-7 flex-grow space-y-6">
          
          {activeView === 'prospectus' ? (
            /* Luxury Printable Prospectus Document View */
            <div className="bg-slate-900/90 rounded-2xl border border-gold-500/30 p-5 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Document Header with Gold Foil Badge */}
              <div className="border-b-2 border-gold-500/40 pb-5 text-center relative">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="text-left">
                    <span className="text-[10px] sm:text-xs font-bold text-gold-400 uppercase tracking-widest block">
                      MKCL ALC CENTER
                    </span>
                    <span className="text-xs sm:text-sm font-black text-white">
                      MSBTE Joint Accreditation
                    </span>
                  </div>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-gold-600 via-amber-400 to-yellow-200 p-0.5 shadow-glow-gold shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400" />
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                      DEGLOOR (NANDED)
                    </span>
                    <span className="text-xs sm:text-sm font-black text-white">
                      Pin: 431717
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  PRERNA COMPUTER ACADEMY
                </h2>
                <p className="text-xs sm:text-sm text-gold-300 font-semibold mt-1">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर — Authorized IT Education & Certification Center
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                  Near Global English School, Rampur Road / Nathnagar, Degloor, Dist. Nanded, Maharashtra
                </p>

                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-[11px] font-bold text-gold-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>OFFICIAL MS-CIT COURSE PROSPECTUS & SYLLABUS ROADMAP</span>
                </div>
              </div>

              {/* Course Overview Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Total Duration</span>
                  <strong className="text-sm sm:text-base font-extrabold text-white">140 Hours</strong>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Computer Lab</span>
                  <strong className="text-sm sm:text-base font-extrabold text-gold-400">1:1 Ratio</strong>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Medium</span>
                  <strong className="text-sm sm:text-base font-extrabold text-emerald-400">मराठी / English</strong>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Pass Rate</span>
                  <strong className="text-sm sm:text-base font-extrabold text-blue-400">99.4% First Pass</strong>
                </div>
              </div>

              {/* Curriculum Breakdown Table */}
              <div>
                <h4 className="text-sm font-bold text-gold-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Curriculum Modules & Practical Lab Breakdown</span>
                </h4>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/90 text-gold-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="px-3.5 py-2.5">Code</th>
                        <th className="px-3.5 py-2.5">Module Title</th>
                        <th className="px-3.5 py-2.5">Software & Tools</th>
                        <th className="px-3.5 py-2.5 text-right">Hours</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {coursesData.map((course) => (
                        <tr key={course.id} className="hover:bg-slate-900/50 transition-colors">
                          <td className="px-3.5 py-2.5 font-bold text-gold-300 whitespace-nowrap">{course.code}</td>
                          <td className="px-3.5 py-2.5">
                            <span className="font-semibold text-white block">{course.title}</span>
                            <span className="text-[11px] text-slate-400 line-clamp-1">{course.summary}</span>
                          </td>
                          <td className="px-3.5 py-2.5 text-slate-400 whitespace-nowrap">
                            {course.toolsCovered.slice(0, 3).join(', ')}
                          </td>
                          <td className="px-3.5 py-2.5 text-right font-bold text-emerald-400 whitespace-nowrap">
                            {course.durationHours} Hrs
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examination & Mark Scheme Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 flex items-center justify-between">
                    <span>MKCL ERA Examination Scheme</span>
                    <span className="text-gold-400 font-mono">100 Marks</span>
                  </h5>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span>Internal Continuous Evaluation (ERA):</span>
                      <strong className="text-emerald-400">50 Marks (Min 20 to Pass)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span>Final Online Practical Exam:</span>
                      <strong className="text-emerald-400">50 Marks (Min 20 to Pass)</strong>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="font-bold text-white">Total Passing Aggregate:</span>
                      <strong className="text-gold-400 font-bold">Minimum 40%</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 flex items-center justify-between">
                    <span>Fee Structure & Installments</span>
                    <span className="text-gold-400 font-mono">₹4,500 Total</span>
                  </h5>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span>Installment 1 (At Admission):</span>
                      <strong className="text-white">₹2,500</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span>Installment 2 (Within 30 Days):</span>
                      <strong className="text-white">₹2,000</strong>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-slate-400">Includes Official Book & Certificate:</span>
                      <strong className="text-emerald-400">100% Free</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authorization Seal & Verification Note */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
                <div className="space-y-1">
                  <p className="font-bold text-slate-200">
                    Prerna Computer Academy • Authorized ALC Center Degloor
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center justify-center sm:justify-start gap-1">
                    <Phone className="w-3 h-3 text-gold-400" />
                    <span>Helpline: +91 94218 67123 | Rampur Road, Degloor</span>
                  </p>
                </div>

                <div className="border border-gold-500/40 bg-gold-500/5 px-4 py-2 rounded-xl text-center">
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                    Govt. Recognized Certification
                  </span>
                  <span className="text-xs font-black text-white">
                    MSBTE & MKCL Joint Award
                  </span>
                </div>
              </div>

            </div>
          ) : (
            /* Interactive Module Deep Dive View */
            <div className="space-y-4">
              {coursesData.map((course) => (
                <div key={course.id} className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                        {course.code}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white">{course.title}</h4>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold">{course.durationHours} Hours</span>
                  </div>

                  <p className="text-xs text-slate-300">{course.summary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {course.detailedTopics.map((t, idx) => (
                      <div key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1">
                    {course.toolsCovered.map((tool) => (
                      <span key={tool} className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
            Need physical printed copy? Visit Prerna Academy on Rampur Road, Degloor.
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gold-400 border border-gold-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Prospectus</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenEnrollment();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl btn-luxury-gold text-xs font-black uppercase tracking-wider transition-all"
            >
              Enroll at Degloor Center
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
