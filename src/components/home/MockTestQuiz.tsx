import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizData';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight,
  Monitor,
  Check
} from 'lucide-react';

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
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const totalScore = calculateScore();

  return (
    <section id="quiz" className="py-14 sm:py-20 bg-aubergine-950/70 relative w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="glow-orb-marigold w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Heading with Luxury Marigold Accent */}
        <div className="text-center mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-xs font-bold text-marigold-300">
            <Monitor className="w-3.5 h-3.5 text-marigold-400" />
            <span>Beginner-Friendly Computer Quiz</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Test Your <span className="text-gradient-marigold">Computer Knowledge</span>
          </h2>
          <p className="text-silver-300 text-xs sm:text-sm max-w-lg mx-auto">
            साधे व सोपे प्रश्न! Try this quick 5-question computer basics test. 
            Anyone from 5th standard to college students can answer easily!
          </p>
        </div>

        {/* Luxury Quiz Box Card */}
        <div className="rounded-3xl p-5 sm:p-9 border border-marigold-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-aubergine-900/95 via-aubergine-950/95 to-aubergine-900/95 backdrop-blur-xl">
          
          {!isSubmitted ? (
            <div className="space-y-5 sm:space-y-6">
              
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs font-bold border-b border-aubergine-800 pb-3">
                <span className="text-marigold-300 bg-marigold-500/10 px-2.5 py-0.5 rounded-full border border-marigold-500/20">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-silver-400 text-[11px] sm:text-xs">
                  Prerna Computer Academy • Degloor
                </span>
              </div>

              {/* Marigold Progress Bar */}
              <div className="w-full bg-aubergine-900 h-2 rounded-full overflow-hidden border border-aubergine-800">
                <div
                  className="bg-gradient-to-r from-marigold-500 via-marigold-400 to-amber-300 h-full transition-all duration-300 shadow-glow-marigold"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <div className="py-1">
                <h3 className="text-base sm:text-xl font-bold text-white leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* Simple & Clear Options Grid */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 sm:p-4 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-marigold-500/20 border-marigold-400 text-white shadow-glow-marigold'
                          : 'bg-aubergine-950/80 border-aubergine-800 text-silver-200 hover:bg-aubergine-900 hover:border-marigold-500/40 active:scale-98'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected ? 'bg-marigold-500 text-aubergine-950' : 'bg-aubergine-800 text-silver-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-marigold-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-aubergine-800 flex items-center justify-between gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-xs font-bold text-silver-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-5 py-2.5 rounded-xl bg-marigold-500 hover:bg-marigold-400 text-aubergine-950 font-black text-xs flex items-center gap-1.5 disabled:opacity-30 active:scale-95 transition-all shadow-md"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-6 py-2.5 rounded-xl btn-marigold text-xs uppercase tracking-wider disabled:opacity-30 active:scale-95 transition-all"
                  >
                    Submit & See Score
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View with Celebration */
            <div className="text-center space-y-5 py-3 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-marigold-600 to-amber-300 p-0.5 shadow-glow-marigold mx-auto">
                <div className="w-full h-full bg-aubergine-950 rounded-[14px] flex items-center justify-center text-marigold-400">
                  <Award className="w-8 h-8" />
                </div>
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-marigold-400">
                  Quiz Completed Successfully!
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  You Scored {totalScore} / {quizQuestions.length} ({Math.round((totalScore / quizQuestions.length) * 100)}%)
                </h3>
                <p className="text-silver-300 text-xs sm:text-sm max-w-md mx-auto mt-1.5">
                  {totalScore >= 4 
                    ? '🎉 शाब्बास! You have great basic computer awareness! Join Prerna Computer Academy in Degloor to master Word, Excel, typing & complete MS-CIT!'
                    : 'छान प्रयत्न! Joining MS-CIT at Prerna Academy will make you 100% confident with daily hands-on practice in Degloor.'}
                </p>
              </div>

              {/* Answers Review */}
              <div className="text-left bg-aubergine-950 p-4 rounded-xl border border-aubergine-800 space-y-2.5 max-h-56 overflow-y-auto">
                <p className="text-[11px] font-bold text-marigold-400 uppercase tracking-wider">Correct Answers & Explanations:</p>
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correctIndex;
                  return (
                    <div key={idx} className="text-xs border-b border-aubergine-900 pb-2">
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <span className="font-semibold text-silver-200">{q.question}</span>
                      </div>
                      <p className="text-[11px] text-silver-400 pl-5.5 mt-0.5">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-aubergine-900 hover:bg-aubergine-800 text-silver-300 font-bold text-xs border border-aubergine-700 flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-marigold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
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
