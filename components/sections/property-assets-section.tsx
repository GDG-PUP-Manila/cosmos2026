'use client';

export default function PropertyAssetsSection() {
  return (
    <section id="assets" className="py-24 bg-gray-950 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Property Assets</h2>
        
        {/* Accordion List Placeholder */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors">
              <button className="w-full px-6 py-4 flex justify-between items-center text-left">
                <span className="font-semibold text-lg">Asset Track {i}</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
