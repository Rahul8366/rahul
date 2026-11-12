import React from 'react';
import { Heart, Compass, ShieldCheck } from 'lucide-react';
import TiltCard from './TiltCard';

export default function AboutMeSection({ profile, language, isLightMode }) {
  const { about } = profile;

  const highlights = [
    {
      icon: ShieldCheck,
      titleKn: 'ಕೌಟುಂಬಿಕ ಮೌಲ್ಯಗಳು',
      titleEn: 'Family Values',
      titleHi: 'पारिवारिक मूल्य',
      descKn: 'ಹಿರಿಯರಿಗೆ ಗೌರವ, ಕುಟುಂಬದಲ್ಲಿ ಸೌಹಾರ್ದತೆ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ನಡವಳಿಕೆ.',
      descEn: 'Respect for elders, family harmony, and grounded principles.',
      descHi: 'बुजुर्गों का आदर, पारिवारिक एकता और जिम्मेदार आचरण।',
    },
    {
      icon: Compass,
      titleKn: 'ವೃತ್ತಿಪರ ದೃಷ್ಟಿಕೋನ',
      titleEn: 'Professional Outlook',
      titleHi: 'व्यावसायिक दृष्टिकोण',
      descKn: 'ಐಟಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ನಿರಂತರ ಕಲಿಕೆ, ಶ್ರದ್ಧೆ ಹಾಗೂ ಆರ್ಥಿಕ ಭದ್ರತೆಯೊಂದಿಗೆ ಮುನ್ನಡೆ.',
      descEn: 'Driven career path in IT with a focus on stability and growth.',
      descHi: 'आईटी क्षेत्र में निरंतर प्रगति, निष्ठा और आर्थिक सुरक्षा।',
    },
    {
      icon: Heart,
      titleKn: 'ಸರಳತೆ ಮತ್ತು ಸದ್ಭಾವನೆ',
      titleEn: 'Humility & Sincerity',
      titleHi: 'सरलता एवं सद्भाव',
      descKn: 'ಸರಳ ಜೀವನಶೈಲಿ, ಸಕಾರಾತ್ಮಕ ಚಿಂತನೆ ಹಾಗೂ ಆಪ್ತ ಸಂಬಂಧಗಳ ಬಲವರ್ಧನೆ.',
      descEn: 'Simple lifestyle, positive mindset, and genuine relationships.',
      descHi: 'सादगीपूर्ण जीवन, सकारात्मक विचार और प्रगाढ़ आत्मीय संबंध।',
    },
  ];

  const getSummary = () => {
    if (language === 'hi') return about.summaryHi;
    if (language === 'en') return about.summaryEn;
    return about.summaryKn;
  };

  const getHobbies = () => {
    if (language === 'hi') return about.hobbiesHi;
    if (language === 'en') return about.hobbiesEn;
    return about.hobbiesKn;
  };

  const getHLabel = (h) => (language === 'hi' ? h.titleHi : language === 'en' ? h.titleEn : h.titleKn);
  const getHDesc = (h) => (language === 'hi' ? h.descHi : language === 'en' ? h.descEn : h.descKn);

  return (
    <section id="aboutme" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${
              isLightMode
                ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                : 'bg-[#07172b]/80 border-[#d4af37]/30 text-[#d4af37]'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi'
                ? 'व्यक्तित्व एवं विचार • Persona & Philosophy'
                : language === 'en'
                ? 'Personality & Values'
                : 'ವ್ಯಕ್ತಿತ್ವ ಹಾಗೂ ಹವ್ಯಾಸಗಳು • Persona & Values'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'मेरे बारे में • जीवन दर्शन'
              : language === 'en'
              ? 'About Me & Life Philosophy'
              : 'ನನ್ನ ಬಗ್ಗೆ • ಆಲೋಚನೆಗಳು'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <TiltCard isIvory={isLightMode} maxTilt={4} className="p-8 sm:p-10 relative overflow-hidden">
            <div
              className={`flex items-center gap-2 mb-4 font-bold ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
              }`}
            >
              <span className="text-xs uppercase tracking-widest font-cinzel">
                {language === 'hi' ? 'व्यक्तिगत विचार' : language === 'en' ? 'Personal Statement' : 'ವೈಯಕ್ತಿಕ ಹೇಳಿಕೆ'}
              </span>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed font-sans font-medium mb-6 ${
                isLightMode ? 'text-[#0b172a]' : 'text-slate-200'
              }`}
            >
              "{getSummary()}"
            </p>

            {/* Hobbies / Interests */}
            <div
              className={`mt-8 pt-6 border-t flex flex-wrap items-center gap-3 ${
                isLightMode ? 'border-slate-200' : 'border-white/10'
              }`}
            >
              <span
                className={`text-xs uppercase tracking-wider font-bold ${
                  isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                }`}
              >
                {language === 'hi' ? 'रुचियाँ एवं शौक:' : language === 'en' ? 'Hobbies & Interests:' : 'ಆಸಕ್ತಿಗಳು ಹಾಗೂ ಹವ್ಯಾಸಗಳು:'}
              </span>
              <span
                className={`text-xs sm:text-sm font-semibold ${
                  isLightMode ? 'text-slate-800' : 'text-slate-300'
                }`}
              >
                {getHobbies()}
              </span>
            </div>
          </TiltCard>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <TiltCard key={idx} isIvory={isLightMode} maxTilt={6} className="p-6 text-center">
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center mx-auto mb-4 ${
                    isLightMode
                      ? 'bg-[#fef8e7] border-[#c59b27]/50 text-[#855b0a]'
                      : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4
                  className={`text-lg font-bold mb-2 ${
                    isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
                  }`}
                >
                  {getHLabel(h)}
                </h4>
                <p
                  className={`text-xs sm:text-sm leading-relaxed font-medium ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {getHDesc(h)}
                </p>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
