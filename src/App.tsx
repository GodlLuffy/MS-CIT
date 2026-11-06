import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { CourseCatalog } from './components/home/CourseCatalog';
import { MockTestQuiz } from './components/home/MockTestQuiz';
import { EnrollmentSection } from './components/home/EnrollmentSection';
import { FAQSection } from './components/home/FAQSection';
import { Footer } from './components/layout/Footer';
import { MobileQuickBar } from './components/layout/MobileQuickBar';
import { EnrollmentModal } from './components/modals/EnrollmentModal';
import { SyllabusModal } from './components/modals/SyllabusModal';
import { CourseModule } from './types';

export const App: React.FC = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedModuleForModal, setSelectedModuleForModal] = useState<CourseModule | null>(null);

  const handleOpenEnrollment = () => {
    setIsEnrollmentModalOpen(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentModalOpen(false);
  };

  const handleOpenSyllabus = (module?: CourseModule) => {
    setSelectedModuleForModal(module || null);
    setIsSyllabusModalOpen(true);
  };

  const handleCloseSyllabus = () => {
    setIsSyllabusModalOpen(false);
    setSelectedModuleForModal(null);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-cream text-slate-900 flex flex-col font-sans selection:bg-accent-gold selection:text-slate-950">
      
      {/* KLP-Style Luxury Editorial Navigation */}
      <Navbar
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

      {/* Main Content Flow */}
      <main className="flex-grow w-full overflow-x-hidden">
        
        {/* 1. Hero Section (KLP Luxury Serif Aesthetic) */}
        <Hero
          onOpenEnrollment={handleOpenEnrollment}
          onOpenSyllabus={() => handleOpenSyllabus()}
        />

        {/* 2. Key Pillars (Govt. GR, 1:1 Lab, Mentorship, Transparent Fee) */}
        <WhyChooseUs onOpenEnrollment={handleOpenEnrollment} />

        {/* 3. 8-Module Curriculum & Official Prospectus */}
        <CourseCatalog
          onSelectModuleForModal={(mod) => handleOpenSyllabus(mod)}
          onOpenSyllabus={() => handleOpenSyllabus()}
          onOpenEnrollment={handleOpenEnrollment}
        />

        {/* 4. Beginner Computer Readiness Quiz */}
        <MockTestQuiz onOpenEnrollment={handleOpenEnrollment} />

        {/* 5. Admission Form, Batch Timings & Degloor Center Map */}
        <EnrollmentSection />

        {/* 6. High-Value FAQs */}
        <FAQSection />

      </main>

      {/* Luxury Dark Slate Footer (matching KLP Academy) */}
      <Footer
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenEnrollment={handleOpenEnrollment} />

      {/* Modals */}
      <EnrollmentModal
        isOpen={isEnrollmentModalOpen}
        onClose={handleCloseEnrollment}
      />

      <SyllabusModal
        isOpen={isSyllabusModalOpen}
        onClose={handleCloseSyllabus}
        selectedModule={selectedModuleForModal}
        onOpenEnrollment={handleOpenEnrollment}
      />

    </div>
  );
};

export default App;
