import React, { useState } from 'react';
import { faqsData } from '../../data/faqsData';
import { FAQItem } from '../../types';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, PhoneCall } from 'lucide-react';

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
    <section id="faqs" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about MS-CIT admissions, batch timings, MKCL examination pattern, 
            and government recognition.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'benefits', label: 'Govt. Jobs & Certificate' },
              { id: 'admissions', label: 'Fees & Admission' },
              { id: 'exams', label: 'Exam Pattern' },
              { id: 'syllabus', label: 'Syllabus & Medium' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-glow-blue'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'glass-card border-brand-500/50 shadow-md'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-brand-500 text-white rotate-180' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Still have a specific query or doubt?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Our academic counselor is ready to assist you on call or WhatsApp.</p>
          </div>
          <a
            href="tel:+919876543210"
            className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak with Counselor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
