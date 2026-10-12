import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Users } from 'lucide-react';
import { OrnateDivider } from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export const DressCodeSection: React.FC = () => {
  const { dressCode, guestInfo } = weddingData;

  return (
    <section id="dress-code" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Ornate Divider with Title */}
        <OrnateDivider title="DRESS CODE & GUEST INFORMATION" className="mb-4" />

        {/* Two Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1: Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl border border-[#C59B46]/45 bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] p-3 sm:p-3.5 text-center shadow-xs"
          >
            {/* Corner accents */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C59B46]/60"></div>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C59B46]/60"></div>

            {/* Icon */}
            <div className="w-8 h-8 mx-auto rounded-full bg-[#FAF5EB] border border-[#C59B46]/50 flex items-center justify-center text-[#8C621E] mb-2 shadow-2xs">
              <Shirt className="w-4 h-4 stroke-[1.8]" />
            </div>

            {/* Label */}
            <span className="block font-cinzel text-[9px] sm:text-[10px] tracking-[0.16em] text-[#8C621E] uppercase font-semibold mb-1">
              {dressCode.title}
            </span>

            {/* Value */}
            <h5 className="font-cormorant text-xs sm:text-sm font-bold text-[#7A1224] leading-tight mb-1">
              {dressCode.type}
            </h5>

            {/* Description */}
            <p className="font-cormorant text-[10.5px] sm:text-xs text-[#5A3A2C] leading-snug">
              {dressCode.description}
            </p>
          </motion.div>

          {/* Card 2: Guest Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-xl border border-[#C59B46]/45 bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] p-3 sm:p-3.5 text-center shadow-xs"
          >
            {/* Corner accents */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C59B46]/60"></div>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C59B46]/60"></div>

            {/* Icon */}
            <div className="w-8 h-8 mx-auto rounded-full bg-[#FAF5EB] border border-[#C59B46]/50 flex items-center justify-center text-[#8C621E] mb-2 shadow-2xs">
              <Users className="w-4 h-4 stroke-[1.8]" />
            </div>

            {/* Label */}
            <span className="block font-cinzel text-[9px] sm:text-[10px] tracking-[0.16em] text-[#8C621E] uppercase font-semibold mb-1">
              {guestInfo.title}
            </span>

            {/* Description */}
            <p className="font-cormorant text-[11px] sm:text-xs text-[#5A3A2C] leading-snug font-medium pt-1">
              {guestInfo.message}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
