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
    <section id="quiz" className="py-14 sm:py-20 bg-aubergine-900/40 border-y border-aubergine-800 w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-xs font-bold text-marigold-300">
            <Monitor className="w-3.5 h-3.5 text-marigold-400" />
            <span>सोपी संगणक प्रश्नमंजुषा (Beginner Computer Quiz)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-silver-100 tracking-tight">
            तुमचे संगणक ज्ञान तपासा!
          </h2>
          <p className="text-xs sm:text-sm text-silver-300 max-w-lg mx-auto">
            अगदी सोपे ५ प्रश्न! ५ वीच्या विद्यार्थ्यांपासून ते सर्वांसाठी सहज उत्तरे देता येतील.
          </p>
        </div>

        {/* Luxury Quiz Box Card */}
        <div className="luxury-card rounded-2xl p-5 sm:p-8 relative">
          
          {!isSubmitted ? (
            <div className="space-y-5">
              
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs font-bold border-b border-aubergine-800 pb-3">
                <span className="text-marigold-300 bg-aubergine-950 px-2.5 py-0.5 rounded-full border border-marigold-500/30">
                  प्रश्न {currentQuestionIndex + 1} / {quizQuestions.length}
                </span>
                <span className="text-silver-400 text-[11px] sm:text-xs">
                  प्रेरणा कॉम्प्युटर अकॅडमी • देगलूर
                </span>
              </div>

              {/* Progress Bar in Marigold */}
              <div className="w-full bg-aubergine-950 h-2 rounded-full overflow-hidden border border-aubergine-800">
                <div
                  className="bg-marigold-500 h-full transition-all duration-300 shadow-glow-marigold"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text in Marathi */}
              <div className="py-1">
                <h3 className="text-base sm:text-xl font-bold text-silver-100 leading-snug">
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
                          ? 'bg-marigold-500 text-aubergine-950 font-black border-marigold-400 shadow-glow-marigold'
                          : 'bg-aubergine-950/90 border-aubergine-800 text-silver-200 hover:bg-aubergine-850 hover:border-marigold-500/40 active:scale-98'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected ? 'bg-aubergine-950 text-marigold-400' : 'bg-aubergine-800 text-silver-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-aubergine-950 shrink-0 ml-2" />}
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
                  मागील प्रश्न
                </button>

                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="px-5 py-2.5 rounded-xl bg-marigold-500 hover:bg-marigold-400 text-aubergine-950 font-black text-xs flex items-center gap-1.5 disabled:opacity-30 active:scale-95 transition-all shadow-md"
                  >
                    <span>पुढील प्रश्न</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    className="btn-marigold px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider disabled:opacity-30 active:scale-95 transition-all shadow-glow-marigold"
                  >
                    निकाल पहा (Submit)
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Result View with Celebration */
            <div className="text-center space-y-5 py-3 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-marigold-500/20 border border-marigold-500/40 text-marigold-400 flex items-center justify-center mx-auto shadow-glow-marigold">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-marigold-400">
                  चाचणी यशस्वीरीत्या पूर्ण!
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-silver-100 mt-1">
                  तुमचे गुण: {totalScore} / {quizQuestions.length} ({Math.round((totalScore / quizQuestions.length) * 100)}%)
                </h3>
                <p className="text-silver-300 text-xs sm:text-sm max-w-md mx-auto mt-1.5">
                  {totalScore >= 4 
                    ? '🎉 शाब्बास! तुमचे कॉम्प्युटरचे मूलभूत ज्ञान खूप छान आहे! प्रेरणा कॉम्प्युटर अकॅडमी देगलूरमध्ये MS-CIT करून वर्ड, एक्सेल, टायपिंग व सरकारी प्रमाणपत्रासाठी आजच प्रवेश घ्या!'
                    : 'छान प्रयत्न! प्रेरणा अकॅडमीमध्ये प्रत्यक्ष कॉम्प्युटर प्रॅक्टिससह शिकून तुम्ही १००% आत्मविश्वासाने कॉम्प्युटर चालवू शकता.'}
                </p>
              </div>

              {/* Answers Review */}
              <div className="text-left bg-aubergine-950 p-4 rounded-xl border border-aubergine-800 space-y-2.5 max-h-56 overflow-y-auto">
                <p className="text-[11px] font-bold text-marigold-400 uppercase tracking-wider">योग्य उत्तरे (Correct Answers):</p>
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
                        <span className="font-semibold text-silver-100">{q.question}</span>
                      </div>
                      <p className="text-[11px] text-silver-400 pl-5.5 mt-0.5">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>

              {/* Retake & Enroll CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleReset}
                  className="btn-silver w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>पुन्हा चाचणी द्या</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="btn-marigold w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-glow-marigold"
                >
                  <Sparkles className="w-3.5 h-3.5 text-aubergine-950" />
                  <span>प्रेरणा अकॅडमीमध्ये प्रवेश निश्चित करा</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};