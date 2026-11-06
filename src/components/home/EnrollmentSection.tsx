import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Sparkles, 
  CheckCircle, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { EnrollmentFormData } from '../../types';

export const EnrollmentSection: React.FC = () => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: '',
    mobile: '',
    email: '',
    education: '12th Pass / Undergraduate',
    preferredBatch: 'Regular Classroom (2 Months)',
    preferredTiming: 'Morning (07:30 AM - 09:30 AM)',
    referralSource: 'Local Friend / Degloor Board'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mapsUrl = "https://www.google.com/maps/place/Prerna+Computer+Academy+Degloor/@18.542866,77.5765142,100m/data=!3m1!1e3!4m6!3m5!1s0x3bce676fe561958b:0xaf0f22dea8a829e2!8m2!3d18.5427705!4d77.5764316";

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter your full name (at least 3 letters)';
    }

    const phoneDigits = formData.mobile.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <section id="enroll" className="py-14 sm:py-20 bg-slate-900/60 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Institute Contact & Degloor Location */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open at Degloor Center</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Join <span className="text-gradient-emerald">Prerna Computer Academy</span> Degloor
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              देगलूर परिसरातील विद्यार्थ्यांसाठी सुवर्णसंधी! Register your seat online or visit our 
              fully-equipped computer lab on Rampur Road, Degloor. Free 1-day demo session included.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-1">
              <a
                href="tel:+919975875005"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-brand-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Degloor Center Helpline (Call/SMS)</p>
                  <p className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-300 transition-colors">+91 99758 75005</p>
                </div>
              </a>

              <a
                href="https://wa.me/919975875005?text=Hello%20Prerna%20Computer%20Academy%20Degloor%2C%20I%20am%20interested%20in%20MS-CIT%20admission"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Instant WhatsApp Inquiry</p>
                  <p className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Chat on WhatsApp (देगलूर)</p>
                </div>
              </a>

              {/* Exact Google Map Location Card */}
              <div id="location" className="p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Academy Location (Google Maps)</p>
                    <p className="text-xs sm:text-sm font-bold text-white">Prerna Computer Academy Degloor</p>
                    <p className="text-xs text-slate-300 mt-0.5">Near Global English School, Rampur Road / Nathnagar, Degloor, Dist. Nanded — 431717</p>
                    <p className="text-[11px] text-emerald-400 mt-1 font-medium">Timing: 07:30 AM to 08:30 PM (Daily)</p>
                  </div>
                </div>

                {/* Google Maps Interactive Embed Frame */}
                <div className="w-full rounded-xl overflow-hidden border border-slate-800 aspect-[16/9] relative bg-slate-900">
                  <iframe
                    title="Prerna Computer Academy Degloor Google Maps Location"
                    src="https://maps.google.com/maps?q=18.5427705,77.5764316&hl=en&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>

                <div className="pt-1">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-brand-600/20 hover:bg-brand-600 text-brand-300 hover:text-white border border-brand-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open Directions in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 flex items-center gap-2 text-[11px] sm:text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Authorized MKCL Center. No hidden costs or registration fees.</span>
            </div>
          </div>

          {/* Right Column: Online Admission Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-3xl p-5 sm:p-8 border border-brand-500/30 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Online Admission & Free Demo Booking
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                      Prerna Computer Academy, Degloor Center (Nanded Dist.)
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name (विद्यार्थ्याचे संपूर्ण नाव) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rameshwar Pandurang Patil"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Contact Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp Mobile No. (मोबाईल नंबर) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9975875005"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm focus:outline-none transition-all ${
                          errors.mobile ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                        }`}
                      />
                      {errors.mobile && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.mobile}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. student@degloor.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-brand-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Education & Batch Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Education / College in Degloor
                      </label>
                      <select
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      >
                        <option>10th Standard (SSC)</option>
                        <option>12th Standard (HSC)</option>
                        <option>Degloor College (B.A / B.Com / B.Sc)</option>
                        <option>Shivaji College Degloor Student</option>
                        <option>Govt Exam Aspirant (Talathi/MPSC/Police)</option>
                        <option>Job Seeker / Homemaker</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Batch Mode
                      </label>
                      <select
                        value={formData.preferredBatch}
                        onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      >
                        <option>Regular Classroom (2 Months)</option>
                        <option>Express Fast-Track (1 Month)</option>
                        <option>Weekend Special (Sat & Sun)</option>
                      </select>
                    </div>
                  </div>

                  {/* Time slot preference */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Daily Lab Timing Slot
                    </label>
                    <select
                      value={formData.preferredTiming}
                      onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                    >
                      <option>Morning (07:30 AM - 09:30 AM)</option>
                      <option>Mid-Day (10:00 AM - 12:00 PM)</option>
                      <option>Afternoon (02:00 PM - 04:00 PM)</option>
                      <option>Evening (04:00 PM - 06:00 PM)</option>
                      <option>Late Evening (06:30 PM - 08:30 PM)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:shadow-glow-blue active:scale-98 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Registration...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Online Registration</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-2">
                      Free SMS confirmation & Course Guide sent to your mobile instantly.
                    </p>
                  </div>

                </form>
              ) : (
                /* Success Confirmation Card */
                <div className="text-center py-5 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Provisional Seat Reserved
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      Welcome to Prerna Academy, {formData.fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1.5">
                      Your admission request for <strong className="text-white">{formData.preferredBatch}</strong> ({formData.preferredTiming}) at Degloor Center has been received.
                    </p>
                  </div>

                  {/* Booking Receipt Summary Box */}
                  <div className="bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Registration ID:</span>
                      <strong className="text-brand-400 font-mono">PRN-DGL-{Math.floor(1000 + Math.random() * 9000)}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Center:</span>
                      <span className="text-white font-medium">Prerna Computer Academy Degloor</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white">Rampur Road, Near Global English School</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-semibold pt-0.5">
                      <span>1-Day Free Trial Demo:</span>
                      <span>Active & Confirmed</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700"
                    >
                      Register Another Student
                    </button>
                    <a
                      href="tel:+919975875005"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Degloor Office Now</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
