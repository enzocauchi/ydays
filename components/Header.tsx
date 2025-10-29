import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <a href="#accueil" className="text-2xl tracking-tight">
            SophiAgile
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#programme" className="text-sm text-gray-600 hover:text-black transition-colors">
              Programme
            </a>
            <a href="#speakers" className="text-sm text-gray-600 hover:text-black transition-colors">
              Speakers
            </a>
            <a href="#sponsors" className="text-sm text-gray-600 hover:text-black transition-colors">
              Sponsors
            </a>
            <button className="px-6 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
              S'inscrire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-4 flex flex-col gap-6">
            <a
              href="#programme"
              className="text-sm text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programme
            </a>
            <a
              href="#speakers"
              className="text-sm text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </a>
            <a
              href="#sponsors"
              className="text-sm text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </a>
            <button className="px-6 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors w-full">
              S'inscrire
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
