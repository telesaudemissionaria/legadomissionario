import React from 'react';
import { motion } from 'framer-motion';
import { LEGACY_ITEMS } from '../constants';

const LegacySection: React.FC = () => {
  return (
    <section id="legacy" className="py-24 bg-stone-950 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-4xl md:text-5xl text-stone-100 mb-6"
          >
            Da Dor à Cura
          </motion.h2>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-6"></div>
          <p className="text-stone-400 font-serif max-w-3xl mx-auto">
            O sofrimento individual não foi em vão. Ele germinou em instituições que transformaram a paisagem médica global.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {LEGACY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="aspect-video overflow-hidden rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={item.imagePlaceholder} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="border-l-2 border-red-900 pl-6">
                <h3 className="font-cinzel text-2xl text-stone-100 mb-1">{item.name}</h3>
                <p className="text-amber-700 text-sm font-bold tracking-widest uppercase mb-4">{item.institution}</p>
                <p className="text-stone-400 leading-relaxed font-serif">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;