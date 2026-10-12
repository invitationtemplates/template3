import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const GiftsSection: React.FC = () => {
  const { gifts } = weddingData;

  return (
    <section id="gifts" className="relative w-full py-5 px-4 bg-[#FAF5EB] overflow-hidden">
      {/* Delicate floral spray corners */}
      <div className="absolute bottom-1 left-2 w-16 h-16 pointer-events-none opacity-85">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M5 55 Q25 45 40 25" stroke="#C59B46" strokeWidth="1" />
          <circle cx="15" cy="42" r="4" fill="#C41E3A" opacity="0.85" />
          <circle cx="26" cy="35" r="3.5" fill="#FF9933" opacity="0.85" />
          <circle cx="35" cy="24" r="3" fill="#E62248" opacity="0.8" />
          <path d="M14 50 C8 45 10 38 18 42 Z" fill="#2E7D32" opacity="0.75" />
          <path d="M28 40 C35 44 38 36 32 34 Z" fill="#2E7D32" opacity="0.75" />
        </svg>
      </div>
      <div className="absolute bottom-1 right-2 w-16 h-16 pointer-events-none opacity-85 scale-x-[-1]">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M5 55 Q25 45 40 25" stroke="#C59B46" strokeWidth="1" />
          <circle cx="15" cy="42" r="4" fill="#C41E3A" opacity="0.85" />
          <circle cx="26" cy="35" r="3.5" fill="#FF9933" opacity="0.85" />
          <circle cx="35" cy="24" r="3" fill="#E62248" opacity="0.8" />
          <path d="M14 50 C8 45 10 38 18 42 Z" fill="#2E7D32" opacity="0.75" />
          <path d="M28 40 C35 44 38 36 32 34 Z" fill="#2E7D32" opacity="0.75" />
        </svg>
      </div>

      <div className="max-w-[420px] mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Gift Icon */}
          <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#C59B46]/60 flex items-center justify-center text-[#7A1224] mb-2 shadow-2xs">
            <Gift className="w-4 h-4 stroke-[2]" />
          </div>

          {/* Heading */}
          <h4 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.18em] text-[#7A1224] uppercase mb-1.5">
            {gifts.title}
          </h4>

          {/* Message 1 */}
          <p className="font-cormorant text-xs sm:text-[13px] text-[#3D2B1F] font-semibold leading-relaxed mb-0.5 max-w-[320px]">
            {gifts.message1}
          </p>

          {/* Message 2 */}
          <p className="font-cormorant text-[11px] sm:text-xs text-[#5A3A2C] italic leading-relaxed max-w-[320px]">
            {gifts.message2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
