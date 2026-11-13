import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileDown,
  Edit3,
  Sun,
  Moon,
  Share2,
  Lock,
  Globe,
} from 'lucide-react';
import { UserButton, useUser } from '@clerk/react';

export default function Navbar({
  activeSection,
  language,
  setLanguage,
  isLightMode,
  setIsLightMode,
  onOpenEditProfile,
  onOpenPdfModal,
  onOpenAdmin,
  onShare,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let isSignedIn = false;
  try {
    const userHook = useUser();
    isSignedIn = !!userHook?.isSignedIn;
  } catch (e) {}

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelKn: 'ಮುಖಪುಟ', labelEn: 'Home', labelHi: 'मुख्य पृष्ठ' },
    { id: 'personal', labelKn: 'ನನ್ನ ಬಗ್ಗೆ', labelEn: 'Personal', labelHi: 'व्यक्तिगत' },
    { id: 'education', labelKn: 'ಶಿಕ್ಷಣ', labelEn: 'Education', labelHi: 'शिक्षा' },
    { id: 'profession', labelKn: 'ಉದ್ಯೋಗ', labelEn: 'Profession', labelHi: 'व्यवसाय' },
    { id: 'family', labelKn: 'ಕುಟುಂಬ', labelEn: 'Family', labelHi: 'परिवार' },
    { id: 'assets', labelKn: 'ಆಸ್ತಿ', labelEn: 'Assets', labelHi: 'संपत्ति' },
    { id: 'horoscope', labelKn: 'ಜಾತಕ', labelEn: 'Horoscope', labelHi: 'कुंडली' },
    { id: 'contact', labelKn: 'ಸಂಪರ್ಕ', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  const getLabel = (link) => {
    if (language === 'hi') return link.labelHi;
    if (language === 'en') return link.labelEn;
    return link.labelKn;
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isLightMode
            ? 'bg-[#fcfaf5]/95 backdrop-blur-md shadow-lg border-b border-[#c59b27]/40 py-2 sm:py-2.5'
            : 'bg-[#061222]/95 backdrop-blur-md shadow-2xl border-b border-[#d4af37]/30 py-2 sm:py-2.5'
          : 'bg-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-4">
        
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-1.5 sm:gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-lg shadow-amber-900/30 shrink-0">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                isLightMode ? 'bg-[#ffffff] text-[#855b0a]' : 'bg-[#071527] text-[#f6e8b1]'
              }`}
            >
              ॐ
            </div>
          </div>
          <div>
            <div
              className={`text-xs sm:text-base font-bold tracking-tight font-cinzel leading-tight ${
                isLightMode ? 'text-[#855b0a]' : 'gold-text-shimmer-dark'
              }`}
            >
              {language === 'hi'
                ? 'राहुल सु. बाळबट्टी'
                : language === 'en'
                ? 'Rahul S. Balabatti'
                : 'ರಾಹುಲ ಸು. ಬಳಬಟ್ಟಿ'}
            </div>
            <div
              className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-sans font-semibold leading-none mt-0.5 ${
                isLightMode ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Marriage Profile
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-inner backdrop-blur-sm ${
            isLightMode
              ? 'bg-[#ffffff]/80 border-[#c59b27]/40'
              : 'bg-[#051121]/70 border-[#d4af37]/25'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold shadow-md'
                    : isLightMode
                    ? 'text-slate-800 hover:text-[#855b0a] hover:bg-[#d4af37]/10 font-medium'
                    : 'text-slate-300 hover:text-[#f6e8b1] hover:bg-white/5'
                }`}
              >
                {getLabel(link)}
              </button>
            );
          })}
        </div>

        {/* Right Toolbar Controls (Optimized to never overflow on Mobile) */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Desktop/Tablet 3-Language Selector Buttons */}
          <div
            className={`hidden sm:flex items-center p-0.5 rounded-lg sm:rounded-xl border ${
              isLightMode
                ? 'bg-[#ffffff] border-[#c59b27]/40'
                : 'bg-[#08172c] border-[#d4af37]/35'
            }`}
          >
            <button
              onClick={() => setLanguage('kn')}
              title="ಕನ್ನಡ (Kannada)"
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold rounded-md sm:rounded-lg transition-colors cursor-pointer ${
                language === 'kn'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220] shadow-sm'
                  : isLightMode
                  ? 'text-slate-700 hover:text-[#855b0a]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => setLanguage('en')}
              title="English"
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold rounded-md sm:rounded-lg transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220] shadow-sm'
                  : isLightMode
                  ? 'text-slate-700 hover:text-[#855b0a]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ENG
            </button>
            <button
              onClick={() => setLanguage('hi')}
              title="हिन्दी (Hindi)"
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold rounded-md sm:rounded-lg transition-colors cursor-pointer ${
                language === 'hi'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220] shadow-sm'
                  : isLightMode
                  ? 'text-slate-700 hover:text-[#855b0a]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* Mobile Compact Single-Tap Language Pill (Saves 80px space) */}
          <button
            onClick={() => {
              const nextLang = language === 'kn' ? 'en' : language === 'en' ? 'hi' : 'kn';
              setLanguage(nextLang);
            }}
            title="Switch Language (ಕನ್ನಡ / ENG / हिन्दी)"
            className={`sm:hidden px-2 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
              isLightMode
                ? 'bg-white border-[#c59b27]/50 text-[#855b0a] shadow-sm'
                : 'bg-[#08172c] border-[#d4af37]/40 text-[#f6e8b1] shadow-sm'
            }`}
          >
            <span>{language === 'kn' ? 'ಕನ್ನಡ' : language === 'en' ? 'ENG' : 'हिन्दी'}</span>
            <span className="text-[9px] opacity-70">▾</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            title={isLightMode ? 'Dark Navy Luxury' : 'Light Royal Ivory'}
            className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl border transition-colors cursor-pointer shrink-0 ${
              isLightMode
                ? 'bg-[#ffffff] border-[#c59b27]/40 text-[#855b0a] hover:bg-[#f6efe0]'
                : 'bg-[#08172c] border-[#d4af37]/30 text-[#f6e8b1] hover:bg-[#d4af37]/10'
            }`}
          >
            {isLightMode ? <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f6e8b1]" />}
          </button>

          {/* Edit Profile Button (Desktop only, available in mobile drawer) */}
          <button
            onClick={onOpenEditProfile}
            title="ವಿವರಗಳನ್ನು ಸಂಪಾದಿಸಿ / Edit Details"
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              isLightMode
                ? 'bg-[#ffffff] hover:bg-[#f8f3e9] border-[#c59b27]/40 text-[#855b0a]'
                : 'bg-white/5 hover:bg-white/10 border-[#d4af37]/40 text-[#f6e8b1]'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi' ? 'संपादित करें' : language === 'en' ? 'Edit' : 'ಸಂಪಾದಿಸಿ'}
            </span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={onOpenPdfModal}
            className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-[11px] sm:text-xs shadow-md hover:brightness-105 transition-all cursor-pointer shrink-0"
          >
            <FileDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">PDF</span>
          </button>

          {/* Signed-in Google Avatar */}
          {isSignedIn && (
            <div className="flex items-center shrink-0">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}

          {/* Mobile Hamburger Menu Button - Fixed shrink-0 and guaranteed visible */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation Menu"
            className={`xl:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl border cursor-pointer shrink-0 z-20 ${
              isLightMode
                ? 'bg-white border-[#c59b27]/40 text-[#855b0a]'
                : 'bg-[#08172c] border-[#d4af37]/30 text-[#f6e8b1] hover:bg-white/5'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden fixed inset-x-0 top-[52px] sm:top-[60px] p-4 sm:p-5 shadow-2xl border-b transition-all max-h-[85vh] overflow-y-auto ${
            isLightMode
              ? 'bg-[#fcfaf5]/98 text-slate-800 border-[#c59b27]/40 backdrop-blur-xl'
              : 'bg-[#071527]/98 text-slate-100 border-[#d4af37]/30 backdrop-blur-xl'
          }`}
        >
          {/* Mobile Drawer Language Selector */}
          <div
            className={`flex items-center justify-between p-2 rounded-xl mb-4 border ${
              isLightMode
                ? 'bg-white border-[#c59b27]/30'
                : 'bg-[#040e1c] border-[#d4af37]/25'
            }`}
          >
            <span className="text-xs font-bold text-[#d4af37] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>ಭಾಷೆ / Language:</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('kn')}
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                  language === 'kn'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220]'
                    : 'text-slate-400'
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220]'
                    : 'text-slate-400'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                  language === 'hi'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220]'
                    : 'text-slate-400'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`py-2 px-3 text-left rounded-xl text-xs font-semibold flex items-center justify-between border ${
                  activeSection === link.id
                    ? 'bg-[#d4af37]/25 border-[#d4af37] text-[#061220] font-bold'
                    : isLightMode
                    ? 'border-slate-200 hover:bg-amber-50 text-slate-700'
                    : 'border-white/5 hover:bg-white/5 text-slate-300'
                }`}
              >
                <span>{getLabel(link)}</span>
                <span className="text-[10px] text-slate-400">{link.labelEn}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-2 pt-3 border-t border-black/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditProfile();
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/50 text-xs font-bold text-[#855b0a] flex items-center justify-center gap-1.5"
            >
              <Edit3 className="w-4 h-4 text-[#d4af37]" />
              <span>{language === 'hi' ? 'संपादित करें' : language === 'en' ? 'Edit' : 'ಸಂಪಾದಿಸಿ'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onShare();
              }}
              title="Share Link"
              className="px-4 py-2.5 rounded-xl border border-[#d4af37]/40 text-xs font-semibold text-[#855b0a] flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-4 h-4 text-[#d4af37]" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAdmin) onOpenAdmin();
              }}
              title="Admin Visitor Analytics"
              className="px-3.5 py-2.5 rounded-xl border border-[#d4af37]/40 text-xs font-semibold text-[#855b0a] flex items-center justify-center gap-1.5"
            >
              <Lock className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
