import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  QrCode, 
  FileBadge2, 
  CheckCircle2, 
  Building2,
  FileCheck,
  Crown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificationShowcaseProps {
  onOpenEnrollment: () => void;
}

export const CertificationShowcase: React.FC<CertificationShowcaseProps> = ({ onOpenEnrollment }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'eligibility' | 'grading'>('certificate');

  const govtJobs = [
    {
      post: 'Talathi (तलाठी भरती)',
      department: 'Revenue & Forest Dept, Maharashtra',
      status: 'Mandatory',
      gr: 'GR No. MAT-2002/CR-2/02/18-A',
      detail: 'Mandatory during document verification; required before joining.'
    },
    {
      post: 'Police Bharti (पोलीस शिपाई / चालक)',
      department: 'Home Department, Govt of Maharashtra',
      status: 'Mandatory',
      gr: 'Police Recruitment Rules Act',
      detail: 'Compulsory certificate for all qualified constable applicants.'
    },
    {
      post: 'Zilla Parishad & Gram Sevak (जि.प. भरती)',
      department: 'Rural Development Dept',
      status: 'Mandatory',
      gr: 'Rural Admin Resolution',
      detail: 'Mandatory for Junior Assistant, Gram Sevak, and Health staff.'
    },
    {
      post: 'MPSC State Services (महाराष्ट्र लोकसेवा आयोग)',
      department: 'General Administrative Dept (GAD)',
      status: 'Mandatory',
      gr: 'MPSC Official Notification',
      detail: 'Required for all Group A, B, and C executive & clerical services.'
    },
    {
      post: 'Court Clerk & Typist (जिल्हा व सत्र न्यायालय)',
      department: 'High Court of Bombay & District Courts',
      status: 'Mandatory',
      gr: 'Judiciary Recruitment Board',
      detail: 'MS-CIT + Typing certificate required for document verification.'
    }
  ];

  const gradingTiers = [
    { grade: 'Distinction', marks: '85% to 100%', badge: 'विशेष प्राविण्य', desc: 'Highest recognition with golden distinction seal on certificate.' },
    { grade: 'Grade A+', marks: '75% to 84%', badge: 'प्रथम श्रेणी', desc: 'Demonstrates outstanding competence across all practical lab drills.' },
    { grade: 'Grade A', marks: '60% to 74%', badge: 'द्वितीय श्रेणी', desc: 'Proficient across office automation, OS, and modern AI tools.' },
    { grade: 'Passing', marks: '40% to 59%', badge: 'उत्तीर्ण', desc: 'Minimum 20/50 in Internal ERA + 20/50 in Final Practical Exam.' },
  ];

  return (
    <section id="certificate" className="py-16 sm:py-24 bg-[#FAF9F6] relative overflow-hidden w-full border-t border-ice scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ice/60 border border-ice text-xs font-bold text-aubergine shadow-sm">
            <Crown className="w-3.5 h-3.5 text-marigold-600" />
            <span>Govt. Recognized Certification • MKCL & MSBTE Joint Award (शासनमान्य)</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-aubergine tracking-tight">
            The MS-CIT <span className="text-gradient-marigold">Certificate Advantage</span>
          </h2>
          
          <p className="text-aubergine/70 text-xs sm:text-base leading-relaxed">
            Jointly certified by <strong>MKCL</strong> and <strong>MSBTE</strong> (Maharashtra State Board of Technical Education) — officially recognized across all Maharashtra State Government services.
          </p>

          {/* Interactive Toggle Tabs */}
          <div className="inline-flex max-w-full overflow-x-auto p-1.5 rounded-2xl bg-white border border-ice shadow-sm mt-3">
            <button
              onClick={() => setActiveTab('certificate')}
              style={{
                backgroundColor: activeTab === 'certificate' ? '#3A0F34' : 'transparent',
                color: activeTab === 'certificate' ? '#FFFFFF' : '#2A0B25',
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'certificate' ? 'shadow-md' : 'hover:bg-ice/40'
              }`}
            >
              Certificate Anatomy
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              style={{
                backgroundColor: activeTab === 'eligibility' ? '#3A0F34' : 'transparent',
                color: activeTab === 'eligibility' ? '#FFFFFF' : '#2A0B25',
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'eligibility' ? 'shadow-md' : 'hover:bg-ice/40'
              }`}
            >
              Govt Jobs Mandate (GR)
            </button>
            <button
              onClick={() => setActiveTab('grading')}
              style={{
                backgroundColor: activeTab === 'grading' ? '#3A0F34' : 'transparent',
                color: activeTab === 'grading' ? '#FFFFFF' : '#2A0B25',
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'grading' ? 'shadow-md' : 'hover:bg-ice/40'
              }`}
            >
              Marks & Grading System
            </button>
          </div>
        </div>

        {/* Tab 1: Certificate Anatomy with Interactive Mockup */}
        {activeTab === 'certificate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            
            {/* Visual Certificate Mockup Card */}
            <div className="lg:col-span-7 w-full">
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-marigold/30 via-aubergine/10 to-ice-300 shadow-luxury">
                <div className="bg-white rounded-[22px] p-5 sm:p-8 border border-ice space-y-5 relative overflow-hidden">
                  
                  {/* Subtle Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none font-serif font-black text-6xl text-center text-aubergine">
                    MSBTE • MKCL
                  </div>

                  {/* Certificate Top Header */}
                  <div className="text-center border-b border-ice pb-4 space-y-1.5">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-aubergine text-marigold flex items-center justify-center font-black text-xs border border-marigold/40">
                        MKCL
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-aubergine/70 uppercase tracking-widest">
                        Government of Maharashtra
                      </span>
                      <div className="w-8 h-8 rounded-full bg-aubergine text-white flex items-center justify-center font-black text-xs border border-ice">
                        MSBTE
                      </div>
                    </div>
                    <h3 className="font-serif text-lg sm:text-2xl font-black text-aubergine tracking-wide">
                      MAHARASHTRA STATE CERTIFICATE IN INFORMATION TECHNOLOGY
                    </h3>
                    <p className="text-[11px] text-marigold-600 font-bold">
                      Jointly Certified by MSBTE & MKCL • Authorized ALC Center: Degloor
                    </p>
                  </div>

                  {/* Student Mock Details */}
                  <div className="bg-ice/30 rounded-2xl p-4 border border-ice space-y-2 text-xs">
                    <div className="flex justify-between text-aubergine/70">
                      <span>Candidate Name:</span>
                      <strong className="text-aubergine">RAHUL PRAKASH PATIL</strong>
                    </div>
                    <div className="flex justify-between text-aubergine/70">
                      <span>Learner Code:</span>
                      <span className="font-mono text-marigold-600 font-bold">MKCL-DEGLOOR-2025-8842</span>
                    </div>
                    <div className="flex justify-between text-aubergine/70">
                      <span>Examination Grade:</span>
                      <span className="text-emerald-700 font-bold">Grade A+ (Distinction - 88%)</span>
                    </div>
                    <div className="flex justify-between text-aubergine/70">
                      <span>Center Name:</span>
                      <span className="text-aubergine font-medium">Prerna Computer Academy Degloor (ALC Code: 62210045)</span>
                    </div>
                  </div>

                  {/* Security Features Row */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-2">
                    <div className="bg-white p-2.5 rounded-xl border border-ice shadow-sm">
                      <QrCode className="w-5 h-5 text-aubergine mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-aubergine block">QR Verification</span>
                      <span className="text-[9px] text-aubergine/60">Live Web Validation</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-ice shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-aubergine block">Holographic Seal</span>
                      <span className="text-[9px] text-aubergine/60">Tamper-Proof Board Seal</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-ice shadow-sm">
                      <FileBadge2 className="w-5 h-5 text-marigold-600 mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-aubergine block">Govt. GR Stamp</span>
                      <span className="text-[9px] text-aubergine/60">Maharashtra State Valid</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Explanatory Points on Right */}
            <div className="lg:col-span-5 space-y-4">
              <div className="modern-card p-5 space-y-2">
                <div className="flex items-center gap-2 text-marigold-600 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Govt. Recognized (शासनमान्य)</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-aubergine">
                  Mandatory For State Government Appointments
                </h4>
                <p className="text-xs text-aubergine/70 leading-relaxed">
                  Under official Government Resolutions (GR) issued by the General Administration Department (GAD), MS-CIT certification is compulsory for selection across Group A, B, C, and D administrative posts.
                </p>
              </div>

              <div className="modern-card p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                  <QrCode className="w-4 h-4" />
                  <span>Digital QR Verification (ऑनलाईन पडताळणी)</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-aubergine">
                  Instant Verification Guarantee
                </h4>
                <p className="text-xs text-aubergine/70 leading-relaxed">
                  Every certificate features a unique encrypted QR code and Learner Code. Any recruitment officer or employer can scan it with a smartphone to instantly verify candidate credentials on official MKCL and MSBTE servers.
                </p>
              </div>

              <button
                onClick={onOpenEnrollment}
                className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-marigold-glow cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-aubergine-950" />
                <span>Enroll For Certified Qualification</span>
              </button>
            </div>

          </div>
        )}

        {/* Tab 2: Govt Jobs Required Table */}
        {activeTab === 'eligibility' && (
          <div className="modern-card p-5 sm:p-8 animate-fadeIn">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-ice pb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-aubergine">
                  Maharashtra Government Recruitment Mandate (शासकीय नोकरी अर्हता)
                </h3>
                <p className="text-xs text-aubergine/70 mt-0.5">
                  As per official Maharashtra Government Resolutions (GR), MS-CIT is compulsory for document verification in these key posts:
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% GR Approved
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-ice text-aubergine font-bold uppercase tracking-wider">
                    <th className="pb-3 pr-4">Government Post (शासकीय पद)</th>
                    <th className="pb-3 pr-4">Department / Authority (विभाग)</th>
                    <th className="pb-3 pr-4">Eligibility Status</th>
                    <th className="pb-3">Official Resolution & Verification (शासन निर्णय)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ice text-aubergine/80">
                  {govtJobs.map((job, idx) => (
                    <tr key={idx} className="hover:bg-ice/20 transition-colors">
                      <td className="py-3.5 pr-4 font-bold text-aubergine whitespace-nowrap">
                        {job.post}
                      </td>
                      <td className="py-3.5 pr-4 text-aubergine/70">
                        {job.department}
                      </td>
                      <td className="py-3.5 pr-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {job.status}
                        </span>
                      </td>
                      <td className="py-3.5">
                        <span className="block font-mono text-[11px] text-marigold-600 font-bold">{job.gr}</span>
                        <span className="text-[11px] text-aubergine/60">{job.detail}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Grading Scheme */}
        {activeTab === 'grading' && (
          <div className="modern-card p-5 sm:p-8 animate-fadeIn">
            <div className="mb-6 border-b border-ice pb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-aubergine">
                100-Mark Official Assessment & Grading Framework
              </h3>
              <p className="text-xs text-aubergine/70 mt-1">
                50 Marks Continuous Internal ERA Evaluation + 50 Marks Final Online Practical Board Examination
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {gradingTiers.map((tier, idx) => (
                <div key={idx} className="bg-ice/30 p-4 rounded-2xl border border-ice flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-base font-bold text-aubergine">{tier.grade}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-aubergine border border-ice">
                        {tier.badge}
                      </span>
                    </div>
                    <strong className="font-serif text-2xl font-extrabold text-marigold-600 block my-1">
                      {tier.marks}
                    </strong>
                    <p className="text-xs text-aubergine/70 mt-1 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-ice/40 border border-ice flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-aubergine">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  At <strong>Prerna Computer Academy Degloor</strong>, daily continuous ERA simulation and unlimited mock test drills deliver a <strong>99.4% first-attempt pass rate</strong>!
                </span>
              </div>
              <button
                onClick={onOpenEnrollment}
                className="btn-gold py-2 px-5 text-xs font-bold shrink-0 cursor-pointer"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
