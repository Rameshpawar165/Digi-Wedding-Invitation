'use client';

import React, { useState } from 'react';
import { weddingConfig } from '@/config/wedding';
import { translations, Language } from '@/config/translations';
import { generateWhatsAppShareUrl, shareInvitation } from '@/lib/whatsapp';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';

interface WhatsAppShareProps {
  language: Language;
}

export const WhatsAppShare: React.FC<WhatsAppShareProps> = ({ language }) => {
  const t = translations[language];
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyLink = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : weddingConfig.social.invitationUrl;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : weddingConfig.social.invitationUrl;
    const title = `${weddingConfig.groom.name} & ${weddingConfig.bride.name} Wedding Invitation`;
    const res = await shareInvitation(title, weddingConfig.social.whatsappShareText, currentUrl);
    if (res === 'copied') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : weddingConfig.social.invitationUrl;
  const whatsappUrl = generateWhatsAppShareUrl(weddingConfig.social.whatsappShareText, currentUrl);

  return (
    <section className="py-12 px-4 max-w-xl mx-auto text-center">
      <div className="luxury-card rounded-3xl p-6 sm:p-8 gold-border shadow-2xl space-y-5">
        <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/60 flex items-center justify-center mx-auto text-[#25D366]">
          <MessageCircle className="w-6 h-6" />
        </div>

        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF6E8]">
          {language === 'te' ? 'ఆహ్వానాన్ని బంధుమిత్రులకు షేర్ చేయండి' : 'Share Invitation with Loved Ones'}
        </h3>

        <p className="text-xs sm:text-sm text-[#FFF6E8]/75 font-serif max-w-sm mx-auto">
          {language === 'te'
            ? 'ఈ ఆహ్వాన పత్రికను వాట్సాప్ ద్వారా మీ స్నేహితులు మరియు కుటుంబ సభ్యులకు సులభంగా పంపవచ్చు.'
            : 'Instantly send this auspicious digital invitation to family and friends via WhatsApp.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          {/* WhatsApp Direct Share Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#0f2d19] font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.shareOnWhatsApp}</span>
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#D4AF62]/70 text-[#F3E5AB] hover:bg-[#D4AF62]/20 font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#D4AF62]" />
                <span>{t.linkCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#D4AF62]" />
                <span>{t.copyLink}</span>
              </>
            )}
          </button>
        </div>

        {/* Native Mobile Share Button */}
        <div className="pt-2">
          <button
            onClick={handleNativeShare}
            className="text-xs text-[#D4AF62] hover:text-[#FFF6E8] flex items-center justify-center space-x-1.5 mx-auto underline font-serif"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Other Sharing Options</span>
          </button>
        </div>
      </div>
    </section>
  );
};
