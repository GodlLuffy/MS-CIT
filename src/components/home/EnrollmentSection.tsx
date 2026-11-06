import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Sparkles, 
  CheckCircle, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Calendar,
  AlertCircle
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
    referralSource: 'Google / Website Search'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter your full name (at least 3 characters)';
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
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section id="enroll" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Institute Contact & Map info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Admission Confirmation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Begin Your Journey to <span className="text-gradient-emerald">IT Excellence</span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Fill in your details to secure a provisional seat for the upcoming batch. 
              Our senior academic counselor will call you within 15 minutes to confirm your timing slot 
              and arrange your free 1-day lab trial.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3.5 pt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-brand-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Admission Helpline (Call/SMS)</p>
                  <p className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">+91 98765 43210 / 020-25678901</p>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Apex%20Academy%2C%20I%20am%20interested%20in%20joining%20MS-CIT%20batch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Instant WhatsApp Inquiry</p>
                  <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Chat Directly on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Institute Campus Location</p>
                  <p className="text-sm font-bold text-white">Apex MS-CIT Academy (ALC 411038)</p>
                  <p className="text-xs text-slate-300 mt-0.5">2nd Floor, IT Synergy Arcade, Near Shivaji Bus Station, Pune 411005</p>
                  <p className="text-[11px] text-slate-400 mt-1">Open Mon - Sat: 7:30 AM to 8:30 PM</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>We never share your contact information. 100% spam-free consultation.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-brand-500/30 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      Online Admission & Free Demo Booking
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      No upfront payment required to book your seat.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name (As on Aadhaar / Marksheet) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Ramesh Jadhav"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm focus:outline-none transition-all ${
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm focus:outline-none transition-all ${
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
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-xs sm:text-sm focus:outline-none transition-all ${
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Education / Qualification
                      </label>
                      <select
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      >
                        <option>10th Standard / SSC</option>
                        <option>12th Standard / HSC</option>
                        <option>Undergraduate College Student</option>
                        <option>Graduate / Post-Graduate</option>
                        <option>Govt Exam Aspirant (MPSC/Talathi)</option>
                        <option>Working Professional / Homemaker</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Batch Mode
                      </label>
                      <select
                        value={formData.preferredBatch}
                        onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      >
                        <option>Regular Classroom (2 Months)</option>
                        <option>Express Fast-Track (1 Month)</option>
                        <option>Weekend Special (Sat & Sun)</option>
                      </select>
                    </div>
                  </div>

                  {/* Time slot preference */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Preferred Daily Lab Timing Slot
                    </label>
                    <select
                      value={formData.preferredTiming}
                      onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
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
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:shadow-glow-blue text-white font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      Instant SMS confirmation & Free Course Prospectus sent to your mobile.
                    </p>
                  </div>

                </form>
              ) : (
                /* Success Confirmation Card */
                <div className="text-center py-6 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Provisional Seat Reserved
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      Welcome aboard, {formData.fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-2">
                      Your registration for <strong className="text-white">{formData.preferredBatch}</strong> ({formData.preferredTiming}) has been recorded.
                    </p>
                  </div>

                  {/* Booking Receipt Summary Box */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Registration ID:</span>
                      <strong className="text-brand-400 font-mono">APX-2025-{Math.floor(1000 + Math.random() * 9000)}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Contact Number:</span>
                      <span className="text-white">{formData.mobile}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Authorized Center:</span>
                      <span className="text-white">Apex Academy (ALC 411038)</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-semibold pt-0.5">
                      <span>Demo Session Status:</span>
                      <span>1-Day Free Access Confirmed</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700"
                    >
                      Register Another Candidate
                    </button>
                    <a
                      href="tel:+919876543210"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Counselor Now</span>
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
