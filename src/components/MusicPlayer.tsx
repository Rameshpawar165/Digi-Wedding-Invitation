'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';

interface MusicPlayerProps {
  language: Language;
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ language, autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const t = translations[language];

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay may be blocked by browser policy without direct user gesture
      });
    }
  }, [autoPlayTrigger, isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.log('Audio playback error', e));
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      <audio
        ref={audioRef}
        src={weddingConfig.music.src}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? t.musicPlaying : t.musicPrompt}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#4B0718]/90 border border-[#D4AF62] text-[#D4AF62] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {isPlaying ? (
          <>
            <span className="absolute -inset-1 rounded-full border border-[#D4AF62]/50 animate-ping opacity-60" />
            <Volume2 className="w-5 h-5 text-[#F3E5AB]" />
          </>
        ) : (
          <VolumeX className="w-5 h-5 opacity-70" />
        )}
      </button>

      {/* Floating Tooltip Label */}
      <div className="hidden sm:flex items-center ml-3 px-3 py-1 bg-[#32030F]/90 border border-[#D4AF62]/40 rounded-full text-xs text-[#FFF6E8] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        <span>{isPlaying ? t.musicPlaying : t.musicPrompt}</span>
      </div>
    </div>
  );
};
