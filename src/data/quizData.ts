import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is called the "Brain" of a computer? (कॉम्प्युटरचा मेंदू कशाला म्हणतात?)',
    options: [
      'CPU (Central Processing Unit)',
      'Monitor (स्क्रीन)',
      'Mouse (माऊस)',
      'Keyboard (कीबोर्ड)'
    ],
    correctIndex: 0,
    explanation: 'CPU is the brain of the computer that controls all operations and calculations.'
  },
  {
    id: 2,
    question: 'Which device is used to type letters, numbers, and words into a computer? (कॉम्प्युटरमध्ये अक्षरे आणि आकडे टाईप करण्यासाठी कोणते साधन वापरतात?)',
    options: [
      'Keyboard (कीबोर्ड)',
      'Speaker (स्पीकर)',
      'Scanner (स्कॅनर)',
      'Printer (प्रिंटर)'
    ],
    correctIndex: 0,
    explanation: 'Keyboard is used for typing letters, numbers, and commands into the computer.'
  },
  {
    id: 3,
    question: 'Which device is used to click, select, and point at items on the screen? (स्क्रीनवरील आयकॉनवर क्लिक करण्यासाठी कोणते साधन वापरतात?)',
    options: [
      'Mouse (माऊस)',
      'Headphone (हेडफोन)',
      'Pen Drive (पेन ड्राईव्ह)',
      'Power Cable (केबल)'
    ],
    correctIndex: 0,
    explanation: 'A computer Mouse is an input pointing device used to click, drag, and open files.'
  },
  {
    id: 4,
    question: 'Which device displays pictures, videos, and files on the computer? (कॉम्प्युटरवर फोटो, व्हिडिओ आणि माहिती पाहण्यासाठी काय वापरतात?)',
    options: [
      'Monitor / Screen (मॉनिटर)',
      'UPS (यु.पी.एस.)',
      'CPU (सी.पी.यु.)',
      'Webcam (वेबकॅम)'
    ],
    correctIndex: 0,
    explanation: 'Monitor displays the visual output like text, photos, and videos to the user.'
  },
  {
    id: 5,
    question: 'Which device is used to print documents and photos onto paper? (कागदावर प्रिंट काढण्यासाठी कोणते मशीन वापरतात?)',
    options: [
      'Printer (प्रिंटर)',
      'Mouse (माऊस)',
      'Microphone (माईक)',
      'Keyboard (कीबोर्ड)'
    ],
    correctIndex: 0,
    explanation: 'Printer creates a physical paper copy (hard copy) of any document or photo.'
  }
];
