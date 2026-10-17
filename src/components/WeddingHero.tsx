'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { GaneshaIllustration, ToranBorder, CornerDecoration } from '@/components/TraditionalMotifs';

interface WeddingHeroProps {
  language: Language;
}

export const WeddingHero: React.FC<WeddingHeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative Traditional Toran at Top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <ToranBorder />
      </div>

      {/* Main Luxury Frame Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-3xl w-full luxury-card rounded-3xl p-6 sm:p-12 text-center z-10 gold-border"
      >
        <CornerDecoration position="tl" />
        <CornerDecoration position="tr" />
        <CornerDecoration position="bl" />
        <CornerDecoration position="br" />

        {/* Lord Ganesha Motif */}
        <div className="mb-4">
          <GaneshaIllustration size={80} className="w-20 h-20 mx-auto" />
          <div className="mt-2 text-xs sm:text-sm font-serif text-[#D4AF62] tracking-widest uppercase">
            {t.ganeshaShlokaSanskrit}
          </div>
          <div className="text-xs font-telugu text-[#F3E5AB] opacity-80 mt-0.5">
            {t.ganeshaShlokaTelugu}
          </div>
        </div>

        {/* Sacred Invocations */}
        <div className="space-y-1 mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#F3E5AB]/90 font-serif">
            {t.blessingHeader}
          </p>
          <p className="text-xs sm:text-sm text-[#FFF6E8]/75 font-serif italic">
            {t.blessingSubHeader}
          </p>
        </div>

        {/* Groom & Bride Typography */}
        <div className="my-6 space-y-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold gold-gradient-text tracking-wide">
              {weddingConfig.groom.name}
            </h2>
            <p className="text-base sm:text-lg font-telugu text-[#D4AF62] mt-1 font-semibold">
              {weddingConfig.groom.teluguName}
            </p>
            <p className="text-xs text-[#FFF6E8]/70 mt-1 max-w-md mx-auto">
              {weddingConfig.groom.parents}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 my-2">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF62]" />
            <span className="font-serif italic text-lg sm:text-xl text-[#F3E5AB] font-medium">
              {language === 'te' ? 'పాణిగ్రహణము' : 'weds'}
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF62]" />
          </div>

          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold gold-gradient-text tracking-wide">
              {weddingConfig.bride.name}
            </h2>
            <p className="text-base sm:text-lg font-telugu text-[#D4AF62] mt-1 font-semibold">
              {weddingConfig.bride.teluguName}
            </p>
            <p className="text-xs text-[#FFF6E8]/70 mt-1 max-w-md mx-auto">
              {weddingConfig.bride.parents}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm italic text-[#FFF6E8]/85 font-serif max-w-lg mx-auto border-t border-[#D4AF62]/25 pt-4 mt-6">
          &ldquo;Two hearts, one beautiful journey, and a lifetime of togetherness.&rdquo;
        </p>

        {/* Sacred Muhurtham Highlight Badge */}
        <div className="mt-8 inline-block bg-[#32030F]/90 border border-[#D4AF62]/60 rounded-2xl px-6 py-4 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold mb-1">
            {language === 'te' ? 'శుభ ముహూర్తం' : 'Sumuhurtham'}
          </p>
          <p className="text-sm sm:text-base font-serif font-bold text-[#FFF6E8]">
            {language === 'te' ? weddingConfig.teluguMuhurthamTime : weddingConfig.muhurthamTime}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
