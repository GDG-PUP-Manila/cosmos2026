"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const cursorState = useRef({ x: -100, y: -100, isHovering: false });
  const [shouldShowPing, setShouldShowPing] = useState(true);

  useEffect(() => {
    // Check performance/preference once on mount
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const concurrency = navigator.hardwareConcurrency || 4;
    // @ts-ignore
    const ram = navigator.deviceMemory || 4;
    const isLowTier = reducedMotion || (concurrency <= 4 && ram <= 4);

    if (isLowTier) {
      setShouldShowPing(false);
    }
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(hover: none)").matches
    )
      return;

    document.documentElement.classList.add("custom-cursor-enabled");

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      cursorState.current.x = e.clientX;
      cursorState.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive
      const isInteractive =
        target.classList?.contains("cursor-pointer") ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer");

      cursorState.current.isHovering = !!isInteractive;
      setIsHovered(!!isInteractive);
    };

    let currentScale = 1;

    const animate = () => {
      if (cursorDotRef.current) {
        const { x, y, isHovering } = cursorState.current;
        const targetScale = isHovering ? 1.75 : 1;
        // Smoothly interpolate scale (lerp)
        currentScale += (targetScale - currentScale) * 0.15;

        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0) scale(${currentScale})`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-cursor-enabled,
        .custom-cursor-enabled * {
          cursor: none !important;
        }
      `,
        }}
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999999] h-8 w-8 will-change-transform transition-none duration-0"
        style={{
          filter: "drop-shadow(0 0 2px rgba(155,231,255,0.4))",
          backfaceVisibility: "hidden",
          transform: "translate3d(-100px, -100px, 0)", // Initial position off-screen
        }}
      >
        {isHovered && shouldShowPing && (
          <div
            className="absolute inset-[-10%] -z-10 rounded-full opacity-20 animate-ping"
            style={{
              animationDuration: "1.5s",
              background: "rgba(135,206,250,0.4)",
            }}
          />
        )}
        <Image
          src="/assets/CIRBY.webp"
          alt="Cursor"
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </div>
    </>
  );
}
