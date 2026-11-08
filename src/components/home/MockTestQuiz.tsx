import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="quiz" className="py-16 sm:py-24 bg-[#FAF9F6] border-y border-ice w-full relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ice/60 border border-ice text-xs font-bold text-aubergine shadow-sm">
            <Monitor className="w-3.5 h-3.5 text-marigold-600" />
            <span>Interactive Mini-Quiz</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-aubergine tracking-tight">
            Test Your Computer Readiness
          </h2>
          <p className="text-xs sm:text-sm text-aubergine/70 max-w-lg mx-auto">
            Try this quick 5-question computer basics test. Designed so anyone from school students to job aspirants can answer easily!
          </p>
        </div>

        {/* Clean Luxury Quiz Box Card */}
        <div className="modern-card p-6 sm:p-9 relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="quiz-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                
                {/* Header Info */}
                <div className="flex items-center justify-between text-xs font-bold border-b border-ice pb-3">
                  <span className="text-aubergine bg-ice px-3 py-1 rounded-full border border-ice-300">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-aubergine/60 text-[11px] sm:text-xs">
                    Prerna Computer Academy • Degloor
                  </span>
                </div>

                {/* Progress Bar in Marigold */}
                <div className="w-full bg-ice/50 h-2 rounded-full overflow-hidden border border-ice">
                  <div
                    className="bg-marigold h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question Text */}
                <div className="py-1">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-aubergine leading-snug">
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
                        className={`w-full min-h-[52px] p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? 'bg-marigold/15 border-marigold text-aubergine shadow-sm ring-1 ring-marigold'
                            : 'bg-[#FAF9F6] border-ice text-aubergine/90 hover:bg-white hover:border-aubergine/30'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                            isSelected ? 'bg-marigold text-aubergine-950' : 'bg-ice text-aubergine'
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
                <div className="pt-4 border-t border-ice flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 text-xs font-semibold text-aubergine/60 hover:text-aubergine disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Previous
                  </button>

                  {currentQuestionIndex < quizQuestions.length - 1 ? (
                    <button
                      onClick={handleNext}
                      disabled={selectedAnswers[currentQuestionIndex] === undefined}
                      className="btn-gold text-xs flex items-center gap-2 disabled:opacity-40 cursor-pointer shadow-marigold-glow"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleFinish}
                      disabled={selectedAnswers[currentQuestionIndex] === undefined}
                      className="btn-gold text-xs font-bold uppercase tracking-wider disabled:opacity-40 cursor-pointer shadow-marigold-glow"
                    >
                      Submit & See Score
                    </button>
                  )}
                </div>

              </motion.div>
            ) : (
              /* Result View with Celebration */
              <motion.div
                key="quiz-result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-4"
              >
                <div className="w-20 h-20 rounded-3xl bg-ice/50 border border-ice text-aubergine flex items-center justify-center mx-auto shadow-md">
                  <Award className="w-10 h-10 text-marigold-600" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-marigold-600 block mb-1">
                    Quiz Completed!
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-aubergine">
                    You Scored {totalScore} out of {quizQuestions.length}!
                  </h3>
                  <p className="text-xs sm:text-sm text-aubergine/70 mt-2 max-w-md mx-auto">
                    {totalScore >= 4
                      ? 'Excellent computer instincts! You are ready to score 95%+ marks in the official MKCL MS-CIT exam!'
                      : 'Good attempt! At Prerna Computer Academy Degloor, our step-by-step guidance will make you a 100% confident computer master!'}
                  </p>
                </div>

                {/* Review List */}
                <div className="space-y-2 text-left pt-2 border-t border-ice">
                  {quizQuestions.map((q, idx) => {
                    const isCorrect = selectedAnswers[idx] === q.correctIndex;
                    return (
                      <div key={idx} className="p-3.5 rounded-xl bg-ice/20 border border-ice text-xs flex items-start gap-2.5">
                        {isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <strong className="text-aubergine block font-semibold">{q.question}</strong>
                          <span className="text-[11px] text-aubergine/60">{q.explanation}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Result Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <button
                    onClick={onOpenEnrollment}
                    className="btn-gold w-full sm:w-auto text-xs uppercase tracking-wider cursor-pointer shadow-marigold-glow"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
                    <span>Enroll for MS-CIT 2025</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="btn-outline w-full sm:w-auto text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
