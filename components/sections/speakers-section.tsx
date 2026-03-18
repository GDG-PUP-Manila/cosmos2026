import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function SpeakersSection() {
  return (
    <section id="speakers" className="relative overflow-hidden bg-gray-950 px-4 py-24 text-white md:px-8">
      <AmbientStarfield className="z-0" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Meet the Speakers</h2>

        {/* Placeholder for MagicUI/Aceternity Grid/Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-blue-500"
            >
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-800">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-blue-900/20 transition-colors group-hover:bg-blue-500/20" />
              </div>
              <h3 className="text-xl font-semibold">Speaker {i}</h3>
              <p className="mt-2 text-center text-sm text-gray-400">Tech Lead @ CosmosHQ</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
