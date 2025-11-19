
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Texture with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/20 via-stone-950 to-stone-950"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-stone-700 rounded-full text-stone-500 text-xs tracking-[0.3em] uppercase mb-6 bg-stone-950/50 backdrop-blur-sm">
            Teologia do Sofrimento
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-stone-100 mb-8 leading-tight"
        >
          A Coroa do <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-amber-800 relative inline-block">
            Sacrifício
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-red-900/50 origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-lg md:text-2xl text-stone-400 max-w-3xl mx-auto leading-relaxed italic"
        >
          "Uma exploração interativa da fé, enfermidade e o legado dos missionários que enfrentaram um mundo hostil, transformando seu sofrimento em um catalisador para a medicina moderna."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
            <a href="#profiles" className="group inline-flex flex-col items-center gap-2 text-stone-500 hover:text-stone-200 transition-colors duration-300 cursor-pointer">
                <span className="text-xs uppercase tracking-widest group-hover:translate-y-1 transition-transform">Explorar</span>
                <ChevronDown className="animate-bounce w-5 h-5" />
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
