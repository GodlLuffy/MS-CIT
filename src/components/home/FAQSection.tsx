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
      question: 'शासकीय नोकऱ्यांसाठी MS-CIT प्रमाणपत्र अनिवार्य आहे का?',
      answer: 'होय, महाराष्ट्र शासनाच्या अधिकृत निर्णयानुसार (Government Resolution - GR), तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद, ग्रामसेवक व इतर सर्व राज्य शासकीय पदांच्या नियुक्तीसाठी व दस्तऐवज पडताळणीसाठी MS-CIT प्रमाणपत्र अनिवार्य आहे.'
    },
    {
      question: 'MS-CIT परीक्षेचा पॅटर्न कसा असतो?',
      answer: 'MS-CIT परीक्षा एकूण १०० गुणांची असते. यात ५० गुण अंतर्गत मूल्यमापन (ERA System - ५० पैकी किमान २० गुण उत्तीर्ण) आणि ५० गुण अंतिम ऑनलाइन प्रॅक्टिकल परीक्षा (५० पैकी किमान २० गुण उत्तीर्ण) असतात. उत्तीर्ण होण्यासाठी एकूण ४०% गुण आवश्यक असतात.'
    },
    {
      question: 'कोर्स फी किती आहे आणि हप्त्याने भरता येते का?',
      answer: 'MS-CIT कोर्सची संपूर्ण फी ₹४,५०० आहे. ही फी दोन सोप्या हप्त्यांमध्ये भरता येते: पहिला हप्ता ₹२,५०० (प्रवेशाच्या वेळी) आणि दुसरा हप्ता ₹२,००० (३० दिवसांनंतर). यामध्ये अधिकृत पुस्तक, ERA लॉगिन व परीक्षा शुल्क समाविष्ट आहे.'
    },
    {
      question: 'मी कधीही कॉम्प्युटर वापरला नाही, मला सहज शिकता येईल का?',
      answer: 'नक्कीच! प्रेरणा अकॅडमीमध्ये अगदी माउस पकडण्यापासून आणि कॉम्प्युटर सुरू करण्यापासून अत्यंत सोप्या मराठीत शिकवले जाते. प्रत्येक विद्यार्थ्याला स्वतंत्र कॉम्प्युटर दिला जातो आणि शिक्षक स्वतः जवळ उभे राहून प्रॅक्टिस करून घेतात.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-aubergine-700/10 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-silver-100 border border-aubergine-700/15 text-xs font-bold text-aubergine-900">
            <HelpCircle className="w-3.5 h-3.5 text-marigold-600" />
            <span>वारंवार विचारले जाणारे प्रश्न (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-aubergine-900 tracking-tight">
            महत्त्वाचे प्रश्न आणि उत्तरे
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700">
            प्रवेशापूर्वी पालकांच्या व विद्यार्थ्यांच्या मनातील शंकांचे निरसन.
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