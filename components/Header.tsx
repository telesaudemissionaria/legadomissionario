import React, { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Perfis', href: '#profiles' },
    { name: 'Contexto Médico', href: '#medical' },
    { name: 'Fé', href: '#faith' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-red-900/20 rounded-full border border-red-900/50">
                <Cross className="w-6 h-6 text-red-700" />
            </div>
            <span className="font-cinzel text-lg font-bold tracking-widest text-stone-200">
            MISSIONARY <span className="text-red-800">MEDICAL CARE</span>
            </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-serif text-sm tracking-widest text-stone-400 hover:text-red-500 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-900 border-b border-stone-800 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-serif text-lg text-stone-300 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;