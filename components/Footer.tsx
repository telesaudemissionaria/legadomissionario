
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 py-12 border-t border-stone-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-80 transition-opacity duration-500">
        <div className="mb-4 md:mb-0">
          <span className="font-cinzel text-sm font-bold tracking-widest text-stone-400">
            MISSIONARY MEDICAL CARE
          </span>
        </div>
        <div className="text-xs font-serif text-stone-600">
          &copy; {new Date().getFullYear()} Teologia do Sofrimento. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
