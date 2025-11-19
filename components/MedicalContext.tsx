
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Droplet, Wind, Skull } from 'lucide-react';
import { MEDICAL_CONTEXT } from '../constants';

const MedicalContext: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MEDICAL_CONTEXT[0].id);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const icons: Record<string, React.ReactNode> = {
    tb: <Wind size={24} />,
    malaria: <Droplet size={24} />,
    treatments: <Skull size={24} />,
  };

  const activeData = MEDICAL_CONTEXT.find((m) => m.id === activeTab)!;

  return (
    <section ref={containerRef} id="medical" className="py-24 bg-stone-950 relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
            style={{ y: bgY }}
            className="absolute inset-0 opacity-10 pointer-events-none"
        >
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[url('https://img.freepik.com/free-vector/vintage-medical-elements-set_1284-38244.jpg')] bg-contain bg-no-repeat blend-multiply filter sepia invert grayscale"></div>
        </motion.div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/50 via-stone-950 to-stone-950"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-stone-200 mb-4">Um Mundo Hostil</h2>
          <div className="w-24 h-1 bg-stone-800 mx-auto mb-6 overflow-hidden relative">
              <motion.div 
                initial={{ x: '-100%' }} 
                whileInView={{ x: '0%' }} 
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute inset-0 bg-red-900" 
              />
          </div>
          <p className="text-stone-500 font-serif italic max-w-2xl mx-auto">
            A medicina dos séculos XVIII e XIX era um campo de batalha entre a ignorância e a tentativa de cura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {MEDICAL_CONTEXT.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left px-6 py-6 border-l-2 transition-all duration-500 group relative overflow-hidden rounded-r-sm ${
                  activeTab === item.id
                    ? 'border-red-800 bg-stone-900 shadow-xl'
                    : 'border-stone-800 hover:border-stone-600 hover:bg-stone-900/30'
                }`}
              >
                <div className={`flex items-center justify-between mb-2 ${activeTab === item.id ? 'text-red-500' : 'text-stone-500 group-hover:text-stone-400'}`}>
                    <span className="text-xs font-bold uppercase tracking-widest">{item.subtitle}</span>
                    <motion.div
                        key={activeTab === item.id ? 'active' : 'inactive'}
                        animate={activeTab === item.id ? { rotate: [0, 15, -15, 0], scale: 1.2 } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {icons[item.id]}
                    </motion.div>
                </div>
                <h3 className={`font-serif text-xl transition-colors duration-300 ${activeTab === item.id ? 'text-stone-100' : 'text-stone-500'}`}>
                  {item.title}
                </h3>
                {activeTab === item.id && (
                    <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-stone-900/50 border border-stone-800 p-8 md:p-12 min-h-[450px] relative overflow-hidden rounded-sm backdrop-blur-sm shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-5">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                     <Skull size={100} strokeWidth={1} />
                </motion.div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: "circOut" }}
              >
                <h3 className="font-cinzel text-4xl text-stone-100 mb-2">{activeData.title}</h3>
                <h4 className="text-red-800 font-serif text-xl italic mb-8">{activeData.subtitle}</h4>
                
                <p className="text-lg text-stone-300 leading-relaxed mb-8 border-l-4 border-stone-700 pl-6">
                  {activeData.description}
                </p>

                <ul className="space-y-4">
                  {activeData.details.map((detail, idx) => (
                    <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.15), ease: "easeOut" }}
                        className="flex items-start gap-4 text-stone-400 group cursor-default"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.5 }}
                        className="mt-2 w-1.5 h-1.5 bg-red-900 rounded-full flex-shrink-0" 
                      />
                      <span className="group-hover:text-stone-300 transition-colors">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalContext;
