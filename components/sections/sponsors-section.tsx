import Image from "next/image";

import AmbientStarfield from "@/components/ui/ambient-starfield";

const PARTNER_ICONS = [
  { src: "/assets/sponsors/Cisco-Logo.webp", alt: "Cisco logo" },
  { src: "/assets/sponsors/jbecp-logo.webp", alt: "JBECP logo" },
  { src: "/assets/sponsors/SG-Logo.webp", alt: "SG logo" },
  { src: "/assets/sponsors/TPG-logo.webp", alt: "TPG logo" },
  { src: "/assets/sponsors/ASCII-Logo.webp", alt: "ASCII logo" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative overflow-hidden px-4 py-24 text-white md:px-6 md:py-28">
      <Image
        src="/assets/sponsors/BG-sponsors.webp"
        alt="Sponsors section background"
        fill
        className="object-cover object-[center_1%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,32,0.26)_0%,rgba(3,9,30,0.44)_40%,rgba(2,8,24,0.68)_100%)]" />
      <AmbientStarfield className="z-[1] opacity-75" density={0.9} />

      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
        <div className="absolute -left-45 bottom-[15%] hidden w-[590px] opacity-88 md:block lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-mid-1.webp" alt="" width={895} height={768} className="h-auto w-full" />
        </div>
        <div className="absolute left-[2%] bottom-[1%] w-[480px] opacity-98 sm:left-[6%] sm:w-[560px] lg:left-[-2%] lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-Front-2.webp" alt="" width={690} height={768} className="h-auto w-full" />
        </div>

        <div className="absolute -right-14 top-[18%] hidden w-[330px] opacity-74 mix-blend-screen md:block lg:w-[420px]">
          <Image
            src="/assets/sponsors/sparky-constellation-2.webp"
            alt=""
            width={736}
            height={736}
            className="h-auto w-full [filter:sepia(1)_hue-rotate(150deg)_saturate(5)_brightness(0.72)] drop-shadow-[0_0_26px_rgba(87,174,255,0.34)]"
          />
        </div>
        <div className="absolute -right-45 bottom-[30%] hidden w-[590px] opacity-88 md:block lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-mid-2.webp" alt="" width={658} height={640} className="h-auto w-full" />
        </div>
        <div className="absolute right-[2%] bottom-[23%] w-[480px] opacity-98 sm:right-[6%] sm:w-[560px] lg:right-[0%] lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-Front-1.webp" alt="" width={690} height={768} className="h-auto w-full" />
        </div>

        <div className="absolute -left-[-7%] top-[42%] hidden w-[330px] opacity-74 mix-blend-screen md:block lg:w-[420px] ">
          <Image
            src="/assets/sponsors/sparky-constellation-1.webp"
            alt=""
            width={736}
            height={736}
            className="h-auto w-full [filter:sepia(1)_hue-rotate(150deg)_saturate(5)_brightness(0.72)] drop-shadow-[0_0_26px_rgba(87,174,255,0.34)]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <div className="h-px w-9 bg-[#326ee2]/70" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4c89f3]">Backed by the Best</p>
          <div className="h-px w-9 bg-[#326ee2]/70" />
        </div>

        <h2 className="mt-4 text-[clamp(1.8rem,4.2vw,3rem)] font-semibold leading-none text-white">
          We are Powered by <span className="font-light italic text-[#2c7df0]">Visionaries</span>
        </h2>

        <div className="mt-14 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">In Collaboration With</p>
          <div className="mx-auto mt-4 flex w-full max-w-[430px] items-center justify-center rounded-[22px] border border-[#7597d4]/24 bg-[linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))] px-5 py-6 shadow-[0_18px_42px_rgba(4,12,38,0.56)]">
            <Image src="/assets/sponsors/Icon-1.webp" alt="TBIDO logo" width={1024} height={768} className="h-auto w-[280px]" />
          </div>
        </div>

        <div className="mt-12 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">Sponsored By</p>
          <div className="mx-auto mt-5 grid w-full max-w-[580px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="flex min-h-[286px] flex-col rounded-[22px] border border-[#7597d4]/24 bg-[linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))] px-4 py-5 text-center shadow-[0_18px_42px_rgba(4,12,38,0.56)]">
              <div className="flex h-[180px] items-center justify-center">
                <Image src="/assets/sponsors/Icon-2.webp" alt="OpsWerks logo" width={672} height={672} className="h-auto w-[185px]" />
              </div>
              <p className="mt-2 text-base text-[#90a4c8]">Platinum Sponsor</p>
            </div>
            <div className="flex min-h-[286px] flex-col rounded-[22px] border border-[#7597d4]/24 bg-[linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))] px-4 py-5 text-center shadow-[0_18px_42px_rgba(4,12,38,0.56)]">
              <div className="flex h-[180px] items-center justify-center">
                <Image
                  src="/assets/sponsors/Icon-3.webp"
                  alt="CCIS Student Council logo"
                  width={1120}
                  height={768}
                  className="h-auto w-[300px]"
                />
              </div>
              <p className="mt-2 text-base text-[#90a4c8]">Gold Sponsor</p>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">Media Partner</p>
          <div className="mx-auto mt-4 flex w-full max-w-[230px] items-center justify-center rounded-[18px] border border-[#7597d4]/24 bg-[linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))] px-4 py-5 shadow-[0_18px_42px_rgba(4,12,38,0.56)]">
            <Image
              src="/assets/sponsors/Icon-4.webp"
              alt="When In Manila logo"
              width={447}
              height={448}
              className="h-auto w-[140px]"
            />
          </div>
        </div>

        <div className="mt-12 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">Partnered With</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {PARTNER_ICONS.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={320}
                height={320}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            <Image
              src="/assets/sponsors/GDG-TUP.webp"
              alt="Google Developer Groups on Campus TUP Manila"
              width={1048}
              height={152}
              className="h-15 w-auto object-contain sm:h-16"
            />
            <Image
              src="/assets/sponsors/GDG-NU-MANILA.webp"
              alt="Google Developer Groups on Campus NU Manila"
              width={1048}
              height={152}
              className="h-15 w-auto object-contain sm:h-16"
            />
          </div>

          <div className="mt-3 flex justify-center">
            <Image
              src="/assets/sponsors/GDG-DLSU.webp"
              alt="Google Developer Group De La Salle University"
              width={635}
              height={107}
              className="h-18 w-auto object-contain sm:h-22"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
