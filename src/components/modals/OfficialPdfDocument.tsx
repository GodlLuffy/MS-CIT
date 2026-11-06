import React from 'react';
import { coursesData } from '../../data/coursesData';
import { Award, ShieldCheck, CheckCircle2, Clock, Phone, MapPin, Mail, Landmark } from 'lucide-react';

export const OfficialPdfDocument: React.FC = () => {
  return (
    <div id="official-pdf-document" className="w-full bg-white text-slate-900 font-sans p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-300">
      
      {/* Official Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-4">
        <div className="flex items-center justify-between gap-4 mb-2">
          {/* MKCL Emblem */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex flex-col items-center justify-center font-black text-xs border border-blue-950 shrink-0">
              <span className="text-[11px] leading-none">MKCL</span>
              <span className="text-[8px] font-normal leading-none mt-0.5">ALC</span>
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Maharashtra Knowledge
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Corporation Limited
              </span>
            </div>
          </div>

          {/* Center Title */}
          <div className="text-center flex-grow">
            <span className="text-[10px] uppercase font-extrabold text-blue-900 tracking-widest block">
              Govt. Recognized IT Training Center
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              PRERNA COMPUTER ACADEMY
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-700">
              प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium mt-0.5">
              Near Global English School, Rampur Road / Nathnagar, Degloor – 431717
            </p>
          </div>

          {/* MSBTE Seal */}
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Maharashtra State
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Board Tech. Education
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex flex-col items-center justify-center font-black text-xs border border-amber-700 shrink-0">
              <span className="text-[11px] leading-none">MSBTE</span>
              <span className="text-[8px] font-normal leading-none mt-0.5">JOINT</span>
            </div>
          </div>
        </div>

        {/* Banner Line */}
        <div className="bg-slate-900 text-white text-center py-1.5 px-3 rounded-lg flex items-center justify-between text-xs font-bold mt-2">
          <span>OFFICIAL MS-CIT COURSE PROSPECTUS</span>
          <span className="hidden sm:inline">140 HOURS PRACTICAL SYLLABUS</span>
          <span>BATCH: 2025</span>
        </div>
      </div>

      {/* Course Key Parameters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs">
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">Course Name</span>
          <strong className="text-slate-900">MS-CIT (MKCL)</strong>
        </div>
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">Total Duration</span>
          <strong className="text-slate-900">140 Practical Hours</strong>
        </div>
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">Lab Setup</span>
          <strong className="text-blue-900 font-bold">1 Student : 1 PC</strong>
        </div>
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">Language Medium</span>
          <strong className="text-emerald-700 font-bold">मराठी / English</strong>
        </div>
      </div>

      {/* Curriculum Table */}
      <div className="mb-5 avoid-break">
        <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-amber-500 pb-1 flex items-center justify-between">
          <span>Official 8-Module Syllabus Breakdown</span>
          <span className="text-slate-600 font-bold text-xs">Total: 140 Hours</span>
        </h2>

        <div className="overflow-x-auto border border-slate-300 rounded-lg">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300 text-[11px]">
                <th className="py-2 px-2.5 border-r border-slate-300 w-16 text-center">Module</th>
                <th className="py-2 px-3 border-r border-slate-300">Curriculum & Topics Covered</th>
                <th className="py-2 px-3 border-r border-slate-300">Software & Tools Mastered</th>
                <th className="py-2 px-2.5 text-center w-16">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {coursesData.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50">
                  <td className="py-2 px-2.5 text-center font-bold text-blue-900 border-r border-slate-200 align-top">
                    {course.code}
                  </td>
                  <td className="py-2 px-3 border-r border-slate-200 align-top">
                    <strong className="text-slate-900 text-xs block mb-0.5">{course.title}</strong>
                    <p className="text-[11px] text-slate-600 leading-tight">{course.summary}</p>
                  </td>
                  <td className="py-2 px-3 text-[11px] text-slate-700 border-r border-slate-200 align-top">
                    {course.toolsCovered.join(', ')}
                  </td>
                  <td className="py-2 px-2.5 text-center font-bold text-emerald-800 align-top">
                    {course.durationHours}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 font-bold text-slate-900 border-t border-slate-300 text-xs">
                <td colSpan={3} className="py-2 px-3 text-right">Total Practical Lab Training Duration:</td>
                <td className="py-2 px-2.5 text-center text-blue-900 font-black">140 Hrs</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Examination Scheme & Grading Tables */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 avoid-break">
        
        {/* Examination Pattern */}
        <div className="border border-slate-300 rounded-lg p-3 bg-slate-50">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center justify-between">
            <span>MKCL ERA Examination Pattern</span>
            <span className="text-blue-900 font-black">100 Marks</span>
          </h3>
          <table className="w-full text-xs">
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-1 text-slate-700">Internal Continuous Evaluation (ERA):</td>
                <td className="py-1 text-right font-bold text-slate-900">50 Marks <span className="text-slate-500 font-normal">(Min 20)</span></td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 text-slate-700">Final Online Practical Exam:</td>
                <td className="py-1 text-right font-bold text-slate-900">50 Marks <span className="text-slate-500 font-normal">(Min 20)</span></td>
              </tr>
              <tr className="font-bold">
                <td className="py-1 text-blue-900">Minimum Passing Standard:</td>
                <td className="py-1 text-right text-emerald-800">40% Aggregate</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Grade Classification */}
        <div className="border border-slate-300 rounded-lg p-3 bg-slate-50">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            Grade Classifications
          </h3>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-emerald-700 block">Grade A+ (Distinction)</strong>
              <span className="text-slate-600">85% and above</span>
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-blue-700 block">Grade A (First Class)</strong>
              <span className="text-slate-600">70% to 84%</span>
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-amber-700 block">Grade B (Second Class)</strong>
              <span className="text-slate-600">60% to 69%</span>
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-slate-700 block">Grade C (Pass Class)</strong>
              <span className="text-slate-600">40% to 59%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Govt. Recognition & Fee Schedule */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 avoid-break text-xs">
        
        {/* Govt GR Notice */}
        <div className="border border-slate-300 rounded-lg p-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-1.5">
            Government Recognition (GR)
          </h3>
          <p className="text-[11px] text-slate-700 leading-relaxed">
            As per Maharashtra Government Resolution (GR), MS-CIT certificate jointly issued by 
            <strong> MKCL & MSBTE</strong> is compulsory for all State Govt. services including 
            <strong> Talathi, MPSC, Police Department, Zilla Parishad, and Gram Sevak</strong> document verification.
          </p>
        </div>

        {/* Fee Structure */}
        <div className="border border-slate-300 rounded-lg p-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-1.5 flex items-center justify-between">
            <span>Course Fee & Installment Plan</span>
            <span className="text-blue-900 font-bold">₹4,500</span>
          </h3>
          <ul className="text-[11px] text-slate-700 space-y-1">
            <li className="flex justify-between">
              <span>• Installment 1 (At Admission):</span>
              <strong className="text-slate-900">₹2,500</strong>
            </li>
            <li className="flex justify-between">
              <span>• Installment 2 (Within 30 Days):</span>
              <strong className="text-slate-900">₹2,000</strong>
            </li>
            <li className="text-slate-500 text-[10px] pt-0.5">
              Includes: Official Color Textbook + ERA Cloud Login + Hologram Certificate.
            </li>
          </ul>
        </div>

      </div>

      {/* Official Stamp & Signatory Block */}
      <div className="border-t-2 border-slate-900 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 avoid-break">
        <div className="text-left text-xs space-y-0.5">
          <p className="font-bold text-slate-900">Prerna Computer Academy Degloor</p>
          <p className="text-slate-600 text-[11px]">Rampur Road, Near Global English School, Degloor (Dist. Nanded)</p>
          <p className="text-blue-900 font-bold text-[11px]">Helpline: +91 99758 75005 | Email: prerna.degloor@gmail.com</p>
        </div>

        {/* Rubber Stamp & Signature Block */}
        <div className="flex items-center gap-4 text-center">
          {/* Simulated Stamp */}
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-blue-900/60 p-1 flex flex-col items-center justify-center text-[8px] uppercase font-bold text-blue-900 text-center leading-tight">
            <span>PRERNA ACADEMY</span>
            <span className="text-[7px] text-amber-800">MKCL ALC CENTER</span>
            <span className="text-[7px]">DEGLOOR (NANDED)</span>
            <span className="text-[6px] text-slate-500">OFFICIAL VERIFIED</span>
          </div>

          {/* Signature Line */}
          <div className="text-center">
            <div className="w-32 border-b border-slate-900 mb-1"></div>
            <span className="text-[10px] font-bold text-slate-900 block">Authorized Signatory</span>
            <span className="text-[9px] text-slate-500">Center Coordinator, Degloor</span>
          </div>
        </div>
      </div>

    </div>
  );
};
