import { z } from 'zod';

// Zod Schema for Student Inquiry / Enrollment Wizard
export const inquirySchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Full name must be at least 3 characters long (किमान ३ अक्षरे आवश्यक).' })
    .max(80, { message: 'Full name cannot exceed 80 characters.' }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
    }),
  email: z
    .string()
    .email({ message: 'Please provide a valid email address.' })
    .optional()
    .or(z.literal('')),
  qualification: z
    .string()
    .min(1, { message: 'Please select your educational qualification.' }),
  preferredBatch: z
    .string()
    .min(1, { message: 'Please select your preferred batch timing.' }),
  batchType: z
    .string()
    .default('Regular Classroom (2 Months)'),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

// Schema for Administrative Batch Creation
export const batchSchema = z.object({
  code: z.string().min(3, 'Batch code is required (e.g. BATCH-MORN-01)'),
  name: z.string().min(3, 'Batch name is required'),
  timing: z.string().min(3, 'Batch timing is required'),
  startDate: z.string().min(1, 'Start date is required'),
  totalSeats: z.number().int().min(5).max(100).default(25),
  instructorName: z.string().min(2, 'Instructor name is required'),
  status: z.enum(['UPCOMING', 'ADMISSIONS_OPEN', 'FILLING_FAST', 'FULL', 'ONGOING', 'COMPLETED']),
});

export type BatchFormData = z.infer<typeof batchSchema>;

// Schema for Announcements / CMS Notices
export const announcementSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  type: z.enum(['ADMISSION', 'EXAM_DATE', 'GOVT_GR', 'EVENT', 'GENERAL']),
  isActive: z.boolean().default(true),
  targetDate: z.string().optional(),
});

export type AnnouncementFormData = z.infer<typeof announcementSchema>;
