export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Placeholder for Parallax Space Background */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center">
        COSMOS 2026
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-center text-gray-300">
        The Ultimate Space Event
      </p>
      
      {/* Countdown Timer Hook Placeholder */}
      <div className="mt-12 flex gap-4 text-center">
        <div className="flex flex-col"><span className="text-4xl font-mono">00</span><span className="text-sm">DAYS</span></div>
        <div className="flex flex-col"><span className="text-4xl font-mono">24</span><span className="text-sm">HRS</span></div>
        <div className="flex flex-col"><span className="text-4xl font-mono">59</span><span className="text-sm">MINS</span></div>
        <div className="flex flex-col"><span className="text-4xl font-mono">59</span><span className="text-sm">SECS</span></div>
      </div>

      <div className="mt-12">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
          Join the Mission
        </button>
      </div>
    </section>
  );
}
