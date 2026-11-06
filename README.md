# Apex MS-CIT Training Academy Web Application

A modern, high-conversion web application designed for an authorized **MS-CIT (Maharashtra State Certificate in Information Technology)** computer training institute. Built with React 18, TypeScript, Tailwind CSS, and Lucide React.

![MS-CIT Portal](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200)

---

## 🚀 Key Features

- **High-Impact Hero Section:** Value proposition, MKCL authorization badges (`ALC-411038`), live ERA simulation card, and fast-track admission call to actions.
- **Official 8-Module Curriculum Breakdown:**
  - `MOD-01`: Computer Fundamentals & Windows 11
  - `MOD-02`: Microsoft Word & Professional Documentation
  - `MOD-03`: Microsoft Excel & Data Analytics (VLOOKUP, XLOOKUP, Pivot)
  - `MOD-04`: Microsoft PowerPoint & Presentation Storytelling
  - `MOD-05`: Internet, Cyber Security & Financial Safety (DigiLocker, UPI)
  - `MOD-06`: Citizen Services & Maharashtra Aaple Sarkar / e-Governance
  - `MOD-07`: AI Tools in Daily Productivity (ChatGPT, Copilot)
  - `MOD-08`: MKCL ERA System & Final Online Exam Simulator
- **Interactive Syllabus Reader Modal:** In-depth module inspection with topics, hands-on lab projects, and print/download feature.
- **Why Choose Us Grid:** 1:1 computer lab guarantee, MKCL ERA 2025 local server, bilingual instruction (Marathi & English), and unlimited mock test simulations.
- **Government Recognition & Certificate Showcase:** Interactive certificate anatomy (Hologram, MSBTE seal, DigiLocker verification, GR government job eligibility for MPSC, Talathi, Zilla Parishad).
- **Batches & Transparent Fee Structure:** Regular (2 Months), Fast-Track (1 Month), and Weekend Special batches with timing slots and 2-part installment breakdowns.
- **Interactive Campus Lab Gallery:** High-res facility showcase with category tabs (Workstations, Smart Classroom, Speed Arena).
- **Interactive Mini MS-CIT Quiz Widget:** 5-question digital readiness self-assessment with live scoring and celebratory confetti animation.
- **Alumni Hall of Fame:** Verified student testimonials with scores (98%, 96%, 94%) and current job designations.
- **Dual Enrollment Channels:** Interactive on-page admission form + modal popups with client-side validation and instant confirmation receipts.
- **Comprehensive FAQ Accordions:** Direct answers to eligibility, exam pattern, passing marks, and certificate delivery.

---

## 🛠 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) (Glassmorphism, custom gradients, dark slate palette)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animation / FX:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📁 Project Architecture

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── home/
│   │   │   ├── CertificationShowcase.tsx  // Certificate anatomy & govt job roles
│   │   │   ├── CourseCatalog.tsx          // 8-module catalog with topic filters
│   │   │   ├── EnrollmentSection.tsx      // On-page admission form with validation
│   │   │   ├── FAQSection.tsx             // Filterable accordion FAQs
│   │   │   ├── FeeAndBatches.tsx          // Batches & installment cards
│   │   │   ├── Hero.tsx                   // High-conversion value proposition hero
│   │   │   ├── LabGallery.tsx             // Campus lab infrastructure viewer
│   │   │   ├── MockTestQuiz.tsx           // 5-question interactive quiz
│   │   │   ├── StatsRibbon.tsx            // 15,000+ alumni, 99.4% pass stats
│   │   │   ├── Testimonials.tsx           // Verified student reviews
│   │   │   └── WhyChooseUs.tsx            // 6 core training pillars
│   │   ├── layout/
│   │   │   ├── Footer.tsx                 // Full footer with center code & map
│   │   │   ├── Navbar.tsx                 // Sticky glassmorphism nav with mobile drawer
│   │   │   └── TopBanner.tsx              // Urgent admissions ticker banner
│   │   └── modals/
│   │       ├── EnrollmentModal.tsx        // Popup admission form with confetti
│   │       └── SyllabusModal.tsx          // Deep-dive syllabus brochure reader
│   ├── data/
│   │   ├── batchesData.ts                 // Timings, batch modes & fee structure
│   │   ├── coursesData.ts                 // Complete 8-module syllabus dataset
│   │   ├── faqsData.ts                    // Official MS-CIT questions & answers
│   │   ├── quizData.ts                    // 5-question test questions & explanations
│   │   └── testimonialsData.ts            // Alumni stories & lab facility specs
│   ├── types/
│   │   └── index.ts                       // TypeScript interfaces
│   ├── App.tsx                            // Main page assembly & modal controllers
│   ├── index.css                          // Custom glassmorphism & gradients
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🏃 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or any static host.

---

## ⚙️ Customization Guide

- **Institute Name & Center Code:** Update in [src/components/layout/Navbar.tsx](file:///src/components/layout/Navbar.tsx) and [src/components/layout/Footer.tsx](file:///src/components/layout/Footer.tsx).
- **Helpline Phone & WhatsApp:** Update the phone number (`+91 98765 43210`) in [src/components/home/EnrollmentSection.tsx](file:///src/components/home/EnrollmentSection.tsx) and [src/App.tsx](file:///src/App.tsx).
- **Curriculum & Fees:** Modify [src/data/coursesData.ts](file:///src/data/coursesData.ts) and [src/data/batchesData.ts](file:///src/data/batchesData.ts).

