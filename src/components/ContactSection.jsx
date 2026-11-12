import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Copy, Check, Sparkles, Send } from 'lucide-react';

export default function ContactSection({ profile, language, isLightMode }) {
  const { contact, personal } = profile;
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const getWhatsappMsg = () => {
    if (language === 'hi') {
      return encodeURIComponent(
        `नमस्ते / Hello,\n\nमैंने श्री राहुल सुरेश बाळबट्टी (${personal.fullNameHi}) का वैवाहिक बायोडाटा देखा और इस संबंध में आपके परिवार से बातचीत करना चाहते हैं।\n\nधन्यवाद!`
      );
    }
    if (language === 'en') {
      return encodeURIComponent(
        `Hello,\n\nI came across the matrimonial biodata of Mr. Rahul Suresh Balabatti (${personal.fullNameEn}) and would like to connect with your family regarding matrimonial alliance.\n\nThank you!`
      );
    }
    return encodeURIComponent(
      `ನಮಸ್ಕಾರ / Hello,\n\nI came across the matrimonial biodata of Mr. Rahul Suresh Balabatti (${personal.fullNameKn}) and would like to connect with your family regarding matrimonial alliance.\n\nThank you!`
    );
  };

  const getAddress = () => {
    if (language === 'hi') return contact.addressHi;
    if (language === 'en') return contact.addressEn;
    return contact.addressKn;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${
              isLightMode
                ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                : 'bg-[#07172b]/80 border-[#d4af37]/30 text-[#d4af37]'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi'
                ? 'संपर्क एवं पता • Get in Touch'
                : language === 'en'
                ? 'Contact & Address'
                : 'ಸಂಪರ್ಕ ಹಾಗೂ ವಿಳಾಸ • Get in Touch'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'संपर्क विवरण'
              : language === 'en'
              ? 'Contact Information'
              : 'ಸಂಪರ್ಕ ಮಾಹಿತಿ'}
          </h2>
          <p
            className={`text-xs sm:text-sm mt-2 font-medium ${
              isLightMode ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {language === 'hi'
              ? 'अधिक जानकारी अथवा विवाह प्रस्ताव हेतु परिवार से सीधे संपर्क करें।'
              : language === 'en'
              ? 'Feel free to reach out to the family for further discussions and matrimonial alliance.'
              : 'ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ಅಥವಾ ಜಾತಕ ಹೊಂದಾಣಿಕೆಗಾಗಿ ಕುಟುಂಬದವರನ್ನು ಸಂಪರ್ಕಿಸಿ.'}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Contact Main Box */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`p-1 rounded-3xl shadow-2xl ${
              isLightMode
                ? 'bg-gradient-to-r from-[#c59b27] via-[#fdf4c9] to-[#855b0a]'
                : 'bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c]'
            }`}
          >
            <div
              className={`rounded-[1.4rem] p-6 sm:p-10 ${
                isLightMode ? 'bg-[#ffffff]' : 'bg-[#071527]'
              }`}
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left: Single Direct Contact Channel */}
                <div className="space-y-4">
                  <h3
                    className={`text-xl font-bold font-cinzel mb-2 flex items-center gap-2 ${
                      isLightMode ? 'text-[#0b172a]' : 'text-[#f6e8b1]'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 text-[#d4af37]" />
                    {language === 'hi'
                      ? 'सीधा संपर्क विवरण'
                      : language === 'en'
                      ? 'Direct Contact Channel'
                      : 'ನೇರ ಸಂಪರ್ಕ ವಿವರ'}
                  </h3>

                  {/* Single Mobile Number: 9108080161 */}
                  <div
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${
                      isLightMode
                        ? 'bg-[#faf6ee] border-[#c59b27]/40 shadow-sm'
                        : 'bg-[#091b32] border-white/5 hover:border-[#d4af37]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span
                          className={`text-[11px] uppercase tracking-wider block font-bold ${
                            isLightMode ? 'text-slate-600' : 'text-slate-400'
                          }`}
                        >
                          {language === 'hi'
                            ? 'मोबाइल / व्हाट्सएप नंबर'
                            : language === 'en'
                            ? 'Mobile & WhatsApp'
                            : 'ಮೊಬೈಲ್ & WhatsApp'}
                        </span>
                        <a
                          href="tel:+919108080161"
                          className={`text-lg font-bold font-mono ${
                            isLightMode ? 'text-[#0b172a] hover:text-[#855b0a]' : 'text-white hover:text-[#d4af37]'
                          }`}
                        >
                          +91 91080 80161
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('+919108080161', 'phonePrimary')}
                      className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                        isLightMode
                          ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                      }`}
                      title="Copy Phone"
                    >
                      {copiedField === 'phonePrimary' ? (
                        <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Address */}
                  <div
                    className={`flex items-start justify-between p-4 rounded-2xl border transition-colors ${
                      isLightMode
                        ? 'bg-[#faf6ee] border-[#c59b27]/40 shadow-sm'
                        : 'bg-[#091b32] border-white/5 hover:border-[#d4af37]/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#855b0a] shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div>
                        <span
                          className={`text-[11px] uppercase tracking-wider block font-bold ${
                            isLightMode ? 'text-slate-600' : 'text-slate-400'
                          }`}
                        >
                          {language === 'hi' ? 'निवास पता' : language === 'en' ? 'Native Address' : 'ಮೂಲ ವಿಳಾಸ'}
                        </span>
                        <div
                          className={`text-xs sm:text-sm leading-snug mt-1 font-semibold ${
                            isLightMode ? 'text-slate-800' : 'text-slate-300'
                          }`}
                        >
                          {getAddress()}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(contact.addressEn, 'address')}
                      className={`p-2.5 rounded-lg border transition-colors cursor-pointer shrink-0 ml-2 ${
                        isLightMode
                          ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                      }`}
                      title="Copy Address"
                    >
                      {copiedField === 'address' ? (
                        <Check className="w-4 h-4 text-emerald-600 font-bold" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Right: Direct WhatsApp Redirection CTA to 9108080161 */}
                <div
                  className={`p-6 rounded-2xl border text-center flex flex-col justify-between h-full ${
                    isLightMode
                      ? 'bg-gradient-to-br from-[#f8f5ed] to-[#eee6d3] border-[#c59b27]/50 shadow-md'
                      : 'bg-gradient-to-br from-[#0c2647] to-[#08172c] border-[#d4af37]/40'
                  }`}
                >
                  <div>
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <h4
                      className={`text-xl font-bold mb-2 font-cinzel ${
                        isLightMode ? 'text-[#0b172a]' : 'text-white'
                      }`}
                    >
                      {language === 'hi'
                        ? 'व्हाट्सएप पर बात करें'
                        : language === 'en'
                        ? 'WhatsApp Connect'
                        : 'WhatsApp ಸಂಪರ್ಕ'}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed max-w-xs mx-auto mb-6 font-medium ${
                        isLightMode ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      {language === 'hi'
                        ? 'एक क्लिक में सीधे 9108080161 पर व्हाट्सएप संदेश भेजें।'
                        : language === 'en'
                        ? 'Connect directly on WhatsApp at 9108080161 with a polite matrimonial greeting.'
                        : 'ಒಂದು ಕ್ಲಿಕ್‌ನಲ್ಲಿ 9108080161 ಗೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನೇರವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.'}
                    </p>
                  </div>

                  {/* Direct redirect to wa.me/919108080161 */}
                  <a
                    href={`https://wa.me/919108080161?text=${getWhatsappMsg()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {language === 'hi'
                        ? 'व्हाट्सएप (9108080161) पर संदेश भेजें'
                        : language === 'en'
                        ? 'Message on WhatsApp (9108080161)'
                        : 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ'}
                    </span>
                  </a>
                </div>

              </div>

              {/* Toast Feedback */}
              {copiedField && (
                <div className="mt-4 p-2.5 rounded-xl bg-emerald-900/70 border border-emerald-500/40 text-emerald-200 text-xs text-center font-bold animate-fadeIn">
                  ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ! • Copied to clipboard!
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
