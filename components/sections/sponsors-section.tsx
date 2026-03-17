export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">We Are Powered By</h2>

        {/* Infinite Marquee or Logo Grid Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-32 h-16 bg-white/10 rounded overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:bg-white/20">
              <span className="text-sm font-mono">Partner {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
