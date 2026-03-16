export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 bg-gray-950 text-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Meet the Speakers</h2>
        
        {/* Placeholder for MagicUI/Aceternity Grid/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 p-6 flex flex-col items-center hover:border-blue-500 transition-colors">
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-500/20 transition-colors"></div>
              </div>
              <h3 className="text-xl font-semibold">Speaker {i}</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">Tech Lead @ CosmosHQ</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
