"use client";

import { useRef } from "react";
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
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import AmbientStarfield from "@/components/ui/ambient-starfield";

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
    detail: "Get to know the people early and explore what is waiting for you inside the venue.",
    side: "left",
    icon: "book",
  },
  {
    time: "09:30 AM",
    title: "Welcoming Keynotes",
    detail: "Dr. Cherry D. Casuat and Shunrenn Locaylocay open COSMOS 2026.",
    side: "right",
    icon: "mic",
  },
  {
    time: "10:10 AM",
    title: "Beyond the Code: Building Confidence and Systems in an AI World",
    detail: "Sermil Matoto, Chief Engineer at Kollab.",
    side: "left",
    icon: "lightbulb",
  },
  {
    time: "10:50 AM",
    title: "Catalyzing Change: The Role of Student Organizations in Building Purpose-Driven Communities",
    detail: "Jazmine Calma, Head of Quality Assurance at Kollab.",
    side: "right",
    icon: "users",
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion: Part 1",
    detail: "Sermil Matoto and Jazmin Calma.",
    side: "left",
    icon: "panel",
  },
  {
    time: "11:50 AM",
    title: "Presentation of Tech-xhibit",
    detail: "Aurold John Sadullo, Deputy Chief Technology Officer.",
    side: "right",
    icon: "presentation",
  },
  {
    time: "12:00 NN",
    title: "Lunch Break With Intermission Number",
    detail: "Solomon Nadonga, Chief Community Relations Officer.",
    side: "left",
    icon: "lunch",
  },
  {
    time: "01:10 PM",
    title: "Have You Ever Tried This One? Trying, Failing, and Building Anyway",
    detail: "Julianne Cera, Tech Community and Partnerships Relations Officer.",
    side: "right",
    icon: "chat",
  },
  {
    time: "01:50 PM",
    title: "Starters to Supernovas: Shaping Leaders in Student Communities",
    detail: "John Dustin Santos, Chairperson of Department of Information Technology.",
    side: "left",
    icon: "learn",
  },
  {
    time: "02:20 PM",
    title: "Ice Breaker",
    detail: "Master of Ceremony, COSMOS 2026.",
    side: "right",
    icon: "ice",
  },
  {
    time: "02:30 PM",
    title: "Limitless Possibilities: Reverse-Engineering Your Way to a Startup",
    detail: "Carlos Jerico Dela Torre, Chief Technology Officer.",
    side: "left",
    icon: "launch",
  },
  {
    time: "03:10 PM",
    title: "Panel Discussion: Part 2",
    detail: "Julianne Cera, John Dustin Santos, and Carlos Jerico Dela Torre.",
    side: "right",
    icon: "panel",
  },
  {
    time: "03:30 PM",
    title: "Partner Talks - TBIDO",
    detail: "Technology Business Incubation and Development Office.",
    side: "left",
    icon: "partner",
  },
  {
    time: "03:50 PM - 05:00 PM",
    title: "Closing Ceremony & Final Remarks",
    detail: "Booths, networking sessions, raffles, and closing remarks from GDG PUP leadership.",
    side: "right",
    icon: "flag",
  },
];

type Range = [number, number];

type StoryCloudProps = {
  src: string;
  width: number;
  height: number;
  className: string;
  scrollYProgress: MotionValue<number>;
  side: "left" | "right";
  enterDistance?: number;
  enterRange?: Range;
  driftRange?: Range;
  driftX?: number;
  driftY?: number;
  scaleRange?: Range;
};

function StoryCloud({
  src,
  width,
  height,
  className,
  scrollYProgress,
  side,
  enterDistance = 220,
  enterRange = [0.08, 0.28],
  driftRange = [0.28, 1],
  driftX = 0,
  driftY = 0,
  scaleRange = [1, 1.05],
}: StoryCloudProps) {
  const reduceMotion = useReducedMotion();
  const enterX = useTransform(
    scrollYProgress,
    enterRange,
    reduceMotion ? [0, 0] : [side === "left" ? -enterDistance : enterDistance, 0],
    { clamp: true }
  );
  const driftMotionX = useTransform(scrollYProgress, driftRange, reduceMotion ? [0, 0] : [0, driftX], {
    clamp: true,
  });
  const driftMotionY = useTransform(scrollYProgress, driftRange, reduceMotion ? [0, 0] : [0, driftY], {
    clamp: true,
  });
  const scale = useTransform(scrollYProgress, driftRange, reduceMotion ? [1, 1] : scaleRange, { clamp: true });
  const opacity = useTransform(scrollYProgress, enterRange, reduceMotion ? [1, 1] : [0, 1], { clamp: true });
  const x = useTransform(() => enterX.get() + driftMotionX.get());

  return (
    <motion.div className={className} style={{ x, y: driftMotionY, scale, opacity }}>
      <Image src={src} alt="" width={width} height={height} className="h-auto w-full" />
    </motion.div>
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
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start 88%", "start 64%"],
  });

  const entryOpacity = useTransform(itemProgress, [0, 1], [reduceMotion ? 1 : 0, 1], { clamp: true });
  const entryY = useTransform(itemProgress, [0, 1], [reduceMotion ? 0 : 46, 0], { clamp: true });
  const entryScale = useTransform(itemProgress, [0, 1], [reduceMotion ? 1 : 0.95, 1], { clamp: true });
  const entryBlur = useTransform(itemProgress, [0, 1], [reduceMotion ? 0 : 12, 0], { clamp: true });
  const entryFilter = useMotionTemplate`blur(${entryBlur}px)`;

  const markerOpacity = useTransform(itemProgress, [0, 1], [0.34, 1], { clamp: true });
  const markerScale = useTransform(itemProgress, [0, 1], [reduceMotion ? 1 : 0.82, 1], { clamp: true });

  return (
    <motion.article
      ref={itemRef}
      className="relative md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24"
      style={{ opacity: entryOpacity }}
    >
      <motion.div
        className={[
          "pl-16 md:pl-0",
          isLeft ? "md:col-start-1 md:pr-12 md:text-right lg:pr-14" : "md:col-start-2 md:pl-12 md:text-left lg:pl-14",
        ].join(" ")}
        style={{ y: entryY, scale: entryScale, filter: entryFilter }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#58a4ff]">{item.time}</p>
        <h3 className="mt-1 text-[1.26rem] font-bold leading-[1.18] tracking-[-0.01em] text-white sm:text-[1.42rem]">
          {item.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#9db4e2]/86 sm:text-sm">{item.detail}</p>
      </motion.div>

      <motion.div
        className="absolute left-6 top-[6px] z-10 -translate-x-1/2 md:left-1/2"
        style={{ opacity: markerOpacity, scale: markerScale }}
      >
        <div className="relative grid h-10 w-10 place-items-center rounded-full border border-[#58a4ff]/45 bg-[radial-gradient(circle_at_50%_35%,rgba(27,78,170,0.46),rgba(8,21,60,0.9)_66%)] shadow-[0_0_0_1px_rgba(88,164,255,0.18),0_0_20px_rgba(56,138,255,0.28)]">
          <Icon className="h-4 w-4 text-[#7fc3ff]" strokeWidth={1.8} />
          <div className="absolute inset-[4px] rounded-full border border-[#78b9ff]/28" />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function ProgramFlowSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 97%", "end 58%"],
  });
  const reduceMotion = useReducedMotion();
  const timelineDraw = useTransform(scrollYProgress, [0.06, 0.86], [0, 1]);

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
          className="absolute left-[-6rem] top-[0%] hidden w-[31rem] opacity-95 will-change-transform md:block lg:w-[35rem]"
          scrollYProgress={scrollYProgress}
          side="left"
          enterDistance={260}
          enterRange={[0.06, 0.22]}
          driftRange={[0.22, 1]}
          driftX={70}
          driftY={180}
          scaleRange={[1, 1.08]}
        />
        <StoryCloud
          src="/assets/program/clouds-2.webp"
          width={1928}
          height={2124}
          className="absolute right-[-6rem] top-[1%] hidden w-[31rem] opacity-95 will-change-transform md:block lg:w-[35rem]"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={260}
          enterRange={[0.06, 0.22]}
          driftRange={[0.22, 1]}
          driftX={-66}
          driftY={190}
          scaleRange={[1, 1.08]}
        />
        <StoryCloud
          src="/assets/program/clouds-3.webp"
          width={1092}
          height={906}
          className="absolute left-[4%] top-[38%] hidden w-[24rem] opacity-90 will-change-transform md:block lg:w-[27rem]"
          scrollYProgress={scrollYProgress}
          side="left"
          enterDistance={200}
          enterRange={[0.24, 0.42]}
          driftRange={[0.42, 1]}
          driftX={52}
          driftY={130}
          scaleRange={[1, 1.06]}
        />
        <StoryCloud
          src="/assets/program/clouds-4.webp"
          width={1032}
          height={969}
          className="absolute right-[-4rem] top-[28%] hidden w-[27rem] opacity-92 will-change-transform md:block lg:w-[30rem]"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={220}
          enterRange={[0.24, 0.42]}
          driftRange={[0.42, 1]}
          driftX={-48}
          driftY={140}
          scaleRange={[1, 1.07]}
        />
        <StoryCloud
          src="/assets/program/clouds-6.webp"
          width={1071}
          height={906}
          className="absolute right-[4%] top-[49%] hidden w-[23rem] opacity-92 will-change-transform md:block lg:w-[26rem]"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={180}
          enterRange={[0.44, 0.62]}
          driftRange={[0.62, 1]}
          driftX={-38}
          driftY={105}
          scaleRange={[1, 1.05]}
        />
        <StoryCloud
          src="/assets/program/clouds-5.webp"
          width={1191}
          height={1314}
          className="absolute left-[-4rem] top-[52%] hidden w-[29rem] opacity-92 will-change-transform md:block lg:w-[32rem]"
          scrollYProgress={scrollYProgress}
          side="left"
          enterDistance={210}
          enterRange={[0.44, 0.62]}
          driftRange={[0.62, 1]}
          driftX={42}
          driftY={90}
          scaleRange={[1, 1.05]}
        />
        <StoryCloud
          src="/assets/program/clouds-8.webp"
          width={1143}
          height={1386}
          className="absolute left-[-3rem] bottom-[-2%] hidden w-[33rem] opacity-95 will-change-transform md:block lg:w-[37rem]"
          scrollYProgress={scrollYProgress}
          side="left"
          enterDistance={210}
          enterRange={[0.66, 0.84]}
          driftRange={[0.84, 1]}
          driftX={30}
          driftY={72}
          scaleRange={[1, 1.04]}
        />
        <StoryCloud
          src="/assets/program/clouds-7.webp"
          width={831}
          height={975}
          className="absolute right-[-3rem] bottom-[13%] hidden w-[29rem] opacity-95 will-change-transform md:block lg:w-[32rem]"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={200}
          enterRange={[0.66, 0.84]}
          driftRange={[0.84, 1]}
          driftX={-30}
          driftY={76}
          scaleRange={[1, 1.04]}
        />

        <StoryCloud
          src="/assets/program/clouds-1.webp"
          width={1391}
          height={1670}
          className="absolute left-[-5rem] top-2 w-[21rem] opacity-95 will-change-transform md:hidden"
          scrollYProgress={scrollYProgress}
          side="left"
          enterDistance={180}
          enterRange={[0.06, 0.22]}
          driftRange={[0.22, 1]}
          driftX={36}
          driftY={110}
          scaleRange={[1, 1.05]}
        />
        <StoryCloud
          src="/assets/program/clouds-2.webp"
          width={1928}
          height={2124}
          className="absolute right-[-5rem] top-8 w-[21rem] opacity-95 will-change-transform md:hidden"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={180}
          enterRange={[0.06, 0.22]}
          driftRange={[0.22, 1]}
          driftX={-34}
          driftY={118}
          scaleRange={[1, 1.06]}
        />
        <StoryCloud
          src="/assets/program/clouds-4.webp"
          width={1032}
          height={969}
          className="absolute right-[-2rem] top-[33%] w-[20rem] opacity-90 will-change-transform md:hidden"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={140}
          enterRange={[0.38, 0.58]}
          driftRange={[0.58, 1]}
          driftX={-24}
          driftY={90}
          scaleRange={[1, 1.05]}
        />
        <StoryCloud
          src="/assets/program/clouds-8.webp"
          width={1143}
          height={1386}
          className="absolute left-[-2rem] bottom-[1%] w-[24rem] opacity-95 will-change-transform md:hidden"
          scrollYProgress={scrollYProgress}
          side="left"
          enterDistance={150}
          enterRange={[0.64, 0.84]}
          driftRange={[0.84, 1]}
          driftX={20}
          driftY={66}
          scaleRange={[1, 1.04]}
        />
        <StoryCloud
          src="/assets/program/clouds-5.webp"
          width={831}
          height={975}
          className="absolute right-[-2rem] bottom-[19%] w-[22rem] opacity-95 will-change-transform md:hidden"
          scrollYProgress={scrollYProgress}
          side="right"
          enterDistance={150}
          enterRange={[0.64, 0.84]}
          driftRange={[0.84, 1]}
          driftX={-20}
          driftY={70}
          scaleRange={[1, 1.04]}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        <Image
          src="/assets/program/astro-1.webp"
          alt=""
          width={670}
          height={684}
          className="absolute left-[10%] top-[27%] hidden w-[9.5rem] rotate-[-6deg] opacity-90 astro-float-b drop-shadow-[0_0_18px_rgba(174,236,255,0.56)] md:block lg:w-[10.5rem]"
        />
        <Image
          src="/assets/program/astro-2.webp"
          alt=""
          width={852}
          height={828}
          className="absolute right-[9%] top-[45%] hidden w-[10rem] rotate-[8deg] opacity-95 astro-float-a drop-shadow-[0_0_18px_rgba(174,236,255,0.56)] md:block lg:w-[11rem]"
        />
        <Image
          src="/assets/program/astro-3.webp"
          alt=""
          width={1132}
          height={1169}
          className="absolute right-[5%] top-[84%] hidden w-[11rem] rotate-[-8deg] opacity-92 astro-float-c drop-shadow-[0_0_18px_rgba(174,236,255,0.56)] md:block lg:w-[12.5rem]"
        />
      </div>

      <AmbientStarfield className="z-[1]" density={1.1} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#68b6ff]">
            <span className="h-px w-8 bg-[#68b6ff]/65" />
            <span>Agenda</span>
            <span className="h-px w-8 bg-[#68b6ff]/65" />
          </div>
          <h2 className="bg-[linear-gradient(180deg,#ffffff_0%,#d6f4ff_28%,#8de2ff_54%,#8ea9ff_100%)] bg-clip-text text-3xl font-black uppercase leading-[0.95] tracking-tight text-transparent drop-shadow-[0_0_22px_rgba(124,201,255,0.7)] sm:text-4xl md:text-5xl">
            Program Flow
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-xs leading-relaxed text-[#c9d9ff]/88 sm:text-sm">
            A day designed to move you. From the opening countdown to the final send-off, every hour is intentional.
          </p>
        </header>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute bottom-0 left-6 top-2 w-px bg-[linear-gradient(180deg,rgba(89,148,255,0.08),rgba(89,148,255,0.35)_15%,rgba(89,148,255,0.28)_85%,rgba(89,148,255,0.08))] md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute bottom-0 left-6 top-2 w-px bg-[linear-gradient(180deg,rgba(127,190,255,0),rgba(127,190,255,0.94)_20%,rgba(127,190,255,0.78)_82%,rgba(127,190,255,0))] md:left-1/2 md:-translate-x-1/2"
            style={{
              scaleY: reduceMotion ? 1 : timelineDraw,
              transformOrigin: "top center",
            }}
          />

          <div className="space-y-7 sm:space-y-8">
            {programItems.map((item) => (
              <StoryTimelineItem key={`${item.time}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
