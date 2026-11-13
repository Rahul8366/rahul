import React from 'react';
import { Users, GraduationCap, Briefcase, Heart, Award, Sparkles, UserCheck } from 'lucide-react';
import TiltCard from './TiltCard';

export default function FamilyTree({ profile, language, isLightMode }) {
  const { family, personal, education, profession } = profile;

  // Language helper
  const isKn = language === 'kn';
  const isHi = language === 'hi';

  const t = {
    parentsTitle: isHi ? 'माता-पिता (प्रथम पीढ़ी)' : isKn ? 'ಪೂಜ್ಯ ತಂದೆ-ತಾಯಿ (ಹಿರಿಯರು)' : 'Parents (First Generation)',
    childrenTitle: isHi ? 'संतान (द्वितीय पीढ़ी)' : isKn ? 'ಕುಟುಂಬದ ಪುತ್ರರು (ಮಕ್ಕಳು)' : 'Children (Next Generation)',
    groomBadge: isHi ? 'वर (Groom)' : isKn ? 'ವರ (Groom)' : 'Groom',
    elderBrotherBadge: isHi ? 'बड़ा भाई (ಅಣ್ಣ)' : isKn ? 'ಹಿರಿಯ ಅಣ್ಣ (Elder Brother)' : 'Elder Brother',
    fatherRole: isHi ? 'पिता' : isKn ? 'ತಂದೆ' : 'Father',
    motherRole: isHi ? 'माता' : isKn ? 'ತಾಯಿ' : 'Mother',
    fatherDesc: isHi ? 'मार्गदर्शक एवं आधारस्तंभ' : isKn ? 'ಕುಟುಂಬದ ಆಧಾರಸ್ತಂಭ ಹಾಗೂ ಮಾರ್ಗದರ್ಶಿ' : 'Family Pillar & Mentor',
    motherDesc: isHi ? 'स्नेहमयी गृहलक्ष्मी' : isKn ? 'ಗೃಹಲಕ್ಷ್ಮಿ ಹಾಗೂ ಸಂಸ್ಕಾರದ ತಾಯಿ' : 'Heart of the Household',
    brotherDesc: isHi ? 'सहयोगी एवं स्नेही' : isKn ? 'ಪ್ರೀತಿಯ ಹಿರಿಯ ಸಹೋದರ' : 'Supportive Elder Brother',
    groomDesc: isHi ? 'सॉफ्टवेयर सपोर्ट पेशेवर' : isKn ? 'ತಾಂತ್ರಿಕ ಬೆಂಬಲ ಇಂಜಿನಿಯರ್' : 'Technical Support Engineer',
  };

  const fatherName = isHi ? family.fatherNameHi : isKn ? family.fatherNameKn : family.fatherNameEn;
  const fatherOcc = isHi ? family.fatherOccupationHi : isKn ? family.fatherOccupationKn : family.fatherOccupationEn;

  const motherName = isHi ? family.motherNameHi : isKn ? family.motherNameKn : family.motherNameEn;
  const motherOcc = isHi ? family.motherOccupationHi : isKn ? family.motherOccupationKn : family.motherOccupationEn;

  const brotherName = isHi ? family.brotherNameHi : isKn ? family.brotherNameKn : family.brotherNameEn;
  const brotherOcc = isHi ? family.brotherDetailsHi : isKn ? family.brotherDetailsKn : family.brotherDetailsEn;

  const groomName = isHi ? personal.fullNameHi || 'राहुल सुरेश बाळबट्टी' : isKn ? personal.fullNameKn : personal.fullNameEn;
  const groomEdu = isHi ? 'एमसीए (MCA)' : isKn ? 'ಎಂ.ಸಿ.ಎ. (MCA)' : 'MCA (Comp. App.)';
  const groomOcc = isHi ? profession.roleHi : isKn ? profession.roleKn : profession.roleEn;
  const groomLoc = isHi ? 'बेंगलुरु' : isKn ? 'ಬೆಂಗಳೂರು' : 'Bengaluru';

  return (
    <div className="relative py-2">
      {/* Decorative Golden Ambient Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Generation 1: Parents Badge */}
      <div className="text-center mb-3.5">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
            isLightMode
              ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-sm'
              : 'bg-[#0a192f]/90 border-amber-400/30 text-amber-300'
          }`}
        >
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>{t.parentsTitle}</span>
        </span>
      </div>

      {/* Parents Cards Row */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 relative z-10">
        
        {/* Father Card */}
        <TiltCard
          isIvory={isLightMode}
          maxTilt={5}
          className="p-5 sm:p-6 text-center border-amber-400/40 hover:border-amber-400 transition-all shadow-lg"
        >
          <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[2px] shadow-md shadow-amber-950/30">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isLightMode ? 'bg-white' : 'bg-[#071527]'
              }`}
            >
              <Users className="w-7 h-7 text-[#d4af37]" />
            </div>
          </div>

          <span className="text-[11px] uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400">
            {t.fatherRole}
          </span>
          <h4
            className={`text-lg sm:text-xl font-bold mt-1 ${
              isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
            }`}
          >
            {fatherName}
          </h4>

          <div
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border ${
              isLightMode
                ? 'bg-amber-100/70 border-amber-300 text-amber-900'
                : 'bg-amber-400/10 border-amber-400/30 text-amber-200'
            }`}
          >
            {fatherOcc}
          </div>

          <p
            className={`text-xs mt-3 pt-2.5 border-t font-medium ${
              isLightMode ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}
          >
            {t.fatherDesc}
          </p>
        </TiltCard>

        {/* Mother Card */}
        <TiltCard
          isIvory={isLightMode}
          maxTilt={5}
          className="p-5 sm:p-6 text-center border-amber-400/40 hover:border-amber-400 transition-all shadow-lg"
        >
          <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[2px] shadow-md shadow-amber-950/30">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isLightMode ? 'bg-white' : 'bg-[#071527]'
              }`}
            >
              <Users className="w-7 h-7 text-[#d4af37]" />
            </div>
          </div>

          <span className="text-[11px] uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400">
            {t.motherRole}
          </span>
          <h4
            className={`text-lg sm:text-xl font-bold mt-1 ${
              isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
            }`}
          >
            {motherName}
          </h4>

          <div
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border ${
              isLightMode
                ? 'bg-amber-100/70 border-amber-300 text-amber-900'
                : 'bg-amber-400/10 border-amber-400/30 text-amber-200'
            }`}
          >
            {motherOcc}
          </div>

          <p
            className={`text-xs mt-3 pt-2.5 border-t font-medium ${
              isLightMode ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}
          >
            {t.motherDesc}
          </p>
        </TiltCard>
      </div>

      {/* Royal Tree Connector Hierarchy Lines */}
      <div className="relative my-3 sm:my-4 flex flex-col items-center">
        {/* Heart unity knot between parents */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 p-[1.5px] shadow-md z-10 -mt-2 mb-1.5 flex items-center justify-center">
          <div
            className={`w-full h-full rounded-full flex items-center justify-center ${
              isLightMode ? 'bg-white' : 'bg-[#071527]'
            }`}
          >
            <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
        </div>

        {/* Vertical Trunk Line */}
        <div className="w-[2px] h-5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-300 shadow-sm" />

        {/* Horizontal Splitting Branch Line */}
        <div className="w-1/2 max-w-md h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent relative">
          {/* Branch drops */}
          <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
          <div className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
        </div>

        {/* Vertical drops to children */}
        <div className="w-1/2 max-w-md flex justify-between">
          <div className="w-[2px] h-4 bg-gradient-to-b from-amber-400 to-amber-300 ml-0.5" />
          <div className="w-[2px] h-4 bg-gradient-to-b from-amber-400 to-amber-300 mr-0.5" />
        </div>
      </div>

      {/* Generation 2: Sons Badge */}
      <div className="text-center mb-3.5">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
            isLightMode
              ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-sm'
              : 'bg-[#0a192f]/90 border-amber-400/30 text-amber-300'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{t.childrenTitle}</span>
        </span>
      </div>

      {/* Children Cards Row: Rachappa Balbatti (Anna) & Rahul Balbatti (Groom) */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 relative z-10">
        
        {/* Elder Brother Card: Rachappa Balbatti */}
        <TiltCard
          isIvory={isLightMode}
          maxTilt={5}
          className="p-5 sm:p-6 text-center border-amber-400/30 hover:border-amber-400 transition-all shadow-md relative"
        >
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 mb-3">
            <span>{t.elderBrotherBadge}</span>
          </div>

          <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-md shadow-amber-950/20">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isLightMode ? 'bg-white' : 'bg-[#071527]'
              }`}
            >
              <Users className="w-7 h-7 text-[#d4af37]" />
            </div>
          </div>

          <h4
            className={`text-lg sm:text-xl font-bold mt-1 ${
              isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
            }`}
          >
            {brotherName}
          </h4>

          <div
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border ${
              isLightMode
                ? 'bg-amber-100/60 border-amber-300 text-amber-900'
                : 'bg-amber-400/10 border-amber-400/30 text-amber-200'
            }`}
          >
            {brotherOcc}
          </div>

          <p
            className={`text-xs mt-3 pt-2.5 border-t font-medium ${
              isLightMode ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}
          >
            {t.brotherDesc}
          </p>
        </TiltCard>

        {/* Groom Card: Rahul Balbatti (Highlight with Royal Glow) */}
        <TiltCard
          isIvory={isLightMode}
          maxTilt={6}
          className="p-5 sm:p-6 text-center relative border-2 border-amber-400 shadow-xl shadow-amber-500/10 transition-all bg-gradient-to-b from-amber-500/5 to-transparent"
        >
          {/* Royal Groom Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm mb-3">
            <UserCheck className="w-3.5 h-3.5 text-slate-950" />
            <span>{t.groomBadge}</span>
          </div>

          <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-tr from-[#e5c05b] via-[#fff5d0] to-[#b38728] p-[2.5px] shadow-lg shadow-amber-500/30">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isLightMode ? 'bg-[#fffdfa]' : 'bg-[#0a1829]'
              }`}
            >
              <GraduationCap className="w-8 h-8 text-[#d4af37]" />
            </div>
          </div>

          <h4
            className={`text-lg sm:text-xl font-bold mt-1 ${
              isLightMode ? 'text-[#0b172a]' : 'text-white'
            }`}
          >
            {groomName}
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                isLightMode
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-amber-400/15 border-amber-400/40 text-amber-200'
              }`}
            >
              {groomEdu}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                isLightMode
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-800/80 border-slate-600 text-slate-200'
              }`}
            >
              {groomLoc}
            </span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-lg text-xs font-semibold ${
              isLightMode ? 'bg-amber-50 text-amber-900' : 'bg-slate-900/60 text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-amber-500" />
            <span>{groomOcc}</span>
          </div>

          <p
            className={`text-xs mt-3 pt-2.5 border-t font-medium ${
              isLightMode ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}
          >
            {t.groomDesc}
          </p>
        </TiltCard>
      </div>
    </div>
  );
}
