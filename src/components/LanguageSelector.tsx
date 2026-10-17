'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '@/config/translations';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="fixed top-4 right-4 z-40 flex items-center bg-[#4B0718]/90 backdrop-blur-md border border-[#D4AF62]/50 rounded-full px-3 py-1.5 shadow-lg">
      <Globe className="w-4 h-4 text-[#D4AF62] mr-2" />
      <button
        onClick={() => onLanguageChange('en')}
        className={`text-xs px-2 py-0.5 rounded-full transition-all duration-200 font-medium ${
          currentLanguage === 'en'
            ? 'bg-[#D4AF62] text-[#32030F] font-bold shadow'
            : 'text-[#FFF6E8]/70 hover:text-[#FFF6E8]'
        }`}
      >
        English
      </button>
      <span className="text-[#D4AF62]/40 mx-1">|</span>
      <button
        onClick={() => onLanguageChange('te')}
        className={`text-xs px-2 py-0.5 rounded-full transition-all duration-200 font-medium font-telugu ${
          currentLanguage === 'te'
            ? 'bg-[#D4AF62] text-[#32030F] font-bold shadow'
            : 'text-[#FFF6E8]/70 hover:text-[#FFF6E8]'
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
};
