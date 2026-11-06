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
    <section id="quiz" className="py-14 sm:py-20 bg-white border-y border-aubergine-700/10 w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-xs font-bold text-aubergine-900">
            <Monitor className="w-3.5 h-3.5 text-marigold-600" />
            <span>Beginner-Friendly Computer Quiz (सोपी प्रश्नमंजुषा)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-aubergine-900 tracking-tight">
            Test Your Computer Readiness
          </h2>
          <p className="text-xs sm:text-sm text-aubergine-700 max-w-lg mx-auto">
            साधे व सोपे प्रश्न! Try this quick 5-question computer basics test. Anyone from 5th standard to college students can answer easily!
          </p>
        </div>

        {/* Quiz Box Card */}
        <div className="editorial-card rounded-2xl p-5 sm:p-8 border border-aubergine-700/15 shadow-md bg-silver-50">
          
          {!isSubmitted ? (
            <div className="space-y-5">
              
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs font-bold border-b border-aubergine-700/10 pb-3">
                <span className="text-aubergine-900 bg-marigold-500/20 px-2.5 py-0.5 rounded-full border border-marigold-500/30">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-aubergine-700 text-[11px] sm:text-xs">
                  Prerna Computer Academy • Degloor
                </span>
              </div>

              {/* Progress Bar in Marigold */}
              <div className="w-full bg-silver-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-marigold-500 h-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text in English & Marathi */}
              <div className="py-1">
                <h3 className="text-base sm:text-xl font-bold text-aubergine-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options Grid (Mobile-friendly large tap targets) */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full min-h-[50px] p-3.5 sm:p-4 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-marigold-500/20 border-marigold-500 text-aubergine-950 font-bold shadow-sm'
                          : 'bg-white border-aubergine-700/15 text-aubergine-800 hover:bg-silver-100 hover:border-aubergine-700/30 active:scale-98'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected ? 'bg-marigold-500 text-aubergine-950' : 'bg-silver-200 text-aubergine-800'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-marigold-600 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-aubergine-700/10 flex items-center justify-between gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-xs font-bold text-aubergine-700 hover:text-aubergine-950 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-5 py-2.5 rounded-xl bg-aubergine-700 hover:bg-aubergine-800 text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-30 active:scale-95 transition-all shadow-sm"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="btn-marigold px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider disabled:opacity-30 active:scale-95 transition-all"
                  >
                    Submit & See Score
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View with Celebration */
            <div className="text-center space-y-5 py-3">
              <div className="w-16 h-16 rounded-2xl bg-marigold-500/20 border border-marigold-500/40 text-marigold-600 flex items-center justify-center mx-auto shadow-sm">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-marigold-600">
                  Quiz Completed Successfully!
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-aubergine-900 mt-1">
                  You Scored {totalScore} / {quizQuestions.length} ({Math.round((totalScore / quizQuestions.length) * 100)}%)
                </h3>
                <p className="text-aubergine-700 text-xs sm:text-sm max-w-md mx-auto mt-1.5">
                  {totalScore >= 4 
                    ? '🎉 शाब्बास! You have great basic computer awareness! Join Prerna Computer Academy in Degloor to master Word, Excel, typing & complete MS-CIT!'
                    : 'छान प्रयत्न! Joining MS-CIT at Prerna Academy will make you 100% confident with daily hands-on practice in Degloor.'}
                </p>
              </div>

              {/* Answers Review */}
              <div className="text-left bg-white p-4 rounded-xl border border-aubergine-700/15 space-y-2.5 max-h-56 overflow-y-auto">
                <p className="text-[11px] font-bold text-aubergine-900 uppercase tracking-wider">Correct Answers & Explanations:</p>
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correctIndex;
                  return (
                    <div key={idx} className="text-xs border-b border-silver-200 pb-2">
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <span className="font-semibold text-aubergine-900">{q.question}</span>
                      </div>
                      <p className="text-[11px] text-aubergine-700 pl-5.5 mt-0.5">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>

              {/* Retake & Enroll CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-silver-200 hover:bg-silver-300 text-aubergine-900 font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="btn-marigold w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
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