import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, CheckCircle2, Clock, AlertCircle, Navigation, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EnrollmentSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [timing, setTiming] = useState('Morning (07:30 AM - 09:30 AM)');
  const [batchType, setBatchType] = useState('Regular Classroom (2 Months)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 3) {
      setError('Please provide your full name (पूर्ण नाव).');
      return;
    }
    const digits = mobile.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('Please enter a valid 10-digit mobile number (मोबाईल नंबर).');
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
    <section id="admission" className="py-14 sm:py-20 bg-dark-950 w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
            Admissions & Fees 2025
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Enrollment, Fees & Degloor Center Map
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Transparent fee structure, flexible batch timings, and exact Google Maps location in Degloor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fees & Batches */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Fee Card */}
            <div className="modern-card p-6 rounded-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-gold-400 block">
                    Official Fee Schedule
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    MS-CIT Complete Course Fee
                  </h3>
                </div>
                <span className="text-xl sm:text-3xl font-black text-gold-400">
                  ₹4,500
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Installment 1 (At Admission)</span>
                  <strong className="text-lg font-black text-white">₹2,500</strong>
                  <p className="text-[11px] text-slate-400 mt-0.5">Includes official textbook + ERA cloud login</p>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Installment 2 (Within 30 Days)</span>
                  <strong className="text-lg font-black text-white">₹2,000</strong>
                  <p className="text-[11px] text-slate-400 mt-0.5">Includes MSBTE exam fee + certificate</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>No hidden charges. Official MKCL & MSBTE certificate guarantee.</span>
              </p>
            </div>

            {/* Batches Timing */}
            <div className="modern-card p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Flexible Daily Batch Timings:</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-center">
                  <span className="block font-bold text-white">Morning Batch</span>
                  <span className="text-[11px] text-gold-400 font-semibold">07:30 AM - 09:30 AM</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-center">
                  <span className="block font-bold text-white">Mid-Day Batch</span>
                  <span className="text-[11px] text-gold-400 font-semibold">10:00 AM - 12:00 PM</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="block font-bold text-white">Evening Batch</span>
                  <span className="text-[11px] text-gold-400 font-semibold">04:00 PM - 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Map Card */}
            <div id="location-map" className="modern-card p-5 sm:p-6 rounded-2xl">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-gold-400 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Prerna Computer Academy Degloor (प्रेरणा कॉम्प्युटर अकॅडमी)
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-gold-400 text-xs font-bold border border-white/10 transition-all shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* REAL LIVE EMBEDDED GOOGLE MAP */}
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 relative shadow-inner">
                <iframe
                  title="Prerna Computer Academy Degloor Location Map"
                  src="https://maps.google.com/maps?q=18.5427705,77.5764316&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-150 contrast-105"
                ></iframe>
              </div>

              {/* Action Buttons beneath Map */}
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href="tel:+919975875005"
                  className="btn-primary px-4 py-2 rounded-xl text-xs flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-dark-950" />
                  <span>Call: +91 99758 75005</span>
                </a>

                <a
                  href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-400" />
                  <span>Open in Google Maps App ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="modern-card p-6 sm:p-8 rounded-2xl relative shadow-2xl">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20">
                      Free 1-Day Trial Demo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Reserve Your Seat
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the form below. Our Degloor center team will contact you to confirm batch timings.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 mb-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Full Name (विद्यार्थ्याचे पूर्ण नाव) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        WhatsApp Contact No. (मोबाईल नंबर) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9975875005"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Preferred Batch Timing (सोयीस्कर वेळ)
                      </label>
                      <select
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      >
                        <option>Morning (07:30 AM - 09:30 AM)</option>
                        <option>Mid-Day (10:00 AM - 12:00 PM)</option>
                        <option>Afternoon (02:00 PM - 04:00 PM)</option>
                        <option>Evening (04:00 PM - 06:00 PM)</option>
                        <option>Late Evening (06:00 PM - 07:30 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Batch Duration (कालावधी)
                      </label>
                      <select
                        value={batchType}
                        onChange={(e) => setBatchType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      >
                        <option>Regular Classroom (2 Months)</option>
                        <option>Fast-Track Express (1 Month)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-gold"
                      >
                        {isSubmitting ? (
                          <span>Submitting Reservation...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-dark-950" />
                            <span>Confirm Free Seat Reservation</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-400 pt-1">
                      🔒 Your contact information is safe. No spam calls.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success View */
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Seat Provisionally Reserved!
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you <strong className="text-white">{fullName}</strong>! Our Degloor center coordinator will contact you at 
                    <strong className="text-gold-400"> {mobile}</strong> shortly with your batch schedule.
                  </p>

                  <div className="p-3.5 bg-slate-900 rounded-xl text-xs text-left text-slate-300 space-y-1 border border-white/10">
                    <p>📍 <strong>Center:</strong> Prerna Computer Academy Degloor</p>
                    <p>🕒 <strong>Selected Timing:</strong> {timing}</p>
                    <p>🎟️ <strong>1-Day Free Trial Demo:</strong> Active</p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setMobile('');
                    }}
                    className="btn-secondary w-full py-2.5 rounded-xl text-xs font-bold"
                  >
                    Submit Another Inquiry
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