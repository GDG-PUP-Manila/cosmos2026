"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type MouseEvent } from "react";
import AmbientStarfield from "@/components/ui/ambient-starfield";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "https://id.gdgpup.org/comingsoon" },
  { label: "FAQ", href: "#faq" },
];

/* All comets — behind content (z-[2]) */
const allComets = [
  { top: "10%", right: "7%", width: "180px", duration: "20s", delay: "-3.4s", className: "comet-trail comet-trail-lg comet-pink" },
  { top: "23%", right: "64%", width: "140px", duration: "22s", delay: "-7.2s", className: "comet-trail comet-blue" },
  { top: "60%", right: "2%", width: "160px", duration: "21s", delay: "-5.1s", className: "comet-trail comet-trail-lg comet-purple" },
  { top: "69%", right: "69%", width: "150px", duration: "23s", delay: "-9.8s", className: "comet-trail comet-green" },
  { top: "43%", right: "26%", width: "110px", duration: "24s", delay: "-4.1s", className: "comet-trail comet-trail-dim comet-yellow" },
  { top: "54%", right: "46%", width: "90px", duration: "25s", delay: "-11.3s", className: "comet-trail comet-trail-dim comet-pink" },
] as const;

/* Foreground comets — in front of content (z-[50]) */
const foregroundComets = [
  { top: "15%", right: "-10%", width: "220px", duration: "16s", delay: "-8.4s", className: "comet-trail comet-trail-lg comet-blue" },
  { top: "35%", right: "12%", width: "190px", duration: "18s", delay: "-2.2s", className: "comet-trail comet-yellow" },
  { top: "72%", right: "40%", width: "170px", duration: "19s", delay: "-13.1s", className: "comet-trail comet-trail-lg comet-pink" },
  { top: "85%", right: "-5%", width: "240px", duration: "15s", delay: "-6.8s", className: "comet-trail comet-green" },
  { top: "8%", right: "80%", width: "200px", duration: "17s", delay: "-1.1s", className: "comet-trail comet-purple" },
] as const;



const EVENT_START_TIMESTAMP = new Date("2026-03-24T09:00:00+08:00").getTime();

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdownState(nowMs: number): CountdownState {
  const remainingMs = Math.max(0, EVENT_START_TIMESTAMP - nowMs);
  const totalSeconds = Math.floor(remainingMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function formatCountdownUnit(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function HeroSection() {
  const registrationUrl = "https://gdg.community.dev/e/my7pyr/";
  const isExternalRegistrationUrl = true;

  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const isScrollingProgrammatically = useRef(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdownState(Date.now()));

    updateCountdown();
    const timerId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  const countdownItems = [
    { value: formatCountdownUnit(countdown.days), label: "DAYS" },
    { value: formatCountdownUnit(countdown.hours), label: "HOURS" },
    { value: formatCountdownUnit(countdown.minutes), label: "MINUTES" },
    { value: formatCountdownUnit(countdown.seconds), label: "SECONDS", active: true },
  ];

  const scrollToSection = (hash: string) => {
    if (!hash.startsWith("#")) return;
    const sectionId = hash.slice(1);
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const navOffsetPx = sectionId === "hero" ? 0 : 104;
    const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - navOffsetPx;

    isScrollingProgrammatically.current = true;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });

    window.history.replaceState(null, "", hash);
    
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 1000);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection("#hero");
  };

  const handleNavItemClick = (hash: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (hash.startsWith("#")) {
      event.preventDefault();
      scrollToSection(hash);
    }
  };

  const handleRegistrationClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isExternalRegistrationUrl) return;
    if (!registrationUrl.startsWith("#")) return;
    event.preventDefault();
    scrollToSection(registrationUrl);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] bg-slate-950 text-white font-sans [--cosmos-cyan:#9be7ff] [--cosmos-blue:#7aa2ff] [--cosmos-pink:#ff86d1] [--cosmos-purple:#8f7bff]"
    >
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[url('/assets/hero/BG-hero.webp')] bg-cover bg-top bg-no-repeat opacity-80 mix-blend-lighten" />
      </div>
      
      {/* 1:1 Figma gradients */}
      <div className="absolute inset-0 z-0 bg-indigo-900/20 mix-blend-overlay" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-950/10 via-gray-950/60 to-gray-950 pointer-events-none" />

      <AmbientStarfield className="z-[1] opacity-70 mix-blend-screen" density={1} />
      
      {/* Background comets — BEHIND content */}
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        {allComets.map((comet) => (
          <div
            key={`comet-${comet.top}-${comet.right}-${comet.delay}`}
            className={comet.className}
            style={{
              top: comet.top,
              right: comet.right,
              width: comet.width,
              animationDuration: comet.duration,
              animationDelay: comet.delay,
            }}
          />
        ))}
      </div>
      
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        {/* Sparky — Left mascot */}
        <div className="absolute left-[0%] top-[20%] hidden w-56 opacity-95 md:block lg:left-[7%] lg:top-[15%] lg:w-[21rem] xl:left-[9%] xl:w-[24rem] 2xl:w-[26rem]">
          <div className="relative">
            {/* Twinkling glow points BEHIND Sparky */}
            {[
              { top: "8%",  left: "32%", size: 8,  delay: "0s" },    /* Left ear tip */
              { top: "3%",  left: "54%", size: 10, delay: "0.8s" },   /* Right ear tip */
              { top: "25%", left: "75%", size: 8,  delay: "0.4s" },   /* Right cheek */
              { top: "62%", left: "18%", size: 10, delay: "1.8s" },   /* Left paw */
              { top: "78%", left: "46%", size: 7,  delay: "2.4s" },   /* Tail tip */
            ].map((glow, i) => (
              <span
                key={`sparky-glow-bg-${i}`}
                className="absolute rounded-full -z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <Image
              src="/assets/hero/sparky.webp"
              alt=""
              width={512}
              height={512}
              draggable={false}
              className="h-auto w-full astro-float-a drop-shadow-[0_0_28px_rgba(194,235,255,0.82)] relative z-0"
            />

            {/* Twinkling glow points IN FRONT of Sparky */}
            {[
              { top: "18%", left: "42%", size: 6,  delay: "1.6s" },   /* Forehead */
              { top: "30%", left: "30%", size: 7,  delay: "2.1s" },   /* Left eye */
              { top: "28%", left: "56%", size: 9,  delay: "1.2s" },   /* Right eye */
              { top: "50%", left: "48%", size: 6,  delay: "0.6s" },   /* Chin */
              { top: "70%", left: "68%", size: 8,  delay: "1.0s" },   /* Belly bottom */
            ].map((glow, i) => (
              <span
                key={`sparky-glow-fg-${i}`}
                className="absolute rounded-full z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Cirby — Right mascot */}
        <div className="absolute right-[0%] top-[31%] hidden w-56 opacity-95 md:block lg:right-[7%] lg:top-[27%] lg:w-[22rem] xl:right-[9%] xl:w-[25rem] 2xl:w-[27rem]">
          <div className="relative">
            {/* Twinkling glow points BEHIND Cirby */}
            {[
              { top: "5%",  left: "42%", size: 8,  delay: "0.3s" },   /* Cap top */
              { top: "22%", left: "18%", size: 7,  delay: "2.0s" },   /* Left head */
              { top: "20%", left: "78%", size: 8,  delay: "0.7s" },   /* Right head */
              { top: "55%", left: "28%", size: 9,  delay: "0.5s" },   /* Body left */
              { top: "48%", left: "72%", size: 7,  delay: "2.3s" },   /* Body right */
              { top: "85%", left: "42%", size: 10, delay: "1.6s" },   /* Tail tip */
            ].map((glow, i) => (
              <span
                key={`cirby-glow-bg-${i}`}
                className="absolute rounded-full -z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <Image
              src="/assets/hero/cirby.webp"
              alt=""
              width={512}
              height={512}
              draggable={false}
              className="h-auto w-full astro-float-b drop-shadow-[0_0_28px_rgba(194,235,255,0.82)] relative z-0"
            />

            {/* Twinkling glow points IN FRONT of Cirby */}
            {[
              { top: "12%", left: "62%", size: 10, delay: "1.4s" },   /* Cap visor tip */
              { top: "42%", left: "52%", size: 6,  delay: "1.8s" },   /* Chin center */
              { top: "65%", left: "38%", size: 8,  delay: "1.1s" },   /* Tail start */
              { top: "78%", left: "48%", size: 6,  delay: "0.9s" },   /* Tail mid-curve */
            ].map((glow, i) => (
              <span
                key={`cirby-glow-fg-${i}`}
                className="absolute rounded-full z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[100svh] flex-col">
        <nav
          className={`fixed inset-x-0 top-6 z-[9999] transition-all duration-300 ease-in-out ${
            isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <div
              className="relative flex items-center justify-between gap-6 rounded-full border px-6 py-3 backdrop-blur-[18px] md:px-8 md:py-3.5"
              style={{
                borderColor: "rgba(170, 195, 255, 0.4)",
                background:
                  "linear-gradient(180deg, rgba(38, 55, 115, 0.8) 0%, rgba(16, 24, 58, 0.92) 60%, rgba(10, 16, 40, 0.98) 100%)",
                boxShadow:
                  "0 12px 30px rgba(6, 10, 30, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 -6px 18px rgba(3, 7, 18, 0.7)",
              }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 0 1px rgba(120, 160, 255, 0.35), 0 0 22px rgba(120, 160, 255, 0.25)",
                  opacity: 0.7,
                }}
              />

              <a
                href="#hero"
                onClick={handleLogoClick}
                className="relative z-10 flex items-center gap-3"
                aria-label="Go to hero section"
              >
                <Image
                  src="/assets/nav-logo.svg"
                  alt="COSMOS GDG PUP"
                  width={220}
                  height={60}
                  draggable={false}
                  className="h-8 w-auto object-contain md:h-9"
                  priority
                />
              </a>

              <ul className="relative z-10 hidden items-center gap-4 text-[12px] uppercase tracking-[0.28em] text-white/85 md:flex">
                {navItems.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <a 
                      className="transition hover:text-white" 
                      href={item.href} 
                      onClick={handleNavItemClick(item.href)}
                      target={item.href.startsWith("#") ? undefined : "_blank"}
                      rel={item.href.startsWith("#") ? undefined : "noopener noreferrer"}
                    >
                      {item.label === "Nexus" ? (
                        <span className="inline-flex items-center gap-1">
                          <svg viewBox="0 0 16 16" className="h-3 w-3 text-cyan-200" aria-hidden="true">
                            <path
                              d="M4 12L12 4M7 4h5v5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item.label}
                        </span>
                      ) : (
                        item.label
                      )}
                    </a>
                    {index !== navItems.length - 1 && <span className="text-white/40">/</span>}
                  </li>
                ))}
              </ul>

              <a
                href={registrationUrl}
                target={isExternalRegistrationUrl ? "_blank" : undefined}
                rel={isExternalRegistrationUrl ? "noopener noreferrer" : undefined}
                onClick={handleRegistrationClick}
                className="group relative z-10 flex h-9 items-center justify-center overflow-hidden rounded-full border px-6 text-[11px] font-bold uppercase tracking-[0.26em] text-[#0a1332] shadow-[0_8px_20px_rgba(11,23,71,0.6),inset_0_1px_2px_rgba(255,255,255,1)] transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_8px_20px_rgba(11,23,71,0.6),inset_0_1px_2px_rgba(255,255,255,1),0_0_20px_4px_rgba(255,255,255,0.65)]"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.7)",
                  background: "linear-gradient(90deg, #1738a4ff 0%, #f1f1f1 30%, #ffffff 70%)",
                }}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, #446bedff 0%, #f1f1f1 30%, #ffffff 70%)",
                  }}
                />
                <span
                  className="pointer-events-none absolute -inset-2 rounded-full opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                  style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 72%)",
                    filter: "blur(6px)",
                    transform: "translateY(-60%)",
                  }}
                />
                <span className="relative z-10">Register</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Body Content 1:1 - Fully Grouped & Responsive */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-8 text-center sm:pt-28 sm:pb-12 min-h-0">
          
          {/* GROUP 1: Cosmos 2026 and Subtext */}
          <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-3 w-[80vw] max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[580px] 2xl:max-w-[660px]">
            {/* Twinkling glow points BEHIND the text */}
            {[
              { top: "-2%",  left: "12%", size: 7,  delay: "0.2s" },
              { top: "35%",  left: "-6%", size: 9,  delay: "1.4s" },
              { top: "88%",  left: "18%", size: 8,  delay: "0.5s" },
              { top: "-8%",  left: "52%", size: 10, delay: "2.1s" },
              { top: "102%", left: "65%", size: 7,  delay: "0.8s" },
              { top: "15%",  left: "94%", size: 11, delay: "1.7s" },
              { top: "82%",  left: "88%", size: 8,  delay: "1.1s" },
              { top: "45%",  left: "104%", size: 9, delay: "0.3s" },
            ].map((glow, i) => (
              <span
                key={`cosmos-glow-bg-${i}`}
                className="absolute rounded-full -z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <Image
              src="/assets/hero/cosmos-header.png"
              alt="Cosmos 2026"
              width={672}
              height={386}
              draggable={false}
              className="w-full h-auto object-contain drop-shadow-[0_12px_30px_rgba(33,41,96,0.35)] relative z-0"
              priority
            />

            {/* Twinkling glow points IN FRONT of the text */}
            {[
              { top: "22%", left: "24%", size: 5,  delay: "0.9s" },
              { top: "58%", left: "38%", size: 7,  delay: "1.6s" },
              { top: "12%", left: "68%", size: 6,  delay: "0.4s" },
              { top: "72%", left: "78%", size: 5,  delay: "2.3s" },
              { top: "36%", left: "90%", size: 6,  delay: "1.2s" },
              { top: "85%", left: "8%",  size: 7,  delay: "1.9s" },
            ].map((glow, i) => (
              <span
                key={`cosmos-glow-fg-${i}`}
                className="absolute rounded-full z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>

          {/* GROUP 2: Date, Location & Countdown */}
          <div className="mt-6 sm:mt-10 md:mt-12 flex flex-col items-center gap-5 sm:gap-8">
            {/* Top: Date and Location */}
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 inter-var">
              <div className="flex justify-center items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" style={{color: '#4285F4'}} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                 </svg>
                 <span className="text-center text-slate-300 text-sm sm:text-base font-normal tracking-wide">March 24, 2026</span>
              </div>
              
              <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full" />
              
              <div className="flex justify-center items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" style={{color: '#4285F4'}} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                   <circle cx="12" cy="10" r="3" />
                 </svg>
                 <span className="text-center text-slate-300 text-sm sm:text-base font-normal tracking-wide">PUP Bulawagang Balagtas</span>
              </div>
            </div>

            {/* Bottom: Countdown container */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {countdownItems.map((item) => (
                <div key={item.label} className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                  {item.active && (
                     <div className="w-full h-full left-0 top-0 absolute bg-purple-500/20 rounded-full blur-xl pointer-events-none" />
                  )}
                  <div
                    className={`w-full h-full py-2 sm:py-3 absolute left-0 top-0 rounded-[14px] sm:rounded-[20px] outline outline-1 outline-offset-[-1px] flex flex-col justify-center items-center gap-1 sm:gap-2 backdrop-blur-md transition-all duration-300 ${
                      item.active 
                        ? "bg-slate-900/60 shadow-[0px_0px_35px_0px_rgba(66,133,244,0.35),inset_0px_1px_8px_0px_rgba(255,255,255,0.15)] outline-[#4285F4]0/50 border border-[#4285F4]/30" 
                        : "bg-slate-900/40 shadow-[inset_0px_1px_5px_0px_rgba(255,255,255,0.05)] outline-white/5 border border-white/5"
                    }`}
                  >
                    <div className="w-full flex items-center justify-center opacity-95 h-6 sm:h-10 md:h-12 overflow-hidden">
                      <span 
                        className={`text-center text-2xl sm:text-4xl md:text-[42px] font-bold font-['Consolas'] leading-none drop-shadow-lg ${
                          item.active ? "text-purple-300" : "text-white"
                        }`}
                        style={item.active ? { textShadow: "0 0 15px rgba(216,180,254,0.6)" } : {}}
                      >
                        {item.value}
                      </span>
                    </div>
                    <div className="w-full flex items-center justify-center h-3 sm:h-4 relative">
                      <span 
                        className={`text-center text-[8px] sm:text-[10px] md:text-xs font-normal inter-var uppercase leading-none tracking-[0.15em] sm:tracking-[0.2em] ${
                          item.active ? "text-purple-200" : "text-slate-400"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GROUP 3: Register Now CTA */}
          <a
            href={registrationUrl}
            target={isExternalRegistrationUrl ? "_blank" : undefined}
            rel={isExternalRegistrationUrl ? "noopener noreferrer" : undefined}
            onClick={handleRegistrationClick}
            className="group relative mt-8 sm:mt-10 md:mt-12 inline-flex items-center justify-center rounded-full p-[1px] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015]"
            style={{
              boxShadow: "0 0 0 1px rgba(167, 199, 255, 0.28), 0 0 20px rgba(108, 156, 255, 0.48)",
            }}
          >
            <span
              className="pointer-events-none absolute inset-[-2px] rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "rgba(111, 154, 255, 0.72)" }}
            />
            <span
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 50% 100%, rgba(95, 145, 255, 0.75), rgba(95, 145, 255, 0) 70%)",
                filter: "blur(10px)",
                opacity: 0.85,
              }}
            />
            <span
              className="relative inline-flex items-center justify-center rounded-full border px-6 py-2.5 sm:px-8 sm:py-3 text-[13px] sm:text-base font-semibold uppercase tracking-[0.04em] transition-all duration-300 group-hover:border-white group-hover:text-white"
              style={{
                borderColor: "rgba(213, 225, 255, 0.85)",
                background: "linear-gradient(180deg, rgba(23, 34, 82, 0.96), rgba(7, 13, 36, 0.97))",
                color: "rgba(207, 222, 255, 0.98)",
                textShadow: "0 0 12px rgba(116, 157, 255, 0.55)",
              }}
            >
              REGISTER NOW
            </span>
          </a>
        </div>
      </div>

      {/* Foreground comets — IN FRONT of all content (z-[50]) */}
      <div className="pointer-events-none absolute inset-0 z-[50] overflow-hidden" aria-hidden="true">
        {foregroundComets.map((comet) => (
          <div
            key={`comet-fg-${comet.top}-${comet.right}-${comet.delay}`}
            className={comet.className}
            style={{
              top: comet.top,
              right: comet.right,
              width: comet.width,
              animationDuration: comet.duration,
              animationDelay: comet.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
