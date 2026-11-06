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
          <span>अधिकृत MS-CIT अभ्यासक्रम व प्रॉस्पेक्टस</span>
          <span className="hidden sm:inline">१४० तास प्रत्यक्ष प्रॅक्टिकल सिलॅबस</span>
          <span>बॅच: २०२५</span>
        </div>
      </div>

      {/* Course Key Parameters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs">
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">कोर्सचे नाव</span>
          <strong className="text-slate-900">MS-CIT (MKCL)</strong>
        </div>
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">एकूण कालावधी</span>
          <strong className="text-slate-900">१४० प्रॅक्टिकल तास</strong>
        </div>
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">लॅब सुविधा</span>
          <strong className="text-blue-900 font-bold">१ विद्यार्थी : १ संगणक</strong>
        </div>
        <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">माध्यम</span>
          <strong className="text-emerald-700 font-bold">मराठी / English</strong>
        </div>
      </div>

      {/* Curriculum Table */}
      <div className="mb-5 avoid-break">
        <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-amber-500 pb-1 flex items-center justify-between">
          <span>८ मॉड्युल्सचा संपूर्ण तपशीलवार अभ्यासक्रम (Syllabus)</span>
          <span className="text-slate-600 font-bold text-xs">एकूण: १४० तास</span>
        </h2>

        <div className="overflow-x-auto border border-slate-300 rounded-lg">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300 text-[11px]">
                <th className="py-2 px-2.5 border-r border-slate-300 w-16 text-center">मॉड्युल</th>
                <th className="py-2 px-3 border-r border-slate-300">अभ्यासक्रम व प्रात्यक्षिके (Topics Covered)</th>
                <th className="py-2 px-3 border-r border-slate-300">सॉफ्टवेअर व टूल्स (Tools)</th>
                <th className="py-2 px-2.5 text-center w-16">तास</th>
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
                <td colSpan={3} className="py-2 px-3 text-right">एकूण प्रत्यक्ष लॅब प्रशिक्षण कालावधी:</td>
                <td className="py-2 px-2.5 text-center text-blue-900 font-black">१४० तास</td>
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
            <span>MKCL ERA परीक्षा स्वरूप (Exam Pattern)</span>
            <span className="text-blue-900 font-black">१०० गुण</span>
          </h3>
          <table className="w-full text-xs">
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-1 text-slate-700">अंतर्गत मूल्यमापन (ERA Internal Assessment):</td>
                <td className="py-1 text-right font-bold text-slate-900">५० गुण <span className="text-slate-500 font-normal">(किमान २० उत्तीर्ण)</span></td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 text-slate-700">अंतिम ऑनलाइन प्रॅक्टिकल परीक्षा:</td>
                <td className="py-1 text-right font-bold text-slate-900">५० गुण <span className="text-slate-500 font-normal">(किमान २० उत्तीर्ण)</span></td>
              </tr>
              <tr className="font-bold">
                <td className="py-1 text-blue-900">किमान उत्तीर्ण प्रमाण:</td>
                <td className="py-1 text-right text-emerald-800">४०% एकत्रित गुण</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Grade Classification */}
        <div className="border border-slate-300 rounded-lg p-3 bg-slate-50">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            श्रेणी वर्गीकरण (Grade Classifications)
          </h3>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-emerald-700 block">Grade A+ (विशेष प्राविण्य)</strong>
              <span className="text-slate-600">८५% आणि त्याहून अधिक</span>
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-blue-700 block">Grade A (प्रथम श्रेणी)</strong>
              <span className="text-slate-600">७०% ते ८४%</span>
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-amber-700 block">Grade B (द्वितीय श्रेणी)</strong>
              <span className="text-slate-600">६०% ते ६९%</span>
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200">
              <strong className="text-slate-700 block">Grade C (उत्तीर्ण)</strong>
              <span className="text-slate-600">४०% ते ५९%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Govt. Recognition & Fee Schedule */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 avoid-break text-xs">
        
        {/* Govt GR Notice */}
        <div className="border border-slate-300 rounded-lg p-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-1.5">
            महाराष्ट्र शासन मान्यता (Govt. GR)
          </h3>
          <p className="text-[11px] text-slate-700 leading-relaxed">
            महाराष्ट्र शासनाच्या अधिकृत निर्णयानुसार (GR), <strong>MKCL आणि MSBTE</strong> द्वारे संयुक्तपणे जारी केलेले MS-CIT प्रमाणपत्र सर्व राज्य शासकीय सेवांमध्ये 
            <strong> तलाठी, पोलीस भरती, MPSC, जिल्हा परिषद व ग्रामसेवक</strong> नियुक्तीसाठी अनिवार्य आहे.
          </p>
        </div>

        {/* Fee Structure */}
        <div className="border border-slate-300 rounded-lg p-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-1.5 flex items-center justify-between">
            <span>कोर्स फी व हप्ते (Course Fee Plan)</span>
            <span className="text-blue-900 font-bold">₹४,५००</span>
          </h3>
          <ul className="text-[11px] text-slate-700 space-y-1">
            <li className="flex justify-between">
              <span>• हप्ता १ (प्रवेशाच्या वेळी):</span>
              <strong className="text-slate-900">₹२,५००</strong>
            </li>
            <li className="flex justify-between">
              <span>• हप्ता २ (३० दिवसांनंतर):</span>
              <strong className="text-slate-900">₹२,०००</strong>
            </li>
            <li className="text-slate-500 text-[10px] pt-0.5">
              समाविष्ट: अधिकृत रंगीत पुस्तक + ERA क्लाउड लॉगिन + होलोग्राम प्रमाणपत्र.
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
