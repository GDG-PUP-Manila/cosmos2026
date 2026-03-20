"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerMedia = window.matchMedia("(pointer: coarse)");
    let lenis: Lenis | null = null;

    const initLenis = () => {
      if (reducedMotionMedia.matches) return;

      const isTouchDevice = coarsePointerMedia.matches;

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: true,
        duration: isTouchDevice ? 0.95 : 1.2,
        touchMultiplier: isTouchDevice ? 1.08 : 1,
        wheelMultiplier: isTouchDevice ? 0.95 : 1,
      });
    };

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = null;
    };

    const handleSettingsChange = () => {
      destroyLenis();
      initLenis();
    };

    initLenis();
    reducedMotionMedia.addEventListener("change", handleSettingsChange);
    coarsePointerMedia.addEventListener("change", handleSettingsChange);

    return () => {
      reducedMotionMedia.removeEventListener("change", handleSettingsChange);
      coarsePointerMedia.removeEventListener("change", handleSettingsChange);
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}