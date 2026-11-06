import React, { useState } from 'react';
import { faqsData } from '../../data/faqsData';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'admissions' | 'syllabus' | 'exams' | 'benefits'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = activeCategory === 'all'
    ? faqsData
    : faqsData.filter(item => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-14 sm:py-20 bg-aubergine-950 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-xs font-bold text-marigold-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Prerna Academy <span className="text-gradient-marigold">Admission FAQs</span>
          </h2>
          <p className="text-silver-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about MS-CIT fees, batch timings in Degloor, 
            MKCL exam pattern, and government job certification validity.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'benefits', label: 'Govt. Jobs & Certificate' },
              { id: 'admissions', label: 'Degloor Center & Fees' },
              { id: 'exams', label: 'Exam Pattern' },
              { id: 'syllabus', label: 'Syllabus & Medium' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-marigold-500 text-aubergine-950 shadow-glow-marigold'
                    : 'bg-aubergine-900 text-silver-300 hover:text-white border border-marigold-500/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'glass-card border-marigold-500/50 shadow-md'
                    : 'bg-aubergine-900/40 border-marigold-500/15 hover:border-marigold-500/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-marigold-500 text-aubergine-950 rotate-180' : 'bg-aubergine-800 text-marigold-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-silver-300 leading-relaxed border-t border-marigold-500/15 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Strip */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-aubergine-900 to-aubergine-950 border border-marigold-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Have more questions about Degloor admissions?</h4>
            <p className="text-[11px] sm:text-xs text-silver-400 mt-0.5">Contact our counselor at Prerna Academy Degloor directly.</p>
          </div>
          <a
            href="tel:+919975875005"
            className="btn-marigold w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs uppercase font-black shrink-0 flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Degloor Office</span>
          </a>
        </div>

      </div>
    </section>
  );
};
