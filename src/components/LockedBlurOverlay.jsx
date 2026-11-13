import React from 'react';
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react';

export default function LockedBlurOverlay({
  isLocked,
  onUnlock,
  language = 'kn',
  isLightMode,
  title,
  children,
}) {
  if (!isLocked) {
    return <>{children}</>;
  }

  const getTitle = () => {
    if (title) return title;
    if (language === 'hi') return 'गोपनीय विवरण • सत्यापन आवश्यक';
    if (language === 'en') return 'Confidential Details • Verification Required';
    return 'ಗೌಪ್ಯ ವಿವರಗಳು • ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ';
  };

  const getDesc = () => {
    if (language === 'hi') {
      return 'संपूर्ण परिवार, कुंडली एवं संपर्क विवरण देखने के लिए कृपया अपना मोबाइल नंबर दर्ज करें या Google से जारी रखें।';
    }
    if (language === 'en') {
      return 'Please enter your 10-digit mobile number or Continue with Google to view full verified details.';
    }
    return 'ಸಂಪೂರ್ಣ ಕುಟುಂಬ, ಜಾತಕ ಮತ್ತು ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ ಅಥವಾ Google ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ.';
  };

  const getBtnText = () => {
    if (language === 'hi') return 'विवरण अनलॉक करें • Unlock Details';
    if (language === 'en') return 'Unlock Full Details';
    return 'ವಿವರಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ • Unlock Details';
  };

  return (
    <div className="relative overflow-hidden rounded-3xl group">
      {/* Blurred Underlying Content */}
      <div className="filter blur-md select-none pointer-events-none opacity-30 transition-all duration-300">
        {children}
      </div>

      {/* Luxury Lock Overlay */}
      <div
        onClick={onUnlock}
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all ${
          isLightMode
            ? 'bg-amber-950/20 backdrop-blur-sm hover:bg-amber-950/25'
            : 'bg-[#040e1c]/70 backdrop-blur-sm hover:bg-[#040e1c]/80'
        }`}
      >
        <div
          className={`max-w-md w-full p-6 sm:p-8 rounded-3xl border shadow-2xl transition-all transform group-hover:scale-[1.02] ${
            isLightMode
              ? 'bg-[#fcfaf5] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/15'
              : 'bg-[#071527] border border-[#d4af37]/60 text-slate-100 shadow-black/80'
          }`}
        >
          <div className="w-14 h-14 rounded-2xl mx-auto mb-4 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-lg flex items-center justify-center">
            <div
              className={`w-full h-full rounded-2xl flex items-center justify-center ${
                isLightMode ? 'bg-white text-[#855b0a]' : 'bg-[#050f1d] text-[#f6e8b1]'
              }`}
            >
              <Lock className="w-6 h-6 text-[#d4af37]" />
            </div>
          </div>

          <h4
            className={`text-lg sm:text-xl font-bold font-cinzel mb-2 ${
              isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
            }`}
          >
            {getTitle()}
          </h4>

          <p
            className={`text-xs sm:text-sm leading-relaxed mb-6 font-medium ${
              isLightMode ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            {getDesc()}
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUnlock();
            }}
            className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-xs sm:text-sm shadow-xl hover:brightness-105 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{getBtnText()}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
