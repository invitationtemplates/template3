import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { OrnateDivider } from '../components/OrnateDivider';
import { LightboxModal } from '../components/LightboxModal';
import { weddingData } from '../data/weddingData';

export const GallerySection: React.FC = () => {
  const { gallery } = weddingData;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Ornate Divider with Title */}
        <OrnateDivider title="PHOTO GALLERY" className="mb-4" />

        {/* 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#C59B46]/45 shadow-xs cursor-pointer bg-black/5"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-[#4A0813]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-2 rounded-full bg-[#FAF5EB]/90 text-[#7A1224] shadow-md transform scale-80 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-4 h-4 stroke-[2.2]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={gallery}
        currentIndex={selectedPhotoIndex}
        onSelectIndex={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </section>
  );
};
