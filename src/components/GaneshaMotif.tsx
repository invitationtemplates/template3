import React from 'react';

interface GaneshaMotifProps {
  className?: string;
  size?: number;
  color?: string;
}

export const GaneshaMotif: React.FC<GaneshaMotifProps> = ({
  className = "w-8 h-8",
  color = "#C59B46"
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Ganesha Motif"
    >
      {/* Crown / Mukut */}
      <path
        d="M50 8 L54 18 L60 21 L53 26 L55 35 L50 32 L45 35 L47 26 L40 21 L46 18 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(197, 155, 70, 0.15)"
      />
      {/* Tilak / Trishul on forehead */}
      <path
        d="M50 22 V30 M47 25 C47 29 50 31 50 31 C50 31 53 29 53 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="23" r="1.5" fill={color} />

      {/* Ears */}
      {/* Right Ear */}
      <path
        d="M58 35 C68 33 78 40 78 52 C78 62 70 66 63 65"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left Ear */}
      <path
        d="M42 35 C32 33 22 40 22 52 C22 62 30 66 37 65"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Face & Head profile */}
      <path
        d="M44 38 C47 37 53 37 56 38"
        stroke={color}
        strokeWidth="2.5"
      />

      {/* Trunk (Sond) turning gracefully right / auspicious Vakratunda */}
      <path
        d="M47 43 C49 53 49 60 48 68 C47 76 49 84 54 87 C60 90 68 87 69 80 C70 74 65 71 61 73 C58 75 59 79 61 80"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tusk (Danta) */}
      <path
        d="M42 55 L38 58"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Modak on trunk */}
      <circle cx="63" cy="74" r="2.5" fill={color} />

      {/* Auspicious eyes */}
      <path
        d="M43 42 C45 40 47 42 47 42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M57 42 C55 40 53 42 53 42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
