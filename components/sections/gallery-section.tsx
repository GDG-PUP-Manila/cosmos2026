export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-gray-950 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-100">Gallery & Highlights</h2>
        
        {/* Asymmetrical Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="md:col-span-2 md:row-span-2 bg-gray-900 rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4 font-bold">Main Highlight</div>
          </div>
          <div className="bg-gray-800 rounded-xl"></div>
          <div className="bg-gray-800 rounded-xl"></div>
          <div className="bg-gray-900 rounded-xl md:col-span-3"></div>
        </div>
      </div>
    </section>
  );
}
