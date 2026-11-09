import React, { useEffect, useRef } from 'react';

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseRadius: number;
  highlight: string;
}

export const InteractiveBallpit: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 90,
      active: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleMouseLeave);

    // Color palette based on KLP Academy gold, slate, and pearl
    const colorPalette = [
      { fill: '#D4AF37', highlight: '#FFF5D1' }, // Royal Gold
      { fill: '#E5C158', highlight: '#FFFFEB' }, // Bright Marigold
      { fill: '#0F172A', highlight: '#334155' }, // Deep Slate
      { fill: '#1E293B', highlight: '#475569' }, // Midnight Navy
      { fill: '#3A0F34', highlight: '#7A226F' }, // Royal Aubergine
      { fill: '#F59E0B', highlight: '#FEF3C7' }, // Amber
    ];

    const ballCount = window.innerWidth < 640 ? 22 : 36;
    const balls: Ball[] = [];

    for (let i = 0; i < ballCount; i++) {
      const baseRadius = 10 + Math.random() * 20;
      const palette = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      balls.push({
        x: Math.random() * (width - baseRadius * 2) + baseRadius,
        y: Math.random() * (height - baseRadius * 2) + baseRadius,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: baseRadius,
        baseRadius,
        color: palette.fill,
        highlight: palette.highlight,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near balls with faint golden lines
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const dx = balls[i].x - balls[j].x;
          const dy = balls[i].y - balls[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.18 * (1 - dist / 90)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & render balls
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Velocity & bounce boundaries
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx *= -0.9;
        } else if (b.x + b.radius > width) {
          b.x = width - b.radius;
          b.vx *= -0.9;
        }

        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy *= -0.9;
        } else if (b.y + b.radius > height) {
          b.y = height - b.radius;
          b.vy *= -0.9;
        }

        // Mouse cursor interaction (repulsion + slight swell)
        if (mouse.active) {
          const mdx = b.x - mouse.x;
          const mdy = b.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.radius + b.radius && mdist > 0) {
            const force = (mouse.radius + b.radius - mdist) / (mouse.radius + b.radius);
            const angle = Math.atan2(mdy, mdx);
            b.vx += Math.cos(angle) * force * 1.4;
            b.vy += Math.sin(angle) * force * 1.4;
          }
        }

        // Slight speed damping to prevent infinite acceleration
        b.vx *= 0.985;
        b.vy *= 0.985;

        // Ensure minimum motion
        if (Math.abs(b.vx) < 0.2) b.vx += (Math.random() - 0.5) * 0.4;
        if (Math.abs(b.vy) < 0.2) b.vy += (Math.random() - 0.5) * 0.4;

        // Draw 3D Shaded Sphere
        const gradient = ctx.createRadialGradient(
          b.x - b.radius * 0.35,
          b.y - b.radius * 0.35,
          b.radius * 0.1,
          b.x,
          b.y,
          b.radius
        );
        gradient.addColorStop(0, b.highlight);
        gradient.addColorStop(0.5, b.color);
        gradient.addColorStop(1, '#000000');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden pointer-events-auto ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
};
