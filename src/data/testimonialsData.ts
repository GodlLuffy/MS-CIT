import { Testimonial } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sneha Deshmukh',
    role: 'Qualified Talathi & Govt Officer',
    location: 'Pune, Maharashtra',
    year: '2024 Batch',
    score: 98,
    grade: 'A+',
    feedback: 'MS-CIT certification is mandatory for Maharashtra government recruitment. Thanks to the rigorous mock tests and patient trainers at Apex Academy, I scored 98% and cleared my document verification with zero hassle!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Rohan Gaikwad',
    role: 'Back-Office Executive at HDFC Bank',
    location: 'Navi Mumbai',
    year: '2023 Batch',
    score: 94,
    grade: 'A+',
    feedback: 'The Excel formulas, VLOOKUP, and keyboard shortcuts taught here gave me an immediate edge during my bank interview practical round. The lab infrastructure is top tier with fast PCs and AC labs.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Pooja Kulkarni',
    role: 'B.Com Graduate & Freelancer',
    location: 'Nashik',
    year: '2024 Batch',
    score: 96,
    grade: 'A+',
    feedback: 'I had zero technical background before joining. The step-by-step guidance, ERA practical challenges, and AI tools module made me completely confident with Word, PowerPoint, and online banking.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Amit Patil',
    role: 'MPSC Aspirant',
    location: 'Kolhapur',
    year: '2024 Batch',
    score: 92,
    grade: 'Distinction',
    feedback: 'Joined the Fast-Track 1-month batch. The faculty accommodated my evening schedule and the continuous mock tests ensured I cracked the final exam on my first attempt.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    verified: true
  }
];

export const labFacilities = [
  {
    id: 'lab-1',
    title: 'High-Speed Intel Core i5/i7 Workstations',
    category: 'Hardware',
    description: 'Each student receives an independent high-performance PC with SSD storage, dual-monitor capability, and mechanical keyboards.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    specs: ['1:1 Student to Computer Ratio', 'Ergonomic Seating', '100 Mbps Dedicated Fiber Internet']
  },
  {
    id: 'lab-2',
    title: 'MKCL Authorized ERA 2025 Server Lab',
    category: 'Software & e-Learning',
    description: 'Synchronized local network ERA server providing zero latency during daily audio-visual lessons and practical challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
    specs: ['Official ERA 2025 Offline Cloud Engine', 'Instant Audio-Visual Marathi/English Lectures', 'Auto-Scored Practical Assessments']
  },
  {
    id: 'lab-3',
    title: 'Full Generator Power Backup & Climate Control',
    category: 'Comfort & Reliability',
    description: '100% uninterrupted power supply with dual inverter backups and silent generators, fully air-conditioned smart classroom.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    specs: ['Zero Electricity Disruption', 'Silent Central Inverter', 'Spacious Ambient Lighting']
  }
];
