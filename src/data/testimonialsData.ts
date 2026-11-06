import { Testimonial } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sneha Deshmukh',
    role: 'Qualified Talathi (Nanded District)',
    location: 'Degloor, Nanded',
    year: '2024 Batch',
    score: 98,
    grade: 'A+',
    feedback: 'MS-CIT certification is mandatory for Maharashtra Talathi recruitment. The ERA system mock tests and personal guidance at Prerna Computer Academy Degloor helped me score 98% on my first attempt!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Gajanan Rathod',
    role: 'Police Department Assistant',
    location: 'Degloor / Mukhed',
    year: '2023 Batch',
    score: 94,
    grade: 'A+',
    feedback: 'देगलूर मधील सर्वात उत्तम कॉम्प्युटर क्लास! The 1:1 computer setup and Excel shortcut drills gave me total confidence during both the theory and practical examinations.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Pooja Kulkarni',
    role: 'Degloor College Student & Freelancer',
    location: 'Rampur Road, Degloor',
    year: '2024 Batch',
    score: 96,
    grade: 'A+',
    feedback: 'I had zero knowledge of computers. The trainers at Prerna Academy explained everything patiently in Marathi. Word documentation and online banking citizen services were taught very thoroughly.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Amol Shinde',
    role: 'MPSC Aspirant & Clerk',
    location: 'Degloor / Biloli',
    year: '2024 Batch',
    score: 92,
    grade: 'Distinction',
    feedback: 'I joined the 1-month fast-track batch to fulfill my MPSC clerical eligibility. Prerna Academy’s lab timings are super convenient and the faculty provides genuine personal mentorship.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    verified: true
  }
];

export const labFacilities = [
  {
    id: 'lab-1',
    title: 'High-Speed Intel Core PCs (1:1 Ratio)',
    category: 'Hardware',
    description: 'Dedicated modern workstations with SSD speed and wide monitors located at our Rampur Road campus in Degloor.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    specs: ['1:1 Student to Computer Ratio', 'Ergonomic Seating', 'High-Speed Internet']
  },
  {
    id: 'lab-2',
    title: 'Official MKCL ERA 2025 Local Server',
    category: 'e-Learning',
    description: 'Authorized ERA server providing instant audio-visual lessons in Marathi and English with automated practical evaluation.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
    specs: ['Official ERA 2025 Engine', 'Interactive Marathi Audio-Video', 'Daily Assessment Marks Tracking']
  },
  {
    id: 'lab-3',
    title: 'Continuous Inverter Power Backup',
    category: 'Comfort & Reliability',
    description: 'Uninterrupted power system with automatic inverters so practical sessions are never disturbed by local load-shedding.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    specs: ['Zero Electricity Interruption', 'Silent Inverter Backup', 'Air-Cooled Spacious Hall']
  }
];
