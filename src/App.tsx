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
import { AdminDashboard } from './components/admin/AdminDashboard';
import { CourseModule } from './types';

export const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);
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

  // If Admin View is active, render the dedicated Administrative Dashboard
  if (isAdminView) {
    return <AdminDashboard onBackToPortal={() => setIsAdminView(false)} />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B0F19] text-slate-100 flex flex-col font-sans selection:bg-accent-gold selection:text-slate-950">
      
      {/* Elite Tech Navigation Bar */}
      <Navbar
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
        onOpenAdmin={() => setIsAdminView(true)}
      />

      {/* Main Public Student Portal */}
      <main className="flex-grow w-full overflow-x-hidden">
        
        {/* 1. High-Impact Dynamic Hero Section with Live Counter & Trust Cards */}
        <Hero
          onOpenEnrollment={handleOpenEnrollment}
          onOpenSyllabus={() => handleOpenSyllabus()}
        />

        {/* 2. Key Pillars (Govt. GR, 1:1 Lab, Mentorship, Transparent Fee) */}
        <WhyChooseUs onOpenEnrollment={handleOpenEnrollment} />

        {/* 3. Interactive 8-Module Curriculum Matrix & Syllabus Preview */}
        <CourseCatalog
          onSelectModuleForModal={(mod) => handleOpenSyllabus(mod)}
          onOpenSyllabus={() => handleOpenSyllabus()}
          onOpenEnrollment={handleOpenEnrollment}
        />

        {/* 4. Interactive "Test Your Computer Readiness" Quiz Widget */}
        <MockTestQuiz onOpenEnrollment={handleOpenEnrollment} />

        {/* 5. Fees, Batches Schedule & Degloor Center Google Map + Inquiry Form */}
        <EnrollmentSection />

        {/* 6. Comprehensive Accordion FAQ Section */}
        <FAQSection />

      </main>

      {/* Deep Slate High-Contrast Footer */}
      <Footer
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
        onOpenAdmin={() => setIsAdminView(true)}
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
