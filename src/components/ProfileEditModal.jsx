import React, { useState, useEffect } from 'react';
import { X, Check, RefreshCw, Edit, User, GraduationCap, Briefcase, Users, Landmark, Moon, HeartHandshake, Phone } from 'lucide-react';
import { initialProfileData } from '../data/profileData';

export default function ProfileEditModal({ isOpen, onClose, profile, onSaveProfile, isLightMode }) {
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(profile)));
  const [activeTab, setActiveTab] = useState('personal');

  // Synchronize with current profile data whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(JSON.parse(JSON.stringify(profile)));
    }
  }, [isOpen, profile]);

  if (!isOpen) return null;

  const handlePersonalChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  const handleProfessionChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      profession: { ...prev.profession, [field]: value },
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setFormData((prev) => {
      const newEdu = [...prev.education];
      newEdu[index] = { ...newEdu[index], [field]: value };
      return { ...prev, education: newEdu };
    });
  };

  const handleFamilyChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      family: { ...prev.family, [field]: value },
    }));
  };

  const handleAssetsChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      assets: { ...prev.assets, [field]: value },
    }));
  };

  const handleHoroscopeChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      horoscope: { ...prev.horoscope, [field]: value },
    }));
  };

  const handlePreferencesChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [field]: value },
    }));
  };

  const handleContactChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  const handleSave = () => {
    onSaveProfile(formData);
    onClose();
  };

  const handleResetToDefault = () => {
    if (window.confirm('ರಾಹುಲ್ ಅವರ ಅಧಿಕೃತ ವಿವರಗಳಿಗೆ ಮರುಹೊಂದಿಸಲು ಬಯಸುವಿರಾ? (Reset to official details?)')) {
      const defaultData = JSON.parse(JSON.stringify(initialProfileData));
      setFormData(defaultData);
      onSaveProfile(defaultData);
    }
  };

  const tabs = [
    { id: 'personal', label: 'ವೈಯಕ್ತಿಕ (Personal)', icon: User },
    { id: 'education', label: 'ಶಿಕ್ಷಣ (Education)', icon: GraduationCap },
    { id: 'profession', label: 'ಉದ್ಯೋಗ (Career)', icon: Briefcase },
    { id: 'family', label: 'ಕುಟುಂಬ (Family)', icon: Users },
    { id: 'assets', label: 'ಆಸ್ತಿ (Assets)', icon: Landmark },
    { id: 'horoscope', label: 'ಜಾತಕ (Horoscope)', icon: Moon },
    { id: 'preferences', label: 'ನಿರೀಕ್ಷೆಗಳು (Preferences)', icon: HeartHandshake },
    { id: 'contact', label: 'ಸಂಪರ್ಕ (Contact)', icon: Phone },
  ];

  // Dynamic class helpers based on light mode
  const inputClass = isLightMode
    ? 'w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27] outline-none shadow-sm'
    : 'w-full bg-[#050f1d] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-200 focus:border-[#d4af37] outline-none';

  const labelClass = isLightMode
    ? 'text-xs text-slate-700 font-bold block mb-1'
    : 'text-xs text-slate-300 font-medium block mb-1';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/30' : 'bg-black/85'
      }`}
    >
      <div
        className={`relative w-full max-w-4xl rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[92vh] flex flex-col border transition-all ${
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
          <div>
            <h3
              className={`text-xl sm:text-2xl font-cinzel font-bold flex items-center gap-2 ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
              }`}
            >
              <Edit className="w-6 h-6 text-[#d4af37]" />
              <span>ಮಾಹಿತಿ ಸಂಪಾದನೆ • Edit & Test Profile</span>
            </h3>
            <p
              className={`text-xs mt-1 font-medium ${
                isLightMode ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Changes apply immediately to your screen & PDF download. Refreshing resets back to Rahul's original details.
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isLightMode
                ? 'hover:bg-black/5 text-slate-600 hover:text-slate-900'
                : 'hover:bg-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          className={`flex items-center gap-2 overflow-x-auto py-3 border-b shrink-0 scrollbar-none ${
            isLightMode ? 'border-slate-200' : 'border-white/5'
          }`}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#061220] shadow-md'
                    : isLightMode
                    ? 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-5 pr-1 space-y-4">
          
          {/* PERSONAL TAB */}
          {activeTab === 'personal' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ಹೆಸರು (Kannada):</label>
                <input
                  type="text"
                  value={formData.personal.fullNameKn}
                  onChange={(e) => handlePersonalChange('fullNameKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Full Name (English):</label>
                <input
                  type="text"
                  value={formData.personal.fullNameEn}
                  onChange={(e) => handlePersonalChange('fullNameEn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>नाम (Hindi):</label>
                <input
                  type="text"
                  value={formData.personal.fullNameHi}
                  onChange={(e) => handlePersonalChange('fullNameHi', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಜನ್ಮ ದಿನಾಂಕ (DOB):</label>
                <input
                  type="text"
                  value={formData.personal.dob}
                  onChange={(e) => handlePersonalChange('dob', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ವಯಸ್ಸು (Age):</label>
                <input
                  type="text"
                  value={formData.personal.ageKn}
                  onChange={(e) => handlePersonalChange('ageKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಎತ್ತರ (Height):</label>
                <input
                  type="text"
                  value={formData.personal.heightEn}
                  onChange={(e) => handlePersonalChange('heightEn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>ಮೂಲ ಸ್ಥಳ (Native Place / Address):</label>
                <input
                  type="text"
                  value={formData.personal.nativePlaceKn}
                  onChange={(e) => handlePersonalChange('nativePlaceKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>ಪ್ರಸ್ತುತ ಸ್ಥಳ (Current Location):</label>
                <input
                  type="text"
                  value={formData.personal.currentLocationKn}
                  onChange={(e) => handlePersonalChange('currentLocationKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              {formData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border space-y-3 ${
                    isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#050f1d] border-white/10'
                  }`}
                >
                  <span className="text-xs font-bold text-[#855b0a] uppercase">
                    Degree {idx + 1}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Degree Title (Kannada):</label>
                      <input
                        type="text"
                        value={edu.degreeKn}
                        onChange={(e) => handleEducationChange(idx, 'degreeKn', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Degree Title (English):</label>
                      <input
                        type="text"
                        value={edu.degreeEn}
                        onChange={(e) => handleEducationChange(idx, 'degreeEn', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PROFESSION TAB */}
          {activeTab === 'profession' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ಹುದ್ದೆ / Role (Kannada):</label>
                <input
                  type="text"
                  value={formData.profession.roleKn}
                  onChange={(e) => handleProfessionChange('roleKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Role (English):</label>
                <input
                  type="text"
                  value={formData.profession.roleEn}
                  onChange={(e) => handleProfessionChange('roleEn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ವಾರ್ಷಿಕ ಆದಾಯ / Annual CTC:</label>
                <input
                  type="text"
                  value={formData.profession.annualIncomeKn}
                  onChange={(e) => handleProfessionChange('annualIncomeKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಉದ್ಯೋಗ ಸ್ಥಳ (Work Location):</label>
                <input
                  type="text"
                  value={formData.profession.workLocationKn}
                  onChange={(e) => handleProfessionChange('workLocationKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {/* FAMILY TAB */}
          {activeTab === 'family' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ತಂದೆಯ ಹೆಸರು (Father):</label>
                <input
                  type="text"
                  value={formData.family.fatherNameKn}
                  onChange={(e) => handleFamilyChange('fatherNameKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ತಾಯಿಯ ಹೆಸರು (Mother):</label>
                <input
                  type="text"
                  value={formData.family.motherNameKn}
                  onChange={(e) => handleFamilyChange('motherNameKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಸಹೋದರನ ಹೆಸರು (Brother):</label>
                <input
                  type="text"
                  value={formData.family.brotherNameKn}
                  onChange={(e) => handleFamilyChange('brotherNameKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಕುಟುಂಬದ ಪ್ರಕಾರ (Family Type):</label>
                <input
                  type="text"
                  value={formData.family.familyTypeKn}
                  onChange={(e) => handleFamilyChange('familyTypeKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಮನೆ ವಿವರ (House):</label>
                <input
                  type="text"
                  value={formData.family.houseKn}
                  onChange={(e) => handleFamilyChange('houseKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {/* ASSETS TAB */}
          {activeTab === 'assets' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ಕೃಷಿ ಭೂಮಿ (Farmland):</label>
                <input
                  type="text"
                  value={formData.assets.agriculturalLandKn}
                  onChange={(e) => handleAssetsChange('agriculturalLandKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಜಾತಿ / ಸಮುದಾಯ (Community):</label>
                <input
                  type="text"
                  value={formData.assets.communityKn}
                  onChange={(e) => handleAssetsChange('communityKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {/* HOROSCOPE TAB */}
          {activeTab === 'horoscope' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ರಾಶಿ (Rashi):</label>
                <input
                  type="text"
                  value={formData.horoscope.rashiKn}
                  onChange={(e) => handleHoroscopeChange('rashiKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ನಕ್ಷತ್ರ (Nakshatra):</label>
                <input
                  type="text"
                  value={formData.horoscope.nakshatraKn}
                  onChange={(e) => handleHoroscopeChange('nakshatraKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಗಣ (Gana):</label>
                <input
                  type="text"
                  value={formData.horoscope.ganaKn}
                  onChange={(e) => handleHoroscopeChange('ganaKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ಪಾದ (Pada):</label>
                <input
                  type="text"
                  value={formData.horoscope.padaKn}
                  onChange={(e) => handleHoroscopeChange('padaKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {/* PREFERENCES TAB */}
          {activeTab === 'preferences' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ವಯಸ್ಸು (Preferred Age):</label>
                <input
                  type="text"
                  value={formData.preferences.ageRangeKn}
                  onChange={(e) => handlePreferencesChange('ageRangeKn', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>ವಿದ್ಯಾರ್ಹತೆ (Education):</label>
                <input
                  type="text"
                  value={formData.preferences.educationKn}
                  onChange={(e) => handlePreferencesChange('educationKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className={labelClass}>ಮೊಬೈಲ್ & ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ (Mobile / WhatsApp):</label>
                <input
                  type="text"
                  value={formData.contact.phonePrimary}
                  onChange={(e) => {
                    handleContactChange('phonePrimary', e.target.value);
                    handleContactChange('whatsappNumber', e.target.value.replace(/\D/g, ''));
                  }}
                  className={`${inputClass} font-mono`}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>ವಿಳಾಸ (Address):</label>
                <textarea
                  rows={2}
                  value={formData.contact.addressKn}
                  onChange={(e) => handleContactChange('addressKn', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between pt-4 border-t shrink-0 ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <button
            onClick={handleResetToDefault}
            className={`text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isLightMode ? 'text-amber-800 hover:text-amber-950' : 'text-amber-400 hover:text-amber-300'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>ಮೂಲ ವಿವರಗಳಿಗೆ ಮರುಹೊಂದಿಸಿ (Reset)</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                isLightMode
                  ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  : 'border-white/20 text-slate-300 hover:bg-white/5'
              }`}
            >
              ರದ್ದು (Cancel)
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220] font-bold text-xs shadow-lg hover:brightness-110 flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>ಉಳಿಸಿ (Save & Apply)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
