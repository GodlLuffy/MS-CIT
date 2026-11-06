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
    <section id="curriculum" className="py-14 sm:py-20 bg-aubergine-950 relative w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-400 bg-marigold-500/15 px-3 py-1 rounded-full border border-marigold-500/30">
            अधिकृत MKCL अभ्यासक्रम (Syllabus)
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-silver-100 tracking-tight">
            MS-CIT संपूर्ण अभ्यासक्रम (१४० तास प्रॅक्टिकल)
          </h2>
          <p className="text-xs sm:text-sm text-silver-300">
            संगणक मूलभूत ज्ञानापासून ते आधुनिक AI साधनांपर्यंत परिपूर्ण प्रशिक्षण.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 8 Modules List */}
          <div className="lg:col-span-5 space-y-2">
            <h3 className="text-xs font-bold uppercase text-marigold-400 tracking-wider mb-2">
              मॉड्युल निवडा (एकूण ८ विषय):
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
                        ? 'bg-marigold-500 text-aubergine-950 font-black border-marigold-400 shadow-glow-marigold'
                        : 'bg-aubergine-900 text-silver-200 border-aubergine-800 hover:border-marigold-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-aubergine-950 text-marigold-400' : 'bg-aubergine-800 text-silver-300'
                      }`}>
                        {course.code}
                      </span>
                      <span className="text-xs sm:text-sm font-bold truncate max-w-[200px] sm:max-w-xs">
                        {course.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-aubergine-950 translate-x-1' : 'text-silver-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Prospectus Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenSyllabus}
                className="btn-silver w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-marigold-400" />
                <span>अधिकृत सिलॅबस प्रॉस्पेक्टस (PDF) डाउनलोड करा</span>
              </button>
            </div>
          </div>

          {/* Right: Active Module Details */}
          <div className="lg:col-span-7">
            <div className="luxury-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-aubergine-800 pb-4 mb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-marigold-400 block">
                    {activeCourse.code} • {activeCourse.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-silver-100">
                    {activeCourse.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-marigold-500/20 text-marigold-300 border border-marigold-500/40">
                  {activeCourse.durationHours} प्रात्यक्षिक तास (Hours)
                </span>
              </div>

              {/* Summary in Marathi */}
              <p className="text-xs sm:text-sm text-silver-200 leading-relaxed mb-5">
                {activeCourse.summary}
              </p>

              {/* Key Practical Tasks */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-marigold-400 uppercase tracking-wider mb-3">
                  प्रत्यक्ष शिकवले जाणारे कौशल्य व प्रात्यक्षिके (Practical Topics):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.detailedTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-silver-300">
                      <CheckCircle2 className="w-4 h-4 text-marigold-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Tools Mastered */}
              <div className="pt-4 border-t border-aubergine-800 flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[11px] font-bold text-silver-300">टूल्स व सॉफ्टवेअर:</span>
                {activeCourse.toolsCovered.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-semibold bg-aubergine-950 text-marigold-300 px-2.5 py-1 rounded-md border border-aubergine-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenEnrollment}
                  className="btn-marigold w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-marigold"
                >
                  <Sparkles className="w-4 h-4 text-aubergine-950" />
                  <span>या कोर्समध्ये प्रवेश घ्या (Enroll)</span>
                </button>

                <button
                  onClick={onOpenSyllabus}
                  className="btn-silver w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-marigold-400" />
                  <span>A4 Prospectus पहा</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};