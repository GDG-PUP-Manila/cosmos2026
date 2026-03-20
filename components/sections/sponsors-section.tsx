import Image from "next/image";

import AmbientStarfield from "@/components/ui/ambient-starfield";
import GlareHover from "@/components/ui/glare-hover";

const PARTNER_ICONS = [
  { src: "/assets/sponsors/Cisco-Logo.webp", alt: "Cisco logo", href: "https://www.facebook.com/cisconetconnectpup/" },
  { src: "/assets/sponsors/jbecp-logo.webp", alt: "JBECP logo", href: "https://www.facebook.com/jbecp.pupmnl/" },
  { src: "/assets/sponsors/SG-Logo.webp", alt: "SG logo", href: "https://www.facebook.com/seekersguildcommunity" },
  { src: "/assets/sponsors/TPG-logo.webp", alt: "TPG logo", href: "https://www.facebook.com/PUPTPG" },
  { src: "/assets/sponsors/ASCII-Logo.webp", alt: "ASCII logo", href: "https://www.facebook.com/PUPASCII/" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative overflow-hidden px-4 py-24 text-white md:px-6 md:py-28">
      <Image
        src="/assets/sponsors/BG-sponsors.webp"
        alt="Sponsors section background"
        fill
        draggable={false}
        className="object-cover object-[center_1%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,32,0.26)_0%,rgba(3,9,30,0.44)_40%,rgba(2,8,24,0.68)_100%)]" />
      <AmbientStarfield className="z-[1] opacity-75" density={0.9} />

      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
        <div className="absolute -left-45 bottom-[15%] hidden w-[590px] opacity-88 md:block lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-mid-1.webp" alt="" width={895} height={768} draggable={false} className="h-auto w-full" />
        </div>
        <div className="absolute left-[2%] bottom-[1%] w-[480px] opacity-98 sm:left-[6%] sm:w-[560px] lg:left-[-2%] lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-Front-2.webp" alt="" width={690} height={768} draggable={false} className="h-auto w-full" />
        </div>

        <div className="absolute -right-14 top-[18%] hidden w-[330px] opacity-74 mix-blend-screen md:block lg:w-[420px]">
          <div className="relative">
            {/* Twinkling glow points BEHIND Sparky */}
            {[
              { top: "8%",  left: "32%", size: 8,  delay: "0s" },
              { top: "3%",  left: "54%", size: 10, delay: "0.8s" },
              { top: "25%", left: "75%", size: 8,  delay: "0.4s" },
              { top: "62%", left: "18%", size: 10, delay: "1.8s" },
              { top: "78%", left: "46%", size: 7,  delay: "2.4s" },
            ].map((glow, i) => (
              <span
                key={`sponsors-sparky-bg-${i}`}
                className="absolute rounded-full -z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <Image
              src="/assets/sponsors/sparky-constellation-2.webp"
              alt=""
              width={736}
              height={736}
              draggable={false}
              className="relative z-0 h-auto w-full [filter:sepia(1)_hue-rotate(150deg)_saturate(5)_brightness(0.72)] drop-shadow-[0_0_26px_rgba(87,174,255,0.34)]"
            />

            {/* Twinkling glow points IN FRONT of Sparky */}
            {[
              { top: "18%", left: "42%", size: 6,  delay: "1.6s" },
              { top: "30%", left: "30%", size: 7,  delay: "2.1s" },
              { top: "28%", left: "56%", size: 9,  delay: "1.2s" },
              { top: "50%", left: "48%", size: 6,  delay: "0.6s" },
              { top: "70%", left: "68%", size: 8,  delay: "1.0s" },
            ].map((glow, i) => (
              <span
                key={`sponsors-sparky-fg-${i}`}
                className="absolute rounded-full z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute -right-45 bottom-[30%] hidden w-[590px] opacity-88 md:block lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-mid-2.webp" alt="" width={658} height={640} draggable={false} className="h-auto w-full" />
        </div>
        <div className="absolute right-[2%] bottom-[23%] w-[480px] opacity-98 sm:right-[6%] sm:w-[560px] lg:right-[0%] lg:w-[700px]">
          <Image src="/assets/sponsors/Cloud-Front-1.webp" alt="" width={690} height={768} draggable={false} className="h-auto w-full" />
        </div>

        <div className="absolute -left-[-7%] top-[42%] hidden w-[330px] opacity-74 mix-blend-screen md:block lg:w-[420px] ">
          <div className="relative">
            {/* Twinkling glow points BEHIND Cirby */}
            {[
              { top: "5%",  left: "42%", size: 8,  delay: "0.3s" },
              { top: "22%", left: "18%", size: 7,  delay: "2.0s" },
              { top: "20%", left: "78%", size: 8,  delay: "0.7s" },
              { top: "55%", left: "28%", size: 9,  delay: "0.5s" },
              { top: "48%", left: "72%", size: 7,  delay: "2.3s" },
              { top: "85%", left: "42%", size: 10, delay: "1.6s" },
            ].map((glow, i) => (
              <span
                key={`sponsors-cirby-bg-${i}`}
                className="absolute rounded-full -z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <Image
              src="/assets/hero/cirby.webp"
              alt="Cirby Constellation"
              width={736}
              height={736}
              draggable={false}
              className="relative z-0 h-auto w-full [filter:sepia(1)_hue-rotate(150deg)_saturate(5)_brightness(0.72)] drop-shadow-[0_0_26px_rgba(87,174,255,0.34)]"
            />

            {/* Twinkling glow points IN FRONT of Cirby */}
            {[
              { top: "12%", left: "62%", size: 10, delay: "1.4s" },
              { top: "42%", left: "52%", size: 6,  delay: "1.8s" },
              { top: "65%", left: "38%", size: 8,  delay: "1.1s" },
              { top: "78%", left: "48%", size: 6,  delay: "0.9s" },
            ].map((glow, i) => (
              <span
                key={`sponsors-cirby-fg-${i}`}
                className="absolute rounded-full z-10"
                style={{
                  top: glow.top,
                  left: glow.left,
                  width: glow.size,
                  height: glow.size,
                  background: "radial-gradient(circle, rgba(194,235,255,1) 0%, rgba(194,235,255,0.6) 40%, transparent 70%)",
                  boxShadow: `0 0 ${glow.size * 2}px rgba(194,235,255,0.9), 0 0 ${glow.size * 4}px rgba(194,235,255,0.5)`,
                  animation: `mascot-twinkle 3s ease-in-out ${glow.delay} infinite`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
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
          <a href="https://www.facebook.com/DOSTPUPPYLONTBI" target="_blank" rel="noopener noreferrer" className="mx-auto mt-4 block w-full max-w-[430px] rounded-[22px] focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
            <GlareHover
              borderRadius="22px"
              background="linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))"
              className="flex w-full items-center justify-center border border-[#7597d4]/24 px-5 py-6 shadow-[0_18px_42px_rgba(4,12,38,0.56)]"
            >
              <Image src="/assets/sponsors/Icon-1.webp" alt="TBIDO logo" width={1024} height={768} draggable={false} className="h-auto w-[280px]" />
            </GlareHover>
          </a>
        </div>

        <div className="mt-12 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">Sponsored By</p>
          <div className="mx-auto mt-5 grid w-full max-w-[580px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <a href="https://www.facebook.com/opswerks/" target="_blank" rel="noopener noreferrer" className="block rounded-[22px] focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
              <GlareHover
                borderRadius="22px"
                background="linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))"
                className="flex min-h-[286px] w-full flex-col border border-[#7597d4]/24 px-4 py-5 text-center shadow-[0_18px_42px_rgba(4,12,38,0.56)]"
              >
                <div className="flex flex-1 items-center justify-center">
                  <Image src="/assets/sponsors/Icon-2.webp" alt="OpsWerks logo" width={672} height={672} draggable={false} className="h-auto w-[185px]" />
                </div>
                <p className="mt-2 text-base text-[#90a4c8]">Platinum Sponsor</p>
              </GlareHover>
            </a>
            <a href="https://www.facebook.com/PUPCCISSC/" target="_blank" rel="noopener noreferrer" className="block rounded-[22px] focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
              <GlareHover
                borderRadius="22px"
                background="linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))"
                className="flex min-h-[286px] w-full flex-col border border-[#7597d4]/24 px-4 py-5 text-center shadow-[0_18px_42px_rgba(4,12,38,0.56)]"
              >
                <div className="flex flex-1 items-center justify-center">
                  <Image
                    src="/assets/sponsors/Icon-3.webp"
                    alt="CCIS Student Council logo"
                    width={1120}
                    height={768}
                    draggable={false}
                    className="h-auto w-[300px]"
                  />
                </div>
                <p className="mt-2 text-base text-[#90a4c8]">Gold Sponsor</p>
              </GlareHover>
            </a>
          </div>
        </div>

        <div className="mt-12 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">Media Partner</p>
          <a href="https://www.wheninmanila.com/" target="_blank" rel="noopener noreferrer" className="mx-auto mt-4 block w-full max-w-[230px] rounded-[18px] focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
            <GlareHover
              borderRadius="18px"
              background="linear-gradient(160deg,rgba(19,34,74,0.54),rgba(9,17,44,0.48))"
              className="flex w-full items-center justify-center border border-[#7597d4]/24 px-4 py-5 shadow-[0_18px_42px_rgba(4,12,38,0.56)]"
            >
              <Image
                src="/assets/sponsors/Icon-4.webp"
                alt="When In Manila logo"
                width={447}
                height={448}
                draggable={false}
                className="h-auto w-[140px]"
              />
            </GlareHover>
          </a>
        </div>

        <div className="mt-12 w-full">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ba5d6]/85">Partnered With</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {PARTNER_ICONS.map((logo) => (
              <a
                key={logo.src}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={320}
                  height={320}
                  className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                />
              </a>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            <a href="https://www.facebook.com/GDGonCampusTUPManila/" target="_blank" rel="noopener noreferrer" className="block rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
              <Image
                src="/assets/sponsors/GDG-TUP.webp"
                alt="Google Developer Groups on Campus TUP Manila"
                width={1048}
                height={152}
                className="h-15 w-auto object-contain sm:h-16"
              />
            </a>
            <a href="https://www.facebook.com/gdgoc.numanila" target="_blank" rel="noopener noreferrer" className="block rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
              <Image
                src="/assets/sponsors/GDG-NU-MANILA.webp"
                alt="Google Developer Groups on Campus NU Manila"
                width={1048}
                height={152}
                className="h-15 w-auto object-contain sm:h-16"
              />
            </a>
          </div>

          <div className="mt-3 flex justify-center">
            <a href="https://www.facebook.com/GDGoCDLSU/" target="_blank" rel="noopener noreferrer" className="block rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#7597d4]/50">
              <Image
                src="/assets/sponsors/GDG-DLSU.webp"
                alt="Google Developer Group De La Salle University"
                width={635}
                height={107}
                className="h-18 w-auto object-contain sm:h-22"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
