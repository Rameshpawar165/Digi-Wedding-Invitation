import type { Metadata } from 'next';
import { Cinzel, Playfair_Display, Noto_Serif_Telugu } from 'next/font/google';
import './globals.css';
import { weddingConfig } from '@/config/wedding';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const notoTelugu = Noto_Serif_Telugu({
  subsets: ['telugu'],
  weight: ['400', '600', '700'],
  variable: '--font-telugu',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} - Wedding Invitation`,
  description: `Celebrate the auspicious Telugu Hindu wedding ceremony of ${weddingConfig.groom.name} with ${weddingConfig.bride.name}. View schedule, muhurtham, venue directions and RSVP.`,
  openGraph: {
    title: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} Wedding Invitation`,
    description: `With divine blessings, you are cordially invited to celebrate the marriage of ${weddingConfig.groom.name} & ${weddingConfig.bride.name}.`,
    url: weddingConfig.social.invitationUrl,
    siteName: 'Digital Wedding Invitation',
    images: [
      {
        url: weddingConfig.gallery[0]?.url || 'https://images.unsplash.com/photo-1519741497674-611481863552',
        width: 1200,
        height: 630,
        alt: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} Wedding`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} Wedding Invitation`,
    description: 'We joyfully invite you to celebrate our wedding ceremony.',
    images: [weddingConfig.gallery[0]?.url || ''],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${notoTelugu.variable}`}>
      <body className="antialiased selection:bg-[#d4af62] selection:text-[#32030f]">
        {children}
      </body>
    </html>
  );
}
