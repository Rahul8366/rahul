import React from 'react';
import { Users, Home, Shield } from 'lucide-react';
import TiltCard from './TiltCard';

export default function FamilySection({ profile, language, isLightMode }) {
  const { family } = profile;

  const familyMembers = [
    {
      roleKn: 'ತಂದೆ',
      roleEn: 'Father',
      roleHi: 'पिता',
      nameKn: family.fatherNameKn,
      nameEn: family.fatherNameEn,
      nameHi: family.fatherNameHi,
      occupationKn: family.fatherOccupationKn,
      occupationEn: family.fatherOccupationEn,
      occupationHi: family.fatherOccupationHi,
      descKn: 'ಕುಟುಂಬದ ಆಧಾರಸ್ತಂಭ',
      descEn: 'Family Pillar & Mentor',
      descHi: 'परिवार के स्तंभ एवं मार्गदर्शक',
    },
    {
      roleKn: 'ತಾಯಿ',
      roleEn: 'Mother',
      roleHi: 'माता',
      nameKn: family.motherNameKn,
      nameEn: family.motherNameEn,
      nameHi: family.motherNameHi,
      occupationKn: family.motherOccupationKn,
      occupationEn: family.motherOccupationEn,
      occupationHi: family.motherOccupationHi,
      descKn: 'ಗೃಹಲಕ್ಷ್ಮಿ ಹಾಗೂ ಸಂಸ್ಕಾರದ ಮೂಲ',
      descEn: 'Heart of the Household',
      descHi: 'स्नेहमयी गृहणी',
    },
    {
      roleKn: 'ಅಣ್ಣ',
      roleEn: 'Brother',
      roleHi: 'भाई',
      nameKn: family.brotherNameKn,
      nameEn: family.brotherNameEn,
      nameHi: family.brotherNameHi,
      occupationKn: family.brotherDetailsKn,
      occupationEn: family.brotherDetailsEn,
      occupationHi: family.brotherDetailsHi,
      descKn: 'ಹಿರಿಯ ಸಹೋದರ',
      descEn: 'Elder Brother',
      descHi: 'बड़े भाई',
    },
  ];

  const getRole = (m) => (language === 'hi' ? m.roleHi : language === 'en' ? m.roleEn : m.roleKn);
  const getName = (m) => (language === 'hi' ? m.nameHi : language === 'en' ? m.nameEn : m.nameKn);
  const getOcc = (m) => (language === 'hi' ? m.occupationHi : language === 'en' ? m.occupationEn : m.occupationKn);
  const getDesc = (m) => (language === 'hi' ? m.descHi : language === 'en' ? m.descEn : m.descKn);

  return (
    <section id="family" className="py-20 relative">
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
            <Users className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi'
                ? 'पारिवारिक पृष्ठभूमि • Family Heritage'
                : language === 'en'
                ? 'Family Background & Values'
                : 'ಕೌಟುಂಬಿಕ ಹಿನ್ನೆಲೆ • Family Heritage'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'परिवार का विवरण'
              : language === 'en'
              ? 'Family Details'
              : 'ಕುಟುಂಬದ ವಿವರಗಳು'}
          </h2>
          <p
            className={`text-sm mt-2 font-medium ${
              isLightMode ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {language === 'hi'
              ? 'आपसी प्रेम, संस्कार और उच्च मानवीय मूल्यों वाला सुसंस्कृत वीरशैव लिंगायत परिवार।'
              : language === 'en'
              ? 'A respectable, cultured Veerashaiva Lingayat family rooted in harmony, unity, and integrity.'
              : 'ಪರಸ್ಪರ ಪ್ರೀತಿ, ಗೌರವ ಮತ್ತು ಸಂಪ್ರದಾಯಬದ್ಧ ಕೌಟುಂಬಿಕ ಮೌಲ್ಯಗಳನ್ನು ಹೊಂದಿರುವ ಸುಸಂಸ್ಕೃತ ಕುಟುಂಬ.'}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Family Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {familyMembers.map((member, idx) => (
            <TiltCard
              key={idx}
              isIvory={isLightMode}
              maxTilt={6}
              className="p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-lg shadow-amber-950/40">
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center ${
                    isLightMode ? 'bg-[#ffffff]' : 'bg-[#071527]'
                  }`}
                >
                  <Users className="w-7 h-7 text-[#d4af37]" />
                </div>
              </div>

              <span
                className={`text-xs uppercase tracking-widest font-bold ${
                  isLightMode ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {getRole(member)}
              </span>

              <h4
                className={`text-xl font-bold mt-1 transition-colors ${
                  isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7] group-hover:text-white'
                }`}
              >
                {getName(member)}
              </h4>

              <div
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border ${
                  isLightMode
                    ? 'bg-[#c59b27]/15 border-[#c59b27]/40 text-[#855b0a]'
                    : 'bg-[#d4af37]/15 border-[#d4af37]/30 text-[#f6e8b1]'
                }`}
              >
                {getOcc(member)}
              </div>

              <p
                className={`text-xs mt-3 pt-3 border-t font-medium ${
                  isLightMode ? 'border-slate-200 text-slate-600' : 'border-white/5 text-slate-400'
                }`}
              >
                {getDesc(member)}
              </p>
            </TiltCard>
          ))}
        </div>

        {/* Additional Family Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TiltCard isIvory={isLightMode} maxTilt={4} className="p-6 flex items-center gap-5">
            <div
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${
                isLightMode
                  ? 'bg-white border-[#c59b27]/50 text-[#855b0a]'
                  : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
              }`}
            >
              <Home className="w-7 h-7" />
            </div>
            <div>
              <span
                className={`text-xs uppercase tracking-wider font-bold ${
                  isLightMode ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {language === 'hi' ? 'आवास का प्रकार' : language === 'en' ? 'Residence Type' : 'ಮನೆ / ವಸತಿ ವಿವರ'}
              </span>
              <div
                className={`text-lg font-bold mt-0.5 ${
                  isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
                }`}
              >
                {language === 'hi' ? family.houseHi : language === 'en' ? family.houseEn : family.houseKn}
              </div>
              <p
                className={`text-xs mt-1 font-medium ${
                  isLightMode ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {language === 'hi'
                  ? 'गाँव में स्वतंत्र एवं सुसज्जित अपना घर'
                  : language === 'en'
                  ? 'Independent own house in village'
                  : 'ಗ್ರಾಮದಲ್ಲಿ ಸ್ವಂತ ಸ್ವತಂತ್ರ ಮನೆ'}
              </p>
            </div>
          </TiltCard>

          <TiltCard isIvory={isLightMode} maxTilt={4} className="p-6 flex items-center gap-5">
            <div
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${
                isLightMode
                  ? 'bg-white border-[#c59b27]/50 text-[#855b0a]'
                  : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
              }`}
            >
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <span
                className={`text-xs uppercase tracking-wider font-bold ${
                  isLightMode ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {language === 'hi' ? 'पारिवारिक संरचना' : language === 'en' ? 'Family Structure & Values' : 'ಕುಟುಂಬದ ಪ್ರಕಾರ'}
              </span>
              <div
                className={`text-lg font-bold mt-0.5 ${
                  isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
                }`}
              >
                {language === 'hi' ? family.familyTypeHi : language === 'en' ? family.familyTypeEn : family.familyTypeKn}
              </div>
              <p
                className={`text-xs mt-1 font-medium ${
                  isLightMode ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {language === 'hi' ? family.valuesHi : language === 'en' ? family.valuesEn : family.valuesKn}
              </p>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
