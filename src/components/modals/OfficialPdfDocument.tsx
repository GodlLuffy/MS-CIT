import React from 'react';
import { coursesData } from '../../data/coursesData';
import { Award, ShieldCheck, CheckCircle2, Clock, Phone, MapPin, Mail, Landmark } from 'lucide-react';

export const OfficialPdfDocument: React.FC = () => {
  return (
    <div id="official-pdf-document" className="w-full bg-slate-100 text-slate-900 font-sans p-0 sm:p-2 space-y-6">
      
      {/* ==================== PAGE 1 OF PROSPECTUS ==================== */}
      <div className="prospectus-page bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-300 relative flex flex-col justify-between">
        <div>
          {/* Official Header */}
          <div className="border-b-2 border-slate-900 pb-3 mb-3">
            <div className="flex items-center justify-between gap-3 mb-2">
              {/* MKCL Seal */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex flex-col items-center justify-center font-black text-xs border border-blue-950 shrink-0 shadow-sm">
                  <span className="text-[12px] leading-none">MKCL</span>
                  <span className="text-[8px] font-bold text-amber-300 leading-none mt-0.5">ALC</span>
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-[9px] uppercase font-bold text-slate-600 tracking-wider block">
                    Maharashtra Knowledge
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-600 tracking-wider block">
                    Corporation Limited
                  </span>
                </div>
              </div>

              {/* Center Title */}
              <div className="text-center flex-grow">
                <span className="text-[10px] uppercase font-black text-blue-900 tracking-widest block">
                  Authorized MKCL IT Certification Center
                </span>
                <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                  PRERNA COMPUTER ACADEMY
                </h1>
                <p className="text-xs sm:text-sm font-bold text-amber-700">
                  प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
                </p>
                <p className="text-[10px] text-slate-600 font-medium">
                  Near Global English School, Rampur Road / Nathnagar, Degloor – 431717
                </p>
              </div>

              {/* MSBTE Seal */}
              <div className="flex items-center gap-2">
                <div className="text-right hidden sm:block">
                  <span className="text-[9px] uppercase font-bold text-slate-600 tracking-wider block">
                    Maharashtra State
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-600 tracking-wider block">
                    Board Tech. Education
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex flex-col items-center justify-center font-black text-xs border border-amber-700 shrink-0 shadow-sm">
                  <span className="text-[12px] leading-none">MSBTE</span>
                  <span className="text-[8px] font-bold text-slate-100 leading-none mt-0.5">JOINT</span>
                </div>
              </div>
            </div>

            {/* Banner Strip */}
            <div className="bg-slate-900 text-white py-1 px-3 rounded-md flex items-center justify-between text-xs font-bold">
              <span>Official MS-CIT Syllabus Prospectus</span>
              <span className="hidden sm:inline">140 Hours Comprehensive Practical Lab</span>
              <span>Batch 2025</span>
            </div>
          </div>

          {/* Quick Parameters */}
          <div className="grid grid-cols-4 gap-2 mb-3 text-xs">
            <div className="bg-slate-100 p-2 rounded border border-slate-200">
              <span className="text-[9px] text-slate-500 uppercase font-bold block">Course Name</span>
              <strong className="text-slate-900 font-black">MS-CIT (MKCL)</strong>
            </div>
            <div className="bg-slate-100 p-2 rounded border border-slate-200">
              <span className="text-[9px] text-slate-500 uppercase font-bold block">Lab Duration</span>
              <strong className="text-blue-900 font-black">140 Practical Hours</strong>
            </div>
            <div className="bg-slate-100 p-2 rounded border border-slate-200">
              <span className="text-[9px] text-slate-500 uppercase font-bold block">Workstation</span>
              <strong className="text-emerald-700 font-black">1 Student : 1 PC</strong>
            </div>
            <div className="bg-slate-100 p-2 rounded border border-slate-200">
              <span className="text-[9px] text-slate-500 uppercase font-bold block">Medium</span>
              <strong className="text-slate-900 font-bold">English / Marathi</strong>
            </div>
          </div>

          {/* Complete 8-Module Syllabus Table */}
          <div className="mb-3">
            <div className="flex items-center justify-between border-b-2 border-amber-500 pb-1 mb-1.5">
              <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Comprehensive 8-Module Curriculum Matrix (संपूर्ण अभ्यासक्रम)
              </h2>
              <span className="text-blue-900 font-black text-xs">Total: 140 Hours</span>
            </div>

            <table className="w-full text-left text-xs border border-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300 text-[10px]">
                  <th className="py-1 px-2 border-r border-slate-300 w-14 text-center">Module</th>
                  <th className="py-1 px-2.5 border-r border-slate-300">Course Subject & Topics Covered</th>
                  <th className="py-1 px-2.5 border-r border-slate-300">Software & Tools</th>
                  <th className="py-1 px-2 text-center w-14">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {coursesData.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50 text-[11px]">
                    <td className="py-1 px-2 text-center font-bold text-blue-900 border-r border-slate-200 align-top">
                      {course.code}
                    </td>
                    <td className="py-1 px-2.5 border-r border-slate-200 align-top">
                      <strong className="text-slate-900 block font-bold leading-tight">{course.title}</strong>
                      <span className="text-[10px] text-slate-600 block leading-tight">{course.summary}</span>
                    </td>
                    <td className="py-1 px-2.5 text-[10px] text-slate-700 border-r border-slate-200 align-top">
                      {course.toolsCovered.join(', ')}
                    </td>
                    <td className="py-1 px-2 text-center font-bold text-emerald-800 align-top">
                      {course.durationHours}h
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-100 font-bold text-slate-900 border-t border-slate-300 text-xs">
                  <td colSpan={3} className="py-1 px-2.5 text-right font-bold">Total Hands-On Practical Lab Hours:</td>
                  <td className="py-1 px-2 text-center text-blue-900 font-black">140h</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-medium">
          <span>Prerna Computer Academy Degloor • Authorized MKCL Center</span>
          <span className="font-bold text-slate-700">Page 1 of 2</span>
          <span>Helpline: +91 99758 75005</span>
        </div>
      </div>

      {/* ==================== PAGE BREAK ==================== */}
      <div className="page-break"></div>

      {/* ==================== PAGE 2 OF PROSPECTUS ==================== */}
      <div className="prospectus-page bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-300 relative flex flex-col justify-between">
        <div>
          {/* Header Strip Page 2 */}
          <div className="border-b-2 border-slate-900 pb-2 mb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-900 block">MKCL & MSBTE Official Framework</span>
              <h2 className="text-base sm:text-xl font-black text-slate-900 uppercase">
                Examination Scheme, Govt. Recognition & Fees
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-black text-amber-700 block">Prerna Academy Degloor</span>
              <span className="text-[10px] text-slate-500">Center Code: MKCL ALC</span>
            </div>
          </div>

          {/* Exam Scheme & Grading Pattern */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            
            {/* 100 Marks Pattern */}
            <div className="border border-slate-300 rounded-lg p-2.5 bg-slate-50 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5 font-bold">
                <span className="uppercase text-slate-900 font-black text-[11px]">MKCL ERA Exam Pattern</span>
                <span className="text-blue-900 font-black">100 Marks</span>
              </div>
              <table className="w-full text-[11px]">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-0.5 text-slate-700">Internal ERA Evaluation:</td>
                    <td className="py-0.5 text-right font-bold text-slate-900">50 Marks <span className="text-slate-500 font-normal">(Min. 20 to pass)</span></td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-0.5 text-slate-700">Final Online Practical Exam:</td>
                    <td className="py-0.5 text-right font-bold text-slate-900">50 Marks <span className="text-slate-500 font-normal">(Min. 20 to pass)</span></td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-0.5 text-blue-900">Aggregate Passing Criteria:</td>
                    <td className="py-0.5 text-right text-emerald-800">40% Total Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Grade Classifications */}
            <div className="border border-slate-300 rounded-lg p-2.5 bg-slate-50 text-xs">
              <div className="border-b border-slate-200 pb-1 mb-1.5 font-bold text-slate-900 text-[11px] uppercase">
                MSBTE Grade Classification
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px]">
                <div className="bg-white p-1 rounded border border-slate-200">
                  <strong className="text-emerald-700 block">Grade A+ (Distinction)</strong>
                  <span className="text-slate-600">85% and above</span>
                </div>
                <div className="bg-white p-1 rounded border border-slate-200">
                  <strong className="text-blue-700 block">Grade A (First Class)</strong>
                  <span className="text-slate-600">70% to 84%</span>
                </div>
                <div className="bg-white p-1 rounded border border-slate-200">
                  <strong className="text-amber-700 block">Grade B (Second Class)</strong>
                  <span className="text-slate-600">60% to 69%</span>
                </div>
                <div className="bg-white p-1 rounded border border-slate-200">
                  <strong className="text-slate-700 block">Grade C (Pass Class)</strong>
                  <span className="text-slate-600">40% to 59%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Govt GR Clause & Fee Structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
            
            {/* Government Recognition */}
            <div className="border border-slate-300 rounded-lg p-2.5 bg-white">
              <h3 className="text-[11px] font-bold text-slate-900 uppercase border-b border-slate-200 pb-1 mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-900" />
                <span>Maharashtra Govt. Resolution (GR)</span>
              </h3>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                As per Maharashtra Government Resolution (GR), MS-CIT certificate jointly issued by <strong>MKCL and MSBTE</strong> is mandatory for document verification across 
                <strong> Talathi, Police Bharti, MPSC, Zilla Parishad, Gram Sevak, and state department jobs</strong>.
              </p>
            </div>

            {/* Course Fee Plan */}
            <div className="border border-slate-300 rounded-lg p-2.5 bg-white">
              <h3 className="text-[11px] font-bold text-slate-900 uppercase border-b border-slate-200 pb-1 mb-1 flex items-center justify-between">
                <span>Total Course Fee</span>
                <span className="text-blue-900 font-black text-sm">₹4,500</span>
              </h3>
              <ul className="text-[10px] text-slate-600 space-y-0.5">
                <li className="flex justify-between">
                  <span>• Installment 1 (At Admission):</span>
                  <strong className="text-slate-900 font-bold">₹2,500</strong>
                </li>
                <li className="flex justify-between">
                  <span>• Installment 2 (Within 30 Days):</span>
                  <strong className="text-slate-900 font-bold">₹2,000</strong>
                </li>
                <li className="text-slate-500 pt-0.5">
                  Includes: Original MKCL colored book, ERA login, lab practice, and final MSBTE exam fee.
                </li>
              </ul>
            </div>

          </div>

          {/* Stamp, Address & Signature */}
          <div className="border-t-2 border-slate-900 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5 text-left">
              <p className="font-black text-slate-900 text-sm">Prerna Computer Academy Degloor</p>
              <p className="text-slate-600 text-[10px]">
                Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)
              </p>
              <p className="text-blue-900 font-bold text-[10px]">
                Direct Helpline: +91 99758 75005 | WhatsApp: +91 99758 75005
              </p>
            </div>

            <div className="flex items-center gap-4 text-center shrink-0">
              {/* Official Seal Emblem */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-900 p-1 flex flex-col items-center justify-center text-[7px] uppercase font-bold text-blue-900 text-center leading-tight">
                <span className="font-black">PRERNA ACADEMY</span>
                <span className="text-[6px] text-amber-800">MKCL ALC CENTER</span>
                <span className="text-[6px]">DEGLOOR (NANDED)</span>
                <span className="text-[5px] text-slate-500">OFFICIAL VERIFIED</span>
              </div>

              {/* Coordinator Signature Line */}
              <div className="text-center">
                <div className="w-28 border-b-2 border-slate-900 mb-1"></div>
                <span className="text-[10px] font-bold text-slate-900 block leading-tight">Authorized Signatory</span>
                <span className="text-[9px] text-slate-500">Center Coordinator, Degloor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 Footer */}
        <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-medium mt-4">
          <span>Official MS-CIT Prospectus • Prerna Computer Academy Degloor</span>
          <span className="font-bold text-slate-700">Page 2 of 2</span>
          <span>Google Maps: 18.5427705, 77.5764316</span>
        </div>
      </div>

    </div>
  );
};
