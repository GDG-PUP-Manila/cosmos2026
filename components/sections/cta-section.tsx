import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function CtaSection() {
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL?.trim() || "#cta";
  const isExternalRegistrationUrl = /^https?:\/\//i.test(registrationUrl);

  return (
    <section id="cta" className="relative flex items-center justify-center overflow-hidden bg-black py-32 text-white">
      <AmbientStarfield className="z-0" density={1.15} />

      {/* Glowing backdrop placeholder */}
      <div className="absolute z-[1] h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="relative z-10 max-w-2xl px-4 text-center">
        {/* Mascot / Icon Placeholder */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gray-800 bg-gray-900">
          Mascot
        </div>

        <h2 className="mb-6 text-5xl font-bold tracking-tight">Ready to Join Us?</h2>
        <p className="mb-10 text-xl text-gray-400">
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
