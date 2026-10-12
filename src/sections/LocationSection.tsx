import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { OrnateDivider } from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export const LocationSection: React.FC = () => {
  const { event } = weddingData;

  return (
    <section id="location" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Ornate Divider with Title */}
        <OrnateDivider title="LOCATION" className="mb-4" />

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-[#C59B46]/50 bg-gradient-to-b from-[#FFFDF9] to-[#F7F0E3] p-3 sm:p-3.5 shadow-sm overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C59B46]/60"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#C59B46]/60"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#C59B46]/60"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C59B46]/60"></div>

          <div className="flex flex-row items-center gap-3.5">
            {/* Left: Map Preview Graphic with Pin */}
            <div className="relative w-[45%] shrink-0 aspect-[4/3] rounded-xl overflow-hidden border border-[#C59B46]/40 shadow-2xs">
              <img
                src="/images/map-preview.jpg"
                alt="Venue Location Map"
                className="w-full h-full object-cover"
              />
              {/* Centered Burgundy Map Pin Marker */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[#7A1224] flex items-center justify-center text-[#E7C878] shadow-md border-2 border-white animate-bounce">
                  <MapPin className="w-4 h-4 fill-[#E7C878] stroke-[1.5]" />
                </div>
              </div>
            </div>

            {/* Right: Venue Info & Open in Maps Button */}
            <div className="w-[55%] flex flex-col justify-center text-left">
              <h4 className="font-cormorant text-base sm:text-lg font-bold text-[#7A1224] leading-tight mb-0.5">
                {event.venueName}
              </h4>
              <p className="font-cormorant text-xs text-[#5A3A2C] leading-snug mb-3">
                {event.venueAddress}
              </p>

              {/* Open in Maps Button */}
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7A1224] hover:bg-[#982236] text-white text-[11px] font-cinzel font-medium shadow-xs transition-colors cursor-pointer w-fit"
              >
                <Navigation className="w-3 h-3 text-[#E7C878]" />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
