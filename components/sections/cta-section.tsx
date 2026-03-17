export default function CtaSection() {
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL?.trim() || "#cta";
  const isExternalRegistrationUrl = /^https?:\/\//i.test(registrationUrl);

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
        <a
          href={registrationUrl}
          target={isExternalRegistrationUrl ? "_blank" : undefined}
          rel={isExternalRegistrationUrl ? "noopener noreferrer" : undefined}
          className="inline-flex rounded-full px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-[0_0_55px_rgba(255,255,255,0.35)]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(234,241,255,0.96))" }}
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
