export interface CourseModule {
  id: string;
  code: string;
  title: string;
  category: 'core' | 'advanced' | 'practical' | 'smart';
  durationHours: number;
  highlight: string;
  badge?: string;
  iconName: string;
  summary: string;
  detailedTopics: string[];
  handsOnProjects: string[];
  toolsCovered: string[];
}

export interface BatchInfo {
  id: string;
  title: string;
  mode: 'Regular' | 'Fast-Track' | 'Weekend Special';
  duration: string;
  hoursPerDay: string;
  timings: string[];
  seatStatus: 'Seats Available' | 'Filling Fast' | 'Only 3 Left';
  idealFor: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  year: string;
  score: number;
  grade: 'A+' | 'Distinction' | 'First Class';
  feedback: string;
  avatar: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'all' | 'admissions' | 'syllabus' | 'exams' | 'benefits';
}

export interface LabFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  specs: string[];
}

export interface EnrollmentFormData {
  fullName: string;
  mobile: string;
  email: string;
  education: string;
  preferredBatch: string;
  preferredTiming: string;
  referralSource: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
