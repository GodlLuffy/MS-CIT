import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  QrCode, 
  FileBadge2, 
  CheckCircle2, 
  Building2,
  FileCheck,
  Crown
} from 'lucide-react';

interface CertificationShowcaseProps {
  onOpenEnrollment: () => void;
}

export const CertificationShowcase: React.FC<CertificationShowcaseProps> = ({ onOpenEnrollment }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'eligibility' | 'grading'>('certificate');

  return (
    <section id="certificate" className="py-14 sm:py-20 bg-aubergine-950/80 relative overflow-hidden w-full">
      {/* Background radial gold/marigold gradient */}
      <div className="glow-orb-marigold w-80 h-80 sm:w-[600px] sm:h-[600px] top-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-xs font-bold text-marigold-400">
            <Crown className="w-3.5 h-3.5" />
            <span>Official Government Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The MS-CIT <span className="text-gradient-marigold">Certificate Advantage</span>
          </h2>
          <p className="text-silver-300 text-xs sm:text-base leading-relaxed">
            Jointly issued by Maharashtra Knowledge Corporation Limited (MKCL) and 
            Maharashtra State Board of Technical Education (MSBTE) to candidates of 
            Prerna Computer Academy Degloor.
          </p>

          {/* Interactive Toggle Tabs */}
          <div className="inline-flex max-w-full overflow-x-auto p-1 rounded-xl bg-aubergine-900 border border-marigold-500/25 mt-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'certificate' ? 'bg-marigold-500 text-aubergine-950 shadow-sm' : 'text-silver-300 hover:text-white'
              }`}
            >
              Certificate Anatomy
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'eligibility' ? 'bg-marigold-500 text-aubergine-950 shadow-sm' : 'text-silver-300 hover:text-white'
              }`}
            >
              Govt Jobs Required
            </button>
            <button
              onClick={() => setActiveTab('grading')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'grading' ? 'bg-marigold-500 text-aubergine-950 shadow-sm' : 'text-silver-300 hover:text-white'
              }`}
            >
              Grading Scheme
            </button>
          </div>
        </div>

        {/* Dynamic Tab 1: Certificate Anatomy */}
        {activeTab === 'certificate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            
            {/* Visual Certificate Mockup */}
            <div className="lg:col-span-7 w-full">
              <div className="relative p-0.5 sm:p-1 rounded-3xl bg-gradient-to-tr from-marigold-500/60 via-aubergine-600 to-amber-300/40 shadow-luxury">
                <div className="bg-aubergine-950/95 rounded-[22px] p-4 sm:p-7 border border-marigold-500/30 space-y-4 sm:space-y-5">
                  
                  {/* Certificate Top Header */}
                  <div className="text-center border-b border-marigold-500/20 pb-4 space-y-1">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-marigold-500/20 text-marigold-400 flex items-center justify-center font-black text-[10px] sm:text-xs border border-marigold-500/40">
                        MKCL
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-silver-200 uppercase tracking-widest">
                        Government of Maharashtra
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-aubergine-700 text-marigold-300 flex items-center justify-center font-black text-[10px] sm:text-xs border border-marigold-500/40">
                        MSBTE
                      </div>
                    </div>
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-marigold-400 tracking-wider">
                      MAHARASHTRA STATE CERTIFICATE IN INFORMATION TECHNOLOGY
                    </h3>
                    <p className="text-[11px] sm:text-xs text-silver-300 font-medium">
                      (Jointly Certified by MSBTE & MKCL • Authorized Center: Degloor)
                    </p>
                  </div>

                  {/* Body text simulated */}
                  <div className="text-center space-y-2 py-1">
                    <p className="text-[11px] sm:text-xs text-silver-400">This is to certify that candidate</p>
                    <p className="text-base sm:text-xl font-extrabold text-white tracking-wide border-b border-dashed border-marigold-500/40 pb-1 max-w-xs sm:max-w-sm mx-auto">
                      SANDEEP VISHWANATH SHINDE
                    </p>
                    <p className="text-[11px] sm:text-xs text-silver-200 max-w-md mx-auto leading-relaxed">
                      from <strong className="text-marigold-400">Prerna Computer Academy Degloor (Dist. Nanded)</strong> has successfully passed the MS-CIT Examination with exemplary distinction.
                    </p>
                  </div>

                  {/* Certificate Security Badges */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-marigold-500/20 text-center">
                    <div className="bg-aubergine-900/90 p-2 sm:p-2.5 rounded-xl border border-marigold-500/30">
                      <FileBadge2 className="w-4 h-4 sm:w-5 sm:h-5 text-marigold-400 mx-auto mb-1" />
                      <p className="text-[9px] sm:text-[10px] font-bold text-silver-100">Security Hologram</p>
                      <p className="text-[8px] sm:text-[9px] text-marigold-400">Anti-Counterfeit</p>
                    </div>

                    <div className="bg-aubergine-900/90 p-2 sm:p-2.5 rounded-xl border border-marigold-500/30">
                      <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-marigold-400 mx-auto mb-1" />
                      <p className="text-[9px] sm:text-[10px] font-bold text-silver-100">Digital QR Code</p>
                      <p className="text-[8px] sm:text-[9px] text-marigold-400">Instant Verification</p>
                    </div>

                    <div className="bg-aubergine-900/90 p-2 sm:p-2.5 rounded-xl border border-marigold-500/30">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-marigold-400 mx-auto mb-1" />
                      <p className="text-[9px] sm:text-[10px] font-bold text-silver-100">MSBTE Seal</p>
                      <p className="text-[8px] sm:text-[9px] text-marigold-400">Lifetime Validity</p>
                    </div>
                  </div>

                  {/* Scores Box */}
                  <div className="bg-aubergine-900/90 rounded-xl p-2.5 sm:p-3 border border-marigold-500/20 flex flex-wrap items-center justify-between text-[11px] sm:text-xs gap-1">
                    <span className="text-silver-300">Internal ERA: 50/50</span>
                    <span className="text-silver-300">Online Exam: 48/50</span>
                    <span className="font-extrabold text-marigold-400 bg-marigold-500/15 border border-marigold-500/30 px-2 py-0.5 rounded">
                      Total: 98% (Grade A+)
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Key Benefits */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                Official MKCL Certificate with Lifetime Validity
              </h3>
              <p className="text-silver-300 text-xs sm:text-sm leading-relaxed">
                When you complete your training at Prerna Computer Academy Degloor, you receive 
                an authentic certificate with a unique roll number and QR code verifiable on MKCL's 
                online portal and DigiLocker.
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    title: 'Compulsory for Nanded & Maharashtra Govt Recruitment',
                    desc: 'Required for Talathi, MPSC Clerical, Police Bharti, Zilla Parishad, and Gram Sevak positions.'
                  },
                  {
                    title: 'DigiLocker Integration',
                    desc: 'Directly download and store your verified MS-CIT certificate in DigiLocker on your Android or iPhone.'
                  },
                  {
                    title: 'Corporate IT Skills Recognition',
                    desc: 'Recognized by private firms, banks, schools, and offices for computer operator and data entry jobs.'
                  },
                  {
                    title: 'Permanent Lifetime Validity',
                    desc: 'No re-examination or renewal required. Valid for life once cleared.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-aubergine-900/70 border border-marigold-500/15">
                    <CheckCircle2 className="w-4 h-4 text-marigold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-silver-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenEnrollment}
                  className="btn-marigold px-6 py-3 rounded-xl text-xs uppercase tracking-wider active:scale-95 transition-all shadow-glow-marigold"
                >
                  Enroll at Prerna Academy to Earn Certificate
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Government Recruitments */}
        {activeTab === 'eligibility' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
            {[
              {
                dept: 'MPSC (Maharashtra Public Service Commission)',
                roles: 'Clerk Typist, Tax Assistant, ASO, Group C & D',
                rule: 'Mandatory during document verification'
              },
              {
                dept: 'Revenue Dept (Nanded District & Talathi)',
                roles: 'Degloor Talathi, Mandal Adhikari, Land Records Clerk',
                rule: 'Required computer proficiency certificate'
              },
              {
                dept: 'Nanded Zilla Parishad & Panchayat',
                roles: 'Gram Sevak, Shikshan Sevak, Junior Assistant',
                rule: 'Compulsory as per Maharashtra GR'
              },
              {
                dept: 'Maharashtra Police Department',
                roles: 'Police Constable, Wireless Operator, Office Assistant',
                rule: 'Compulsory technical qualification'
              },
              {
                dept: 'Degloor Municipal Council & Nagar Parishad',
                roles: 'Billing Operator, Tax Collector, Computer Clerks',
                rule: 'Eligible for computer literacy criteria'
              },
              {
                dept: 'District Cooperative & Nationalized Banks',
                roles: 'Customer Service Associate, Back-Office Assistant',
                rule: 'Valid proof of MS Office knowledge'
              }
            ].map((gov, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 sm:p-6 border border-marigold-500/20 hover:border-marigold-500/40">
                <Building2 className="w-7 h-7 text-marigold-400 mb-2.5" />
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{gov.dept}</h4>
                <p className="text-xs text-silver-300 mb-3 leading-relaxed">
                  <span className="font-semibold text-white">Applicable Posts: </span>
                  {gov.roles}
                </p>
                <div className="pt-2 border-t border-marigold-500/20 text-[11px] text-marigold-400 font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>{gov.rule}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Grading Scheme */}
        {activeTab === 'grading' && (
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-5 sm:p-8 border border-marigold-500/25 animate-fadeIn space-y-5">
            <h3 className="text-base sm:text-xl font-bold text-white text-center">
              MKCL Examination Mark Scheme & Grade Classifications
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-aubergine-900 border border-marigold-500/35 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-xl sm:text-2xl font-black text-marigold-400">85%+</span>
                <p className="text-xs font-bold text-white mt-1">Grade A+ (Distinction)</p>
                <p className="text-[10px] sm:text-[11px] text-silver-400 mt-0.5">Exemplary practical mastery</p>
              </div>

              <div className="bg-aubergine-900 border border-marigold-500/30 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-xl sm:text-2xl font-black text-white">70% - 84%</span>
                <p className="text-xs font-bold text-silver-100 mt-1">Grade A (First Class)</p>
                <p className="text-[10px] sm:text-[11px] text-silver-400 mt-0.5">Strong computer proficiency</p>
              </div>

              <div className="bg-aubergine-900 border border-marigold-500/20 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-xl sm:text-2xl font-black text-silver-200">60% - 69%</span>
                <p className="text-xs font-bold text-silver-300 mt-1">Grade B (Second Class)</p>
                <p className="text-[10px] sm:text-[11px] text-silver-400 mt-0.5">Competent digital skills</p>
              </div>

              <div className="bg-aubergine-900 border border-marigold-500/20 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-xl sm:text-2xl font-black text-silver-300">40% - 59%</span>
                <p className="text-xs font-bold text-silver-400 mt-1">Grade C (Pass Class)</p>
                <p className="text-[10px] sm:text-[11px] text-silver-400 mt-0.5">Minimum passing standard</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-aubergine-950 border border-marigold-500/20 text-xs text-silver-300 space-y-1.5">
              <p className="font-semibold text-white">Evaluation Split (100 Marks Total):</p>
              <ul className="list-disc pl-5 space-y-1 text-silver-400 text-[11px] sm:text-xs">
                <li><strong className="text-silver-200">50 Marks Internal Assessment:</strong> Continuous daily ERA sessions at Prerna Academy. Minimum 20 marks required.</li>
                <li><strong className="text-silver-200">50 Marks Final Online Exam:</strong> Conducted in the lab with automatic evaluation. Minimum 20 marks required.</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
