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
  { label: "NEXUS Platform", href: "https://id.gdgpup.org/comingsoon" },
  { label: "GDG ID Platform", href: "https://id.gdgpup.org/" },
  { label: "GDG PUP Photobooth", href: "https://photo.gdgpup.org/" },
  { label: "GDG PUP DP Platform", href: "https://frame.gdgpup.org/" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gdgpup/",
    icon: <Linkedin className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gdg.pupmnl/",
    icon: <Instagram className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gdg.pupmnl/",
    icon: <Facebook className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gdg.pupmnl/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/GDG-PUP-Manila/",
    icon: <Github className="h-[28px] w-[28px] stroke-[1.9]" aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@gdg.pupmnl",
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
            <a 
              href="https://gdg.community.dev/gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-[1.04]"
              aria-label="Visit GDG PUP on the official GDG Community Platform"
            >
              <Image
                src="/assets/gdg-pup-logo.svg"
                alt="Google Developer Group Polytechnic University of the Philippines"
                width={260}
                height={55}
                className="h-auto w-[260px] sm:w-[320px]"
              />
            </a>

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
                  href="mailto:gdg.pupmnl@gmail.com"
                  className="text-[0.83rem] font-light tracking-[0.01em] text-[#95a7c5] underline decoration-[#95a7c5] underline-offset-[4px] transition-colors duration-200 hover:text-[#d8e7ff] hover:decoration-[#d8e7ff]"
                >
                  gdg.pupmnl@gmail.com
                </a>
              </li>
            </ul>

            <h3 className="mt-10 text-[0.95rem] font-semibold uppercase tracking-[0.028em] text-white">
              CONTRIBUTORS
            </h3>
            <ul className="mt-5 space-y-4 text-[0.83rem] font-light tracking-[0.01em] text-[#95a7c5]">
              <li>
                <span className="block text-[#667d9e] text-[0.7rem] uppercase font-medium tracking-wider mb-1">Design</span>
                <a href="https://www.linkedin.com/in/nyzel-cayat0/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#d8e7ff]">Nyzel Cayat</a>
              </li>
              <li>
                <span className="block text-[#667d9e] text-[0.7rem] uppercase font-medium tracking-wider mb-1">Development</span>
                <div className="flex flex-col space-y-2">
                  <a href="https://www.linkedin.com/in/ajsadullo/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#d8e7ff]">Aurold John Sadullo</a>
                  <a href="https://www.linkedin.com/in/delatorrecj/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#d8e7ff]">Carlos Jerico Dela Torre</a>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 h-px w-full bg-[#1d2c4a]/72" />
      </div>
    </footer>
  );
}
