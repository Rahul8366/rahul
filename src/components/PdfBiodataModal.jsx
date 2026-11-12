import React, { useRef, useState } from 'react';
import { X, Download, Printer, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';

export default function PdfBiodataModal({ isOpen, onClose, profile }) {
  const [selectedLang, setSelectedLang] = useState('kn'); // 'kn', 'en', 'hi'
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef(null);

  if (!isOpen) return null;

  const { personal, photo, education, profession, family, assets, horoscope, contact } = profile;

  const handleDownloadPdf = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);

    try {
      const element = cardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.2,
        useCORS: true,
        backgroundColor: '#071527',
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Rahul_Suresh_Balabatti_Marriage_Profile_${selectedLang.toUpperCase()}.pdf`);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error('PDF generation error:', err);
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Dynamic getters based on selected language & current profile state
  const getFullName = () => {
    if (selectedLang === 'hi') return personal.fullNameHi || personal.fullNameEn;
    if (selectedLang === 'en') return personal.fullNameEn.toUpperCase();
    return personal.fullNameKn || personal.fullNameEn;
  };

  const getTitle = () => {
    if (selectedLang === 'hi') return personal.titleHi || 'विवाह परिचय पत्र';
    if (selectedLang === 'en') return 'MARRIAGE PROFILE';
    return personal.titleKn || 'ವಿವಾಹ ಪರಿಚಯ ಪತ್ರ';
  };

  const getAge = () => {
    if (selectedLang === 'hi') return personal.ageHi || personal.ageEn || personal.ageKn;
    if (selectedLang === 'en') return personal.ageEn || personal.ageKn;
    return personal.ageKn || personal.ageEn;
  };

  const getHeight = () => {
    if (selectedLang === 'hi') return personal.heightHi || personal.heightEn || personal.heightKn;
    if (selectedLang === 'en') return personal.heightEn || personal.heightKn;
    return personal.heightKn || personal.heightEn;
  };

  const getLanguages = () => {
    if (selectedLang === 'hi') return personal.languagesHi || personal.languagesEn || personal.languagesKn;
    if (selectedLang === 'en') return personal.languagesEn || personal.languagesKn;
    return personal.languagesKn || personal.languagesEn;
  };

  const getNativePlace = () => {
    if (selectedLang === 'hi') return personal.nativePlaceHi || personal.nativePlaceEn || personal.nativePlaceKn;
    if (selectedLang === 'en') return personal.nativePlaceEn || personal.nativePlaceKn;
    return personal.nativePlaceKn || personal.nativePlaceEn;
  };

  const getLocation = () => {
    if (selectedLang === 'hi') return personal.currentLocationHi || personal.currentLocationEn || personal.currentLocationKn;
    if (selectedLang === 'en') return personal.currentLocationEn || personal.currentLocationKn;
    return personal.currentLocationKn || personal.currentLocationEn;
  };

  const getRole = () => {
    if (selectedLang === 'hi') return profession.roleHi || profession.roleEn || profession.roleKn;
    if (selectedLang === 'en') return profession.roleEn || profession.roleKn;
    return profession.roleKn || profession.roleEn;
  };

  const getIncome = () => {
    if (selectedLang === 'hi') return profession.annualIncomeHi || profession.annualIncomeEn || profession.annualIncomeKn;
    if (selectedLang === 'en') return profession.annualIncomeEn || profession.annualIncomeKn;
    return profession.annualIncomeKn || profession.annualIncomeEn;
  };

  const getFather = () => {
    if (selectedLang === 'hi') return family.fatherNameHi || family.fatherNameEn || family.fatherNameKn;
    if (selectedLang === 'en') return family.fatherNameEn || family.fatherNameKn;
    return family.fatherNameKn || family.fatherNameEn;
  };

  const getMother = () => {
    if (selectedLang === 'hi') return family.motherNameHi || family.motherNameEn || family.motherNameKn;
    if (selectedLang === 'en') return family.motherNameEn || family.motherNameKn;
    return family.motherNameKn || family.motherNameEn;
  };

  const getBrother = () => {
    if (selectedLang === 'hi') return family.brotherNameHi || family.brotherNameEn || family.brotherNameKn;
    if (selectedLang === 'en') return family.brotherNameEn || family.brotherNameKn;
    return family.brotherNameKn || family.brotherNameEn;
  };

  const getFamilyType = () => {
    if (selectedLang === 'hi') return family.familyTypeHi || family.familyTypeEn || family.familyTypeKn;
    if (selectedLang === 'en') return family.familyTypeEn || family.familyTypeKn;
    return family.familyTypeKn || family.familyTypeEn;
  };

  const getHouse = () => {
    if (selectedLang === 'hi') return family.houseHi || family.houseEn || family.houseKn;
    if (selectedLang === 'en') return family.houseEn || family.houseKn;
    return family.houseKn || family.houseEn;
  };

  const getRashi = () => {
    if (selectedLang === 'hi') return horoscope.rashiHi || horoscope.rashiEn || horoscope.rashiKn;
    if (selectedLang === 'en') return horoscope.rashiEn || horoscope.rashiKn;
    return horoscope.rashiKn || horoscope.rashiEn;
  };

  const getNakshatra = () => {
    if (selectedLang === 'hi') return horoscope.nakshatraHi || horoscope.nakshatraEn || horoscope.nakshatraKn;
    if (selectedLang === 'en') return horoscope.nakshatraEn || horoscope.nakshatraKn;
    return horoscope.nakshatraKn || horoscope.nakshatraEn;
  };

  const getGana = () => {
    if (selectedLang === 'hi') return horoscope.ganaHi || horoscope.ganaEn || horoscope.ganaKn;
    if (selectedLang === 'en') return horoscope.ganaEn || horoscope.ganaKn;
    return horoscope.ganaKn || horoscope.ganaEn;
  };

  const getPada = () => {
    if (selectedLang === 'hi') return horoscope.padaHi || horoscope.padaEn || horoscope.padaKn;
    if (selectedLang === 'en') return horoscope.padaEn || horoscope.padaKn;
    return horoscope.padaKn || horoscope.padaEn;
  };

  const getLand = () => {
    if (selectedLang === 'hi') return assets.agriculturalLandHi || assets.agriculturalLandEn || assets.agriculturalLandKn;
    if (selectedLang === 'en') return assets.agriculturalLandEn || assets.agriculturalLandKn;
    return assets.agriculturalLandKn || assets.agriculturalLandEn;
  };

  const getCommunity = () => {
    if (selectedLang === 'hi') return assets.communityHi || assets.communityEn || assets.communityKn;
    if (selectedLang === 'en') return assets.communityEn || assets.communityKn;
    return assets.communityKn || assets.communityEn;
  };

  const getEduList = () => {
    return education.map((edu) => {
      if (selectedLang === 'hi') return edu.degreeHi || edu.degreeEn || edu.degreeKn;
      if (selectedLang === 'en') return edu.degreeEn || edu.degreeKn;
      return edu.degreeKn || edu.degreeEn;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#08172c] border border-[#d4af37]/40 rounded-3xl p-3 sm:p-6 shadow-2xl text-slate-100 my-auto max-h-[96vh] flex flex-col">
        
        {/* Modal Controls Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pb-3 mb-3 border-b border-[#d4af37]/20 gap-3 shrink-0">
          <div>
            <h3 className="text-base sm:text-xl font-cinzel font-bold text-[#f6e8b1] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#d4af37]" />
              <span>ವಿವಾಹ ಬಯೋಡೇಟಾ ಡೌನ್‌ಲೋಡ್ • Marriage Profile</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Shows your live edited template. Ready to download or print.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-end">
            {/* 3-Language Switcher */}
            <div className="bg-[#050f1d] p-1 rounded-xl border border-white/10 flex items-center">
              <button
                onClick={() => setSelectedLang('kn')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedLang === 'kn'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setSelectedLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedLang === 'en'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLang('hi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedLang === 'hi'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl border border-white/20 text-slate-300 hover:bg-white/10 transition-colors cursor-pointer"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] font-bold text-xs rounded-xl shadow-lg hover:brightness-110 flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'ಸಿದ್ಧವಾಗುತ್ತಿದೆ...' : 'PDF ಡೌನ್‌ಲೋಡ್'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Responsive Mobile-Friendly Scrollable Container */}
        <div className="overflow-x-auto overflow-y-auto flex-1 pb-4 flex justify-start lg:justify-center">
          <div
            ref={cardRef}
            id="printable-biodata"
            style={{ width: '920px', minHeight: '620px' }}
            className="bg-[#071527] border-2 border-[#d4af37]/60 rounded-3xl p-6 sm:p-8 relative text-slate-900 shadow-2xl flex flex-col justify-between shrink-0 select-none mx-auto"
          >
            {/* Top Ornamental Frame Header */}
            <div className="text-center mb-5 relative z-10">
              <div className="flex items-center justify-center gap-4 text-[#d4af37]">
                <span className="h-[1.5px] w-14 bg-gradient-to-r from-transparent to-[#d4af37]" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase font-serif">
                  {getTitle()}
                </span>
                <span className="h-[1.5px] w-14 bg-gradient-to-l from-transparent to-[#d4af37]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#fef8c7] via-[#e5c158] to-[#caa048] mt-1 tracking-wide">
                {getFullName()}
              </h2>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-12 gap-5 relative z-10 items-stretch">
              
              {/* LEFT: Candidate Photo */}
              <div className="col-span-4 flex flex-col items-center justify-between">
                <div className="gold-frame-3d w-full h-[400px] p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-[#071322] relative">
                    <img
                      src={photo.url}
                      alt={personal.fullNameEn}
                      style={{
                        transform: `scale(${photo.zoom}) rotate(${photo.rotation}deg)`,
                        objectPosition: `${photo.positionX}% ${photo.positionY}%`,
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Single Contact Pill on PDF */}
                <div className="w-full mt-3 p-3 bg-[#f6f2e9] text-[#0c1a2e] rounded-2xl border border-[#d4af37]/50 text-center shadow-md">
                  <div className="text-[10px] uppercase font-bold text-slate-600">
                    {selectedLang === 'hi' ? 'संपर्क / व्हाट्सएप' : selectedLang === 'en' ? 'Contact / WhatsApp' : 'ಸಂಪರ್ಕ / WhatsApp'}
                  </div>
                  <div className="text-sm font-bold text-emerald-800 font-mono mt-0.5">
                    {contact.phonePrimary}
                  </div>
                </div>
              </div>

              {/* RIGHT: Royal Ivory Information Cards Grid (100% Dynamic) */}
              <div className="col-span-8 flex flex-col gap-3.5">
                
                {/* Row 1: Personal Details & Education */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Card 1: Personal Details */}
                  <div className="bg-[#f6f2e9] text-[#0c1a2e] p-4 rounded-2xl border border-[#d4af37]/40 shadow-md">
                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#0c1a2e]/10">
                      <div className="w-6 h-6 rounded-full bg-[#0c1a2e] text-[#f6e8b1] flex items-center justify-center text-xs">
                        👤
                      </div>
                      <h4 className="font-bold text-sm font-cinzel">
                        {selectedLang === 'hi' ? 'व्यक्तिगत विवरण' : selectedLang === 'en' ? 'Personal Details' : 'ನನ್ನ ಬಗ್ಗೆ'}
                      </h4>
                    </div>

                    <div className="text-[11px] space-y-1.5 font-sans">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'जन्म तिथि' : selectedLang === 'en' ? 'Date of Birth' : 'ಜನ್ಮ ದಿನಾಂಕ'}
                        </span>
                        <span className="font-bold">: {personal.dob}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'आयु' : selectedLang === 'en' ? 'Age' : 'ವಯಸ್ಸು'}
                        </span>
                        <span className="font-bold">: {getAge()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'ऊँचाई' : selectedLang === 'en' ? 'Height' : 'ಎತ್ತರ'}
                        </span>
                        <span className="font-bold">: {getHeight()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'भाषाएँ' : selectedLang === 'en' ? 'Languages' : 'ಭಾಷೆಗಳು'}
                        </span>
                        <span className="font-bold truncate max-w-[140px] text-right">
                          : {getLanguages()}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-slate-600 font-medium shrink-0">
                          {selectedLang === 'hi' ? 'मूल स्थान' : selectedLang === 'en' ? 'Native Place' : 'ಮೂಲ ಸ್ಥಳ'}
                        </span>
                        <span className="font-bold text-right text-[10px] pl-1 leading-tight max-w-[150px]">
                          : {getNativePlace()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'स्थान' : selectedLang === 'en' ? 'Location' : 'ಉದ್ಯೋಗ ಸ್ಥಳ'}
                        </span>
                        <span className="font-bold">: {getLocation()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Education & Career Stack */}
                  <div className="flex flex-col gap-3">
                    {/* Education (Dynamic Array) */}
                    <div className="bg-[#f6f2e9] text-[#0c1a2e] p-3.5 rounded-2xl border border-[#d4af37]/40 shadow-md flex-1">
                      <div className="flex items-center gap-2 pb-1.5 mb-2 border-b border-[#0c1a2e]/10">
                        <div className="w-6 h-6 rounded-full bg-[#0c1a2e] text-[#f6e8b1] flex items-center justify-center text-xs">
                          🎓
                        </div>
                        <h4 className="font-bold text-sm font-cinzel">
                          {selectedLang === 'hi' ? 'शिक्षा' : selectedLang === 'en' ? 'Education' : 'ಶಿಕ್ಷಣ'}
                        </h4>
                      </div>
                      <div className="text-[11px] space-y-1">
                        {getEduList().map((degreeText, i) => (
                          <div key={i}>
                            <span className="font-bold text-[#0c1a2e]">
                              • {degreeText}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Profession (Dynamic) */}
                    <div className="bg-[#f6f2e9] text-[#0c1a2e] p-3.5 rounded-2xl border border-[#d4af37]/40 shadow-md flex-1">
                      <div className="flex items-center gap-2 pb-1.5 mb-2 border-b border-[#0c1a2e]/10">
                        <div className="w-6 h-6 rounded-full bg-[#0c1a2e] text-[#f6e8b1] flex items-center justify-center text-xs">
                          💼
                        </div>
                        <h4 className="font-bold text-sm font-cinzel">
                          {selectedLang === 'hi' ? 'व्यवसाय' : selectedLang === 'en' ? 'Profession' : 'ವೃತ್ತಿ'}
                        </h4>
                      </div>
                      <div className="text-[11px] space-y-1">
                        <div className="font-bold">
                          • {getRole()}
                        </div>
                        <div className="text-slate-700">
                          • {selectedLang === 'hi' ? 'वार्षिक आय' : selectedLang === 'en' ? 'Annual Income' : 'ವಾರ್ಷಿಕ ಆದಾಯ'}: {getIncome()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: Family & Horoscope Details */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Family Details (Dynamic) */}
                  <div className="bg-[#f6f2e9] text-[#0c1a2e] p-4 rounded-2xl border border-[#d4af37]/40 shadow-md">
                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#0c1a2e]/10">
                      <div className="w-6 h-6 rounded-full bg-[#0c1a2e] text-[#f6e8b1] flex items-center justify-center text-xs">
                        👥
                      </div>
                      <h4 className="font-bold text-sm font-cinzel">
                        {selectedLang === 'hi' ? 'पारिवारिक विवरण' : selectedLang === 'en' ? 'Family Details' : 'ಕುಟುಂಬದ ವಿವರಗಳು'}
                      </h4>
                    </div>

                    <div className="text-[11px] space-y-1 font-sans">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'पिता' : selectedLang === 'en' ? 'Father' : 'ತಂದೆ'}
                        </span>
                        <span className="font-bold">: {getFather()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'माता' : selectedLang === 'en' ? 'Mother' : 'ತಾಯಿ'}
                        </span>
                        <span className="font-bold">: {getMother()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'भाई' : selectedLang === 'en' ? 'Brother' : 'ಅಣ್ಣ'}
                        </span>
                        <span className="font-bold">: {getBrother()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'परिवार' : selectedLang === 'en' ? 'Family Type' : 'ಕುಟುಂಬದ ಪ್ರಕಾರ'}
                        </span>
                        <span className="font-bold">: {getFamilyType()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'मकान' : selectedLang === 'en' ? 'House' : 'ಮನೆ'}
                        </span>
                        <span className="font-bold">: {getHouse()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Horoscope Details (Dynamic) */}
                  <div className="bg-[#f6f2e9] text-[#0c1a2e] p-4 rounded-2xl border border-[#d4af37]/40 shadow-md">
                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#0c1a2e]/10">
                      <div className="w-6 h-6 rounded-full bg-[#0c1a2e] text-[#f6e8b1] flex items-center justify-center text-xs">
                        ॐ
                      </div>
                      <h4 className="font-bold text-sm font-cinzel">
                        {selectedLang === 'hi' ? 'कुंडली विवरण' : selectedLang === 'en' ? 'Horoscope Details' : 'ಜಾತಕದ ವಿವರಗಳು'}
                      </h4>
                    </div>

                    <div className="text-[11px] space-y-1 font-sans">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'राशि' : selectedLang === 'en' ? 'Rashi' : 'ರಾಶಿ'}
                        </span>
                        <span className="font-bold">: {getRashi()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'नक्षत्र' : selectedLang === 'en' ? 'Nakshatra' : 'ನಕ್ಷತ್ರ'}
                        </span>
                        <span className="font-bold">: {getNakshatra()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'गण' : selectedLang === 'en' ? 'Gana' : 'ಗಣ'}
                        </span>
                        <span className="font-bold">: {getGana()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-medium">
                          {selectedLang === 'hi' ? 'चरण' : selectedLang === 'en' ? 'Pada' : 'ಪಾದ'}
                        </span>
                        <span className="font-bold">: {getPada()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Assets Details (Dynamic) */}
                <div className="bg-[#f6f2e9] text-[#0c1a2e] px-5 py-3 rounded-2xl border border-[#d4af37]/40 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-sm font-cinzel">
                    <span className="text-[#0c1a2e]">❖</span>
                    <span>
                      {selectedLang === 'hi' ? 'संपत्ति एवं समुदाय' : selectedLang === 'en' ? 'Assets & Community' : 'ಆಸ್ತಿ ವಿವರಗಳು'}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-xs font-semibold">
                    <div>
                      🌱 {selectedLang === 'hi' ? 'कृषि भूमि' : selectedLang === 'en' ? 'Farmland' : 'ಕೃಷಿ ಭೂಮಿ'}:{' '}
                      <span className="font-bold text-[#0c1a2e]">
                        {getLand()}
                      </span>
                    </div>
                    <div>
                      👥 {selectedLang === 'hi' ? 'समुदाय' : selectedLang === 'en' ? 'Community' : 'ಜಾತಿ'}:{' '}
                      <span className="font-bold text-[#0c1a2e]">
                        {getCommunity()}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Footer Accent */}
            <div className="text-center pt-3 text-[10px] text-[#d4af37]/80 font-serif tracking-widest border-t border-[#d4af37]/20 mt-4">
              ॥ ಶುಭಮಸ್ತು • ಕಲ್ಯಾಣಮಸ್ತು • शुभमस्तु ॥
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
