"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
            <div className="nav-pill flex items-center justify-between gap-6 rounded-full px-6 py-3 md:px-8 md:py-3.5">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/nav-logo.svg"
                  alt="COSMOS GDG PUP"
                  width={220}
                  height={60}
                  className="h-8 w-auto object-contain md:h-9"
                  priority
                />
              </div>

              <ul className="hidden items-center gap-4 text-[12px] uppercase tracking-[0.28em] text-white/85 md:flex">
                {navItems.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <a className="transition hover:text-white" href={item.href}>
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

              <button className="nav-register rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.26em] text-white/85 transition hover:border-white/80 hover:bg-white/15">
                Register
              </button>
            </div>
          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-20 md:pt-20 text-center">
          <div className="relative mt-6 md:mt-8">
            <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(120,210,255,0.35),rgba(120,210,255,0)_65%)] blur-2xl" />
            <Image
              src="/assets/cosmos-header.svg"
              alt="Cosmos 2026"
              width={672}
              height={386}
              className="w-[58vw] max-w-[700px] sm:w-[520px] md:w-[600px] lg:w-[680px] xl:w-[740px] h-auto object-contain"
              priority
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-[#d2daf6]">
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className={`countdown-card flex w-[128px] flex-col items-center justify-center px-4 py-4 text-center ${item.active ? "countdown-card-active" : ""}`}
              >
                <span className={`countdown-font countdown-value ${item.active ? "countdown-value-active" : ""}`}>
                  {item.value}
                </span>
                <span className={`countdown-label mt-1 ${item.active ? "countdown-label-active" : ""}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
