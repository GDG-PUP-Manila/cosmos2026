"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type MouseEvent } from "react";
import AmbientStarfield from "@/components/ui/ambient-starfield";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#program" },
  { label: "FAQ", href: "#faq" },
];

const heroComets = [
  { top: "10%", right: "7%", width: "290px", duration: "20s", delay: "-3.4s", className: "comet-trail" },
  { top: "23%", right: "64%", width: "220px", duration: "22s", delay: "-7.2s", className: "comet-trail" },
  { top: "60%", right: "2%", width: "260px", duration: "21s", delay: "-5.1s", className: "comet-trail" },
  { top: "69%", right: "69%", width: "240px", duration: "23s", delay: "-9.8s", className: "comet-trail" },
  { top: "43%", right: "26%", width: "170px", duration: "24s", delay: "-4.1s", className: "comet-trail comet-trail-dim" },
  { top: "54%", right: "46%", width: "145px", duration: "25s", delay: "-11.3s", className: "comet-trail comet-trail-dim" },
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
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL?.trim() || "#cta";
  const isExternalRegistrationUrl = /^https?:\/\//i.test(registrationUrl);

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
    event.preventDefault();
    scrollToSection(hash);
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
      
      <div className="pointer-events-none absolute inset-0 z-[20]" aria-hidden="true">
        {heroComets.map((comet) => (
          <div
            key={`${comet.top}-${comet.right}-${comet.delay}`}
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
        <div className="absolute left-[0%] top-[20%] hidden w-56 opacity-95 md:block lg:left-[7%] lg:top-[15%] lg:w-[21rem] xl:left-[9%] xl:w-[24rem] 2xl:w-[26rem]">
          <Image
            src="/assets/hero/sparky.webp"
            alt=""
            width={512}
            height={512}
            className="h-auto w-full astro-float-a drop-shadow-[0_0_28px_rgba(194,235,255,0.82)]"
          />
        </div>

        <div className="absolute right-[0%] top-[31%] hidden w-56 opacity-95 md:block lg:right-[7%] lg:top-[27%] lg:w-[22rem] xl:right-[9%] xl:w-[25rem] 2xl:w-[27rem]">
          <Image
            src="/assets/hero/cirby.webp"
            alt=""
            width={512}
            height={512}
            className="h-auto w-full astro-float-b drop-shadow-[0_0_28px_rgba(194,235,255,0.82)]"
          />
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
                  className="h-8 w-auto object-contain md:h-9"
                  priority
                />
              </a>

              <ul className="relative z-10 hidden items-center gap-4 text-[12px] uppercase tracking-[0.28em] text-white/85 md:flex">
                {navItems.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <a className="transition hover:text-white" href={item.href} onClick={handleNavItemClick(item.href)}>
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
                className="relative z-10 rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.26em] text-white/85 transition-colors duration-200 hover:border-white/85 hover:bg-white/10 hover:text-white"
                style={{
                  borderColor: "rgba(202, 218, 255, 0.6)",
                  background: "linear-gradient(180deg, rgba(44, 62, 130, 0.55), rgba(18, 27, 64, 0.9))",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 0 1px rgba(164, 192, 255, 0.32), 0 0 14px rgba(128, 164, 255, 0.34)",
                  }}
                />
                <span
                  className="pointer-events-none absolute -inset-2 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(122, 160, 255, 0.45), rgba(122, 160, 255, 0) 72%)",
                    filter: "blur(7px)",
                    opacity: 0.6,
                  }}
                />
                <span className="relative">Register</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Body Content 1:1 - Fully Grouped & Responsive */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-8 text-center sm:pt-28 sm:pb-12 min-h-0">
          
          {/* GROUP 1: Cosmos 2026 and Subtext */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-[80vw] max-w-[420px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[680px] xl:max-w-[760px] 2xl:max-w-[840px]">
            <Image
              src="/assets/hero/cosmos-header.svg"
              alt="Cosmos 2026"
              width={672}
              height={386}
              className="w-full h-auto object-contain drop-shadow-[0_12px_30px_rgba(33,41,96,0.35)]"
              priority
            />
          </div>

          {/* GROUP 2: Date, Location & Countdown */}
          <div className="mt-6 sm:mt-10 md:mt-12 flex flex-col items-center gap-5 sm:gap-8">
            {/* Top: Date and Location */}
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 inter-var">
              <div className="flex justify-center items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-indigo-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                 </svg>
                 <span className="text-center text-slate-300 text-sm sm:text-base font-normal tracking-wide">March 24, 2026</span>
              </div>
              
              <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full" />
              
              <div className="flex justify-center items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-indigo-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
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
                        ? "bg-slate-900/60 shadow-[0px_0px_35px_0px_rgba(168,85,247,0.35),inset_0px_1px_8px_0px_rgba(255,255,255,0.15)] outline-purple-400/50 border border-purple-500/30" 
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

    </section>
  );
}
