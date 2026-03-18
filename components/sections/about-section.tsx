import Image from "next/image";
import AmbientStarfield from "@/components/ui/ambient-starfield";
import ParallaxTilt from "@/components/ui/parallax-tilt";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex w-full scroll-mt-32 items-center justify-center overflow-hidden bg-[#030712] px-6 py-24 font-sans text-white md:px-12"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/about/BG-about.webp"
          alt="About background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(3,7,18,0.24)_0%,rgba(3,7,18,0.42)_45%,rgba(3,7,18,0.58)_100%)]" />
      <AmbientStarfield className="z-[2]" density={1.05} />
      <div className="pointer-events-none absolute inset-0 z-[3]" aria-hidden="true">
        <div className="absolute -left-14 top-[31%] hidden w-52 -rotate-8 opacity-95 md:block lg:-left-10 lg:w-64 xl:-left-6 xl:w-72">
          <Image
            src="/assets/about/astro-1.webp"
            alt=""
            width={783}
            height={993}
            className="h-auto w-full astro-float-b drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>

        <div className="absolute -right-14 top-[6%] hidden w-52 rotate-8 opacity-95 md:block lg:-right-10 lg:w-64 xl:-right-6 xl:w-72">
          <Image
            src="/assets/about/astro-2.webp"
            alt=""
            width={852}
            height={828}
            className="h-auto w-full astro-float-a drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-32">
        {/* ROW 1 */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <p className="text-xs font-bold tracking-[0.1em] text-[#60a5fa]">
                ONE DAY. ONE SUMMIT. INFINITE POSSIBILITES
              </p>
            </div>
            <h2 className="whitespace-nowrap bg-gradient-to-b from-white via-[#bae6fd] to-[#38bdf8] bg-clip-text pb-2 text-2xl font-black tracking-tight text-transparent sm:text-3xl md:text-4xl">
              WHAT IS COSMOS
            </h2>
            <div className="space-y-6 text-sm font-light leading-loose text-[#e2e8f0]">
              <p>
                COSMOS 2026 is the flagship technology summit of Google Developer Groups on Campus - Polytechnic
                University of the Philippines. It&apos;s a day where students stop scrolling through the future and
                start building it through inspiring talks from industry leaders, live demos, meaningful networking, and
                a community of builders who refuse to think small.
              </p>
              <p>
                Whether you&apos;re writing your first line of code or architecting your next big idea, COSMOS is the
                space where you belong.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex w-full flex-1 justify-center md:justify-end">
            <div className="group relative w-full max-w-[520px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[130%] w-[122%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(235,246,255,0.48)_0%,rgba(182,220,255,0.28)_42%,transparent_78%)] blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
              <ParallaxTilt
                className="relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-2"
                maxTilt={11}
                hoverScale={1.03}
                perspective={1050}
              >
                <Image
                  src="/assets/about/logo-about.svg"
                  alt="Infinity Logo"
                  width={559}
                  height={227}
                  className="relative z-10 w-full max-w-[500px] drop-shadow-[0_0_20px_rgba(206,234,255,0.58)] transition-all duration-500 ease-out group-hover:scale-[1.035] group-hover:drop-shadow-[0_0_34px_rgba(206,234,255,0.84)]"
                />
              </ParallaxTilt>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Image */}
          <div className="order-last flex w-full flex-1 justify-center md:order-first md:justify-start">
            <div className="group relative w-full max-w-[520px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[118%] w-[106%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(196,230,255,0.34)_0%,rgba(120,190,255,0.16)_42%,transparent_76%)] blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
              <ParallaxTilt
                className="relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-2"
                maxTilt={11}
                hoverScale={1.03}
                perspective={1050}
              >
                <Image
                  src="/assets/about/logo1-about.svg"
                  alt="Cosmos Features"
                  width={722}
                  height={680}
                  className="relative z-10 w-full max-w-[500px] drop-shadow-[0_0_16px_rgba(143,209,255,0.4)] transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.08] group-hover:contrast-[1.08] group-hover:drop-shadow-[0_0_34px_rgba(132,204,255,0.75)]"
                />
              </ParallaxTilt>
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <p className="text-xs font-bold tracking-[0.1em] text-[#60a5fa]">BORN FROM A NEED. BUILT FOR YOUR MOMENT.</p>
            </div>
            <h2 className="whitespace-nowrap bg-gradient-to-b from-white via-[#bae6fd] to-[#38bdf8] bg-clip-text pb-2 text-2xl font-black tracking-tight text-transparent sm:text-3xl md:text-4xl">
              WHY COSMOS 2026 EXISTS
            </h2>
            <div className="space-y-6 text-sm font-light leading-loose text-[#e2e8f0]">
              <p>
                Technology doesn&apos;t wait. Every year, the gap between what&apos;s being built in the real world
                and what&apos;s being taught in classrooms grows wider. COSMOS 2026 exists to close that gap. To
                bring the frontier of AI, cloud computing, and modern development tools directly to you, where you are,
                right now.
              </p>
              <div className="relative my-8 border-l-[3px] border-blue-500/50 pl-6 italic text-[#cbd5e1]">
                &quot;COSMOS was born from the belief that navigating the future requires more than technology. It
                requires a community willing to question, build, and lead.&quot;
              </div>
              <p>
                This isn&apos;t a lecture. It&apos;s an encounter with what&apos;s next. This is designed for
                students who are hungry to learn, connect, and create. GDG PUP built COSMOS because the next
                generation of Filipino tech leaders deserves a stage to step onto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
