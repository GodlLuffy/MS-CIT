import React from 'react';
import { Award, Monitor, Users, Clock, CheckCircle2, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const pillars = [
    {
      icon: Award,
      title: 'शासनमान्य प्रमाणपत्र (Govt. GR Recognized)',
      subtitle: 'MKCL & MSBTE Joint Certification',
      desc: 'महाराष्ट्र शासनाच्या अधिकृत निर्णयानुसार (GR) सर्व सरकारी सेवांमध्ये (तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद, ग्रामसेवक) MS-CIT प्रमाणपत्र अनिवार्य व वैध ठरते.',
      highlight: 'Valid for all Govt. Jobs'
    },
    {
      icon: Monitor,
      title: '१ विद्यार्थी : १ कॉम्प्युटर (1:1 Lab Practicals)',
      subtitle: 'High-Tech ERA 2025 Server Lab',
      desc: 'प्रत्येक विद्यार्थ्याला स्वतंत्र कॉम्प्युटर दिला जातो. Windows 11, MS Office, इंटरनेट आणि टायपिंगची दररोज २ तास प्रत्यक्ष प्रॅक्टिस करून घेतली जाते.',
      highlight: '100% Practical Practice'
    },
    {
      icon: Users,
      title: 'मराठी व इंग्रजी सुलभ मार्गदर्शन',
      subtitle: 'Beginner-Friendly Expert Faculty',
      desc: 'कॉम्प्युटर कधीही न वापरलेल्या विद्यार्थ्यांसाठीही अगदी बेसिकपासून अत्यंत सोप्या मराठीत मार्गदर्शन. शंकांचे तत्काळ निरसन आणि वैयक्तिक लक्ष.',
      highlight: 'Simple & Step-by-Step'
    },
    {
      icon: Clock,
      title: 'सोयीस्कर बॅचेस व सुलभ फी (₹4,500)',
      subtitle: 'Flexible Morning, Day & Evening Slots',
      desc: 'सकाळी ७:३० पासून संध्याकाळी ७:०० पर्यंत विविध बॅचेस. कॉलेज विद्यार्थी व नोकरदारांसाठी सोयीस्कर. फी २ सोप्या हप्त्यांमध्ये भरण्याची सुविधा (₹2,500 + ₹2,000).',
      highlight: '2 Easy Installments'
    }
  ];

  return (
    <section id="pillars" className="py-14 sm:py-20 bg-white border-y border-aubergine-700/10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-marigold-500/15 px-3 py-1 rounded-full border border-marigold-500/30">
            Why Prerna Academy Degloor
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-aubergine-900 tracking-tight">
            देगलूरमधील सर्वोत्तम MS-CIT प्रशिक्षण केंद्र
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700">
            गेल्या १५ वर्षांपासून हजारो विद्यार्थ्यांना डिजिटल साक्षर बनवणारे अग्रगण्य इन्स्टिट्यूट.
          </p>
        </div>

        {/* 4 Clean Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-aubergine-700 text-marigold-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-silver-100 text-aubergine-800 border border-aubergine-700/15">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-aubergine-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-marigold-600 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aubergine-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-aubergine-700/10 flex items-center gap-1.5 text-xs font-bold text-aubergine-900">
                  <CheckCircle2 className="w-4 h-4 text-marigold-500" />
                  <span>प्रवेशासाठी अधिकृत हमी आणि सहकार्य</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Bottom CTA strip */}
        <div className="mt-10 p-5 rounded-2xl bg-aubergine-900 text-silver-100 flex flex-col sm:flex-row items-center justify-between gap-4 border border-aubergine-800 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              नवीन बॅचमध्ये आपली सीट आजच आरक्षित करा!
            </h4>
            <p className="text-xs text-silver-300">
              मर्यादित सीट्स उपलब्ध • १ दिवसाचा मोफत डेमो क्लास उपलब्ध
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-marigold px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
          >
            आरक्षण करा (Free Demo)
          </button>
        </div>

      </div>
    </section>
  );
};