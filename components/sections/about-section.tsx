import Image from "next/image";
import AmbientStarfield from "@/components/ui/ambient-starfield";
import ParallaxTilt from "@/components/ui/parallax-tilt";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex w-full scroll-mt-32 items-center justify-center overflow-visible bg-[#030712] px-6 py-24 font-sans text-white md:px-12"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/about/BG-about.webp"
          alt="About background"
          fill
          priority
          draggable={false}
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
            draggable={false}
            className="h-auto w-full astro-float-b drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>

        <div className="absolute -right-14 top-[6%] hidden w-52 rotate-8 opacity-95 md:block lg:-right-10 lg:w-64 xl:-right-6 xl:w-72">
          <Image
            src="/assets/about/astro-2.webp"
            alt=""
            width={852}
            height={828}
            draggable={false}
            className="h-auto w-full astro-float-a drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-32">
        {/* ROW 1 */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content */}
          {/* Text Content */}
          <div className="flex-1 space-y-6 relative z-10 w-full max-w-[600px] mt-10 md:mt-0">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <p className="text-xs font-bold tracking-[0.1em] text-[#60a5fa] uppercase">
                ONE DAY. ONE SUMMIT. INFINITE POSSIBILITIES
              </p>
            </div>
            
            {/* Figma-Driven Title Image */}
            <div className="relative w-full aspect-[600/85] mix-blend-screen -ml-2 md:-ml-3 mt-4 mb-8">
              <Image 
                src="/assets/about/what-is-cosmos-title.webp"
                alt="WHAT IS COSMOS"
                fill
                priority
                draggable={false}
                className="object-contain object-left drop-shadow-[0_0_15px_rgba(186,230,253,0.3)]"
              />
            </div>

            <div className="space-y-6">
              <div className="w-full max-w-[587px] text-justify justify-start text-slate-400 text-lg font-light font-['Inter'] leading-7">
                COSMOS 2026 is the flagship technology summit of Google Developer Groups on Campus Polytechnic University of the Philippines. It’s a day where students stop scrolling through the future and start building it—through inspiring talks from industry leaders, live demos, meaningful networking, and a community of builders who refuse to think small.
              </div>
              <div className="w-full max-w-[607px] justify-start text-slate-400 text-lg font-light font-['Inter'] leading-7">
                Whether you&apos;re writing your first line of code or architecting your next big idea, COSMOS is the space where you belong.
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex w-full flex-1 justify-center md:justify-end">
            <div className="group relative w-full max-w-[520px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[130%] w-[122%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
              <ParallaxTilt
                className="relative z-10 transition-all duration-500 ease-out group-hover:-translate-y-2"
                maxTilt={11}
                hoverScale={1.03}
                perspective={1050}
              >
                <Image
                  src="/assets/about/logo-about.svg"
                  alt="Infinity Logo"
                  width={719}
                  height={291}
                  draggable={false}
                  className="relative z-10 w-full max-w-[500px] transition-all duration-500 ease-out group-hover:scale-[1.035]"
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
                <div className="relative aspect-square w-full max-w-[500px] mx-auto py-8 lg:py-12">
                  {/* Figma-Matched Cosmic Background Globs */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100">
                    <div className="w-[60%] h-[60%] absolute left-[10%] top-[5%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.3)_0%,rgba(217,217,217,0.1)_100%)] blur-[52px]" />
                    <div className="w-[45%] h-[45%] absolute right-[10%] top-[30%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.4)_0%,rgba(14,165,233,0)_70%)] blur-[40px]" />
                    <div className="w-[30%] h-[20%] absolute left-[25%] bottom-[15%] rounded-full bg-gradient-to-br from-red-500/20 to-blue-500/40 blur-[50px]" />
                    <div className="w-[20%] h-[15%] absolute left-[35%] top-[10%] rounded-full bg-blend-soft-light bg-green-500/30 blur-[50px]" />
                    <div className="w-[25%] h-[25%] absolute right-[35%] top-[15%] rounded-full bg-sky-400/20 blur-[50px]" />
                    <div className="w-[15%] h-[35%] absolute left-[45%] top-[8%] bg-gradient-to-br from-red-500/20 to-pink-500/20 blur-[50px]" />
                  </div>

                  {/* Top - Cloud */}
                  <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[55%] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.08] z-30 group-hover:-translate-y-2">
                    <Image
                      src="/assets/about/tech-icon-cloud.webp"
                      alt="Cloud Technology Icon"
                      width={400}
                      height={400}
                      draggable={false}
                      className="w-full h-auto drop-shadow-[0_12px_24px_rgba(132,204,255,0.25)] transition-all duration-300 hover:drop-shadow-[0_20px_45px_rgba(132,204,255,0.6)] hover:brightness-[1.15]"
                      quality={90}
                    />
                  </div>
                  {/* Bottom Left - AI */}
                  <div className="absolute bottom-[2%] left-[2%] w-[55%] transition-all duration-500 hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.08] z-20 group-hover:-translate-x-2 group-hover:translate-y-2">
                    <Image
                      src="/assets/about/tech-icon-ai.webp"
                      alt="AI Technology Icon"
                      width={400}
                      height={400}
                      draggable={false}
                      className="w-full h-auto drop-shadow-[0_12px_24px_rgba(192,132,255,0.25)] transition-all duration-300 hover:drop-shadow-[0_20px_45px_rgba(192,132,255,0.6)] hover:brightness-[1.15]"
                      quality={90}
                    />
                  </div>
                  {/* Bottom Right - Dev */}
                  <div className="absolute bottom-[2%] right-[2%] w-[55%] transition-all duration-500 hover:translate-x-4 hover:translate-y-4 hover:scale-[1.08] z-10 group-hover:translate-x-2 group-hover:translate-y-2">
                    <Image
                      src="/assets/about/tech-icon-dev.webp"
                      alt="Development Technology Icon"
                      width={400}
                      height={400}
                      draggable={false}
                      className="w-full h-auto drop-shadow-[0_12px_24px_rgba(132,255,204,0.25)] transition-all duration-300 hover:drop-shadow-[0_20px_45px_rgba(132,255,204,0.6)] hover:brightness-[1.15]"
                      quality={90}
                    />
                  </div>
                </div>
              </ParallaxTilt>
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 space-y-6 lg:max-w-[600px] z-10 relative">
            <div className="flex items-center justify-start gap-4">
              <div className="h-[1px] w-12 bg-blue-500/50" />
              <div className="text-sm font-semibold font-['Inter'] uppercase leading-5 tracking-wider text-blue-500">
                Born from a need. Built for your moment.
              </div>
            </div>
            
            <Image
              src="/assets/about/why-cosmos-title.webp"
              alt="WHY COSMOS 2026 EXISTS"
              width={577}
              height={54}
              draggable={false}
              className="w-full h-auto max-w-[320px] sm:max-w-[420px] lg:max-w-[577px] object-contain object-left drop-shadow-2xl"
              priority
            />
            
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="w-full max-w-[650px] justify-start text-slate-400 text-lg font-light font-['Inter'] leading-7">
                Technology doesn&apos;t wait. Every year, the gap between what&apos;s being built in the real world and what&apos;s being taught in classrooms grows wider. COSMOS 2026 exists to close that gap. To bring the frontier of AI, cloud computing, and modern development tools directly to you, where you are, right now.
              </div>
              <div className="self-stretch w-full relative border-l border-blue-500 box-border">
                <div className="w-full max-w-[530px] pl-6 justify-start text-slate-300 text-lg font-light italic font-['Inter'] leading-7">
                  &quot;COSMOS was born from the belief that navigating the future requires more than technology. It requires a community willing to question, build, and lead..&quot;
                </div>
              </div>
              <div className="w-full max-w-[623px] justify-start text-slate-400 text-lg font-normal font-['Inter'] leading-7">
                This isn&apos;t a lecture. It&apos;s an encounter with what&apos;s next. This is designed for students who are hungry to learn, connect, and create. GDG PUP built COSMOS because the next generation of Filipino tech leaders deserves a stage to step onto.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
