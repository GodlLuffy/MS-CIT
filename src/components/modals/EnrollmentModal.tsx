import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [batchMode, setBatchMode] = useState('Regular Classroom (2 Months)');
  const [preferredTiming, setPreferredTiming] = useState('Morning (07:30 AM - 09:30 AM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

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
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 }
      });
    }, 500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto bg-white border border-gray-light shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gold-light text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-5 space-y-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent-gold bg-gold-light px-2.5 py-0.5 rounded-full border border-accent-gold/25">
                MKCL Center • Degloor
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Book Seat at Prerna Academy
              </h3>
              <p className="text-xs text-gray-medium">
                Reserve your individual PC & claim your free 1-day demo trial class in Degloor.
              </p>
            </div>

            {error && (
              <div className="p-3 mb-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
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
                  value={preferredTiming}
                  onChange={(e) => setPreferredTiming(e.target.value)}
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
                  Course Mode
                </label>
                <select
                  value={batchMode}
                  onChange={(e) => setBatchMode(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-gold-light/40 border border-gray-light text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-accent-gold transition-colors"
                >
                  <option value="Regular Classroom (2 Months)">Regular Classroom (2 Months - Recommended)</option>
                  <option value="Fast Track Intensive (1 Month)">Fast Track Intensive (1 Month)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Seat Reservation'}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">
                Seat Reserved Successfully!
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                Welcome to Prerna Academy, {fullName}!
              </h3>
              <p className="text-xs text-gray-medium mt-2 max-w-sm mx-auto">
                We have registered your seat for the <strong>{preferredTiming}</strong> batch. Our coordinator will call you on <strong>{mobile}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gold-light border border-accent-gold/20 text-xs text-left space-y-1">
              <p className="font-bold text-slate-900">Center Address:</p>
              <p className="text-gray-medium">Near Global English School, Rampur Road / Nathnagar, Degloor</p>
              <p className="text-accent-gold font-bold">Helpline: +91 99758 75005</p>
            </div>

            <button
              onClick={handleClose}
              className="btn-primary text-xs px-8 py-3 rounded-full uppercase tracking-wider"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
