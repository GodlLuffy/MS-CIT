import React from 'react';
import { batchesData, feeDetails } from '../../data/batchesData';
import { 
  Calendar, 
  Clock, 
  Check, 
  CreditCard, 
  Sparkles, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface FeeAndBatchesProps {
  onOpenEnrollment: () => void;
}

export const FeeAndBatches: React.FC<FeeAndBatchesProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="batches" className="py-14 sm:py-20 bg-aubergine-950/80 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-xs font-bold text-marigold-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Batches & Fee Transparency</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Flexible Timings & <span className="text-gradient-marigold">Affordable Fee</span>
          </h2>
          <p className="text-silver-300 text-xs sm:text-base leading-relaxed">
            Convenient batches tailored for school students, Degloor college attendees, and job aspirants. 
            Official MKCL government fee structure with convenient installment support.
          </p>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {batchesData.map((batch) => {
            return (
              <div
                key={batch.id}
                className="glass-card rounded-2xl p-5 sm:p-7 border border-marigold-500/25 hover:border-marigold-500/50 flex flex-col justify-between relative group hover:shadow-glow-marigold/20 transition-all"
              >
                <div>
                  {/* Badge & Mode */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-marigold-500/15 text-marigold-400 border border-marigold-500/30">
                      {batch.mode}
                    </span>
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                        batch.seatStatus === 'Only 3 Left'
                          ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                          : batch.seatStatus === 'Filling Fast'
                          ? 'bg-marigold-500/20 text-marigold-300 border border-marigold-500/40'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                      {batch.seatStatus}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-marigold-300 transition-colors">
                    {batch.title}
                  </h3>
                  
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-silver-300">
                      <Clock className="w-4 h-4 text-marigold-400 shrink-0" />
                      <span className="font-semibold text-white">{batch.duration}</span>
                      <span className="text-silver-500">•</span>
                      <span>{batch.hoursPerDay}</span>
                    </div>
                  </div>

                  <p className="text-xs text-silver-300 mb-4 leading-relaxed bg-aubergine-950 p-3 rounded-xl border border-marigold-500/15">
                    <strong className="text-marigold-400">Target Student: </strong>
                    {batch.idealFor}
                  </p>

                  {/* Timings List */}
                  <div className="space-y-2 mb-5">
                    <p className="text-xs font-bold text-marigold-400 uppercase tracking-wider">
                      Daily Slot Timings in Degloor:
                    </p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {batch.timings.map((time: string, idx: number) => (
                        <div
                          key={idx}
                          className="text-xs bg-aubergine-950 px-3 py-2 rounded-lg border border-marigold-500/15 text-silver-200 flex items-center justify-between"
                        >
                          <span>{time}</span>
                          <span className="text-[10px] text-marigold-400 font-bold">Available</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Batch Button */}
                <button
                  onClick={onOpenEnrollment}
                  className="w-full py-3 rounded-xl bg-aubergine-900 hover:bg-marigold-500 text-silver-200 hover:text-aubergine-950 font-bold text-xs uppercase tracking-wider border border-marigold-500/30 hover:border-marigold-500 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select This Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Transparent Fee Summary Box */}
        <div className="glass-card rounded-3xl p-5 sm:p-9 border border-marigold-500/35 bg-gradient-to-br from-aubergine-900/90 to-aubergine-950/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Price Column */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3.5 lg:border-r lg:border-marigold-500/20 lg:pr-8">
              <span className="inline-block text-[11px] font-bold text-marigold-400 bg-marigold-500/15 border border-marigold-500/30 px-2.5 py-1 rounded-full uppercase">
                Official MKCL Prescribed Fee
              </span>
              <div>
                <p className="text-xs text-silver-400 uppercase tracking-widest font-semibold">Total Course Fee</p>
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mt-1">
                  <span className="text-3xl sm:text-5xl font-black text-white">₹4,500</span>
                  <span className="text-silver-400 text-xs sm:text-sm font-medium">All Inclusive</span>
                </div>
              </div>

              {/* Installment Scheme */}
              <div className="bg-aubergine-950 p-3.5 sm:p-4 rounded-xl border border-marigold-500/20 space-y-1.5 text-left">
                <p className="text-xs font-bold text-marigold-400 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" />
                  Easy 2-Part Installment Facility:
                </p>
                <div className="flex justify-between text-xs text-silver-200 border-b border-marigold-500/15 pb-1.5">
                  <span>1st Installment (At Admission):</span>
                  <strong className="text-white">₹2,500</strong>
                </div>
                <div className="flex justify-between text-xs text-silver-200 pt-0.5">
                  <span>2nd Installment (Within 30 Days):</span>
                  <strong className="text-white">₹2,000</strong>
                </div>
              </div>

              <button
                onClick={onOpenEnrollment}
                className="w-full py-3.5 rounded-xl btn-marigold uppercase tracking-wider shadow-glow-marigold active:scale-95 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-black"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register with Installment at Degloor</span>
              </button>
            </div>

            {/* Inclusions List Column */}
            <div className="lg:col-span-7 space-y-3.5">
              <h4 className="text-sm sm:text-base font-bold text-white">
                Everything Included in Your Admission at Prerna Academy:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {feeDetails.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-silver-200 bg-aubergine-950/70 p-2.5 sm:p-3 rounded-xl border border-marigold-500/15">
                    <Check className="w-4 h-4 text-marigold-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-marigold-500/10 border border-marigold-500/25 flex items-center gap-2.5 text-xs text-silver-300">
                <AlertCircle className="w-4 h-4 shrink-0 text-marigold-400" />
                <span>
                  Course fee includes official textbook, ERA 2025 assessment, online exam fees, and physical MSBTE certificate.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
