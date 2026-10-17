'use client';

import React from 'react';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { WeddingEvent } from '@/types/wedding';
import { generateGoogleCalendarUrl, downloadIcsFile } from '@/lib/calendar';
import { 
  Sparkles, 
  Music, 
  HeartHandshake, 
  GlassWater, 
  MapPin, 
  Calendar as CalendarIcon, 
  ExternalLink, 
  Clock 
} from 'lucide-react';

interface EventTimelineProps {
  language: Language;
}

export const EventTimeline: React.FC<EventTimelineProps> = ({ language }) => {
  const t = translations[language];

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF62]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#D4AF62]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF62]" />;
      case 'GlassWater':
        return <GlassWater className="w-5 h-5 text-[#D4AF62]" />;
      default:
        return <CalendarIcon className="w-5 h-5 text-[#D4AF62]" />;
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold border-b border-[#D4AF62]/40 pb-1">
          {t.eventsSchedule}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#FFF6E8] mt-3">
          {t.eventsScheduleSub}
        </h2>
      </div>

      <div className="space-y-8">
        {weddingConfig.events.map((event: WeddingEvent, idx: number) => {
          const googleCalUrl = generateGoogleCalendarUrl(event.calendarData);

          return (
            <div
              key={event.id}
              className="luxury-card rounded-3xl p-6 sm:p-8 gold-border relative overflow-hidden transition-all duration-300 hover:border-[#D4AF62]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Event Left / Main Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#32030F] border border-[#D4AF62] flex items-center justify-center shadow-inner">
                      {getEventIcon(event.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF6E8]">
                        {event.name}
                      </h3>
                      <p className="text-sm font-telugu text-[#D4AF62] font-semibold">
                        {event.teluguName}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#FFF6E8]/80 font-serif leading-relaxed">
                    {language === 'te' ? event.teluguDescription : event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F3E5AB] pt-2">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4 text-[#D4AF62]" />
                      <span>{language === 'te' ? event.teluguDisplayDate : event.displayDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#D4AF62]" />
                      <span>{language === 'te' ? event.teluguTime : event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-xs text-[#FFF6E8]/75 pt-1">
                    <MapPin className="w-4 h-4 text-[#D4AF62] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#FFF6E8]">{event.venueName}</strong> — {event.venueAddress}
                    </span>
                  </div>
                </div>

                {/* Event Right / Actions: Directions & Add to Calendar */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                  <a
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-button px-4 py-2.5 rounded-full text-xs flex items-center justify-center space-x-1.5 shadow"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#32030F]" />
                    <span>{t.getDirections}</span>
                    <ExternalLink className="w-3 h-3 text-[#32030F]" />
                  </a>

                  <a
                    href={googleCalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full text-xs border border-[#D4AF62]/70 text-[#F3E5AB] hover:bg-[#D4AF62]/20 flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-[#D4AF62]" />
                    <span>{t.googleCalendar}</span>
                  </a>

                  <button
                    onClick={() => downloadIcsFile(event.calendarData, `${event.id}.ics`)}
                    className="px-4 py-2 rounded-full text-[11px] text-[#FFF6E8]/70 hover:text-[#FFF6E8] hover:underline flex items-center justify-center transition-colors"
                  >
                    {t.downloadIcs}
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
