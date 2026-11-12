import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/profileData';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PersonalDetailsSection from './components/PersonalDetailsSection';
import EducationProfessionSection from './components/EducationProfessionSection';
import FamilySection from './components/FamilySection';
import AssetsSection from './components/AssetsSection';
import HoroscopeSection from './components/HoroscopeSection';
import AboutMeSection from './components/AboutMeSection';
import PartnerPreferencesSection from './components/PartnerPreferencesSection';
import ContactSection from './components/ContactSection';
import PhotoEditorModal from './components/PhotoEditorModal';
import ProfileEditModal from './components/ProfileEditModal';
import PdfBiodataModal from './components/PdfBiodataModal';
import { ArrowUp, Share2, FileDown } from 'lucide-react';

export default function App() {
  // Always initialize with Rahul's authentic official data on every page load/refresh
  const [profile, setProfile] = useState(() => {
    try {
      localStorage.removeItem('rahul_matrimonial_profile_v1');
    } catch (e) {}
    return JSON.parse(JSON.stringify(initialProfileData));
  });

  // 3 Languages: 'kn' (Kannada), 'en' (English), 'hi' (Hindi)
  const [language, setLanguage] = useState('kn');
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Modal States
  const [isPhotoEditorOpen, setIsPhotoEditorOpen] = useState(false);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Live session edit: Updates the current screen & PDF download dynamically
  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  // Live session photo adjust: Updates current screen & PDF download dynamically
  const handleSavePhoto = (photoSettings) => {
    setProfile((prev) => ({
      ...prev,
      photo: photoSettings,
    }));
  };

  // Section Observer for Navbar Active State
  useEffect(() => {
    const sectionIds = [
      'home',
      'personal',
      'education',
      'profession',
      'family',
      'assets',
      'horoscope',
      'aboutme',
      'preferences',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Share profile website
  const handleShare = async () => {
    const shareData = {
      title: `${profile.personal.fullNameKn} (${profile.personal.fullNameEn}) - Marriage Profile`,
      text: `ವಿವಾಹ ಪರಿಚಯ ಪತ್ರ - Marriage Profile of Rahul Suresh Balabatti (MCA, Tech Support Engineer).`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // Ignored or dismissed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ವೆಬ್‌ಸೈಟ್ ಲಿಂಕ್ ಅನ್ನು ನಕಲಿಸಲಾಗಿದೆ! • Website link copied to clipboard!');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-[#d4af37] selection:text-[#061220] transition-colors duration-500 ${
        isLightMode
          ? 'bg-[#f7f3ea] text-slate-900'
          : 'bg-[#050e1a] text-slate-100'
      }`}
    >
      {/* 3D Canvas Background with subtle golden stardust & geometry */}
      <ThreeBackground isLightMode={isLightMode} />

      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        language={language}
        setLanguage={setLanguage}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        onOpenEditProfile={() => setIsProfileEditOpen(true)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onShare={handleShare}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
          onOpenPhotoEditor={() => setIsPhotoEditorOpen(true)}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />

        <PersonalDetailsSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <EducationProfessionSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <FamilySection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <AssetsSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <HoroscopeSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <AboutMeSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <PartnerPreferencesSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />

        <ContactSection
          profile={profile}
          language={language}
          isLightMode={isLightMode}
        />
      </main>

      {/* Luxury Footer */}
      <footer
        className={`relative z-10 py-12 text-center transition-colors border-t ${
          isLightMode
            ? 'bg-[#f3ede0] border-[#c59b27]/40 text-slate-700'
            : 'bg-[#040b15]/95 border-[#d4af37]/30 text-slate-400'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-12 h-12 rounded-full mx-auto mb-4 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-lg shadow-amber-950/40">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center text-base font-bold ${
                isLightMode ? 'bg-[#ffffff] text-[#855b0a]' : 'bg-[#071527] text-[#f6e8b1]'
              }`}
            >
              ॐ
            </div>
          </div>

          <h3
            className={`text-xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0b172a]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? `${profile.personal.fullNameHi} • ${profile.personal.fullNameEn}`
              : `${profile.personal.fullNameKn} • ${profile.personal.fullNameEn}`}
          </h3>

          <p
            className={`text-xs tracking-widest uppercase mt-2 font-serif font-bold ${
              isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
            }`}
          >
            {language === 'hi'
              ? '॥ श्री गुरु बसवेश्वर प्रसन्न • सर्वे भवन्तु सुखिनः ॥'
              : '॥ ಶ್ರೀ ಗುರು ಬಸವೇಶ್ವರ ಪ್ರಸನ್ನ • ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು ॥'}
          </p>

          <div className="flex items-center justify-center gap-6 my-6 text-xs font-semibold">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                isLightMode ? 'text-[#855b0a] hover:text-[#0b172a]' : 'hover:text-[#f6e8b1]'
              }`}
            >
              <FileDown className="w-3.5 h-3.5 text-[#d4af37]" />
              PDF Biodata
            </button>
            <span>•</span>
            <button
              onClick={handleShare}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                isLightMode ? 'text-[#855b0a] hover:text-[#0b172a]' : 'hover:text-[#f6e8b1]'
              }`}
            >
              <Share2 className="w-3.5 h-3.5 text-[#d4af37]" />
              Share Link
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                isLightMode ? 'text-[#855b0a] hover:text-[#0b172a]' : 'hover:text-[#f6e8b1]'
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
              Back to Top
            </button>
          </div>

          <p className="text-[11px] text-slate-500 mt-4">
            Official Marriage Profile of Rahul Suresh Balabatti. Created with 3D Visual Experience.
          </p>
        </div>
      </footer>

      {/* Floating Action Button (Back to Top) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          title="ಮೇಲಕ್ಕೆ ಹೋಗಿ • Scroll to top"
          className={`w-11 h-11 rounded-full border shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer ${
            isLightMode
              ? 'bg-white border-[#c59b27] text-[#855b0a] hover:bg-amber-50'
              : 'bg-[#08182d]/90 hover:bg-[#0c2444] border-[#d4af37]/60 text-[#f6e8b1]'
          }`}
        >
          <ArrowUp className="w-5 h-5 text-[#d4af37]" />
        </button>
      </div>

      {/* Modals */}
      <PhotoEditorModal
        isOpen={isPhotoEditorOpen}
        onClose={() => setIsPhotoEditorOpen(false)}
        photoSettings={profile.photo}
        onSavePhoto={handleSavePhoto}
        isLightMode={isLightMode}
      />

      <ProfileEditModal
        isOpen={isProfileEditOpen}
        onClose={() => setIsProfileEditOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        isLightMode={isLightMode}
      />

      <PdfBiodataModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        profile={profile}
        isLightMode={isLightMode}
      />
    </div>
  );
}
