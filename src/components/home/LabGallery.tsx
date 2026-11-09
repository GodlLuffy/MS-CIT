import React, { useState } from 'react';
import { Laptop, CheckCircle2, Zap, Monitor, Server, BatteryCharging, Headphones, ShieldCheck } from 'lucide-react';

export const LabGallery: React.FC = () => {
  const [selectedLabIndex, setSelectedLabIndex] = useState(0);

  const labImages = [
    {
      title: 'प्रत्येकासाठी स्वतंत्र १:१ हाय-स्पीड PC वर्कस्टेशन',
      subtitle: 'High-Performance 1:1 Student Workstations (Rampur Road Campus)',
      caption: 'देगलूर परिसरातील एकमेव अशी लॅब जिथे विद्यार्थ्यांना कॉम्प्युटर शेअर करावा लागत नाही. Intel Core प्रोसेसर्स, हाय-स्पीड SSD स्टोरेज, आणि आरामदायक सिटिंगसह आधुनिक कॉम्प्युटर सिस्टीम्स उपलब्ध आहेत.',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
      tag: '१:१ स्वतंत्र वर्कस्टेशन',
      specs: ['प्रत्येकाला स्वतंत्र PC', 'Core Processors + SSD Speed', 'Ergonomic Executive Seating', 'Zero Sharing Policy']
    },
    {
      title: 'अधिकृत MKCL ERA 2025 लोकल सर्व्हर प्रणाली',
      subtitle: 'Authorized MKCL ERA e-Learning Multimedia Smart Lab',
      caption: 'MKCL च्या अधिकृत ERA सिस्टीमद्वारे मराठी व इंग्रजीतून ऑडिओ-व्हिडिओ लेक्चर्स. Take-A-Challenge आणि Do-It-Yourself प्रॅक्टिकल सरावाने १००% अंतर्गत गुण (Internal 50 Marks) मिळवणे सुलभ होते.',
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
      tag: 'ERA 2025 e-Learning',
      specs: ['मराठी व्हॉइस मार्गदर्शन', 'ऑटोमॅटिक प्रॅक्टिकल चेकिंग', 'डेली अटेंडन्स व प्रोग्रेस रिपोर्ट', 'ERA क्लाउड बॅकअप']
    },
    {
      title: 'अंतिम परीक्षा सिम्युलेटर व स्पीड टायपिंग लॅब',
      subtitle: 'Final Board Exam Simulator & Marathi/English Typing Zone',
      caption: 'MSBTE बोर्ड परीक्षेसारखा हुबेहूब ऑनलाइन परीक्षा सिम्युलेटर. ५० गुणांच्या प्रॅक्टिकल परीक्षेचा भरपूर सराव आणि कोर्ट/तहसील भरतीसाठी आवश्यक मराठी व इंग्रजी टायपिंगचा रोज विशेष सराव.',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      tag: 'ऑनलाइन परीक्षा सराव',
      specs: ['बोर्ड पॅटर्न ५० प्रश्न सराव', 'टायपिंग स्पीड सॉफ्टवेअर', 'मागील वर्षांचे वारंवार प्रश्न', 'गुण सुधारणा मार्गदर्शन']
    },
    {
      title: 'अखंड इन्व्हर्टर पॉवर बॅकअप (No Light Interruption)',
      subtitle: 'Silent Inverter & UPS Power System for Uninterrupted Learning',
      caption: 'देगलूर शहरात वीजपुरवठा खंडित झाला तरी आमचे प्रॅक्टिकल थांबत नाही! स्वयंचलित हेवी-ड्युटी इन्व्हर्टर सिस्टीममुळे विद्यार्थी अखंडपणे सराव पूर्ण करू शकतात.',
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
      tag: 'अखंड वीज पुरवठा',
      specs: ['Heavy-Duty Silent Inverter', 'Zero Loss of Exam Practice', 'Air-Cooled Spacious Hall', 'CCTV सुरक्षेसह सुरक्षित परिसर']
    }
  ];

  const currentLab = labImages[selectedLabIndex];

  return (
    <section id="lab" className="py-14 sm:py-20 lg:py-24 bg-[#FAF9F6] border-t border-ice relative w-full overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-ice text-xs font-bold text-aubergine shadow-sm">
            <Laptop className="w-3.5 h-3.5 text-marigold-600" />
            <span>Campus Infrastructure in Degloor • प्रत्यक्ष लॅब सुविधा</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-aubergine tracking-tight">
            देगलूरमधील अत्याधुनिक <span className="text-gradient-marigold">कॉम्प्युटर लॅब</span>
          </h2>
          <p className="text-aubergine/75 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            ग्लोबल इंग्लिश स्कूल जवळ, रामपूर रोड, देगलूर येथे प्रशस्त, वातानुकूलित व सुसज्ज संगणक प्रयोगशाळा.
          </p>
        </div>

        {/* Gallery Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10">
          
          {/* Main Selected Feature Image & Details */}
          <div className="lg:col-span-8 w-full space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-ice shadow-luxury group aspect-[16/10] bg-aubergine">
              <img
                src={currentLab.url}
                alt={currentLab.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aubergine-950 via-aubergine-950/40 to-transparent flex flex-col justify-end p-5 sm:p-8">
                <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-marigold text-aubergine-950 px-2.5 py-1 rounded-md w-fit mb-2">
                  {currentLab.tag}
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mb-1 leading-snug">
                  {currentLab.title}
                </h3>
                <p className="text-xs sm:text-sm text-ice/90 leading-relaxed max-w-2xl hidden sm:block">
                  {currentLab.caption}
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid beneath image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {currentLab.specs.map((spec, sIdx) => (
                <div key={sIdx} className="p-3 rounded-2xl bg-white border border-ice text-center shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-aubergine block leading-tight">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnails Navigation Picker */}
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            <h4 className="text-xs font-bold uppercase text-aubergine/70 tracking-wider flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-marigold-600" />
              <span>लॅब विभाग निवडा (Select Facility):</span>
            </h4>

            {labImages.map((img, idx) => {
              const isSelected = selectedLabIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedLabIndex(idx)}
                  className={`flex items-center gap-3 p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-aubergine text-white border-aubergine shadow-md ring-2 ring-marigold/40'
                      : 'bg-white text-aubergine border-ice hover:border-aubergine/40 hover:bg-ice/20'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-ice"
                  />
                  <div className="min-w-0 flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                      isSelected ? 'text-marigold' : 'text-marigold-700'
                    }`}>
                      {img.tag}
                    </span>
                    <h5 className="text-xs font-bold leading-snug truncate">
                      {img.title}
                    </h5>
                    <p className={`text-[11px] truncate mt-0.5 ${
                      isSelected ? 'text-ice/70' : 'text-aubergine/60'
                    }`}>
                      {img.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
