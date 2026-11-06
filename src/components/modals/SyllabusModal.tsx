import React from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { 
  X, 
  Printer, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  BookOpen
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
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card w-full max-w-3xl rounded-3xl p-4 sm:p-7 border border-brand-500/40 shadow-2xl relative max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-3 sm:pb-4 mb-3 sm:mb-4 shrink-0">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                MKCL Syllabus Book • Prerna Academy Degloor
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">140 Hours Practical</span>
            </div>
            <h3 className="text-base sm:text-2xl font-black text-white">
              {selectedModule ? selectedModule.title : 'Complete MS-CIT 8-Module Syllabus'}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white transition-colors"
              title="Print Syllabus"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto space-y-4 sm:space-y-5 pr-1 sm:pr-2 flex-grow">
          {selectedModule ? (
            /* Single Module Deep Dive */
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-400 font-bold">{selectedModule.code}</span>
                  <span className="text-emerald-400 font-semibold">{selectedModule.durationHours} Practical Hours</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">{selectedModule.summary}</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Detailed Topics & Practical Skills:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedModule.detailedTopics.map((topic, i) => (
                    <div key={i} className="text-xs text-slate-300 bg-slate-900/60 p-2 sm:p-2.5 rounded-xl border border-slate-800 flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-300 uppercase tracking-wider mb-1.5">
                  Hands-On Capstone Projects:
                </h4>
                {selectedModule.handsOnProjects.map((p, i) => (
                  <div key={i} className="text-xs text-slate-300 bg-brand-950/30 p-2.5 rounded-xl border border-brand-800/40 mb-1.5">
                    🎯 <strong>Project {i + 1}:</strong> {p}
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Software Applications Mastered:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedModule.toolsCovered.map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-slate-900 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* All 8 Modules List */
            <div className="space-y-3">
              {coursesData.map((mod) => (
                <div key={mod.id} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-400">{mod.code}: {mod.title}</span>
                    <span className="text-[10px] text-slate-400">{mod.durationHours} Hours</span>
                  </div>
                  <p className="text-xs text-slate-300">{mod.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-800 pt-3 mt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <p className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
            Prerna Computer Academy • Near Global English School, Rampur Road, Degloor
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenEnrollment();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue active:scale-95"
          >
            Enroll in This Course
          </button>
        </div>

      </div>
    </div>
  );
};
