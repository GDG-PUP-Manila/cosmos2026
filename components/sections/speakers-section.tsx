import Image from "next/image";
import AmbientStarfield from "@/components/ui/ambient-starfield";

const topRowSpeakers = [
  {
    src: "/assets/speakers/speaker-1.webp",
    bioSrc: "/assets/speakers/bio-1.webp",
    alt: "Jazmine Calma speaker card",
    bioAlt: "Jazmine Calma bio card",
  },
  {
    src: "/assets/speakers/speaker-2.webp",
    bioSrc: "/assets/speakers/bio-2.webp",
    alt: "Sermil Matoto speaker card",
    bioAlt: "Sermil Matoto bio card",
  },
  {
    src: "/assets/speakers/speaker-3.webp",
    bioSrc: "/assets/speakers/bio-3.webp",
    alt: "John Dustin Santos speaker card",
    bioAlt: "John Dustin Santos bio card",
  },
];

const bottomRowSpeakers = [
  {
    src: "/assets/speakers/speaker-4.webp",
    bioSrc: "/assets/speakers/bio-4.webp",
    alt: "Julianne Cera speaker card",
    bioAlt: "Julianne Cera bio card",
  },
  {
    src: "/assets/speakers/speaker-5.webp",
    bioSrc: "/assets/speakers/bio-5.webp",
    alt: "Carlos Jerico Dela Torre speaker card",
    bioAlt: "Carlos Jerico Dela Torre bio card",
  },
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="relative overflow-hidden bg-transparent px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/assets/speakers/BG-speakers.webp"
          alt="Speakers section background"
          fill
          unoptimized
          className="object-cover object-[50%_52%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02081c]/80 via-[#02081c]/20 to-[#02081c]/80" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030712] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute left-1 top-[16%] hidden w-56 -rotate-6 opacity-95 md:block lg:left-6 lg:w-72">
          <Image
            src="/assets/speakers/astro-1.webp"
            alt=""
            width={783}
            height={993}
            className="h-auto w-full astro-float-a drop-shadow-[0_0_18px_rgba(174,236,255,0.55)]"
          />
        </div>

        <div className="absolute right-1 top-[9%] hidden w-56 rotate-8 opacity-95 md:block lg:right-6 lg:w-72">
          <Image
            src="/assets/speakers/astro-4.webp"
            alt=""
            width={1098}
            height={1154}
            className="h-auto w-full astro-float-b drop-shadow-[0_0_16px_rgba(174,236,255,0.52)]"
          />
        </div>

        <div className="absolute right-1 top-[44%] hidden w-60 -rotate-10 opacity-95 md:block lg:right-5 lg:w-80">
          <Image
            src="/assets/speakers/astro-2.webp"
            alt=""
            width={852}
            height={828}
            className="h-auto w-full astro-float-c drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>

        <div className="absolute left-1 bottom-[8%] hidden w-60 rotate-2 opacity-95 md:block lg:left-5 lg:w-80">
          <Image
            src="/assets/speakers/astro-3.webp"
            alt=""
            width={867}
            height={795}
            className="h-auto w-full astro-float-b drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
      </div>

      <AmbientStarfield className="z-[2]" density={1.2} />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="w-full text-left">
          <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4da4ff] sm:text-[12px]">
            <span className="h-px w-8 bg-[#4da4ff]/60" />
            <span>Voices from the frontier.</span>
          </div>

          <h2 className="bg-[linear-gradient(180deg,#f3fbff_0%,#9be8ff_38%,#7aa2ff_73%,#c1edff_100%)] bg-clip-text text-3xl font-black uppercase leading-[0.95] tracking-tight text-transparent drop-shadow-[0_0_16px_rgba(91,173,255,0.6)] sm:text-4xl md:text-5xl">
            Meet the Speakers
          </h2>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#c7d4f8]/90 sm:text-sm">
            COSMOS 2026 brings together practitioners, builders, and thought leaders from across the technology
            industry. They&apos;re not just the people who talks about the industry, they&apos;re the ones shipping
            it.
          </p>
        </div>

        <div className="mt-8 space-y-6 md:mt-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {topRowSpeakers.map((speaker) => (
              <div
                key={speaker.src}
                className="group relative mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/15 bg-[#08133d]/35 shadow-[0_18px_38px_rgba(2,8,28,0.68)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={340}
                  height={453}
                  sizes="(min-width: 1280px) 340px, (min-width: 768px) 45vw, 85vw"
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={speaker.bioSrc}
                  alt={speaker.bioAlt}
                  width={340}
                  height={453}
                  sizes="(min-width: 1280px) 340px, (min-width: 768px) 45vw, 85vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:mx-auto xl:w-[62%]">
            {bottomRowSpeakers.map((speaker) => (
              <div
                key={speaker.src}
                className="group relative mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/15 bg-[#08133d]/35 shadow-[0_18px_38px_rgba(2,8,28,0.68)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={340}
                  height={453}
                  sizes="(min-width: 1280px) 340px, (min-width: 768px) 45vw, 85vw"
                  className="h-auto w-full transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={speaker.bioSrc}
                  alt={speaker.bioAlt}
                  width={340}
                  height={453}
                  sizes="(min-width: 1280px) 340px, (min-width: 768px) 45vw, 85vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
