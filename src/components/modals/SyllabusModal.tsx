import React, { useState } from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { OfficialPdfDocument } from './OfficialPdfDocument';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  FileText,
  Loader2
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModule: CourseModule | null;
  onOpenEnrollment: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  selectedModule,
  onOpenEnrollment,
}) => {
  const [activeTab, setActiveTab] = useState<'official-document' | 'module-list'>('official-document');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  // Multi-page clean PDF exporter that never slices text or table rows
  const handleDownloadPdf = async () => {
    const docElement = document.getElementById('official-pdf-document');
    if (!docElement) return;

    try {
      setIsGeneratingPdf(true);
      const pages = docElement.querySelectorAll<HTMLElement>('.prospectus-page');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      if (pages.length > 0) {
        for (let i = 0; i < pages.length; i++) {
          const pageEl = pages[i];
          const canvas = await html2canvas(pageEl, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
          });
          const imgData = canvas.toDataURL('image/jpeg', 0.98);
          if (i > 0) pdf.addPage();
          const margin = 8;
          const availableW = pdfWidth - (margin * 2);
          const availableH = pdfHeight - (margin * 2);
          const imgHeight = (canvas.height * availableW) / canvas.width;
          pdf.addImage(imgData, 'JPEG', margin, margin, availableW, Math.min(imgHeight, availableH));
        }
      } else {
        const canvas = await html2canvas(docElement, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        pdf.addImage(imgData, 'JPEG', 8, 8, pdfWidth - 16, (canvas.height * (pdfWidth - 16)) / canvas.width);
      }

      pdf.save('Prerna_Academy_Degloor_MSCIT_Prospectus.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-4xl rounded-3xl border border-white/15 shadow-2xl relative max-h-[94vh] flex flex-col overflow-hidden bg-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center text-accent-gold shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Official MS-CIT Syllabus Prospectus</span>
                <span className="hidden md:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                  Prerna Academy Degloor
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setActiveTab('official-document')}
                className={`px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'official-document'
                    ? 'bg-accent-gold text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Prospectus (PDF)
              </button>
              <button
                onClick={() => setActiveTab('module-list')}
                className={`px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'module-list'
                    ? 'bg-accent-gold text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                8 Modules
              </button>
            </div>

            {/* Direct Download .PDF Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="btn-gold px-3.5 py-1.5 text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              title="Download PDF File"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span className="hidden sm:inline">Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-slate-950" />
                  <span className="hidden sm:inline">Download PDF</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/15 text-xs font-bold transition-all cursor-pointer"
              title="Print Prospectus"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-3 sm:p-6 flex-grow bg-slate-950/70">
          
          {activeTab === 'official-document' ? (
            /* Clean 2-Page Document View */
            <div className="max-w-3xl mx-auto">
              <OfficialPdfDocument />
            </div>
          ) : (
            /* Individual Module Cards */
            <div className="space-y-4 max-w-3xl mx-auto">
              {coursesData.map((course) => (
                <div key={course.id} className="modern-card p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-accent-gold/15 text-accent-gold border border-accent-gold/20">
                        {course.code}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-white">{course.title}</h4>
                    </div>
                    <span className="text-xs text-accent-gold font-bold">{course.durationHours} Hours</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{course.summary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {course.detailedTopics.map((t, idx) => (
                      <div key={idx} className="text-xs text-slate-200 flex items-start gap-1.5 bg-white/5 p-2 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                    {course.toolsCovered.map((tool) => (
                      <span key={tool} className="text-[10px] bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-full border border-white/10 font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
            Need physical copy? Visit Prerna Academy, Near Global English School, Rampur Road, Degloor.
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex-1 sm:flex-initial btn-secondary text-xs px-5 py-2.5 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-accent-gold" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenEnrollment();
              }}
              className="flex-1 sm:flex-initial btn-gold text-xs px-6 py-2.5 uppercase tracking-wider cursor-pointer"
            >
              Enroll at Degloor Center
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
