"use client";

import { type PointerEvent as ReactPointerEvent, type ReactNode, useEffect, useRef } from "react";

type ParallaxTiltProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  hoverScale?: number;
  perspective?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function ParallaxTilt({
  children,
  className,
  maxTilt = 9,
  hoverScale = 1.015,
  perspective = 1200,
}: ParallaxTiltProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);
  const prefersReducedMotionRef = useRef(false);
  const finePointerRef = useRef(true);
  const stateRef = useRef({
    rx: 0,
    ry: 0,
    tx: 0,
    ty: 0,
    scale: 1,
    tScale: 1,
  });

  const applyTransform = () => {
    const element = elementRef.current;
    if (!element) return;

    const { rx, ry, scale } = stateRef.current;
    element.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg) scale(${scale.toFixed(4)})`;
  };

  const animate = () => {
    const state = stateRef.current;

    state.rx += (state.tx - state.rx) * 0.16;
    state.ry += (state.ty - state.ry) * 0.16;
    state.scale += (state.tScale - state.scale) * 0.14;

    applyTransform();

    const moving =
      Math.abs(state.rx - state.tx) > 0.01 ||
      Math.abs(state.ry - state.ty) > 0.01 ||
      Math.abs(state.scale - state.tScale) > 0.001;

    if (moving) {
      rafRef.current = window.requestAnimationFrame(animate);
      return;
    }

    rafRef.current = 0;
  };

  const requestAnimation = () => {
    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");

    prefersReducedMotionRef.current = motionQuery.matches;
    finePointerRef.current = pointerQuery.matches;

    const onMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = event.matches;
    };

    const onPointerChange = (event: MediaQueryListEvent) => {
      finePointerRef.current = event.matches;
    };

    motionQuery.addEventListener("change", onMotionChange);
    pointerQuery.addEventListener("change", onPointerChange);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      pointerQuery.removeEventListener("change", onPointerChange);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handlePointerEnter = () => {
    if (prefersReducedMotionRef.current || !finePointerRef.current) return;
    stateRef.current.tScale = hoverScale;
    requestAnimation();
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotionRef.current || !finePointerRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const nx = clamp(px * 2 - 1, -1, 1);
    const ny = clamp(py * 2 - 1, -1, 1);

    stateRef.current.ty = nx * maxTilt;
    stateRef.current.tx = -ny * maxTilt;
    stateRef.current.tScale = hoverScale;
    requestAnimation();
  };

  const handlePointerLeave = () => {
    stateRef.current.tx = 0;
    stateRef.current.ty = 0;
    stateRef.current.tScale = 1;
    requestAnimation();
  };

  return (
    <div
      ref={elementRef}
      className={className}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
