'use client';

import React, { useState, useEffect } from 'react';
import { translations, Language } from '@/config/translations';
import { weddingConfig } from '@/config/wedding';
import { Clock } from 'lucide-react';

interface WeddingCountdownProps {
  language: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
  isPast: boolean;
}

export const WeddingCountdown: React.FC<WeddingCountdownProps> = ({ language }) => {
  const t = translations[language];
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const weddingTimestamp = new Date(weddingConfig.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = weddingTimestamp - now;

      // Event is currently ongoing (within 6 hours after muhurtham)
      if (difference <= 0 && difference > -21600000) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true, isPast: false });
        return;
      }

      // Event has concluded
      if (difference <= -21600000) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: false, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isStarted: false, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      <div className="luxury-card rounded-3xl p-6 sm:p-10 gold-border relative overflow-hidden">
        
        {/* Subtle Decorative Aura */}
        <div className="flex items-center justify-center space-x-2 text-[#D4AF62] mb-3">
          <Clock className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-semibold">
            {t.countdownHeading}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF6E8] mb-6">
          {t.countdownSubheading}
        </h3>

        {timeLeft.isStarted ? (
          <div className="p-4 rounded-xl bg-[#6D1028]/80 border border-[#D4AF62] text-[#F3E5AB] font-serif text-base sm:text-lg">
            🎉 {t.weddingStarted}
          </div>
        ) : timeLeft.isPast ? (
          <div className="p-4 rounded-xl bg-[#6D1028]/80 border border-[#D4AF62] text-[#F3E5AB] font-serif text-base sm:text-lg">
            💐 {t.weddingCelebrated}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-lg mx-auto">
            {[
              { label: t.days, value: timeLeft.days },
              { label: t.hours, value: timeLeft.hours },
              { label: t.minutes, value: timeLeft.minutes },
              { label: t.seconds, value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#32030F]/90 border border-[#D4AF62]/50 shadow-inner"
              >
                <span className="text-2xl sm:text-4xl font-display font-bold gold-gradient-text">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D4AF62] mt-1 font-serif">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
