import React from 'react';
import { Moon, Star, Sun, Compass, Clock, MapPin } from 'lucide-react';

export default function HoroscopeSection({ profile, language, isLightMode }) {
  const { horoscope } = profile;

  const horoscopeItems = [
    {
      labelKn: 'ರಾಶಿ',
      labelEn: 'Rashi (Moon Sign)',
      labelHi: 'राशि',
      valKn: horoscope.rashiKn,
      valEn: horoscope.rashiEn,
      valHi: horoscope.rashiHi,
      icon: Moon,
    },
    {
      labelKn: 'ನಕ್ಷತ್ರ',
      labelEn: 'Nakshatra (Birth Star)',
      labelHi: 'नक्षत्र',
      valKn: horoscope.nakshatraKn,
      valEn: horoscope.nakshatraEn,
      valHi: horoscope.nakshatraHi,
      icon: Star,
    },
    {
      labelKn: 'ಗಣ',
      labelEn: 'Gana',
      labelHi: 'गण',
      valKn: horoscope.ganaKn,
      valEn: horoscope.ganaEn,
      valHi: horoscope.ganaHi,
      icon: Sun,
    },
    {
      labelKn: 'ಪಾದ',
      labelEn: 'Pada (Quarter)',
      labelHi: 'चरण / पाद',
      valKn: horoscope.padaKn,
      valEn: horoscope.padaEn,
      valHi: horoscope.padaHi,
      icon: Compass,
    },
    {
      labelKn: 'ಜನನ ಸಮಯ',
      labelEn: 'Time of Birth',
      labelHi: 'जन्म समय',
      valKn: horoscope.birthTimeKn,
      valEn: horoscope.birthTimeEn,
      valHi: horoscope.birthTimeHi,
      icon: Clock,
    },
    {
      labelKn: 'ಜನನ ಸ್ಥಳ',
      labelEn: 'Place of Birth',
      labelHi: 'जन्म स्थान',
      valKn: horoscope.birthPlaceKn,
      valEn: horoscope.birthPlaceEn,
      valHi: horoscope.birthPlaceHi,
      icon: MapPin,
    },
  ];

  const getLabel = (item) => (language === 'hi' ? item.labelHi : language === 'en' ? item.labelEn : item.labelKn);
  const getVal = (item) => (language === 'hi' ? item.valHi : language === 'en' ? item.valEn : item.valKn);

  return (
    <section id="horoscope" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${
              isLightMode
                ? 'bg-white border-[#c59b27]/40 text-[#855b0a] shadow-sm'
                : 'bg-[#07172b]/80 border-[#d4af37]/40 text-[#d4af37]'
            }`}
          >
            <span className="text-[#d4af37]">ॐ</span>
            <span>
              {language === 'hi'
                ? 'वैदिक ज्योतिष विवरण • Vedic Astrology'
                : language === 'en'
                ? 'Vedic Astrology • Planetary Alignment'
                : 'ಜಾತಕ ಹಾಗೂ ನಕ್ಷತ್ರ ವಿವರಗಳು • Vedic Astrology'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'कुंडली एवं जन्म विवरण'
              : language === 'en'
              ? 'Horoscope & Birth Details'
              : 'ಜಾತಕದ ವಿವರಗಳು'}
          </h2>
          <p
            className={`text-xs sm:text-sm mt-2 font-medium ${
              isLightMode ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {language === 'hi'
              ? 'कुंडली मिलान एवं ज्योतिषीय समन्वय हेतु प्रामाणिक जन्म विवरण।'
              : language === 'en'
              ? 'Authentic planetary and birth star positions for astrological matching.'
              : 'ಜ್ಯೋತಿಷ್ಯ ಹೊಂದಾಣಿಕೆಗಾಗಿ ಅಧಿಕೃತ ರಾಶಿ, ನಕ್ಷತ್ರ ಹಾಗೂ ಗಣ ವಿವರಗಳು.'}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Traditional Vedic Kundali Art Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className={`p-1 rounded-3xl shadow-2xl ${
              isLightMode
                ? 'bg-gradient-to-r from-[#c59b27] via-[#fdf4c9] to-[#855b0a]'
                : 'bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c]'
            }`}
          >
            <div
              className={`rounded-[1.4rem] p-6 sm:p-8 relative overflow-hidden ${
                isLightMode ? 'bg-[#ffffff]' : 'bg-[#071527]'
              }`}
            >
              {/* Subtle background sacred symbol */}
              <div
                className={`absolute right-4 bottom-2 text-9xl font-serif pointer-events-none select-none ${
                  isLightMode ? 'text-[#855b0a]/5' : 'text-[#d4af37]/5'
                }`}
              >
                ॐ
              </div>

              <div className="text-center mb-6">
                <span
                  className={`text-xs tracking-widest uppercase font-bold ${
                    isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
                  }`}
                >
                  {language === 'hi'
                    ? '॥ जन्म कुंडली एवं नक्षत्र मिलान विवरण ॥'
                    : language === 'en'
                    ? '|| HOROSCOPE CHART & STAR DETAILS ||'
                    : '॥ ಜಾತಕ ಚಕ್ರ ಹಾಗೂ ನಕ್ಷತ್ರ ಹೊಂದಾಣಿಕೆ ವಿವರ ॥'}
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-bold font-cinzel mt-1 ${
                    isLightMode ? 'text-[#0b172a]' : 'text-[#f6e8b1]'
                  }`}
                >
                  {language === 'hi'
                    ? `${horoscope.rashiHi} • ${horoscope.nakshatraHi}`
                    : language === 'en'
                    ? `${horoscope.rashiEn} • ${horoscope.nakshatraEn}`
                    : `${horoscope.rashiKn} • ${horoscope.nakshatraKn}`}
                </h3>
              </div>

              {/* Grid of horoscope elements */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {horoscopeItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl p-4 text-center border transition-all duration-200 ${
                        isLightMode
                          ? 'bg-[#faf6ee] border-[#c59b27]/40 hover:border-[#855b0a] hover:bg-[#f6efe0]'
                          : 'bg-[#0b1e36]/90 border-[#d4af37]/30 hover:border-[#d4af37]/60 hover:bg-[#0e2748]'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center mx-auto mb-2 ${
                          isLightMode
                            ? 'bg-[#c59b27]/20 border-[#c59b27]/40 text-[#855b0a]'
                            : 'bg-[#d4af37]/15 border-[#d4af37]/30 text-[#d4af37]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[11px] uppercase tracking-wider block font-bold ${
                          isLightMode ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {getLabel(item)}
                      </span>
                      <div
                        className={`text-base sm:text-lg font-bold mt-0.5 ${
                          isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7]'
                        }`}
                      >
                        {getVal(item)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Notice */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-center gap-2 text-xs font-semibold ${
                  isLightMode ? 'border-slate-200 text-slate-700' : 'border-[#d4af37]/20 text-slate-300'
                }`}
              >
                <span>
                  {language === 'hi'
                    ? 'संपूर्ण जन्म पत्रिका (Horoscope Chart) आवश्यकता पर उपलब्ध है।'
                    : language === 'en'
                    ? 'Detailed horoscope kundali chart available upon request.'
                    : 'ಸಂಪೂರ್ಣ ಜಾತಕ ಕುಂಡಲಿ ಪತ್ರಿಕೆ (Horoscope Chart) ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ.'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
