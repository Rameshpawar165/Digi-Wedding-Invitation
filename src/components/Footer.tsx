'use client';

import React from 'react';
import { translations, Language } from '@/config/translations';
import { GaneshaIllustration } from '@/components/TraditionalMotifs';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-[#20020A] via-[#32030F] to-[#4B0718] border-t border-[#D4AF62]/40 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-4">
        
        <GaneshaIllustration size={65} className="w-16 h-16 mx-auto opacity-80" />

        <p className="text-sm sm:text-base font-serif font-bold text-[#D4AF62] tracking-wider uppercase">
          {t.footerBlessing}
        </p>

        <p className="text-xs sm:text-sm text-[#FFF6E8]/70 font-serif max-w-lg mx-auto">
          {t.footerFamilyNote}
        </p>

        <div className="pt-8 border-t border-[#D4AF62]/20 text-[11px] text-[#FFF6E8]/50 font-serif">
          ✦ With Love & Divine Blessings ✦
        </div>
      </div>
    </footer>
  );
};
