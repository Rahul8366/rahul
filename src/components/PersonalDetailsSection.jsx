import React from 'react';
import { Calendar, User, Ruler, Languages, Compass, MapPin } from 'lucide-react';
import TiltCard from './TiltCard';

export default function PersonalDetailsSection({ profile, language, isLightMode }) {
  const { personal } = profile;

  const getVal = (item) => {
    if (language === 'hi') return item.valHi;
    if (language === 'en') return item.valEn;
    return item.valKn;
  };

  const getLabel = (item) => {
    if (language === 'hi') return item.labelHi;
    if (language === 'en') return item.labelEn;
    return item.labelKn;
  };

  const getSub = (item) => {
    if (language === 'hi') return item.subHi;
    if (language === 'en') return item.subEn;
    return item.subKn;
  };

  const items = [
    {
      icon: Calendar,
      labelKn: 'ಜನ್ಮ ದಿನಾಂಕ',
      labelEn: 'Date of Birth',
      labelHi: 'जन्म तिथि',
      valKn: personal.dob,
      valEn: personal.dob,
      valHi: personal.dob,
      subKn: 'ಫೆಬ್ರವರಿ 21, 1999',
      subEn: 'February 21, 1999',
      subHi: '21 फरवरी 1999',
    },
    {
      icon: User,
      labelKn: 'ವಯಸ್ಸು',
      labelEn: 'Age',
      labelHi: 'आयु',
      valKn: personal.ageKn,
      valEn: personal.ageEn,
      valHi: personal.ageHi,
      subKn: 'ಪೂರ್ಣ ವರ್ಷಗಳು',
      subEn: 'Years Completed',
      subHi: 'पूर्ण वर्ष',
    },
    {
      icon: Ruler,
      labelKn: 'ಎತ್ತರ',
      labelEn: 'Height',
      labelHi: 'ऊँचाई',
      valKn: personal.heightKn,
      valEn: personal.heightEn,
      valHi: personal.heightHi,
      subKn: '5 ಅಡಿ 6 ಇಂಚು (168 cm)',
      subEn: '5 ft 6 in (168 cm)',
      subHi: '5 फीट 6 इंच (168 सेमी)',
    },
    {
      icon: Languages,
      labelKn: 'ತಿಳಿದಿರುವ ಭಾಷೆಗಳು',
      labelEn: 'Languages Known',
      labelHi: 'ज्ञात भाषाएँ',
      valKn: personal.languagesKn,
      valEn: personal.languagesEn,
      valHi: personal.languagesHi,
      subKn: 'ಸಂಪರ್ಕ ಭಾಷೆಗಳು',
      subEn: 'Fluent in all three',
      subHi: 'तीनों भाषाओं में निपुण',
    },
    {
      icon: Compass,
      labelKn: 'ಮೂಲ ಸ್ಥಳ',
      labelEn: 'Native Place',
      labelHi: 'मूल स्थान',
      valKn: personal.nativePlaceKn,
      valEn: personal.nativePlaceEn,
      valHi: personal.nativePlaceHi,
      subKn: 'ಕಲಬುರಗಿ ಜಿಲ್ಲೆ',
      subEn: 'Kalaburagi District',
      subHi: 'कलबुर्गी जिला',
    },
    {
      icon: MapPin,
      labelKn: 'ಪ್ರಸ್ತುತ ಸ್ಥಳ',
      labelEn: 'Current Location',
      labelHi: 'वर्तमान स्थान',
      valKn: personal.currentLocationKn,
      valEn: personal.currentLocationEn,
      valHi: personal.currentLocationHi,
      subKn: 'ಕರ್ನಾಟಕ',
      subEn: 'IT Hub, Karnataka',
      subHi: 'कर्नाटक',
    },
  ];

  return (
    <section id="personal" className="py-20 relative">
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
            <User className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi'
                ? 'व्यक्तिगत विवरण • Personal Details'
                : language === 'en'
                ? 'Personal Profile • Background'
                : 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ • Personal Details'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'व्यक्तिगत परिचय एवं विवरण'
              : language === 'en'
              ? 'Personal Profile & Details'
              : 'ನನ್ನ ಬಗ್ಗೆ • ವೈಯಕ್ತಿಕ ಪರಿಚಯ'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* 3D Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={idx}
                isIvory={isLightMode}
                maxTilt={7}
                className="p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs uppercase tracking-wider font-bold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {getLabel(item)}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isLightMode
                          ? 'bg-[#fef8e7] border-[#c59b27]/50 text-[#855b0a]'
                          : 'bg-gradient-to-br from-[#d4af37]/20 to-[#997424]/10 border-[#d4af37]/40 text-[#f6e8b1]'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-[#d4af37]" />
                    </div>
                  </div>

                  <div
                    className={`text-lg sm:text-xl font-bold leading-snug transition-colors ${
                      isLightMode ? 'text-[#0b172a] group-hover:text-[#855b0a]' : 'text-[#fbf5b7] group-hover:text-white'
                    }`}
                  >
                    {getVal(item)}
                  </div>
                </div>

                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                    isLightMode
                      ? 'border-slate-200 text-slate-500 font-medium'
                      : 'border-white/5 text-slate-400'
                  }`}
                >
                  <span>{getSub(item)}</span>
                  <span className="text-[10px] text-[#d4af37] font-mono font-bold">0{idx + 1}</span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
