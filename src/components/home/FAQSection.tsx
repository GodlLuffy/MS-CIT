import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Is the MS-CIT certificate compulsory for government jobs in Maharashtra?',
      answer: 'Yes. As per the official Maharashtra Government Resolution (शासन निर्णय - GR), an MS-CIT certificate jointly issued by MKCL and MSBTE is mandatory for selection and document verification in state government services, including Talathi, Police Bharti, MPSC, Zilla Parishad, Gram Sevak, and municipal corporations.'
    },
    {
      question: 'What is the MS-CIT examination pattern and passing criteria?',
      answer: 'The MS-CIT final exam is worth 100 marks. It is split into two parts: 50 marks for Continuous Internal Evaluation (ERA e-Learning system - minimum 20 marks to pass) and 50 marks for the Final Online Practical Examination (minimum 20 marks to pass). An aggregate score of 40% is required to earn the certificate.'
    },
    {
      question: 'What is the course fee and is an installment option available?',
      answer: 'The total course fee is ₹4,500. Students can pay in two easy installments: Installment 1 of ₹2,500 at the time of admission, and Installment 2 of ₹2,000 within 30 days. This fee covers the official full-color textbook, ERA cloud login, practical lab access, and final MSBTE board examination fees.'
    },
    {
      question: 'I have never used a computer before. Can I learn easily?',
      answer: 'Absolutely! At Prerna Computer Academy Degloor, our faculty starts from absolute basics (holding the mouse, keyboard finger placement, starting Windows) in friendly, patient Marathi and English. Every student gets their own individual PC with dedicated teacher support.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F172A]/70 border-t border-white/10 w-full relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30 text-xs font-bold text-accent-gold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-accent-gold" />
            <span>Frequently Asked Questions (FAQ)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Common Questions & Answers
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Clear, transparent guidance for students and parents before enrolling at Degloor.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="modern-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-accent-gold transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent-gold shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 bg-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
