import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { inquirySchema } from '../../lib/validations';
import { getStoredInquiries, saveStoredInquiries } from '../../lib/store';
import { InquiryRecord } from '../../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('12th Standard / College Student');
  const [preferredBatch, setPreferredBatch] = useState('Morning (07:30 AM - 09:30 AM)');
  const [batchType, setBatchType] = useState('Regular Classroom (2 Months)');
  
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

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
        notes: 'Submitted via quick modal booking popup.',
        createdAt: new Date().toISOString(),
      };

      saveStoredInquiries([newInquiry, ...currentList]);

      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 }
      });
    }, 450);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFieldErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto bg-[#0F172A] border border-white/15 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-5 space-y-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent-gold bg-accent-gold/15 px-2.5 py-0.5 rounded-full border border-accent-gold/30">
                MKCL Center • Degloor
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book Seat at Prerna Academy
              </h3>
              <p className="text-xs text-slate-400">
                Reserve your individual PC & claim your free 1-day demo trial class in Degloor.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Course Mode
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

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer disabled:opacity-50"
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
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">
                Seat Reserved Successfully!
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Welcome to Prerna Academy, {fullName}!
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto">
                We have registered your seat for the <strong>{preferredBatch}</strong> batch. Our coordinator will call you on <strong>{phone}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-left space-y-1">
              <p className="font-bold text-white">Center Address:</p>
              <p className="text-slate-400">Near Global English School, Rampur Road / Nathnagar, Degloor</p>
              <p className="text-accent-gold font-bold">Helpline: +91 99758 75005</p>
            </div>

            <button
              onClick={handleClose}
              className="btn-gold text-xs px-8 py-3 rounded-full uppercase tracking-wider cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
