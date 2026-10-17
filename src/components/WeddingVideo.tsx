'use client';

import React, { useState } from 'react';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { Play, Pause, Video as VideoIcon } from 'lucide-react';

interface WeddingVideoProps {
  language: Language;
}

export const WeddingVideo: React.FC<WeddingVideoProps> = ({ language }) => {
  const t = translations[language];
  const [isPlaying, setIsPlaying] = useState(false);
  const video = weddingConfig.video;

  if (!video || !video.enabled) {
    return null;
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold border-b border-[#D4AF62]/40 pb-1">
          {t.weddingVideo}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF6E8] mt-3">
          {t.weddingVideoSub}
        </h2>
      </div>

      <div className="luxury-card rounded-3xl p-4 sm:p-6 gold-border overflow-hidden">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#D4AF62]/40 bg-black shadow-2xl">
          <video
            src={video.url}
            poster={video.poster}
            controls
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-sm sm:text-base font-serif font-bold text-[#FFF6E8]">
            {video.title}
          </h3>
        </div>
      </div>
    </section>
  );
};
