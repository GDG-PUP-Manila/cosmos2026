"use client";

import { motion } from "framer-motion";

export interface Speaker {
  name: string;
  fullName?: string;
  organization: string;
  role: string;
  bio: string;
  cardImage: string;
}

const SPEAKERS: Speaker[] = [
  {
    name: "Jazmine Calma",
    fullName: "Jazmine Claire Calma",
    organization: "KOLLAB",
    role: "Head of Quality Assurance",
    cardImage: "/speakers/speaker-cards/V1-JAZMINE.webp",
    bio: "Jazmine Calma is a Quality Assurance Engineer who has been working with Kollab since 2020. She holds multiple certifications from Google Cloud, AWS, and ISTQB, and has worked across software testing, and cloud platforms. Outside of her technical role, Jazmine actively supports inclusive tech communities. She serves as a Community Lead for GDG Cloud Manila, and an Ambassador for Women Techmakers.",
  },
  {
    name: "Sermil Matoto",
    organization: "KOLLAB",
    role: "Chief Engineer",
    cardImage: "/speakers/speaker-cards/V1-SERMIL.webp",
    bio: "Recognized as a Google Developer Expert (GDE) for Cloud, specializing in multi-cloud architecture, serverless computing, and DevOps strategies. Proficient across AWS and Google Cloud ecosystems, focusing on building resilient, secure infrastructures and optimizing deployment workflows.\n\nExperienced in driving digital transformation and automating complex pipelines. Dedicated to advancing cloud engineering standards through technical leadership, community speaking, and delivering scalable solutions for modern enterprises.",
  },
  {
    name: "John Dustin Santos",
    organization: "DEPARTMENT OF INFORMATION TECHNOLOGY",
    role: "Chairperson",
    cardImage: "/speakers/speaker-cards/V1-DUSTIN.webp",
    bio: "His professional interests include computing education, human\u2013computer interaction, software development, and emerging information technologies. As a department chairperson, he leads initiatives that strengthen teaching and learning, research engagement, industry collaboration, and student development within the IT program. He also contributes to academic quality assurance and program accreditation efforts to continuously enhance the standards of computing education.",
  },
  {
    name: "Julianne Cera",
    organization: "WHITE CLOAK TECHNOLOGIES",
    role: "Community and Partnerships Relations Officer",
    cardImage: "/speakers/speaker-cards/V1-JULIANNE.webp",
    bio: "Julianne is a 4th-year BSIT student at PUP Para\u00f1aque and a Tech Community and Partnership Relations Officer at White Cloak Technologies. She recently co-organized the first-ever AWSUG PH Leadership Summit and actively manages partnerships for the AWSUG Builders+. Additionally, she serves as a Campus Ambassador for AWS Cloud Club PUP, helping expand to four new campuses this cohort. In her spare time, she manages the social media and behind-the-scenes for the KaKaComputer Podcast and hosts Teacher Trainings for WayMaker HQ. Through these roles, she champions community building and accessible cloud education.",
  },
  {
    name: "Carlos Jerico Dela Torre",
    fullName: "Carlos Jerico\nDela Torre",
    organization: "GDG PUP",
    role: "Chief Technology Officer",
    cardImage: "/speakers/speaker-cards/V1-JERICO.webp",
    bio: "Carlos Jerico Dela Torre is a third-year Computer Engineering student and technology builder who serves as Chief Technology Officer of Google Developer Groups on Campus PUP and the Co-Founder and Chief Executive Officer of Seekers Guild. As the founder of Axon Enjin and an award-winning hackathon strategist, he architects systems that convert student-led innovation into market-ready ventures\u2014turning vision into execution and execution into scalable enterprises.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const formatSubtitle = (speaker: Speaker) => {
  // Jazmine and Sermil stay inline "Role, Organization"
  if (speaker.name === "Jazmine Calma" || speaker.name === "Sermil Matoto") {
    // Convert KOLLAB to Title Case -> Kollab
    const org = speaker.organization === "KOLLAB" ? "Kollab" : speaker.organization;
    return (
      <span className="block text-[#57caff]">
        {speaker.role}, {org}
      </span>
    );
  }

  // Others get 2 lines:
  // Role
  // Organization
  let orgName = speaker.organization;
  if (orgName === "DEPARTMENT OF INFORMATION TECHNOLOGY") {
    orgName = "Department of Information Technology";
  } else if (orgName === "WHITE CLOAK TECHNOLOGIES") {
    orgName = "White Cloak Technologies";
  }

  return (
    <>
      <span className="block text-[#57caff] leading-snug">{speaker.role}</span>
      <span className="block text-[#57caff] leading-snug">—<br/>{orgName}</span>
    </>
  );
};

// Adjusted Subtitle formatter based on user feedback
const SubtitleText = ({ speaker }: { speaker: Speaker }) => {
  if (speaker.name === "Jazmine Calma" || speaker.name === "Sermil Matoto") {
    const org = speaker.organization === "KOLLAB" ? "Kollab" : speaker.organization;
    return (
      <p className="font-['Google_Sans'] font-normal text-center text-[#57caff] text-[12px] sm:text-[13px] leading-[18px] mb-5 sm:mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {speaker.role}, {org}
      </p>
    );
  }

  // Multi-line formatting for Dustin, Julianne, Jerico
  let orgName = speaker.organization;
  if (orgName === "DEPARTMENT OF INFORMATION TECHNOLOGY") {
    orgName = "Department of Information Technology";
  } else if (orgName === "WHITE CLOAK TECHNOLOGIES") {
    orgName = "White Cloak Technologies";
  }

  // Force whitespace-nowrap and slightly scale down long roles like Julianne's
  // "Community and Partnerships Relations Officer" so it fits 1 line
  return (
    <p className="font-['Google_Sans'] font-normal text-center text-[#57caff] text-[11px] sm:text-[12px] leading-[18px] mb-4 sm:mb-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] w-full">
      <span className="block whitespace-nowrap overflow-hidden text-ellipsis">{speaker.role},</span>
      <span className="block text-[11px] sm:text-[12px] px-2 mt-0.5">{orgName}</span>
    </p>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group w-full max-w-[340px] aspect-[395/527] mx-auto"
    >
      <div className="relative w-full h-full rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.6),0px_0px_0px_1px_#1d293d] overflow-hidden">
        {/* ========== FRONT FACE (V1 Image) ========== */}
        <img
          src={speaker.cardImage}
          alt={speaker.name}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />

        {/* ========== HOVER (V2 Background + Text Overlay) ========== */}
        <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">

          {/* V2 Shared Background */}
          <img
            src="/speakers/speaker-cards/V2 Background.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Text Content Overlay */}
          <div className="absolute w-full h-full flex flex-col justify-start px-6 sm:px-8 pt-[64px] sm:pt-[72px] pb-[44px] sm:pb-[52px] z-20">
            {/* Top section (Name + Subtitle) */}
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Separator line */}
              <div className="w-full h-px min-h-[1px] bg-[#4285f4]/30 mb-4" />

              {/* Speaker name */}
              <h3 className="font-['Google_Sans'] font-bold text-center text-white text-[24px] sm:text-[28px] leading-[1.1] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-pre-line w-full">
                {speaker.fullName || speaker.name}
              </h3>

              {/* Role + Organization subtitle */}
              <SubtitleText speaker={speaker} />
            </div>

            {/* Biography — Takes up remaining space gracefully */}
            {/* We use flex-1 to push it to fill space, but overflow-y-auto to ensure
                it never breaches the safe bottom padding container if text is too long */}
            <div 
              className="flex-1 w-full overflow-y-auto pr-1 flex flex-col justify-start"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="w-full h-full flex flex-col justify-center min-h-max">
                {speaker.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-['Google_Sans'] leading-[1.6] text-[13px] sm:text-[14px] text-justify text-[#e2e8f0] mb-3 last:mb-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="py-16 sm:py-20 lg:py-24 bg-[#01030e] text-white px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/speakers/background/Mini Stars.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <img
          src="/speakers/background/galaxy.svg"
          alt=""
          className="absolute top-0 right-0 w-[800px] h-auto opacity-30 mix-blend-screen"
        />
        <img
          src="/speakers/background/Circle.svg"
          alt=""
          className="absolute top-1/4 -left-32 w-96 h-96 opacity-40 mix-blend-screen blur-xl"
        />
        <img
          src="/speakers/background/Group 238 1.webp"
          alt=""
          className="absolute -top-10 -left-10 w-[400px] h-[400px] object-contain opacity-40 mix-blend-screen pointer-events-none"
        />
        <img
          src="/speakers/background/Group 238 1.webp"
          alt=""
          className="absolute top-1/2 -right-20 w-[600px] h-[600px] object-contain opacity-40 mix-blend-screen -rotate-45 pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mb-10 sm:mb-14 lg:mb-16 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-[1px] w-12 bg-cyan-400" />
            <p className="text-cyan-400 text-xs tracking-[0.2em] font-['Inter'] font-semibold uppercase">
              VOICES FROM THE FRONTIER.
            </p>
          </div>

          <img
            src="/speakers/background/MEET THE SPEAKERS 1.svg"
            alt="MEET THE SPEAKERS"
            className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain mb-4 sm:mb-6 -ml-2"
          />

          <p className="text-gray-400 max-w-2xl text-left font-['Inter'] text-sm md:text-base leading-relaxed">
            COSMOS 2026 brings together practitioners, builders, and thought
            leaders from across the technology industry.
            <br className="hidden md:block" />
            They&apos;re not just the people who talks about the industry,
            they&apos;re the ones shipping it.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="w-full flex flex-col items-center gap-10 sm:gap-12 lg:gap-14"
        >
          {/* Top Row — 1 col mobile, 2 col md, 3 col lg */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 justify-items-center">
            {SPEAKERS.slice(0, 3).map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>

          {/* Bottom Row — 1 col mobile, 2 cards centered */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 justify-items-center max-w-3xl mx-auto">
            {SPEAKERS.slice(3).map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
