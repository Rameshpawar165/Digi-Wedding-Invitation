'use client';

import React from 'react';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { Heart } from 'lucide-react';

interface CoupleProfileProps {
  language: Language;
}

export const CoupleProfile: React.FC<CoupleProfileProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold border-b border-[#D4AF62]/40 pb-1">
          {t.meetCouple}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF6E8] mt-3">
          {t.meetCoupleSub}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch">
        
        {/* Groom Profile */}
        <div className="luxury-card rounded-3xl p-6 sm:p-8 gold-border flex flex-col items-center text-center relative overflow-hidden group">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 border-2 border-[#D4AF62] shadow-[0_0_20px_rgba(212,175,98,0.3)] mb-6 overflow-hidden">
            <Image
              src={weddingConfig.groom.photo}
              alt={weddingConfig.groom.name}
              fill
              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-serif font-semibold">
            {t.groomTitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF6E8] mt-1">
            {weddingConfig.groom.name}
          </h3>
          <p className="text-base font-telugu text-[#D4AF62] font-semibold mt-0.5">
            {weddingConfig.groom.teluguName}
          </p>

          <div className="my-3 text-xs text-[#F3E5AB]/85 font-serif border-y border-[#D4AF62]/25 py-2 w-full">
            {language === 'te' ? weddingConfig.groom.teluguParents : weddingConfig.groom.parents}
          </div>

          <p className="text-xs sm:text-sm text-[#FFF6E8]/75 leading-relaxed font-serif mt-2">
            {weddingConfig.groom.about}
          </p>
        </div>

        {/* Bride Profile */}
        <div className="luxury-card rounded-3xl p-6 sm:p-8 gold-border flex flex-col items-center text-center relative overflow-hidden group">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 border-2 border-[#D4AF62] shadow-[0_0_20px_rgba(212,175,98,0.3)] mb-6 overflow-hidden">
            <Image
              src={weddingConfig.bride.photo}
              alt={weddingConfig.bride.name}
              fill
              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-serif font-semibold">
            {t.brideTitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF6E8] mt-1">
            {weddingConfig.bride.name}
          </h3>
          <p className="text-base font-telugu text-[#D4AF62] font-semibold mt-0.5">
            {weddingConfig.bride.teluguName}
          </p>

          <div className="my-3 text-xs text-[#F3E5AB]/85 font-serif border-y border-[#D4AF62]/25 py-2 w-full">
            {language === 'te' ? weddingConfig.bride.teluguParents : weddingConfig.bride.parents}
          </div>

          <p className="text-xs sm:text-sm text-[#FFF6E8]/75 leading-relaxed font-serif mt-2">
            {weddingConfig.bride.about}
          </p>
        </div>

      </div>
    </section>
  );
};
