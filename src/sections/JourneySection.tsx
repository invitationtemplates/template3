import React from 'react';
import { motion } from 'framer-motion';
import { OrnateDivider } from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export const JourneySection: React.FC = () => {
  const { ourJourney } = weddingData;

  return (
    <section id="journey" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Sunburst Golden Motif */}
        <OrnateDivider variant="sunburst" className="mb-3" />

        {/* Journey Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#C59B46]/50 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F7F0E3] p-3 sm:p-4 shadow-sm overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#C59B46]/70"></div>
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#C59B46]/70"></div>
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#C59B46]/70"></div>
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#C59B46]/70"></div>

          <div className="flex flex-row items-center gap-3.5">
            {/* Left: Couple Portrait Image with ornate arch mask */}
            <div className="relative w-[38%] shrink-0 aspect-[4/5] rounded-xl overflow-hidden border border-[#C59B46]/60 shadow-xs">
              <img
                src={ourJourney.image}
                alt="Divine couple Shiva and Parvati"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right: Story / Text */}
            <div className="w-[62%] flex flex-col justify-center text-left">
              <h4 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] text-[#7A1224] uppercase mb-1.5">
                {ourJourney.title}
              </h4>
              <p className="font-cormorant text-xs sm:text-[13px] text-[#3D2B1F] leading-snug font-medium mb-1.5">
                {ourJourney.paragraph1}
              </p>
              <p className="font-cormorant text-[11px] sm:text-xs text-[#5A3A2C] leading-snug italic">
                {ourJourney.paragraph2}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
