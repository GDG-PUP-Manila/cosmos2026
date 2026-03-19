'use client';

export default function FaqSection() {
  const faqs = [
    "What is COSMOS 2026?",
    "Who can attend this event?",
    "Do I need prior technical experience?",
    "Will sessions be recorded?",
    "Are there networking opportunities?",
    "Is food provided at the venue?",
    "Can I transfer my ticket?",
    "What is the dress code?"
  ];

  return (
    <section id="faq" className="py-24 bg-black text-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-blue-400 text-xs font-bold tracking-widest uppercase text-center mb-2">Have questions?</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        {/* Accordion List Placeholder */}
        <div className="space-y-3">
          {faqs.map((q, i) => (
            <div key={i} className="bg-[#020617] border border-blue-900/30 rounded-lg overflow-hidden hover:border-blue-500/60 transition-colors">
              <button className="w-full px-6 py-5 flex justify-between items-center text-left">
                <span className="font-semibold text-sm md:text-base text-gray-200">{q}</span>
                <span className="text-blue-500 border border-blue-500/50 rounded-full w-6 h-6 flex items-center justify-center text-xs">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
