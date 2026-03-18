import Image from "next/image";

import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function CtaSection() {
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL?.trim() || "#cta";
  const isExternalRegistrationUrl = /^https?:\/\//i.test(registrationUrl);

  return (
    <section id="cta" className="relative overflow-hidden px-4 py-16 text-white sm:py-20 md:px-6 md:py-24">
      <Image src="/assets/CTA/BG-CTA.webp" alt="Call to action background" fill className="object-cover object-[center_70%]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,30,0.42)_0%,rgba(2,8,28,0.64)_52%,rgba(1,5,18,0.84)_100%)]" />
      <AmbientStarfield className="z-[1] opacity-70" density={0.72} />

      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-[18%] bg-[linear-gradient(90deg,rgba(44,123,255,0.16)_0%,rgba(44,123,255,0)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(270deg,rgba(44,123,255,0.16)_0%,rgba(44,123,255,0)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto mt-[5.5rem] w-full max-w-[920px] rounded-[26px] border border-white/60 bg-[linear-gradient(180deg,rgba(4,10,33,0.62),rgba(2,7,26,0.62))] px-5 pb-10 pt-16 text-center font-sans shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_28px_70px_rgba(2,10,38,0.58)] sm:px-9 sm:pb-12 sm:pt-20 md:mt-24 md:px-14 md:pb-14">
        <div className="pointer-events-none absolute left-1/2 top-0 z-[3] w-[126px] -translate-x-1/2 -translate-y-[69%] sm:w-[148px] md:w-[164px] lg:w-[176px]" aria-hidden="true">
          <Image
            src="/assets/CTA/Sparky.webp"
            alt=""
            width={512}
            height={512}
            className="h-auto w-full drop-shadow-[0_14px_30px_rgba(3,12,42,0.72)]"
          />
        </div>

        <h2
          className="mx-auto max-w-[740px] text-[clamp(1.7rem,4.8vw,3.55rem)] font-extrabold uppercase leading-[0.99] tracking-[0.03em] text-transparent"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(224,246,255,1) 36%, rgba(140,224,255,1) 68%, rgba(111,165,255,0.98) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            textShadow: "0 0 18px rgba(173, 234, 255, 0.65), 0 0 36px rgba(101, 172, 255, 0.44)",
            textWrap: "balance",
          }}
        >
          READY TO JOIN US?
        </h2>

        <p
          className="mx-auto mt-6 max-w-[670px] text-[clamp(0.95rem,1.35vw,1.03rem)] font-light leading-[1.72] tracking-[0.008em] text-[#c4d4ee]/92"
          style={{ textWrap: "pretty" }}
        >
          We built COSMOS because world-class tech education belongs to everyone. Regardless of where you&apos;re from,
          what you study, or what you already know. Every event we organize is one step closer to making that real.
        </p>

        <p
          className="mx-auto mt-7 max-w-[670px] text-[clamp(0.96rem,1.45vw,1.08rem)] font-light leading-[1.62] tracking-[0.008em] text-[#d4e0f4]/92"
          style={{ textWrap: "balance" }}
        >
          You don&apos;t need all the answers. You just need to show up.
        </p>

        <p className="mx-auto mt-2 w-fit max-w-none whitespace-nowrap text-[clamp(0.9rem,3vw,2.2rem)] font-semibold italic leading-[1.1] tracking-[-0.008em] text-[#dce7fa]/96">
          The cosmos doesn&apos;t wait. Neither should you.
        </p>

        <a
          href={registrationUrl}
          target={isExternalRegistrationUrl ? "_blank" : undefined}
          rel={isExternalRegistrationUrl ? "noopener noreferrer" : undefined}
          className="group relative mt-9 inline-flex items-center justify-center rounded-full p-[1px] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015]"
          style={{ boxShadow: "0 0 0 1px rgba(167, 199, 255, 0.28), 0 0 20px rgba(108, 156, 255, 0.48)" }}
        >
          <span
            className="pointer-events-none absolute inset-[-2px] rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "rgba(111, 154, 255, 0.72)" }}
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 50% 100%, rgba(95, 145, 255, 0.75), rgba(95, 145, 255, 0) 70%)",
              filter: "blur(10px)",
              opacity: 0.85,
            }}
          />
          <span
            className="relative inline-flex items-center justify-center rounded-full border px-5 py-2 text-[0.9rem] font-semibold uppercase tracking-[0.05em] transition-all duration-300 group-hover:border-white group-hover:text-white sm:px-7 sm:py-2.5 sm:text-[1.1rem]"
            style={{
              borderColor: "rgba(213, 225, 255, 0.85)",
              background: "linear-gradient(180deg, rgba(23, 34, 82, 0.96), rgba(7, 13, 36, 0.97))",
              color: "rgba(207, 222, 255, 0.98)",
              textShadow: "0 0 12px rgba(116, 157, 255, 0.55)",
            }}
          >
            REGISTER NOW
          </span>
        </a>
      </div>
    </section>
  );
}
