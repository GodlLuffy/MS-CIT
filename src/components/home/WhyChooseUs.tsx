import React from 'react';
import { Award, Monitor, Users, Clock, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const pillars = [
    {
      icon: Award,
      title: 'शासनमान्य प्रमाणपत्र (Govt. GR Recognized)',
      subtitle: 'MKCL आणि MSBTE संयुक्त अधिकृत प्रमाणन',
      desc: 'महाराष्ट्र शासनाच्या अधिकृत निर्णयानुसार (GR) सर्व शासकीय सेवांमध्ये (तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद, ग्रामसेवक) MS-CIT प्रमाणपत्र अनिवार्य व दस्तऐवज पडताळणीसाठी १००% वैध ठरते.',
      highlight: 'सर्व सरकारी नोकऱ्यांसाठी वैध'
    },
    {
      icon: Monitor,
      title: '१ विद्यार्थी : १ संगणक (1:1 Practical Lab)',
      subtitle: 'High-Tech ERA 2025 आधुनिक लॅब',
      desc: 'प्रत्येक विद्यार्थ्याला स्वतंत्र कॉम्प्युटर दिला जातो. Windows 11, MS Office 2024, टायपिंग आणि इंटरनेटचा दररोज २ तास प्रत्यक्ष प्रॅक्टिकल सराव करून घेतला जातो.',
      highlight: '१००% प्रत्यक्ष सराव (Practice)'
    },
    {
      icon: Users,
      title: 'सोप्या मराठीत वैयक्तिक मार्गदर्शन',
      subtitle: 'Step-by-Step Friendly Guidance',
      desc: 'पूर्वी कॉम्प्युटर कधीही न वापरलेल्या विद्यार्थ्यांसाठीही अगदी बेसिकपासून (माउस व कीबोर्ड पकडण्यापासून) अत्यंत सोप्या मराठीत मार्गदर्शन. शंकांचे जागेवरच निरसन केले जाते.',
      highlight: 'अगदी बेसिकपासून शिकवणी'
    },
    {
      icon: Clock,
      title: 'सोयीस्कर बॅचेस व सुलभ फी (₹४,५००)',
      subtitle: 'सकाळी, दुपार व संध्याकाळच्या बॅचेस',
      desc: 'सकाळी ७:३० पासून संध्याकाळी ७:०० पर्यंत विविध बॅचेस. कॉलेज विद्यार्थी व नोकरदारांसाठी सोयीस्कर वेळ. फी २ सोप्या हप्त्यांमध्ये (₹२,५०० + ₹२,०००) भरण्याची पूर्ण सुविधा.',
      highlight: '२ सोप्या हप्त्यांची सोय'
    }
  ];

  return (
    <section id="pillars" className="py-14 sm:py-20 bg-aubergine-900/60 border-y border-aubergine-800 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-400 bg-marigold-500/15 px-3 py-1 rounded-full border border-marigold-500/30">
            प्रेरणा अकॅडमीची प्रमुख वैशिष्ट्ये
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-silver-100 tracking-tight">
            देगलूरमधील अग्रगण्य MS-CIT प्रशिक्षण केंद्र
          </h2>
          <p className="text-xs sm:text-sm text-silver-300">
            गेल्या १५ वर्षांपासून हजारो विद्यार्थ्यांना डिजिटल साक्षर बनवणारे विश्वासू केंद्र.
          </p>
        </div>

        {/* 4 Luxury Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-aubergine-800 text-marigold-400 flex items-center justify-center shrink-0 border border-marigold-500/30 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-aubergine-950 text-marigold-300 border border-marigold-500/30">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-silver-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-marigold-400 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-silver-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-aubergine-800 flex items-center gap-1.5 text-xs font-bold text-marigold-300">
                  <CheckCircle2 className="w-4 h-4 text-marigold-400" />
                  <span>प्रवेशासाठी अधिकृत गुणवत्ता हमी आणि सहकार्य</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-aubergine-800 text-silver-100 flex flex-col sm:flex-row items-center justify-between gap-4 border border-marigold-500/30 shadow-lg">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              नवीन बॅचमध्ये आपली जागा आजच निश्चित करा!
            </h4>
            <p className="text-xs text-silver-300">
              मर्यादित सीट्स उपलब्ध • १ दिवसाचा मोफत डेमो क्लास (Free Demo) उपलब्ध
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-marigold px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
          >
            जागा आरक्षित करा (Book Seat)
          </button>
        </div>

      </div>
    </section>
  );
};