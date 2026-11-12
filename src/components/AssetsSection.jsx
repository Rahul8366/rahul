import React from 'react';
import { Landmark, Trees, Home, DollarSign, Utensils, Award, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

export default function AssetsSection({ profile, language, isLightMode }) {
  const { assets } = profile;

  const cards = [
    {
      icon: Trees,
      labelKn: 'ಕೃಷಿ ಭೂಮಿ',
      labelEn: 'Agricultural Land',
      labelHi: 'कृषि भूमि',
      valueKn: assets.agriculturalLandKn,
      valueEn: assets.agriculturalLandEn,
      valueHi: assets.agriculturalLandHi,
      highlight: '13.10 Acres',
      descKn: 'ಸ್ವಂತ ಫಲವತ್ತಾದ ಕೃಷಿ ಭೂಮಿ (Own Farmland)',
      descEn: 'Productive agricultural landholding',
      descHi: 'स्वयं की उपजाऊ कृषि भूमि',
    },
    {
      icon: Home,
      labelKn: 'ಸ್ವಂತ ಮನೆ / ವಸತಿ',
      labelEn: 'Residence',
      labelHi: 'स्वयं का घर / आवास',
      valueKn: assets.residenceKn,
      valueEn: assets.residenceEn,
      valueHi: assets.residenceHi,
      highlight: 'Own House',
      descKn: 'ಸ್ವಂತ ಮನೆ (ಗ್ರಾಮದಲ್ಲಿ)',
      descEn: 'Own independent family house',
      descHi: 'गाँव में स्वयं का मकान',
    },
    {
      icon: DollarSign,
      labelKn: 'ವಾರ್ಷಿಕ ಆದಾಯ',
      labelEn: 'Annual Income',
      labelHi: 'वार्षिक आय',
      valueKn: assets.annualIncomeKn,
      valueEn: assets.annualIncomeEn,
      valueHi: assets.annualIncomeHi,
      highlight: '₹6.3 Lakhs',
      descKn: 'ಐಟಿ ಉದ್ಯೋಗದಿಂದ ವಾರ್ಷಿಕ ಆದಾಯ',
      descEn: 'Professional annual package',
      descHi: 'आईटी व्यवसाय से वार्षिक आय',
    },
    {
      icon: Utensils,
      labelKn: 'ಆಹಾರ ಪದ್ಧತಿ',
      labelEn: 'Food Habits',
      labelHi: 'खान-पान (आहार)',
      valueKn: assets.foodHabitKn,
      valueEn: assets.foodHabitEn,
      valueHi: assets.foodHabitHi,
      highlight: 'Pure Vegetarian',
      descKn: 'ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಜೀವನಶೈಲಿ',
      descEn: 'Traditional vegetarian lifestyle',
      descHi: 'सात्विक शुद्ध शाकाहारी',
    },
    {
      icon: Award,
      labelKn: 'ಧರ್ಮ ಮತ್ತು ಜಾತಿ',
      labelEn: 'Community / Caste',
      labelHi: 'समुदाय / जाति',
      valueKn: assets.communityKn,
      valueEn: assets.communityEn,
      valueHi: assets.communityHi,
      highlight: 'Veerashaiva Lingayat',
      descKn: 'ವೀರಶೈವ ಲಿಂಗಾಯತ ಸಂಪ್ರದಾಯ',
      descEn: 'Veerashaiva Lingayat heritage',
      descHi: 'वीरशैव लिंगायत संप्रदाय',
    },
  ];

  const getLabel = (c) => (language === 'hi' ? c.labelHi : language === 'en' ? c.labelEn : c.labelKn);
  const getVal = (c) => (language === 'hi' ? c.valueHi : language === 'en' ? c.valueEn : c.valueKn);
  const getDesc = (c) => (language === 'hi' ? c.descHi : language === 'en' ? c.descEn : c.descKn);

  return (
    <section id="assets" className="py-20 relative">
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
            <Landmark className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === 'hi'
                ? 'संपत्ति एवं जीवनशैली • Assets & Lifestyle'
                : language === 'en'
                ? 'Property & Lifestyle Details'
                : 'ಆಸ್ತಿ ಮತ್ತು ಜೀವನಶೈಲಿ • Assets & Lifestyle'}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel ${
              isLightMode ? 'text-[#0e1d33]' : 'gold-text-shimmer-dark'
            }`}
          >
            {language === 'hi'
              ? 'संपत्ति एवं जीवनशैली विवरण'
              : language === 'en'
              ? 'Assets, Property & Lifestyle'
              : 'ಆಸ್ತಿ ಮತ್ತು ಜೀವನ ಶೈಲಿ ವಿವರಗಳು'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        {/* Assets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <TiltCard
                key={idx}
                isIvory={isLightMode}
                maxTilt={6}
                className="p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs uppercase tracking-wider font-bold ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {getLabel(c)}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isLightMode
                          ? 'bg-[#fef8e7] border-[#c59b27]/40 text-[#855b0a]'
                          : 'bg-[#091a30] border-[#d4af37]/40 text-[#d4af37]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div
                    className={`text-xl font-bold transition-colors ${
                      isLightMode ? 'text-[#0b172a]' : 'text-[#fbf5b7] group-hover:text-white'
                    }`}
                  >
                    {getVal(c)}
                  </div>
                  <span
                    className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                      isLightMode
                        ? 'bg-[#c59b27]/15 text-[#855b0a] border-[#c59b27]/40'
                        : 'bg-[#d4af37]/15 text-[#f6e8b1] border-[#d4af37]/30'
                    }`}
                  >
                    {c.highlight}
                  </span>
                </div>

                <div
                  className={`mt-5 pt-3 border-t text-xs font-medium flex items-center justify-between ${
                    isLightMode ? 'border-slate-200 text-slate-600' : 'border-white/5 text-slate-400'
                  }`}
                >
                  <span>{getDesc(c)}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37] opacity-60" />
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
