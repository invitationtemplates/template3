import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    id: string;
    src: string;
    title: string;
    alt: string;
  }>;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 z-50 p-2 text-[#E7C878] hover:text-white bg-[#4A0813]/80 rounded-full border border-[#C59B46]/40 transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={() => onSelectIndex((currentIndex - 1 + images.length) % images.length)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-[#E7C878] hover:text-white bg-[#4A0813]/70 rounded-full border border-[#C59B46]/40 transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => onSelectIndex((currentIndex + 1) % images.length)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#E7C878] hover:text-white bg-[#4A0813]/70 rounded-full border border-[#C59B46]/40 transition-colors cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-xl max-h-[85vh] flex flex-col items-center">
        <div className="relative rounded-xl overflow-hidden border-2 border-[#C59B46] shadow-2xl bg-black">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>
        <div className="mt-3 text-center">
          <h4 className="font-cinzel text-lg text-[#E7C878] font-medium tracking-wide">
            {currentImage.title}
          </h4>
          <p className="text-xs text-[#FAF5EB]/80 font-cormorant italic mt-0.5">
            {currentImage.alt}
          </p>
        </div>
      </div>
    </div>
  );
};
