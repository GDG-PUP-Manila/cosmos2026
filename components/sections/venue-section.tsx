export default function VenueSection() {
  return (
    <section id="venue" className="py-24 bg-black text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-blue-400 text-xs font-bold tracking-widest uppercase text-center mb-2">Location</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Metro Event Hall</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Images Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="col-span-2 h-48 md:h-64 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
               <span className="absolute bottom-4 left-4 text-sm font-bold opacity-50">Main Hall</span>
            </div>
            <div className="h-40 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
               Ext
            </div>
            <div className="h-40 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
               Stage
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold">The Venue</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Situated in the heart of the city, Metro Event Hall provides the perfect backdrop for COSMOS 2026. State-of-the-art facilities ensure an unforgettable experience.
            </p>
            
            <ul className="space-y-4 mt-8">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/50 text-blue-400 text-xs">✓</div>
                <span className="text-sm font-semibold">Capacity for 500+ attendees</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/50 text-blue-400 text-xs">✓</div>
                <span className="text-sm font-semibold">High-speed dedicated Wi-Fi</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/50 text-blue-400 text-xs">✓</div>
                <span className="text-sm font-semibold">Immersive projection mapping</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
