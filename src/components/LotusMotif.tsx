import React from 'react';

interface LotusMotifProps {
  className?: string;
  color?: string;
}

export const LotusMotif: React.FC<LotusMotifProps> = ({
  className = "w-6 h-6",
  color = "#C59B46"
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lotus Flower Motif"
    >
      {/* Central petal */}
      <path
        d="M50 20 C42 42 42 65 50 82 C58 65 58 42 50 20 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="rgba(197, 155, 70, 0.12)"
      />
      {/* Inner left petal */}
      <path
        d="M47 38 C35 48 32 68 46 80 C36 68 37 50 47 38 Z"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Inner right petal */}
      <path
        d="M53 38 C65 48 68 68 54 80 C64 68 63 50 53 38 Z"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Outer left petal */}
      <path
        d="M42 50 C22 55 18 72 38 82 C22 72 26 58 42 50 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Outer right petal */}
      <path
        d="M58 50 C78 55 82 72 62 82 C78 72 74 58 58 50 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Base stem / curve */}
      <path
        d="M30 84 C42 88 58 88 70 84"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
