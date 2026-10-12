import React, { useState } from 'react';
import { Menu, X, Wifi, Battery, Signal } from 'lucide-react';
import { GaneshaMotif } from '../components/GaneshaMotif';
import { LotusMotif } from '../components/LotusMotif';

interface TopHeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Countdown', id: 'countdown' },
    { label: 'Date & Venue', id: 'date-venue' },
    { label: 'Event Schedule', id: 'schedule' },
    { label: 'Our Journey', id: 'journey' },
    { label: 'Photo Gallery', id: 'gallery' },
    { label: 'Location', id: 'location' },
    { label: 'Dress Code', id: 'dress-code' },
    { label: 'RSVP', id: 'rsvp' },
    { label: 'Gifts & Blessings', id: 'gifts' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="relative w-full z-40 bg-[#FAF5EB] border-b border-[#E8DCC9]/60">
      {/* Mobile OS Status Bar simulation (9:41, wifi, battery) */}
      <div className="w-full flex items-center justify-between px-6 py-1.5 text-[#3D2B1F] text-xs font-sans-clean font-medium select-none">
        <span className="font-semibold text-xs tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 opacity-80">
          <Signal className="w-3.5 h-3.5 stroke-[2.2]" />
          <Wifi className="w-3.5 h-3.5 stroke-[2.2]" />
          <Battery className="w-4 h-4 stroke-[2.2]" />
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-[#E8DCC9]/30">
        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
          className="p-1.5 text-[#7A1224] hover:text-[#996515] transition-colors rounded-lg cursor-pointer"
        >
          {menuOpen ? <X className="w-6 h-6 stroke-[2]" /> : <Menu className="w-6 h-6 stroke-[2]" />}
        </button>

        {/* Lord Ganesha Motif in Center */}
        <div className="flex items-center justify-center">
          <GaneshaMotif className="w-9 h-9 drop-shadow-xs" color="#C59B46" />
        </div>

        {/* Lotus Icon on Right */}
        <div className="flex items-center justify-center p-1.5">
          <LotusMotif className="w-6 h-6" color="#C59B46" />
        </div>
      </div>

      {/* Slide-down Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FAF5EB]/98 backdrop-blur-md border-b-2 border-[#C59B46]/40 shadow-xl py-3 px-6 z-50 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2 max-w-xs mx-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-left py-2 px-3 text-sm font-cinzel font-medium text-[#7A1224] hover:text-[#996515] hover:bg-[#F3E8D0]/60 rounded-md transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#C59B46]">✦</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
