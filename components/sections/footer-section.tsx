import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";

const COSMOS_LINKS = [
  { label: "About the Event", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Program", href: "#program" },
  { label: "Location", href: "#location" },
  { label: "FAQs", href: "#faq" },
];

const GDG_LINKS = [
  { label: "About GDG PUP", href: "https://gdg.community.dev/gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines/" },
  { label: "NEXUS Platform", href: "#program" },
  { label: "GDG ID Platform", href: "https://developers.google.com/community/gdg" },
  { label: "GDG PUP Photobooth", href: "#" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: <Linkedin className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gdg.pupmnl",
    icon: <Instagram className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gdg.pupmnl",
    icon: <Facebook className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[28px] w-[28px]" aria-hidden="true">
        <path d="M4 3h4.2l4.1 5.5L17 3h3l-6 7.1L20.2 21H16l-4.7-6.3L6 21H3l6.7-7.9L4 3z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: <Github className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <Youtube className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
];

function FooterLinkList({ links }: { links: Array<{ label: string; href: string }> }) {
  return (
    <ul className="mt-5 space-y-4">
      {links.map((link) => {
        const isExternal = /^https?:\/\//i.test(link.href);

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-[0.83rem] font-light tracking-[0.01em] text-[#95a7c5] transition-colors duration-200 hover:text-[#d8e7ff]"
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] px-6 pb-12 pt-14 text-[#95a7c5] sm:px-10 sm:pt-16 lg:px-14 lg:pt-20">
      <div className="mx-auto w-full max-w-[1380px]">
        <div className="grid gap-9 lg:grid-cols-[1.55fr_1fr_1fr_1fr] lg:gap-10">
          <section>
            <Image
              src="/assets/gdg-pup-logo.svg"
              alt="Google Developer Group Polytechnic University of the Philippines"
              width={260}
              height={55}
              className="h-auto w-[260px] sm:w-[320px]"
            />

            <p className="mt-6 max-w-[330px] text-justify text-[0.83rem] leading-[1.4] tracking-[0.01em] text-[#8e9ebc]">
              GDG PUP is a student-led technology community supported by Google. We exist to grow the next generation of
              developers, designers, and innovators through events, workshops, and collaborative projects that bridges the
              gap between theories to practice.
            </p>

            <ul className="mt-5 flex flex-wrap items-center gap-2 text-[#f2f6ff]">
              {SOCIAL_LINKS.map((item) => {
                const isExternal = /^https?:\/\//i.test(item.href);

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      className="inline-flex items-center justify-center rounded-[6px] p-[2px] transition-colors duration-200 hover:text-[#9cc0ff]"
                    >
                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.028em] text-white">
              COSMOS 2026
            </h3>
            <FooterLinkList links={COSMOS_LINKS} />
          </section>

          <section>
            <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.028em] text-white">
              GDG PUP
            </h3>
            <FooterLinkList links={GDG_LINKS} />
          </section>

          <section>
            <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.028em] text-white">
              CONTACT
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:hello@gdgpup.org"
                  className="text-[0.83rem] font-light tracking-[0.01em] text-[#95a7c5] underline decoration-[#95a7c5] underline-offset-[4px] transition-colors duration-200 hover:text-[#d8e7ff] hover:decoration-[#d8e7ff]"
                >
                  hello@gdgpup.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@gdgpup.org"
                  className="text-[0.83rem] font-light tracking-[0.01em] text-[#95a7c5] underline decoration-[#95a7c5] underline-offset-[4px] transition-colors duration-200 hover:text-[#d8e7ff] hover:decoration-[#d8e7ff]"
                >
                  support@gdgpup.org
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 h-px w-full bg-[#1d2c4a]/72" />
      </div>
    </footer>
  );
}
