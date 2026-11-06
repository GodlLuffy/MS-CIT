import { CourseModule } from '../types';

export const coursesData: CourseModule[] = [
  {
    id: 'm1-it-basics',
    code: 'MOD-01',
    title: 'Computer Fundamentals & Windows 11',
    category: 'core',
    durationHours: 15,
    highlight: 'Foundation of modern computing',
    badge: 'Core Foundation',
    iconName: 'Monitor',
    summary: 'Master the operating system, file management, system settings, shortcut keys, and hardware configuration.',
    detailedTopics: [
      'Anatomy of PC & Operating System architecture',
      'Windows 11 desktop, widgets, virtual desktops & task manager',
      'Advanced File Explorer: compression (ZIP), backup & USB drives',
      'Input/Output peripherals: scanners, printers, and webcams',
      'Troubleshooting common PC slowdowns & malware hygiene',
      'Keyboard mastery & touch-typing speed drills'
    ],
    handsOnProjects: [
      'Create personalized desktop workspace with automated backup folder structure',
      'Hardware diagnostics & driver update drill on test workstation'
    ],
    toolsCovered: ['Windows 11', 'File Explorer', 'Typing Tutor', 'Snipping Tool', 'Task Manager']
  },
  {
    id: 'm2-word-mastery',
    code: 'MOD-02',
    title: 'Microsoft Word & Professional Documentation',
    category: 'core',
    durationHours: 25,
    highlight: 'Business-grade document drafting',
    badge: 'High In-Demand',
    iconName: 'FileText',
    summary: 'Craft executive reports, official government letters, resumes with ATS formatting, and automated Mail Merge.',
    detailedTopics: [
      'Typography, typography hierarchy, margins & page layout',
      'Tables, multi-level lists, header/footer & watermarks',
      'SmartArt, diagrams, shapes & vector styling',
      'Mail Merge: Bulk certificate and invoice generation from data lists',
      'Review tab: track changes, comments, proofreading & spell check',
      'Exporting print-ready PDFs and password-protected documents'
    ],
    handsOnProjects: [
      'Draft an official 3-page corporate business proposal with table of contents',
      'Execute a 50-recipient personalized Mail Merge invitation drive'
    ],
    toolsCovered: ['MS Word 2024', 'Google Docs', 'Font Formatting', 'PDF Creator']
  },
  {
    id: 'm3-excel-analytics',
    code: 'MOD-03',
    title: 'Microsoft Excel & Data Analytics',
    category: 'advanced',
    durationHours: 35,
    highlight: 'Formulas, VLOOKUP, XLOOKUP & Dashboards',
    badge: 'Job Ready',
    iconName: 'TableProperties',
    summary: 'Analyze corporate data, build automated financial sheets, master logical formulas and interactive pivot charts.',
    detailedTopics: [
      'Cell referencing: Relative, Absolute ($) & Mixed references',
      'Essential formulas: SUM, AVERAGE, COUNTIF, IF, AND/OR logic',
      'Advanced lookup functions: VLOOKUP, HLOOKUP and modern XLOOKUP',
      'Data sorting, filtering, conditional formatting & data validation',
      'PivotTables & PivotCharts for executive MIS reporting',
      'Salary slip generator, GST invoicing and budget calculation templates'
    ],
    handsOnProjects: [
      'Build an automated monthly payroll calculator with tax deductions',
      'Design an interactive retail sales performance visual dashboard'
    ],
    toolsCovered: ['MS Excel 2024', 'Google Sheets', 'Pivot Tools', 'Data Visualizer']
  },
  {
    id: 'm4-powerpoint-presentation',
    code: 'MOD-04',
    title: 'Microsoft PowerPoint & Digital Storytelling',
    category: 'practical',
    durationHours: 15,
    highlight: 'Impactful slide design & presentations',
    badge: 'Creative Skills',
    iconName: 'Presentation',
    summary: 'Design visually compelling pitch decks, educational slides, multimedia embeds, and animated infographics.',
    detailedTopics: [
      'Slide master design, cohesive color palettes & fonts',
      'Morph transitions & cinematic animation timing',
      'Embedding audio, screen recordings & 4K video clips',
      'Presenter View, laser pointer tools & slide zoom features',
      'Infographic design: process maps, comparison grids & timeline charts',
      'Exporting slides as video presentations and handouts'
    ],
    handsOnProjects: [
      'Create a 10-slide interactive company profile presentation with Morph animations',
      'Record an automated self-running educational kiosk slideshow'
    ],
    toolsCovered: ['MS PowerPoint 2024', 'Canva Integration', 'Presenter View']
  },
  {
    id: 'm5-cyber-safety-internet',
    code: 'MOD-05',
    title: 'Internet, Cyber Security & Financial Safety',
    category: 'smart',
    durationHours: 20,
    highlight: 'Stay safe in the digital financial world',
    badge: 'Essential Defense',
    iconName: 'ShieldCheck',
    summary: 'Protect yourself against cyber fraud, master secure net banking, UPI safety, 2-Factor Authentication, and email etiquette.',
    detailedTopics: [
      'Safe web browsing, SSL padlock check & incognito mode',
      'Recognizing phishing emails, spoofed SMS & lottery scam links',
      'Secure net banking, UPI PIN security & debit/credit card guidelines',
      'Setting up Two-Factor Authentication (2FA) and password managers',
      'DigiLocker: Storing driving license, Aadhaar & mark sheets securely',
      'Social media privacy audits: Facebook, WhatsApp, Instagram & LinkedIn'
    ],
    handsOnProjects: [
      'Complete a live simulated phishing email detection challenge',
      'Link and verify government documents on official DigiLocker portal'
    ],
    toolsCovered: ['Google Chrome', 'DigiLocker', '2FA Authenticator', 'UPI Security', 'Bitwarden']
  },
  {
    id: 'm6-citizen-egovernance',
    code: 'MOD-06',
    title: 'Digital Citizen Services & e-Governance',
    category: 'smart',
    durationHours: 15,
    highlight: 'Direct government portal proficiency',
    badge: 'Govt. Services',
    iconName: 'Landmark',
    summary: 'Hands-on practice applying for PAN, Passport, Ration Card, Aaple Sarkar, voter ID, and utility billing.',
    detailedTopics: [
      'Maharashtra Aaple Sarkar portal: Income & Domicile certificate filing',
      'Online PAN Card application & Aadhaar card linking',
      'Voter ID registration and electoral roll search',
      'IRCTC rail ticket booking, Tatkal reservations & bus passes',
      'Electricity, water & municipal property tax online bill settlement',
      'MahaDBT scholarship application navigation'
    ],
    handsOnProjects: [
      'Mock submission walk-through for Domicile Certificate documentation',
      'Book simulated train journey with automated Tatkal timing practice'
    ],
    toolsCovered: ['Aaple Sarkar', 'MahaDBT', 'IRCTC', 'UIDAI Portal', 'NVSP']
  },
  {
    id: 'm7-ai-tools',
    code: 'MOD-07',
    title: 'AI Tools & 21st Century Workplace Productivity',
    category: 'advanced',
    durationHours: 15,
    highlight: 'ChatGPT, Copilot & AI assisted work',
    badge: 'Future Tech',
    iconName: 'Sparkles',
    summary: 'Harness Generative AI tools to summarize text, draft emails, formulate spreadsheets, and generate graphics.',
    detailedTopics: [
      'Introduction to Large Language Models (ChatGPT, Microsoft Copilot)',
      'Prompt Engineering: Writing effective prompts for business tasks',
      'AI-assisted drafting: Emails, essays, cover letters & translations',
      'Generating formulas and debugging Excel errors using AI',
      'Ethics of AI, plagiarism detection & fact-checking hallucinated info',
      'AI graphic tools: removing backgrounds, enhancing image resolution'
    ],
    handsOnProjects: [
      'Draft a full job application package using prompt engineering',
      'Use Copilot to clean and reformat a messy unstructured customer database'
    ],
    toolsCovered: ['ChatGPT', 'Microsoft Copilot', 'DeepL Translator', 'Canva Magic AI']
  },
  {
    id: 'm8-era-exam-simulator',
    code: 'MOD-08',
    title: 'MKCL ERA System & Final Online Exam Preparation',
    category: 'practical',
    durationHours: 20,
    highlight: 'Guaranteed 95%+ marks strategy',
    badge: 'Exam Pass Guarantee',
    iconName: 'GraduationCap',
    summary: 'Master the MKCL ERA e-Learning system, complete daily "Take a Challenge" and "Do It Yourself" sessions, and take full-length mock exams.',
    detailedTopics: [
      'Understanding the 50-mark internal continuous assessment system',
      '100% completion roadmap for ERA e-Learning sessions',
      'Timed speed drill: 50 Questions in 60 Minutes final exam simulator',
      'Previous years most repeated objective & practical questions',
      'Stress-free exam hall strategies and technical guidelines',
      'Official Maharashtra State Board MS-CIT Certificate issuance process'
    ],
    handsOnProjects: [
      'Complete 5 full-length timed MKCL mock tests with real-time scoring',
      'Review error log & targeted remediation for weak topic areas'
    ],
    toolsCovered: ['MKCL ERA 2024/2025', 'Online Exam Simulator', 'OMR Practice', 'Score Analytics']
  }
];
