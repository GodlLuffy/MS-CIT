import React from 'react';
import { batchesData, feeDetails } from '../../data/batchesData';
import { 
  Calendar, 
  Clock, 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  Users, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface FeeAndBatchesProps {
  onOpenEnrollment: () => void;
}

export const FeeAndBatches: React.FC<FeeAndBatchesProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="batches" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>Batches & Fee Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Timings & <span className="text-gradient-blue">Affordable Investment</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose a batch schedule that fits your daily routine. No hidden fees. 
            Government prescribed MKCL standardized fee with flexible installment options.
          </p>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {batchesData.map((batch) => {
            const isFillingFast = batch.seatStatus === 'Filling Fast' || batch.seatStatus === 'Only 3 Left';

            return (
              <div
                key={batch.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-brand-500/40 flex flex-col justify-between relative group hover:shadow-glow-blue/20 transition-all"
              >
                <div>
                  {/* Badge & Mode */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {batch.mode}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                        batch.seatStatus === 'Only 3 Left'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          : batch.seatStatus === 'Filling Fast'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                      {batch.seatStatus}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {batch.title}
                  </h3>
                  
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                      <span className="font-semibold text-white">{batch.duration}</span>
                      <span className="text-slate-500">•</span>
                      <span>{batch.hoursPerDay}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                    <strong className="text-slate-300">Target Candidate: </strong>
                    {batch.idealFor}
                  </p>

                  {/* Timings List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Available Slot Timings:
                    </p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {batch.timings.map((time, idx) => (
                        <div
                          key={idx}
                          className="text-xs bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 text-slate-300 flex items-center justify-between"
                        >
                          <span>{time}</span>
                          <span className="text-[10px] text-emerald-400 font-semibold">Available</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Batch Button */}
                <button
                  onClick={onOpenEnrollment}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-slate-700 hover:border-brand-500 transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Select This Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Transparent Fee Summary Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-brand-500/30 bg-gradient-to-br from-slate-900/90 to-slate-950/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Price Column */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4 lg:border-r lg:border-slate-800 lg:pr-8">
              <span className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">
                Official MKCL Government Prescribed
              </span>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Complete Course Fee</p>
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">₹4,500</span>
                  <span className="text-slate-400 text-xs sm:text-sm font-medium">All Inclusive (No hidden tax)</span>
                </div>
              </div>

              {/* Installment Scheme */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-left">
                <p className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" />
                  Easy 2-Part Installment Facility:
                </p>
                <div className="flex justify-between text-xs text-slate-300 border-b border-slate-800/80 pb-1.5">
                  <span>1st Installment (At Admission):</span>
                  <strong className="text-white">₹2,500</strong>
                </div>
                <div className="flex justify-between text-xs text-slate-300 pt-0.5">
                  <span>2nd Installment (Within 30 Days):</span>
                  <strong className="text-white">₹2,000</strong>
                </div>
              </div>

              <button
                onClick={onOpenEnrollment}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-brand-500 hover:from-emerald-400 hover:to-brand-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-glow-emerald hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register Online with Easy Installment</span>
              </button>
            </div>

            {/* Inclusions List Column */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Everything Included in Your MS-CIT Admission:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {feeDetails.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-brand-500/5 border border-brand-500/20 flex items-center gap-3 text-xs text-brand-300">
                <AlertCircle className="w-4 h-4 shrink-0 text-brand-400" />
                <span>
                  <strong>Note:</strong> Course fee covers candidate enrollment with MKCL, final online exam registration, and physical certificate delivery to the center.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
