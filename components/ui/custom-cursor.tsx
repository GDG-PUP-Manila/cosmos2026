"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    document.documentElement.classList.add("custom-cursor-enabled");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0) scale(${
          isHovering ? 1.75 : 1
        })`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive (has pointer cursor class, is an anchor, or is a button)
      const isInteractive =
        target.classList?.contains("cursor-pointer") ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer");

      isHovering = !!isInteractive;
      
      setIsHovered((prev) => (prev !== isHovering ? isHovering : prev));
      
      // Instantly update dot scale since it's driven in onMouseMove, but mouse might not move
      if (cursorDotRef.current) {
         cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0) scale(${isHovering ? 1.75 : 1})`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-cursor-enabled,
        .custom-cursor-enabled * {
          cursor: none !important;
        }
      `}} />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999999] h-8 w-8 will-change-transform drop-shadow-[0_0_8px_rgba(155,231,255,0.6)]"
      >
        {isHovered && (
          <>
            <div 
              className="absolute inset-[-20%] -z-10 rounded-full opacity-40 mix-blend-screen animate-ping" 
              style={{ 
                animationDuration: "2s", 
                animationDelay: "0s", 
                background: "radial-gradient(circle, transparent 30%, rgba(135,206,250,0.6) 65%, rgba(255,255,255,0.9) 85%, transparent 100%)" 
              }} 
            />
            <div 
              className="absolute inset-[-20%] -z-10 rounded-full opacity-40 mix-blend-screen animate-ping" 
              style={{ 
                animationDuration: "2s", 
                animationDelay: "0.6s", 
                background: "radial-gradient(circle, transparent 30%, rgba(135,206,250,0.6) 65%, rgba(255,255,255,0.9) 85%, transparent 100%)" 
              }} 
            />
            <div 
              className="absolute inset-[-20%] -z-10 rounded-full opacity-40 mix-blend-screen animate-ping" 
              style={{ 
                animationDuration: "2s", 
                animationDelay: "1.2s", 
                background: "radial-gradient(circle, transparent 30%, rgba(135,206,250,0.6) 65%, rgba(255,255,255,0.9) 85%, transparent 100%)" 
              }} 
            />
          </>
        )}
        <Image
          src="/assets/CIRBY.png"
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
