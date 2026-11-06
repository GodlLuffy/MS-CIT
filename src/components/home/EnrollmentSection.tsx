import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, CheckCircle2, Clock, Calendar, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EnrollmentSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [timing, setTiming] = useState('सकाळी (Morning 07:30 AM)');
  const [batchType, setBatchType] = useState('Regular (2 Months)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 3) {
      setError('कृपया आपले पूर्ण नाव प्रविष्ट करा.');
      return;
    }
    const digits = mobile.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('कृपया १० अंकी वैध मोबाईल नंबर टाका.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 500);
  };

  return (
    <section id="admission" className="py-14 sm:py-20 bg-silver-150 w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-marigold-500/15 px-3 py-1 rounded-full border border-marigold-500/30">
            Admissions & Fees 2025
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-aubergine-900 tracking-tight">
            प्रवेश नोंदणी व केंद्र माहिती
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700">
            देगलूरमधील विद्यार्थ्यांसाठी मर्यादित सीट्स. आजच आपला १ दिवसाचा मोफत डेमो क्लास बुक करा.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fees, Batches & Location Info */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Fee Card */}
            <div className="editorial-card p-6 rounded-2xl border border-aubergine-700/15">
              <div className="flex items-center justify-between border-b border-aubergine-700/10 pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-marigold-600 block">
                    Official Fee Schedule
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-aubergine-900">
                    MS-CIT संपूर्ण कोर्स फी (₹4,500)
                  </h3>
                </div>
                <span className="text-lg sm:text-2xl font-black text-aubergine-900">
                  ₹4,500
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-silver-100 p-3 rounded-xl border border-aubergine-700/10">
                  <span className="text-[10px] uppercase font-bold text-aubergine-600 block">हप्ता १ (प्रवेशाच्या वेळी)</span>
                  <strong className="text-base font-black text-aubergine-900">₹2,500</strong>
                  <p className="text-[10px] text-aubergine-600 mt-0.5">अधिकृत पुस्तक व ERA लॉगिन समाविष्ट</p>
                </div>

                <div className="bg-silver-100 p-3 rounded-xl border border-aubergine-700/10">
                  <span className="text-[10px] uppercase font-bold text-aubergine-600 block">हप्ता २ (३० दिवसांनंतर)</span>
                  <strong className="text-base font-black text-aubergine-900">₹2,000</strong>
                  <p className="text-[10px] text-aubergine-600 mt-0.5">MSBTE परीक्षा व प्रमाणपत्र फी समाविष्ट</p>
                </div>
              </div>

              <p className="text-[11px] text-aubergine-600 mt-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-marigold-600 shrink-0" />
                <span>कोणतेही छुपे शुल्क नाही (No Hidden Charges). शासकीय प्रमाणपत्र हमी.</span>
              </p>
            </div>

            {/* Batches Timing */}
            <div className="editorial-card p-6 rounded-2xl border border-aubergine-700/15">
              <h3 className="text-sm font-bold text-aubergine-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-marigold-600" />
                <span>सोयीस्कर बॅच वेळा (Batch Timings):</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-silver-100 border border-aubergine-700/10 text-center">
                  <span className="block font-bold text-aubergine-900">सकाळची बॅच</span>
                  <span className="text-[11px] text-aubergine-700">07:30 AM - 09:30 AM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-silver-100 border border-aubergine-700/10 text-center">
                  <span className="block font-bold text-aubergine-900">दुपारची बॅच</span>
                  <span className="text-[11px] text-aubergine-700">10:00 AM - 12:00 PM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-silver-100 border border-aubergine-700/10 text-center col-span-2 sm:col-span-1">
                  <span className="block font-bold text-aubergine-900">संध्याकाळची बॅच</span>
                  <span className="text-[11px] text-aubergine-700">04:00 PM - 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Degloor Location & Direct Call Card */}
            <div id="contact" className="editorial-card p-6 rounded-2xl border border-aubergine-700/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-aubergine-700 text-marigold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-aubergine-900">
                    प्रेरणा कॉम्प्युटर अकॅडमी देगलूर (जि. नांदेड)
                  </h4>
                  <p className="text-xs text-aubergine-700 mt-0.5 leading-relaxed">
                    ग्लोबल इंग्लिश स्कूलजवळ, रामपूर रोड / नाथनगर, देगलूर – ४३१७१७
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href="tel:+919975875005"
                      className="px-4 py-2 rounded-xl bg-aubergine-700 text-white text-xs font-bold flex items-center gap-2 hover:bg-aubergine-800 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-marigold-400" />
                      <span>कॉल करा: 99758 75005</span>
                    </a>

                    <a
                      href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white border border-aubergine-700/20 text-aubergine-900 text-xs font-bold flex items-center gap-2 hover:bg-silver-100 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp वर विचारा</span>
                    </a>

                    <a
                      href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-silver-150 border border-aubergine-700/15 text-aubergine-800 text-xs font-semibold hover:bg-silver-200 transition-all"
                    >
                      Google Maps वर पहा ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="editorial-card p-6 sm:p-8 rounded-2xl border border-aubergine-700/15 shadow-lg bg-white relative">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-marigold-600 bg-marigold-500/15 px-2.5 py-0.5 rounded border border-marigold-500/30">
                      प्रवेश व मोफत डेमो क्लास
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-aubergine-900">
                      आपली जागा आरक्षित करा
                    </h3>
                    <p className="text-xs text-aubergine-700">
                      फॉर्म सबमिट करा, आमची टीम तुम्हाला तात्काळ बॅच तपशीलांसाठी संपर्क करेल.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 mb-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        विद्यार्थ्याचे पूर्ण नाव (Full Name) *
                      </label>
                      <input
                        type="text"
                        placeholder="उदा. राहुल गोविंद शिंदे"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        WhatsApp मोबाईल नंबर (Mobile Number) *
                      </label>
                      <input
                        type="tel"
                        placeholder="उदा. 9975875005"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        सोयीस्कर बॅच वेळ (Preferred Batch)
                      </label>
                      <select
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                      >
                        <option>सकाळी (Morning 07:30 AM)</option>
                        <option>दुपारी (Mid-Day 10:00 AM)</option>
                        <option>दुपारी (Afternoon 02:00 PM)</option>
                        <option>संध्याकाळी (Evening 04:00 PM)</option>
                        <option>सायंकाळी (Evening 06:00 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        कोर्स कालावधी (Duration)
                      </label>
                      <select
                        value={batchType}
                        onChange={(e) => setBatchType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                      >
                        <option>नियमित बॅच (Regular - २ महिने)</option>
                        <option>फास्ट ट्रॅक (Express - १ महिना)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-marigold w-full py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>नोंदणी होत आहे...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-aubergine-950" />
                            <span>प्रवेश अर्ज सबमिट करा (Free Demo)</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-aubergine-600 pt-1">
                      🔒 तुमची माहिती सुरक्षित आहे. कोणतीही स्पॅम कॉल्स नाहीत.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success View */
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-aubergine-900">
                    प्रवेश नोंदणी यशस्वी!
                  </h3>

                  <p className="text-xs text-aubergine-700 leading-relaxed">
                    धन्यवाद <strong className="text-aubergine-900">{fullName}</strong>! आमची देगलूर केंद्र टीम लवकरच 
                    <strong className="text-aubergine-900"> {mobile}</strong> वर कॉल करून बॅच वेळ निश्चित करेल.
                  </p>

                  <div className="p-3 bg-silver-100 rounded-xl text-xs text-left text-aubergine-800 space-y-1 border border-aubergine-700/10">
                    <p>📍 <strong>केंद्र:</strong> प्रेरणा अकॅडमी देगलूर</p>
                    <p>🕒 <strong>निवडलेली वेळ:</strong> {timing}</p>
                    <p>🎟️ <strong>१ दिवसाचा मोफत डेमो:</strong> वैध</p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setMobile('');
                    }}
                    className="btn-silver w-full py-2.5 rounded-xl text-xs"
                  >
                    दुसरा अर्ज भरा
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};