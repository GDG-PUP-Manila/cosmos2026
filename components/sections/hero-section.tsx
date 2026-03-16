import Image from "next/image";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#program" },
  { label: "FAQ", href: "#faq" },
];

const countdown = [
  { value: "08", label: "DAYS" },
  { value: "21", label: "HOURS" },
  { value: "50", label: "MINUTES" },
  { value: "50", label: "SECONDS" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-[#030712] text-white font-sans [--cosmos-cyan:#9be7ff] [--cosmos-blue:#7aa2ff] [--cosmos-pink:#ff86d1] [--cosmos-purple:#8f7bff]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-bg-container" />
        <div className="absolute inset-0 hero-vignette" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <nav className="mx-auto w-full max-w-6xl px-6 pt-8">
          <div className="glass-panel flex items-center justify-between gap-4 rounded-full px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/nav-logo.webp"
                alt="COSMOS GDG PUP"
                width={220}
                height={60}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>

            <ul className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/70 md:flex">
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
                  {index !== navItems.length - 1 && <span className="text-white/30">/</span>}
                </li>
              ))}
            </ul>

            <button className="rounded-full border border-white/30 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60 hover:bg-white/10">
              Register
            </button>
          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-0 md:pt-0 text-center">
          <div className="relative mt-6">
            <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(120,210,255,0.35),rgba(120,210,255,0)_65%)] blur-2xl" />
            <Image
              src="/assets/cosmos-header.webp"
              alt="Cosmos 2026"
              width={1800}
              height={780}
              className="w-[400px] sm:w-[680px] md:w-[840px] lg:w-[980px] h-auto object-contain"
              priority
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-200" aria-hidden="true">
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
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-200" aria-hidden="true">
                <path
                  d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10" r="2.5" fill="currentColor" />
              </svg>
              PUP Bulawagan Balagtas
            </span>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:justify-center">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="glass-card flex w-[120px] flex-col items-center justify-center rounded-2xl px-4 py-4 text-center sm:w-[128px]"
              >
                <span className={`countdown-font text-3xl font-semibold tracking-[0.12em] text-white`}>
                  {item.value}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/70">
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
