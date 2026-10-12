import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Users, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OrnateDivider } from '../components/OrnateDivider';

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitted(true);

    // Festive Indian wedding confetti celebration (golden, crimson, saffron)
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#7A1224', '#C59B46', '#FF9933', '#E62248', '#FFD700']
    });
  };

  return (
    <section id="rsvp" className="relative w-full py-4 px-4 bg-[#FAF5EB]">
      <div className="max-w-[420px] mx-auto">
        {/* Ornate Divider with Title */}
        <OrnateDivider title="RSVP" className="mb-4" />

        {/* RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-[#C59B46]/50 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F7F0E3] p-4 sm:p-5 shadow-sm"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#7A1224]/10 text-[#7A1224] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 text-[#7A1224]" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#7A1224] mb-1">
                Thank You, {name}!
              </h4>
              <p className="font-cormorant text-sm text-[#5A3A2C]">
                {isAttending
                  ? "We are delighted to celebrate our sacred day with you!"
                  : "We will miss your presence, but your blessings mean the world to us."}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-cinzel text-[#8C621E] underline hover:text-[#7A1224] cursor-pointer"
              >
                Submit another response
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Two Input Fields: Name and Number of Guests */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Your Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#8C621E]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full pl-8 pr-2.5 py-2 rounded-lg bg-white/90 border border-[#C59B46]/40 text-xs text-[#3D2B1F] placeholder-[#8C621E]/60 focus:outline-none focus:border-[#7A1224] font-cormorant font-medium shadow-2xs"
                  />
                </div>

                {/* Number of Guests */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#8C621E]">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="Number of Guests"
                    className="w-full pl-8 pr-2.5 py-2 rounded-lg bg-white/90 border border-[#C59B46]/40 text-xs text-[#3D2B1F] placeholder-[#8C621E]/60 focus:outline-none focus:border-[#7A1224] font-cormorant font-medium shadow-2xs"
                  />
                </div>
              </div>

              {/* Attendance Selection */}
              <div className="flex items-center justify-between pt-1">
                <span className="font-cormorant text-xs sm:text-sm font-semibold text-[#5A3A2C]">
                  Will you be attending?
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAttending(true)}
                    className={`px-4 py-1 rounded-full text-xs font-cinzel font-semibold transition-all cursor-pointer ${
                      isAttending
                        ? 'bg-[#7A1224] text-white shadow-xs'
                        : 'bg-white/80 text-[#5A3A2C] border border-[#C59B46]/40'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAttending(false)}
                    className={`px-4 py-1 rounded-full text-xs font-cinzel font-semibold transition-all cursor-pointer ${
                      !isAttending
                        ? 'bg-[#7A1224] text-white shadow-xs'
                        : 'bg-white/80 text-[#5A3A2C] border border-[#C59B46]/40'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Send RSVP Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#7A1224] hover:bg-[#982236] text-white text-xs sm:text-sm font-cinzel font-semibold tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer active:scale-98"
              >
                <Send className="w-3.5 h-3.5 text-[#E7C878]" />
                <span>Send RSVP</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
