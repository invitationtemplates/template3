import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  const { couple, event } = weddingData;

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FAF5EB] pt-2 pb-6 px-3 sm:px-4">
      {/* Outer Mandap Arch Frame Container */}
      <div className="relative mx-auto max-w-[420px] rounded-t-[40px] rounded-b-2xl border-2 border-[#C59B46]/60 shadow-[0_10px_30px_rgba(122,18,36,0.08)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFEB] overflow-hidden">
        
        {/* Decorative Floral Garland Header Overlays (Sides & Top) */}
        <div className="absolute top-0 left-0 w-16 h-36 pointer-events-none z-20 opacity-90">
          <svg viewBox="0 0 70 160" fill="none" className="w-full h-full">
            {/* Hanging marigold & rose garland string */}
            <circle cx="20" cy="15" r="9" fill="#FF9933" />
            <circle cx="20" cy="15" r="6" fill="#C41E3A" />
            <circle cx="18" cy="35" r="10" fill="#FFC000" />
            <circle cx="18" cy="35" r="7" fill="#E62248" />
            <circle cx="22" cy="58" r="9" fill="#FF9933" />
            <circle cx="22" cy="58" r="6" fill="#991B1E" />
            <circle cx="17" cy="80" r="10" fill="#FFC000" />
            <circle cx="17" cy="80" r="7" fill="#C41E3A" />
            <circle cx="20" cy="105" r="9" fill="#FF9933" />
            <circle cx="20" cy="105" r="6" fill="#E62248" />
            <circle cx="16" cy="130" r="8" fill="#FFC000" />
            {/* Green leaves */}
            <path d="M28 25 C35 22 40 28 32 32 Z" fill="#2E7D32" />
            <path d="M28 68 C36 65 42 72 32 75 Z" fill="#2E7D32" />
            <path d="M26 112 C34 108 38 116 30 118 Z" fill="#2E7D32" />
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-16 h-36 pointer-events-none z-20 opacity-90 scale-x-[-1]">
          <svg viewBox="0 0 70 160" fill="none" className="w-full h-full">
            <circle cx="20" cy="15" r="9" fill="#FF9933" />
            <circle cx="20" cy="15" r="6" fill="#C41E3A" />
            <circle cx="18" cy="35" r="10" fill="#FFC000" />
            <circle cx="18" cy="35" r="7" fill="#E62248" />
            <circle cx="22" cy="58" r="9" fill="#FF9933" />
            <circle cx="22" cy="58" r="6" fill="#991B1E" />
            <circle cx="17" cy="80" r="10" fill="#FFC000" />
            <circle cx="17" cy="80" r="7" fill="#C41E3A" />
            <circle cx="20" cy="105" r="9" fill="#FF9933" />
            <circle cx="20" cy="105" r="6" fill="#E62248" />
            <circle cx="16" cy="130" r="8" fill="#FFC000" />
            <path d="M28 25 C35 22 40 28 32 32 Z" fill="#2E7D32" />
            <path d="M28 68 C36 65 42 72 32 75 Z" fill="#2E7D32" />
            <path d="M26 112 C34 108 38 116 30 118 Z" fill="#2E7D32" />
          </svg>
        </div>

        {/* Top Arch Floral Swag */}
        <div className="w-full px-12 pt-3 pb-1 flex justify-center items-center pointer-events-none z-20">
          <svg viewBox="0 0 260 28" fill="none" className="w-full max-w-[240px]">
            {/* Hanging festoon curve of marigolds */}
            <path d="M10 5 Q130 32 250 5" stroke="#C59B46" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="40" cy="13" r="5" fill="#FF9933" />
            <circle cx="70" cy="18" r="6" fill="#C41E3A" />
            <circle cx="100" cy="21" r="5" fill="#FFC000" />
            <circle cx="130" cy="22" r="7" fill="#C41E3A" />
            <circle cx="160" cy="21" r="5" fill="#FFC000" />
            <circle cx="190" cy="18" r="6" fill="#FF9933" />
            <circle cx="220" cy="13" r="5" fill="#C41E3A" />
          </svg>
        </div>

        {/* Invitation Text Content */}
        <div className="relative z-10 px-5 pt-2 pb-4 text-center">
          {/* Shree Ganesh Mantra */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="text-[#C59B46] text-xs">॥</span>
            <p className="font-cinzel text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#7A1224] uppercase">
              {couple.ganeshMantra}
            </p>
            <span className="text-[#C59B46] text-xs">॥</span>
          </motion.div>

          {/* Invitation Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cinzel text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.16em] text-[#5A3A2C] uppercase max-w-[280px] mx-auto leading-relaxed mb-3"
          >
            {couple.announcement}
          </motion.p>

          {/* Bride Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="my-1"
          >
            <h1 className="font-script text-5xl sm:text-6xl text-[#7A1224] leading-tight select-none drop-shadow-[0_2px_4px_rgba(122,18,36,0.12)]">
              {couple.bride}
            </h1>
          </motion.div>

          {/* weds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 my-0.5"
          >
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C59B46]"></span>
            <span className="font-cormorant italic text-lg sm:text-xl text-[#7A1224] lowercase font-semibold">
              weds
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C59B46]"></span>
          </motion.div>

          {/* Groom Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="my-1"
          >
            <h2 className="font-script text-5xl sm:text-6xl text-[#7A1224] leading-tight select-none drop-shadow-[0_2px_4px_rgba(122,18,36,0.12)]">
              {couple.groom}
            </h2>
          </motion.div>

          {/* Date Badge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-3 mb-4 inline-block"
          >
            {/* Day of Week */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="h-[1px] w-6 bg-[#C59B46]/70"></span>
              <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C621E] uppercase font-semibold">
                {event.dayOfWeek}
              </span>
              <span className="h-[1px] w-6 bg-[#C59B46]/70"></span>
            </div>

            {/* Date Details Box */}
            <div className="flex items-center justify-center gap-3 py-1 px-4 border-y border-[#C59B46]/50">
              <span className="font-cinzel text-[11px] tracking-[0.2em] text-[#5A3A2C] uppercase font-medium">
                {event.month}
              </span>
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#7A1224] tracking-tight">
                {event.day}
              </span>
              <span className="font-cinzel text-[11px] tracking-[0.2em] text-[#5A3A2C] uppercase font-medium">
                {event.year}
              </span>
            </div>

            {/* Muhurat */}
            <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.22em] text-[#7A1224] font-semibold mt-1.5 uppercase">
              {event.muhurat}
            </p>
          </motion.div>
        </div>

        {/* Hero Artwork - Sacred Shiva & Parvati Wedding Painting */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
          <img
            src="/images/hero-shiva-parvati.jpg"
            alt="Lord Shiva and Goddess Parvati Sacred Matrimony"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gold gradient overlay at top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EB] via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#FAF5EB]/40 to-transparent pointer-events-none" />

          {/* Floating Down Scroll Button at bottom center */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
            <button
              onClick={onScrollDown}
              aria-label="Scroll down to countdown"
              className="w-9 h-9 rounded-full bg-[#FAF5EB]/95 border border-[#C59B46] shadow-lg flex items-center justify-center text-[#7A1224] hover:bg-[#F3E8D0] hover:scale-105 active:scale-95 transition-all cursor-pointer animate-bounce"
            >
              <ChevronDown className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
