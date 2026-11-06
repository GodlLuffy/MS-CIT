import React, { useState } from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { 
  Monitor, 
  FileText, 
  TableProperties, 
  Presentation, 
  ShieldCheck, 
  Landmark, 
  Sparkles, 
  GraduationCap,
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Download,
  Layers,
  Wrench
} from 'lucide-react';

interface CourseCatalogProps {
  onSelectModuleForModal: (mod: CourseModule) => void;
  onOpenSyllabus: () => void;
  onOpenEnrollment: () => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  onSelectModuleForModal,
  onOpenSyllabus,
  onOpenEnrollment,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'advanced' | 'practical' | 'smart'>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return Monitor;
      case 'FileText': return FileText;
      case 'TableProperties': return TableProperties;
      case 'Presentation': return Presentation;
      case 'ShieldCheck': return ShieldCheck;
      case 'Landmark': return Landmark;
      case 'Sparkles': return Sparkles;
      case 'GraduationCap': return GraduationCap;
      default: return Layers;
    }
  };

  const filteredCourses = activeCategory === 'all' 
    ? coursesData 
    : coursesData.filter(c => c.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-14 sm:py-20 bg-slate-950 relative w-full overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[700px] h-72 sm:h-[500px] bg-brand-600/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Official MKCL Syllabus at Prerna Academy Degloor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-blue">MS-CIT Curriculum</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Master 8 practical modules with 100% individual workstation time, 
            interactive ERA lessons, and bilingual support in Marathi and English.
          </p>
        </div>

        {/* Category Filters - Scrollable & safe on Android / iOS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {[
            { id: 'all', label: 'All 8 Modules' },
            { id: 'core', label: 'Computer Basics & Word' },
            { id: 'advanced', label: 'Excel & AI Tools' },
            { id: 'practical', label: 'PowerPoint & Exams' },
            { id: 'smart', label: 'Cyber Safety & Aaple Sarkar' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === tab.id
                  ? 'bg-brand-600 text-white shadow-glow-blue scale-102'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredCourses.map((course) => {
            const Icon = getIcon(course.iconName);
            const isExpanded = expandedCardId === course.id;

            return (
              <div
                key={course.id}
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6 flex flex-col justify-between border border-slate-800 hover:border-brand-500/40 relative overflow-hidden group"
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {course.code}
                    </span>
                    {course.badge && (
                      <span className="text-[9px] sm:text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-brand-400/50 transition-all">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-brand-400" />
                        <span>{course.durationHours} Practical Hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-3.5 leading-relaxed font-normal">
                    {course.summary}
                  </p>

                  {/* Software/Tools Covered */}
                  <div className="mb-3.5">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Wrench className="w-3 h-3 text-slate-500" />
                      Applications & Tools:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {course.toolsCovered.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Topic Details Accordion */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800/80 space-y-2.5 animate-fadeIn">
                      <div>
                        <h4 className="text-xs font-bold text-slate-200 mb-1.5">Syllabus Breakdown:</h4>
                        <ul className="space-y-1">
                          {course.detailedTopics.map((topic, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-1.5">
                        <h4 className="text-xs font-bold text-brand-300 mb-1">Hands-On Practice:</h4>
                        {course.handsOnProjects.map((proj, i) => (
                          <div key={i} className="text-[11px] bg-slate-950 p-2 rounded-lg border border-slate-800 text-slate-300 mb-1">
                            🚀 {proj}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer of Card */}
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(course.id)}
                    className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide' : 'Topics'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectModuleForModal(course)}
                    className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center gap-1 transition-all"
                  >
                    <span>Full Syllabus</span>
                    <ArrowRight className="w-3 h-3 text-brand-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Catalog */}
        <div className="mt-10 sm:mt-14 glass-card rounded-2xl p-5 sm:p-7 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-glow-blue/20">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-base sm:text-xl font-bold text-white">
              Download Full Syllabus Booklet for Prerna Academy Degloor
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Includes lesson roadmaps, ERA continuous marks distribution, and practical lab assignments.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenSyllabus}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Syllabus (PDF)</span>
            </button>
            <button
              onClick={onOpenEnrollment}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs shadow-md active:scale-95 transition-all text-center"
            >
              Enroll at Degloor Center
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
