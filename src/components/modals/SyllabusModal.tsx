import React, { useState } from 'react';
import { coursesData } from '../../data/coursesData';
import { CourseModule } from '../../types';
import { OfficialPdfDocument } from './OfficialPdfDocument';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  Award, 
  FileText,
  Sparkles,
  Phone,
  Eye,
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

  // Direct High-Resolution PDF Generator using jsPDF and html2canvas
  const handleDownloadPdf = async () => {
    const docElement = document.getElementById('official-pdf-document');
    if (!docElement) return;

    try {
      setIsGeneratingPdf(true);
      
      // Capture element with html2canvas
      const canvas = await html2canvas(docElement, {
        scale: 2, // High resolution (300 DPI equivalent)
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      // Calculate A4 dimensions in mm
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pdfWidth - 16; // 8mm margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 8; // Top margin

      // First page
      pdf.addImage(imgData, 'JPEG', 8, position, imgWidth, imgHeight);
      heightLeft -= (pdfHeight - 16);

      // Subsequent pages if content overflows single page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 8;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 8, position, imgWidth, imgHeight);
        heightLeft -= (pdfHeight - 16);
      }

      pdf.save('Prerna_Academy_Degloor_MSCIT_Prospectus.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to window.print() if html2canvas faces issues
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-aubergine-950/90 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-4xl rounded-3xl border border-marigold-500/40 shadow-2xl relative max-h-[94vh] flex flex-col overflow-hidden bg-aubergine-950"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 bg-gradient-to-r from-aubergine-950 via-aubergine-900 to-aubergine-950 border-b border-marigold-500/25 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-marigold-500/20 border border-marigold-500/40 flex items-center justify-center text-marigold-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-extrabold text-white flex items-center gap-2">
                <span>अधिकृत MS-CIT अभ्यासक्रम प्रॉस्पेक्टस</span>
                <span className="hidden md:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-marigold-500/15 text-marigold-300 border border-marigold-500/30">
                  प्रेरणा अकॅडमी देगलूर
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* View Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-aubergine-900 border border-aubergine-800">
              <button
                onClick={() => setActiveTab('official-document')}
                className={`px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'official-document'
                    ? 'bg-marigold-500 text-aubergine-950 shadow-sm'
                    : 'text-silver-400 hover:text-white'
                }`}
              >
                प्रॉस्पेक्टस PDF
              </button>
              <button
                onClick={() => setActiveTab('module-list')}
                className={`px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'module-list'
                    ? 'bg-marigold-500 text-aubergine-950 shadow-sm'
                    : 'text-silver-400 hover:text-white'
                }`}
              >
                ८ मॉड्युल्स (Modules)
              </button>
            </div>

            {/* Direct Download .PDF Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-marigold-500 hover:bg-marigold-400 text-aubergine-950 font-black text-xs transition-all shadow-md active:scale-95 disabled:opacity-50"
              title="Download PDF File"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span className="hidden sm:inline">तयार होत आहे...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">PDF डाउनलोड करा</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-aubergine-900 hover:bg-aubergine-800 text-marigold-300 border border-marigold-500/30 text-xs font-bold transition-all"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-aubergine-800 text-silver-400 hover:text-white hover:bg-aubergine-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-3 sm:p-6 flex-grow bg-aubergine-950/80">
          
          {activeTab === 'official-document' ? (
            /* Clean Document Paper View */
            <div className="max-w-3xl mx-auto">
              <OfficialPdfDocument />
            </div>
          ) : (
            /* Individual Module Cards */
            <div className="space-y-3.5 max-w-3xl mx-auto">
              {coursesData.map((course) => (
                <div key={course.id} className="bg-aubergine-900/90 p-4 sm:p-5 rounded-2xl border border-aubergine-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-marigold-500/10 text-marigold-400 border border-marigold-500/20">
                        {course.code}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white">{course.title}</h4>
                    </div>
                    <span className="text-xs text-marigold-400 font-semibold">{course.durationHours} Hours</span>
                  </div>

                  <p className="text-xs text-silver-300">{course.summary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {course.detailedTopics.map((t, idx) => (
                      <div key={idx} className="text-xs text-silver-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-marigold-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-aubergine-800 flex flex-wrap gap-1">
                    {course.toolsCovered.map((tool) => (
                      <span key={tool} className="text-[10px] bg-aubergine-950 text-silver-300 px-2 py-0.5 rounded border border-aubergine-800">
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
        <div className="px-4 sm:px-6 py-3 bg-aubergine-950 border-t border-aubergine-800 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <p className="text-[11px] sm:text-xs text-silver-400 text-center sm:text-left">
            छापील प्रत हवी आहे? प्रेरणा अकॅडमी, ग्लोबल स्कूलजवळ, रामपूर रोड, देगलूर येथे प्रत्यक्ष भेट द्या.
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-marigold-500 hover:bg-marigold-400 text-aubergine-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-glow-marigold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>अधिकृत PDF डाउनलोड करा</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenEnrollment();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl btn-marigold text-xs uppercase tracking-wider transition-all"
            >
              देगलूर केंद्रात प्रवेश घ्या
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
