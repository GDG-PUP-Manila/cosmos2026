export default function CtaSection() {
  return (
    <section id="cta" className="relative py-32 bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Glowing backdrop placeholder */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 text-center max-w-2xl px-4">
        {/* Mascot / Icon Placeholder */}
        <div className="w-24 h-24 mx-auto bg-gray-900 rounded-full border border-gray-800 mb-8 flex items-center justify-center">
           Mascot
        </div>
        
        <h2 className="text-5xl font-bold tracking-tight mb-6">Ready to Join Us?</h2>
        <p className="text-xl text-gray-400 mb-10">
          Secure your spot at the universe&apos;s most anticipated tech gathering.
        </p>
        <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          Register Now
        </button>
      </div>
    </section>
  );
}
