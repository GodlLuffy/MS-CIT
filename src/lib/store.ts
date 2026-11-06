import { InquiryRecord, BatchRecord, AnnouncementRecord, DashboardMetrics } from '../types';
import { inquirySchema, InquiryFormData } from './validations';

const INQUIRIES_KEY = 'mscit_inquiries_db';
const BATCHES_KEY = 'mscit_batches_db';
const NOTICES_KEY = 'mscit_notices_db';

const initialInquiries: InquiryRecord[] = [
  {
    id: 'INQ-101',
    fullName: 'Rahul Prakash Patil',
    phone: '9823456789',
    email: 'rahul.patil@gmail.com',
    qualification: '12th Science / MPSC Aspirant',
    preferredBatch: 'Morning (07:30 AM - 09:30 AM)',
    batchType: 'Regular Classroom (2 Months)',
    status: 'ENROLLED',
    notes: 'Paid first installment ₹2,500. Workstation #04 assigned.',
    createdAt: '2025-02-14T09:30:00.000Z',
  },
  {
    id: 'INQ-102',
    fullName: 'Pooja Sanjay Deshmukh',
    phone: '9970123456',
    email: 'pooja.d@yahoo.com',
    qualification: 'B.Com Graduate',
    preferredBatch: 'Mid-Day (10:00 AM - 12:00 PM)',
    batchType: 'Regular Classroom (2 Months)',
    status: 'SCHEDULED_DEMO',
    notes: 'Interested in advanced Excel and Tally integration.',
    createdAt: '2025-02-15T11:15:00.000Z',
  },
  {
    id: 'INQ-103',
    fullName: 'Aniket Ramesh Rathod',
    phone: '8805987654',
    email: 'aniket.rathod@gmail.com',
    qualification: 'Police Bharti Aspirant',
    preferredBatch: 'Evening (04:00 PM - 06:00 PM)',
    batchType: 'Fast Track Intensive (1 Month)',
    status: 'NEW',
    notes: 'Needs Govt. GR certificate urgently for verification.',
    createdAt: '2025-02-16T14:40:00.000Z',
  },
  {
    id: 'INQ-104',
    fullName: 'Sneha Vitthalrao Shinde',
    phone: '9421567890',
    email: 'sneha.shinde@outlook.com',
    qualification: '10th Passed / College Fresher',
    preferredBatch: 'Morning (07:30 AM - 09:30 AM)',
    batchType: 'Regular Classroom (2 Months)',
    status: 'CONTACTED',
    notes: 'Father requested morning batch timing confirmation.',
    createdAt: '2025-02-16T16:20:00.000Z',
  },
];

const initialBatches: BatchRecord[] = [
  {
    id: 'BATCH-01',
    code: 'MSCIT-2025-M1',
    name: 'Early Morning Batch',
    timing: '07:30 AM - 09:30 AM',
    startDate: '2025-03-01',
    totalSeats: 25,
    enrolledSeats: 21,
    instructorName: 'Prof. Suresh K. (Senior MKCL Master Trainer)',
    status: 'FILLING_FAST',
  },
  {
    id: 'BATCH-02',
    code: 'MSCIT-2025-D1',
    name: 'Mid-Day College Batch',
    timing: '10:00 AM - 12:00 PM',
    startDate: '2025-03-01',
    totalSeats: 25,
    enrolledSeats: 16,
    instructorName: 'Pravin Sir (System Architect)',
    status: 'ADMISSIONS_OPEN',
  },
  {
    id: 'BATCH-03',
    code: 'MSCIT-2025-E1',
    name: 'Evening Executive Batch',
    timing: '04:00 PM - 06:00 PM',
    startDate: '2025-03-05',
    totalSeats: 25,
    enrolledSeats: 23,
    instructorName: 'Prof. Suresh K. & Lab Mentor',
    status: 'FILLING_FAST',
  },
  {
    id: 'BATCH-04',
    code: 'MSCIT-2025-FT',
    name: 'Fast-Track Intensive (1 Month)',
    timing: '02:00 PM - 04:30 PM',
    startDate: '2025-03-10',
    totalSeats: 20,
    enrolledSeats: 8,
    instructorName: 'Pravin Sir',
    status: 'ADMISSIONS_OPEN',
  },
];

const initialNotices: AnnouncementRecord[] = [
  {
    id: 'NOT-01',
    title: 'Admissions Open for Official MS-CIT March 2025 Batch',
    content: 'Registration is officially open at Prerna Computer Academy Degloor. Free 1-day demo session and 100% individual PC lab allocation.',
    type: 'ADMISSION',
    isActive: true,
    targetDate: '2025-03-01',
    createdAt: '2025-02-10T10:00:00.000Z',
  },
  {
    id: 'NOT-02',
    title: 'Govt. GR Compulsory Notice for Talathi & Police Bharti Candidates',
    content: 'Maharashtra Government GR mandates MSBTE & MKCL certified MS-CIT certificate during document verification. Special batch slots available.',
    type: 'GOVT_GR',
    isActive: true,
    targetDate: '2025-03-15',
    createdAt: '2025-02-12T12:00:00.000Z',
  },
];

// Helper functions for Local Storage & Mock Backend
export const getStoredInquiries = (): InquiryRecord[] => {
  if (typeof window === 'undefined') return initialInquiries;
  try {
    const data = localStorage.getItem(INQUIRIES_KEY);
    return data ? JSON.parse(data) : initialInquiries;
  } catch {
    return initialInquiries;
  }
};

export const saveStoredInquiries = (data: InquiryRecord[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save inquiries:', err);
  }
};

export const getStoredBatches = (): BatchRecord[] => {
  if (typeof window === 'undefined') return initialBatches;
  try {
    const data = localStorage.getItem(BATCHES_KEY);
    return data ? JSON.parse(data) : initialBatches;
  } catch {
    return initialBatches;
  }
};

export const saveStoredBatches = (data: BatchRecord[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(BATCHES_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save batches:', err);
  }
};

export const getStoredNotices = (): AnnouncementRecord[] => {
  if (typeof window === 'undefined') return initialNotices;
  try {
    const data = localStorage.getItem(NOTICES_KEY);
    return data ? JSON.parse(data) : initialNotices;
  } catch {
    return initialNotices;
  }
};

export const saveStoredNotices = (data: AnnouncementRecord[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(NOTICES_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save notices:', err);
  }
};

// Export CSV Functionality
export const exportInquiriesToCSV = (inquiries: InquiryRecord[]): void => {
  const headers = ['ID', 'Full Name', 'Phone', 'Email', 'Qualification', 'Preferred Batch', 'Batch Type', 'Status', 'Notes', 'Created At'];
  const rows = inquiries.map((inq) => [
    inq.id,
    `"${inq.fullName.replace(/"/g, '""')}"`,
    inq.phone,
    inq.email || '',
    `"${(inq.qualification || '').replace(/"/g, '""')}"`,
    `"${inq.preferredBatch.replace(/"/g, '""')}"`,
    `"${inq.batchType.replace(/"/g, '""')}"`,
    inq.status,
    `"${(inq.notes || '').replace(/"/g, '""')}"`,
    new Date(inq.createdAt).toLocaleString(),
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `MSCIT_Inquiries_Degloor_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
