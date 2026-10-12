import { useState, useEffect } from 'react';
import { TopHeader } from './sections/TopHeader';
import { HeroSection } from './sections/HeroSection';
import { CountdownSection } from './sections/CountdownSection';
import { DateVenueSection } from './sections/DateVenueSection';
import { ScheduleSection } from './sections/ScheduleSection';
import { JourneySection } from './sections/JourneySection';
import { GallerySection } from './sections/GallerySection';
import { LocationSection } from './sections/LocationSection';
import { DressCodeSection } from './sections/DressCodeSection';
import { RSVPSection } from './sections/RSVPSection';
import { GiftsSection } from './sections/GiftsSection';
import { FooterSection } from './sections/FooterSection';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalEffect } from './components/PetalEffect';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'countdown', 'date-venue', 'schedule', 'journey', 'gallery', 'location', 'dress-code', 'rsvp', 'gifts'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0E8DC] py-0 sm:py-8 flex justify-center">
      {/* Mobile Frame Container: Exact proportions matching mobile reference */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#FAF5EB] shadow-2xl relative overflow-hidden flex flex-col border-x border-[#E8DCC9]/80 sm:rounded-3xl sm:border sm:my-auto">
        
        {/* Floating Auspicious Music Player */}
        <AudioPlayer />

        {/* Gentle Falling Rose & Marigold Petals */}
        <PetalEffect />

        {/* Simulated Mobile Status Bar & Navigation */}
        <TopHeader onNavigate={scrollToSection} />

        {/* Main Content Sections */}
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <HeroSection onScrollDown={() => scrollToSection('countdown')} />

          {/* Countdown Timer Section */}
          <CountdownSection />

          {/* Date & Venue Section */}
          <DateVenueSection />

          {/* Event Schedule Section */}
          <ScheduleSection />

          {/* Our Journey Section */}
          <JourneySection />

          {/* Photo Gallery Section */}
          <GallerySection />

          {/* Location & Map Section */}
          <LocationSection />

          {/* Dress Code & Guest Information */}
          <DressCodeSection />

          {/* RSVP Form Section */}
          <RSVPSection />

          {/* Gifts & Blessings Section */}
          <GiftsSection />
        </main>

        {/* Footer & Attached Sticky Mobile Navigation */}
        <FooterSection onNavigate={scrollToSection} activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
