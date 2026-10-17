'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaneshaIllustration } from '@/components/TraditionalMotifs';
import { translations, Language } from '@/config/translations';
import { Sparkles, MailOpen, FastForward } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InvitationIntroProps {
  language: Language;
  onOpen: () => void;
}

export const InvitationIntro: React.FC<InvitationIntroProps> = ({ language, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const t = translations[language];

  const handleOpenClick = () => {
    setIsOpening(true);

    // Auspicious celebration confetti (gold and maroon)
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF62', '#FFF3CD', '#A67C35', '#6D1028'],
      });
    } catch {
      // Ignore if canvas is unavailable
    }

    // Wait for the envelope flap animation before transitioning
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#32030F] overflow-hidden px-4"
    >
      {/* Background Floating Golden Particles & Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="particle rounded-full bg-[#D4AF62]"
            style={{
              width: `${(i % 4) * 2 + 3}px`,
              height: `${(i % 4) * 2 + 3}px`,
              left: `${(i * 17) % 100}%`,
              bottom: '-20px',
              animationDuration: `${6 + (i % 6)}s`,
              animationDelay: `${(i % 5) * 1.2}s`,
              opacity: 0.4 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>

      {/* Skip Button for guests wanting direct view */}
      <button
        onClick={onOpen}
        className="absolute top-5 left-5 z-20 flex items-center space-x-1.5 text-xs text-[#FFF6E8]/70 hover:text-[#D4AF62] transition-colors py-1.5 px-3 rounded-full border border-[#D4AF62]/30 bg-[#4B0718]/60 backdrop-blur"
      >
        <FastForward className="w-3.5 h-3.5" />
        <span>{t.skipIntro}</span>
      </button>

      {/* Main Container */}
      <div className="relative max-w-lg w-full flex flex-col items-center text-center z-10 py-6">
        {/* Lord Ganesha Motif & Auspicious Shlokas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <GaneshaIllustration size={100} className="w-24 h-24 mx-auto mb-2" />
          <h2 className="text-[#D4AF62] font-serif text-lg tracking-widest font-semibold">
            {t.ganeshaShlokaSanskrit}
          </h2>
          <h3 className="text-[#F3E5AB] font-telugu text-sm tracking-wide mt-0.5 opacity-90">
            {t.ganeshaShlokaTelugu}
          </h3>
        </motion.div>

        {/* Ornate Royal Envelope */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-sm h-72 sm:h-80 mx-auto my-2 perspective-1000"
        >
          {/* Envelope Body */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#6D1028] via-[#4B0718] to-[#32030F] border-2 border-[#D4AF62]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-between overflow-hidden">
            
            {/* Top Flap Animation */}
            <motion.div
              animate={isOpening ? { rotateX: 180, opacity: 0 } : { rotateX: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center' }}
              className="absolute top-0 left-0 right-0 h-28 bg-[#851C37] border-b-2 border-[#D4AF62] shadow-md flex items-center justify-center z-10"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4AF62] bg-[#32030F] flex items-center justify-center shadow-inner">
                <Sparkles className="w-5 h-5 text-[#D4AF62]" />
              </div>
            </motion.div>

            {/* Inner Content Card */}
            <div className="mt-8 flex-1 flex flex-col items-center justify-center space-y-3 z-0">
              <span className="text-xs uppercase tracking-widest text-[#D4AF62]/90 border-y border-[#D4AF62]/40 py-1 px-4">
                {t.cordiallyInvited}
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold gold-gradient-text tracking-wide">
                {t.weddingInvitation}
              </h1>
              <p className="text-xs text-[#FFF6E8]/80 max-w-xs font-serif leading-relaxed">
                {t.blessingHeader}
              </p>
            </div>

            {/* Bottom Ornate Border */}
            <div className="w-full flex justify-center items-center pt-2 border-t border-[#D4AF62]/30">
              <span className="text-[10px] tracking-widest text-[#D4AF62]/70 uppercase">
                ✦ ॐ శ్రీ కళ్యాణమస్తు ✦
              </span>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 w-full max-w-xs"
        >
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="w-full gold-button py-3.5 px-6 rounded-full flex items-center justify-center space-x-2 font-serif text-sm tracking-wider uppercase font-semibold cursor-pointer active:scale-95 transition-all shadow-xl"
          >
            <MailOpen className="w-4 h-4 text-[#32030F]" />
            <span>{t.openInvitation}</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
