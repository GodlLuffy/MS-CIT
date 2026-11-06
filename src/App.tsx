import React, { useState } from 'react';
import { TopBanner } from './components/layout/TopBanner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { StatsRibbon } from './components/home/StatsRibbon';
import { CourseCatalog } from './components/home/CourseCatalog';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { CertificationShowcase } from './components/home/CertificationShowcase';
import { FeeAndBatches } from './components/home/FeeAndBatches';
import { LabGallery } from './components/home/LabGallery';
import { MockTestQuiz } from './components/home/MockTestQuiz';
import { Testimonials } from './components/home/Testimonials';
import { EnrollmentSection } from './components/home/EnrollmentSection';
import { FAQSection } from './components/home/FAQSection';
import { Footer } from './components/layout/Footer';
import { EnrollmentModal } from './components/modals/EnrollmentModal';
import { SyllabusModal } from './components/modals/SyllabusModal';
import { CourseModule } from './types';
import { MessageSquare, PhoneCall, Sparkles, Navigation } from 'lucide-react';

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
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Banner Alert */}
      <TopBanner onOpenEnrollment={handleOpenEnrollment} />

      {/* Main Glass Navigation */}
      <Navbar
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          onOpenEnrollment={handleOpenEnrollment}
          onOpenSyllabus={() => handleOpenSyllabus()}
        />

        {/* Key Metrics & Stats Ribbon */}
        <StatsRibbon />

        {/* 8 Modules Course Catalog */}
        <CourseCatalog
          onSelectModuleForModal={(mod) => handleOpenSyllabus(mod)}
          onOpenSyllabus={() => handleOpenSyllabus()}
          onOpenEnrollment={handleOpenEnrollment}
        />

        {/* Why Choose Us Feature Grid */}
        <WhyChooseUs onOpenEnrollment={handleOpenEnrollment} />

        {/* Certification Showcase & Govt Recognition */}
        <CertificationShowcase onOpenEnrollment={handleOpenEnrollment} />

        {/* Transparent Batches & Fees */}
        <FeeAndBatches onOpenEnrollment={handleOpenEnrollment} />

        {/* Interactive Lab Gallery */}
        <LabGallery />

        {/* Interactive Mini MS-CIT Quiz Widget */}
        <MockTestQuiz onOpenEnrollment={handleOpenEnrollment} />

        {/* Real Alumni Testimonials */}
        <Testimonials />

        {/* Comprehensive Enrollment / Admission Form with Google Map Embed */}
        <EnrollmentSection />

        {/* FAQ Accordions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

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

      {/* Floating Sticky Quick Action Pill (Android & iOS safe-area optimized) */}
      <div 
        className="fixed right-3 sm:right-5 z-40 flex items-center gap-2"
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <a
          href="https://wa.me/919421867123?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20regarding%20MS-CIT%20admission"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 backdrop-blur-md text-white font-bold text-xs shadow-lg shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all border border-emerald-400/30"
          aria-label="Chat with Prerna Academy on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-100" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href="tel:+919421867123"
          className="flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-brand-400 shadow-lg active:scale-95"
          aria-label="Call Prerna Academy"
        >
          <PhoneCall className="w-4 h-4" />
        </a>

        <button
          onClick={handleOpenEnrollment}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-brand-950/60 hover:scale-105 active:scale-95 transition-all border border-brand-400/30"
          aria-label="Quick Enroll"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
          <span>Free Demo</span>
        </button>
      </div>
    </div>
  );
};

export default App;
