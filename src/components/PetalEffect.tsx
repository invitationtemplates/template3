import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  color: string;
}

export const PetalEffect: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate gentle floating petals
    const petalColors = [
      '#C41E3A', // Rose red
      '#E62248', // Vibrant red
      '#FF9933', // Marigold orange
      '#FFC000', // Marigold yellow
      '#991B1E', // Deep maroon rose
    ];

    const initialPetals: Petal[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 12,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      color: petalColors[Math.floor(Math.random() * petalColors.length)]
    }));

    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-30px',
            animation: `fallDown ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              opacity: 0.75,
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))'
            }}
          >
            {/* Organic petal shape */}
            <path
              d="M15 0 C25 8 30 22 24 34 C18 42 12 42 6 34 C0 22 5 8 15 0 Z"
              fill={petal.color}
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-30px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(35px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
