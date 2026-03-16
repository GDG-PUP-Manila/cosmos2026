export default function FooterSection() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-white tracking-widest">COSMOS 2026</span>
          <p className="mt-2 text-sm">© 2026 All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
