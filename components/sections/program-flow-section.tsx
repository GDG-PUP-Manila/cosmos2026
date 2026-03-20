"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Building2,
  Flag,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageSquare,
  Mic,
  MonitorPlay,
  Rocket,
  Snowflake,
  Sparkles,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import AmbientStarfield from "@/components/ui/ambient-starfield";
import { TracingBeam } from "@/components/ui/tracing-beam";

type ProgramItem = {
  time: string;
  title: string;
  detail: string;
  side: "left" | "right";
  icon: keyof typeof iconMap;
};

const iconMap = {
  book: BookOpen,
  mic: Mic,
  lightbulb: Lightbulb,
  users: Users,
  presentation: MonitorPlay,
  lunch: UtensilsCrossed,
  chat: MessageSquare,
  learn: GraduationCap,
  ice: Snowflake,
  launch: Rocket,
  partner: Building2,
  panel: Handshake,
  spark: Sparkles,
  flag: Flag,
};

const programItems: ProgramItem[] = [
  {
    time: "09:00 AM - 09:30 AM",
    title: "Registration & Immersive Welcome",
    detail: "Get to know the people early and explore what’s waiting for you inside the venue",
    side: "left",
    icon: "book",
  },
  {
    time: "09:30 AM",
    title: "Welcoming Keynotes",
    detail: "Engr. Julius Cansino and Mr. Shunrenn Locaylocay takes the stage for their warm opening remarks for COSMOS 2026",
    side: "right",
    icon: "mic",
  },
  {
    time: "10:10 AM",
    title: "Beyond the Code: Building Confidence and Systems in an AI World",
    detail: "Sermil Matoto, Chief Engineer at Kollab",
    side: "left",
    icon: "lightbulb",
  },
  {
    time: "10:50 AM",
    title: "Catalyzing Change: The Role of Student Organizations in Building Purpose-Driven Communities",
    detail: "Jazmine Calma, Head of Quality Assurance at Kollab",
    side: "right",
    icon: "users",
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion: Part 1",
    detail: "Sermil Matoto & Jazmin Calma",
    side: "left",
    icon: "panel",
  },
  {
    time: "11:50 AM",
    title: "Presentation of Tech-xhibit",
    detail: "Aurold John Sadullo, Deputy Chief Technology Officer",
    side: "right",
    icon: "presentation",
  },
  {
    time: "12:00 NN",
    title: "Lunch Break With Intermission Number",
    detail: "Solomon Nadonga, Chief Community Relations Officer",
    side: "left",
    icon: "lunch",
  },
  {
    time: "01:10 PM",
    title: "Have You Ever Tried This One? Trying, Failing, and Building Anyway",
    detail: "Julianne Cera, Tech Community and Partnerships Relations Officer",
    side: "right",
    icon: "chat",
  },
  {
    time: "01:50 PM",
    title: "Starters to Supernovas: Shaping Leaders in Student Communities",
    detail: "John Dustin Santos, Chairperson of Department of Information Technology",
    side: "left",
    icon: "learn",
  },
  {
    time: "02:20 PM",
    title: "Ice Breaker",
    detail: "Master of Ceremony, COSMOS 2026",
    side: "right",
    icon: "ice",
  },
  {
    time: "02:30 PM",
    title: "Limitless Possibilities: Reverse-Engineering Your Way to a Startup",
    detail: "Carlos Jerico Dela Torre, Chief Technology Officer",
    side: "left",
    icon: "launch",
  },
  {
    time: "03:10 PM",
    title: "Panel Discussion: Part 2",
    detail: "Julianne Cera, John Dustin Santos & Carlos Jerico Dela Torre",
    side: "right",
    icon: "panel",
  },
  {
    time: "03:30 PM",
    title: "Partner Talks - TBIDO",
    detail: "Technology Business Incubation and Development Office",
    side: "left",
    icon: "partner",
  },
  {
    time: "03:50 PM - 05:00 PM",
    title: "Closing Ceremony & Final Remarks",
    detail: "Booths and Networking Sessions, Raffles & Closing Remarks from GDG PUP ‘26 Chapter Lead, Randy Carlos Lorenzo",
    side: "right",
    icon: "flag",
  },
];

type StoryCloudProps = {
  src: string;
  width: number;
  height: number;
  className: string;
};

function StoryCloud({ src, width, height, className }: StoryCloudProps) {
  return (
    <div className={className}>
      <Image src={src} alt="" width={width} height={height} draggable={false} className="h-auto w-full" priority={false} loading="lazy" />
    </div>
  );
}

type StoryTimelineItemProps = {
  item: ProgramItem;
};

function StoryTimelineItem({ item }: StoryTimelineItemProps) {
  const Icon = iconMap[item.icon];
  const isLeft = item.side === "left";
  const reduceMotion = useReducedMotion();
  const itemRef = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  
  // The shooting star is exactly at 60% of viewport. 
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start 60%", "start 45%"],
  });

  useMotionValueEvent(itemProgress, "change", (latest) => {
    // Reveal item when star passes down, hide when star passes back up
    if (latest > 0 && !isRevealed) {
      setIsRevealed(true);
    } else if (latest <= 0 && isRevealed) {
      setIsRevealed(false);
    }
  });

  return (
    <motion.article
      ref={itemRef}
      className="relative md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24"
    >
      <motion.div
        className={[
          "pl-16 md:pl-0",
          isLeft ? "md:col-start-1 md:pr-12 md:text-right lg:pr-14" : "md:col-start-2 md:pl-12 md:text-left lg:pl-14",
        ].join(" ")}
        initial={false}
        animate={{
          opacity: isRevealed ? 1 : 0,
          y: isRevealed ? 0 : (reduceMotion ? 0 : 30),
          filter: isRevealed ? "blur(0px)" : (reduceMotion ? "blur(0px)" : "blur(12px)"),
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#58a4ff]">{item.time}</p>
        
        {/* Minimal breathing glow on title after revealed */}
        <motion.h3 
          className="mt-1 text-[1.26rem] font-bold leading-[1.18] tracking-[-0.01em] text-white sm:text-[1.42rem]"
          animate={isRevealed ? {
            textShadow: [
              "0px 0px 4px rgba(255,255,255,0.0)", 
              "0px 0px 10px rgba(88,164,255,0.45)", 
              "0px 0px 4px rgba(255,255,255,0.0)"
            ]
          } : { textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
          transition={isRevealed ? {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8 // Start breathing after the reveal animation finishes
          } : {}}
        >
          {item.title}
        </motion.h3>
        
        <p className="mt-2 text-xs leading-relaxed text-[#9db4e2]/86 sm:text-sm">{item.detail}</p>
      </motion.div>

      <motion.div
        className="absolute left-6 top-[6px] z-10 -translate-x-1/2 md:left-1/2"
      >
        <div className="relative grid h-10 w-10 place-items-center rounded-full border border-[#58a4ff]/20 bg-[#08153c]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(8,21,60,0.8)]">
          {/* Active Glow Layer (Solid State) with intense breathing sequence */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-[#1b4eaa] border border-[#58a4ff]"
            initial={false}
            animate={{
              opacity: isRevealed ? 1 : 0,
              boxShadow: isRevealed 
                ? [
                    "0px 0px 20px rgba(88,164,255,0.8), 0px 0px 30px rgba(88,164,255,0.4)",
                    "0px 0px 35px rgba(141,226,255,1), 0px 0px 60px rgba(88,164,255,0.8)",
                    "0px 0px 20px rgba(88,164,255,0.8), 0px 0px 30px rgba(88,164,255,0.4)"
                  ] 
                : "0px 0px 0px rgba(0,0,0,0)"
            }}
            transition={{
              opacity: { duration: 0.2 },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
            }}
          />
          <Icon className="relative h-4 w-4 text-white z-10" strokeWidth={1.8} />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function ProgramFlowSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="program"
      className="relative isolate overflow-hidden px-4 py-24 text-white md:px-6 md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/program/BG-program.webp"
          alt="Program section background"
          fill
          draggable={false}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(44,130,255,0.22),transparent_56%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,28,0.85)_0%,rgba(2,8,28,0.4)_22%,rgba(2,8,28,0.52)_54%,rgba(2,8,28,0.86)_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3]" aria-hidden="true">
        <StoryCloud
          src="/assets/program/clouds-1.webp"
          width={1391}
          height={1670}
          className="absolute left-[-6rem] top-[0%] hidden w-[31rem] opacity-95 md:block lg:w-[35rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-2.webp"
          width={1928}
          height={2124}
          className="absolute right-[-6rem] top-[1%] hidden w-[31rem] opacity-95 md:block lg:w-[35rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-3.webp"
          width={1092}
          height={906}
          className="absolute left-[4%] top-[38%] hidden w-[24rem] opacity-90 md:block lg:w-[27rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-4.webp"
          width={1032}
          height={969}
          className="absolute right-[-4rem] top-[28%] hidden w-[27rem] opacity-92 md:block lg:w-[30rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-6.webp"
          width={1071}
          height={906}
          className="absolute right-[4%] top-[49%] hidden w-[23rem] opacity-92 md:block lg:w-[26rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-5.webp"
          width={1191}
          height={1314}
          className="absolute left-[-4rem] top-[52%] hidden w-[29rem] opacity-92 md:block lg:w-[32rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-8.webp"
          width={1143}
          height={1386}
          className="absolute left-[-3rem] bottom-[-2%] hidden w-[33rem] opacity-95 md:block lg:w-[37rem]"
        />
        <StoryCloud
          src="/assets/program/clouds-7.webp"
          width={831}
          height={975}
          className="absolute right-[-3rem] bottom-[13%] hidden w-[29rem] opacity-95 md:block lg:w-[32rem]"
        />

        <StoryCloud
          src="/assets/program/clouds-1.webp"
          width={1391}
          height={1670}
          className="absolute left-[-5rem] top-2 w-[21rem] opacity-95 md:hidden"
        />
        <StoryCloud
          src="/assets/program/clouds-2.webp"
          width={1928}
          height={2124}
          className="absolute right-[-5rem] top-8 w-[21rem] opacity-95 md:hidden"
        />
        <StoryCloud
          src="/assets/program/clouds-4.webp"
          width={1032}
          height={969}
          className="absolute right-[-2rem] top-[33%] w-[20rem] opacity-90 md:hidden"
        />
        <StoryCloud
          src="/assets/program/clouds-8.webp"
          width={1143}
          height={1386}
          className="absolute left-[-2rem] bottom-[1%] w-[24rem] opacity-95 md:hidden"
        />
        <StoryCloud
          src="/assets/program/clouds-5.webp"
          width={831}
          height={975}
          className="absolute right-[-2rem] bottom-[19%] w-[22rem] opacity-95 md:hidden"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        <Image
          src="/assets/program/astro-1.webp"
          alt=""
          width={670}
          height={684}
          draggable={false}
          className="absolute left-[10%] top-[27%] hidden w-[9.5rem] rotate-[-6deg] opacity-90 astro-float-b drop-shadow-[0_0_18px_rgba(174,236,255,0.56)] md:block lg:w-[10.5rem]"
        />
        <Image
          src="/assets/program/astro-2.webp"
          alt=""
          width={852}
          height={828}
          draggable={false}
          className="absolute right-[9%] top-[45%] hidden w-[10rem] rotate-[8deg] opacity-95 astro-float-a drop-shadow-[0_0_18px_rgba(174,236,255,0.56)] md:block lg:w-[11rem]"
        />
        <Image
          src="/assets/program/astro-3.webp"
          alt=""
          width={1132}
          height={1169}
          draggable={false}
          className="absolute right-[5%] top-[84%] hidden w-[11rem] rotate-[-8deg] opacity-92 astro-float-c drop-shadow-[0_0_18px_rgba(174,236,255,0.56)] md:block lg:w-[12.5rem]"
        />
      </div>

      <AmbientStarfield className="z-[1]" density={0.8} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mb-16 md:mb-24 flex flex-col items-center justify-center relative z-10 w-full max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#4285f4]/50" />
            <span className="text-[#4285f4] text-sm font-semibold uppercase tracking-[1.4px]">Agenda</span>
            <div className="w-8 h-px bg-[#4285f4]/50" />
          </div>
          
          <div className="relative w-full max-w-[514px] h-[75px] mb-6 md:mb-8">
            <Image 
              src="/assets/program/program-flow-title.webp" 
              alt="Program Flow" 
              fill 
              draggable={false}
              className="object-contain"
            />
          </div>
          
          <p className="text-[#90a1b9] text-[16px] md:text-[18px] font-light leading-[28px] text-center max-w-[599px]">
            A day designed to move you. From the opening countdown to the final send-off, every hour is intentional.
          </p>
        </header>

        <TracingBeam className="px-0">
          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="space-y-12 md:space-y-24 lg:space-y-32">
              {programItems.map((item) => (
                <StoryTimelineItem key={`${item.time}-${item.title}`} item={item} />
              ))}
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
