import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 text-white px-6 md:px-12 w-full flex items-center justify-center overflow-hidden font-sans bg-[#030712]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/BG-about.png"
          alt="About background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.24)_0%,rgba(3,7,18,0.42)_45%,rgba(3,7,18,0.58)_100%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-32">
        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              <p className="text-[#60a5fa] font-bold tracking-[0.1em] text-xs">ONE DAY. ONE SUMMIT. INFINITE POSSIBILITES</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#bae6fd] to-[#38bdf8] pb-2 whitespace-nowrap">
              WHAT IS COSMOS
            </h2>
            <div className="space-y-6 text-[#e2e8f0] leading-loose text-sm font-light">
              <p>
                COSMOS 2026 is the flagship technology summit of Google Developer Groups on Campus — Polytechnic University of the Philippines. It&apos;s a day where students stop scrolling through the future and start building it—through inspiring talks from industry leaders, live demos, meaningful networking, and a community of builders who refuse to think small.
              </p>
              <p>
                Whether you&apos;re writing your first line of code or architecting your next big idea, COSMOS is the space where you belong.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="relative group perspective-1000 w-full max-w-[500px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[126%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(235,246,255,0.46)_0%,rgba(182,220,255,0.26)_42%,transparent_78%)] blur-3xl" />
              <Image src="/assets/logo-about.svg" alt="Infinity Logo" width={559} height={227} className="w-full max-w-[500px] relative z-10 drop-shadow-[0_0_20px_rgba(206,234,255,0.58)]" />
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-start w-full order-last md:order-first">
            <div className="relative group perspective-1000 w-full max-w-[500px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[98%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(196,230,255,0.26)_0%,rgba(120,190,255,0.12)_42%,transparent_76%)] blur-3xl" />
              <Image src="/assets/logo1-about.svg" alt="Cosmos Features" width={722} height={680} className="w-full max-w-[500px] relative z-10 drop-shadow-[0_0_14px_rgba(143,209,255,0.32)]" />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              <p className="text-[#60a5fa] font-bold tracking-[0.1em] text-xs">BORN FROM A NEED. BUILT FOR YOUR MOMENT.</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#bae6fd] to-[#38bdf8] pb-2 whitespace-nowrap">
              WHY COSMOS 2026 EXISTS
            </h2>
            <div className="space-y-6 text-[#e2e8f0] leading-loose text-sm font-light">
              <p>
                Technology doesn&apos;t wait. Every year, the gap between what&apos;s being built in the real world and what&apos;s being taught in classrooms grows wider. COSMOS 2026 exists to close that gap. To bring the frontier of AI, cloud computing, and modern development tools directly to you, where you are, right now.
              </p>
              <div className="relative pl-6 my-8 italic text-[#cbd5e1] border-l-[3px] border-blue-500/50">
                &quot;COSMOS was born from the belief that navigating the future requires more than technology. It requires a community willing to question, build, and lead..&quot;
              </div>
              <p>
                This isn&apos;t a lecture. It&apos;s an encounter with what&apos;s next. This is designed for students who are hungry to learn, connect, and create. GDG PUP built COSMOS because the next generation of Filipino tech leaders deserves a stage to step onto.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
