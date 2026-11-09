import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Bot, 
  Cpu, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Code,
  Globe,
  FileSpreadsheet,
  Palette,
  Mic,
  MessageSquare,
  Zap
} from 'lucide-react';

interface AiSkillsHubProps {
  onOpenEnrollment: () => void;
}

export const AiSkillsHub: React.FC<AiSkillsHubProps> = ({ onOpenEnrollment }) => {
  const [activePersona, setActivePersona] = useState<'students' | 'youth' | 'govt' | 'citizens'>('govt');

  // The 4 Personas directly from official MKCL (कोणासाठी उपयुक्त?)
  const personas = [
    {
      id: 'govt',
      label: 'स्पर्धा परीक्षा व शासकीय नोकरी',
      sublabel: 'Govt. Job Aspirants',
      icon: ShieldCheck,
      headline: 'महाराष्ट्र शासकीय नोकऱ्यांसाठी १००% अनिवार्य अर्हता',
      badge: 'शासन निर्णय (GR) अधिकृत',
      description: 'तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद, ग्रामसेवक व नगरपरिषद भरतीमध्ये कागदपत्र पडताळणीसाठी MS-CIT प्रमाणपत्र बंधनकारक आहे.',
      skills: [
        'शासकीय कामांसाठी अचूक मराठी व इंग्रजी टायपिंग (30/40 WPM)',
        'शासन निर्णय (GR) व परिपत्रके डाउनलोड व डिजिटल ड्राफ्टिंग',
        'Aaple Sarkar, महाडीबीटी व सरकारी पोर्टल कामकाज',
        'MS Excel मध्ये मोठा डेटा व्यवस्थापन व फॉर्म्युला',
        'अधिकृत ई-मेल शिष्टाचार व सायबर सुरक्षा नियम'
      ],
      aiTools: ['ChatGPT (सरकारी ड्राफ्टिंग)', 'Gemini (डेटा समरी)', 'DigiLocker (कागदपत्रे)']
    },
    {
      id: 'youth',
      label: 'कॉलेज युवक व पदवीधर',
      sublabel: 'College & Job Seekers',
      icon: Briefcase,
      headline: 'कॉर्पोरेट व प्रायव्हेट नोकरीसाठी आधुनिक जॉब-रेडी स्किल्स',
      badge: 'जॉब रेडीनेस',
      description: 'फक्त बेसिक कॉम्प्युटर नाही, तर आजच्या मल्टिनॅशनल कंपन्यांमध्ये लागणारे आधुनिक AI टूल्स, ऑफिस ऑटोमेशन आणि प्रेझेंटेशन स्किल्स आत्मसात करा.',
      skills: [
        'Advanced MS Excel (VLOOKUP, XLOOKUP, Pivot Tables, Charts)',
        'Professional Resume & CV निर्मिती (AI टूल्सद्वारे)',
        'PowerPoint द्वारे प्रभावी कॉर्पोरेट प्रेझेंटेशन्स',
        'व्यावसायिक ई-मेल, Google Workspace & Cloud Drive',
        'इंटरव्ह्यू तयारीसाठी AI मॉक असिस्टंट्स'
      ],
      aiTools: ['Canva AI (ग्राफिक्स व प्रेझेंटेशन)', 'ChatGPT (रेझ्युमे बिल्डर)', 'Copilot (डेटा अ‍ॅनालिसिस)']
    },
    {
      id: 'students',
      label: 'शालेय व ज्युनियर कॉलेज विद्यार्थी',
      sublabel: 'School & 11th-12th Students',
      icon: GraduationCap,
      headline: '२१ व्या शतकातील डिजिटल बुद्धिमत्ता व कोडिंगची पायाभरणी',
      badge: 'पायाभूत संगणक शिक्षण',
      description: 'शालेय वयापासूनच संगणकाची योग्य हाताळणी, सुरक्षित इंटरनेट, सायबर सुरक्षा आणि लॉजिकल कोडिंग (Scratch) शिकून अभ्यासात आघाडी घ्या.',
      skills: [
        'संगणक आणि Windows 11 ची परिपूर्ण माहिती व कीबोर्ड प्रॅक्टिस',
        'Scratch प्रोग्रामिंगद्वारे बेसिक कोडिंग व लॉजिक बिल्डिंग',
        'शालेय प्रोजेक्ट्स, असाइनमेंट्स व सायन्स मॉडेल्स डिजिटल बनवणे',
        'सुरक्षित इंटरनेट वापर, सोशल मीडिया फ्रॉडपासून बचाव',
        'अभ्यासासाठी व होमवर्कसाठी शैक्षणिक AI टूल्सचा योग्य वापर'
      ],
      aiTools: ['Scratch (बेसिक कोडिंग)', 'Google Lens (अभ्यास शोध)', 'Voice Typing (माईकवर बोलून टायपिंग)']
    },
    {
      id: 'citizens',
      label: 'गृहिणी, व्यावसायिक व ज्येष्ठ नागरिक',
      sublabel: 'Homemakers & Business',
      icon: Smartphone,
      headline: 'दैनंदिन जीवन व व्यवसायासाठी स्वावलंबी डिजिटल साक्षरता',
      badge: 'डिजिटल स्वावलंबन',
      description: 'कोणावरही अवलंबून न राहता स्वतःचे बँक व्यवहार, मोबाईल पेमेंट्स, ऑनलाईन तिकिटे आणि शासकीय सेवा सहजतेने हाताळा.',
      skills: [
        'UPI, PhonePe, Google Pay व नेट बँकिंगचे सुरक्षित व्यवहार',
        'रेल्वे, बस तिकीट बुकिंग व ऑनलाईन खरेदी (Safe Shopping)',
        'लाईट बिल, पाणी बिल, गॅस बुकिंग व कर भरणे',
        'स्मार्टफोनमधील आवश्यक सरकारी अ‍ॅप्स (DigiLocker, UMANG)',
        'व्यवसायासाठी WhatsApp Business व डिजिटल कॅटलॉग'
      ],
      aiTools: ['Google Translate (भाषांतर)', 'Voice Assistant (व्हॉईस सर्च)', 'Truecaller / UPI Safety']
    }
  ];

  // Highlights directly matching mscit.mkcl.org/mr
  const modernAiTools = [
    { name: 'ChatGPT', role: 'AI ड्राफ्टिंग, निबंध, ई-मेल व लेटर रायटिंग', icon: '🤖' },
    { name: 'Google Gemini', role: 'माहिती शोध, सारांश व रिसर्च असिस्टंट', icon: '✨' },
    { name: 'Canva Magic AI', role: '१ क्लिकमध्ये आकर्षक पोस्टर्स, बॅनर व प्रेझेंटेशन्स', icon: '🎨' },
    { name: 'Voice Typing', role: 'मराठी व इंग्रजीत बोलून सेकंदात टायपिंग', icon: '🎙️' },
    { name: 'DigiLocker & Aaple Sarkar', role: 'सर्व सरकारी कागदपत्रे व दाखले ऑनलाईन मिळवा', icon: '🏛️' },
    { name: 'Scratch Coding', role: 'लॉजिक, गेम मेकिंग व शालेय कोडिंग स्किल्स', icon: '💻' },
    { name: 'MS Office 2024 AI', role: 'Word, Excel व PowerPoint चे स्मार्ट ऑटोमेशन', icon: '📊' },
    { name: 'Cyber & UPI Guard', role: 'ऑनलाईन फसवणूक व हॅकिंगपासून सुरक्षित राहण्याचे तंत्र', icon: '🛡️' }
  ];

  const currentPersona = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section id="ai-skills" className="py-16 sm:py-24 bg-[#1A0617] text-white relative w-full overflow-hidden border-t border-aubergine-800">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-marigold/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-aubergine/40 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Pill Directly from mscit.mkcl.org */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-marigold/15 border border-marigold/30 text-xs font-bold text-marigold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-marigold" />
            <span>MKCL MS-CIT नवीन अभ्यासक्रम • AI युगासाठी परिपूर्ण</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            १२५+ AI टूल्स आणि <span className="text-gradient-marigold">२५०+ डिजिटल कौशल्ये</span>
          </h2>
          
          <p className="text-xs sm:text-base text-ice/85 leading-relaxed max-w-2xl mx-auto">
            बदलत्या तंत्रज्ञान युगासोबत MS-CIT आता अधिक आधुनिक झाले आहे. 
            संगणक साक्षरतेसोबतच आधुनिक <strong>कृत्रिम बुद्धिमत्ता (AI)</strong> टूल्सचा प्रत्यक्ष सराव देणारा महाराष्ट्रातील एकमेव अधिकृत अभ्यासक्रम!
          </p>
        </div>

        {/* 1. Official MKCL Modern AI Tools Marquee Showcase */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ice/70 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-marigold" />
              <span>अभ्यासक्रमात समाविष्ट आधुनिक टूल्स व तंत्रज्ञान (Hands-on Practice):</span>
            </h3>
            <span className="text-[11px] text-marigold font-bold hidden sm:inline">
              १००% प्रॅक्टिकल लॅब सराव
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {modernAiTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-2xl bg-[#2A0B25] border border-white/10 hover:border-marigold/50 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-2.5 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white group-hover:text-marigold transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] text-ice/70 mt-1 leading-snug">
                    {tool.role}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-marigold font-semibold">
                  <span>लॅब सराव समाविष्ट</span>
                  <span>✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Interactive "कोणासाठी उपयुक्त?" (Who is it for?) Persona Matrix */}
        <div className="rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-[#240720] border border-marigold/30 shadow-luxury">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-marigold bg-marigold/15 px-3 py-1 rounded-full border border-marigold/30 inline-block mb-2">
                कोणासाठी उपयुक्त? (Target Audience Matrix)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                प्रत्येकासाठी आवश्यक असे उपयुक्त ज्ञान
              </h3>
            </div>
            <p className="text-xs text-ice/70 max-w-sm">
              शालेय विद्यार्थ्यांपासून ते सरकारी नोकरी इच्छुक आणि व्यावसायिकांपर्यंत, प्रत्येकाच्या गरजांनुसार खास सराव.
            </p>
          </div>

          {/* Persona Selection Pills */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
            {personas.map((p) => {
              const Icon = p.icon;
              const isSelected = activePersona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePersona(p.id as any)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-marigold/20 border-marigold text-white shadow-lg shadow-marigold/10 ring-1 ring-marigold'
                      : 'bg-white/5 border-white/10 text-ice/80 hover:bg-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-marigold text-aubergine-950 font-black' : 'bg-white/10 text-marigold'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-marigold animate-ping"></span>
                    )}
                  </div>
                  <div>
                    <strong className="block text-xs sm:text-sm font-bold text-white leading-tight">
                      {p.label}
                    </strong>
                    <span className="text-[10px] text-ice/60 block mt-0.5 font-medium">
                      {p.sublabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Persona Dynamic Detail Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPersona.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-white/5 rounded-2xl p-5 sm:p-7 border border-white/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-marigold tracking-widest block mb-1">
                    {currentPersona.badge}
                  </span>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-white">
                    {currentPersona.headline}
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-ice/70 font-semibold mr-1">मुख्य AI टूल्स:</span>
                  {currentPersona.aiTools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-marigold/15 text-marigold border border-marigold/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ice/85 leading-relaxed mb-6">
                {currentPersona.description}
              </p>

              {/* Skills Checklist */}
              <div className="space-y-2.5 mb-6">
                <h5 className="text-xs font-bold uppercase text-white tracking-wider">
                  या विभागात मिळणारी प्रत्यक्ष कौशल्ये:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPersona.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-ice/90 bg-white/5 p-3 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-ice/70">
                  <Bot className="w-4 h-4 text-marigold" />
                  <span><strong>MKCL ERA 2025</strong> ई-लर्निंग सिस्टीमद्वारे सोप्या मराठीत शिकण्याची सोय.</span>
                </div>

                <button
                  onClick={onOpenEnrollment}
                  className="btn-gold w-full sm:w-auto text-xs py-3 px-6 uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-marigold-glow"
                >
                  <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
                  <span>या कोर्ससाठी प्रवेश घ्या</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* 3. Official Trust Milestone Banner (२ कोटी+ विद्यार्थ्यांचा विश्वास) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#2A0B25] border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white block">२ कोटी+</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">महाराष्ट्रात यशस्वी विद्यार्थी (२००१ पासून)</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-marigold block">५,०००+</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">देगलूरमधील प्रमाणित विद्यार्थी</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white block">१००%</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">महाराष्ट्र शासनमान्य (GR Valid)</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-400 block">१:१ PC</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">प्रत्येकाला स्वतंत्र कॉम्प्युटर सराव</span>
          </div>
        </div>

      </div>
    </section>
  );
};
