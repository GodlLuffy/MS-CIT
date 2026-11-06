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
import { MessageSquare, PhoneCall } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Banner Alert */}
      <TopBanner onOpenEnrollment={handleOpenEnrollment} />

      {/* Main Glass Navigation */}
      <Navbar
        onOpenEnrollment={handleOpenEnrollment}
        onOpenSyllabus={() => handleOpenSyllabus()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
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

        {/* Comprehensive Enrollment / Admission Form */}
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

      {/* Floating Sticky Quick Action Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/919876543210?text=Hello%20Apex%20Academy%2C%20I%20want%20information%20regarding%20MS-CIT%20admission"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-glow-emerald hover:scale-105 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Help</span>
        </a>

        <button
          onClick={handleOpenEnrollment}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-glow-blue hover:scale-105 transition-all"
          aria-label="Quick Enroll"
        >
          <span>Free Demo</span>
        </button>
      </div>
    </div>
  );
};

export default App;
