export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center pt-8 bg-black text-white overflow-hidden pb-32">
      {/* Top Navigation Placeholder */}
      <nav className="w-full max-w-4xl mx-auto flex justify-between items-center px-6 py-4 rounded-full border border-blue-900/50 bg-black/50 backdrop-blur-md mb-24 z-20">
        <div className="font-bold tracking-widest text-xl">COSMOS</div>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#hero" className="hover:text-blue-400 font-bold text-white">HOME</a>
          <a href="#about" className="hover:text-blue-400 text-xs">ABOUT</a>
          <a href="#speakers" className="hover:text-blue-400 text-xs">SPEAKERS</a>
          <a href="#program" className="hover:text-blue-400 text-xs">PROGRAM</a>
        </div>
        <div>
          <button className="px-6 py-2 bg-transparent border border-gray-600 rounded-full text-xs hover:border-blue-500 transition-colors">LOGIN</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full">
        {/* Glow Effects / Asteroids Placeholder */}
        <div className="absolute top-10 left-[10%] w-16 h-16 bg-blue-500/20 rounded-full blur-xl border border-blue-400/30"></div>
        <div className="absolute top-20 right-[15%] w-24 h-24 bg-purple-500/20 rounded-full blur-xl border border-purple-400/30"></div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-center" style={{ textShadow: "0 0 30px rgba(59,130,246,0.3)" }}>
          COSMOS
        </h1>
        <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-center mt-[-10px] text-blue-200">
          2026
        </h2>
        
        <p className="mt-6 text-xs md:text-sm tracking-widest uppercase text-gray-400 text-center max-w-lg leading-relaxed">
          Embark on a digital journey mapping the cosmos of modern technology.
        </p>
        
        {/* Date Blocks Placeholder */}
        <div className="mt-8 flex gap-4 text-center">
          <div className="w-12 h-16 flex flex-col items-center justify-center bg-blue-950/40 border border-blue-900/60 rounded">
            <span className="text-xl font-bold">08</span>
          </div>
          <div className="w-12 h-16 flex flex-col items-center justify-center bg-blue-950/40 border border-blue-900/60 rounded">
            <span className="text-xl font-bold">14</span>
          </div>
          <div className="w-12 h-16 flex flex-col items-center justify-center bg-blue-950/40 border border-blue-900/60 rounded">
            <span className="text-xl font-bold">20</span>
          </div>
          <div className="w-12 h-16 flex flex-col items-center justify-center bg-blue-900/80 border border-blue-500/50 rounded shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <span className="text-xl font-bold text-white">26</span>
          </div>
        </div>

        {/* Floating elements styling hint for future libraries */}
        <div className="absolute bottom-[-100px] w-full h-80 bg-gradient-to-t from-black to-transparent z-0"></div>
      </div>
    </section>
  );
}
