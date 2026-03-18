import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function ProgramFlowSection() {
  return (
    <section id="program" className="relative overflow-hidden bg-black px-4 py-24 text-white">
      <AmbientStarfield className="z-0" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-blue-100">Program Flow</h2>

        {/* Vertical Timeline Placeholder */}
        <div className="relative ml-4 space-y-12 border-l border-blue-900/50 pl-8 md:ml-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-10 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-blue-900">
                <span className="mb-2 block font-mono text-sm text-blue-400">09:00 AM - 10:00 AM</span>
                <h3 className="mb-2 text-xl font-bold">Stage Segment {i}</h3>
                <p className="text-sm text-gray-400">
                  Detailed description of the program flow element goes here. This will feature scroll reveal
                  animations.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
