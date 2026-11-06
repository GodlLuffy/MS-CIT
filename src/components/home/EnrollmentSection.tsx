import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, CheckCircle2, Clock, AlertCircle, Navigation, ExternalLink, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { inquirySchema } from '../../lib/validations';
import { getStoredInquiries, saveStoredInquiries } from '../../lib/store';
import { InquiryRecord } from '../../types';

export const EnrollmentSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('12th Standard / College Student');
  const [preferredBatch, setPreferredBatch] = useState('Morning (07:30 AM - 09:30 AM)');
  const [batchType, setBatchType] = useState('Regular Classroom (2 Months)');
  
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // Validate using Zod schema
    const result = inquirySchema.safeParse({
      fullName,
      phone,
      qualification,
      preferredBatch,
      batchType,
    });

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Save new inquiry to LocalStorage & Mock DB
      const currentList = getStoredInquiries();
      const newInquiry: InquiryRecord = {
        id: `INQ-${Date.now().toString().slice(-4)}`,
        fullName: result.data.fullName,
        phone: result.data.phone,
        email: result.data.email || '',
        qualification: result.data.qualification,
        preferredBatch: result.data.preferredBatch,
        batchType: result.data.batchType,
        status: 'NEW',
        notes: 'Submitted via public student portal inquiry form.',
        createdAt: new Date().toISOString(),
      };

      saveStoredInquiries([newInquiry, ...currentList]);

      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
      });
    }, 450);
  };

  return (
    <section id="admission" className="py-16 sm:py-24 bg-[#0B0F19] w-full relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-gold/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-accent-gold bg-accent-gold/15 px-3.5 py-1 rounded-full border border-accent-gold/30 inline-block">
            Admissions & Fees 2025
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Fees, Batches & Degloor Center Map
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Transparent fee structure, flexible batch timings, and exact Google Maps location in Degloor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fees, Batches & Google Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Fee Card */}
            <div className="modern-card p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase text-accent-gold tracking-wider block">
                    Official MKCL Fee Schedule
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    MS-CIT Complete Course Fee
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-accent-gold">
                    ₹4,500
                  </span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest">All Inclusive</span>
                </div>
              </div>

              {/* Installments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Installment 1 (At Admission)</span>
                  <strong className="font-serif text-2xl font-bold text-white mt-0.5 block">₹2,500</strong>
                  <p className="text-[11px] text-slate-400 mt-1">Includes official color textbook + ERA cloud login</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Installment 2 (Within 30 Days)</span>
                  <strong className="font-serif text-2xl font-bold text-white mt-0.5 block">₹2,000</strong>
                  <p className="text-[11px] text-slate-400 mt-1">Includes MSBTE exam fee + holographic certificate</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-4 flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero hidden charges. Official MKCL & MSBTE certificate guarantee.</span>
              </p>
            </div>

            {/* Batches Timing */}
            <div className="modern-card p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-gold" />
                <span>Flexible Daily Batch Timings (2 Hours / Day):</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="block font-bold text-white">Morning Slot</span>
                  <span className="text-[11px] text-accent-gold font-bold">07:30 AM - 09:30 AM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="block font-bold text-white">Mid-Day Slot</span>
                  <span className="text-[11px] text-accent-gold font-bold">10:00 AM - 12:00 PM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="block font-bold text-white">Evening Slot</span>
                  <span className="text-[11px] text-accent-gold font-bold">04:00 PM - 06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Map Card */}
            <div id="location-map" className="modern-card p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/30 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                      Prerna Computer Academy Degloor
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Near Global English School, Rampur Road / Nathnagar, Degloor – 431717 (Dist. Nanded)
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-accent-gold/20 text-white text-xs font-bold border border-white/15 hover:border-accent-gold/50 transition-all shrink-0 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {/* REAL LIVE EMBEDDED GOOGLE MAP */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 relative shadow-inner">
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
                  className="btn-gold px-5 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-950" />
                  <span>Call: +91 99758 75005</span>
                </a>

                <a
                  href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20want%20information%20about%20MS-CIT%20admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-4 py-2.5 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form (Zod Validated) */}
          <div className="lg:col-span-5">
            <div className="modern-card p-7 sm:p-9 relative shadow-2xl border-accent-gold/30">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-6 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold bg-accent-gold/15 px-2.5 py-0.5 rounded-full border border-accent-gold/25 inline-block">
                      Free 1-Day Trial Demo Class
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      Reserve Your Seat
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the form below. Our Degloor center team will contact you to confirm batch timings.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Full Name (विद्यार्थ्याचे पूर्ण नाव) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl bg-white/5 border ${
                          fieldErrors.fullName ? 'border-rose-500' : 'border-white/10'
                        } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors`}
                      />
                      {fieldErrors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{fieldErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        WhatsApp Contact No. (१० अंकी मोबाईल नंबर) *
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="e.g. 9975875005"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        className={`w-full px-4 py-3 rounded-2xl bg-white/5 border ${
                          fieldErrors.phone ? 'border-rose-500' : 'border-white/10'
                        } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors`}
                      />
                      {fieldErrors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{fieldErrors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Qualification Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Educational Background / Goal
                      </label>
                      <select
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      >
                        <option value="10th Standard / School Student">10th Standard / School Student</option>
                        <option value="12th Standard / College Student">12th Standard / College Student</option>
                        <option value="Graduate (BA / B.Com / B.Sc)">Graduate (BA / B.Com / B.Sc)</option>
                        <option value="MPSC / Police Bharti / Talathi Aspirant">MPSC / Police Bharti / Talathi Aspirant</option>
                        <option value="Job Seeker / Working Professional">Job Seeker / Working Professional</option>
                        <option value="Homemaker / Business Owner">Homemaker / Business Owner</option>
                      </select>
                    </div>

                    {/* Preferred Batch Timing */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Preferred Batch Timing
                      </label>
                      <select
                        value={preferredBatch}
                        onChange={(e) => setPreferredBatch(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      >
                        <option value="Morning (07:30 AM - 09:30 AM)">Morning (07:30 AM - 09:30 AM)</option>
                        <option value="Mid-Day (10:00 AM - 12:00 PM)">Mid-Day (10:00 AM - 12:00 PM)</option>
                        <option value="Evening (04:00 PM - 06:00 PM)">Evening (04:00 PM - 06:00 PM)</option>
                        <option value="Late Evening (05:30 PM - 07:00 PM)">Late Evening (05:30 PM - 07:00 PM)</option>
                      </select>
                    </div>

                    {/* Batch Duration Mode */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Batch Duration Mode
                      </label>
                      <select
                        value={batchType}
                        onChange={(e) => setBatchType(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      >
                        <option value="Regular Classroom (2 Months)">Regular Classroom (2 Months - Recommended)</option>
                        <option value="Fast Track Intensive (1 Month)">Fast Track Intensive (1 Month)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-2 shadow-gold-glow cursor-pointer disabled:opacity-50"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm Seat Reservation'}</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-accent-gold uppercase tracking-wider">
                      Reservation Confirmed!
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      Welcome, {fullName}!
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto">
                      Your seat has been reserved at <strong>Prerna Computer Academy Degloor</strong>. Our team will call you shortly on <strong>{phone}</strong> to finalize batch timings.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1 text-left">
                    <p className="font-bold text-white">Degloor Center Address:</p>
                    <p className="text-slate-400">Near Global English School, Rampur Road / Nathnagar, Degloor</p>
                    <p className="text-accent-gold font-bold">Helpline: +91 99758 75005</p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setPhone('');
                    }}
                    className="btn-outline text-xs px-6 py-2.5 rounded-full cursor-pointer"
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
