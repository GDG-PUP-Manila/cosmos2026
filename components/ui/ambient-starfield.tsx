"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  depth: number;
  phase: number;
  speed: number;
};

type AmbientStarfieldProps = {
  className?: string;
  density?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function createStars(width: number, height: number, density: number): Star[] {
  const area = width * height;
  const count = clamp(Math.round((area / 10500) * density), 48, 2000);
  const stars: Star[] = [];

  for (let i = 0; i < count; i += 1) {
    const depth = Math.random();
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.5 + Math.random() * 1.9,
      vx: (Math.random() - 0.5) * 0.09,
      vy: (Math.random() - 0.5) * 0.09,
      alpha: 0.2 + Math.random() * 0.65,
      depth,
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 1.8,
    });
  }

  return stars;
}

export default function AmbientStarfield({ className, density = 1.22 }: AmbientStarfieldProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let frame = 0;
    let isVisible = true;

    const pointer = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      inside: false,
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const newWidth = Math.max(1, rect.width);
      const newHeight = Math.max(1, rect.height);
      
      if (newWidth === width && newHeight === height && stars.length > 0) return;

      width = newWidth;
      height = newHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      if (stars.length === 0) {
        stars = createStars(width, height, density);
        pointer.x = width * 0.5;
        pointer.y = height * 0.5;
        pointer.tx = pointer.x;
        pointer.ty = pointer.y;
      }
      
      drawFrame();
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      pointer.inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      pointer.tx = clamp(x, 0, rect.width);
      pointer.ty = clamp(y, 0, rect.height);
    };

    const onPointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
      if (prefersReducedMotion && isVisible) {
        drawFrame();
      }
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      if (prefersReducedMotion && isVisible) {
        drawFrame();
      }
    };

    const drawFrame = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const ease = pointer.inside ? 0.13 : 0.045;

      if (!pointer.inside) {
        pointer.tx = centerX;
        pointer.ty = centerY;
      }

      pointer.x += (pointer.tx - pointer.x) * ease;
      pointer.y += (pointer.ty - pointer.y) * ease;

      const nx = width > 0 ? pointer.x / width - 0.5 : 0;
      const ny = height > 0 ? pointer.y / height - 0.5 : 0;

      for (const star of stars) {
        if (!prefersReducedMotion) {
          star.x += star.vx;
          star.y += star.vy;
          star.phase += 0.012 * star.speed;
        }

        if (star.x < -2) star.x = width + 2;
        if (star.x > width + 2) star.x = -2;
        if (star.y < -2) star.y = height + 2;
        if (star.y > height + 2) star.y = -2;

        const dx = pointer.x - star.x;
        const dy = pointer.y - star.y;
        const dist = Math.hypot(dx, dy) || 1;
        const influence = pointer.inside ? Math.max(0, 1 - dist / 190) : 0;
        const repel = influence * 16;
        const parallax = 16 * star.depth;
        const drawX = star.x + nx * parallax - (dx / dist) * repel;
        const drawY = star.y + ny * parallax - (dy / dist) * repel;

        const twinkle = 0.52 + Math.sin(star.phase + frame * 0.003) * 0.48;
        const alpha = clamp(star.alpha * (0.45 + twinkle * 0.95 + influence * 0.75), 0.05, 0.98);
        const size = star.size * (1 + influence * 0.65);

        context.fillStyle = `rgba(187, 220, 255, ${alpha})`;
        if (size < 1.4) {
          context.fillRect(drawX - size, drawY - size, size * 2, size * 2);
        } else {
          context.beginPath();
          context.arc(drawX, drawY, size, 0, Math.PI * 2);
          context.fill();
        }

        if (size > 1.4) {
          context.beginPath();
          context.fillStyle = `rgba(133, 179, 255, ${alpha * 0.22})`;
          context.arc(drawX, drawY, size * 2.25, 0, Math.PI * 2);
          context.fill();
        }
      }

    };

    const stop = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const animate = () => {
      if (!isVisible) {
        rafId = 0;
        return;
      }

      drawFrame();

      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const start = () => {
      if (rafId || !isVisible) return;
      rafId = window.requestAnimationFrame(animate);
    };

    resize();
    drawFrame();
    start();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
        if (isVisible) {
          drawFrame();
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [density]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
