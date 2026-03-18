"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    document.documentElement.classList.add("custom-cursor-enabled");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0) scale(${
          isHovering ? 1.25 : 1
        })`;
      }
    };

    const animateLoop = () => {
      // Lerp for smooth trailing outline
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate3d(-50%, -50%, 0) scale(${
          isHovering ? 1.25 : 1
        })`;
      }

      requestAnimationFrame(animateLoop);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive (has pointer cursor, is an anchor, or is a button)
      const isInteractive =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");

      isHovering = !!isInteractive;
      
      if (cursorOutlineRef.current) {
        if (isHovering) {
          cursorOutlineRef.current.style.borderColor = "rgba(155, 231, 255, 0.8)";
          cursorOutlineRef.current.style.backgroundColor = "rgba(155, 231, 255, 0.1)";
        } else {
          cursorOutlineRef.current.style.borderColor = "rgba(122, 162, 255, 0.4)";
          cursorOutlineRef.current.style.backgroundColor = "rgba(122, 162, 255, 0.05)";
        }
      }
      // Instantly update dot scale since it's driven in onMouseMove, but mouse might not move
      if (cursorDotRef.current) {
         cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0) scale(${isHovering ? 1.75 : 1})`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    const frameId = requestAnimationFrame(animateLoop);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999999] hidden h-8 w-8 transition-transform duration-100 ease-out will-change-transform lg:block drop-shadow-[0_0_8px_rgba(155,231,255,0.6)]"
      >
        <Image
          src="/assets/CIRBY.png"
          alt="Cursor"
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <div
        ref={cursorOutlineRef}
        className="pointer-events-none fixed left-0 top-0 z-[999998] hidden h-10 w-10 rounded-full border border-[rgba(122,162,255,0.4)] bg-[rgba(122,162,255,0.05)] mix-blend-screen transition-colors duration-200 ease-out will-change-transform lg:block"
      />
    </>
  );
}
