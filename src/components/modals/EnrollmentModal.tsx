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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-aubergine-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="editorial-card w-full max-w-lg rounded-3xl p-5 sm:p-7 relative max-h-[90vh] overflow-y-auto bg-white border border-aubergine-700/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-silver-100 text-aubergine-700 hover:text-aubergine-950 hover:bg-silver-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-4 sm:mb-5 space-y-1">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider text-marigold-600 bg-marigold-500/15 px-2.5 py-0.5 rounded border border-marigold-500/30">
                MKCL Center • Degloor (जि. नांदेड)
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-aubergine-900">
                Book Seat at Prerna Academy
              </h3>
              <p className="text-xs text-aubergine-700">
                Reserve your individual PC & claim your free 1-day demo trial class in Degloor.
              </p>
            </div>

            {error && (
              <div className="p-3 mb-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-aubergine-900 mb-1">
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
                <label className="block text-xs font-semibold text-aubergine-900 mb-1">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-aubergine-900 mb-1">
                    Batch Mode (कालावधी)
                  </label>
                  <select
                    value={batchMode}
                    onChange={(e) => setBatchMode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs focus:outline-none focus:border-marigold-500 focus:bg-white"
                  >
                    <option>Regular Classroom (2 Months)</option>
                    <option>Fast-Track Express (1 Month)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-aubergine-900 mb-1">
                    Preferred Time Slot (वेळ)
                  </label>
                  <select
                    value={preferredTiming}
                    onChange={(e) => setPreferredTiming(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-silver-100 border border-aubergine-700/20 text-aubergine-900 text-xs focus:outline-none focus:border-marigold-500 focus:bg-white"
                  >
                    <option>Morning (07:30 AM)</option>
                    <option>Mid-Day (10:00 AM)</option>
                    <option>Afternoon (02:00 PM)</option>
                    <option>Evening (04:00 PM)</option>
                    <option>Late Evening (06:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-marigold w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2"
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

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-aubergine-600">
                <MapPin className="w-3.5 h-3.5 text-marigold-600" />
                <span>Prerna Computer Academy, Rampur Road, Degloor</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-5 space-y-3.5 animate-fadeIn">
            <div className="w-13 h-13 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-aubergine-900">
              Seat Provisionally Reserved!
            </h3>
            
            <p className="text-xs text-aubergine-700">
              Congratulations <strong className="text-aubergine-900">{fullName}</strong>! Our Degloor center team will contact you at 
              <strong className="text-marigold-700"> {mobile}</strong> shortly with your batch details.
            </p>

            <div className="bg-silver-100 p-3.5 rounded-xl border border-aubergine-700/10 text-xs text-left space-y-1.5 text-aubergine-800">
              <p>📍 <strong>Center:</strong> Prerna Computer Academy Degloor</p>
              <p>🕒 <strong>Selected Timing:</strong> {preferredTiming} ({batchMode})</p>
              <p>🎫 <strong>1-Day Free Trial Demo:</strong> Active</p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="btn-silver w-full py-2.5 rounded-xl text-xs font-bold"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};