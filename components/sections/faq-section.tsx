"use client";

import { type ReactNode, useState, useMemo, memo } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

import AmbientStarfield from "@/components/ui/ambient-starfield";

const MemoizedAmbientStarfield = memo(AmbientStarfield);

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is COSMOS 2026?",
    answer: (
      <p>
        COSMOS 2026: Exploring Infinite Possibilities Through Technology and Innovation is the flagship technology
        summit of Google Developer Groups on Campus Polytechnic University of the Philippines (GDG PUP). It is a one-day
        immersive event that brings together students, developers, industry professionals, and innovators for a day of
        keynote talks, live demos, networking and community building.
      </p>
    ),
  },
  {
    question: "When and where will COSMOS 2026 take place?",
    answer: (
      <div className="space-y-1">
        <p>
          <span className="font-semibold text-[#9fb8df]">Date:</span> March 24, 2026
        </p>
        <p>
          <span className="font-semibold text-[#9fb8df]">Time:</span> 09:30 AM - 5:00 PM (doors open at 9:00 AM)
        </p>
        <p>
          <span className="font-semibold text-[#9fb8df]">Venue:</span> Bulwagang Balagtas, Polytechnic University of the
          Philippines, Manila
        </p>
      </div>
    ),
  },
  {
    question: "What is the theme of COSMOS 2026?",
    answer: (
      <p>
        This year&apos;s theme is Exploring Infinite Possibilities Through Technology and Innovation. It reflects GDG PUP&apos;s
        belief that every student carries within them the potential to shape the future of technology along with the right
        knowledge, community, and inspiration that can unlock that potential.
      </p>
    ),
  },
  {
    question: "Who can attend COSMOS 2026?",
    answer: (
      <div className="space-y-3">
        <p>
          COSMOS 2026 is <strong className="font-semibold text-[#9fb8df]">open to ALL PUPians</strong>, regardless of
          course or year level. Whether you&apos;re passionate about development, design, AI, cloud, or simply curious about
          where technology is headed, there is a place for you at COSMOS.
        </p>
        <p className="italic text-[#7e92b5]">
          Non-members may also attend on a limited basis. GDG PUP members are given registration priority.
        </p>
      </div>
    ),
  },
  {
    question: "Will food be provided?",
    answer: (
      <p>
        <strong className="font-semibold text-[#9fb8df]">Light snacks and refreshments will be provided throughout the event.</strong>{" "}
        A dedicated lunch break is built into the program, which you are also welcome to explore PUP&apos;s canteen or bring
        your own meal. We recommend coming with a light breakfast so you are sharp and ready for the morning session.
      </p>
    ),
  },
  {
    question: "What should I wear?",
    answer: (
      <p>
        <strong className="font-semibold text-[#9fb8df]">There is no strict dress code!</strong> wear what makes you
        comfortable and ready to engage. Smart casual is a good benchmark. Wear comfortable shoes as you may be moving
        between sessions and booth areas throughout the day.
      </p>
    ),
  },
  {
    question: "Is there a registration fee?",
    answer: (
      <p>
        <strong className="font-semibold text-[#9fb8df]">No.</strong> COSMOS 2026 is free to attend, but slots are
        limited and registration is required for entry.
      </p>
    ),
  },
  {
    question: "How do I register for COSMOS 2026?",
    answer: (
      <div className="space-y-3">
        <p>
          Registration is done exclusively through our Bevy which is the official GDG PUP registration platform. Head on
          this{" "}
          <a
            href="https://gdg.community.dev/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#5db3ff] underline underline-offset-2"
          >
            registration link
          </a>{" "}
          to RSVP, wait for a confirmation of your slot. Once registered, you will receive your event pass and QR code
          for day-of check-in.
        </p>
        <p className="italic text-[#7e92b5]">Slots are limited. Register early to guarantee your slot.</p>
      </div>
    ),
  },
  {
    question: "What happens after I register?",
    answer: (
      <p>
        Once your registration is confirmed on the BEVY platform,{" "}
        <strong className="font-semibold text-[#9fb8df]">you will receive a confirmation notification</strong> with your
        event pass and unique QR code. Keep this accessible on your phone as you will need it for check-in on March 24.
        On your registered email, you will receive event updates, schedule announcements, and pre-event reminders upon
        bevy confirmation and on GDG PUP&apos;s official channels.
      </p>
    ),
  },
  {
    question: "What do I need to bring on the day?",
    answer: (
      <div className="space-y-1">
        <p>
          <span className="font-semibold text-[#9fb8df]">Required:</span> Your event pass (QR code)
        </p>
        <p>
          <span className="font-semibold text-[#9fb8df]">Optional:</span> Notebook, portable charger, mobile data and your
          best questions for the speakers
        </p>
      </div>
    ),
  },
  {
    question: "Will I receive a certificate for attending COSMOS 2026?",
    answer: (
      <p>
        <strong className="font-semibold text-[#9fb8df]">Yes.</strong> All registered attendees who complete the event
        will receive an official e-certificate of participation from GDG PUP. Certificates will be issued digitally and
        distributed to your emails.
      </p>
    ),
  },
  {
    question: "How can I stay connected with the GDG PUP community after the event?",
    answer: (
      <p>
        COSMOS 2026 is just one chapter in GDG PUP&apos;s year-round story. After the event, you are encouraged to remain an
        active part of the community - attend future events, join study jams, and grow alongside your fellow builders.
        The connections you make at COSMOS can last well beyond a single day.
      </p>
    ),
  },
  {
    question: "I have a question that isn't answered here. How do I get in touch?",
    answer: (
      <div className="space-y-1.5">
        <p>We would love to hear from you. Reach out to the GDG PUP team through any of our official channels:</p>
        <p>
          <span className="font-semibold text-[#9fb8df]">Email:</span>{" "}
          <a href="mailto:gdg.pupmnl@gmail.com" className="font-semibold text-[#5db3ff] underline underline-offset-2">
            gdg.pupmnl@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold text-[#9fb8df]">Facebook:</span>{" "}
          <a
            href="https://www.facebook.com/gdg.pupmnl"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#5db3ff] underline underline-offset-2"
          >
            https://www.facebook.com/gdg.pupmnl
          </a>
        </p>
        <p>
          <span className="font-semibold text-[#9fb8df]">Instagram:</span>{" "}
          <a
            href="https://www.instagram.com/gdg.pupmnl"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#5db3ff] underline underline-offset-2"
          >
            https://www.instagram.com/gdg.pupmnl
          </a>
        </p>
        <p className="pt-1 italic text-[#7e92b5]">
          Our team will respond as promptly as possible. For the fastest updates, follow us on social media.
        </p>
      </div>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden px-4 py-24 text-white md:px-6 md:py-28">
      <Image
        src="/assets/FAQ/BG-FAQ.webp"
        alt="FAQ section background"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,32,0.2)_0%,rgba(3,9,30,0.38)_42%,rgba(2,8,24,0.62)_100%)]" />
      <MemoizedAmbientStarfield className="z-[1] opacity-65" density={0.72} />

      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
        <div className="absolute left-[1%] top-[12%] hidden w-[240px] md:block lg:left-[5%] lg:w-[300px]">
          <Image 
          draggable={false}
            src="/assets/FAQ/astro-4.webp"
            alt=""
            width={618}
            height={803}
            className="h-auto w-full astro-float-a opacity-95 drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
        <div className="absolute right-[1%] top-[3%] hidden w-[235px] md:block lg:right-[5%] lg:w-[300px]">
          <Image 
          draggable={false}
            src="/assets/FAQ/astro-1.webp"
            alt=""
            width={672}
            height={789}
            className="h-auto w-full astro-float-b opacity-95 drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
        <div className="absolute left-[3%] bottom-[23%] hidden w-[220px] md:block lg:left-[7%] lg:w-[275px]">
          <Image 
          draggable={false}
            src="/assets/FAQ/astro-2.webp"
            alt=""
            width={608}
            height={960}
            className="h-auto w-full astro-float-c opacity-95 drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
        <div className="absolute right-[2%] bottom-[16%] hidden w-[255px] md:block lg:right-[6%] lg:w-[330px]">
          <Image 
          draggable={false}
            src="/assets/FAQ/astro-3.webp"
            alt=""
            width={479}
            height={934}
            className="h-auto w-full astro-float-a opacity-95 drop-shadow-[0_0_18px_rgba(174,236,255,0.56)]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[760px]">
        <header className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-[#2e77df]/70" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4f95ff]">Got Questions?</p>
            <div className="h-px w-14 bg-[#2e77df]/70" />
          </div>
          <h2 className="text-[clamp(1.8rem,3.3vw,2.9rem)] font-semibold leading-none text-white">
            Frequently Asked <span className="font-light italic text-[#2e7ff4]">Questions</span>
          </h2>
        </header>

        <div className="mt-9 space-y-2">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
            <article
              key={item.question}
              className={`group overflow-hidden rounded-[14px] border bg-[linear-gradient(180deg,rgba(4,12,33,0.62),rgba(3,9,24,0.56))] shadow-[inset_0_1px_0_rgba(91,144,230,0.12)] transition-colors duration-300 ${
                isOpen ? "border-[#3c75c7]/80" : "border-[#204474]/58 hover:border-[#3c75c7]/80"
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left sm:px-6"
                onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base font-medium text-[#d5e3fb] sm:text-lg">{item.question}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border bg-[#0b1732]/80 text-[#8eb3e8] transition-colors duration-300 ${
                    isOpen
                      ? "border-[#4b8dff]/80 text-[#b9d4ff]"
                      : "border-[#2c5189]/70 group-hover:border-[#4b8dff]/80 group-hover:text-[#b9d4ff]"
                  }`}
                >
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden border-t border-[#204474]/45">
                  <div className="px-5 pb-5 pt-4 text-sm leading-relaxed text-[#8fa4c5] sm:px-6 sm:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
