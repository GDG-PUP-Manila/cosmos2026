"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#program" },
  { label: "FAQ", href: "#faq" },
];

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

    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    window.history.replaceState(null, "", hash);
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
      className="relative min-h-[100svh] overflow-hidden bg-[#030712] text-white font-sans [--cosmos-cyan:#9be7ff] [--cosmos-blue:#7aa2ff] [--cosmos-pink:#ff86d1] [--cosmos-purple:#8f7bff]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/BG-hero.png')] bg-cover bg-top bg-no-repeat bg-[#020712]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <nav className="fixed inset-x-0 top-6 z-50">
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

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-16 md:pb-16 md:pt-16 text-center">
          <div className="relative mt-4 md:mt-6">
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(120,210,255,0.32),rgba(120,210,255,0)_65%)] blur-2xl" />
            <Image
              src="/assets/cosmos-header.svg"
              alt="Cosmos 2026"
              width={672}
              height={386}
              className="w-[52vw] max-w-[620px] sm:w-[460px] md:w-[530px] lg:w-[590px] xl:w-[640px] h-auto object-contain"
              priority
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-[13px] text-[#d2daf6] md:text-sm">
            <span className="inline-flex items-center gap-2.5 font-medium tracking-[0.01em]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#8193ff]" aria-hidden="true">
                <path
                  d="M7 3v3M17 3v3M4 9h16M6 7h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              March 24, 2026
            </span>
            <span className="inline-flex items-center gap-2.5 font-medium tracking-[0.01em]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#8193ff]" aria-hidden="true">
                <path
                  d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              PUP Bulawagan Balagtas
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className="flex w-[108px] sm:w-[114px] md:w-[120px] flex-col items-center justify-center px-3 py-3.5 text-center backdrop-blur-[12px]"
                style={
                  item.active
                    ? {
                        minHeight: "108px",
                        borderRadius: "20px",
                        border: "1px solid rgba(128, 142, 255, 0.72)",
                        background:
                          "linear-gradient(180deg, rgba(88, 96, 202, 0.45), rgba(67, 73, 166, 0.42) 45%, rgba(45, 51, 122, 0.58) 100%)",
                        boxShadow:
                          "0 0 0 1px rgba(132, 146, 255, 0.34), 0 0 28px rgba(96, 112, 255, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -10px 18px rgba(33, 41, 96, 0.45)",
                      }
                    : {
                        minHeight: "108px",
                        borderRadius: "20px",
                        border: "1px solid rgba(132, 156, 214, 0.3)",
                        background:
                          "linear-gradient(180deg, rgba(36, 50, 96, 0.38), rgba(14, 22, 50, 0.6) 60%, rgba(7, 13, 34, 0.72) 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -10px 20px rgba(6, 10, 26, 0.45), 0 14px 28px rgba(5, 9, 26, 0.42)",
                      }
                }
              >
                <span
                  className="text-[34px] leading-[0.95] font-semibold tracking-[0.08em]"
                  style={{
                    fontFamily: "Consolas, 'Courier New', monospace",
                    color: item.active ? "rgba(144, 159, 255, 0.96)" : "rgba(249, 252, 255, 0.96)",
                    textShadow: item.active
                      ? "0 0 16px rgba(130, 146, 255, 0.4)"
                      : "0 3px 14px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="mt-0.5 text-[12px] tracking-[0.28em]"
                  style={{ color: item.active ? "rgba(214, 223, 255, 0.88)" : "rgba(220, 232, 255, 0.72)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href={registrationUrl}
            target={isExternalRegistrationUrl ? "_blank" : undefined}
            rel={isExternalRegistrationUrl ? "noopener noreferrer" : undefined}
            onClick={handleRegistrationClick}
            className="group relative mt-10 inline-flex items-center justify-center rounded-full p-[1px] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] md:mt-11"
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
              className="relative inline-flex items-center gap-2.5 rounded-full border px-6 py-2.5 text-base font-semibold uppercase tracking-[0.04em] transition-all duration-300 group-hover:border-white group-hover:text-white sm:px-8 sm:text-[22px]"
              style={{
                borderColor: "rgba(213, 225, 255, 0.85)",
                background: "linear-gradient(180deg, rgba(23, 34, 82, 0.96), rgba(7, 13, 36, 0.97))",
                color: "rgba(207, 222, 255, 0.98)",
                textShadow: "0 0 12px rgba(116, 157, 255, 0.55)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5"
                aria-hidden="true"
              >
                <path
                  d="M4 12h14M12 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              REGISTER NOW
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}
