import { CourseModule } from '../types';

export const coursesData: CourseModule[] = [
  {
    id: 'm1-it-basics',
    code: 'MOD-01',
    title: 'संगणक बेसिक व विंडोज ११ (Computer Basics & Windows 11)',
    category: 'पायाभूत (Core)',
    durationHours: 15,
    highlight: 'संगणकाचा मजबूत पाया',
    badge: 'पायाभूत मॉड्युल',
    iconName: 'Monitor',
    summary: 'ऑपरेटिंग सिस्टीम, फाईल व्यवस्थापन (File Explorer), संगणक सेटिंग्ज, शॉर्टकट की आणि हार्डवेअरची संपूर्ण माहिती.',
    detailedTopics: [
      'कॉम्प्युटरची रचना व विंडोज ११ ऑपरेटिंग सिस्टीम (Operating System)',
      'डेस्कटॉप, टास्कबार, व्हर्च्युअल डेस्कटॉप आणि टास्क मॅनेजर (Task Manager)',
      'फाईल्स व फोल्डर्स व्यवस्थापन, झिप फाईल (ZIP) व पेनड्राईव्ह वापर',
      'इनपुट/आउटपुट साधने: प्रिंटर, स्कॅनर व वेबकॅम जोडणी (Peripherals)',
      'कॉम्प्युटर स्लो झाल्यास सेटिंग्ज व व्हायरसपासून सुरक्षा',
      'मराठी व इंग्रजी कीबोर्ड टायपिंग सराव (Touch Typing)'
    ],
    handsOnProjects: [
      'स्वतःचा सुव्यवस्थित डेस्कटॉप आणि ऑटोमॅटिक बॅकअप फोल्डर तयार करणे',
      'हार्डवेअर आणि ड्राइव्हर्स अपडेट तपासणी प्रात्यक्षिक'
    ],
    toolsCovered: ['Windows 11', 'File Explorer', 'Typing Tutor', 'Snipping Tool', 'Task Manager']
  },
  {
    id: 'm2-word-mastery',
    code: 'MOD-02',
    title: 'मायक्रोसॉफ्ट वर्ड व डॉक्युमेंट रायटिंग (MS Word 2024)',
    category: 'कार्यालयीन (Office)',
    durationHours: 25,
    highlight: 'शासकीय व खाजगी पत्रव्यवहार',
    badge: 'सर्वाधिक मागणी',
    iconName: 'FileText',
    summary: 'शासकीय पत्रे, नोकरीसाठी प्रभावी रेझ्युमे (बायोडाटा), टेबल्स, फॉन्ट फॉरमॅटिंग आणि मेल मर्जचे (Mail Merge) प्रत्यक्ष प्रशिक्षण.',
    detailedTopics: [
      'मजकूर टाईप करणे, फॉन्ट फॉरमॅटिंग, मार्जिन व पेज लेआउट (Page Setup)',
      'टेबल्स (Tables), बुलेट्स आणि नंबरिंग, हेडर-फुटर व वॉटरमार्क (Watermark)',
      'चित्रे (Images), शेप्स (Shapes) आणि स्मार्टआर्ट डिझाइन',
      'मेल मर्ज (Mail Merge): एकाच वेळी शेकडो व्यक्तींना पत्र व प्रमाणपत्र पाठवणे',
      'स्पेलिंग व व्याकरण तपासणी (Proofreading & Spell Check)',
      'प्रिंट-रेडी PDF फाईल तयार करणे व पासवर्डने सुरक्षित करणे'
    ],
    handsOnProjects: [
      'अधिकृत शासकीय पत्र व नोकरीसाठी आकर्षक बायोडाटा (Resume) तयार करणे',
      '५० विद्यार्थ्यांसाठी मेल मर्जद्वारे प्रमाणपत्र तयार करणे'
    ],
    toolsCovered: ['MS Word 2024', 'Google Docs', 'Font Formatting', 'PDF Creator']
  },
  {
    id: 'm3-excel-analytics',
    code: 'MOD-03',
    title: 'मायक्रोसॉफ्ट एक्सेल व हिशोब (MS Excel 2024)',
    category: 'व्यवसाय (Business)',
    durationHours: 35,
    highlight: 'फॉर्म्युले, VLOOKUP व पिव्हट चार्ट्स',
    badge: 'नोकरीसाठी महत्त्वाचे',
    iconName: 'TableProperties',
    summary: 'हिशोब ठेवणे, ऑटोमॅटिक फॉर्म्युले, सॅलरी शीट, बिलिंग, जीएसटी कॅल्क्युलेशन आणि आकर्षक चार्ट्स तयार करणे.',
    detailedTopics: [
      'रो, कॉलम, सेल्स आणि बेसिक फॉर्म्युले: SUM, AVERAGE, PERCENTAGE',
      'शर्तीनुसार हिशोब: IF, COUNTIF, SUMIF आणि तार्किक फॉर्म्युले (Logic)',
      'डेटा शोधणे: VLOOKUP, HLOOKUP आणि आधुनिक XLOOKUP चा वापर',
      'डेटा सॉर्टिंग, फिल्टरिंग आणि कंडिशनल फॉरमॅटिंग (Conditional Formatting)',
      'पिव्हट टेबल (PivotTable) आणि आकर्षक पिव्हट चार्ट्सद्वारे रिपोर्ट तयार करणे',
      'पगार पत्रक (Salary Slip), घरगुती बजेट आणि जीएसटी (GST) बिल टेम्पलेट्स'
    ],
    handsOnProjects: [
      'कर्मचाऱ्यांची ऑटोमॅटिक सॅलरी शीट व हजेरी पत्रक तयार करणे',
      'दुकान किंवा व्यवसायासाठी विक्री रिपोर्ट व आलेख (Charts) डिझाइन करणे'
    ],
    toolsCovered: ['MS Excel 2024', 'Google Sheets', 'Pivot Tools', 'Data Visualizer']
  },
  {
    id: 'm4-powerpoint-presentation',
    code: 'MOD-04',
    title: 'मायक्रोसॉफ्ट पॉवरपॉईंट (MS PowerPoint 2024)',
    category: 'सादरीकरण (Media)',
    durationHours: 15,
    highlight: 'आकर्षक स्लाइड्स व डिजिटल प्रेझेंटेशन',
    badge: 'सर्जनशील कौशल्य',
    iconName: 'Presentation',
    summary: 'शाळा, कॉलेज व ऑफिससाठी आकर्षक स्लाइड्स डिझाइन, मोशन ॲनिमेशन्स, व्हिडिओ आणि सादरीकरण कौशल्ये.',
    detailedTopics: [
      'स्लाइड डिझाइन, थीम, सुंदर कलर्स आणि मराठी फॉन्ट वापर',
      'मॉर्फ ट्रान्झिशन (Morph Transitions) आणि आकर्षक ॲनिमेशन्स',
      'ऑडिओ, स्क्रीन रेकॉर्डिंग आणि व्हिडिओ क्लिप्स जोडणे',
      'प्रिझेन्टर व्ह्यू (Presenter View) आणि स्लाइड शो तंत्रज्ञान',
      'इन्फोग्राफिक्स, तक्ते आणि तुलनात्मक चार्ट्स तयार करणे',
      'सादरीकरण थेट व्हिडिओ स्वरूपात (MP4) एक्सपोर्ट करणे'
    ],
    handsOnProjects: [
      '१० स्लाइड्सचे आकर्षक डिजिटल कंपनी किंवा प्रोजेक्ट प्रेझेंटेशन बनवणे',
      'ॲनिमेशनसह स्वयंचलित चालणारा माहितीपट (Slide Show) तयार करणे'
    ],
    toolsCovered: ['MS PowerPoint 2024', 'Canva Integration', 'Presenter View']
  },
  {
    id: 'm5-cyber-safety-internet',
    code: 'MOD-05',
    title: 'इंटरनेट, सायबर सुरक्षा व UPI बँकिंग (Cyber Security)',
    category: 'डिजिटल सुरक्षा (Safety)',
    durationHours: 20,
    highlight: 'ऑनलाइन फसवणुकीपासून स्वतःचा बचाव',
    badge: 'अतिशय आवश्यक',
    iconName: 'ShieldCheck',
    summary: 'सुरक्षित इंटरनेट ब्राऊझिंग, सायबर गुन्हे व फ्रॉडपासून संरक्षण, सुरक्षित नेट बँकिंग, UPI व DigiLocker चा वापर.',
    detailedTopics: [
      'सुरक्षित ब्राऊझिंग, SSL कुलूप चिन्ह तपासणी आणि इन्कॉग्निटो मोड (Incognito)',
      'फिशिंग ईमेल्स, खोट्या लॉटरी लिंक्स व सायबर फसवणूक ओळखणे',
      'सुरक्षित नेट बँकिंग, UPI पिन सुरक्षा आणि क्रेडिट/डेबिट कार्डचे नियम',
      'टू-फॅक्टर ऑथेंटिकेशन (2FA) व मजबूत पासवर्ड व्यवस्थापन',
      'डिजिलॉकर (DigiLocker): आधार, पॅन व गुणपत्रिका सुरक्षित साठवणे',
      'सोशल मीडिया सुरक्षा: व्हॉट्सॲप, फेसबुक व इन्स्टाग्राम प्रायव्हसी सेटिंग्ज'
    ],
    handsOnProjects: [
      'फिशिंग आणि बनावट मेसेज ओळखण्याचे प्रत्यक्ष प्रात्यक्षिक',
      'स्वतःचे अधिकृत डिजीलॉकर खाते उघडून कागदपत्रे जोडणे'
    ],
    toolsCovered: ['Google Chrome', 'DigiLocker', '2FA Authenticator', 'UPI Security', 'Bitwarden']
  },
  {
    id: 'm6-citizen-egovernance',
    code: 'MOD-06',
    title: 'शासकीय डिजिटल सेवा व ई-प्रशासन (e-Governance)',
    category: 'नागरी सेवा (Services)',
    durationHours: 15,
    highlight: 'सरकारी योजना व थेट ऑनलाइन अर्ज',
    badge: 'शासकीय सेवा',
    iconName: 'Landmark',
    summary: 'आपले सरकार, महाDBT स्कॉलरशिप, पॅन कार्ड, मतदान ओळखपत्र, रेल्वे तिकीट आणि घरगुती वीज बिल भरणे.',
    detailedTopics: [
      'आपले सरकार पोर्टल: उत्पन्न दाखला, अधिवास प्रमाणपत्र (Domicile) अर्ज करणे',
      'नवीन पॅन कार्डसाठी (PAN Card) ऑनलाइन अर्ज व आधार लिंकिंग',
      'नवीन मतदान ओळखपत्र नोंदणी (Voter ID) आणि यादीत नाव शोधणे',
      'IRCTC पोर्टलवरून रेल्वे व बस तिकीट आरक्षण करणे',
      'ऑनलाइन वीज बिल, पाणी बिल व कर भरणे',
      'महाDBT पोर्टलवरून शिष्यवृत्ती (Scholarship) फॉर्म भरणे'
    ],
    handsOnProjects: [
      'उत्पन्न दाखल्यासाठी आवश्यक कागदपत्रे अपलोड करण्याचा सराव',
      'IRCTC रेल्वे तिकीट बुकिंग प्रक्रियेचे थेट प्रात्यक्षिक'
    ],
    toolsCovered: ['Aaple Sarkar', 'MahaDBT', 'IRCTC', 'UIDAI Portal', 'NVSP']
  },
  {
    id: 'm7-ai-tools',
    code: 'MOD-07',
    title: '२१ व्या शतकातील AI टूल्स (AI Tools & Productivity)',
    category: 'आधुनिक तंत्रज्ञान (AI)',
    durationHours: 15,
    highlight: 'ChatGPT, Copilot व आधुनिक स्मार्ट काम',
    badge: 'भविष्यातील तंत्रज्ञान',
    iconName: 'Sparkles',
    summary: 'आर्टिफिशियल इंटेलिजन्सचा (AI) वापर करून मजकूर लिहिणे, ईमेल्स ड्राफ्ट करणे आणि वेगाने काम पूर्ण करणे.',
    detailedTopics: [
      'आर्टिफिशियल इंटेलिजन्सची ओळख (ChatGPT, Microsoft Copilot)',
      'प्रॉम्प्ट इंजिनिअरिंग: योग्य प्रश्न विचारून अचूक माहिती मिळवणे',
      'AI द्वारे मराठी-इंग्रजी भाषांतर आणि सुंदर ईमेल्स लिहिणे',
      'एक्सेल फॉर्म्युले तयार करण्यासाठी व त्रुटी दुरुस्त करण्यासाठी AI चा वापर',
      'AI साधनांचा नैतिक व सुरक्षित वापर',
      'एआय इमेज टूल्स: फोटोंचा बॅकग्राउंड काढणे व डिझाइन सुधारणे'
    ],
    handsOnProjects: [
      'ChatGPT च्या सहाय्याने नोकरीसाठी कव्हर लेटर व अर्ज तयार करणे',
      'Microsoft Copilot चा वापर करून डेटा सुधारणे'
    ],
    toolsCovered: ['ChatGPT', 'Microsoft Copilot', 'DeepL Translator', 'Canva Magic AI']
  },
  {
    id: 'm8-era-exam-simulator',
    code: 'MOD-08',
    title: 'MKCL ERA अंतिम परीक्षा सराव (Mock Exam Simulator)',
    category: 'परीक्षा सराव (Exam)',
    durationHours: 20,
    highlight: '१०० गुणांची खात्रीशीर तयारी',
    badge: 'यशस्वी हमी',
    iconName: 'GraduationCap',
    summary: 'MKCL ERA ई-लर्निंग सिस्टीमवर १०० पैकी १०० गुणांसाठी दररोज ५० गुणांचे अंतर्गत मूल्यमापन व अंतिम ऑनलाइन परीक्षेचा सराव.',
    detailedTopics: [
      '५० गुणांचे अंतर्गत मूल्यमापन (ERA Internal Evaluation) समजून घेणे',
      'ERA सिस्टीमवरील सर्व सेशन्स १००% पूर्ण करण्याचे नियोजन',
      'अंतिम परीक्षेचा सिम्युलेटर सराव: ६० मिनिटांत ५० प्रश्न सोडवण्याची गती',
      'मागील वर्षांतील सर्वाधिक विचारले गेलेले महत्त्वाचे वस्तुनिष्ठ प्रश्न',
      'परीक्षेतील तांत्रिक अडचण न येण्यासाठी महत्त्वाच्या टिप्स',
      'महाराष्ट्र राज्य तंत्रशिक्षण मंडळ (MSBTE) अधिकृत प्रमाणपत्र मिळण्याची प्रक्रिया'
    ],
    handsOnProjects: [
      'वेळेचे बंधन ठेवून ५ पूर्ण मॉक टेस्ट देणे व गुण तपासणे',
      'चुकलेल्या प्रश्नांचा पुन्हा सराव करून ९५%+ गुणांची खात्री करणे'
    ],
    toolsCovered: ['MKCL ERA 2024/2025', 'Online Exam Simulator', 'OMR Practice', 'Score Analytics']
  }
];