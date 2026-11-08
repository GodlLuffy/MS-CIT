import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { WhatsAppIcon, TelephoneIcon } from '../common/Icons';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-aubergine-950/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto bg-white border border-ice shadow-2xl text-aubergine"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-ice/50 hover:bg-ice text-aubergine transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-5 space-y-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-marigold-700 bg-marigold/10 px-2.5 py-0.5 rounded-full border border-marigold/20">
                MKCL Center • Degloor
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-aubergine">
                Book Seat at Prerna Academy
              </h3>
              <p className="text-xs text-aubergine/70">
                Reserve your individual PC & claim your free 1-day demo trial class in Degloor.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-aubergine mb-1.5">
                  Full Name (विद्यार्थ्याचे पूर्ण नाव) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border ${
                    fieldErrors.fullName ? 'border-rose-500' : 'border-ice'
                  } text-aubergine placeholder-aubergine/40 text-xs sm:text-sm focus:outline-none focus:border-marigold focus:bg-white transition-colors`}
                />
                {fieldErrors.fullName && (
                  <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{fieldErrors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-aubergine mb-1.5">
                  WhatsApp Contact No. (१० अंकी मोबाईल नंबर) *
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="e.g. 9970362555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className={`w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border ${
                    fieldErrors.phone ? 'border-rose-500' : 'border-ice'
                  } text-aubergine placeholder-aubergine/40 text-xs sm:text-sm focus:outline-none focus:border-marigold focus:bg-white transition-colors`}
                />
                {fieldErrors.phone && (
                  <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{fieldErrors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-aubergine mb-1.5">
                  Preferred Batch Timing
                </label>
                <select
                  value={preferredBatch}
                  onChange={(e) => setPreferredBatch(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-ice text-aubergine text-xs sm:text-sm focus:outline-none focus:border-marigold focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="Morning (07:30 AM - 09:30 AM)">Morning (07:30 AM - 09:30 AM)</option>
                  <option value="Afternoon (01:00 PM - 03:00 PM)">Afternoon (01:00 PM - 03:00 PM)</option>
                  <option value="Evening (04:00 PM - 06:00 PM)">Evening (04:00 PM - 06:00 PM)</option>
                  <option value="Weekend Special (Sat & Sun: 09:00 AM - 01:00 PM)">Weekend Special (Sat & Sun: 09:00 AM - 01:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-aubergine mb-1.5">
                  Course Mode
                </label>
                <select
                  value={batchType}
                  onChange={(e) => setBatchType(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-ice text-aubergine text-xs sm:text-sm focus:outline-none focus:border-marigold focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="Regular Classroom (2 Months)">Regular Classroom (2 Months - Recommended)</option>
                  <option value="Fast Track Intensive (1 Month)">Fast Track Intensive (1 Month)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-marigold-glow cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-aubergine-950" />
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Seat Reservation'}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-marigold-700 bg-marigold/10 px-3 py-1 rounded-full border border-marigold/20 inline-block">
                Seat Reserved Successfully!
              </span>
              <h3 className="font-serif text-2xl font-bold text-aubergine mt-2">
                Welcome to Prerna Academy, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-aubergine/80 mt-2 max-w-sm mx-auto leading-relaxed">
                We have registered your seat for the <strong>{preferredBatch}</strong> batch. Our institute coordinator will call you shortly on <strong>{phone}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-ice text-xs text-left space-y-1.5">
              <p className="font-bold text-aubergine">Center Address:</p>
              <p className="text-aubergine/70">Near Global English School, Rampur Road / Nathnagar, Degloor</p>
              <div className="pt-1 flex items-center gap-4 text-xs font-bold">
                <a href="tel:+919970362555" className="text-marigold-700 hover:underline flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <TelephoneIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Call: 99703 62555</span>
                </a>
                <a 
                  href="https://wa.me/919970362555?text=Hello%20Prerna%20Computer%20Academy%20Degloor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#25D366] hover:underline flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="btn-gold text-xs px-8 py-3 rounded-full uppercase tracking-wider cursor-pointer shadow-marigold-glow"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};