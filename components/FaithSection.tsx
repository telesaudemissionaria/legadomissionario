import React from 'react';
import { Quote } from 'lucide-react';

const FaithSection: React.FC = () => {
  return (
    <section id="faith" className="py-32 bg-stone-900 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-10 left-0 w-full text-center opacity-[0.03] pointer-events-none select-none">
            <h1 className="font-cinzel text-9xl font-bold text-stone-100">RESILIÊNCIA</h1>
        </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Martyn Quote */}
            <div className="relative bg-stone-950 p-10 border border-stone-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Quote className="absolute top-6 left-6 text-red-900/30 w-16 h-16" />
                <blockquote className="relative z-10">
                    <p className="font-serif text-2xl md:text-3xl text-stone-300 italic leading-normal mb-6">
                        "Oh! quando o tempo dará lugar à eternidade? Desejo esgotar-me por Deus."
                    </p>
                    <footer className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-red-800"></div>
                        <cite className="not-italic text-stone-500 font-cinzel text-sm uppercase tracking-widest">Henry Martyn</cite>
                    </footer>
                </blockquote>
            </div>

            {/* Spurgeon Quote */}
            <div className="relative bg-stone-950 p-10 border border-stone-800 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 mt-12 md:mt-0">
                <Quote className="absolute top-6 left-6 text-amber-900/30 w-16 h-16" />
                <blockquote className="relative z-10">
                    <p className="font-serif text-2xl md:text-3xl text-stone-300 italic leading-normal mb-6">
                        "Meu trabalho está feito."
                    </p>
                    <p className="text-stone-500 text-sm mb-6 font-serif">(Suas últimas palavras, refletindo a aceitação serena em meio à dor crônica)</p>
                    <footer className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-amber-800"></div>
                        <cite className="not-italic text-stone-500 font-cinzel text-sm uppercase tracking-widest">Charles Spurgeon</cite>
                    </footer>
                </blockquote>
            </div>

        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
            <h3 className="font-cinzel text-2xl text-stone-200 mb-6">O Legado Continua</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
                A fragilidade desses homens e mulheres não foi um obstáculo, mas o solo fértil onde Deus plantou uma compaixão profunda. Hoje, através da Telessaúde e do cuidado integral, carregamos a tocha acesa por aqueles que sofreram para que outros pudessem viver.
            </p>
        </div>
      </div>
    </section>
  );
};

export default FaithSection;