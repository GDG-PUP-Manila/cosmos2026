"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import AmbientStarfield from "@/components/ui/ambient-starfield";

const speakersData = [
  {
    src: "/assets/speakers/speaker-1.webp",
    alt: "Jazmine Calma speaker card",
    name: "Jazmine Claire Calma",
    position: "Head of Quality Assurance",
    entity: "KOLLAB",
    bio: "Jazmine Calma is a Quality Assurance Engineer who has been working with Kollab since 2020. She holds multiple certifications from Google Cloud, AWS, and ISTQB, and has worked across software testing, and cloud platforms. Outside of her technical role, Jazmine actively supports inclusive tech communities. She serves as a Community Lead for GDG Cloud Manila, and an Ambassador for Women Techmakers."
  },
  {
    src: "/assets/speakers/speaker-2.webp",
    alt: "Sermil Matoto speaker card",
    name: "Sermil Matoto",
    position: "Chief Engineer",
    entity: "KOLLAB",
    bio: (
      <>
        Recognized as a Google Developer Expert (GDE) for Cloud, specializing in multi-cloud architecture, serverless computing, and DevOps strategies. Proficient across AWS and Google Cloud ecosystems, focusing on building resilient, secure infrastructures and optimizing deployment workflows.
        <br /><br />
        Experienced in driving digital transformation and automating complex pipelines. Dedicated to advancing cloud engineering standards through technical leadership, community speaking, and delivering scalable solutions for modern enterprises.
      </>
    )
  },
  {
    src: "/assets/speakers/speaker-3.webp",
    alt: "John Dustin Santos speaker card",
    name: "John Dustin Santos",
    position: "Chairperson",
    entity: "DEPARTMENT OF INFORMATION TECHNOLOGY",
    bio: "His professional interests include computing education, human–computer interaction, software development, and emerging information technologies. As a department chairperson, he leads initiatives that strengthen teaching and learning, research engagement, industry collaboration, and student development within the IT program. He also contributes to academic quality assurance and program accreditation efforts to continuously enhance the standards of computing education."
  },
  {
    src: "/assets/speakers/speaker-4.webp",
    alt: "Julianne Cera speaker card",
    name: "Julianne Cera",
    position: "Community and Partnership Relations Officer",
    entity: "WHITE CLOAK TECHNOLOGIES",
    bio: "Julianne is a 4th-year BSIT student at PUP Parañaque and a Tech Community and Partnership Relations Officer at White Cloak Technologies. She recently co-organized the first-ever AWSUG PH Leadership Summit and actively manages partnerships for the AWSUG Builders+. Additionally, she serves as a Campus Ambassador for AWS Cloud Club PUP, helping expand to four new campuses this cohort. In her spare time, she manages the social media and behind-the-scenes for the KaKaComputer Podcast and hosts Teacher Trainings for WayMaker HQ. Through these roles, she champions community building and accessible cloud education."
  },
  {
    src: "/assets/speakers/speaker-5.webp",
    alt: "Carlos Jerico Dela Torre speaker card",
    name: "Carlos Jerico Dela Torre",
    position: "Chief Technology Officer",
    entity: "Google Developer Groups on Campus PUP",
    bio: "Carlos Jerico Dela Torre is a third-year Computer Engineering student and technology builder who serves as Chief Technology Officer of Google Developer Groups on Campus PUP and the Co-Founder and Chief Executive Officer of Seekers Guild. As the founder of Axon Enjin and an award-winning hackathon strategist, he architects systems that convert student-led innovation into market-ready ventures—turning vision into execution and execution into scalable enterprises."
  },
];

export default function SpeakersSection() {

  return (
    <section id="speakers" className="relative overflow-hidden bg-transparent px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/assets/speakers/BG-speakers.webp"
          alt="Speakers section background"
          fill
          unoptimized
          draggable={false}
          className="object-cover object-[50%_52%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02081c]/80 via-[#02081c]/20 to-[#02081c]/80" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030712] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute left-1 top-[16%] hidden w-56 -rotate-6 opacity-95 md:block lg:left-6 lg:w-72 will-change-transform">
          <Image
            src="/assets/speakers/astro-1.webp"
            alt=""
            width={783}
            height={993}
            draggable={false}
            className="h-auto w-full"
          />
        </div>

        <div className="absolute right-1 top-[9%] hidden w-56 rotate-8 opacity-95 md:block lg:right-6 lg:w-72 will-change-transform">
          <Image
            src="/assets/speakers/astro-4.webp"
            alt=""
            width={1098}
            height={1154}
            draggable={false}
            className="h-auto w-full"
          />
        </div>

        <div className="absolute right-1 top-[44%] hidden w-60 -rotate-10 opacity-95 md:block lg:right-5 lg:w-80 will-change-transform">
          <Image
            src="/assets/speakers/astro-2.webp"
            alt=""
            width={852}
            height={828}
            draggable={false}
            className="h-auto w-full"
          />
        </div>

        <div className="absolute left-1 bottom-[8%] hidden w-60 rotate-2 opacity-95 md:block lg:left-5 lg:w-80 will-change-transform">
          <Image
            src="/assets/speakers/astro-3.webp"
            alt=""
            width={867}
            height={795}
            draggable={false}
            className="h-auto w-full"
          />
        </div>
      </div>

      <AmbientStarfield className="z-[2]" density={0.8} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        {/* Header Section from Figma */}
        <div className="flex flex-col items-start gap-4 mb-12 md:mb-16">
          <div className="flex items-center gap-4 h-5">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-blue-500 text-sm font-semibold font-['Inter'] uppercase tracking-wider">
              Voices from the frontier.
            </span>
          </div>

          <div className="relative h-20 md:h-24 w-full max-w-[778px]">
            <Image
              src="/assets/speakers/meet-the-speakers-title.webp"
              alt="Meet the Speakers"
              width={778}
              height={96}
              draggable={false}
              className="object-contain object-left ml-[-8px] md:ml-[-18px]"
              priority
            />
          </div>

          <p className="max-w-[970px] text-justify text-slate-400 text-base md:text-lg font-light font-['Inter'] leading-7 mt-2">
            COSMOS 2026 brings together practitioners, builders, and thought leaders from across the technology industry. They&apos;re not just the people who talks about the industry, they&apos;re the ones shipping it.
          </p>
        </div>

        {/* Unified Responsive Grid - Split for precise [3,2] centering */}
        <div className="flex flex-col gap-6 lg:gap-10">
          {/* Top Row: 3 Speakers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 justify-items-center">
            {speakersData.slice(0, 3).map((speaker, idx) => (
              <SpeakerCard key={idx} speaker={speaker} />
            ))}
          </div>

          {/* Bottom Row: 2 Speakers (Centered) */}
          <div className="grid grid-cols-1 lg:flex lg:justify-center gap-6 lg:gap-8 xl:gap-10 justify-items-center">
            {speakersData.slice(3, 5).map((speaker, idx) => (
              <div key={idx} className="w-full max-w-[384px] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(33.333%-1.66rem)] flex justify-center">
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: typeof speakersData[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = useCallback((e: React.MouseEvent) => {
    // Only toggle on touch/mobile — desktop relies on CSS hover
    if (window.matchMedia("(hover: none)").matches) {
      e.stopPropagation();
      setIsFlipped((prev) => !prev);
    }
  }, []);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
  }, []);

  return (
    <div className="group relative mx-auto w-full max-w-[384px] aspect-[395/526] transform-gpu">
      {/* Ambient Backlight Glow */}
      <div
        className={`absolute -inset-2 z-0 bg-sky-500/5 blur-2xl transition-opacity duration-300 ${
          isFlipped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <div
        onClick={handleTap}
        className="relative z-10 h-full w-full overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer will-change-transform"
      >
        {/* Default Front Image */}
        <Image
          src={speaker.src}
          alt={speaker.alt}
          fill
          draggable={false}
          sizes="(min-width: 1280px) 384px, (min-width: 768px) 45vw, 85vw"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 z-10 will-change-opacity ${
            isFlipped ? "opacity-0" : "group-hover:opacity-0"
          }`}
        />

        {/* Hover / Tapped State Overlay */}
        <div
          className={`absolute inset-0 h-full w-full bg-slate-950 z-20 transition-opacity duration-300 will-change-opacity ${
            isFlipped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <Image
            src="/assets/speakers/v2-bg.webp"
            alt="V2 Background overlay"
            fill
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          {/* Close button — only visible on mobile tap */}
          {isFlipped && (
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-3 right-3 z-50 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors md:hidden"
            >
              ✕
            </button>
          )}

          {/* Text Content */}
          <div
            className={`absolute inset-0 z-30 flex flex-col items-center pt-20 pb-6 px-6 sm:px-7 transition-all duration-300 will-change-[opacity,transform] ${
              isFlipped
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
            }`}
          >
            <div className="w-full flex flex-col justify-start items-center space-y-0 mb-3 shrink-0">
              <h3 className="w-full text-center text-white text-[22px] md:text-[24px] font-semibold font-['Inter'] leading-tight tracking-tight break-words">
                {speaker.name}
              </h3>

              <div className="w-full max-w-[320px] text-center text-sky-400 font-normal font-['Inter'] leading-snug pt-1 flex flex-col items-center space-y-0.5">
                <span className="text-xs sm:text-[13px]">{speaker.position}</span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-80">{speaker.entity}</span>
              </div>
            </div>

            {/* Bio with scrollbar */}
            <div className="w-full flex-grow text-justify text-white text-[12px] sm:text-[13px] font-normal font-['Google_Sans'] leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2">
              {speaker.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
