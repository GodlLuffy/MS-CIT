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
    <section id="quiz" className="py-16 sm:py-24 bg-gold-light/40 border-y border-gray-light w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent-gold/30 text-xs font-bold text-accent-gold shadow-sm">
            <Monitor className="w-3.5 h-3.5 text-accent-gold" />
            <span>Beginner-Friendly Computer Quiz</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Test Your Computer Readiness
          </h2>
          <p className="text-xs sm:text-sm text-gray-medium max-w-lg mx-auto">
            Try this quick 5-question computer basics test. Designed so anyone from school students to job aspirants can answer easily!
          </p>
        </div>

        {/* Clean Luxury Quiz Box Card */}
        <div className="card-luxury p-6 sm:p-9 relative">
          
          {!isSubmitted ? (
            <div className="space-y-6">
              
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs font-bold border-b border-gray-light pb-3">
                <span className="text-accent-gold bg-gold-light px-3 py-1 rounded-full border border-accent-gold/20">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-gray-medium text-[11px] sm:text-xs">
                  Prerna Computer Academy • Degloor
                </span>
              </div>

              {/* Progress Bar in Gold */}
              <div className="w-full bg-gold-light h-2 rounded-full overflow-hidden border border-gray-light">
                <div
                  className="bg-accent-gold h-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <div className="py-1">
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full min-h-[52px] p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-gold-light border-accent-gold text-slate-950 shadow-md ring-1 ring-accent-gold'
                          : 'bg-white border-gray-light text-slate-800 hover:bg-gold-light/40 hover:border-accent-gold/40'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isSelected ? 'bg-accent-gold text-slate-950' : 'bg-gray-light text-slate-700'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-accent-gold shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-gray-light flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-xs font-semibold text-gray-medium hover:text-slate-900 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="btn-gold text-xs flex items-center gap-2 disabled:opacity-40"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="btn-gold text-xs font-bold uppercase tracking-wider disabled:opacity-40"
                  >
                    Submit & See Score
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View with Celebration */
            <div className="text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-20 h-20 rounded-3xl bg-gold-light border border-accent-gold/30 text-accent-gold flex items-center justify-center mx-auto shadow-md">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block mb-1">
                  Quiz Completed!
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
                  You Scored {totalScore} out of {quizQuestions.length}!
                </h3>
                <p className="text-xs sm:text-sm text-gray-medium mt-2 max-w-md mx-auto">
                  {totalScore >= 4
                    ? 'Excellent computer instincts! You are ready to score 95%+ marks in the official MKCL MS-CIT exam!'
                    : 'Good attempt! At Prerna Computer Academy Degloor, our step-by-step guidance will make you a 100% confident computer master!'}
                </p>
              </div>

              {/* Review List */}
              <div className="space-y-2 text-left pt-2 border-t border-gray-light">
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correctIndex;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-gold-light/40 border border-gray-light text-xs flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <strong className="text-slate-900 block font-semibold">{q.question}</strong>
                        <span className="text-[11px] text-gray-medium">{q.explanation}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Result Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={onOpenEnrollment}
                  className="btn-gold w-full sm:w-auto text-xs uppercase tracking-wider"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Enroll for MS-CIT 2025</span>
                </button>

                <button
                  onClick={handleReset}
                  className="btn-outline w-full sm:w-auto text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
