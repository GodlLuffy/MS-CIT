import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
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
    <section id="admission" className="py-14 sm:py-20 bg-silver-150 w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 bg-marigold-500/15 px-3 py-1 rounded-full border border-marigold-500/30">
            Admissions & Fees 2025 (प्रवेश नोंदणी)
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-aubergine-900 tracking-tight">
            Enrollment & Degloor Center Details
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700">
            Limited seats per batch. Claim your 1-day free trial demo class at Prerna Academy Degloor.
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
                    Official Fee Schedule (कोर्स फी)
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-aubergine-900">
                    MS-CIT Complete Course Fee
                  </h3>
                </div>
                <span className="text-xl sm:text-3xl font-black text-aubergine-900">
                  ₹4,500
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-silver-100 p-3.5 rounded-xl border border-aubergine-700/10">
                  <span className="text-[10px] uppercase font-bold text-aubergine-600 block">Installment 1 (At Admission)</span>
                  <strong className="text-lg font-black text-aubergine-900">₹2,500</strong>
                  <p className="text-[11px] text-aubergine-600 mt-0.5">Includes official textbook + ERA login</p>
                </div>

                <div className="bg-silver-100 p-3.5 rounded-xl border border-aubergine-700/10">
                  <span className="text-[10px] uppercase font-bold text-aubergine-600 block">Installment 2 (Within 30 Days)</span>
                  <strong className="text-lg font-black text-aubergine-900">₹2,000</strong>
                  <p className="text-[11px] text-aubergine-600 mt-0.5">Includes MSBTE exam fee + certificate</p>
                </div>
              </div>

              <p className="text-[11px] text-aubergine-600 mt-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-marigold-600 shrink-0" />
                <span>No hidden charges. Official MKCL & MSBTE certificate guarantee.</span>
              </p>
            </div>

            {/* Batches Timing */}
            <div className="editorial-card p-6 rounded-2xl border border-aubergine-700/15">
              <h3 className="text-sm font-bold text-aubergine-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-marigold-600" />
                <span>Flexible Daily Batch Timings (सोयीस्कर बॅचेस):</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-silver-100 border border-aubergine-700/10 text-center">
                  <span className="block font-bold text-aubergine-900">Morning Batch</span>
                  <span className="text-[11px] text-aubergine-700 font-semibold">07:30 AM - 09:30 AM</span>
                </div>

                <div className="p-3 rounded-xl bg-silver-100 border border-aubergine-700/10 text-center">
                  <span className="block font-bold text-aubergine-900">Mid-Day Batch</span>
                  <span className="text-[11px] text-aubergine-700 font-semibold">10:00 AM - 12:00 PM</span>
                </div>

                <div className="p-3 rounded-xl bg-silver-100 border border-aubergine-700/10 text-center col-span-2 sm:col-span-1">
                  <span className="block font-bold text-aubergine-900">Evening Batch</span>
                  <span className="text-[11px] text-aubergine-700 font-semibold">04:00 PM - 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Location & Direct Hotline */}
            <div id="contact" className="editorial-card p-6 rounded-2xl border border-aubergine-700/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-aubergine-700 text-marigold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-aubergine-900">
                    Prerna Computer Academy Degloor (जि. नांदेड)
                  </h4>
                  <p className="text-xs text-aubergine-700 mt-0.5 leading-relaxed">
                    Near Global English School, Rampur Road / Nathnagar, Degloor – 431717
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href="tel:+919975875005"
                      className="px-4 py-2 rounded-xl bg-aubergine-700 text-white text-xs font-bold flex items-center gap-2 hover:bg-aubergine-800 transition-all shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-marigold-400" />
                      <span>Call: +91 99758 75005</span>
                    </a>

                    <a
                      href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white border border-aubergine-700/20 text-aubergine-900 text-xs font-bold flex items-center gap-2 hover:bg-silver-100 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-silver-150 border border-aubergine-700/15 text-aubergine-800 text-xs font-semibold hover:bg-silver-200 transition-all"
                    >
                      View on Google Maps ↗
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
                      Free 1-Day Trial Demo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-aubergine-900">
                      Reserve Your Seat
                    </h3>
                    <p className="text-xs text-aubergine-700">
                      Fill out the form below. Our Degloor center team will contact you to confirm batch timings.
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
                        Full Name (विद्यार्थ्याचे पूर्ण नाव) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        WhatsApp Contact No. (मोबाईल नंबर) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9975875005"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        Preferred Batch Timing (सोयीस्कर वेळ)
                      </label>
                      <select
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                      >
                        <option>Morning (07:30 AM - 09:30 AM)</option>
                        <option>Mid-Day (10:00 AM - 12:00 PM)</option>
                        <option>Afternoon (02:00 PM - 04:00 PM)</option>
                        <option>Evening (04:00 PM - 06:00 PM)</option>
                        <option>Late Evening (06:00 PM - 07:30 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-aubergine-900 mb-1">
                        Batch Duration (कालावधी)
                      </label>
                      <select
                        value={batchType}
                        onChange={(e) => setBatchType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs sm:text-sm focus:outline-none focus:border-marigold-500 focus:bg-white"
                      >
                        <option>Regular Classroom (2 Months)</option>
                        <option>Fast-Track Express (1 Month)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-marigold w-full py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Submitting Reservation...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-aubergine-950" />
                            <span>Confirm Free Seat Reservation</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-aubergine-600 pt-1">
                      🔒 Your contact information is safe. No spam calls.
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
                    Seat Provisionally Reserved!
                  </h3>

                  <p className="text-xs text-aubergine-700 leading-relaxed">
                    Thank you <strong className="text-aubergine-900">{fullName}</strong>! Our Degloor center coordinator will contact you at 
                    <strong className="text-aubergine-900"> {mobile}</strong> shortly with your batch schedule.
                  </p>

                  <div className="p-3.5 bg-silver-100 rounded-xl text-xs text-left text-aubergine-800 space-y-1 border border-aubergine-700/10">
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
                    className="btn-silver w-full py-2.5 rounded-xl text-xs"
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