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
  Brain
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
    <section id="quiz" className="py-14 sm:py-20 bg-slate-900/50 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Brain className="w-3.5 h-3.5" />
            <span>Interactive Self-Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Your <span className="text-gradient-blue">Digital Readiness</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Take this quick 5-question MS-CIT mini quiz. Test your basic computer instincts 
            before enrolling at Prerna Computer Academy Degloor!
          </p>
        </div>

        {/* Quiz Card Frame */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-9 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          
          {!isSubmitted ? (
            <div className="space-y-5 sm:space-y-6">
              
              {/* Progress Bar & Header */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-800 pb-3">
                <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                <span className="text-brand-400 font-bold text-[11px] sm:text-xs">Sample MS-CIT Exam</span>
              </div>

              {/* Progress Indicator */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-brand-500 h-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3 sm:p-4 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-brand-600/20 border-brand-500 text-white shadow-glow-blue/20'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-900 active:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 sm:gap-3">
                        <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs flex items-center gap-1.5 disabled:opacity-40 active:scale-95 transition-all"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-brand-500 text-white font-bold text-xs uppercase tracking-wider shadow-glow-emerald disabled:opacity-40 active:scale-95 transition-all"
                  >
                    Submit Quiz
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View */
            <div className="text-center space-y-5 py-2 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Assessment Completed!
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1">
                  You Scored {totalScore} / {quizQuestions.length} ({Math.round((totalScore / quizQuestions.length) * 100)}%)
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mt-1.5">
                  {totalScore >= 4 
                    ? '🎉 Excellent instinct! Join Prerna Computer Academy in Degloor to master Advanced Excel, PowerPoint, and Cyber Safety!'
                    : 'Good try! Prerna Academy will build your confidence with 1-on-1 daily hands-on practice.'}
                </p>
              </div>

              {/* Answers Review */}
              <div className="text-left bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-800 space-y-2.5 max-h-56 overflow-y-auto">
                <p className="text-[11px] font-bold text-slate-300 uppercase">Review Explanations:</p>
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correctIndex;
                  return (
                    <div key={idx} className="text-xs border-b border-slate-900 pb-2">
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

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue active:scale-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Claim Admission at Degloor Center</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
