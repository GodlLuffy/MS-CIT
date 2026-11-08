import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon, TelephoneIcon } from '../common/Icons';

interface FaqItem {
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Is the MS-CIT certificate compulsory for government jobs in Maharashtra?',
      answer: 'Yes. As per the official Maharashtra Government Resolution (शासन निर्णय - GR), an MS-CIT certificate jointly issued by MKCL and MSBTE is mandatory for selection and document verification in state government services, including Talathi, Police Bharti, MPSC, Zilla Parishad, Gram Sevak, and municipal corporations.',
      highlight: 'Mandatory by Maharashtra Govt GR'
    },
    {
      question: 'What is the MS-CIT examination pattern and passing criteria?',
      answer: 'The MS-CIT final exam carries 100 marks. It is split into two parts: 50 marks for Continuous Internal Evaluation (ERA e-Learning system - minimum 20 marks to pass) and 50 marks for the Final Online Practical Examination (minimum 20 marks to pass). An aggregate score of 40% is required to earn the official joint certificate.',
      highlight: '50 ERA + 50 Online Practical = 100 Marks'
    },
    {
      question: 'What is the course fee and is an installment option available?',
      answer: 'The total course fee is ₹4,500. To support students and parents, we offer an easy 2-installment option: Installment 1 of ₹2,500 at admission, and Installment 2 of ₹2,000 within 30 days. The fee includes the official full-color textbook, ERA cloud login, dedicated 1:1 computer lab practice, and MSBTE final board exam fee.',
      highlight: '₹4,500 All-Inclusive (2 Installments)'
    },
    {
      question: 'I have never touched or used a computer before. Can I learn easily?',
      answer: 'Absolutely! At Prerna Computer Academy Degloor, our faculty starts from absolute zero: holding the mouse, keyboard finger typing, turning on Windows, and simple folders. Everything is explained in patient, comfortable Marathi & English. With our 1 Student : 1 PC setup, you get ample hands-on practice without any pressure.',
      highlight: 'Zero Prior Knowledge Required'
    },
    {
      question: 'Do you teach Marathi Typing and Modern AI Tools (like ChatGPT)?',
      answer: 'Yes! Along with standard English typing, we train you in Marathi Unicode typing (ISM typing) which is essential for court, tehsil, and government office work. We also introduce practical AI tools like ChatGPT for drafting emails, creating resumes, and smart productivity.',
      highlight: 'Marathi Typing + Practical AI Skills'
    },
    {
      question: 'What are the batch timings and where is the academy located in Degloor?',
      answer: 'We operate daily from 07:30 AM to 07:00 PM with Morning, Afternoon, Evening, and special Weekend batches. We are conveniently located Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded). Direct calls & WhatsApp assistance are available at +91 99758 75005.',
      highlight: 'Daily 07:30 AM – 07:00 PM Slots'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-ice w-full relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-ice text-xs font-bold text-aubergine shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-marigold-600" />
            <span>Frequently Asked Questions (FAQ)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-aubergine tracking-tight">
            Clear Answers for Your Admission
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/70 max-w-xl mx-auto">
            Everything students and parents need to know about MS-CIT certification, fees, exams, and practical labs at Degloor.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-ice hover:border-marigold transition-all duration-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-aubergine hover:text-marigold-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 pr-2">
                    <span className="font-serif text-base sm:text-lg block leading-snug">
                      {faq.question}
                    </span>
                    {faq.highlight && !isOpen && (
                      <span className="inline-block text-[10px] font-bold text-marigold-700 bg-marigold/10 px-2 py-0.5 rounded-full border border-marigold/20">
                        {faq.highlight}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-ice/50 flex items-center justify-center shrink-0 border border-ice">
                    <ChevronDown
                      className={`w-4 h-4 text-aubergine transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-marigold-600' : ''
                      }`}
                    />
                  </div>
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
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-aubergine/80 leading-relaxed border-t border-ice/60 pt-4 bg-[#FAF9F6]/60">
                        <p>{faq.answer}</p>
                        {faq.highlight && (
                          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-marigold-700">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{faq.highlight}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-ice shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-aubergine text-sm sm:text-base">
              Have another question?
            </h4>
            <p className="text-xs text-aubergine/70">
              Speak directly with our institute head or send a WhatsApp message anytime.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919975875005"
              className="px-4 py-2 rounded-full bg-ice/60 border border-ice hover:border-marigold text-xs font-bold text-aubergine transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <TelephoneIcon className="w-3.5 h-3.5 text-marigold-600" />
              <span className="whitespace-nowrap">Call: 99758 75005</span>
            </a>
            <a
              href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20have%20a%20question%20about%20MS-CIT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-4 py-2 text-xs font-bold whitespace-nowrap flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-aubergine-950" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};