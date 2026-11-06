import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which keyboard shortcut is used to paste copied text or files in Windows & MS Office?',
    options: ['Ctrl + P', 'Ctrl + V', 'Ctrl + C', 'Ctrl + Z'],
    correctIndex: 1,
    explanation: 'Ctrl + V is the universal shortcut to paste clipboard content. (Ctrl + P is for Print, Ctrl + C is for Copy).'
  },
  {
    id: 2,
    question: 'In Microsoft Excel, what symbol must every formula begin with?',
    options: ['# (Hash)', '$ (Dollar)', '= (Equals to)', '@ (At)'],
    correctIndex: 2,
    explanation: 'Every formula in Microsoft Excel must start with the equal sign (=) so Excel calculates the mathematical expression.'
  },
  {
    id: 3,
    question: 'What is the primary function of DigiLocker provided by the Government of India?',
    options: [
      'To play multiplayer cloud games',
      'To store and verify official digital documents like Aadhaar, driving license & marksheets',
      'To purchase cryptocurrency online',
      'To edit high-resolution movie files'
    ],
    correctIndex: 1,
    explanation: 'DigiLocker is a key initiative under Digital India aimed at empowering citizens with authentic paperless document storage recognized by law.'
  },
  {
    id: 4,
    question: 'Which of the following is considered an unsafe practice while conducting online banking or UPI transactions?',
    options: [
      'Sharing your UPI PIN or OTP over a phone call with someone claiming to be a bank executive',
      'Checking for HTTPS and padlock icon in the browser address bar',
      'Enabling Two-Factor Authentication (2FA) on your email and banking app',
      'Changing passwords periodically'
    ],
    correctIndex: 0,
    explanation: 'Never share your UPI PIN or OTP with anyone! Banks and legitimate payment gateways never ask for your secret PIN or OTP.'
  },
  {
    id: 5,
    question: 'In MS PowerPoint, what is the file extension for standard modern presentation files?',
    options: ['.docx', '.xlsx', '.pptx', '.pdf'],
    correctIndex: 2,
    explanation: '.pptx is the standard XML-based presentation format for Microsoft PowerPoint.'
  }
];
