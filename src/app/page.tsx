'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Language } from '@/config/translations';
import { InvitationIntro } from '@/components/InvitationIntro';
import { LanguageSelector } from '@/components/LanguageSelector';
import { MusicPlayer } from '@/components/MusicPlayer';
import { WeddingHero } from '@/components/WeddingHero';
import { WeddingCountdown } from '@/components/WeddingCountdown';
import { CoupleProfile } from '@/components/CoupleProfile';
import { EventTimeline } from '@/components/EventTimeline';
import { PhotoGallery } from '@/components/PhotoGallery';
import { VenueSection } from '@/components/VenueSection';
import { WeddingVideo } from '@/components/WeddingVideo';
import { RSVPForm } from '@/components/RSVPForm';
import { WhatsAppShare } from '@/components/WhatsAppShare';
import { Footer } from '@/components/Footer';

export default function WeddingInvitationPage() {
  const [hasOpenedIntro, setHasOpenedIntro] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('en');

  const handleOpenInvitation = () => {
    setHasOpenedIntro(true);
    // Smooth scroll back to top of invitation
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#32030F] text-[#FFF6E8] relative selection:bg-[#D4AF62] selection:text-[#32030F]">
      
      {/* Floating Global Language Switcher */}
      <LanguageSelector
        currentLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang)}
      />

      {/* Floating Background Shehnai / Nadaswaram Music Player */}
      <MusicPlayer
        language={language}
        autoPlayTrigger={hasOpenedIntro}
      />

      {/* Cinematic Opening Screen & Envelope Animation */}
      <AnimatePresence>
        {!hasOpenedIntro && (
          <InvitationIntro
            language={language}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Page Content */}
      <div className={`transition-opacity duration-1000 ${hasOpenedIntro ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* 1. Main Invitation Hero Section */}
        <WeddingHero language={language} />

        {/* 2. Live Wedding Muhurtham Countdown */}
        <WeddingCountdown language={language} />

        {/* 3. Couple Profiles (Groom & Bride) */}
        <CoupleProfile language={language} />

        {/* 4. Wedding Events & Schedule (Haldi, Mehendi, Kalyanam, Reception) */}
        <EventTimeline language={language} />

        {/* 5. Couple Photo Gallery with Lightbox */}
        <PhotoGallery language={language} />

        {/* 6. Wedding Venue, Map & Directions */}
        <VenueSection language={language} />

        {/* 7. Wedding Film / Teaser Video */}
        <WeddingVideo language={language} />

        {/* 8. RSVP Confirmation System */}
        <RSVPForm language={language} />

        {/* 9. WhatsApp & Social Sharing */}
        <WhatsAppShare language={language} />

        {/* 10. Footer with Lord Venkateswara & Family Blessings */}
        <Footer language={language} />

      </div>

    </main>
  );
}
