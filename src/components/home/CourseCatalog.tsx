import React, { useState } from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { FileText, CheckCircle2, ChevronRight, Download, Sparkles } from 'lucide-react';

interface CourseCatalogProps {
  onSelectModuleForModal: (course: CourseModule) => void;
  onOpenSyllabus: () => void;
  onOpenEnrollment: () => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  onSelectModuleForModal,
  onOpenSyllabus,
  onOpenEnrollment,
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(coursesData[0].id);
  const activeCourse = coursesData.find((c) => c.id === activeModuleId) || coursesData[0];

  return (
    <section id="curriculum" className="py-14 sm:py-20 bg-dark-950 relative w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
            Official MKCL Syllabus (अभ्यासक्रम)
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            MS-CIT Course Curriculum (140 Hours Practical)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Comprehensive practical training from computer fundamentals to modern 21st-century AI tools.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 8 Module Selector Tabs */}
          <div className="lg:col-span-5 space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
              Select Module (8 Core Subjects):
            </h3>
            
            <div className="space-y-2">
              {coursesData.map((course) => {
                const isActive = course.id === activeModuleId;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveModuleId(course.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-slate-900 to-dark-850 text-white border-gold-500/60 shadow-lg shadow-gold-500/10'
                        : 'bg-slate-900/60 text-slate-300 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-gold-500 text-dark-950 font-black' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {course.code}
                      </span>
                      <span className="text-xs sm:text-sm font-bold truncate max-w-[200px] sm:max-w-xs">
                        {course.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-gold-400 translate-x-1' : 'text-slate-500'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Prospectus PDF Button */}
            <div className="pt-2">
              <button
                onClick={onOpenSyllabus}
                className="btn-secondary w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>Download Official Syllabus Prospectus (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right: Active Module Details */}
          <div className="lg:col-span-7">
            <div className="modern-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-gold-400 block">
                    {activeCourse.code} • {activeCourse.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {activeCourse.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-500/15 text-gold-400 border border-gold-500/30">
                  {activeCourse.durationHours} Practical Hours
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {activeCourse.summary}
              </p>

              {/* Key Practical Tasks */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Key Skills & Practical Tasks Covered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.detailedTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Tools Mastered */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[11px] font-bold text-slate-400">Tools Mastered:</span>
                {activeCourse.toolsCovered.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-semibold bg-slate-900 text-slate-200 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenEnrollment}
                  className="btn-primary w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-gold"
                >
                  <Sparkles className="w-4 h-4 text-dark-950" />
                  <span>Enroll for this Module</span>
                </button>

                <button
                  onClick={onOpenSyllabus}
                  className="btn-secondary w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-gold-400" />
                  <span>View A4 Prospectus</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};