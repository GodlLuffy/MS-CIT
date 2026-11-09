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
  const [activePersona, setActivePersona] = useState<'govt' | 'youth' | 'students' | 'citizens'>('govt');

  // 4 Clear Target Audience Personas
  const personas = [
    {
      id: 'govt',
      label: 'Govt. Job Aspirants',
      sublabel: 'स्पर्धा परीक्षा व शासकीय नोकरी',
      icon: ShieldCheck,
      headline: '100% Mandatory Eligibility for Maharashtra Govt. Services',
      badge: 'Govt. GR Approved',
      description: 'Required during document verification for Talathi, Police Bharti, MPSC, Zilla Parishad, Gram Sevak, and Nagar Parishad recruitments across Maharashtra.',
      skills: [
        'Accurate Marathi & English touch-typing for official office drafting',
        'Downloading and processing Maharashtra Govt Resolutions (GR) & circulars',
        'Hands-on Aaple Sarkar, MahaDBT, and citizen services navigation',
        'Large dataset management & essential formulas in Microsoft Excel',
        'Official email etiquette, cybersecurity hygiene, and document security'
      ],
      aiTools: ['ChatGPT (Official Drafting)', 'Gemini (Data Summary)', 'DigiLocker (Govt Documents)']
    },
    {
      id: 'youth',
      label: 'College Students & Graduates',
      sublabel: 'कॉलेज युवक व पदवीधर',
      icon: Briefcase,
      headline: 'Modern Job-Ready Skills for Corporate & Private Careers',
      badge: 'Job Readiness',
      description: 'Beyond basic computer skills: learn the modern office automation, spreadsheet analytics, and AI productivity tools demanded by multinational and local employers.',
      skills: [
        'Advanced Microsoft Excel: VLOOKUP, XLOOKUP, Pivot Tables, and visual charts',
        'Professional ATS-friendly Resume & Cover Letter drafting using AI tools',
        'Executive PowerPoint presentations with morph transitions & clean typography',
        'Business email communication, Google Workspace, and cloud file sharing',
        'Introductory Canva graphic design for social media and business posters'
      ],
      aiTools: ['Canva Magic AI (Designs)', 'Copilot (Excel Formulas)', 'DeepL (Language Translation)']
    },
    {
      id: 'students',
      label: 'School Students (8th - 12th)',
      sublabel: 'शालेय विद्यार्थी',
      icon: GraduationCap,
      headline: 'Strong Digital Foundation & Logical Thinking for Young Minds',
      badge: 'Digital Foundation',
      description: 'Prepare for higher studies and digital competitions with touch-typing speed, safe internet research, and creative computer presentation skills.',
      skills: [
        'Fast 10-finger English and Marathi touch-typing on real keyboards',
        'Educational project reports, essays, and science presentation design',
        'Basic coding logic and problem-solving through interactive Scratch drills',
        'Safe web browsing, copyright awareness, and cyber fraud avoidance',
        'Productive educational AI use for academic homework and study summaries'
      ],
      aiTools: ['Scratch (Coding Logic)', 'Google Lens (Visual Search)', 'Voice Typing (Speech to Text)']
    },
    {
      id: 'citizens',
      label: 'Homemakers & Business Owners',
      sublabel: 'गृहिणी व व्यावसायिक',
      icon: Smartphone,
      headline: 'Independent Digital Literacy for Daily Life & Small Business',
      badge: 'Digital Independence',
      description: 'Handle your own bank transfers, online payments, train tickets, electricity bills, and citizen services with total confidence without depending on anyone.',
      skills: [
        'Safe UPI transactions, PhonePe, Google Pay, and online net banking',
        'IRCTC train reservations, bus passes, and secure online shopping',
        'Online bill settlement: electricity, water, municipal property tax & cylinder booking',
        'Essential government mobile apps: DigiLocker, UMANG, and Aadhaar services',
        'WhatsApp Business digital product catalog setup for local retail & shopkeeping'
      ],
      aiTools: ['Google Translate (Multilingual)', 'Voice Search (Hindi/Marathi)', 'UPI Safety Guard']
    }
  ];

  // 8 Modern Workplace Tools
  const modernAiTools = [
    { name: 'ChatGPT', role: 'AI drafting, email writing & resume building', icon: '🤖' },
    { name: 'Google Gemini', role: 'Quick research, information summaries & study', icon: '✨' },
    { name: 'Canva Magic AI', role: 'Create promotional posters, flyers & slides in 1 click', icon: '🎨' },
    { name: 'Voice Typing', role: 'Speak in Marathi or English for instant accurate typing', icon: '🎙️' },
    { name: 'DigiLocker & Aaple Sarkar', role: 'Official government certificate & document downloads', icon: '🏛️' },
    { name: 'Scratch Coding', role: 'Introductory logic & creative digital problem-solving', icon: '💻' },
    { name: 'MS Office 2024 AI', role: 'Automated formulas, table formatting & presentations', icon: '📊' },
    { name: 'Cyber & UPI Guard', role: 'Protection against phishing, online scams & OTP fraud', icon: '🛡️' }
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
            <span>Updated MKCL MS-CIT Syllabus • Future-Ready for the AI Era</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            125+ AI Tools & <span className="text-gradient-marigold">250+ Digital Workplace Skills</span>
          </h2>
          
          <p className="text-xs sm:text-base text-ice/85 leading-relaxed max-w-2xl mx-auto">
            The MS-CIT curriculum combines fundamental computer literacy with modern Generative AI tools — empowering you for Maharashtra government jobs, college projects, and private careers.
          </p>
        </div>

        {/* 1. Modern Tools Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ice/70 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-marigold" />
              <span>Modern Tools & Practical Technologies Mastered:</span>
            </h3>
            <span className="text-[11px] text-marigold font-bold hidden sm:inline">
              100% Practical Hands-on Drills
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
                  <span>Lab Practice Included</span>
                  <span>✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Interactive "Who is MS-CIT for?" Persona Matrix */}
        <div className="rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-[#240720] border border-marigold/30 shadow-luxury">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-marigold bg-marigold/15 px-3 py-1 rounded-full border border-marigold/30 inline-block mb-2">
                Who is MS-CIT For? (कोणासाठी उपयुक्त?)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Tailored Learning for Every Goal
              </h3>
            </div>
            <p className="text-xs text-ice/70 max-w-sm">
              From school students and competitive exam aspirants to homemakers and business owners — customized practical training for all.
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
                  <span className="text-[11px] text-ice/70 font-semibold mr-1">Key AI Tools:</span>
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
                  Key Skills Acquired in this Track:
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
                  <span>Interactive <strong>MKCL ERA 2025</strong> learning system with patient individual guidance.</span>
                </div>

                <button
                  onClick={onOpenEnrollment}
                  className="btn-gold w-full sm:w-auto text-xs py-3 px-6 uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-marigold-glow"
                >
                  <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
                  <span>Enroll in this Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* 3. Official Trust Milestone Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#2A0B25] border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white block">2 Crore+</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">Students Certified across Maharashtra</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-marigold block">5,000+</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">Certified Alumni in Degloor</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white block">100%</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">Govt. GR Valid for State Jobs</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-400 block">1:1 PC</span>
            <span className="text-xs text-ice/70 font-medium mt-1 block">Individual Computer for Every Student</span>
          </div>
        </div>

      </div>
    </section>
  );
};
