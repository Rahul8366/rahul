import React, { useState } from 'react';
import { UserCheck, Mail, User, Phone, ShieldCheck, X, ArrowRight, Heart } from 'lucide-react';
import { visitorService } from '../services/visitorService';
import { useClerk } from '@clerk/clerk-react';

export default function VisitorGateModal({ isOpen, onClose, onOpenLegal, isLightMode, language }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('Bride Family (ಹುಡುಗಿಯ ಕುಟುಂಬ)');
  const [city, setCity] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState('');

  let clerk = null;
  try {
    clerk = useClerk();
  } catch (e) {}

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(
        language === 'hi'
          ? 'कृपया वैध ईमेल आईडी दर्ज करें।'
          : language === 'en'
          ? 'Please enter a valid email address.'
          : 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ಐಡಿ ನಮೂದಿಸಿ.'
      );
      return;
    }

    if (!name.trim()) {
      setError(
        language === 'hi'
          ? 'कृपया अपना नाम दर्ज करें।'
          : language === 'en'
          ? 'Please enter your name.'
          : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.'
      );
      return;
    }

    visitorService.registerVisitor({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      relation,
      city: city.trim(),
    });

    onClose();
  };

  const handleSkip = () => {
    // If skipped, record as anonymous guest view
    visitorService.registerVisitor({
      name: 'Guest Visitor',
      email: 'guest.' + Math.floor(Math.random() * 8999 + 1000) + '@visitor.temp',
      phone: '',
      relation: 'Browsing Guest',
      city: 'Unknown Location',
    });
    onClose();
  };

  const inputClass = isLightMode
    ? 'w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27] outline-none shadow-sm'
    : 'w-full bg-[#050f1d] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:border-[#d4af37] outline-none';

  const labelClass = isLightMode
    ? 'text-xs text-slate-700 font-bold block mb-1'
    : 'text-xs text-slate-300 font-medium block mb-1';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/35' : 'bg-black/85'
      }`}
    >
      <div
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
          isLightMode
            ? 'bg-[#fbf9f4] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/15'
            : 'bg-[#08172c] border border-[#d4af37]/40 text-slate-100 shadow-black/80'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleSkip}
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
          <div className="w-14 h-14 rounded-full mx-auto mb-3 bg-gradient-to-tr from-[#997424] via-[#f6e8b1] to-[#b38728] p-[1.5px] shadow-lg shadow-amber-950/30 flex items-center justify-center">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                isLightMode ? 'bg-white text-[#855b0a]' : 'bg-[#071527] text-[#f6e8b1]'
              }`}
            >
              <Heart className="w-7 h-7 text-[#d4af37] fill-[#d4af37]/30" />
            </div>
          </div>

          <h3
            className={`text-xl sm:text-2xl font-cinzel font-bold ${
              isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
            }`}
          >
            {language === 'hi'
              ? 'स्वागतम् • परिचय दर्ज करें'
              : language === 'en'
              ? 'Welcome • Visitor Introduction'
              : 'ನಮಸ್ಕಾರ • ಸಂದರ್ಶಕರ ಪರಿಚಯ'}
          </h3>

          <p
            className={`text-xs mt-1.5 max-w-sm mx-auto font-medium ${
              isLightMode ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            {language === 'hi'
              ? 'राहुल सुरेश बाळबट्टी के विवाह परिचय पत्र को देखने के लिए कृपया अपना नाम व ईमेल दर्ज करें।'
              : language === 'en'
              ? "To view verified marriage details of Rahul Suresh Balabatti, please introduce yourself:"
              : 'ರಾಹುಲ ಸುರೇಶ ಬಳಬಟ್ಟಿ ಅವರ ವಿವಾಹ ಪರಿಚಯ ಪತ್ರ ವೀಕ್ಷಿಸಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪರಿಚಯ ನಮೂದಿಸಿ:'}
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        {/* 1-Click Continue with Google */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => {
              const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
              if (clerkKey && window.Clerk) {
                window.Clerk.openSignIn({
                  strategy: 'oauth_google',
                });
              } else {
                const googleEmail = window.prompt(
                  language === 'hi'
                    ? 'कृपया अपना Google Gmail पता दर्ज करें:'
                    : language === 'en'
                    ? 'Please enter your Google / Gmail address:'
                    : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ Google Gmail ವಿಳಾಸ ನಮೂದಿಸಿ:'
                );
                if (googleEmail && googleEmail.includes('@')) {
                  const googleName = googleEmail.split('@')[0].replace(/[._]/g, ' ');
                  visitorService.registerVisitor({
                    name: googleName,
                    email: googleEmail,
                    phone: '',
                    relation: 'Google Verified Alliance',
                  });
                  onClose();
                }
              }
            }}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer hover:shadow"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-3 my-3">
            <span className={`flex-1 h-[1px] ${isLightMode ? 'bg-slate-200' : 'bg-white/10'}`} />
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">ಅಥವಾ / Or</span>
            <span className={`flex-1 h-[1px] ${isLightMode ? 'bg-slate-200' : 'bg-white/10'}`} />
          </div>
        </div>

        {/* Visitor Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className={labelClass}>
              {language === 'hi' ? 'आपका नाम (Full Name): *' : language === 'en' ? 'Your Name: *' : 'ನಿಮ್ಮ ಹೆಸರು: *'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                placeholder={language === 'hi' ? 'उदा. रमेश पाटील' : language === 'en' ? 'e.g. Ramesh Patil' : 'ಉದಾ. ರಮೇಶ್ ಪಾಟೀಲ್'}
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>
              {language === 'hi' ? 'ईमेल आईडी (Email ID): *' : language === 'en' ? 'Email Address: *' : 'ಇಮೇಲ್ ಐಡಿ (Email): *'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="name@example.com"
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>
                {language === 'hi' ? 'मोबाइल (Mobile - Optional):' : language === 'en' ? 'Phone (Optional):' : 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (ಐಚ್ಛಿಕ):'}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-3" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                {language === 'hi' ? 'संबंध / उद्देश्य:' : language === 'en' ? 'Relation / Purpose:' : 'ಸಂಬಂಧ / ಉದ್ದೇಶ:'}
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className={inputClass}
              >
                <option value="Bride Family (ಹುಡುಗಿಯ ಕುಟುಂಬ)">Bride Family (ಹುಡುಗಿಯ ಕುಟುಂಬ)</option>
                <option value="Relative / Mediator (ಸಂಬಂಧಿಕರು / ಮಧ್ಯಸ್ಥರು)">Relative / Mediator (ಸಂಬಂಧಿಕರು)</option>
                <option value="Friend / Well-wisher (ಸ್ನೇಹಿತರು)">Friend (ಸ್ನೇಹಿತರು)</option>
                <option value="Other Visitor">Other / General Alliance</option>
              </select>
            </div>
          </div>

          {/* Privacy & Legal Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 text-xs cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded text-[#d4af37] focus:ring-[#d4af37]"
              />
              <span className={isLightMode ? 'text-slate-600' : 'text-slate-400'}>
                {language === 'hi' ? (
                  <>
                    मैं वैवाहिक संबंध हेतु{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal('privacy')}
                      className="underline font-bold text-[#855b0a] hover:text-[#caa048]"
                    >
                      गोपनीयता नीति (Privacy Policy)
                    </button>{' '}
                    और{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal('terms')}
                      className="underline font-bold text-[#855b0a] hover:text-[#caa048]"
                    >
                      नियम व शर्तों (Terms)
                    </button>{' '}
                    से सहमत हूँ।
                  </>
                ) : (
                  <>
                    ನಾನು ವಿವಾಹ ಸಂಬಂಧ ವಿಚಾರಣೆಗಾಗಿ{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal('privacy')}
                      className="underline font-bold text-[#855b0a] hover:text-[#caa048]"
                    >
                      ಖಾಸಗಿತನ ನೀತಿ (Privacy Policy)
                    </button>{' '}
                    ಮತ್ತು{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal('terms')}
                      className="underline font-bold text-[#855b0a] hover:text-[#caa048]"
                    >
                      ನಿಯಮಗಳನ್ನು (Terms)
                    </button>{' '}
                    ಒಪ್ಪುತ್ತೇನೆ.
                  </>
                )}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="submit"
              disabled={!agreed}
              className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-sm shadow-lg hover:brightness-105 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              <UserCheck className="w-4 h-4" />
              <span>
                {language === 'hi'
                  ? 'प्रोफ़ाइल देखें • View Profile'
                  : language === 'en'
                  ? 'View Marriage Profile'
                  : 'ವಿವಾಹ ಪರಿಚಯ ಪತ್ರ ವೀಕ್ಷಿಸಿ'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleSkip}
              className={`w-full sm:w-auto px-4 py-3 rounded-2xl border text-xs font-semibold transition-colors cursor-pointer ${
                isLightMode
                  ? 'border-slate-300 text-slate-600 hover:bg-slate-100'
                  : 'border-white/10 text-slate-400 hover:bg-white/5'
              }`}
            >
              {language === 'hi' ? 'अतिथि रूप में जारी रखें' : language === 'en' ? 'Continue as Guest' : 'ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ'}
            </button>
          </div>
        </form>

        {/* Security badge */}
        <div
          className={`mt-4 pt-3 border-t text-[11px] flex items-center justify-center gap-1.5 ${
            isLightMode ? 'border-slate-200 text-slate-500' : 'border-white/5 text-slate-400'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Confidential • Used exclusively for matrimonial communication</span>
        </div>
      </div>
    </div>
  );
}
