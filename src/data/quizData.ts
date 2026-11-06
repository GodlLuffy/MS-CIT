import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is called the "Brain" of a computer? (कॉम्प्युटरचा मेंदू कशाला म्हणतात?)',
    options: [
      'CPU (Central Processing Unit)',
      'Monitor / Screen (मॉनिटर)',
      'Mouse (माउस)',
      'Keyboard (कीबोर्ड)'
    ],
    correctIndex: 0,
    explanation: 'CPU is the brain of the computer that controls all operations and calculations (सर्व आज्ञा व गणिते वेगाने करतो).'
  },
  {
    id: 2,
    question: 'Which device is used to type letters, numbers, and words into a computer? (अक्षरे व आकडे टाईप करण्यासाठी काय वापरतात?)',
    options: [
      'Keyboard (कीबोर्ड)',
      'Speaker (स्पीकर)',
      'Scanner (स्कॅनर)',
      'Printer (प्रिंटर)'
    ],
    correctIndex: 0,
    explanation: 'The keyboard is used for typing text, numbers, and commands into the computer.'
  },
  {
    id: 3,
    question: 'Which hand-held device is used to click, select, and point at items on screen? (स्क्रीनवर पॉईंटर हलवण्यासाठी काय वापरतात?)',
    options: [
      'Mouse (माउस)',
      'Headphone (हेडफोन)',
      'Pen Drive (पेन ड्राईव्ह)',
      'Power Cable (केबल)'
    ],
    correctIndex: 0,
    explanation: 'The mouse is a pointing input device used to click, drag, and open files on the screen.'
  },
  {
    id: 4,
    question: 'Which device displays pictures, text, and videos on the computer screen? (स्क्रीनवर माहिती पाहण्यासाठी काय वापरतात?)',
    options: [
      'Monitor / Screen (मॉनिटर)',
      'UPS (यु.पी.एस.)',
      'CPU (सी.पी.यु.)',
      'Webcam (वेबकॅम)'
    ],
    correctIndex: 0,
    explanation: 'The monitor visually displays output like text, photos, and videos to the user.'
  },
  {
    id: 5,
    question: 'Which machine is used to print documents and photos onto paper? (कागदावर प्रिंट काढण्यासाठी कोणते मशीन वापरतात?)',
    options: [
      'Printer (प्रिंटर)',
      'Mouse (माउस)',
      'Microphone (माईक)',
      'Keyboard (कीबोर्ड)'
    ],
    correctIndex: 0,
    explanation: 'A printer creates a physical paper copy (hard copy) of any digital document or photo.'
  }
];