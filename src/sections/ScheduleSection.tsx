import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Flame, Flower2 } from 'lucide-react';
import { OrnateDivider } from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export const ScheduleSection: React.FC = () => {
  const { schedule } = weddingData;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'ganesh':
        return <Sparkles className="w-4 h-4 text-[#E7C878]" />;
      case 'ceremony':
        return <Flame className="w-4 h-4 text-[#E7C878]" />;
      case 'varmala':
        return <Flower2 className="w-4 h-4 text-[#E7C878]" />;
      case 'camera':
        return <Camera className="w-4 h-4 text-[#E7C878]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#E7C878]" />;
    }
  };

  return (
    <section id="schedule" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Ornate Divider with Title */}
        <OrnateDivider title="EVENT SCHEDULE" className="mb-4" />

        {/* 4 Items Grid */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {schedule.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-2 rounded-xl border border-[#C59B46]/35 bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3]/70 shadow-2xs"
            >
              {/* Burgundy Circular Badge */}
              <div className="w-9 h-9 rounded-full bg-[#7A1224] flex items-center justify-center shadow-xs border border-[#C59B46]/50 mb-2">
                {renderIcon(item.icon)}
              </div>

              {/* Title */}
              <h5 className="font-cormorant text-[11px] sm:text-xs font-bold text-[#7A1224] leading-tight min-h-[28px] flex items-center justify-center">
                {item.title}
              </h5>

              {/* Time / Status */}
              <span className="font-cormorant text-[10px] sm:text-[11px] text-[#5A3A2C] italic mt-1 leading-tight">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
