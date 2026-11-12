import React, { useState } from 'react';
import { Shield, FileText, CheckCircle, X, Lock, Scale, AlertCircle } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy', isLightMode, language }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'privacy' or 'terms'

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/35' : 'bg-black/85'
      }`}
    >
      <div
        className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] flex flex-col border transition-all ${
          isLightMode
            ? 'bg-[#fbf9f4] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/15'
            : 'bg-[#08172c] border border-[#d4af37]/40 text-slate-100 shadow-black/80'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between pb-4 border-b shrink-0 ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-md flex items-center justify-center">
              <div
                className={`w-full h-full rounded-xl flex items-center justify-center ${
                  isLightMode ? 'bg-white text-[#855b0a]' : 'bg-[#071527] text-[#f6e8b1]'
                }`}
              >
                <Shield className="w-5 h-5 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <h3
                className={`text-lg sm:text-xl font-cinzel font-bold ${
                  isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
                }`}
              >
                {activeTab === 'privacy'
                  ? 'ಖಾಸಗಿತನ ನೀತಿ • Privacy Policy'
                  : 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು • Terms & Conditions'}
              </h3>
              <p className={`text-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Official Matrimonial Profile of Rahul Suresh Balabatti.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isLightMode
                ? 'hover:bg-black/5 text-slate-600 hover:text-slate-900'
                : 'hover:bg-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div
          className={`flex items-center gap-2 pt-3 pb-2 border-b shrink-0 ${
            isLightMode ? 'border-slate-200' : 'border-white/5'
          }`}
        >
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] shadow-sm'
                : isLightMode
                ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>ಖಾಸಗಿತನ ನೀತಿ (Privacy Policy)</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] shadow-sm'
                : isLightMode
                ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು (Terms of Use)</span>
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div
          className={`flex-1 overflow-y-auto py-5 pr-2 space-y-4 text-xs sm:text-sm leading-relaxed ${
            isLightMode ? 'text-slate-700' : 'text-slate-300'
          }`}
        >
          {activeTab === 'privacy' ? (
            /* PRIVACY POLICY */
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs">
                <span className="font-bold text-[#855b0a] block mb-1">
                  ಸಂಕ್ಷಿಪ್ತ ಭರವಸೆ • Summary Promise:
                </span>
                ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಕೇವಲ ವಿವಾಹ ಸಂಬಂಧದ ಪರಿಶೀಲನೆಗಾಗಿ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ಯಾವುದೇ ಜಾಹೀರಾತುದಾರರಿಗೆ ಅಥವಾ ಮೂರನೇ ವ್ಯಕ್ತಿಗಳಿಗೆ ನೀಡಲಾಗುವುದಿಲ್ಲ.
              </div>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  1. ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ (Information Collected)
                </h4>
                <p>
                  ವೀಕ್ಷಕರು ಸ್ವಯಂಪ್ರೇರಿತರಾಗಿ ನಮೂದಿಸುವ ಹೆಸರು, ಇಮೇಲ್ ವಿಳಾಸ, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಹಾಗೂ ಭೇಟಿಯ ಸಮಯವನ್ನು ಮಾತ್ರ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ. ಯಾವುದೇ ಅನಗತ್ಯ ಅಥವಾ ಗುಪ್ತ ಡೇಟಾವನ್ನು ಹಿಡಿಯುವುದಿಲ್ಲ.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  2. ಬಳಕೆಯ ಉದ್ದೇಶ (Purpose of Data Collection)
                </h4>
                <p>
                  ಈ ವೆಬ್‌ಸೈಟ್ ಶ್ರೀ ರಾಹುಲ ಸುರೇಶ ಬಳಬಟ್ಟಿ ಅವರ ಅಧಿಕೃತ ವೈಯಕ್ತಿಕ ವಿವಾಹ ಪರಿಚಯ ಪತ್ರವಾಗಿದೆ. ಪ್ರೊಫೈಲ್ ಮತ್ತು ಜಾತಕ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸುವ ಕುಟುಂಬಗಳು ಮತ್ತು ಸಂಬಂಧಿಕರ ನೈಜ ಸಂಪರ್ಕವನ್ನು ತಿಳಿಯಲು ಮಾತ್ರ ಈ ವಿವರಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  3. ಸುರಕ್ಷತೆ ಮತ್ತು ಗೋಪ್ಯತೆ (Data Security & Zero Spam)
                </h4>
                <p>
                  ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಯಾವುದೇ ವಾಣಿಜ್ಯ ಅಥವಾ ಮಾರ್ಕೆಟಿಂಗ್ ಉದ್ದೇಶಗಳಿಗೆ ಮಾರಾಟ ಮಾಡಲಾಗುವುದಿಲ್ಲ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  4. ಡೇಟಾ ತೆಗೆದುಹಾಕುವ ಹಕ್ಕು (Right to Deletion)
                </h4>
                <p>
                  ನಿಮ್ಮ ಯಾವುದೇ ನಮೂದಿತ ವಿವರಗಳನ್ನು ಅಳಿಸಿಹಾಕಲು ಬಯಸಿದರೆ, ನೇರವಾಗಿ{' '}
                  <span className="font-mono font-bold text-emerald-600">+91 91080 80161</span> ಗೆ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಬಹುದು.
                </p>
              </section>
            </div>
          ) : (
            /* TERMS & CONDITIONS */
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs">
                <span className="font-bold text-[#855b0a] block mb-1">
                  ಗಮನಿಸಿ • Notice of Alliance Intent:
                </span>
                ಈ ವೆಬ್‌ಸೈಟ್ ಕೇವಲ ವೈಯಕ್ತಿಕ ವಿವಾಹ ಸಂಬಂಧ ವಿಚಾರಣೆಗಾಗಿ ಮಾತ್ರ ರೂಪಿಸಲಾಗಿದೆ.
              </div>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  1. ಸದ್ಭಾವನೆಯ ಬಳಕೆ (Authentic Matrimonial Usage)
                </h4>
                <p>
                  ಈ ಜಾಲತಾಣದಲ್ಲಿ ನೀಡಿರುವ ರಾಹುಲ ಸುರೇಶ ಬಳಬಟ್ಟಿ ಅವರ ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ, ಕುಟುಂಬ ಹಾಗೂ ಜಾತಕ ವಿವರಗಳನ್ನು ಕೇವಲ ವಿವಾಹ ಸಂಬಂಧದ ಆಲೋಚನೆಗಾಗಿ ಮಾತ್ರ ವೀಕ್ಷಿಸಬೇಕು.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  2. ಮಾಹಿತಿ ದುರುಪಯೋಗ ನಿಷೇಧ (No Scraping or Misuse)
                </h4>
                <p>
                  ಇಲ್ಲಿರುವ ಭಾವಚಿತ್ರಗಳು ಮತ್ತು ಕುಟುಂಬದ ವಿವರಗಳನ್ನು ನಕಲು ಮಾಡುವುದು, ಇತರ ಯಾವುದೇ ಸಾರ್ವಜನಿಕ ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ಅಥವಾ ವಾಣಿಜ್ಯ ಉದ್ದೇಶಗಳಿಗಾಗಿ ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  3. ಪ್ರಾಮಾಣಿಕತೆ ಮತ್ತು ಪರಿಶೀಲನೆ (Verification)
                </h4>
                <p>
                  ನೀಡಿರುವ ಎಲ್ಲಾ ವಿವರಗಳು ನೈಜವಾಗಿದ್ದು, ಭಾವಿ ವಧುವಿನ ಕುಟುಂಬದವರು ಪರಸ್ಪರ ಪರಿಶೀಲನೆ ನಡೆಸಿ ಮುಂದಿನ ಮಾತುಕತೆ ನಡೆಸಲು ಮುಕ್ತ ಸ್ವಾಗತವಿದೆ.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className={`font-bold font-cinzel text-sm ${isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'}`}>
                  4. ನ್ಯಾಯವ್ಯಾಪ್ತಿ (Jurisdiction)
                </h4>
                <p>
                  ಈ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ವಿಷಯಗಳು ಭಾರತೀಯ ಕಾನೂನು ಮತ್ತು ಕರ್ನಾಟಕ ರಾಜ್ಯ ನ್ಯಾಯವ್ಯಾಪ್ತಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between pt-4 border-t shrink-0 ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Matrimonial Document • Kalaburagi / Bengaluru, Karnataka</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220] font-bold text-xs shadow-md hover:brightness-105 cursor-pointer"
          >
            ಅರ್ಥವಾಯಿತು (I Understand)
          </button>
        </div>
      </div>
    </div>
  );
}
