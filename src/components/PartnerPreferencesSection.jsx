import React from 'react';
import { HeartHandshake, Check, Award, MapPin, Briefcase, GraduationCap, Users } from 'lucide-react';
import TiltCard from './TiltCard';

export default function PartnerPreferencesSection({ profile, language, isLightMode }) {
  const { preferences } = profile;

  const prefCards = [
    {
      icon: Users,
      labelKn: 'ವಯಸ್ಸಿನ ಅಂತರ',
      labelEn: 'Age Preference',
      labelHi: 'आयु सीमा',
      valKn: preferences.ageRangeKn,
      valEn: preferences.ageRangeEn,
      valHi: preferences.ageRangeHi,
      tagKn: '20 - 25 ವರ್ಷಗಳು',
      tagEn: '20 - 25 Years',
      tagHi: '20 से 25 वर्ष',
    },
    {
      icon: Award,
      labelKn: 'ಧರ್ಮ / ಸಮುದಾಯ',
      labelEn: 'Community',
      labelHi: 'समुदाय / धर्म',
      valKn: preferences.communityKn,
      valEn: preferences.communityEn,
      valHi: preferences.communityHi,
      tagKn: 'ವೀರಶೈವ ಲಿಂಗಾಯತ',
      tagEn: 'Veerashaiva Lingayat',
      tagHi: 'वीरशैव लिंगायत',
    },
    {
      icon: GraduationCap,
      labelKn: 'ವಿದ್ಯಾರ್ಹತೆ',
      labelEn: 'Education',
      labelHi: 'शैक्षणिक योग्यता',
      valKn: preferences.educationKn,
      valEn: preferences.educationEn,
      valHi: preferences.educationHi,
      tagKn: 'ಪದವಿ / ಸ್ನಾತಕೋತ್ತರ',
      tagEn: 'Graduate / Post Graduate',
      tagHi: 'स्नातक / स्नातकोत्तर',
    },
    {
      icon: Briefcase,
      labelKn: 'ಉದ್ಯೋಗ ಆದ್ಯತೆ',
      labelEn: 'Employment Preference',
      labelHi: 'कार्य / रोजगार',
      valKn: preferences.employmentKn,
      valEn: preferences.employmentEn,
      valHi: preferences.employmentHi,
      tagKn: 'ಉದ್ಯೋಗಸ್ಥೆ ಅಥವಾ ಗೃಹಿಣಿ',
      tagEn: 'Working / Homemaker',
      tagHi: 'कार्यरत या गृहिणी',
    },
    {
      icon: MapPin,
      labelKn: 'ಸ್ಥಳ / ಪ್ರದೇಶ',
      labelEn: 'Location Preference',
      labelHi: 'स्थान / क्षेत्र',
      valKn: preferences.locationKn,
      valEn: preferences.locationEn,
      valHi: preferences.locationHi,
      tagKn: 'ಕರ್ನಾಟಕದ ನಿವಾಸಿಗಳು',
      tagEn: 'Karnataka Region',
      tagHi: 'कर्नाटक क्षेत्र',
    },
    {
      icon: HeartHandshake,
      labelKn: 'ಕುಟುಂಬ ಸಂಸ್ಕಾರ',
      labelEn: 'Family & Outlook',
      labelHi: 'पारिवारिक संस्कार',
      valKn: preferences.familyValuesKn,
      valEn: preferences.familyValuesEn,
      valHi: preferences.familyValuesHi,
      tagKn: 'ಸುಸಂಸ್ಕೃತ ಕುಟುಂಬ',
      tagEn: 'Cultured Family',
      tagHi: 'संस्कारवान परिवार',
    },
  ];

  const getLabel = (p) => (language === 'hi' ? p.labelHi : language === 'en' ? p.labelEn : p.labelKn);
  const getVal = (p) => (language === 'hi' ? p.valHi : language === 'en' ? p.valEn : p.valKn);
  const getTag = (p) => (language === 'hi' ? p.tagHi : language === 'en' ? p.tagEn : p.tagKn);

  return (
    <section id="preferences" className="py-20 relative">
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
            <HeartHandshake className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi'
                ? 'जीवनसाथी की अपेक्षाएँ • Partner Expectations'
                : language === 'en'
                ? 'Partner Preferences'
                : 'ಆದರ್ಶ ಸಂಗಾತಿಯ ನಿರೀಕ್ಷೆಗಳು • Partner Expectations'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'जीवनसंगिनी की अपेक्षाएँ'
              : language === 'en'
              ? 'Life Partner Preferences'
              : 'ಜೀವನ ಸಂಗಾತಿಯ ನಿರೀಕ್ಷೆಗಳು'}
          </h2>
          <p
            className={`text-xs sm:text-sm mt-2 font-medium ${
              isLightMode ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {language === 'hi'
              ? 'आपसी समझ, सम्मान और पारिवारिक मूल्यों को प्राथमिकता देने वाली जीवनसंगिनी की चाह।'
              : language === 'en'
              ? 'Looking for a thoughtful, cultured, and supportive partner to build a harmonious future together.'
              : 'ಪರಸ್ಪರ ತಿಳುವಳಿಕೆ, ಗೌರವ ಮತ್ತು ಕೌಟುಂಬಿಕ ಮೌಲ್ಯಗಳಿಗೆ ಪ್ರಾಮುಖ್ಯತೆ ನೀಡುವ ಜೀವನ ಸಂಗಾತಿಯ ಅಪೇಕ್ಷೆ.'}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prefCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={idx}
                isIvory={isLightMode}
                maxTilt={6}
                className="p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs uppercase tracking-wider font-bold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {getLabel(item)}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                        isLightMode
                          ? 'bg-[#fef8e7] border-[#c59b27]/40 text-[#855b0a]'
                          : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7] group-hover:text-white'
                    }`}
                  >
                    {getVal(item)}
                  </div>
                </div>

                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                    isLightMode
                      ? 'border-slate-200 text-[#855b0a]'
                      : 'border-white/5 text-[#d4af37]'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {getTag(item)}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
