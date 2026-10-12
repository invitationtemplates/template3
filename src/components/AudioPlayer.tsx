import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // High quality classical sitar/flute wedding instrumental music
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/05/16/audio_c97693cf62.mp3?filename=indian-traditional-music-111867.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play prevented:", e);
      });
    }
  };

  useEffect(() => {
    // Attempt auto-play on first user interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked by browser policy
        });
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="fixed top-3 right-3 z-50">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute music" : "Play wedding music"}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF5EB]/90 border border-[#C59B46]/60 text-[#7A1224] shadow-md hover:bg-[#F3E8D0] transition-all duration-300 backdrop-blur-xs text-xs font-cinzel font-medium cursor-pointer"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#7A1224] animate-pulse" />
            <span className="hidden sm:inline text-[11px] tracking-wider text-[#7A1224]">MUSIC ON</span>
            {/* Audio wave animation */}
            <span className="flex items-end gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 h-2 bg-[#7A1224] animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-0.5 h-3 bg-[#7A1224] animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-0.5 h-1.5 bg-[#7A1224] animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#8C621E]" />
            <span className="hidden sm:inline text-[11px] tracking-wider text-[#8C621E]">MUSIC</span>
            <Music className="w-3 h-3 text-[#C59B46]" />
          </>
        )}
      </button>
    </div>
  );
};
