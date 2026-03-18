import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-gray-950 px-4 py-24 text-white">
      <AmbientStarfield className="z-0" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-blue-100">Gallery & Highlights</h2>

        {/* Asymmetrical Grid Placeholder */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl bg-gray-900 md:col-span-2 md:row-span-2">
            <div className="absolute inset-0 bg-blue-500/10 transition-colors group-hover:bg-blue-500/20" />
            <div className="absolute bottom-4 left-4 font-bold">Main Highlight</div>
          </div>
          <div className="rounded-xl bg-gray-800" />
          <div className="rounded-xl bg-gray-800" />
          <div className="rounded-xl bg-gray-900 md:col-span-3" />
        </div>
      </div>
    </section>
  );
}
