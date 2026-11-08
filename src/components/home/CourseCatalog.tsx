import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown,
  Download, 
  Sparkles, 
  Clock, 
  BookOpen,
  Monitor,
  TableProperties,
  Presentation,
  ShieldCheck,
  Landmark,
  GraduationCap,
  Layers,
  ListFilter,
  Check,
  FolderGit2
} from 'lucide-react';

interface CourseCatalogProps {
  onSelectModuleForModal: (course: CourseModule) => void;
  onOpenSyllabus: () => void;
  onOpenEnrollment: () => void;
}

// Clean helper to extract English main title and Marathi subtitle
const parseCourseTitle = (rawTitle: string) => {
  const match = rawTitle.match(/^(.*?)(?:\s*\((.*?)\))?$/);
  if (match) {
    return {
      main: match[1]?.trim() || rawTitle,
      marathi: match[2]?.trim() || null
    };
  }
  return { main: rawTitle, marathi: null };
};

// Compact labels for mobile horizontal scroll tabs
const shortModuleLabels: Record<string, string> = {
  'MOD-01': 'IT Basics',
  'MOD-02': 'MS Word',
  'MOD-03': 'MS Excel',
  'MOD-04': 'PowerPoint',
  'MOD-05': 'Cyber & UPI',
  'MOD-06': 'e-Governance',
  'MOD-07': 'AI Tools',
  'MOD-08': 'Exam Mock',
};

// Icon selector helper
const renderModuleIcon = (iconName: string, className = "w-4 h-4") => {
  switch (iconName) {
    case 'Monitor': return <Monitor className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'TableProperties': return <TableProperties className={className} />;
    case 'Presentation': return <Presentation className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Landmark': return <Landmark className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    default: return <BookOpen className={className} />;
  }
};

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  onSelectModuleForModal,
  onOpenSyllabus,
  onOpenEnrollment,
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(coursesData[0].id);
  const [mobileViewMode, setMobileViewMode] = useState<'card' | 'accordion'>('card');
  const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(coursesData[0].id);

  const activeIndex = coursesData.findIndex((c) => c.id === activeModuleId);
  const activeCourse = coursesData[activeIndex] || coursesData[0];
  const prevCourse = activeIndex > 0 ? coursesData[activeIndex - 1] : null;
  const nextCourse = activeIndex < coursesData.length - 1 ? coursesData[activeIndex + 1] : null;

  // Refs for mobile tab pill auto-scrolling
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleSelectModule = (id: string) => {
    setActiveModuleId(id);
    if (tabRefs.current[id]) {
      tabRefs.current[id]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  const handleToggleAccordion = (id: string) => {
    setExpandedAccordionId(prev => prev === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-12 sm:py-20 lg:py-24 bg-white relative w-full overflow-hidden border-t border-ice scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2.5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-ice/60 px-3.5 py-1 rounded-full border border-ice inline-block">
            Official MKCL Syllabus (अभ्यासक्रम)
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-aubergine tracking-tight">
            MS-CIT Course Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/75 max-w-xl mx-auto">
            140 Hours of comprehensive practical lab training — from fundamental computing & office automation to modern AI productivity & government e-services.
          </p>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-ice/50 text-aubergine border border-ice">
              ⏱ 140 Practical Hours
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-ice/50 text-aubergine border border-ice">
              📚 8 Core Subjects
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-ice/50 text-aubergine border border-ice">
              🏛 MKCL & MSBTE Certified
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-ice/50 text-aubergine border border-ice">
              💻 100% Practical Labs
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (Screens < 1024px)                          */}
        {/* Designed specifically for smartphone thumb ergonomics   */}
        {/* ======================================================== */}
        <div className="block lg:hidden">
          
          {/* Mobile View Toggle: Card View vs Accordion View */}
          <div className="flex items-center justify-center p-1 bg-ice/60 rounded-2xl border border-ice mb-4 max-w-xs mx-auto">
            <button
              onClick={() => setMobileViewMode('card')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                mobileViewMode === 'card'
                  ? 'bg-aubergine text-white shadow-sm'
                  : 'text-aubergine/70 hover:text-aubergine'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Card View</span>
            </button>
            <button
              onClick={() => setMobileViewMode('accordion')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                mobileViewMode === 'accordion'
                  ? 'bg-aubergine text-white shadow-sm'
                  : 'text-aubergine/70 hover:text-aubergine'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>All 8 Modules</span>
            </button>
          </div>

          {/* MODE A: Interactive Card View with horizontal tabs & stepper */}
          {mobileViewMode === 'card' && (
            <div className="space-y-4">
              
              {/* Horizontal Scrollable Tab Bar */}
              <div className="w-full overflow-x-auto no-scrollbar py-1">
                <div className="flex items-center gap-2 min-w-max px-0.5">
                  {coursesData.map((course, idx) => {
                    const isActive = course.id === activeModuleId;
                    const shortLabel = shortModuleLabels[course.code] || `Mod ${idx + 1}`;
                    return (
                      <button
                        key={course.id}
                        ref={(el) => { tabRefs.current[course.id] = el; }}
                        onClick={() => handleSelectModule(course.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                          isActive
                            ? 'bg-aubergine text-white border-aubergine shadow-md ring-2 ring-marigold/50'
                            : 'bg-[#FAF9F6] text-aubergine border-ice hover:border-aubergine/40 hover:bg-white'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black ${
                          isActive ? 'bg-marigold text-aubergine-950' : 'bg-ice text-aubergine'
                        }`}>
                          {idx + 1}
                        </span>
                        <span>{shortLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Module Stepper Bar & Prev/Next Quick Controls */}
              <div className="flex items-center justify-between bg-ice/40 border border-ice rounded-2xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black uppercase text-marigold-600 bg-ice px-2 py-0.5 rounded-md border border-ice">
                    {activeCourse.code}
                  </span>
                  <span className="text-xs font-bold text-aubergine">
                    Module {activeIndex + 1} of {coursesData.length}
                  </span>
                  <span className="text-[11px] text-aubergine/60 hidden sm:inline">
                    • {activeCourse.category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => prevCourse && handleSelectModule(prevCourse.id)}
                    disabled={!prevCourse}
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                      prevCourse 
                        ? 'bg-white border-ice text-aubergine hover:bg-marigold hover:text-aubergine-950 active:scale-95' 
                        : 'bg-ice/50 border-transparent text-aubergine/30 cursor-not-allowed'
                    }`}
                    aria-label="Previous Module"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex gap-1 px-1">
                    {coursesData.map((c, i) => (
                      <span
                        key={c.id}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeIndex 
                            ? 'w-4 bg-marigold' 
                            : 'w-1.5 bg-ice-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => nextCourse && handleSelectModule(nextCourse.id)}
                    disabled={!nextCourse}
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                      nextCourse 
                        ? 'bg-white border-ice text-aubergine hover:bg-marigold hover:text-aubergine-950 active:scale-95' 
                        : 'bg-ice/50 border-transparent text-aubergine/30 cursor-not-allowed'
                    }`}
                    aria-label="Next Module"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Module Card (Directly Below Navigation - Zero Scrolling Gap) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCourse.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="modern-card p-4 sm:p-6 rounded-2xl relative overflow-hidden bg-white border border-ice shadow-sm"
                >
                  {/* Module Card Top Header */}
                  <div className="border-b border-ice pb-3.5 mb-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-marigold-600 uppercase tracking-wider flex items-center gap-1.5">
                        {renderModuleIcon(activeCourse.iconName, "w-3.5 h-3.5")}
                        <span>{activeCourse.category}</span>
                      </span>

                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-ice/60 text-aubergine border border-ice flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3 text-aubergine" />
                        <span>{activeCourse.durationHours} Practical Hours</span>
                      </span>
                    </div>

                    {/* Titles: English on top, Marathi badge below */}
                    <div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-aubergine leading-snug">
                        {parseCourseTitle(activeCourse.title).main}
                      </h3>
                      {parseCourseTitle(activeCourse.title).marathi && (
                        <div className="mt-1">
                          <span className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md bg-marigold/15 text-aubergine border border-marigold/30">
                            {parseCourseTitle(activeCourse.title).marathi}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-aubergine/80 leading-relaxed mb-4">
                    {activeCourse.summary}
                  </p>

                  {/* Key Topics List */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-[11px] font-bold uppercase text-aubergine/80 tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Topics & Practical Lab Drills:</span>
                    </h4>
                    <div className="space-y-1.5">
                      {activeCourse.detailedTopics.map((topic, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-2 text-xs text-aubergine bg-ice/25 p-2 rounded-xl border border-ice/70"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hands-on Projects (if any) */}
                  {activeCourse.handsOnProjects && activeCourse.handsOnProjects.length > 0 && (
                    <div className="space-y-2 mb-4 bg-marigold/10 p-3 rounded-xl border border-marigold/30">
                      <h4 className="text-[11px] font-bold uppercase text-aubergine tracking-wider flex items-center gap-1.5">
                        <FolderGit2 className="w-3.5 h-3.5 text-marigold-700" />
                        <span>Real-world Lab Projects:</span>
                      </h4>
                      <ul className="space-y-1 text-xs text-aubergine list-disc list-inside">
                        {activeCourse.handsOnProjects.map((project, idx) => (
                          <li key={idx} className="leading-snug">{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tools Covered */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-[11px] font-bold uppercase text-aubergine/80 tracking-wider">
                      Software & Applications Mastered:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCourse.toolsCovered.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-ice/50 text-aubergine border border-ice"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-ice space-y-2.5">
                    <button
                      onClick={onOpenEnrollment}
                      className="btn-gold w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-marigold-glow"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
                      <span>Join This Course at Degloor</span>
                    </button>

                    <button
                      onClick={() => onSelectModuleForModal(activeCourse)}
                      className="btn-outline w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-aubergine" />
                      <span>View Full Syllabus Matrix</span>
                    </button>
                  </div>

                  {/* Bottom Module Stepper Buttons */}
                  <div className="mt-4 pt-3 border-t border-ice flex items-center justify-between text-xs">
                    {prevCourse ? (
                      <button
                        onClick={() => handleSelectModule(prevCourse.id)}
                        className="text-aubergine/80 hover:text-aubergine font-semibold flex items-center gap-1 p-1"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Prev: {prevCourse.code}</span>
                      </button>
                    ) : <span />}

                    {nextCourse ? (
                      <button
                        onClick={() => handleSelectModule(nextCourse.id)}
                        className="text-aubergine/80 hover:text-aubergine font-semibold flex items-center gap-1 p-1"
                      >
                        <span>Next: {nextCourse.code}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : <span />}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Quick Prospectus PDF Button for Mobile */}
              <div className="pt-2">
                <button
                  onClick={onOpenSyllabus}
                  className="btn-outline w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-white"
                >
                  <Download className="w-4 h-4 text-marigold-600" />
                  <span>Download Official Prospectus (PDF)</span>
                </button>
              </div>

            </div>
          )}

          {/* MODE B: Accordion View (All 8 Modules Expandable in place) */}
          {mobileViewMode === 'accordion' && (
            <div className="space-y-3">
              {coursesData.map((course, idx) => {
                const isExpanded = expandedAccordionId === course.id;
                const { main, marathi } = parseCourseTitle(course.title);
                return (
                  <div
                    key={course.id}
                    className="rounded-2xl border border-ice bg-white overflow-hidden shadow-sm transition-all"
                  >
                    {/* Accordion Item Header */}
                    <button
                      onClick={() => handleToggleAccordion(course.id)}
                      className={`w-full text-left p-3.5 flex items-center justify-between gap-2.5 transition-colors cursor-pointer ${
                        isExpanded ? 'bg-aubergine text-white' : 'bg-[#FAF9F6] text-aubergine hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                          isExpanded ? 'bg-marigold text-aubergine-950' : 'bg-ice text-aubergine'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold leading-tight truncate">
                            {main}
                          </p>
                          {marathi && (
                            <p className={`text-[10px] mt-0.5 truncate ${
                              isExpanded ? 'text-marigold' : 'text-aubergine/70'
                            }`}>
                              {marathi}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isExpanded ? 'bg-white/20 text-white' : 'bg-ice text-aubergine'
                        }`}>
                          {course.durationHours}h
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-marigold' : 'text-aubergine/40'
                        }`} />
                      </div>
                    </button>

                    {/* Accordion Item Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden p-4 space-y-4 border-t border-ice bg-white"
                        >
                          <p className="text-xs text-aubergine/80 leading-relaxed">
                            {course.summary}
                          </p>

                          <div className="space-y-1.5">
                            <h5 className="text-[11px] font-bold uppercase text-aubergine tracking-wider">
                              Key Topics:
                            </h5>
                            {course.detailedTopics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2 text-xs text-aubergine bg-ice/30 p-2 rounded-xl">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-1.5">
                            <h5 className="text-[11px] font-bold uppercase text-aubergine tracking-wider">
                              Software:
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {course.toolsCovered.map((tool) => (
                                <span key={tool} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-ice/60 text-aubergine">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col gap-2">
                            <button
                              onClick={onOpenEnrollment}
                              className="btn-gold w-full py-2.5 rounded-full text-xs font-bold uppercase"
                            >
                              Join This Course at Degloor
                            </button>
                            <button
                              onClick={() => onSelectModuleForModal(course)}
                              className="btn-outline w-full py-2 rounded-full text-xs font-semibold"
                            >
                              View Full Syllabus
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Prospectus PDF Download Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenSyllabus}
                  className="btn-outline w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-white"
                >
                  <Download className="w-4 h-4 text-marigold-600" />
                  <span>Download Official Prospectus (PDF)</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (Screens >= 1024px)                        */}
        {/* Clean 2-column editorial layout with full readability    */}
        {/* ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 8 Module Selector Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-xs font-bold uppercase text-aubergine/70 tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-marigold-600" />
              <span>Select Module (8 Core Subjects):</span>
            </h3>
            
            <div className="space-y-2">
              {coursesData.map((course) => {
                const isActive = course.id === activeModuleId;
                const { main, marathi } = parseCourseTitle(course.title);
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveModuleId(course.id)}
                    style={{
                      backgroundColor: isActive ? '#3A0F34' : '#FAF9F6',
                      color: isActive ? '#FFFFFF' : '#2A0B25',
                      borderColor: isActive ? '#3A0F34' : '#DDE3E8',
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'shadow-md ring-2 ring-marigold/40'
                        : 'hover:border-aubergine/30 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className={`p-2 rounded-xl shrink-0 ${
                        isActive ? 'bg-marigold text-aubergine-950' : 'bg-ice text-aubergine'
                      }`}>
                        {renderModuleIcon(course.iconName, "w-4 h-4")}
                      </div>

                      <div className="min-w-0 flex-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-white/20 text-marigold' : 'bg-ice text-aubergine/80'
                          }`}>
                            {course.code}
                          </span>
                          <p className="text-xs font-bold leading-tight truncate">
                            {main}
                          </p>
                        </div>
                        {marathi && (
                          <p className={`text-[11px] mt-0.5 truncate ${
                            isActive ? 'text-white/80' : 'text-aubergine/60'
                          }`}>
                            {marathi}
                          </p>
                        )}
                      </div>
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
                className="btn-outline w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-white"
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
                className="modern-card p-6 sm:p-9 relative overflow-hidden bg-white border border-ice shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ice pb-4 mb-5">
                  <div>
                    <span className="text-xs font-bold text-marigold-600 uppercase tracking-wider block">
                      {activeCourse.code} • {activeCourse.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-3xl font-bold text-aubergine mt-1">
                      {parseCourseTitle(activeCourse.title).main}
                    </h3>
                    {parseCourseTitle(activeCourse.title).marathi && (
                      <p className="text-xs font-medium text-aubergine/70 mt-1">
                        {parseCourseTitle(activeCourse.title).marathi}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-ice text-aubergine border border-ice-300 flex items-center gap-1.5 shrink-0">
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

                {/* Hands-on Projects */}
                {activeCourse.handsOnProjects && activeCourse.handsOnProjects.length > 0 && (
                  <div className="space-y-2 mb-6 bg-marigold/10 p-3.5 rounded-2xl border border-marigold/30">
                    <h4 className="text-xs font-bold uppercase text-aubergine tracking-wider flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-marigold-700" />
                      <span>Real-world Lab Projects & Drills:</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-aubergine list-disc list-inside">
                      {activeCourse.handsOnProjects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}

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