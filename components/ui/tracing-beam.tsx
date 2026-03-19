"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateBounds = () => {
      if (!contentRef.current || !ref.current) return;
      setContainerHeight(ref.current.offsetHeight);
      
      const articles = contentRef.current.querySelectorAll('article');
      if (articles.length > 0) {
        const last = articles[articles.length - 1] as HTMLElement;
        // Icon is at top-[6px] relative to article, size 40px -> center is 26px
        setTrackHeight(last.offsetTop + 26);
      } else {
        setTrackHeight(ref.current.offsetHeight);
      }
    };
    
    updateBounds();
    window.addEventListener("resize", updateBounds);
    const interval = setInterval(updateBounds, 1000); // Poll for late layout shifts
    
    return () => {
      window.removeEventListener("resize", updateBounds);
      clearInterval(interval);
    };
  }, []);
  
  // Track the scroll progress. The comet will act as a fixed scanner at exactly 60% of the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"], 
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // Calculate capping ratio: max progress before comet hits the center of the last icon
  const endRatio = containerHeight > 0 ? trackHeight / containerHeight : 1;
  
  // Cap the progress so the comet stops completely at the last icon!
  const clampedProgress = useTransform(springProgress, (v) => Math.min(v, endRatio));

  // The comet maps perfectly to pixels
  const beamTopPx = useTransform(clampedProgress, [0, 1], [0, containerHeight || 1000]);
  
  // Fade in the star track when it begins moving
  const opacity = useTransform(springProgress, [0, 0.02], [0, 1]);

  return (
    <div ref={ref} className={cn("relative w-full mx-auto pb-8", className)}>
      {/* Static Background Track Line - very dim before activation */}
      <div 
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[1px] bg-[linear-gradient(180deg,rgba(89,148,255,0.05),rgba(89,148,255,0.15)_15%,rgba(89,148,255,0.1)_85%,rgba(89,148,255,0.05))]"
        style={{ height: trackHeight > 0 ? trackHeight : "100%" }} 
      />
      
      {/* The Persistent Gradient Trail */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] z-10 pointer-events-none">
        <motion.div
           className="w-full bg-[linear-gradient(to_bottom,rgba(141,226,255,0)_0%,rgba(88,164,255,0.4)_20%,#8de2ff_80%,#ffffff_100%)] shadow-[0_0_15px_1px_rgba(88,164,255,0.5)]"
           style={{ 
             height: beamTopPx,
             opacity
           }}
        />
      </div>

      {/* The Shooting Star Head */}
      <motion.div
        className="absolute left-6 md:left-1/2 -ml-[3px] w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_15px_3px_#ffffff,0_0_25px_6px_#8de2ff,0_0_45px_12px_#58a4ff] z-20 pointer-events-none"
        style={{ 
          top: beamTopPx,
          opacity 
        }}
      />

      {/* Content wrapper */}
      <div ref={contentRef} className="relative z-30">{children}</div>
    </div>
  );
};
