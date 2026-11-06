import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizData';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  HelpCircle, 
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
    // Calculate score
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
    <section id="quiz" className="py-20 bg-slate-900/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Brain className="w-3.5 h-3.5" />
            <span>Interactive Self-Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Your <span className="text-gradient-blue">Digital Readiness</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Take this quick 5-question MS-CIT mini quiz to assess your computer knowledge. 
            Score 4+ to earn an early-enrollment scholarship voucher!
          </p>
        </div>

        {/* Quiz Card Frame */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          
          {!isSubmitted ? (
            <div className="space-y-6">
              
              {/* Progress Bar & Header */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-800 pb-4">
                <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                <span className="text-brand-400 font-bold">MS-CIT Sample Exam Question</span>
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
                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-brand-600/20 border-brand-500 text-white shadow-glow-blue/20'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-brand-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs flex items-center gap-2 disabled:opacity-40"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-brand-500 text-white font-bold text-xs uppercase tracking-wider shadow-glow-emerald disabled:opacity-40"
                  >
                    Submit & View Score
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View */
            <div className="text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Assessment Completed!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  You Scored {totalScore} / {quizQuestions.length} ({Math.round((totalScore / quizQuestions.length) * 100)}%)
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mt-2">
                  {totalScore >= 4 
                    ? '🎉 Outstanding! You have great fundamental instinct. Join MS-CIT to master corporate-grade Excel, Cyber Security, and AI productivity tools!'
                    : 'Good attempt! Joining MS-CIT will help you systematically master these computer skills with daily hands-on practice.'}
                </p>
              </div>

              {/* Answers Review Accordion Summary */}
              <div className="text-left bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <p className="text-xs font-bold text-slate-300 uppercase">Question Key & Explanations:</p>
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700 flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Early Admission Discount</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
