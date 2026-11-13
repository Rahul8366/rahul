import React, { useState } from 'react';
import { Phone, ShieldCheck, X, ArrowRight, Heart, Lock, AlertCircle } from 'lucide-react';
import { visitorService } from '../services/visitorService';
import { SignInButton } from '@clerk/react';

export default function VisitorGateModal({
  isOpen,
  onClose,
  onVerified,
  onGuestMode,
  onOpenLegal,
  isLightMode,
  language,
}) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Validate Indian standard 10-digit mobile number starting with 6, 7, 8, 9
  const validateIndianMobile = (number) => {
    const clean = number.replace(/\D/g, '');
    const indianRegex = /^[6-9]\d{9}$/;
    return indianRegex.test(clean);
  };

  // Block fake, dummy, repeating, or sequential numbers (e.g. 9999999999, 9876543210, etc.)
  const isDummyOrFakeMobile = (num) => {
    if (!num || num.length !== 10) return true;

    // 1. All identical digits e.g. 9999999999, 8888888888, 7777777777
    if (/^(\d)\1{9}$/.test(num)) return true;

    // 2. Only 1 or 2 unique digits e.g. 9898989898, 9090909090, 9999988888
    const unique = new Set(num.split(''));
    if (unique.size <= 2) return true;

    // 3. 5 or more identical digits in a row e.g. 9999912345, 9879999999
    if (/(\d)\1{4,}/.test(num)) return true;

    // 4. Sequential patterns e.g. 0123456789, 1234567890, 9876543210, 8765432109
    const sequential = ['0123456789', '1234567890', '9876543210', '8765432109', '9876501234'];
    if (sequential.some((s) => s === num || s.includes(num))) return true;

    // 5. Block known test/dummy numbers
    const blocked = [
      '9876543210',
      '1234567890',
      '9123456789',
      '9876598765',
      '1234512345',
      '9000000000',
      '8000000000',
      '7000000000',
      '6000000000',
      '9876512345',
    ];
    if (blocked.includes(num)) return true;

    return false;
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    const cleanNumber = mobileNumber.replace(/\D/g, '');

    if (!cleanNumber) {
      setError(
        language === 'hi'
          ? 'कृपया अपना 10-अंकों का मोबाइल नंबर दर्ज करें।'
          : language === 'en'
          ? 'Please enter your 10-digit mobile number.'
          : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.'
      );
      return;
    }

    if (!validateIndianMobile(cleanNumber)) {
      setError(
        language === 'hi'
          ? 'मान्य भारतीय मोबाइल नंबर दर्ज करें (10 अंक, 6, 7, 8 या 9 से शुरू)।'
          : language === 'en'
          ? 'Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).'
          : 'ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ (6, 7, 8 ಅಥವಾ 9 ರಿಂದ ಪ್ರಾರಂಭವಾಗಬೇಕು).'
      );
      return;
    }

    if (isDummyOrFakeMobile(cleanNumber)) {
      setError(
        language === 'hi'
          ? 'कृपया अपना वास्तविक मोबाइल नंबर दर्ज करें (डमी या लगातार नंबर जैसे 9999999999 ಅಥವಾ 9876543210 स्वीकार्य नहीं हैं)।'
          : language === 'en'
          ? 'Please enter a genuine mobile number (dummy or continuous numbers like 9999999999 or 9876543210 are not allowed).'
          : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೈಜ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ (9999999999 ಅಥವಾ 9876543210 ನಂತಹ ಡಮ್ಮಿ ಸಂಖ್ಯೆಗಳನ್ನು ಅನುಮತಿಸಲಾಗುವುದಿಲ್ಲ).'
      );
      return;
    }

    // Register verified mobile visitor
    visitorService.registerVisitor({
      name: `Visitor (${cleanNumber})`,
      email: `${cleanNumber}@mobile.in`,
      phone: `+91 ${cleanNumber}`,
      relation: 'Alliance Inquiry (ಮೊಬೈಲ್ ಪರಿಶೀಲಿತ)',
      isVerified: true,
    });

    if (onVerified) onVerified();
    onClose();
  };

  const handleGuestClick = () => {
    // If guest mode chosen, blur sensitive details and close gate
    if (onGuestMode) onGuestMode();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/35' : 'bg-black/85'
      }`}
    >
      <div
        className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
          isLightMode
            ? 'bg-[#fbf9f4] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/15'
            : 'bg-[#08172c] border border-[#d4af37]/40 text-slate-100 shadow-black/80'
        }`}
      >
        {/* Close / Guest Button */}
        <button
          onClick={handleGuestClick}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isLightMode
              ? 'hover:bg-black/5 text-slate-500 hover:text-slate-900'
              : 'hover:bg-white/10 text-slate-400 hover:text-white'
          }`}
          title="ಮುಚ್ಚಿ / Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="text-center mb-6">
          <div className="w-13 h-13 rounded-full mx-auto mb-3 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-lg shadow-amber-950/30 flex items-center justify-center">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isLightMode ? 'bg-white text-[#855b0a]' : 'bg-[#071527] text-[#f6e8b1]'
              }`}
            >
              <Heart className="w-6 h-6 text-[#d4af37] fill-[#d4af37]/30" />
            </div>
          </div>

          <h3
            className={`text-xl sm:text-2xl font-cinzel font-bold ${
              isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
            }`}
          >
            {language === 'hi'
              ? 'स्वागतम् • परिचय सत्यापन'
              : language === 'en'
              ? 'Welcome • Verification'
              : 'ನಮಸ್ಕಾರ • ಸಂದರ್ಶಕರ ಪರಿಶೀಲನೆ'}
          </h3>

          <p
            className={`text-xs mt-1.5 max-w-xs mx-auto font-medium ${
              isLightMode ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            {language === 'hi'
              ? 'राहुल सुरेश बाळबट्टी के संपूर्ण विवाह विवरण देखने के लिए Google या मोबाइल नंबर से आगे बढ़ें:'
              : language === 'en'
              ? 'To view verified family, horoscope, and contact details of Rahul Suresh Balabatti, please verify:'
              : 'ರಾಹುಲ ಸುರೇಶ ಬಳಬಟ್ಟಿ ಅವರ ಸಂಪೂರ್ಣ ಕುಟುಂಬ, ಜಾತಕ ಮತ್ತು ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಪರಿಶೀಲಿಸಿ:'}
          </p>
        </div>

        {/* 1. Continue with Google (1-Click) */}
        <div className="mb-4">
          <SignInButton mode="modal">
            <button
              type="button"
              className="w-full py-3 px-4 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer hover:shadow-lg hover:border-slate-400 active:scale-[0.99]"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          </SignInButton>

          {/* Elegant Divider */}
          <div className="flex items-center gap-3 my-4">
            <span className={`flex-1 h-[1px] ${isLightMode ? 'bg-slate-300' : 'bg-white/15'}`} />
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              {language === 'hi' ? 'अथवा मोबाइल नंबर' : language === 'en' ? 'OR MOBILE NUMBER' : 'ಅಥವಾ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ'}
            </span>
            <span className={`flex-1 h-[1px] ${isLightMode ? 'bg-slate-300' : 'bg-white/15'}`} />
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-3.5 p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* 2. Indian Standard 10-Digit Mobile Form */}
        <form onSubmit={handleMobileSubmit} className="space-y-3.5">
          <div>
            <label className={`text-xs font-bold block mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-200'}`}>
              {language === 'hi'
                ? '10-अंकों का मोबाइल नंबर (10-Digit Mobile):'
                : language === 'en'
                ? '10-Digit Mobile Number (India):'
                : '10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (ಭಾರತ):'}
            </label>

            <div className="relative flex items-center">
              {/* India Flag & +91 prefix */}
              <div
                className={`absolute left-3 flex items-center gap-1.5 text-xs font-bold font-mono border-r pr-2 select-none ${
                  isLightMode ? 'border-slate-300 text-slate-700' : 'border-white/15 text-slate-300'
                }`}
              >
                <span>🇮🇳</span>
                <span>+91</span>
              </div>

              <input
                type="tel"
                maxLength={10}
                value={mobileNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setMobileNumber(val);
                  setError('');
                }}
                placeholder={
                  language === 'hi'
                    ? 'अपना 10-अंकों का नंबर दर्ज करें'
                    : language === 'en'
                    ? 'Enter 10-digit mobile number'
                    : 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ'
                }
                className={`w-full rounded-2xl py-3 pl-20 pr-4 text-sm font-mono tracking-wider border outline-none font-bold ${
                  isLightMode
                    ? 'bg-white border-slate-300 text-slate-900 focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27]'
                    : 'bg-[#050f1d] border-white/15 text-slate-100 focus:border-[#d4af37]'
                }`}
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1 pl-1">
              {language === 'hi'
                ? 'वैध 10 अंक जो 6, 7, 8 या 9 से शुरू हों।'
                : language === 'en'
                ? 'Must be 10 digits starting with 6, 7, 8, or 9.'
                : '6, 7, 8 ಅಥವಾ 9 ರಿಂದ ಪ್ರಾರಂಭವಾಗುವ 10 ಅಂಕಿಗಳು.'}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-xs sm:text-sm shadow-xl hover:brightness-105 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>
              {language === 'hi'
                ? 'सत्यापित करें एवं प्रोफ़ाइल देखें'
                : language === 'en'
                ? 'Submit & View Profile'
                : 'ಸಲ್ಲಿಸಿ • ವಿವಾಹ ಪರಿಚಯ ಪತ್ರ ವೀಕ್ಷಿಸಿ'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* 3. Guest Mode Option (Blur details) */}
        <div className="mt-4 pt-3 border-t text-center">
          <button
            type="button"
            onClick={handleGuestClick}
            className={`w-full py-2.5 px-4 rounded-xl border text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              isLightMode
                ? 'border-slate-300 text-slate-600 hover:bg-slate-100'
                : 'border-white/10 text-slate-400 hover:bg-white/5'
            }`}
          >
            <Lock className="w-3.5 h-3.5 opacity-60" />
            <span>
              {language === 'hi'
                ? 'अतिथि मोड (सीमित दृश्य • Guest Mode)'
                : language === 'en'
                ? 'Continue in Guest Mode (Blurred Details)'
                : 'ಅತಿಥಿ ವೀಕ್ಷಣೆ (ಮಿತಿ ವಿವರಗಳು • Guest Mode)'}
            </span>
          </button>
        </div>

        {/* Privacy Note */}
        <div
          className={`mt-3 text-[10px] text-center flex items-center justify-center gap-1.5 ${
            isLightMode ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>100% Confidential • Used strictly for marriage alliance verification</span>
        </div>
      </div>
    </div>
  );
}
