
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Activity, 
  Brain, 
  MapPin, 
  Flame, 
  BookOpen, 
  Scroll, 
  Shield, 
  Anchor, 
  Sparkles, 
  Palmtree, 
  Mountain 
} from 'lucide-react';
import { Missionary } from '../types';

interface ProfileCardProps {
  missionary: Missionary;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  Flame,
  BookOpen,
  Scroll,
  Shield,
  Anchor,
  MapPin,
  Sparkles,
  Palmtree,
  Mountain
};

const ProfileCard: React.FC<ProfileCardProps> = ({ missionary, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic: Image moves slower than scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Map scroll progress to image position (subtle translation)
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  const SpecificIcon = iconMap[missionary.iconName] || MapPin;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-stone-900 border border-stone-800 hover:border-red-900/50 transition-colors duration-500 overflow-hidden rounded-sm"
    >
      {/* Image Container with Parallax */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/10 z-10 transition-colors duration-500 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10"></div>
        
        {/* Location Overlay with Country Flag theme */}
        <div className="absolute top-4 right-4 z-20">
             <motion.div 
                whileHover={{ x: -5 }}
                className="bg-stone-950/90 backdrop-blur-sm px-4 py-2 border-l-2 border-red-800 flex items-center gap-2 shadow-xl"
             >
                 <SpecificIcon size={14} className="text-red-500" />
                 <span className="font-cinzel text-xs font-bold text-stone-200 tracking-widest uppercase">{missionary.location}</span>
             </motion.div>
        </div>

        {/* Flag/Country Image */}
        <motion.div style={{ y }} className="h-[130%] w-full -mt-[15%]">
            <img
            src={missionary.imagePlaceholder}
            alt={`Bandeira de ${missionary.location}`}
            className="w-full h-full object-cover sepia brightness-50 contrast-125 saturate-50 group-hover:saturate-100 group-hover:brightness-75 transition-all duration-1000 ease-out"
            />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
          <div className="flex justify-between items-end">
            <div>
                <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-1">{missionary.years}</p>
                <h3 className="font-serif text-2xl text-stone-100 group-hover:text-red-500 transition-colors duration-300">{missionary.name}</h3>
            </div>
            
            {/* Unique Interactive Missionary Icon */}
            <motion.div 
                className="text-stone-500 group-hover:text-red-500 bg-stone-950/50 p-2 rounded-full backdrop-blur-sm border border-stone-800 group-hover:border-red-900/30"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                <SpecificIcon size={24} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20 bg-stone-900">
        <div className="mb-6">
            <span className="block text-stone-500 text-[10px] uppercase tracking-[0.2em] mb-2">Missão</span>
            <p className="text-stone-300 text-sm italic font-serif border-l border-stone-700 pl-3">{missionary.role}</p>
        </div>

        <div className="space-y-5 border-t border-stone-800 pt-5">
            <div className="group/item">
                <div className="flex items-center gap-2 mb-2 text-red-800/80 cursor-help">
                    <motion.div 
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className="p-1 bg-red-900/10 rounded-full"
                    >
                        <Activity size={16} />
                    </motion.div>
                    <span className="text-xs font-bold uppercase tracking-wider group-hover/item:text-red-500 transition-colors">Sofrimento Físico</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{missionary.health}</p>
            </div>
            
            <div className="group/item">
                <div className="flex items-center gap-2 mb-2 text-stone-600 cursor-help">
                    <motion.div 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        className="p-1 bg-stone-800 rounded-full"
                    >
                        <Brain size={16} />
                    </motion.div>
                    <span className="text-xs font-bold uppercase tracking-wider group-hover/item:text-stone-400 transition-colors">Fardo Psicológico</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{missionary.psychological}</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
