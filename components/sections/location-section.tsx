"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

import AmbientStarfield from "@/components/ui/ambient-starfield";

const BENEFITS = [
  "Build Your Network",
  "Exclusive Industry Insights",
  "Access to Interactive Booths",
  "Explore Practical Applications of Different Technologies",
  "A Day of Fun Learning & Inspiration",
];

export default function LocationSection() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayMouseDown = () => {
    if (!overlayRef.current) return;
    overlayRef.current.style.pointerEvents = "none";
    const restore = () => {
      if (overlayRef.current) overlayRef.current.style.pointerEvents = "auto";
      window.removeEventListener("mouseup", restore);
    };
    window.addEventListener("mouseup", restore);
  };
  return (
    <section id="location" className="relative scroll-mt-32 overflow-hidden px-4 py-16 text-white md:px-6 md:py-20">
      <Image
        src="/assets/location/BG-location.webp"
        alt="Location section background"
        fill
        draggable={false}
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,27,0.28)_0%,rgba(3,8,26,0.55)_45%,rgba(2,7,22,0.72)_100%)]" />
      <AmbientStarfield className="z-[1]" density={1.06} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.06fr_0.88fr] lg:items-start lg:gap-16 xl:gap-20">
        <div className="space-y-4">
          <article className="relative overflow-hidden rounded-[22px] border border-[#5f86cf]/45 shadow-[0_18px_44px_rgba(6,16,46,0.58)]">
            <div className="relative h-[250px] w-full sm:h-[300px]">
              <iframe
                src="https://maps.google.com/maps?hl=en&q=Ninoy+Aquino+Library+and+Learning+Resources+Center,+Polytechnic+University+of+the+Philippines,+Sta.+Mesa,+Manila&z=17&t=m&iwloc=&output=embed"
                title="Map of Ninoy Aquino Library and Learning Resources Center"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                allowFullScreen
              />
              {/* Transparent overlay: keeps mousemove events on the document for the
                  custom cursor. On mousedown it removes itself so drags reach the
                  iframe, then restores on mouseup. */}
              <div
                ref={overlayRef}
                onMouseDown={handleOverlayMouseDown}
                className="absolute inset-0 z-10"
                style={{ pointerEvents: "auto" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,32,0.02)_0%,rgba(4,14,37,0.28)_48%,rgba(2,8,28,0.92)_100%)]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 space-y-1.5 px-3 pb-3 sm:px-4 sm:pb-4">
              <div className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-white/24 bg-black/36 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.06em] text-slate-200 sm:text-[10px]">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-200" />
                <span className="truncate">Polytechnic University of the Philippines, Sta. Mesa, Manila</span>
              </div>
              <p className="w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1rem,1.9vw,1.35rem)] font-normal leading-none tracking-[-0.01em] text-white">
                PUP Bulwagang Balagtas, 3rd Floor, NALLRC Building
              </p>
            </div>
          </article>

          <div className="grid gap-3 sm:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[20px] border border-white/14 shadow-[0_16px_40px_rgba(4,12,38,0.52)]">
              <div className="relative h-[210px] w-full sm:h-[230px]">
                <Image
                  src="/assets/location/NALLRC-building.webp"
                  alt="NALLRC building exterior"
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,26,0.02)_24%,rgba(5,10,26,0.84)_100%)]" />
              </div>
              <p className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-base">
                NALLRC Building
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-[20px] border border-white/14 shadow-[0_16px_40px_rgba(4,12,38,0.52)]">
              <div className="relative h-[210px] w-full sm:h-[230px]">
                <Image
                  src="/assets/location/inside-bulwagant-balagtas.webp"
                  alt="Bulwagang Balagtas interior"
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,26,0.01)_26%,rgba(5,10,26,0.86)_100%)]" />
              </div>
              <p className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-base">
                Bulwagang Balagtas
              </p>
            </article>
          </div>
        </div>

        <div className="pt-1 lg:max-w-[440px] lg:pt-2">
          <div className="mb-3.5 flex items-center gap-3">
            <div className="h-px w-11 bg-[#2f6ecc]/85 shadow-[0_0_14px_rgba(66,133,255,0.58)]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#56a4ff] sm:text-sm">
              The Cosmos Is Calling.
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-[1.06] text-white sm:text-[2.85rem]">
            More Than Just
            <span className="block font-light italic text-[#4285F4]">an Event</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#b3c5e3] sm:text-base">
            On March 24, 2026, Bulwagang Balagtas won&apos;t just be a hall. It will be a launchpad. For ideas. For
            careers. For the version of yourself that stops waiting for permission to do something extraordinary.
          </p>

          <h3 className="mt-6 text-base font-semibold text-white sm:text-lg">What You&apos;ll Gain:</h3>
          <ul className="mt-3.5 space-y-2.5">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#d0dcf3] sm:text-base">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#2a8dff]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
