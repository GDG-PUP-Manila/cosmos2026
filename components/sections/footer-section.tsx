import AmbientStarfield from "@/components/ui/ambient-starfield";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-900 bg-black px-6 py-12 text-gray-400">
      <AmbientStarfield className="z-0" density={0.9} />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold tracking-widest text-white">COSMOS 2026</span>
          <p className="mt-2 text-sm">&copy; 2026 All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="transition-colors hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-blue-400">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
