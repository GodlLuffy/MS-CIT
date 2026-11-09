import React from 'react';
import { motion } from 'framer-motion';
import { Award, Monitor, Users, Clock, CheckCircle2, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnrollment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnrollment }) => {
  const pillars = [
    {
      icon: Award,
      badge: 'शासन निर्णय (GR) अधिकृत',
      title: 'शासनमान्य प्रमाणपत्र (MKCL & MSBTE)',
      subtitle: 'Government Job Eligibility • शासकीय भरतीसाठी अनिवार्य',
      desc: 'महाराष्ट्र शासनाच्या अधिकृत शासन निर्णयानुसार (GR) तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद, ग्रामसेवक व न्यायालयीन लिपिक या सर्व शासकीय नोकऱ्यांच्या कागदपत्र पडताळणीसाठी (Document Verification) MS-CIT प्रमाणपत्र १००% ग्राह्य व अनिवार्य आहे.',
      highlight: 'सर्व शासकीय नोकऱ्यांसाठी वैध',
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200'
    },
    {
      icon: Monitor,
      badge: '१ विद्यार्थी : १ PC गॅरंटी',
      title: 'प्रत्येकासाठी स्वतंत्र संगणक (1:1 Lab)',
      subtitle: 'ERA 2025 Server Lab • नो शेअरिंग, रोज प्रॅक्टिकल',
      desc: 'कोणत्याही विद्यार्थ्याला कॉम्प्युटर शेअर करावा लागत नाही. प्रत्येकाला स्वतःचे स्वतंत्र PC वर्कस्टेशन मिळते. Windows 11, MS Office 2024, मराठी टायपिंग व ERA सिस्टीमवर रोज २ तास प्रत्यक्ष प्रॅक्टिकल सराव घेतला जातो.',
      highlight: '१००% प्रत्यक्ष प्रॅक्टिकल सराव',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200'
    },
    {
      icon: HeartHandshake,
      badge: 'मराठीतून सोप्या भाषेत',
      title: 'शून्यापासून शिकवणी (Personal Mentorship)',
      subtitle: 'Zero Prior Knowledge Required • कौटुंबिक वातावरण',
      desc: 'यापूर्वी कधीही संगणकाला हात लावला नसला तरी काळजी करू नका! आमचे अनुभवी शिक्षक माउस पकडण्यापासून, कीबोर्ड टायपिंग, फाईल सेव्ह करणे ते थेट ऑनलाइन फॉर्म भरणे व AI साधने अत्यंत आपुलकीने व सोप्या भाषेत शिकवतात.',
      highlight: 'शून्यापासून सुरुवात करणाऱ्यांसाठी उत्तम',
      tagColor: 'text-purple-800 bg-purple-50 border-purple-200'
    },
    {
      icon: Clock,
      badge: 'पारदर्शक फी व २ हप्ते',
      title: 'सोयीस्कर बॅचेस व ₹४,५०० फी योजना',
      subtitle: 'Morning, Afternoon & Evening • ₹२,५०० + ₹२,०००',
      desc: 'सकाळी ०७:३० ते संध्याकाळी ०७:०० पर्यंत कॉलेज विद्यार्थी व गृहिणींसाठी सोयीच्या बॅचेस. एकूण फी फक्त ₹४,५०० असून ती २ सोप्या हप्त्यांत भरता येते. यामध्ये अधिकृत रंगीत पुस्तक, ERA लॉगिन व बोर्ड परीक्षा फी समाविष्ट आहे.',
      highlight: '२ सोप्या हप्त्यांची सुविधा',
      tagColor: 'text-blue-800 bg-blue-50 border-blue-200'
    }
  ];

  return (
    <section id="pillars" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-ice w-full relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-ice/60 px-3.5 py-1 rounded-full border border-ice inline-block">
            Why Prerna Academy Degloor • आमची वैशिष्ट्ये
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-aubergine tracking-tight">
            देगलूरमधील अग्रगण्य व विश्वासार्ह <br className="hidden sm:inline" />
            <span className="text-gradient-marigold">MS-CIT कॉम्प्युटर इन्स्टिट्यूट</span>
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/75 max-w-2xl mx-auto leading-relaxed">
            गेल्या २० वर्षांपासून देगलूर, बिलोली, मुखेड व धर्माबाद परिसरातील हजारो विद्यार्थ्यांना शासकीय सेवेसाठी व उज्ज्वल भविष्यासाठी सक्षम बनवणारी संस्था.
          </p>
        </div>

        {/* 4 Fresh Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="modern-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-ice hover:border-marigold transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-aubergine text-marigold flex items-center justify-center shrink-0 shadow-sm border border-marigold/30 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-aubergine mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-marigold-600 mb-3 tracking-wide">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aubergine/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-ice flex items-center justify-between text-xs font-semibold text-aubergine/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-800 font-bold">{item.highlight}</span>
                  </div>
                  <span className="text-[11px] text-aubergine/50 hidden sm:inline">प्रवेश चालू आहेत</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA Banner */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-aubergine text-white border border-aubergine-800 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-luxury">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-marigold">
              प्रत्यक्ष अनुभव घ्या (Take a Free Lab Demo)
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              आजच अकॅडमीला भेट द्या आणि प्रत्यक्ष लॅब पहा!
            </h4>
            <p className="text-xs text-ice/80">
              रामपूर रोड, ग्लोबल इंग्लिश स्कूल जवळ, देगलूर • हेल्पलाइन: +91 99703 62555
            </p>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="btn-gold py-3 px-7 rounded-full text-xs font-extrabold uppercase tracking-wider shrink-0 cursor-pointer shadow-marigold-glow"
          >
            मोफत डेमो प्रॅक्टिकल बुक करा
          </button>
        </div>

      </div>
    </section>
  );
};
