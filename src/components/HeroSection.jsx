import React from 'react';
import { Camera, FileDown, PhoneCall, ChevronDown, Briefcase, MapPin, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

export default function HeroSection({
  profile,
  language,
  isLightMode,
  onOpenPhotoEditor,
  onOpenPdfModal,
  onOpenContact,
}) {
  const { personal, photo, profession, assets } = profile;

  // Language helper
  const getFullName = () => {
    if (language === 'hi') return personal.fullNameHi;
    if (language === 'en') return personal.fullNameEn;
    return personal.fullNameKn;
  };

  const getSubName = () => {
    if (language === 'en') return personal.fullNameKn;
    return personal.fullNameEn;
  };

  const getTitle = () => {
    if (language === 'hi') return personal.titleHi;
    if (language === 'en') return personal.titleEn;
    return personal.titleKn;
  };

  const getSubTitle = () => {
    if (language === 'hi') return personal.subTitleHi;
    if (language === 'en') return personal.subTitleEn;
    return personal.subTitleKn;
  };

  const getRole = () => {
    if (language === 'hi') return profession.roleHi;
    if (language === 'en') return profession.roleEn;
    return profession.roleKn;
  };

  const getLocation = () => {
    if (language === 'hi') return personal.currentLocationHi;
    if (language === 'en') return personal.currentLocationEn;
    return personal.currentLocationKn;
  };

  const getBioSnippet = () => {
    if (language === 'hi') {
      return 'वीरशैव लिंगायत संप्रदाय से संबंधित, सुशिक्षित, सरल एवं पारिवारिक संस्कारों को समर्पित आईटी इंजीनियर। पारिवारिक सद्भाव और आपसी सम्मान में विश्वास रखने वाली जीवनसंगिनी की तलाश में।';
    }
    if (language === 'en') {
      return 'A well-educated, cultured, and family-oriented Veerashaiva Lingayat IT professional with traditional roots and modern outlook, seeking a life partner who values mutual respect, family harmony, and happiness.';
    }
    return 'ವೀರಶೈವ ಲಿಂಗಾಯತ ಸಂಪ್ರದಾಯದ, ಸುಶಿಕ್ಷಿತ, ಸರಳ ಹಾಗೂ ಕೌಟುಂಬಿಕ ಮೌಲ್ಯಗಳಿಗೆ ಬದ್ಧನಾಗಿರುವ ತಂತ್ರಜ್ಞಾನ ವೃತ್ತಿಪರ. ಶಾಂತಿಯುತ ಕೌಟುಂಬಿಕ ಬಾಂಧವ್ಯವನ್ನು ಬಯಸುವ ಜೀವನ ಸಂಗಾತಿಯ ಹುಡುಕಾಟದಲ್ಲಿದ್ದೇನೆ.';
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial gold glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none ${
          isLightMode
            ? 'bg-gradient-to-br from-[#d4af37]/20 via-[#c59b27]/10 to-transparent'
            : 'bg-gradient-to-br from-[#d4af37]/15 via-[#b38728]/5 to-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: 3D HERO PROFILE PHOTO (Centerpiece) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group perspective-1000">
              {/* 3D Decorative Floating Badges */}
              <div
                className={`absolute -top-4 -left-4 z-20 px-3.5 py-1.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300 border ${
                  isLightMode
                    ? 'bg-white/95 border-[#c59b27]/50 text-[#855b0a]'
                    : 'bg-[#08182b]/95 border-[#d4af37]/50 text-[#f6e8b1]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-xs font-bold">
                  {language === 'hi' ? 'एमसीए स्नातक' : language === 'en' ? 'MCA Graduate' : 'ಎಂ.ಸಿ.ಎ. ಪದವೀಧರ'}
                </span>
              </div>

              <div
                className={`absolute -bottom-4 -right-4 z-20 px-3.5 py-1.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform duration-300 border ${
                  isLightMode
                    ? 'bg-white/95 border-[#c59b27]/50 text-[#855b0a]'
                    : 'bg-[#08182b]/95 border-[#d4af37]/50 text-[#f6e8b1]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-xs font-bold">
                  {language === 'hi' ? 'टेक इंजीनियर' : language === 'en' ? 'Tech Engineer' : 'ಟೆಕ್ ಇಂಜಿನಿಯರ್'}
                </span>
              </div>

              {/* Main 3D Gold Metallic Photo Frame */}
              <div
                className={`${
                  isLightMode ? 'gold-frame-3d-light' : 'gold-frame-3d'
                } w-72 sm:w-84 md:w-92 h-[420px] sm:h-[480px] md:h-[510px] transform hover:scale-[1.015] transition-all duration-500`}
              >
                <div className="w-full h-full rounded-[1.25rem] overflow-hidden bg-[#071322] relative">
                  <img
                    src={photo.url}
                    alt={personal.fullNameEn}
                    style={{
                      transform: `scale(${photo.zoom}) rotate(${photo.rotation}deg)`,
                      objectPosition: `${photo.positionX}% ${photo.positionY}%`,
                    }}
                    className="w-full h-full object-cover select-none transition-transform duration-300"
                  />

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061220]/80 via-[#061220]/30 to-transparent pointer-events-none" />

                  {/* Corner Ornate Accents */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#f6e8b1]/80 rounded-tl-sm pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#f6e8b1]/80 rounded-tr-sm pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#f6e8b1]/80 rounded-bl-sm pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#f6e8b1]/80 rounded-br-sm pointer-events-none" />

                  {/* Floating Click-to-Adjust Photo Button */}
                  <button
                    onClick={onOpenPhotoEditor}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-[#061220]/85 hover:bg-[#061220] border border-[#d4af37]/70 rounded-full text-xs text-[#f6e8b1] font-semibold flex items-center gap-2 shadow-xl backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>
                      {language === 'hi' ? 'फ़ोटो समायोजित करें' : language === 'en' ? 'Adjust Photo' : 'ಫೋಟೋ ಹೊಂದಿಸಿ'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Subtitle pill below photo */}
              <div className="mt-4 text-center">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border font-medium ${
                    isLightMode
                      ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                      : 'bg-[#061426]/70 border-[#d4af37]/30 text-[#f6e8b1]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>
                    {language === 'hi'
                      ? `${assets.communityHi} • 13.10 एकड़`
                      : language === 'en'
                      ? `${assets.communityEn} • 13.10 Acres`
                      : `${assets.communityKn} • 13.10 ಎಕರೆ`}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: TYPOGRAPHY, BIODATA HEADER & STATS */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Auspicious Invocation Header */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <span className="h-[1.5px] w-8 bg-[#d4af37]" />
              <span
                className={`text-xs sm:text-sm font-bold tracking-widest uppercase font-serif ${
                  isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                }`}
              >
                {getSubTitle()}
              </span>
              <span className="h-[1.5px] w-8 bg-[#d4af37]" />
            </div>

            {/* Official Matrimonial Biodata Header Pill */}
            <div className="mb-3">
              <span
                className={`inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase border ${
                  isLightMode
                    ? 'bg-[#c59b27]/15 border-[#c59b27]/50 text-[#704902]'
                    : 'bg-[#d4af37]/20 border-[#d4af37]/50 text-[#fbf5b7]'
                }`}
              >
                {getTitle()}
              </span>
            </div>

            {/* Candidate Grand Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-cinzel leading-tight mb-2">
              <span
                className={`block mb-1 ${
                  isLightMode ? 'gold-text-shimmer-light' : 'gold-text-shimmer-dark'
                }`}
              >
                {getFullName()}
              </span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl font-serif font-normal tracking-wide block ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                {getSubName()}
              </span>
            </h1>

            {/* Role & Location Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-3 mb-6">
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold ${
                  isLightMode
                    ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                    : 'bg-[#0d223f]/80 border-[#d4af37]/30 text-[#f6e8b1]'
                }`}
              >
                <Briefcase className="w-4 h-4 text-[#d4af37]" />
                <span>{getRole()}</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-medium ${
                  isLightMode
                    ? 'bg-white border-slate-300 text-slate-700 shadow-sm'
                    : 'bg-[#0d223f]/80 border-[#d4af37]/30 text-slate-300'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>{getLocation()}</span>
              </div>
            </div>

            {/* 3D Key Highlight Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-3 text-center">
                <div
                  className={`text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'आयु' : language === 'en' ? 'Age' : 'ವಯಸ್ಸು'}
                </div>
                <div
                  className={`text-base sm:text-lg font-bold font-mono mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  {language === 'hi' ? personal.ageHi : language === 'en' ? personal.ageEn : personal.ageKn}
                </div>
                <div
                  className={`text-[10px] font-sans ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {personal.dob}
                </div>
              </TiltCard>

              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-3 text-center">
                <div
                  className={`text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'ऊँचाई' : language === 'en' ? 'Height' : 'ಎತ್ತರ'}
                </div>
                <div
                  className={`text-base sm:text-lg font-bold font-mono mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  5 ft 6 in
                </div>
                <div
                  className={`text-[10px] font-sans ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  168 cm
                </div>
              </TiltCard>

              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-3 text-center">
                <div
                  className={`text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'डिग्री' : language === 'en' ? 'Degree' : 'ಶಿಕ್ಷಣ'}
                </div>
                <div
                  className={`text-base sm:text-lg font-bold mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  MCA
                </div>
                <div
                  className={`text-[10px] truncate ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  KUD Dharwad
                </div>
              </TiltCard>

              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-3 text-center">
                <div
                  className={`text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'कृषि भूमि' : language === 'en' ? 'Farmland' : 'ಕೃಷಿ ಭೂಮಿ'}
                </div>
                <div
                  className={`text-base sm:text-lg font-bold font-mono mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  13.10
                </div>
                <div
                  className={`text-[10px] ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'एकड़' : language === 'en' ? 'Acres' : 'ಎಕರೆ'}
                </div>
              </TiltCard>
            </div>

            {/* Quick Introduction Snippet */}
            <p
              className={`text-sm sm:text-base leading-relaxed font-sans mb-8 max-w-2xl ${
                isLightMode ? 'text-slate-700 font-medium' : 'text-slate-300'
              }`}
            >
              {getBioSnippet()}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#personal"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {language === 'hi'
                    ? 'संपूर्ण विवरण देखें'
                    : language === 'en'
                    ? 'View Complete Profile'
                    : 'ಸಂಪೂರ್ಣ ಪರಿಚಯ ನೋಡಿ'}
                </span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPdfModal}
                className={`px-6 py-3 rounded-xl border font-bold text-sm shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isLightMode
                    ? 'bg-white hover:bg-amber-50 border-[#c59b27] text-[#855b0a]'
                    : 'bg-white/5 hover:bg-white/10 border-[#d4af37]/60 text-[#f6e8b1]'
                }`}
              >
                <FileDown className="w-4 h-4 text-[#d4af37]" />
                <span>
                  {language === 'hi' ? 'बायोडाटा PDF' : language === 'en' ? 'Download PDF' : 'PDF ಬಯೋಡೇಟಾ'}
                </span>
              </button>

              <button
                onClick={onOpenContact}
                className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isLightMode
                    ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-[#0b203a]/80 hover:bg-[#0f2a4d] border-white/10 text-slate-200'
                }`}
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>
                  {language === 'hi' ? 'संपर्क करें' : language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕಿಸಿ'}
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
