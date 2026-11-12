import React, { useEffect, useRef } from 'react';

export default function ThreeBackground({ isLightMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Particles
    const PARTICLE_COUNT = 90;
    const particles = [];
    const colors = isLightMode
      ? ['rgba(180, 140, 50, 0.45)', 'rgba(212, 175, 55, 0.4)', 'rgba(190, 150, 60, 0.3)']
      : ['rgba(255, 230, 140, 0.65)', 'rgba(212, 175, 55, 0.55)', 'rgba(240, 200, 90, 0.4)'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 200, // Depth
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.2,
        size: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        sparkleSpeed: Math.random() * 0.04 + 0.01,
        sparklePhase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      angle += 0.003;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Center
      const cx = width / 2 + mouseX;
      const cy = height / 2 + mouseY;
      const fov = 400; // Focal length

      // Draw subtle rotating golden sacred geometry circles in the deep background
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.strokeStyle = isLightMode ? 'rgba(212, 175, 55, 0.06)' : 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 1.2;

      // Outer ornate rings
      ctx.beginPath();
      ctx.arc(0, 0, 320, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();

      // Sort particles by depth for correct 3D projection
      particles.sort((a, b) => b.z - a.z);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.sparklePhase += p.sparkleSpeed;

        // Wrap around bounds
        if (p.y < -height) p.y = height;
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;

        // 3D perspective projection
        const scale = fov / (fov + p.z);
        const projX = cx + p.x * scale;
        const projY = cy + p.y * scale;
        const projSize = Math.max(0.6, p.size * scale * (1 + 0.3 * Math.sin(p.sparklePhase)));

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          ctx.beginPath();
          ctx.arc(projX, projY, projSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Subtle glow for larger particles
          if (projSize > 1.8) {
            ctx.beginPath();
            ctx.arc(projX, projY, projSize * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = isLightMode ? 'rgba(212, 175, 55, 0.08)' : 'rgba(212, 175, 55, 0.12)';
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
