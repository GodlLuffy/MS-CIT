import { CourseModule } from '../types';

export const coursesData: CourseModule[] = [
  {
    id: 'm1-it-basics',
    code: 'MOD-01',
    title: 'Computer Fundamentals & Windows 11 (संगणक बेसिक)',
    category: 'Foundation',
    durationHours: 15,
    highlight: 'Foundation of modern computing',
    badge: 'Core Foundation',
    iconName: 'Monitor',
    summary: 'Master the operating system, file explorer, system settings, keyboard shortcuts, typing drills, and hardware anatomy.',
    detailedTopics: [
      'Anatomy of PC & Operating System architecture (कॉम्प्युटरची रचना)',
      'Windows 11 desktop, virtual desktops & task manager (टास्क मॅनेजर)',
      'Advanced File Explorer: folders, ZIP compression & USB drives',
      'Input/Output peripherals: printers, scanners & webcams (पेरिफेरल्स)',
      'Troubleshooting common PC slowdowns & malware hygiene',
      'Marathi & English touch-typing speed drills (टायपिंग सराव)'
    ],
    handsOnProjects: [
      'Create personalized desktop workspace with automated backup folders',
      'Hardware diagnostics & driver update drill on test workstation'
    ],
    toolsCovered: ['Windows 11', 'File Explorer', 'Typing Tutor', 'Snipping Tool', 'Task Manager']
  },
  {
    id: 'm2-word-mastery',
    code: 'MOD-02',
    title: 'Microsoft Word & Documentation (पत्रव्यवहार व डॉक्युमेंट्स)',
    category: 'Office Productivity',
    durationHours: 25,
    highlight: 'Business-grade document drafting',
    badge: 'High In-Demand',
    iconName: 'FileText',
    summary: 'Draft executive reports, official government letters, resumes with ATS formatting, tables, and automated Mail Merge.',
    detailedTopics: [
      'Text formatting, page setup, margins & typography hierarchy (पेज लेआउट)',
      'Tables, multi-level bullets, header/footer & watermarks (वॉटरमार्क)',
      'Shapes, vector graphics, SmartArt & digital styling',
      'Mail Merge: Bulk certificate and invitation generation from data lists (मेल मर्ज)',
      'Review tab: track changes, comments, proofreading & spell check',
      'Exporting print-ready PDFs and password-protected documents'
    ],
    handsOnProjects: [
      'Draft an official government proposal with table of contents & resume',
      'Execute a 50-recipient personalized Mail Merge invitation drive'
    ],
    toolsCovered: ['MS Word 2024', 'Google Docs', 'Font Formatting', 'PDF Creator']
  },
  {
    id: 'm3-excel-analytics',
    code: 'MOD-03',
    title: 'Microsoft Excel & Data Sheets (हिशोब, स्प्रेडशीट व फॉर्म्युले)',
    category: 'Business Analytics',
    durationHours: 35,
    highlight: 'Formulas, VLOOKUP & Dashboards',
    badge: 'High In-Demand',
    iconName: 'TableProperties',
    summary: 'Analyze data, master essential financial formulas, salary calculations, GST invoicing, and interactive pivot charts.',
    detailedTopics: [
      'Essential formulas: SUM, AVERAGE, COUNTIF, IF logic (मूलभूत फॉर्म्युले)',
      'Advanced lookup functions: VLOOKUP, HLOOKUP and modern XLOOKUP',
      'Data sorting, filtering, conditional formatting & validation (फिल्टरिंग)',
      'PivotTables & PivotCharts for executive reporting (पिव्हट तक्ते)',
      'Salary slip generator, GST invoicing and budget calculation templates',
      'Printing large multi-page workbooks with custom headers & freeze panes'
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
    title: 'Microsoft PowerPoint & Slides (डिजिटल प्रेझेंटेशन्स)',
    category: 'Media & Design',
    durationHours: 15,
    highlight: 'Impactful slide design & presentations',
    badge: 'Creative Skills',
    iconName: 'Presentation',
    summary: 'Design visually compelling pitch decks, educational slides, multimedia embeds, motion transitions, and automated slideshows.',
    detailedTopics: [
      'Slide master design, color themes & Marathi/English typography (स्लाइड डिझाइन)',
      'Morph transitions & cinematic animation timing (मॉर्फ ॲनिमेशन)',
      'Embedding audio narration, screen recordings & video clips',
      'Presenter View, laser pointer tools & slide zoom features',
      'Infographics: timeline diagrams, hierarchy charts & comparison tables',
      'Exporting presentations as high-resolution MP4 video and handouts'
    ],
    handsOnProjects: [
      'Create a 10-slide interactive company profile with Morph animations',
      'Record an automated self-running educational kiosk slideshow'
    ],
    toolsCovered: ['MS PowerPoint 2024', 'Canva Integration', 'Presenter View']
  },
  {
    id: 'm5-cyber-safety-internet',
    code: 'MOD-05',
    title: 'Internet, Cyber Security & UPI Safety (सायबर सुरक्षा व ऑनलाइन बँकिंग)',
    category: 'Digital Security',
    durationHours: 20,
    highlight: 'Stay safe in the digital financial world',
    badge: 'Essential Defense',
    iconName: 'ShieldCheck',
    summary: 'Protect yourself against cyber fraud, master secure net banking, UPI PIN safety, Two-Factor Authentication, and DigiLocker.',
    detailedTopics: [
      'Safe web browsing, SSL padlock verification & incognito mode (सुरक्षित ब्राऊझिंग)',
      'Recognizing phishing emails, spoofed SMS & lottery scam links (फिशिंग फ्रॉड)',
      'Secure net banking, UPI PIN security & debit/credit card guidelines (UPI सुरक्षा)',
      'Setting up Two-Factor Authentication (2FA) and password managers',
      'DigiLocker: Storing driving license, Aadhaar & mark sheets securely (डिजिलॉकर)',
      'Social media privacy audits: WhatsApp, Facebook & Instagram settings'
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
    title: 'Digital Citizen Services & e-Governance (शासकीय ई-सेवा)',
    category: 'Citizen Services',
    durationHours: 15,
    highlight: 'Direct government portal proficiency',
    badge: 'Govt. Services',
    iconName: 'Landmark',
    summary: 'Hands-on practice applying for PAN card, Aaple Sarkar certificates, voter ID, railway tickets, and utility billing.',
    detailedTopics: [
      'Maharashtra Aaple Sarkar portal: Income & Domicile certificate filing (दाखले अर्ज)',
      'Online PAN Card application & Aadhaar card linking (पॅन कार्ड अर्ज)',
      'Voter ID registration and electoral roll search (मतदान ओळखपत्र)',
      'IRCTC rail ticket booking, Tatkal reservations & bus passes (रेल्वे तिकीट)',
      'Electricity, water & municipal property tax online bill settlement (बिल भरणे)',
      'MahaDBT scholarship application navigation (महाDBT शिष्यवृत्ती)'
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
    title: 'AI Tools & 21st Century Workplace (आधुनिक AI साधने)',
    category: 'Future Tech',
    durationHours: 15,
    highlight: 'ChatGPT, Copilot & AI assisted work',
    badge: 'Future Tech',
    iconName: 'Sparkles',
    summary: 'Harness Generative AI tools to summarize text, draft emails, formulate spreadsheets, translate languages, and generate graphics.',
    detailedTopics: [
      'Introduction to Large Language Models (ChatGPT, Microsoft Copilot) (AI ओळख)',
      'Prompt Engineering: Writing effective prompts for business tasks (प्रॉम्प्ट तंत्र)',
      'AI-assisted drafting: Emails, essays, cover letters & translations (मजकूर लेखन)',
      'Generating formulas and debugging Excel errors using AI (एक्सेल फॉर्म्युले)',
      'Ethics of AI, plagiarism detection & fact-checking information',
      'AI graphic tools: removing backgrounds, enhancing image resolution'
    ],
    handsOnProjects: [
      'Draft a full job application package using prompt engineering',
      'Use Copilot to clean and reformat a messy customer database'
    ],
    toolsCovered: ['ChatGPT', 'Microsoft Copilot', 'DeepL Translator', 'Canva Magic AI']
  },
  {
    id: 'm8-era-exam-simulator',
    code: 'MOD-08',
    title: 'MKCL ERA Exam Simulator & Preparation (१०० गुण अंतिम परीक्षा সराव)',
    category: 'Exam Simulator',
    durationHours: 20,
    highlight: 'Guaranteed 95%+ marks strategy',
    badge: 'Pass Guarantee',
    iconName: 'GraduationCap',
    summary: 'Master the MKCL ERA e-Learning system, complete daily "Take a Challenge" and "Do It Yourself" sessions, and take full-length mock exams.',
    detailedTopics: [
      'Understanding the 50-mark internal continuous assessment system (अंतर्गत मूल्यमापन)',
      '100% completion roadmap for ERA e-Learning practical sessions',
      'Timed speed drill: 50 Questions in 60 Minutes final exam simulator (परीक्षा सराव)',
      'Previous years most repeated objective & practical questions (महत्त्वाचे प्रश्न)',
      'Stress-free exam hall strategies and technical guidelines',
      'Official Maharashtra State Board MS-CIT Certificate issuance process (प्रमाणपत्र)'
    ],
    handsOnProjects: [
      'Complete 5 full-length timed MKCL mock tests with real-time scoring',
      'Review error log & targeted remediation for weak topic areas'
    ],
    toolsCovered: ['MKCL ERA 2024/2025', 'Online Exam Simulator', 'OMR Practice', 'Score Analytics']
  }
];