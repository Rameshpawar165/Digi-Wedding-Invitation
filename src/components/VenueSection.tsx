'use client';

import React from 'react';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { MapPin, Navigation, Calendar, Clock } from 'lucide-react';

interface VenueSectionProps {
  language: Language;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold border-b border-[#D4AF62]/40 pb-1">
          {t.venueAndMap}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF6E8] mt-3">
          {t.venueAndMapSub}
        </h2>
      </div>

      <div className="luxury-card rounded-3xl p-6 sm:p-10 gold-border flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Venue Information Left */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF62] bg-[#32030F] px-3 py-1 rounded-full border border-[#D4AF62]/40">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kalyana Mandapam</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF6E8]">
            {weddingConfig.venue.name}
          </h3>
          <p className="text-base font-telugu text-[#D4AF62] font-semibold">
            {weddingConfig.venue.teluguName}
          </p>

          <p className="text-xs sm:text-sm text-[#FFF6E8]/80 font-serif leading-relaxed">
            {weddingConfig.venue.address}, {weddingConfig.venue.city}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href={weddingConfig.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button px-6 py-3 rounded-full text-xs flex items-center justify-center space-x-2 shadow-lg"
            >
              <Navigation className="w-4 h-4 text-[#32030F]" />
              <span>{t.getDirections}</span>
            </a>
          </div>
        </div>

        {/* Embedded Map Frame Right */}
        <div className="w-full lg:w-1/2 h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#D4AF62]/50 shadow-inner bg-[#32030F]">
          {weddingConfig.venue.mapEmbedUrl ? (
            <iframe
              src={weddingConfig.venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Google Maps"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-xs text-[#FFF6E8]/60">
              <MapPin className="w-8 h-8 text-[#D4AF62] mb-2" />
              <span>Map embed configured via wedding.ts</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
