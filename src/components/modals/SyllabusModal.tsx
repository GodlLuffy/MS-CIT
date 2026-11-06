import React from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { 
  X, 
  Download, 
  Printer, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Wrench, 
  Award,
  Sparkles
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-brand-500/40 shadow-2xl relative max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                Official MKCL Syllabus Book
              </span>
              <span className="text-xs text-slate-400">Total 140 Hours Practical Training</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {selectedModule ? selectedModule.title : 'Complete MS-CIT 8-Module Syllabus'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white transition-colors"
              title="Print Syllabus"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto space-y-6 pr-2 flex-grow">
          {selectedModule ? (
            /* Single Module Deep Dive */
            <div className="space-y-6">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-400 font-bold">{selectedModule.code}</span>
                  <span className="text-emerald-400 font-semibold">{selectedModule.durationHours} Practical Hours</span>
                </div>
                <p className="text-sm text-slate-200">{selectedModule.summary}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Detailed Topics & Theory Concepts:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModule.detailedTopics.map((topic, i) => (
                    <div key={i} className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-brand-300 uppercase tracking-wider mb-2">
                  Hands-On Capstone Projects:
                </h4>
                {selectedModule.handsOnProjects.map((p, i) => (
                  <div key={i} className="text-xs text-slate-300 bg-brand-950/30 p-3 rounded-xl border border-brand-800/40 mb-2">
                    🎯 <strong>Project {i + 1}:</strong> {p}
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Software Applications Covered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModule.toolsCovered.map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-slate-900 text-slate-200 px-3 py-1 rounded-lg border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* All 8 Modules List */
            <div className="space-y-4">
              {coursesData.map((mod) => (
                <div key={mod.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-400">{mod.code}: {mod.title}</span>
                    <span className="text-[11px] text-slate-400">{mod.durationHours} Hours</span>
                  </div>
                  <p className="text-xs text-slate-300">{mod.summary}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mod.toolsCovered.map((t) => (
                      <span key={t} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-800 pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Includes MKCL Continuous Internal Assessment & Online Exam Preparation.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenEnrollment();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue"
            >
              Enroll in This Course
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
