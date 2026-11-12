import React, { useState, useRef } from 'react';
import { Camera, ZoomIn, Move, RefreshCw, Check, X, Upload } from 'lucide-react';

export default function PhotoEditorModal({ isOpen, onClose, photoSettings, onSavePhoto, isLightMode }) {
  const [tempPhoto, setTempPhoto] = useState({ ...photoSettings });
  const [previewUrl, setPreviewUrl] = useState(photoSettings.url);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Please upload a valid JPG, PNG, or WebP image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (result) {
        setPreviewUrl(result);
        setTempPhoto((prev) => ({
          ...prev,
          url: result,
          zoom: 1,
          positionX: 50,
          positionY: 20,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSavePhoto(tempPhoto);
    onClose();
  };

  const handleReset = () => {
    const defaultSettings = {
      url: '/rahul_portrait.jpg',
      zoom: 1.05,
      positionX: 50,
      positionY: 20,
      rotation: 0,
    };
    setPreviewUrl('/rahul_portrait.jpg');
    setTempPhoto(defaultSettings);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/30' : 'bg-black/85'
      }`}
    >
      <div
        className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto border transition-all ${
          isLightMode
            ? 'bg-[#fbf9f4] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/15'
            : 'bg-[#09182d] border border-[#d4af37]/40 text-slate-100'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between pb-4 border-b ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <div>
            <h3
              className={`text-xl sm:text-2xl font-cinzel font-bold flex items-center gap-2 ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
              }`}
            >
              <Camera className="w-6 h-6 text-[#d4af37]" />
              <span>ಭಾವಚಿತ್ರ ಜೋಡಣೆ • Photo Settings</span>
            </h3>
            <p
              className={`text-xs sm:text-sm mt-1 font-medium ${
                isLightMode ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Upload your high-res portrait, adjust zoom and center position for perfection.
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

        {/* Live Preview Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
          {/* Framed Live Preview */}
          <div className="flex flex-col items-center">
            <span
              className={`text-xs uppercase tracking-widest font-bold mb-2 ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
              }`}
            >
              ಪ್ರತ್ಯಕ್ಷ ಮುನ್ನೋಟ • Live Hero Frame
            </span>
            <div
              className={`${
                isLightMode ? 'gold-frame-3d-light' : 'gold-frame-3d'
              } w-56 sm:w-64 h-80 sm:h-96 relative overflow-hidden group`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#071322] relative">
                <img
                  src={previewUrl}
                  alt="Rahul Suresh Balabatti"
                  style={{
                    transform: `scale(${tempPhoto.zoom}) rotate(${tempPhoto.rotation}deg)`,
                    objectPosition: `${tempPhoto.positionX}% ${tempPhoto.positionY}%`,
                    transition: 'transform 0.15s ease-out',
                  }}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Corner Golden Accent inside preview */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/70" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/70" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/70" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/70" />
              </div>
            </div>
            <p
              className={`text-xs mt-3 text-center font-medium ${
                isLightMode ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Original aspect ratio preserved. Zero distortion.
            </p>
          </div>

          {/* Controls */}
          <div
            className={`space-y-5 p-5 rounded-2xl border ${
              isLightMode
                ? 'bg-white border-slate-200 shadow-sm'
                : 'bg-[#05101f]/70 border-white/5'
            }`}
          >
            {/* File Upload Button */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] hover:opacity-95 text-[#061220] font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 transition-all duration-200 cursor-pointer"
              >
                <Upload className="w-5 h-5 text-[#061220]" />
                <span>ಹೊಸ ಭಾವಚಿತ್ರ ಅಪ್ಲೋಡ್ • Upload New Photo</span>
              </button>
              <p
                className={`text-[11px] text-center mt-1.5 font-medium ${
                  isLightMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Supports JPG, JPEG, PNG, WebP
              </p>
            </div>

            {/* Zoom Slider */}
            <div>
              <div
                className={`flex justify-between items-center text-xs mb-1.5 font-bold ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1.5 text-[#855b0a]">
                  <ZoomIn className="w-4 h-4 text-[#d4af37]" /> ಗಾತ್ರ / Zoom:
                </span>
                <span className="font-mono">{Math.round(tempPhoto.zoom * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.5"
                step="0.02"
                value={tempPhoto.zoom}
                onChange={(e) =>
                  setTempPhoto((prev) => ({ ...prev, zoom: parseFloat(e.target.value) }))
                }
                className="w-full accent-[#d4af37] bg-slate-300 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Vertical Position (Y) */}
            <div>
              <div
                className={`flex justify-between items-center text-xs mb-1.5 font-bold ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1.5 text-[#855b0a]">
                  <Move className="w-4 h-4 text-[#d4af37]" /> ಲಂಬ ಸ್ಥಾನ / Vertical (Y):
                </span>
                <span className="font-mono">{tempPhoto.positionY}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={tempPhoto.positionY}
                onChange={(e) =>
                  setTempPhoto((prev) => ({ ...prev, positionY: parseInt(e.target.value, 10) }))
                }
                className="w-full accent-[#d4af37] bg-slate-300 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Horizontal Position (X) */}
            <div>
              <div
                className={`flex justify-between items-center text-xs mb-1.5 font-bold ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1.5 text-[#855b0a]">
                  <Move className="w-4 h-4 text-[#d4af37]" /> ಸಮತಲ ಸ್ಥಾನ / Horizontal (X):
                </span>
                <span className="font-mono">{tempPhoto.positionX}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={tempPhoto.positionX}
                onChange={(e) =>
                  setTempPhoto((prev) => ({ ...prev, positionX: parseInt(e.target.value, 10) }))
                }
                className="w-full accent-[#d4af37] bg-slate-300 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Quick Reset */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleReset}
                className={`text-xs flex items-center gap-1.5 transition-colors font-bold ${
                  isLightMode ? 'text-amber-800 hover:text-amber-950' : 'text-slate-400 hover:text-[#d4af37]'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" /> ಮೂಲ ಫೋಟೋ ಮರುಸ್ಥಾಪಿಸಿ (Reset Default)
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className={`flex items-center justify-end gap-3 mt-8 pt-4 border-t ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl border text-sm font-bold transition-colors ${
              isLightMode
                ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'border-white/20 text-slate-300 hover:bg-white/5'
            }`}
          >
            ರದ್ದುಮಾಡಿ • Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#061220] font-bold text-sm shadow-lg hover:brightness-110 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>ಉಳಿಸಿ ಅನ್ವಯಿಸಿ • Save & Apply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
