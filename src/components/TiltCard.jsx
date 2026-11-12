import React, { useRef, useState } from 'react';

export default function TiltCard({
  children,
  className = '',
  glare = true,
  maxTilt = 8,
  isIvory = false,
  onClick,
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const rotateX = ((yPercent - 0.5) * -2 * maxTilt).toFixed(2);
    const rotateY = ((xPercent - 0.5) * 2 * maxTilt).toFixed(2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.018, 1.018, 1.018)`,
      transition: 'transform 0.08s ease-out',
    });

    if (glare) {
      setGlarePos({
        x: (xPercent * 100).toFixed(1),
        y: (yPercent * 100).toFixed(1),
        opacity: isIvory ? 0.25 : 0.18,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
      className={`relative preserve-3d rounded-2xl overflow-hidden transition-all duration-300 ${
        isIvory
          ? 'bg-[#ffffff] text-[#0f1f38] border-2 border-[#d4af37]/45 shadow-[0_12px_32px_rgba(180,130,40,0.12)] hover:border-[#b8860b] hover:shadow-[0_16px_36px_rgba(180,130,40,0.22)]'
          : 'bg-[#08172c]/90 text-slate-100 border border-[#d4af37]/25 shadow-2xl shadow-black/50 hover:border-[#d4af37]/60 backdrop-blur-md'
      } ${className}`}
    >
      {/* Dynamic Specular Shimmer */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: isIvory
              ? `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(212, 175, 55, ${glarePos.opacity}), transparent 75%)`
              : `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 235, 170, ${glarePos.opacity}), transparent 75%)`,
          }}
        />
      )}

      {/* Subtle Golden Top Border Highlight */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent ${
          isIvory ? 'opacity-90' : 'opacity-70'
        }`}
      />

      {/* Card Content with 3D Pop */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
