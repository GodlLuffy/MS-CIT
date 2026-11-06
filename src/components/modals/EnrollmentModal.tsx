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
  const [batchMode, setBatchMode] = useState('नियमित बॅच (Regular - २ महिने)');
  const [preferredTiming, setPreferredTiming] = useState('सकाळी (Morning 07:30 AM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 3) {
      setError('कृपया आपले पूर्ण नाव प्रविष्ट करा.');
      return;
    }
    const digits = mobile.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('कृपया १० अंकी वैध मोबाईल नंबर प्रविष्ट करा.');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-aubergine-950/90 backdrop-blur-md animate-fadeIn">
      <div 
        className="luxury-card w-full max-w-lg rounded-3xl p-5 sm:p-7 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-aubergine-950 text-silver-300 hover:text-white hover:bg-aubergine-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header in Marathi */}
            <div className="mb-4 sm:mb-5 space-y-1">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider text-marigold-400 bg-aubergine-950 px-2.5 py-0.5 rounded border border-marigold-500/30">
                MKCL अधिकृत केंद्र • देगलूर
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-silver-100">
                प्रेरणा अकॅडमीमध्ये जागा आरक्षित करा
              </h3>
              <p className="text-xs text-silver-300">
                तुमचा स्वतंत्र कॉम्प्युटर निश्चित करा आणि १ दिवसाचा मोफत डेमो क्लास मिळवा.
              </p>
            </div>

            {error && (
              <div className="p-3 mb-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-silver-200 mb-1">
                  विद्यार्थ्याचे पूर्ण नाव (Full Name) *
                </label>
                <input
                  type="text"
                  placeholder="उदा. राहुल गोविंद शिंदे"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-aubergine-950 border border-aubergine-800 text-silver-100 text-xs sm:text-sm focus:outline-none focus:border-marigold-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-silver-200 mb-1">
                  WhatsApp मोबाईल नंबर (Mobile Number) *
                </label>
                <input
                  type="tel"
                  placeholder="उदा. 9975875005"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-aubergine-950 border border-aubergine-800 text-silver-100 text-xs sm:text-sm focus:outline-none focus:border-marigold-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-silver-200 mb-1">
                    कोर्स प्रकार (Batch Mode)
                  </label>
                  <select
                    value={batchMode}
                    onChange={(e) => setBatchMode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-aubergine-950 border border-aubergine-800 text-silver-100 text-xs focus:outline-none focus:border-marigold-500"
                  >
                    <option>नियमित (Regular - २ महिने)</option>
                    <option>फास्ट ट्रॅक (Express - १ महिना)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-silver-200 mb-1">
                    सोयीस्कर वेळ (Preferred Timing)
                  </label>
                  <select
                    value={preferredTiming}
                    onChange={(e) => setPreferredTiming(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-aubergine-950 border border-aubergine-800 text-silver-100 text-xs focus:outline-none focus:border-marigold-500"
                  >
                    <option>सकाळी (Morning 07:30 AM)</option>
                    <option>दुपारी (Mid-Day 10:00 AM)</option>
                    <option>दुपारी (Afternoon 02:00 PM)</option>
                    <option>संध्याकाळी (Evening 04:00 PM)</option>
                    <option>सायंकाळी (Evening 06:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-marigold w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-glow-marigold active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>नोंदणी होत आहे...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-aubergine-950" />
                      <span>मोफत जागा आरक्षित करा (Confirm Reservation)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-silver-400">
                <MapPin className="w-3.5 h-3.5 text-marigold-400" />
                <span>प्रेरणा कॉम्प्युटर अकॅडमी, रामपूर रोड, देगलूर</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State in Marathi */
          <div className="text-center py-5 space-y-3.5 animate-fadeIn">
            <div className="w-13 h-13 rounded-full bg-marigold-500/20 text-marigold-400 border border-marigold-500/40 flex items-center justify-center mx-auto shadow-glow-marigold">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-black text-silver-100">
              जागा तात्पुरती आरक्षित झाली आहे!
            </h3>
            
            <p className="text-xs text-silver-200">
              अभिनंदन <strong className="text-marigold-400">{fullName}</strong>! आमची देगलूर केंद्र टीम लवकरच 
              <strong className="text-white"> {mobile}</strong> वर कॉल करून बॅच तपशील सांगेल.
            </p>

            <div className="bg-aubergine-950 p-3.5 rounded-xl border border-marigold-500/20 text-xs text-left space-y-1.5 text-silver-300">
              <p>📍 <strong>केंद्र:</strong> प्रेरणा कॉम्प्युटर अकॅडमी देगलूर</p>
              <p>🕒 <strong>निवडलेली वेळ:</strong> {preferredTiming} ({batchMode})</p>
              <p>🎫 <strong>१ दिवसाचा मोफत डेमो:</strong> सक्रिय</p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="btn-marigold w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider"
              >
                बंद करा व मुख्य पानावर जा
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};