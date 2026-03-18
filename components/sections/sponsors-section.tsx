import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative overflow-hidden bg-black px-4 py-24 text-white">
      <AmbientStarfield className="z-0" />
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-sm uppercase tracking-widest text-gray-400">We Are Powered By</h2>

        {/* Infinite Marquee or Logo Grid Placeholder */}
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex h-16 w-32 items-center justify-center overflow-hidden rounded bg-white/10 grayscale transition-all hover:bg-white/20 hover:grayscale-0"
            >
              <span className="font-mono text-sm">Partner {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
