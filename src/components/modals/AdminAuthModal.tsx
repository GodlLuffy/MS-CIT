import React, { useState } from 'react';
import { ShieldCheck, Lock, Eye, EyeOff, AlertCircle, X, KeyRound, Sparkles } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: () => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthenticated,
}) => {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Fetch configured PIN or use default (allows 9970, 9975, or first 5 digits of helpline 9970362555)
    const storedPin = localStorage.getItem('pca_admin_pin') || '9970';

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (pin === storedPin || pin === '9970' || pin === '99703' || pin === '9975') {
        sessionStorage.setItem('pca_admin_authenticated', 'true');
        setError('');
        setPin('');
        onAuthenticated();
      } else {
        setError('Incorrect Institute PIN. Access denied.');
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aubergine-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-md rounded-3xl p-6 sm:p-8 relative bg-white border border-ice shadow-2xl text-aubergine"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-ice/50 hover:bg-ice text-aubergine transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-aubergine text-marigold mx-auto flex items-center justify-center shadow-md border border-marigold/30">
            <Lock className="w-7 h-7" />
          </div>

          <div className="pt-1">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-marigold-700 bg-marigold/10 px-3 py-0.5 rounded-full border border-marigold/20">
              Institute Coordinator Login
            </span>
            <h3 className="font-serif text-2xl font-bold text-aubergine mt-1">
              Admin Console Access
            </h3>
            <p className="text-xs text-aubergine/70 mt-1 max-w-xs mx-auto">
              This area is restricted to authorized institute management. Enter your secure 4-digit PIN.
            </p>
          </div>
        </div>

        {/* PIN Form */}
        <form onSubmit={handleVerifyPin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-aubergine mb-1.5 flex items-center justify-between">
              <span>Institute PIN / Passcode</span>
              <span className="text-[11px] text-aubergine/50 font-normal">Default PIN: 9975</span>
            </label>

            <div className="relative">
              <KeyRound className="w-4 h-4 text-aubergine/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type={showPin ? 'text' : 'password'}
                maxLength={6}
                autoFocus
                placeholder="Enter 4-digit PIN..."
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ''));
                  setError('');
                }}
                className={`w-full pl-11 pr-11 py-3 rounded-2xl bg-[#FAF9F6] border ${
                  error ? 'border-rose-500' : 'border-ice'
                } text-center tracking-[0.3em] font-mono text-lg font-bold text-aubergine focus:outline-none focus:border-marigold focus:bg-white transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-aubergine/50 hover:text-aubergine"
              >
                {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-xs text-rose-600 mt-2 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || pin.length < 4}
              className="btn-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-marigold-glow cursor-pointer disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4 text-aubergine-950" />
              <span>{isSubmitting ? 'Verifying...' : 'Unlock Admin Dashboard'}</span>
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-ice text-center text-[11px] text-aubergine/60 space-y-1">
          <p>
            Quick Shortcut: Press <kbd className="px-1.5 py-0.5 rounded bg-ice text-aubergine font-mono text-[10px]">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-ice text-aubergine font-mono text-[10px]">Shift</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-ice text-aubergine font-mono text-[10px]">A</kbd> anytime
          </p>
          <p>Or navigate to URL with <code className="text-marigold-700 font-bold">#admin</code></p>
        </div>

      </div>
    </div>
  );
};