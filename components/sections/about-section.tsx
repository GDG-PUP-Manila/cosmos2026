export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black text-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          {/* Infinity Logo Placeholder */}
          <div className="w-48 h-24 bg-blue-900/30 border border-blue-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <span className="text-4xl text-blue-400 font-bold">∞</span>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-100"> What is COSMOS? </h2>
          <p className="text-gray-400 leading-relaxed">
            COSMOS 2026 is the premier gathering of tech innovators, star-gazers, and builders shaping the future. 
            Immerse yourself in a universe of ideas, networking, and cutting-edge discussions.
          </p>
        </div>
      </div>
    </section>
  );
}
