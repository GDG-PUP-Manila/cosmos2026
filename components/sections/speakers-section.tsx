"use client";

import { motion } from "framer-motion";

interface Speaker {
  name: string;
  organization: string;
  role: string;
  image: string;
}

const SPEAKERS: Speaker[] = [
  {
    name: "Jazmine Calma",
    organization: "KOLLAB",
    role: "Head of Quality Assurance",
    image: "/speakers/speakers/Jazmine Calma - PIC.webp",
  },
  {
    name: "Sermil Matoto",
    organization: "KOLLAB",
    role: "Chief Engineer",
    image: "/speakers/speakers/Sermil Matoto - PIC.webp",
  },
  {
    name: "John Dustin Santos",
    organization: "DEPARTMENT OF INFORMATION TECHNOLOGY",
    role: "Chairperson",
    image: "/speakers/speakers/SIR DUSTIN - PIC.webp",
  },
  {
    name: "Julianne Cera",
    organization: "WHITE CLOAK TECHNOLOGIES",
    role: "Community and Partnerships Relations Officer",
    image: "/speakers/speakers/Julianne Cera  - PIC.webp",
  },
  {
    name: "Carlos Jerico Dela Torre",
    organization: "GOOGLE DEVELOPER GROUPS ON CAMPUS PUP",
    role: "Chief Technology Officer",
    image: "/speakers/speakers/JERICO - PIC.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] as const
    } 
  }
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative group rounded-2xl overflow-hidden w-full max-w-[340px] md:max-w-none md:w-[320px] aspect-[8/11] border border-blue-900/30 hover:border-cyan-400/50 transition-colors mx-auto"
      style={{ willChange: "transform" }}
    >
      {/* Base Cosmic Background */}
      <img 
        src="/speakers/speakers/BG.webp" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      
      {/* Blue Space Dust */}
      <img 
        src="/speakers/speakers/SPACE DUST BLUE 1.webp" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-screen" 
      />

      {/* Speaker Photo */}
      <img 
        src={speaker.image} 
        alt={speaker.name} 
        className="absolute inset-x-0 bottom-0 w-full h-[95%] object-contain object-bottom z-10 transition-transform duration-500 group-hover:scale-[1.03] origin-bottom" 
      />

      {/* Cloud Overlays */}
      <img 
        src="/speakers/speakers/Cloud Center 2 (Back) v2 1.webp" 
        alt="" 
        className="absolute bottom-0 left-0 w-full h-[60%] object-cover z-20 opacity-80 mix-blend-screen pointer-events-none" 
      />
      <img 
        src="/speakers/speakers/Cloud Center 4 (Front) 4.webp" 
        alt="" 
        className="absolute -bottom-10 left-0 w-full h-[50%] object-cover z-20 pointer-events-none" 
      />

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90 z-20 pointer-events-none" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-30 flex flex-col justify-end pointer-events-none">
        <p className="text-[#38bdf8] text-[0.6rem] tracking-[0.15em] uppercase font-bold mb-1 font-['Inter'] leading-tight">
          {speaker.organization}
        </p>
        <h3 className="text-white text-2xl font-bold mb-1 font-['Google_Sans'] leading-tight">
          {speaker.name}
        </h3>
        <p className="text-gray-300 text-xs font-['Inter'] leading-relaxed">
          {speaker.role}
        </p>
      </div>
    </motion.div>
  );
};

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 bg-[#01030e] text-white px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/speakers/background/Mini Stars.svg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <img src="/speakers/background/galaxy.svg" alt="" className="absolute top-0 right-0 w-[800px] h-auto opacity-30 mix-blend-screen" />
        <img src="/speakers/background/Circle.svg" alt="" className="absolute top-1/4 -left-32 w-96 h-96 opacity-40 mix-blend-screen blur-xl" />
        
        {/* Constellations */}
        <img src="/speakers/background/Group 238 1.webp" alt="" className="absolute -top-10 -left-10 w-[400px] h-[400px] object-contain opacity-40 mix-blend-screen pointer-events-none" />
        <img src="/speakers/background/Group 238 1.webp" alt="" className="absolute top-1/2 -right-20 w-[600px] h-[600px] object-contain opacity-40 mix-blend-screen -rotate-45 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mb-16 flex flex-col items-start"
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-cyan-400"></div>
            <p className="text-cyan-400 text-xs tracking-[0.2em] font-['Inter'] font-semibold uppercase">
              VOICES FROM THE FRONTIER.
            </p>
          </div>
          
          {/* Main SVG Heading */}
          <img 
            src="/speakers/background/MEET THE SPEAKERS 1.svg" 
            alt="MEET THE SPEAKERS" 
            className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain mb-6 -ml-2" 
          />
          
          {/* Description */}
          <p className="text-gray-400 max-w-2xl text-left font-['Inter'] text-sm md:text-base leading-relaxed">
            COSMOS 2026 brings together practitioners, builders, and thought leaders from across the technology industry.<br className="hidden md:block"/>
            They're not just the people who talks about the industry, they're the ones shipping it.
          </p>
        </motion.div>
        
        {/* Speakers Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="flex flex-col items-center gap-6 lg:gap-10 w-full"
        >
          {/* Top Row (3 Speakers) */}
          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8 xl:gap-10 w-full">
            {SPEAKERS.slice(0, 3).map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>

          {/* Bottom Row (2 Speakers) */}
          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8 xl:gap-10 w-full md:max-w-4xl">
            {SPEAKERS.slice(3, 5).map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
