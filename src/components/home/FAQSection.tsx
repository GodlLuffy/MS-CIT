import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    <section className="py-14 sm:py-20 bg-white border-t border-aubergine-700/10 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-silver-100 border border-aubergine-700/15 text-xs font-bold text-aubergine-900">
            <HelpCircle className="w-3.5 h-3.5 text-marigold-600" />
            <span>Frequently Asked Questions (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-aubergine-900 tracking-tight">
            Common Questions & Answers
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700">
            Clear, transparent guidance for students and parents before enrolling at Degloor.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="editorial-card rounded-xl border border-aubergine-700/15 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-aubergine-900 hover:text-marigold-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-marigold-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-aubergine-700 leading-relaxed border-t border-aubergine-700/10 pt-3 bg-silver-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};