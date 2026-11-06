import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  QrCode,
  FileBadge2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Building2,
  FileCheck
} from 'lucide-react';

interface CertificationShowcaseProps {
  onOpenEnrollment: () => void;
}

export const CertificationShowcase: React.FC<CertificationShowcaseProps> = ({ onOpenEnrollment }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'eligibility' | 'grading'>('certificate');

  return (
    <section id="certificate" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Award className="w-3.5 h-3.5" />
            <span>Official Government Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The MS-CIT <span className="text-gradient-emerald">Certificate Advantage</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Jointly certified by Maharashtra Knowledge Corporation Limited (MKCL) and the
            Maharashtra State Board of Technical Education (MSBTE). Recognized under state government resolutions.
          </p>

          {/* Interactive Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-4">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${activeTab === 'certificate' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
            >
              Certificate Anatomy
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${activeTab === 'eligibility' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
            >
              Govt Jobs Required
            </button>
            <button
              onClick={() => setActiveTab('grading')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${activeTab === 'grading' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
            >
              Grading Scheme
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'certificate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">

            {/* Visual Certificate Mockup */}
            <div className="lg:col-span-7">
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-slate-700 to-brand-500/30 shadow-2xl">
                <div className="bg-slate-900/90 rounded-[22px] p-6 sm:p-8 border border-slate-800 space-y-6">

                  {/* Certificate Top Header */}
                  <div className="text-center border-b border-slate-800 pb-5 space-y-1">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-xs border border-brand-500/40">
                        MKCL
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Government of Maharashtra
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/40">
                        MSBTE
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-amber-300 tracking-wider">
                      MAHARASHTRA STATE CERTIFICATE IN INFORMATION TECHNOLOGY
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      (Jointly Certified by MSBTE & MKCL)
                    </p>
                  </div>

                  {/* Body text simulated */}
                  <div className="text-center space-y-3 py-2">
                    <p className="text-xs text-slate-400">This is to certify that candidate</p>
                    <p className="text-lg sm:text-xl font-extrabold text-white tracking-wide border-b border-dashed border-slate-700 pb-1 max-w-sm mx-auto">
                      KUMAR RAHUL SHARMA
                    </p>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      has successfully completed the MS-CIT Course with distinction in practical skills,
                      operating system, Microsoft Office Suite, and Internet safety.
                    </p>
                  </div>

                  {/* Certificate Security Badges Row */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-center">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-amber-500/20">
                      <FileBadge2 className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                      <p className="text-[10px] font-bold text-slate-300">Security Hologram</p>
                      <p className="text-[9px] text-slate-400">Anti-Counterfeit</p>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-xl border border-brand-500/20">
                      <QrCode className="w-5 h-5 text-brand-400 mx-auto mb-1" />
                      <p className="text-[10px] font-bold text-slate-300">Digital QR Code</p>
                      <p className="text-[9px] text-slate-400">Instant Verification</p>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-xl border border-emerald-500/20">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                      <p className="text-[10px] font-bold text-slate-300">MSBTE Seal</p>
                      <p className="text-[9px] text-slate-400">Lifetime Validity</p>
                    </div>
                  </div>

                  {/* Scores Box */}
                  <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Internal ERA: 50/50</span>
                    <span className="text-slate-400">Online Exam: 48/50</span>
                    <span className="font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Total: 98% (Grade A+)
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Key Benefits */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Authentic, Tamper-Proof & Valid for Life
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your MS-CIT certificate comes with dual verification: an official physical document
                with holographic stamping and a cryptographically verifiable e-Certificate on MKCL's
                online ledger.
              </p>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Mandatory for State Govt Recruits',
                    desc: 'Required by Maharashtra Public Service Commission (MPSC), Talathi, and administrative postings.'
                  },
                  {
                    title: 'Accepted Across Corporate India',
                    desc: 'Proves high proficiency in modern Microsoft 365 applications for executive & back-office roles.'
                  },
                  {
                    title: 'DigiLocker Integration',
                    desc: 'Directly download your verified digital certificate into DigiLocker on your smartphone.'
                  },
                  {
                    title: 'No Expiration Date',
                    desc: 'Once cleared, your MS-CIT certification remains valid permanently with no renewal fee.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnrollment}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-brand-500 text-white font-bold text-xs uppercase tracking-wider shadow-glow-emerald hover:scale-105 transition-all"
                >
                  Enroll to Earn Your Certificate
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Government Recruitments */}
        {activeTab === 'eligibility' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {[
              {
                dept: 'MPSC (Maharashtra Public Service Commission)',
                roles: 'Clerk Typist, Tax Assistant, Assistant Section Officer (ASO)',
                rule: 'Compulsory at document verification'
              },
              {
                dept: 'Revenue & Land Records Department',
                roles: 'Talathi, Mandal Adhikari, Land Survey Clerks',
                rule: 'Essential computer literacy qualification'
              },
              {
                dept: 'Zilla Parishad & Panchayat Samiti',
                roles: 'Gram Sevak, Junior Assistant, Data Entry Operators',
                rule: 'Must submit before joining'
              },
              {
                dept: 'Maharashtra Police Department',
                roles: 'Police Constable, Wireless Operator, Computer Staff',
                rule: 'Mandatory technical certification'
              },
              {
                dept: 'Municipal Corporations (BMC, PMC, PCMC)',
                roles: 'Clerical Staff, Ward Officers, Billing Executives',
                rule: 'Required qualification criteria'
              },
              {
                dept: 'Nationalized & Cooperative Banks',
                roles: 'Clerks, Customer Service Associates, Cashiers',
                rule: 'Proof of office computer efficiency'
              }
            ].map((gov, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700">
                <Building2 className="w-8 h-8 text-brand-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-2">{gov.dept}</h4>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  <span className="font-semibold text-slate-200">Applicable Posts: </span>
                  {gov.roles}
                </p>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>{gov.rule}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Grading Scheme */}
        {activeTab === 'grading' && (
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 animate-fadeIn space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white text-center">
              MKCL Examination Mark Scheme & Grade Classifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                <span className="text-2xl font-black text-emerald-400">85%+</span>
                <p className="text-xs font-bold text-white mt-1">Grade A+ (Distinction)</p>
                <p className="text-[11px] text-slate-400 mt-1">Exemplary practical mastery</p>
              </div>

              <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4 text-center">
                <span className="text-2xl font-black text-brand-400">70% - 84%</span>
                <p className="text-xs font-bold text-white mt-1">Grade A (First Class)</p>
                <p className="text-[11px] text-slate-400 mt-1">Strong computer proficiency</p>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4 text-center">
                <span className="text-2xl font-black text-indigo-400">60% - 69%</span>
                <p className="text-xs font-bold text-white mt-1">Grade B (Second Class)</p>
                <p className="text-[11px] text-slate-400 mt-1">Competent digital skills</p>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                <span className="text-2xl font-black text-amber-400">40% - 59%</span>
                <p className="text-xs font-bold text-white mt-1">Grade C (Pass Class)</p>
                <p className="text-[11px] text-slate-400 mt-1">Minimum passing standard</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-white">Evaluation Split (100 Marks Total):</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li><strong className="text-slate-200">50 Marks Internal Assessment:</strong> Earned through daily ERA session assignments, "Take a Challenge", and "Do-It-Yourself" lab drills. Minimum 20 marks required.</li>
                <li><strong className="text-slate-200">50 Marks Final Online Exam:</strong> 50 objective & practical task questions conducted in the test environment. Minimum 20 marks required.</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
