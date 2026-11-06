import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'कॉम्प्युटरचा "मेंदू" (Brain of Computer) कोणाला म्हणतात?',
    options: [
      'CPU (Central Processing Unit)',
      'मॉनिटर / स्क्रीन (Monitor)',
      'माउस (Mouse)',
      'कीबोर्ड (Keyboard)'
    ],
    correctIndex: 0,
    explanation: 'CPU हा कॉम्प्युटरचा मुख्य मेंदू असतो, जो सर्व आज्ञा व गणिते वेगाने करतो.'
  },
  {
    id: 2,
    question: 'कॉम्प्युटरमध्ये अक्षरे, शब्द आणि आकडे टाईप करण्यासाठी काय वापरतात?',
    options: [
      'कीबोर्ड (Keyboard)',
      'स्पीकर (Speaker)',
      'स्कॅनर (Scanner)',
      'प्रिंटर (Printer)'
    ],
    correctIndex: 0,
    explanation: 'कीबोर्डच्या (Keyboard) साहाय्याने आपण कॉम्प्युटरमध्ये मजकूर व आकडे टाईप करतो.'
  },
  {
    id: 3,
    question: 'स्क्रीनवरील बाण (पॉईंटर) हलवण्यासाठी व क्लिक करण्यासाठी हातातील कोणते साधन वापरतात?',
    options: [
      'माउस (Mouse)',
      'हेडफोन (Headphone)',
      'पेन ड्राईव्ह (Pen Drive)',
      'केबल (Cable)'
    ],
    correctIndex: 0,
    explanation: 'माउस (Mouse) हे स्क्रीनवरील फाईल्स उघडण्यासाठी व पॉईंटर फिरवण्यासाठी वापरले जाणारे साधन आहे.'
  },
  {
    id: 4,
    question: 'स्क्रीनवर चित्र, व्हिडिओ आणि माहिती पाहण्यासाठी कोणता भाग वापरतात?',
    options: [
      'मॉनिटर / स्क्रीन (Monitor)',
      'यूपीएस (UPS)',
      'CPU (सी.पी.यु.)',
      'वेबकॅम (Webcam)'
    ],
    correctIndex: 0,
    explanation: 'मॉनिटर (Monitor) कॉम्प्युटरमधील सर्व माहिती स्क्रीनवर दाखवण्याचे काम करतो.'
  },
  {
    id: 5,
    question: 'कागदावर मजकूर किंवा फोटो प्रिंट काढण्यासाठी कोणते मशीन वापरतात?',
    options: [
      'प्रिंटर (Printer)',
      'माउस (Mouse)',
      'माईक (Microphone)',
      'कीबोर्ड (Keyboard)'
    ],
    correctIndex: 0,
    explanation: 'प्रिंटर (Printer) कॉम्प्युटरमधील फाईल्स कागदावर छापील स्वरूपात (Hard Copy) बाहेर काढतो.'
  }
];