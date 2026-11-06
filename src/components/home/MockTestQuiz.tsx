import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizData';
import confetti from 'canvas-confetti';
import { Monitor, Check, ArrowRight, RotateCcw, Award, CheckCircle, XCircle, Sparkles } from 'lucide-react';

interface MockTestQuizProps {
  onOpenEnrollment: () => void;
}

export const MockTestQuiz: React.FC<MockTestQuizProps> = ({ onOpenEnrollment }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ = quizQuestions[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    setIsSubmitted(true);
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });

    if (score >= 3) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  const totalScore = quizQuestions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <section id="quiz" className="py-14 sm:py-20 bg-dark-900/40 border-y border-white/5 w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold text-gold-400">
            <Monitor className="w-3.5 h-3.5 text-gold-400" />
            <span>Beginner-Friendly Computer Quiz</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Test Your Computer Readiness
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Try this quick 5-question computer basics test. Designed so anyone from 5th standard to college students can answer easily!
          </p>
        </div>

        {/* Modern Quiz Box Card */}
        <div className="modern-card rounded-2xl p-5 sm:p-8 relative">
          
          {!isSubmitted ? (
            <div className="space-y-5">
              
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs font-bold border-b border-white/10 pb-3">
                <span className="text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-slate-400 text-[11px] sm:text-xs">
                  Prerna Computer Academy • Degloor
                </span>
              </div>

              {/* Progress Bar in Gold */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5">
                <div
                  className="bg-gold-500 h-full transition-all duration-300 shadow-glow-gold"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <div className="py-1">
                <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full min-h-[50px] p-3.5 sm:p-4 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-gold-500/20 border-gold-400 text-white shadow-glow-gold'
                          : 'bg-slate-900/80 border-white/10 text-slate-200 hover:bg-slate-800 hover:border-gold-500/40 active:scale-98'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected ? 'bg-gold-500 text-dark-950' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-gold-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-black text-xs flex items-center gap-1.5 disabled:opacity-30 active:scale-95 transition-all shadow-md"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="btn-primary px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider disabled:opacity-30 active:scale-95 transition-all shadow-glow-gold"
                  >
                    Submit & See Score
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View with Celebration */
            <div className="text-center space-y-5 py-3 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-glow-gold">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Quiz Completed Successfully!
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  You Scored {totalScore} / {quizQuestions.length} ({Math.round((totalScore / quizQuestions.length) * 100)}%)
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mt-1.5">
                  {totalScore >= 4 
                    ? '🎉 शाब्बास! You have great basic computer awareness! Join Prerna Computer Academy in Degloor to master Word, Excel, typing & complete MS-CIT!'
                    : 'छान प्रयत्न! Joining MS-CIT at Prerna Academy will make you 100% confident with daily hands-on practice in Degloor.'}
                </p>
              </div>

              {/* Answers Review */}
              <div className="text-left bg-dark-950 p-4 rounded-xl border border-white/10 space-y-2.5 max-h-56 overflow-y-auto">
                <p className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">Correct Answers & Explanations:</p>
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correctIndex;
                  return (
                    <div key={idx} className="text-xs border-b border-white/5 pb-2">
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <span className="font-semibold text-slate-200">{q.question}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-5.5 mt-0.5">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>

              {/* Retake & Enroll CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleReset}
                  className="btn-secondary w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="btn-primary w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-glow-gold"
                >
                  <Sparkles className="w-3.5 h-3.5 text-dark-950" />
                  <span>Enroll at Prerna Academy Degloor</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};