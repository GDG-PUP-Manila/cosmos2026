export default function ProgramFlowSection() {
  return (
    <section id="program" className="py-24 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-100">Program Flow</h2>
        
        {/* Vertical Timeline Placeholder */}
        <div className="relative border-l border-blue-900/50 ml-4 md:ml-12 pl-8 space-y-12">
          
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-900 transition-colors">
                <span className="text-sm font-mono text-blue-400 mb-2 block">09:00 AM - 10:00 AM</span>
                <h3 className="text-xl font-bold mb-2">Stage Segment {i}</h3>
                <p className="text-gray-400 text-sm">Detailed description of the program flow element goes here. This will feature scroll reveal animations.</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
