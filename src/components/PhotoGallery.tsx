'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PhotoGalleryProps {
  language: Language;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ language }) => {
  const t = translations[language];
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % weddingConfig.gallery.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + weddingConfig.gallery.length) % weddingConfig.gallery.length
      );
    }
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold border-b border-[#D4AF62]/40 pb-1">
          {t.photoGallery}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF6E8] mt-3">
          {t.photoGallerySub}
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weddingConfig.gallery.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF62]/40 shadow-xl"
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Subtle Gradient Overlay with Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#32030F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-xs text-[#D4AF62] font-serif font-semibold">
                {photo.caption}
              </span>
              <div className="flex items-center space-x-1 text-[11px] text-[#FFF6E8]/70 mt-1">
                <Maximize2 className="w-3 h-3 text-[#D4AF62]" />
                <span>Tap to enlarge</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-[#32030F]/70 border border-[#D4AF62]/50 z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-[#32030F]/70 border border-[#D4AF62]/50 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#D4AF62]">
              <Image
                src={weddingConfig.gallery[activePhotoIndex].url}
                alt={weddingConfig.gallery[activePhotoIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm font-serif text-[#F3E5AB] mt-3 text-center">
              {weddingConfig.gallery[activePhotoIndex].caption} ({activePhotoIndex + 1} / {weddingConfig.gallery.length})
            </p>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-[#32030F]/70 border border-[#D4AF62]/50 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
