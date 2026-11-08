import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { FileText, CheckCircle2, ChevronRight, Download, Sparkles, Clock, BookOpen } from 'lucide-react';

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
    <section id="curriculum" className="py-16 sm:py-24 bg-white relative w-full overflow-hidden border-t border-ice scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-ice/50 px-3.5 py-1 rounded-full border border-ice inline-block">
            Official MKCL Syllabus (अभ्यासक्रम)
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-aubergine tracking-tight">
            MS-CIT Course Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/70">
            140 Hours of comprehensive practical lab training from basic operating skills to modern AI tools.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 8 Module Selector Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-xs font-bold uppercase text-aubergine/70 tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-marigold-600" />
              <span>Select Module (8 Core Subjects):</span>
            </h3>
            
            <div className="space-y-2">
              {coursesData.map((course) => {
                const isActive = course.id === activeModuleId;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveModuleId(course.id)}
                    style={{
                      backgroundColor: isActive ? '#3A0F34' : '#FAF9F6',
                      color: isActive ? '#FFFFFF' : '#2A0B25',
                      borderColor: isActive ? '#3A0F34' : '#DDE3E8',
                    }}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'shadow-md'
                        : 'hover:border-aubergine/30 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                        isActive ? 'bg-marigold text-aubergine-950 font-black' : 'bg-ice text-aubergine'
                      }`}>
                        {course.code}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">
                        {course.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-marigold translate-x-1' : 'text-aubergine/40'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Prospectus PDF Button */}
            <div className="pt-3">
              <button
                onClick={onOpenSyllabus}
                className="btn-outline w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-marigold-600" />
                <span>Download Official Prospectus (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right: Active Module Details Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="modern-card p-6 sm:p-9 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ice pb-4 mb-5">
                  <div>
                    <span className="text-xs font-bold text-marigold-600 uppercase tracking-wider block">
                      {activeCourse.code} • {activeCourse.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-3xl font-bold text-aubergine mt-1">
                      {activeCourse.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-ice text-aubergine border border-ice-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeCourse.durationHours} Practical Hours</span>
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-aubergine/80 leading-relaxed mb-6">
                  {activeCourse.summary}
                </p>

                {/* Detailed Topics Covered */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase text-aubergine tracking-wider">
                    Key Topics & Practical Lab Drills:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCourse.detailedTopics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-aubergine bg-ice/30 p-2.5 rounded-xl border border-ice">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Covered */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase text-aubergine tracking-wider">
                    Software & Applications Mastered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCourse.toolsCovered.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-ice/50 text-aubergine border border-ice shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-ice flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={onOpenEnrollment}
                    className="btn-gold w-full sm:w-auto text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-marigold-glow"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
                    <span>Join This Course at Degloor</span>
                  </button>

                  <button
                    onClick={() => onSelectModuleForModal(activeCourse)}
                    className="btn-outline w-full sm:w-auto text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-aubergine" />
                    <span>View Full Syllabus Matrix</span>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
