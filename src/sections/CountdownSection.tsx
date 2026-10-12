import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const targetDate = weddingData.event.targetTimestamp;

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative w-full py-6 px-4 bg-[#FAF5EB] overflow-hidden">
      {/* Delicate floral spray corners */}
      <div className="absolute top-2 left-2 w-14 h-14 pointer-events-none opacity-80">
        <svg viewBox="0 0 60 60" fill="none">
          {/* Floral spray */}
          <path d="M5 5 Q25 15 35 35" stroke="#C59B46" strokeWidth="1" />
          <circle cx="12" cy="18" r="4" fill="#C41E3A" opacity="0.8" />
          <circle cx="22" cy="24" r="3.5" fill="#FF9933" opacity="0.8" />
          <path d="M18 10 C24 8 28 14 20 16 Z" fill="#2E7D32" opacity="0.7" />
          <path d="M10 24 C14 30 8 34 6 28 Z" fill="#2E7D32" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute top-2 right-2 w-14 h-14 pointer-events-none opacity-80 scale-x-[-1]">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M5 5 Q25 15 35 35" stroke="#C59B46" strokeWidth="1" />
          <circle cx="12" cy="18" r="4" fill="#C41E3A" opacity="0.8" />
          <circle cx="22" cy="24" r="3.5" fill="#FF9933" opacity="0.8" />
          <path d="M18 10 C24 8 28 14 20 16 Z" fill="#2E7D32" opacity="0.7" />
          <path d="M10 24 C14 30 8 34 6 28 Z" fill="#2E7D32" opacity="0.7" />
        </svg>
      </div>

      <div className="max-w-[420px] mx-auto text-center">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#7A1224] uppercase mb-5"
        >
          COUNTDOWN TO OUR BIG DAY
        </motion.h3>

        {/* 4 Circular Dials */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 px-1">
          {units.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Dial Circle */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-[#C59B46]/70 flex items-center justify-center bg-gradient-to-b from-[#FFFDF9] to-[#F8F2E6] shadow-sm">
                {/* Inner decorative subtle ring */}
                <div className="absolute inset-[3px] rounded-full border border-[#C59B46]/30 flex flex-col items-center justify-center">
                  <span className="font-cormorant text-xl sm:text-2xl font-bold text-[#3B261D] leading-none tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
              </div>
              {/* Unit Label */}
              <span className="font-cormorant text-xs font-medium text-[#7A1224] mt-1.5 tracking-wider">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
