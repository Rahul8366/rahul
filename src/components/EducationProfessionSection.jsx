import React from 'react';
import { GraduationCap, Briefcase, Award, Building, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function EducationProfessionSection({ profile, language, isLightMode }) {
  const { education, profession } = profile;

  const getEduDegree = (edu) => {
    if (language === 'hi') return edu.degreeHi;
    if (language === 'en') return edu.degreeEn;
    return edu.degreeKn;
  };

  const getEduField = (edu) => {
    if (language === 'hi') return edu.fieldHi;
    if (language === 'en') return edu.fieldEn;
    return edu.fieldKn;
  };

  const getEduUni = (edu) => {
    if (language === 'hi') return edu.universityHi;
    if (language === 'en') return edu.universityEn;
    return edu.universityKn;
  };

  const getEduBadge = (edu) => {
    if (language === 'hi') return edu.badgeHi;
    if (language === 'en') return edu.badgeEn;
    return edu.badgeKn;
  };

  const getRole = () => {
    if (language === 'hi') return profession.roleHi;
    if (language === 'en') return profession.roleEn;
    return profession.roleKn;
  };

  const getIncome = () => {
    if (language === 'hi') return profession.annualIncomeHi;
    if (language === 'en') return profession.annualIncomeEn;
    return profession.annualIncomeKn;
  };

  const getCompany = () => {
    if (language === 'hi') return profession.companyHi;
    if (language === 'en') return profession.companyEn;
    return profession.companyKn;
  };

  const getLocation = () => {
    if (language === 'hi') return profession.workLocationHi;
    if (language === 'en') return profession.workLocationEn;
    return profession.workLocationKn;
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout for Education & Career */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* SECTION 1: EDUCATION */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${
                  isLightMode
                    ? 'bg-white border-[#c59b27]/50 text-[#855b0a]'
                    : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
                }`}
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  {language === 'hi'
                    ? 'शैक्षणिक योग्यता • Education'
                    : language === 'en'
                    ? 'Academic Credentials'
                    : 'ವಿದ್ಯಾಭ್ಯಾಸ • Academic Background'}
                </span>
                <h3
                  className={`text-2xl font-bold font-cinzel ${
                    isLightMode ? 'text-[#0e1d33]' : 'text-slate-100'
                  }`}
                >
                  {language === 'hi'
                    ? 'शिक्षा का विवरण'
                    : language === 'en'
                    ? 'Education Details'
                    : 'ಶಿಕ್ಷಣ ವಿವರಗಳು'}
                </h3>
              </div>
            </div>

            <div className="space-y-5 flex-1">
              {education.map((edu, idx) => (
                <TiltCard
                  key={idx}
                  isIvory={isLightMode}
                  maxTilt={5}
                  className="p-6 relative group overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                          isLightMode
                            ? 'bg-[#c59b27]/15 border-[#c59b27]/40 text-[#855b0a]'
                            : 'bg-[#d4af37]/20 border-[#d4af37]/40 text-[#f6e8b1]'
                        }`}
                      >
                        {getEduBadge(edu)}
                      </div>
                      <h4
                        className={`text-xl font-bold transition-colors ${
                          isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7] group-hover:text-white'
                        }`}
                      >
                        {getEduDegree(edu)}
                      </h4>
                      <p
                        className={`text-sm ${
                          isLightMode ? 'text-slate-700 font-medium' : 'text-slate-300'
                        }`}
                      >
                        {getEduField(edu)}
                      </p>
                      <p
                        className={`text-xs font-semibold flex items-center gap-1.5 pt-1 ${
                          isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                        }`}
                      >
                        <Building className="w-3.5 h-3.5" />
                        {getEduUni(edu)}
                      </p>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                        isLightMode
                          ? 'bg-[#fef8e7] border-[#c59b27]/40 text-[#855b0a]'
                          : 'bg-[#081525] border-white/10 text-slate-400 group-hover:text-[#d4af37]'
                      }`}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* SECTION 2: PROFESSION */}
          <div id="profession" className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${
                  isLightMode
                    ? 'bg-white border-[#c59b27]/50 text-[#855b0a]'
                    : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
                }`}
              >
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  {language === 'hi'
                    ? 'व्यावसायिक करियर • Career'
                    : language === 'en'
                    ? 'Professional Career'
                    : 'ವೃತ್ತಿಪರ ಜೀವನ • Professional Career'}
                </span>
                <h3
                  className={`text-2xl font-bold font-cinzel ${
                    isLightMode ? 'text-[#0e1d33]' : 'text-slate-100'
                  }`}
                >
                  {language === 'hi'
                    ? 'व्यवसाय एवं आय'
                    : language === 'en'
                    ? 'Career & Income'
                    : 'ಉದ್ಯೋಗ ಮತ್ತು ವೃತ್ತಿ'}
                </h3>
              </div>
            </div>

            <TiltCard
              isIvory={isLightMode}
              maxTilt={5}
              className="p-7 flex-1 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`flex items-center justify-between pb-4 border-b ${
                    isLightMode ? 'border-slate-200' : 'border-white/10'
                  }`}
                >
                  <div>
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {language === 'hi' ? 'पद / पदनाम' : language === 'en' ? 'Designation' : 'ಹುದ್ದೆ / ಹುದ್ದೆಯ ಹೆಸರು'}
                    </span>
                    <h4
                      className={`text-2xl font-bold mt-1 ${
                        isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
                      }`}
                    >
                      {getRole()}
                    </h4>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      isLightMode
                        ? 'bg-[#c59b27]/15 border-[#c59b27]/40 text-[#855b0a]'
                        : 'bg-[#112d4e] border-[#d4af37]/40 text-[#f6e8b1]'
                    }`}
                  >
                    IT Professional
                  </div>
                </div>

                {/* Career key facts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div
                    className={`p-4 rounded-xl border ${
                      isLightMode
                        ? 'bg-[#fcfaf5] border-slate-200 shadow-sm'
                        : 'bg-[#050f1d]/70 border-white/5'
                    }`}
                  >
                    <span
                      className={`text-[11px] uppercase tracking-wider flex items-center gap-1.5 font-bold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      <DollarSign className="w-3.5 h-3.5 text-[#d4af37]" />
                      {language === 'hi' ? 'वार्षिक आय (CTC)' : language === 'en' ? 'Annual CTC' : 'ವಾರ್ಷಿಕ ಆದಾಯ (CTC)'}
                    </span>
                    <div
                      className={`text-lg font-bold mt-1 font-mono ${
                        isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                      }`}
                    >
                      {getIncome()}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-xl border ${
                      isLightMode
                        ? 'bg-[#fcfaf5] border-slate-200 shadow-sm'
                        : 'bg-[#050f1d]/70 border-white/5'
                    }`}
                  >
                    <span
                      className={`text-[11px] uppercase tracking-wider flex items-center gap-1.5 font-bold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      <Building className="w-3.5 h-3.5 text-[#d4af37]" />
                      {language === 'hi' ? 'कंपनी एवं स्थान' : language === 'en' ? 'Company & Location' : 'ಸಂಸ್ಥೆ & ಸ್ಥಳ'}
                    </span>
                    <div
                      className={`text-sm font-bold mt-1 ${
                        isLightMode ? 'text-slate-800' : 'text-slate-200'
                      }`}
                    >
                      {getCompany()}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-xl border sm:col-span-2 ${
                      isLightMode
                        ? 'bg-[#fcfaf5] border-slate-200 shadow-sm'
                        : 'bg-[#050f1d]/70 border-white/5'
                    }`}
                  >
                    <span
                      className={`text-[11px] uppercase tracking-wider flex items-center gap-1.5 font-bold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      {language === 'hi' ? 'अनुभव एवं दृष्टिकोण' : language === 'en' ? 'Experience & Stability' : 'ಅನುಭವ'}
                    </span>
                    <p
                      className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                        isLightMode ? 'text-slate-700 font-medium' : 'text-slate-300'
                      }`}
                    >
                      {language === 'hi'
                        ? 'तकनीकी ऑपरेशंस और सपोर्ट में 3+ वर्षों का सफल अनुभव, सतत विकास और बेंगलुरु में स्थिर करियर।'
                        : language === 'en'
                        ? 'Stable professional career in technical operations and support with continuous growth in Bengaluru.'
                        : 'ತಾಂತ್ರಿಕ ಕ್ಷೇತ್ರದಲ್ಲಿ 3+ ವರ್ಷಗಳ ಸ್ಥಿರವಾದ ವೃತ್ತಿಜೀವನ, ನಿರಂತರ ಕಲಿಕೆ ಮತ್ತು ಭವಿಷ್ಯದ ಪ್ರಗತಿಗೆ ಉತ್ತಮ ಅವಕಾಶಗಳು.'}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                  isLightMode ? 'border-slate-200 text-slate-700' : 'border-white/10 text-slate-400'
                }`}
              >
                <span className="flex items-center gap-1 text-[#855b0a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  {language === 'hi' ? 'स्थिर आईटी रोजगार' : language === 'en' ? 'Stable IT Employment' : 'ಸ್ಥಿರ ಉದ್ಯೋಗ'}
                </span>
                <span className="text-[#855b0a] font-bold">{getLocation()}</span>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
