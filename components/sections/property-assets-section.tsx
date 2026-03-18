"use client";

import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function PropertyAssetsSection() {
  return (
    <section id="assets" className="relative overflow-hidden bg-gray-950 px-4 py-24 text-white">
      <AmbientStarfield className="z-0" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Property Assets</h2>

        {/* Accordion List Placeholder */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-800 bg-black transition-colors hover:border-blue-500"
            >
              <button className="flex w-full items-center justify-between px-6 py-4 text-left">
                <span className="text-lg font-semibold">Asset Track {i}</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
