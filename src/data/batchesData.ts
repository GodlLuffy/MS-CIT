import { BatchInfo } from '../types';

export const batchesData: BatchInfo[] = [
  {
    id: 'batch-regular',
    title: 'Regular Classroom Batch',
    mode: 'Regular',
    duration: '2 Months (60 Days)',
    hoursPerDay: '2 Hours / Day (1 Hr Theory + 1 Hr Hands-on Lab)',
    timings: [
      '07:30 AM - 09:30 AM (Morning)',
      '10:00 AM - 12:00 PM (Mid-Day)',
      '04:00 PM - 06:00 PM (Evening)',
      '06:30 PM - 08:30 PM (Late Evening)'
    ],
    seatStatus: 'Filling Fast',
    idealFor: 'College students, school leavers, and homemakers desiring balanced pace with daily lab repetition.',
    badge: 'Most Popular'
  },
  {
    id: 'batch-fast-track',
    title: 'Express Fast-Track Batch',
    mode: 'Fast-Track',
    duration: '1 Month (30 Days)',
    hoursPerDay: '3.5 Hours / Day (Intensive lab practice)',
    timings: [
      '09:00 AM - 12:30 PM (Morning Slot)',
      '02:00 PM - 05:30 PM (Afternoon Slot)'
    ],
    seatStatus: 'Only 3 Left',
    idealFor: 'Government job aspirants (MPSC, Talathi, Police Bharti) needing urgent certification submission.',
    badge: 'Quick Certification'
  },
  {
    id: 'batch-weekend',
    title: 'Working Professionals Weekend Batch',
    mode: 'Weekend Special',
    duration: '10 Weekends (Saturday & Sunday)',
    hoursPerDay: '4 Hours / Day (Theory + Dedicated Mentorship)',
    timings: [
      'Sat & Sun: 09:00 AM - 01:00 PM',
      'Sat & Sun: 02:00 PM - 06:00 PM'
    ],
    seatStatus: 'Seats Available',
    idealFor: 'Working executives, business owners, and outstation candidates who cannot attend on weekdays.',
    badge: 'Flexible Weekend'
  }
];

export const feeDetails = {
  standardMscitFee: 4500, // standard MKCL prescribed fee tier
  installmentPlan: {
    firstInstallment: 2500,
    secondInstallment: 2000,
  },
  includes: [
    'Official MKCL MS-CIT Multi-colored Textbook',
    'Daily 1-to-1 PC Lab Allocation',
    'ERA e-Learning Cloud Access',
    'Unlimited Mock Exam Simulations',
    'Government Recognized Holographic Certificate',
    'Resume Preparation & Interview Guidance'
  ]
};
