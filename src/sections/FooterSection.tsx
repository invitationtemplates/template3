import React from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, Image, MapPin, Mail, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

interface FooterSectionProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate, activeSection = 'hero' }) => {
  const { thankYou } = weddingData;

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'journey', label: 'Our Story', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'rsvp', label: 'RSVP', icon: Mail },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Scalloped Arch Top Transition into Rich Burgundy */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-[#4A0813] fill-current"
        >
          {/* Ornate Indian Scalloped Temple Arch Silhouette */}
          <path d="M0,0 C150,90 350,110 600,110 C850,110 1050,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Main Burgundy Footer Card */}
      <div className="relative bg-[#4A0813] text-[#FAF5EB] pt-3 pb-8 px-4 text-center">
        {/* Intricate Golden Corner Mandalas / Paisleys */}
        <div className="absolute top-2 left-2 w-20 h-20 pointer-events-none opacity-40">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="20" cy="20" r="15" stroke="#E7C878" strokeWidth="1" />
            <circle cx="20" cy="20" r="10" stroke="#E7C878" strokeWidth="0.8" strokeDasharray="2 2" />
            <path d="M5 20 Q20 5 35 20 Q20 35 5 20 Z" stroke="#E7C878" strokeWidth="1" />
            <path d="M20 5 Q5 20 20 35 Q35 20 20 5 Z" stroke="#E7C878" strokeWidth="1" />
            <path d="M0 50 Q40 40 50 0" stroke="#E7C878" strokeWidth="1.2" />
            <path d="M10 60 Q50 50 60 10" stroke="#E7C878" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="absolute top-2 right-2 w-20 h-20 pointer-events-none opacity-40 scale-x-[-1]">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="20" cy="20" r="15" stroke="#E7C878" strokeWidth="1" />
            <circle cx="20" cy="20" r="10" stroke="#E7C878" strokeWidth="0.8" strokeDasharray="2 2" />
            <path d="M5 20 Q20 5 35 20 Q20 35 5 20 Z" stroke="#E7C878" strokeWidth="1" />
            <path d="M20 5 Q5 20 20 35 Q35 20 20 5 Z" stroke="#E7C878" strokeWidth="1" />
            <path d="M0 50 Q40 40 50 0" stroke="#E7C878" strokeWidth="1.2" />
            <path d="M10 60 Q50 50 60 10" stroke="#E7C878" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="max-w-[420px] mx-auto relative z-10 pt-2 pb-6">
          {/* Thank You Calligraphy */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-script text-4xl sm:text-5xl text-[#FAF5EB] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            {thankYou.title}
          </motion.h2>

          {/* Subtitle */}
          <p className="font-cormorant text-xs sm:text-sm text-[#E7C878] italic mt-0.5 mb-2">
            {thankYou.subtitle}
          </p>

          {/* Couple Text */}
          <p className="font-script text-2xl sm:text-3xl text-[#E7C878] my-1">
            {thankYou.coupleText}
          </p>

          {/* Date */}
          <p className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.2em] text-[#FAF5EB]/80 uppercase mt-1">
            {thankYou.date}
          </p>

          {/* Little Floral Golden Center Finial */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[#E7C878] opacity-75">
            <span className="text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E7C878]/60"></span>
            <span className="text-sm">❦</span>
            <span className="w-12 h-[1px] bg-[#E7C878]/60"></span>
            <span className="text-xs">✦</span>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Mobile Navigation Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-40 bg-[#38060D] border-t border-[#C59B46]/40 shadow-2xl py-2 px-3">
        <div className="max-w-[420px] mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center p-1 transition-all cursor-pointer ${
                  isActive ? 'text-[#E7C878]' : 'text-[#FAF5EB]/70 hover:text-[#E7C878]'
                }`}
              >
                <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'stroke-[2.5] scale-110' : 'stroke-[1.8]'}`} />
                <span className="font-cormorant text-[10px] sm:text-[11px] tracking-wide leading-none font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Made with love */}
        <div className="flex items-center justify-center gap-1.5 pt-2 pb-1 text-[10px] text-[#E7C878]/70 font-cormorant tracking-widest">
          <Heart className="w-2.5 h-2.5 fill-[#E7C878]/70" />
          <span>Made with love</span>
          <Heart className="w-2.5 h-2.5 fill-[#E7C878]/70" />
        </div>
      </div>
    </footer>
  );
};
