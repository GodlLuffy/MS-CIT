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
    <section id="admission" className="py-16 sm:py-24 bg-cream w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-accent-gold bg-gold-light px-3.5 py-1 rounded-full border border-accent-gold/30 shadow-sm inline-block">
            Admissions & Fees 2025
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Fees, Batches & Degloor Center Map
          </h2>
          <p className="text-xs sm:text-sm text-gray-medium">
            Transparent fee structure, flexible batch timings, and exact Google Maps location in Degloor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fees, Batches & Google Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Fee Card */}
            <div className="card-luxury p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-gray-light pb-4 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase text-accent-gold tracking-wider block">
                    Official Fee Schedule
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    MS-CIT Complete Course Fee
                  </h3>
                </div>
                <span className="font-serif text-2xl sm:text-4xl font-black text-accent-gold">
                  ₹4,500
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="bg-gold-light p-4 rounded-2xl border border-accent-gold/20">
                  <span className="text-[10px] uppercase font-bold text-gray-medium block">Installment 1 (At Admission)</span>
                  <strong className="font-serif text-xl font-bold text-slate-900 mt-0.5 block">₹2,500</strong>
                  <p className="text-[11px] text-gray-medium mt-1">Includes official textbook + ERA cloud login</p>
                </div>

                <div className="bg-gold-light p-4 rounded-2xl border border-accent-gold/20">
                  <span className="text-[10px] uppercase font-bold text-gray-medium block">Installment 2 (Within 30 Days)</span>
                  <strong className="font-serif text-xl font-bold text-slate-900 mt-0.5 block">₹2,000</strong>
                  <p className="text-[11px] text-gray-medium mt-1">Includes MSBTE exam fee + certificate</p>
                </div>
              </div>

              <p className="text-xs text-gray-medium mt-4 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero hidden charges. Official MKCL & MSBTE certificate guarantee.</span>
              </p>
            </div>

            {/* Batches Timing */}
            <div className="card-luxury p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-gold" />
                <span>Flexible Daily Batch Timings:</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-gold-light border border-gray-light text-center">
                  <span className="block font-bold text-slate-900">Morning Batch</span>
                  <span className="text-[11px] text-accent-gold font-bold">07:30 AM - 09:30 AM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-gold-light border border-gray-light text-center">
                  <span className="block font-bold text-slate-900">Mid-Day Batch</span>
                  <span className="text-[11px] text-accent-gold font-bold">10:00 AM - 12:00 PM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-gold-light border border-gray-light text-center col-span-2 sm:col-span-1">
                  <span className="block font-bold text-slate-900">Evening Batch</span>
                  <span className="text-[11px] text-accent-gold font-bold">04:00 PM - 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Map Card */}
            <div id="location-map" className="card-luxury p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold-light text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/20 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                      Prerna Computer Academy Degloor
                    </h4>
                    <p className="text-xs text-gray-medium mt-0.5 leading-relaxed">
                      Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gold-light hover:bg-accent-gold/20 text-slate-900 text-xs font-bold border border-accent-gold/30 transition-all shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-gray-medium" />
                </a>
              </div>

              {/* REAL LIVE EMBEDDED GOOGLE MAP */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-gray-light relative shadow-inner">
                <iframe
                  title="Prerna Computer Academy Degloor Location Map"
                  src="https://maps.google.com/maps?q=18.5427705,77.5764316&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Action Buttons beneath Map */}
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href="tel:+919975875005"
                  className="btn-gold px-5 py-2.5 text-xs font-bold flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-950" />
                  <span>Call: +91 99758 75005</span>
                </a>

                <a
                  href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-4 py-2.5 text-xs flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="card-luxury p-7 sm:p-9 relative shadow-klp-lg">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-6 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold bg-gold-light px-2.5 py-0.5 rounded-full border border-accent-gold/25 inline-block">
                      Free 1-Day Trial Demo
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      Reserve Your Seat
                    </h3>
                    <p className="text-xs text-gray-medium">
                      Fill out the form below. Our Degloor center team will contact you to confirm batch timings.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 mb-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Full Name (विद्यार्थ्याचे पूर्ण नाव) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-gold-light/40 border border-gray-light text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        WhatsApp Contact No. (मोबाईल नंबर) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9975875005"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-gold-light/40 border border-gray-light text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Preferred Batch Timing
                      </label>
                      <select
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-gold-light/40 border border-gray-light text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      >
                        <option value="Morning (07:30 AM - 09:30 AM)">Morning (07:30 AM - 09:30 AM)</option>
                        <option value="Mid-Day (10:00 AM - 12:00 PM)">Mid-Day (10:00 AM - 12:00 PM)</option>
                        <option value="Evening (04:00 PM - 06:00 PM)">Evening (04:00 PM - 06:00 PM)</option>
                        <option value="Late Evening (05:30 PM - 07:00 PM)">Late Evening (05:30 PM - 07:00 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Batch Duration Mode
                      </label>
                      <select
                        value={batchType}
                        onChange={(e) => setBatchType(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-gold-light/40 border border-gray-light text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      >
                        <option value="Regular Classroom (2 Months)">Regular Classroom (2 Months - Recommended)</option>
                        <option value="Fast Track Intensive (1 Month)">Fast Track Intensive (1 Month)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-2 shadow-gold-glow"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>{isSubmitting ? 'Confirming...' : 'Confirm Seat Reservation'}</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-accent-gold uppercase tracking-wider">
                      Reservation Confirmed!
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                      Welcome, {fullName}!
                    </h3>
                    <p className="text-xs text-gray-medium mt-2 max-w-sm mx-auto">
                      Your seat has been reserved at <strong>Prerna Computer Academy Degloor</strong>. Our team will call you shortly on <strong>{mobile}</strong> to finalize batch timings.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gold-light border border-accent-gold/20 text-xs space-y-1 text-left">
                    <p className="font-bold text-slate-900">Center Address:</p>
                    <p className="text-gray-medium">Near Global English School, Rampur Road / Nathnagar, Degloor</p>
                    <p className="text-accent-gold font-bold">Helpline: +91 99758 75005</p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline text-xs px-6 py-2.5 rounded-full"
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
