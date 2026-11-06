export interface CourseModule {
  id: string;
  code: string;
  title: string;
  category: string;
  durationHours: number;
  highlight: string;
  badge?: string;
  iconName: string;
  summary: string;
  detailedTopics: string[];
  handsOnProjects: string[];
  toolsCovered: string[];
}

export type InquiryStatus = 'NEW' | 'CONTACTED' | 'SCHEDULED_DEMO' | 'ENROLLED' | 'ARCHIVED';

export interface InquiryRecord {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  qualification: string;
  preferredBatch: string;
  batchType: string;
  status: InquiryStatus;
  notes?: string;
  createdAt: string;
}

export type BatchStatus = 'UPCOMING' | 'ADMISSIONS_OPEN' | 'FILLING_FAST' | 'FULL' | 'ONGOING' | 'COMPLETED';

export interface BatchRecord {
  id: string;
  code: string;
  name: string;
  timing: string;
  startDate: string;
  totalSeats: number;
  enrolledSeats: number;
  instructorName: string;
  status: BatchStatus;
}

export interface AnnouncementRecord {
  id: string;
  title: string;
  content: string;
  type: 'ADMISSION' | 'EXAM_DATE' | 'GOVT_GR' | 'EVENT' | 'GENERAL';
  isActive: boolean;
  targetDate?: string;
  createdAt: string;
}

export interface DashboardMetrics {
  totalInquiries: number;
  pendingReview: number;
  enrolledStudents: number;
  totalBatches: number;
  totalRevenue: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
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
  category?: string;
}

export interface BatchInfo {
  id: string;
  title: string;
  mode: string;
  duration: string;
  hoursPerDay: string;
  timings: string[];
  seatStatus: string;
  idealFor: string;
  badge?: string;
}
