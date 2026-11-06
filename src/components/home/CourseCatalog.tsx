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
    <section id="curriculum" className="py-16 sm:py-24 bg-cream relative w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-accent-gold bg-gold-light px-3.5 py-1 rounded-full border border-accent-gold/30 shadow-sm inline-block">
            Official MKCL Syllabus (अभ्यासक्रम)
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            MS-CIT Course Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-gray-medium">
            140 Hours of comprehensive practical lab training from basic operating skills to modern AI tools.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 8 Module Selector Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-xs font-bold uppercase text-gray-medium tracking-wider mb-2">
              Select Module (8 Core Subjects):
            </h3>
            
            <div className="space-y-2">
              {coursesData.map((course) => {
                const isActive = course.id === activeModuleId;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveModuleId(course.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-white text-slate-800 border-gray-light hover:border-accent-gold/50 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                        isActive ? 'bg-accent-gold text-slate-950' : 'bg-gold-light text-accent-gold'
                      }`}>
                        {course.code}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">
                        {course.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-accent-gold translate-x-1' : 'text-slate-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Prospectus PDF Button */}
            <div className="pt-3">
              <button
                onClick={onOpenSyllabus}
                className="btn-secondary w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-accent-gold" />
                <span>Download Official Prospectus (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right: Active Module Details Card */}
          <div className="lg:col-span-7">
            <div className="card-luxury p-6 sm:p-9 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-light pb-4 mb-5">
                <div>
                  <span className="text-xs font-bold text-accent-gold uppercase tracking-wider block">
                    {activeCourse.code} • {activeCourse.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl font-bold text-slate-900 mt-1">
                    {activeCourse.title}
                  </h3>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gold-light text-accent-gold border border-accent-gold/30">
                  {activeCourse.durationHours} Practical Hours
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-gray-medium leading-relaxed mb-6">
                {activeCourse.summary}
              </p>

              {/* Detailed Topics Covered */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                  Key Topics & Lab Drills:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.detailedTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-gold-light/50 p-2.5 rounded-xl border border-gray-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Covered */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                  Software & Applications Mastered:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCourse.toolsCovered.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-gray-light shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-gray-light flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenEnrollment}
                  className="btn-gold w-full sm:w-auto text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Join This Course at Degloor</span>
                </button>

                <button
                  onClick={() => onSelectModuleForModal(activeCourse)}
                  className="btn-outline w-full sm:w-auto text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-800" />
                  <span>View Full Syllabus Matrix</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
