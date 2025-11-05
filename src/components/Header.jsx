import { Rocket, Star, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-white shadow-sm">
            <Rocket className="h-4 w-4 text-purple-600" />
          </span>
          <span className="font-semibold tracking-tight">Vibe Portfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#hero" className="hover:text-black inline-flex items-center gap-1">
            <Star className="h-4 w-4" />
            Hero
          </a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#contact" className="hover:text-black inline-flex items-center gap-1">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
