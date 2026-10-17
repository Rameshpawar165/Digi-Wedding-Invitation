'use client';

import React, { useState } from 'react';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { RSVPSubmission } from '@/types/wedding';
import { validateRSVP } from '@/lib/validation';
import { CheckCircle2, AlertCircle, Send, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RSVPFormProps {
  language: Language;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ language }) => {
  const t = translations[language];

  const [formData, setFormData] = useState<RSVPSubmission>({
    guestName: '',
    phoneNumber: '',
    attendeesCount: 1,
    attendingStatus: 'attending',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check duplicate submission in localStorage
    if (typeof window !== 'undefined' && localStorage.getItem('wedding_rsvp_submitted')) {
      setAlreadySubmitted(true);
      return;
    }

    const validation = validateRSVP(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // If Supabase is configured:
      if (weddingConfig.rsvp.useSupabase && weddingConfig.rsvp.supabaseUrl) {
        // You can integrate Supabase client here when ready
      } else {
        // Documented Development & Local Mode: Store locally
        if (typeof window !== 'undefined') {
          const storedList = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
          storedList.push({
            ...formData,
            submittedAt: new Date().toISOString(),
          });
          localStorage.setItem('wedding_rsvps', JSON.stringify(storedList));
          localStorage.setItem('wedding_rsvp_submitted', 'true');
        }
      }

      // Celebrate with golden confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#D4AF62', '#F3E5AB', '#FFF6E8', '#6D1028'],
        });
      } catch {
        // Confetti fallback
      }

      setIsSubmitted(true);
    } catch {
      setErrors({ form: 'An error occurred while saving your RSVP. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!weddingConfig.rsvp.enabled) {
    return null;
  }

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-[#D4AF62] font-semibold border-b border-[#D4AF62]/40 pb-1">
          {t.rsvpHeading}
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF6E8] mt-3">
          {t.rsvpSubheading}
        </h2>
      </div>

      <div className="luxury-card rounded-3xl p-6 sm:p-10 gold-border shadow-2xl">
        {alreadySubmitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF62] mx-auto" />
            <h3 className="text-xl font-serif font-bold text-[#FFF6E8]">
              {t.rsvpSuccessTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#F3E5AB]/90 font-serif max-w-sm mx-auto">
              {t.rsvpDuplicateAlert}
            </p>
          </div>
        ) : isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <HeartHandshake className="w-14 h-14 text-[#D4AF62] mx-auto animate-bounce" />
            <h3 className="text-2xl font-serif font-bold text-[#FFF6E8]">
              {t.rsvpSuccessTitle}
            </h3>
            <p className="text-sm text-[#F3E5AB] font-serif max-w-md mx-auto">
              {t.rsvpSuccessDesc}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errors.form && (
              <div className="p-3 rounded-xl bg-red-900/60 border border-red-500/60 text-red-200 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            {/* Guest Name */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#D4AF62] mb-1.5">
                {t.yourName}
              </label>
              <input
                type="text"
                value={formData.guestName}
                onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                placeholder="e.g. S. Venkat & Family"
                className="w-full px-4 py-3 rounded-xl bg-[#32030F]/80 border border-[#D4AF62]/40 text-[#FFF6E8] placeholder-[#FFF6E8]/30 focus:border-[#D4AF62] focus:outline-none text-sm transition-all"
                required
              />
              {errors.guestName && (
                <p className="text-xs text-red-400 mt-1">{errors.guestName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#D4AF62] mb-1.5">
                {t.phoneNumber}
              </label>
              <input
                type="tel"
                value={formData.phoneNumber || ''}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-[#32030F]/80 border border-[#D4AF62]/40 text-[#FFF6E8] placeholder-[#FFF6E8]/30 focus:border-[#D4AF62] focus:outline-none text-sm transition-all"
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-400 mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Attendees Count & Attendance Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#D4AF62] mb-1.5">
                  {t.attendeesCount}
                </label>
                <select
                  value={formData.attendeesCount}
                  onChange={(e) => setFormData({ ...formData, attendeesCount: parseInt(e.target.value, 10) })}
                  className="w-full px-4 py-3 rounded-xl bg-[#32030F] border border-[#D4AF62]/40 text-[#FFF6E8] focus:border-[#D4AF62] focus:outline-none text-sm cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((num) => (
                    <option key={num} value={num} className="bg-[#32030F]">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#D4AF62] mb-1.5">
                  {t.attendingStatus}
                </label>
                <select
                  value={formData.attendingStatus}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      attendingStatus: e.target.value as RSVPSubmission['attendingStatus'],
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#32030F] border border-[#D4AF62]/40 text-[#FFF6E8] focus:border-[#D4AF62] focus:outline-none text-sm cursor-pointer"
                >
                  <option value="attending" className="bg-[#32030F]">{t.yesAttending}</option>
                  <option value="tentative" className="bg-[#32030F]">{t.notSureYet}</option>
                  <option value="not_attending" className="bg-[#32030F]">{t.noUnableToAttend}</option>
                </select>
              </div>
            </div>

            {/* Wishes & Blessings Message */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#D4AF62] mb-1.5">
                {t.blessingsMessage}
              </label>
              <textarea
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                placeholder="May God bless the couple with lifelong happiness..."
                className="w-full px-4 py-3 rounded-xl bg-[#32030F]/80 border border-[#D4AF62]/40 text-[#FFF6E8] placeholder-[#FFF6E8]/30 focus:border-[#D4AF62] focus:outline-none text-sm transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-button py-3.5 px-6 rounded-full flex items-center justify-center space-x-2 font-serif text-sm uppercase tracking-wider font-semibold cursor-pointer active:scale-95 transition-all shadow-xl mt-4"
            >
              <Send className="w-4 h-4 text-[#32030F]" />
              <span>{isSubmitting ? 'Submitting...' : t.submitRsvp}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
