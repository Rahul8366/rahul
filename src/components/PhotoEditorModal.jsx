import React, { useState, useRef } from 'react';
import { Camera, ZoomIn, Move, RefreshCw, Check, X, Upload, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export default function PhotoEditorModal({
  isOpen,
  onClose,
  photoSettings,
  photos = [],
  activePhotoIndex = 0,
  onSavePhoto,
  onSelectPhotoIndex,
  isLightMode,
}) {
  // Initialize photos list with existing photos or fallback
  const defaultPhotos = [
    {
      id: 'photo-1',
      url: '/rahul_portrait.jpg',
      zoom: 1.05,
      positionX: 50,
      positionY: 20,
      rotation: 0,
      titleKn: 'ಭಾವಚಿತ್ರ 1 • ಕಡಲತೀರ',
      titleEn: 'Portrait 1 • Beach View',
    },
    {
      id: 'photo-2',
      url: '/rahul_beach.jpg',
      zoom: 1.0,
      positionX: 50,
      positionY: 30,
      rotation: 0,
      titleKn: 'ಭಾವಚಿತ್ರ 2 • ಪೂರ್ಣ ನೋಟ',
      titleEn: 'Portrait 2 • Full Stance',
    },
    {
      id: 'photo-3',
      url: '/rahul_cropped.jpg',
      zoom: 1.1,
      positionX: 50,
      positionY: 25,
      rotation: 0,
      titleKn: 'ಭಾವಚಿತ್ರ 3 • ಕ್ಲೋಸ್-ಅಪ್',
      titleEn: 'Portrait 3 • Close-Up',
    },
  ];

  const [photoList, setPhotoList] = useState(() => {
    if (photos && photos.length > 0) return photos;
    return defaultPhotos;
  });

  const [activeIdx, setActiveIdx] = useState(activePhotoIndex ?? 0);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const currentPhoto = photoList[activeIdx] || photoList[0] || photoSettings;

  const handleUpdateCurrent = (field, val) => {
    setPhotoList((prev) => {
      const copy = [...prev];
      copy[activeIdx] = {
        ...copy[activeIdx],
        [field]: val,
      };
      return copy;
    });
  };

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
        const newPhotoItem = {
          id: 'photo-' + Date.now(),
          url: result,
          zoom: 1,
          positionX: 50,
          positionY: 20,
          rotation: 0,
          titleKn: `ಹೊಸ ಭಾವಚಿತ್ರ ${photoList.length + 1}`,
          titleEn: `Photo ${photoList.length + 1}`,
        };
        const nextList = [...photoList, newPhotoItem];
        setPhotoList(nextList);
        setActiveIdx(nextList.length - 1);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDeletePhoto = (idx) => {
    if (photoList.length <= 1) {
      alert('ಕನಿಷ್ಠ ಒಂದು ಫೋಟೋ ಇರಬೇಕು (At least one photo is required).');
      return;
    }
    const nextList = photoList.filter((_, i) => i !== idx);
    setPhotoList(nextList);
    setActiveIdx(Math.max(0, activeIdx - 1));
  };

  const handleSave = () => {
    if (onSavePhoto) {
      onSavePhoto({
        photos: photoList,
        activePhotoIndex: activeIdx,
        photo: photoList[activeIdx],
      });
    }
    if (onSelectPhotoIndex) {
      onSelectPhotoIndex(activeIdx);
    }
    onClose();
  };

  const handleReset = () => {
    setPhotoList(defaultPhotos);
    setActiveIdx(0);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-md transition-colors ${
        isLightMode ? 'bg-amber-950/30' : 'bg-black/85'
      }`}
    >
      <div
        className={`relative w-full max-w-3xl rounded-3xl p-5 sm:p-7 shadow-2xl max-h-[92vh] overflow-y-auto border transition-all ${
          isLightMode
            ? 'bg-[#fbf9f4] border-2 border-[#c59b27]/60 text-slate-900 shadow-amber-950/15'
            : 'bg-[#09182d] border border-[#d4af37]/40 text-slate-100'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between pb-3.5 border-b ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <div>
            <h3
              className={`text-xl sm:text-2xl font-cinzel font-bold flex items-center gap-2 ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#f6e8b1]'
              }`}
            >
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />
              <span>ಭಾವಚಿತ್ರ ಗ್ಯಾಲರಿ & ಜೋಡಣೆ • Photo Gallery & Settings</span>
            </h3>
            <p
              className={`text-xs sm:text-sm mt-0.5 font-medium ${
                isLightMode ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Select below to switch, upload new photos, or adjust 3D zoom and position.
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
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* PHOTO SELECTOR CAROUSEL BAR (ಕೆಳಗೆ ರೌಂಡ್ ಆಪ್ಷನ್) */}
        <div className="mt-4 pt-1">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
              }`}
            >
              ಗ್ಯಾಲರಿ ಫೋಟೋಗಳು • Select Photo to Edit / Display ({photoList.length}):
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              Click circle to switch active photo
            </span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto py-2 px-1">
            {photoList.map((p, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <div key={p.id || idx} className="relative group shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'ring-4 ring-[#d4af37] ring-offset-2 scale-105 shadow-xl shadow-amber-500/40 border-2 border-white'
                        : 'opacity-65 hover:opacity-100 hover:scale-105 border-2 border-slate-400/40'
                    }`}
                  >
                    <img src={p.url} alt="" className="w-full h-full object-cover select-none" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#d4af37]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white drop-shadow-md" />
                      </div>
                    )}
                  </button>

                  {/* Delete button for extra photos (keep at least 1) */}
                  {photoList.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePhoto(idx);
                      }}
                      title="Delete this photo"
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-md cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}

            {/* Upload New Photo Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed flex flex-col items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-md ${
                isLightMode
                  ? 'border-[#c59b27] bg-[#f8f3e9] text-[#855b0a] hover:bg-[#faebd0]'
                  : 'border-[#d4af37]/80 bg-gradient-to-tr from-[#d4af37]/20 to-[#aa771c]/10 text-[#f6e8b1] hover:from-[#d4af37]/35 hover:to-[#aa771c]/25'
              }`}
              title="Upload New Photo"
            >
              <Plus className="w-5 h-5 text-[#d4af37]" />
              <span className="text-[9px] font-bold mt-0.5">Add</span>
            </button>
          </div>
        </div>

        {/* Live Preview & Adjustment Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 items-center">
          {/* Framed Live Preview */}
          <div className="flex flex-col items-center">
            <span
              className={`text-xs uppercase tracking-widest font-bold mb-2 ${
                isLightMode ? 'text-[#855b0a]' : 'text-[#d4af37]'
              }`}
            >
              ಪ್ರತ್ಯಕ್ಷ ಮುನ್ನೋಟ • Live 3D Preview (#{activeIdx + 1})
            </span>
            <div
              className={`${
                isLightMode ? 'gold-frame-3d-light' : 'gold-frame-3d'
              } w-52 sm:w-60 h-72 sm:h-84 relative overflow-hidden`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#071322] relative">
                <img
                  src={currentPhoto.url}
                  alt="Rahul Suresh Balabatti"
                  style={{
                    transform: `scale(${currentPhoto.zoom || 1}) rotate(${currentPhoto.rotation || 0}deg)`,
                    objectPosition: `${currentPhoto.positionX ?? 50}% ${currentPhoto.positionY ?? 20}%`,
                    transition: 'transform 0.1s ease-out',
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
          </div>

          {/* Controls */}
          <div
            className={`space-y-4 p-5 rounded-2xl border ${
              isLightMode
                ? 'bg-white border-slate-200 shadow-sm'
                : 'bg-[#05101f]/70 border-white/5'
            }`}
          >
            {/* Hidden File Input */}
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
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] hover:opacity-95 text-[#061220] font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#061220]" />
              <span>ಹೊಸ ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿ • Upload New Photo</span>
            </button>

            {/* Zoom Slider */}
            <div>
              <div
                className={`flex justify-between items-center text-xs mb-1 font-bold ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1.5 text-[#855b0a]">
                  <ZoomIn className="w-4 h-4 text-[#d4af37]" /> ಗಾತ್ರ / Zoom:
                </span>
                <span className="font-mono">{Math.round((currentPhoto.zoom || 1) * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.5"
                step="0.02"
                value={currentPhoto.zoom || 1}
                onChange={(e) => handleUpdateCurrent('zoom', parseFloat(e.target.value))}
                className="w-full accent-[#d4af37] bg-slate-300 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Vertical Position (Y) */}
            <div>
              <div
                className={`flex justify-between items-center text-xs mb-1 font-bold ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1.5 text-[#855b0a]">
                  <Move className="w-4 h-4 text-[#d4af37]" /> ಲಂಬ ಸ್ಥಾನ / Vertical (Y):
                </span>
                <span className="font-mono">{currentPhoto.positionY ?? 20}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={currentPhoto.positionY ?? 20}
                onChange={(e) => handleUpdateCurrent('positionY', parseInt(e.target.value, 10))}
                className="w-full accent-[#d4af37] bg-slate-300 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Horizontal Position (X) */}
            <div>
              <div
                className={`flex justify-between items-center text-xs mb-1 font-bold ${
                  isLightMode ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1.5 text-[#855b0a]">
                  <Move className="w-4 h-4 text-[#d4af37]" /> ಸಮತಲ ಸ್ಥಾನ / Horizontal (X):
                </span>
                <span className="font-mono">{currentPhoto.positionX ?? 50}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={currentPhoto.positionX ?? 50}
                onChange={(e) => handleUpdateCurrent('positionX', parseInt(e.target.value, 10))}
                className="w-full accent-[#d4af37] bg-slate-300 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Quick Reset */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={handleReset}
                className={`text-xs flex items-center gap-1.5 transition-colors font-bold cursor-pointer ${
                  isLightMode ? 'text-amber-800 hover:text-amber-950' : 'text-slate-400 hover:text-[#d4af37]'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" /> ಮೂಲ ಗ್ಯಾಲರಿ ಮರುಸ್ಥಾಪಿಸಿ (Reset Default 3 Photos)
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className={`flex items-center justify-end gap-3 mt-6 pt-4 border-t ${
            isLightMode ? 'border-[#c59b27]/25' : 'border-[#d4af37]/20'
          }`}
        >
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl border text-sm font-bold transition-colors cursor-pointer ${
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
