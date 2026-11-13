import React from 'react';
import { Camera, FileDown, MessageSquare, ChevronDown, Briefcase, MapPin, Lock } from 'lucide-react';
import TiltCard from './TiltCard';

export default function HeroSection({
  profile,
  language,
  isLightMode,
  isGuestMode,
  onOpenPhotoEditor,
  onOpenPdfModal,
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

  const getWhatsappMsg = () => {
    if (language === 'hi') {
      return encodeURIComponent(
        `नमस्ते राहुल,\n\nमैंने आपकी मैरिज प्रोफाइल (${personal.fullNameHi}) देखी और मुझे आपकी प्रोफाइल पसंद आई। मैं विवाह संबंध के बारे में आपसे और आपके परिवार से बात करना चाहता/चाहती हूँ।\n\nधन्यवाद!`
      );
    }
    if (language === 'en') {
      return encodeURIComponent(
        `Hello Rahul,\n\nI came across your marriage profile (${personal.fullNameEn}) and I am interested in your profile. I would like to talk with you and your family regarding a marriage alliance.\n\nThank you!`
      );
    }
    return encodeURIComponent(
      `ನಮಸ್ಕಾರ ರಾಹುಲ್,\n\nನಿಮ್ಮ ಮದುವೆ ಪರಿಚಯ ಪ್ರೊಫೈಲ್ (${personal.fullNameKn}) ನೋಡಿದೆವು, ನಮಗೆ ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಇಷ್ಟವಾಗಿದೆ. ಮದುವೆ ಸಂಬಂಧದ ಕುರಿತು ನಿಮ್ಮೊಂದಿಗೆ ಹಾಗೂ ನಿಮ್ಮ ಕುಟುಂಬದೊಂದಿಗೆ ಮಾತನಾಡಲು ಬಯಸುತ್ತೇವೆ.\n\nಧನ್ಯವಾದಗಳು!`
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-16 sm:pt-24 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial gold glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full blur-3xl pointer-events-none ${
          isLightMode
            ? 'bg-gradient-to-br from-[#d4af37]/20 via-[#c59b27]/10 to-transparent'
            : 'bg-gradient-to-br from-[#d4af37]/15 via-[#b38728]/5 to-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          
          {/* LEFT: 3D HERO PROFILE PHOTO (Centerpiece) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group perspective-1000 w-full max-w-[300px] sm:max-w-[360px]">
              
              {/* Main 3D Gold Metallic Photo Frame */}
              <div
                className={`${
                  isLightMode ? 'gold-frame-3d-light' : 'gold-frame-3d'
                } w-full h-[340px] sm:h-[440px] md:h-[480px] transform hover:scale-[1.01] transition-all duration-500`}
              >
                <div className="w-full h-full rounded-[1.15rem] sm:rounded-[1.25rem] overflow-hidden bg-[#071322] relative">
                  
                  {/* Non-Colliding Badges anchored inside top corners of photo */}
                  <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md flex items-center gap-1.5 border bg-[#061426]/85 border-[#d4af37]/60 text-[#f6e8b1]">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d4af37] animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold">
                      {language === 'hi' ? 'एमसीए' : language === 'en' ? 'MCA Graduate' : 'ಎಂ.ಸಿ.ಎ.'}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md flex items-center gap-1.5 border bg-[#061426]/85 border-[#d4af37]/60 text-[#f6e8b1]">
                    <Briefcase className="w-3 h-3 text-[#d4af37]" />
                    <span className="text-[10px] sm:text-[11px] font-bold">
                      {language === 'hi' ? 'आईटी इंजीनियर' : language === 'en' ? 'IT Engineer' : 'ಟೆಕ್ ಇಂಜಿನಿಯರ್'}
                    </span>
                  </div>

                  {/* Photo with natural face-centered framing */}
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
                  <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#061220]/80 via-[#061220]/25 to-transparent pointer-events-none" />

                  {/* Corner Ornate Accents */}
                  <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#f6e8b1]/80 rounded-bl-sm pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#f6e8b1]/80 rounded-br-sm pointer-events-none" />

                  {/* Click-to-Adjust Photo Button */}
                  <button
                    onClick={onOpenPhotoEditor}
                    title={isGuestMode ? "ಫೋಟೋ ಹೊಂದಿಸಲು Google ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ • Sign in to Adjust Photo" : "ಫೋಟೋ ಹೊಂದಿಸಿ • Adjust Photo"}
                    className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 px-3 py-1 bg-[#061220]/90 hover:bg-[#061220] border border-[#d4af37]/70 rounded-full text-[10px] sm:text-[11px] text-[#f6e8b1] font-semibold flex items-center gap-1.5 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer"
                  >
                    {isGuestMode ? (
                      <Lock className="w-3 h-3 text-[#d4af37]" />
                    ) : (
                      <Camera className="w-3 h-3 text-[#d4af37]" />
                    )}
                    <span>
                      {language === 'hi' ? 'फ़ोटो बदलें' : language === 'en' ? 'Adjust Photo' : 'ಫೋಟೋ ಹೊಂದಿಸಿ'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Subtitle pill below photo with clean spacing (NO overlap) */}
              <div className="mt-3 sm:mt-4 text-center px-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs border font-medium ${
                    isLightMode
                      ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                      : 'bg-[#061426]/85 border-[#d4af37]/35 text-[#f6e8b1]'
                  }`}
                >
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
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-1.5">
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#d4af37]" />
              <span
                className={`text-[11px] sm:text-sm font-bold tracking-widest uppercase font-serif ${
                  isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                }`}
              >
                {getSubTitle()}
              </span>
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#d4af37]" />
            </div>

            {/* Official Marriage Profile Header Pill */}
            <div className="mb-2 sm:mb-3">
              <span
                className={`inline-block px-3.5 py-0.5 sm:px-4 sm:py-1 rounded-full text-[11px] sm:text-sm font-bold tracking-widest uppercase border ${
                  isLightMode
                    ? 'bg-[#c59b27]/15 border-[#c59b27]/50 text-[#704902]'
                    : 'bg-[#d4af37]/20 border-[#d4af37]/50 text-[#fbf5b7]'
                }`}
              >
                {getTitle()}
              </span>
            </div>

            {/* Candidate Grand Name */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-cinzel leading-tight mb-1 sm:mb-2">
              <span
                className={`block mb-0.5 sm:mb-1 ${
                  isLightMode ? 'gold-text-shimmer-light' : 'gold-text-shimmer-dark'
                }`}
              >
                {getFullName()}
              </span>
              <span
                className={`text-base sm:text-2xl md:text-3xl font-serif font-normal tracking-wide block ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                {getSubName()}
              </span>
            </h1>

            {/* Role & Location Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2 sm:mt-3 mb-4 sm:mb-6">
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border text-xs sm:text-sm font-semibold ${
                  isLightMode
                    ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                    : 'bg-[#0d223f]/80 border-[#d4af37]/30 text-[#f6e8b1]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{getRole()}</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border text-xs sm:text-sm font-medium ${
                  isLightMode
                    ? 'bg-white border-slate-300 text-slate-700 shadow-sm'
                    : 'bg-[#0d223f]/80 border-[#d4af37]/30 text-slate-300'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{getLocation()}</span>
              </div>
            </div>

            {/* 3D Key Highlight Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 my-3 sm:my-6">
              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-2 sm:p-3 text-center">
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'आयु' : language === 'en' ? 'Age' : 'ವಯಸ್ಸು'}
                </div>
                <div
                  className={`text-sm sm:text-lg font-bold font-mono mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  {language === 'hi' ? personal.ageHi : language === 'en' ? personal.ageEn : personal.ageKn}
                </div>
                <div
                  className={`text-[9px] sm:text-[10px] font-sans ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {personal.dob}
                </div>
              </TiltCard>

              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-2 sm:p-3 text-center">
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'ऊँचाई' : language === 'en' ? 'Height' : 'ಎತ್ತರ'}
                </div>
                <div
                  className={`text-sm sm:text-lg font-bold font-mono mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  5 ft 6 in
                </div>
                <div
                  className={`text-[9px] sm:text-[10px] font-sans ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  168 cm
                </div>
              </TiltCard>

              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-2 sm:p-3 text-center">
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'डिग्री' : language === 'en' ? 'Degree' : 'ಶಿಕ್ಷಣ'}
                </div>
                <div
                  className={`text-sm sm:text-lg font-bold mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  MCA
                </div>
                <div
                  className={`text-[9px] sm:text-[10px] truncate ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  KUD Dharwad
                </div>
              </TiltCard>

              <TiltCard isIvory={isLightMode} maxTilt={6} className="p-2 sm:p-3 text-center">
                <div
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${
                    isLightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'कृषि भूमि' : language === 'en' ? 'Farmland' : 'ಕೃಷಿ ಭೂಮಿ'}
                </div>
                <div
                  className={`text-sm sm:text-lg font-bold font-mono mt-0.5 ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  13.10
                </div>
                <div
                  className={`text-[9px] sm:text-[10px] ${
                    isLightMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {language === 'hi' ? 'एकड़' : language === 'en' ? 'Acres' : 'ಎಕರೆ'}
                </div>
              </TiltCard>
            </div>

            {/* Quick Introduction Snippet */}
            <p
              className={`text-xs sm:text-base leading-relaxed font-sans mb-5 sm:mb-8 max-w-2xl ${
                isLightMode ? 'text-slate-700 font-medium' : 'text-slate-300'
              }`}
            >
              {getBioSnippet()}
            </p>

            {/* Action CTA Buttons (Full-width on mobile, flex row on desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
              {/* Direct WhatsApp Redirection CTA */}
              <a
                href={`https://wa.me/919108080161?text=${getWhatsappMsg()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>
                  {language === 'hi'
                    ? 'व्हाट्सएप पर बात करें (9108080161)'
                    : language === 'en'
                    ? 'Chat on WhatsApp (9108080161)'
                    : 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ (9108080161)'}
                </span>
              </a>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                <a
                  href="#personal"
                  className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-xs sm:text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>
                    {language === 'hi'
                      ? 'संपूर्ण विवरण'
                      : language === 'en'
                      ? 'View Profile'
                      : 'ಸಂಪೂರ್ಣ ಪರಿಚಯ'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenPdfModal}
                  className={`py-2.5 px-3.5 rounded-xl border font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isLightMode
                      ? 'bg-white hover:bg-amber-50 border-[#c59b27] text-[#855b0a]'
                      : 'bg-white/5 hover:bg-white/10 border-[#d4af37]/60 text-[#f6e8b1]'
                  }`}
                >
                  <FileDown className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>
                    {language === 'hi' ? 'PDF बायोडाटा' : language === 'en' ? 'Download PDF' : 'PDF ಬಯೋಡೇಟಾ'}
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
