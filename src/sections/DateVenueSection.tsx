import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { OrnateDivider } from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export const DateVenueSection: React.FC = () => {
  const { event } = weddingData;

  return (
    <section id="date-venue" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Ornate Divider with Title */}
        <OrnateDivider title="DATE & VENUE" className="mb-4" />

        {/* Two Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1: Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl border border-[#C59B46]/50 bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] p-4 text-center shadow-xs"
          >
            {/* Corner Accents */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C59B46]/60"></div>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C59B46]/60"></div>

            {/* Icon */}
            <div className="w-9 h-9 mx-auto rounded-full bg-[#FAF5EB] border border-[#C59B46]/60 flex items-center justify-center text-[#7A1224] mb-2.5 shadow-xs">
              <Calendar className="w-4 h-4 stroke-[2]" />
            </div>

            {/* Label */}
            <span className="block font-cinzel text-[9px] sm:text-[10px] tracking-[0.18em] text-[#8C621E] uppercase font-semibold mb-1">
              WEDDING DATE
            </span>

            {/* Value */}
            <h4 className="font-cormorant text-sm sm:text-base font-bold text-[#7A1224] leading-tight mb-0.5">
              {event.displayDate}
            </h4>

            {/* Day */}
            <span className="font-cormorant text-xs text-[#5A3A2C] italic">
              {event.dayOfWeek}
            </span>
          </motion.div>

          {/* Card 2: Wedding Venue */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-xl border border-[#C59B46]/50 bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] p-4 text-center shadow-xs"
          >
            {/* Corner Accents */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C59B46]/60"></div>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C59B46]/60"></div>
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C59B46]/60"></div>

            {/* Icon */}
            <div className="w-9 h-9 mx-auto rounded-full bg-[#FAF5EB] border border-[#C59B46]/60 flex items-center justify-center text-[#7A1224] mb-2.5 shadow-xs">
              <MapPin className="w-4 h-4 stroke-[2]" />
            </div>

            {/* Label */}
            <span className="block font-cinzel text-[9px] sm:text-[10px] tracking-[0.18em] text-[#8C621E] uppercase font-semibold mb-1">
              WEDDING VENUE
            </span>

            {/* Value */}
            <h4 className="font-cormorant text-xs sm:text-sm font-semibold text-[#7A1224] leading-tight">
              {event.venueAddress}
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
