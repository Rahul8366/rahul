import React, { useState } from 'react';
import {
  Camera,
  FileDown,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MapPin,
  Lock,
  Plus,
  Sparkles,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function HeroSection({
  profile,
  language,
  isLightMode,
  isGuestMode,
  onOpenPhotoEditor,
  onOpenPdfModal,
  onSelectPhotoIndex,
}) {
  const { personal, photo, profession, assets, photos = [photo], activePhotoIndex = 0 } = profile;
  const photosList = photos && photos.length > 0 ? photos : [photo];
  const activeIndex = activePhotoIndex ?? 0;

  // 3D Touch Specular Parallax State
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  const [isPressing, setIsPressing] = useState(false);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: x * 15,
      y: -y * 15,
      glareX: ((e.clientX - rect.left) / rect.width) * 100,
      glareY: ((e.clientY - rect.top) / rect.height) * 100,
      isHovered: true,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
    setIsPressing(false);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    const prevIdx = (activeIndex - 1 + photosList.length) % photosList.length;
    if (onSelectPhotoIndex) onSelectPhotoIndex(prevIdx);
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    const nextIdx = (activeIndex + 1) % photosList.length;
    if (onSelectPhotoIndex) onSelectPhotoIndex(nextIdx);
  };

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
          
          {/* LEFT: 3D HERO PROFILE PHOTO (Centerpiece with 3D Touch & Round Photo Selector) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group perspective-1000 w-full max-w-[310px] sm:max-w-[370px]">
              
              {/* Main 3D Gold Metallic Photo Frame with 3D Touch Stitch Glare Effect */}
              <div
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                onPointerDown={() => setIsPressing(true)}
                onPointerUp={() => setIsPressing(false)}
                style={{
                  transform: tilt.isHovered
                    ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isPressing ? 0.98 : 1.02})`
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
                  transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  transformStyle: 'preserve-3d',
                }}
                className={`${
                  isLightMode ? 'gold-frame-3d-light' : 'gold-frame-3d'
                } w-full h-[350px] sm:h-[450px] md:h-[490px] relative select-none cursor-grab active:cursor-grabbing shadow-2xl`}
              >
                <div className="w-full h-full rounded-[1.15rem] sm:rounded-[1.25rem] overflow-hidden bg-[#071322] relative">
                  
                  {/* Dynamic Specular Light Glare (Google Stitch Material 3D Touch Effect) */}
                  {tilt.isHovered && (
                    <div
                      className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-[1.25rem]"
                      style={{
                        background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(212, 175, 55, 0.2) 28%, transparent 60%)`,
                        mixBlendMode: 'overlay',
                      }}
                    />
                  )}

                  {/* Badges anchored inside top corners of photo */}
                  <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md flex items-center gap-1.5 border bg-[#061426]/85 border-[#d4af37]/60 text-[#f6e8b1]">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d4af37] animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold">
                      {language === 'hi' ? 'एमसीए' : language === 'en' ? 'MCA Graduate' : 'ಎಂ.ಸಿ.ಎ.'}
                    </span>
                  </div>

                  {/* Photo Counter Pill in Top-Center */}
                  {photosList.length > 1 && (
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-md border border-[#d4af37]/50 bg-[#061426]/80 text-[#f6e8b1] text-[10px] font-bold font-mono">
                      <span>{activeIndex + 1} / {photosList.length}</span>
                    </div>
                  )}

                  <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md flex items-center gap-1.5 border bg-[#061426]/85 border-[#d4af37]/60 text-[#f6e8b1]">
                    <Briefcase className="w-3 h-3 text-[#d4af37]" />
                    <span className="text-[10px] sm:text-[11px] font-bold">
                      {language === 'hi' ? 'आईटी इंजीनियर' : language === 'en' ? 'IT Engineer' : 'ಟೆಕ್ ಇಂಜಿನಿಯರ್'}
                    </span>
                  </div>

                  {/* Prev / Next Photo Arrow Buttons (Smooth cycling on frame) */}
                  {photosList.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevPhoto}
                        aria-label="Previous Photo"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#061426]/75 hover:bg-[#061426] border border-[#d4af37]/60 text-[#f6e8b1] flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#d4af37]" />
                      </button>
                      <button
                        onClick={handleNextPhoto}
                        aria-label="Next Photo"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#061426]/75 hover:bg-[#061426] border border-[#d4af37]/60 text-[#f6e8b1] flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                      </button>
                    </>
                  )}

                  {/* Main Displayed Photo */}
                  <img
                    key={photo.url || activeIndex}
                    src={photo.url}
                    alt={personal.fullNameEn}
                    style={{
                      transform: `scale(${photo.zoom || 1.05}) rotate(${photo.rotation || 0}deg)`,
                      objectPosition: `${photo.positionX ?? 50}% ${photo.positionY ?? 20}%`,
                    }}
                    className="w-full h-full object-cover select-none transition-all duration-500 ease-out"
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

              {/* INTERACTIVE ROUND PHOTO SELECTOR (ಕೆಳಗೆ ರೌಂಡ್ ಆಪ್ಷನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಬದಲಾಯಿಸಿ) */}
              <div className="mt-4 flex flex-col items-center gap-2">
                <div
                  className={`flex items-center justify-center gap-2.5 sm:gap-3 py-1.5 px-3 rounded-full border shadow-xl backdrop-blur-md transition-all ${
                    isLightMode
                      ? 'bg-white/90 border-[#c59b27]/40 shadow-amber-950/10'
                      : 'bg-[#061426]/90 border-[#d4af37]/35 shadow-black/60'
                  }`}
                >
                  {photosList.map((p, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={p.id || idx}
                        onClick={() => onSelectPhotoIndex && onSelectPhotoIndex(idx)}
                        className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'ring-3 ring-[#d4af37] ring-offset-2 scale-110 shadow-lg shadow-amber-500/40 border-2 border-white'
                            : 'opacity-60 hover:opacity-100 hover:scale-105 border border-[#d4af37]/40'
                        }`}
                        title={language === 'kn' ? (p.titleKn || `ಭಾವಚಿತ್ರ ${idx + 1}`) : (p.titleEn || `Photo ${idx + 1}`)}
                      >
                        <img src={p.url} alt="" className="w-full h-full object-cover select-none" />
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-[#d4af37]/25 pointer-events-none animate-pulse" />
                        )}
                      </button>
                    );
                  })}

                  {/* Add / Upload New Photo Round Button */}
                  <button
                    onClick={onOpenPhotoEditor}
                    title={isGuestMode ? "Sign in with Google to add photo" : "ಹೊಸ ಫೋಟೋ ಸೇರಿಸಿ / Add Photo"}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-dashed flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-md ${
                      isLightMode
                        ? 'border-[#c59b27] bg-[#f8f3e9] text-[#855b0a] hover:bg-[#faebd0]'
                        : 'border-[#d4af37]/70 bg-gradient-to-tr from-[#d4af37]/20 to-[#aa771c]/10 text-[#f6e8b1] hover:from-[#d4af37]/35 hover:to-[#aa771c]/25'
                    }`}
                  >
                    <Plus className="w-4 h-4 text-[#d4af37]" />
                  </button>
                </div>

                <div className="text-[10px] text-slate-400 font-medium">
                  {language === 'hi'
                    ? 'फ़ोटो बदलने के लिए गोल आइकन पर क्लिक करें'
                    : language === 'en'
                    ? 'Tap circle to switch photo • 3D Touch Enabled'
                    : 'ಫೋಟೋ ಬದಲಾಯಿಸಲು ರೌಂಡ್ ಐಕಾನ್ ಒತ್ತಿ • 3D ಟಚ್ ಸಕ್ರಿಯ'}
                </div>
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
