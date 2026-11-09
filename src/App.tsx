import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { CertificationShowcase } from './components/home/CertificationShowcase';
import { LabGallery } from './components/home/LabGallery';
import { CourseCatalog } from './components/home/CourseCatalog';
import { AiSkillsHub } from './components/home/AiSkillsHub';
import { MockTestQuiz } from './components/home/MockTestQuiz';
import { Testimonials } from './components/home/Testimonials';
import { EnrollmentSection } from './components/home/EnrollmentSection';
import { FAQSection } from './components/home/FAQSection';
import { Footer } from './components/layout/Footer';
import { MobileQuickBar } from './components/layout/MobileQuickBar';
import { EnrollmentModal } from './components/modals/EnrollmentModal';
import { SyllabusModal } from './components/modals/SyllabusModal';
import { AdminAuthModal } from './components/modals/AdminAuthModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { CourseModule } from './types';

export const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedModuleForModal, setSelectedModuleForModal] = useState<CourseModule | null>(null);

  // Secret Admin Access Gateway Handler
  const handleSecretAdminTrigger = () => {
    const isAuth = sessionStorage.getItem('pca_admin_authenticated') === 'true';
    if (isAuth) {
      setIsAdminView(true);
    } else {
      setIsAdminAuthModalOpen(true);
    }
  };

  // 1. Secret Trigger via URL Hash (#admin or ?admin)
  useEffect(() => {
    const checkAdminHash = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hash === '#admin' || search.includes('admin=true') || search.includes('admin')) {
        handleSecretAdminTrigger();
      }
    };

    checkAdminHash();
    window.addEventListener('hashchange', checkAdminHash);
    return () => window.removeEventListener('hashchange', checkAdminHash);
  }, []);

  // 2. Secret Trigger via Global Keyboard Shortcut (Ctrl+Shift+A or Alt+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlShiftA = e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a');
      const isAltA = e.altKey && (e.key === 'a' || e.key === 'A');
      
      if (isCtrlShiftA || isAltA) {
        e.preventDefault();
        handleSecretAdminTrigger();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    return (
      <AdminDashboard 
        onBackToPortal={() => {
          setIsAdminView(false);
          if (window.location.hash === '#admin') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-aubergine-950 flex flex-col font-sans selection:bg-marigold selection:text-aubergine-950">
      
      {/* Fresh Luxury Navigation Bar (No visible Admin button for public users) */}
      <Navbar
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
        onSecretAdminTrigger={handleSecretAdminTrigger}
      />

      {/* Main Public Student Portal */}
      <main className="flex-grow w-full pt-16 sm:pt-24 lg:pt-28">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenEnrollment={handleOpenEnrollment}
          onOpenSyllabus={() => handleOpenSyllabus()}
        />

        {/* 2. Key Pillars */}
        <WhyChooseUs onOpenEnrollment={handleOpenEnrollment} />

        {/* 3. Official MSBTE & MKCL Joint Certificate Advantage */}
        <CertificationShowcase onOpenEnrollment={handleOpenEnrollment} />

        {/* 4. High-Tech Campus & 1:1 Computer Lab Infrastructure */}
        <LabGallery />

        {/* 5. Interactive 8-Module Course Curriculum */}
        <CourseCatalog
          onSelectModuleForModal={(mod) => handleOpenSyllabus(mod)}
          onOpenSyllabus={() => handleOpenSyllabus()}
          onOpenEnrollment={handleOpenEnrollment}
        />

        {/* 6. MKCL 125+ AI Tools & Target Audience (कोणासाठी उपयुक्त?) */}
        <AiSkillsHub onOpenEnrollment={handleOpenEnrollment} />

        {/* 7. Interactive "Test Your Computer Readiness" Quiz Widget */}
        <MockTestQuiz onOpenEnrollment={handleOpenEnrollment} />

        {/* 7. Student Success Stories & Wall of Fame from Degloor */}
        <Testimonials />

        {/* 8. Fees, Batches Schedule & Degloor Center Google Map + Inquiry Form */}
        <EnrollmentSection />

        {/* 9. Comprehensive Accordion FAQ Section */}
        <FAQSection />

      </main>

      {/* Deep Aubergine High-Contrast Luxury Footer (Public view has no visible Admin link) */}
      <Footer
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
        onSecretAdminTrigger={handleSecretAdminTrigger}
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

      {/* Secret Institute Admin Authentication PIN Modal */}
      <AdminAuthModal
        isOpen={isAdminAuthModalOpen}
        onClose={() => {
          setIsAdminAuthModalOpen(false);
          if (window.location.hash === '#admin') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
        onAuthenticated={() => {
          setIsAdminAuthModalOpen(false);
          setIsAdminView(true);
        }}
      />

    </div>
  );
};

export default App;