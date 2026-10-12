import React from 'react';

interface OrnateDividerProps {
  title?: string;
  variant?: 'scroll' | 'sunburst' | 'simple';
  className?: string;
}

export const OrnateDivider: React.FC<OrnateDividerProps> = ({
  title,
  variant = 'scroll',
  className = "my-6"
}) => {
  if (variant === 'sunburst') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-[#C59B46]">
          {/* Half sun / lotus rays */}
          <path d="M24 22 C18 22 14 18 14 12 C14 12 18 10 24 10 C30 10 34 12 34 12 C34 18 30 22 24 22 Z" fill="#C59B46" fillOpacity="0.3" stroke="#C59B46" strokeWidth="1.2" />
          <path d="M24 8 V3" stroke="#C59B46" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 9 L15 5" stroke="#C59B46" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M29 9 L33 5" stroke="#C59B46" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 12 L10 10" stroke="#C59B46" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 12 L38 10" stroke="#C59B46" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="16" r="2" fill="#C59B46" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2.5 px-4 ${className}`}>
      {/* Left Ornate Wing */}
      <svg width="45" height="16" viewBox="0 0 45 16" fill="none" className="shrink-0 text-[#C59B46]">
        <path d="M0 8 C10 8 15 2 22 8 C28 14 34 8 44 8" stroke="#C59B46" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="43" cy="8" r="2" fill="#C59B46" />
        <path d="M22 8 C22 4 19 2 17 4 C15 6 18 8 22 8 Z" fill="#C59B46" />
        <path d="M22 8 C22 12 19 14 17 12 C15 10 18 8 22 8 Z" fill="#C59B46" />
        <circle cx="5" cy="8" r="1.5" fill="#C59B46" />
      </svg>

      {/* Title */}
      {title && (
        <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#7A1224] text-center whitespace-nowrap">
          {title}
        </span>
      )}

      {/* Right Ornate Wing */}
      <svg width="45" height="16" viewBox="0 0 45 16" fill="none" className="shrink-0 text-[#C59B46] scale-x-[-1]">
        <path d="M0 8 C10 8 15 2 22 8 C28 14 34 8 44 8" stroke="#C59B46" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="43" cy="8" r="2" fill="#C59B46" />
        <path d="M22 8 C22 4 19 2 17 4 C15 6 18 8 22 8 Z" fill="#C59B46" />
        <path d="M22 8 C22 12 19 14 17 12 C15 10 18 8 22 8 Z" fill="#C59B46" />
        <circle cx="5" cy="8" r="1.5" fill="#C59B46" />
      </svg>
    </div>
  );
};
