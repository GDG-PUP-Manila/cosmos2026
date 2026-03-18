export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black text-white px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-6">
          <h3 className="text-blue-400 text-xs font-bold tracking-widest uppercase">About The Event</h3>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
            WHAT IS COSMOS
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            COSMOS 2026 is an immersive digital experience navigating the expansive universe of modern technology and innovation. Look beyond the stars and find the interconnectedness of our digital assets. 
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mt-4">
            Join the brightest minds as we decode the future, explore limitless possibilities, and bridge the gap between imagination and reality.
          </p>
        </div>
        <div className="flex-1 relative">
          {/* Infinity Logo Placeholder representing the glowing infinity ribbon */}
          <div className="w-full flex justify-center">
            <div className="w-64 h-32 border-2 border-blue-400/50 rounded-[100%] flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] relative overflow-hidden">
               <div className="absolute w-32 h-64 border-2 border-purple-400/50 rounded-[100%] shadow-[0_0_40px_rgba(168,85,247,0.3)] transform rotate-90"></div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY COSMOS 2026 MATTERS section */}
      <div className="max-w-5xl mx-auto mt-32 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 flex justify-center relative h-64 w-full">
           {/* Placeholder for the 3 glowing bubbles with icons */}
           <div className="absolute top-0 left-10 w-24 h-24 rounded-full border border-blue-500/50 flex items-center justify-center bg-blue-900/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">Icon 1</div>
           <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full border border-purple-500/50 flex items-center justify-center bg-purple-900/20 shadow-[0_0_20px_rgba(168,85,247,0.2)]">Icon 2</div>
           <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-20 h-20 rounded-full border border-blue-400/50 flex items-center justify-center bg-blue-800/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">Icon 3</div>
        </div>
        <div className="flex-1 space-y-6">
          <h3 className="text-blue-400 text-xs font-bold tracking-widest uppercase">The Perspective</h3>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
            WHY COSMOS 2026 MATTERS
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            This isn't just another conference; it's a nexus point for visionary builders. Learn how our connected technology assets are evolving the global landscape.
          </p>
          <ul className="text-gray-400 text-sm space-y-3 mt-6">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span> Gain actionable insights from industry leaders.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span> Discover new tools to propel your workflow into orbit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
