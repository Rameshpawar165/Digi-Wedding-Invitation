# Premium Digital Wedding Invitation Website (Telugu Hindu Wedding)

A luxury, interactive, mobile-responsive Telugu Hindu digital wedding invitation website crafted with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features

1. **Cinematic Opening Screen & Envelope Animation**
   - Full-screen deep maroon (`#32030F`) background with floating golden particles.
   - Traditional Lord Ganesha SVG illustration with Sanskrit & Telugu blessings:
     - `॥ श्री गणेशाय नमः ॥`
     - `॥ శ్రీ గణేశాయ నమః ॥`
   - Ornate royal wedding envelope with flap opening transition and golden confetti celebration.
   - Skip button for guests who prefer direct access.

2. **Luxury Telugu Wedding Theme & Motifs**
   - Color Palette: Deep Maroon (`#4B0718`), Royal Burgundy (`#6D1028`), Antique Gold (`#D4AF62`), Warm Ivory (`#FFF6E8`), Dark Gold (`#A67C35`).
   - Authentic motifs: Mango leaf torans, jasmine garlands, lotus patterns, gold double borders, and temple accents.
   - Elegant typography: Cinzel (English Serif), Playfair Display, and Noto Serif Telugu.

3. **Bilingual Support (English & Telugu)**
   - Top-right floating language switcher.
   - Seamlessly translates all names, dates, addresses, and UI text between English and authentic Telugu script.

4. **Live Muhurtham Countdown**
   - Accurate live countdown timer showing Days, Hours, Minutes, and Seconds.
   - Special celebration status banner during the auspicious ceremony.

5. **Couple Profiles**
   - Profile cards for Groom (**Karthik Varma**) and Bride (**Sravani Devi**).
   - High-resolution portraits in gold floral frames, lineages (`D/o`, `S/o`), and personal bios.

6. **Wedding Events Schedule**
   - **Haldi & Pasupu Ceremony**
   - **Mehendi & Musical Sangeet**
   - **Kalyanam (Wedding Ceremony)**
   - **Grand Wedding Reception**
   - Each event includes **Google Maps Directions**, **Add to Google Calendar**, and **Download `.ics` File**.

7. **Couple Photo Gallery**
   - Responsive grid with gold frames.
   - Fullscreen lightbox modal with previous/next controls.

8. **Wedding Video / Save the Date Film**
   - Embedded responsive video player with poster preview and mobile touch controls.

9. **Interactive RSVP System**
   - Form fields: Guest name, phone number, guest count (1-10+), attendance status (attending / tentative / not attending), and warm wishes.
   - Form validation, duplicate submission protection, and confetti feedback.
   - Local storage mode enabled by default; optional Supabase integration ready.

10. **Background Shehnai & Nadaswaram Music**
    - Floating audio control with animated soundwave indicator.
    - Plays traditional auspicious melodies on user interaction.

11. **WhatsApp & Social Sharing**
    - One-click "Share on WhatsApp" button with pre-formatted invitation message.
    - Copy link button with clipboard feedback and Web Share API fallback for mobile devices.

---

## 🛠 Project Structure

```text
Digi-Wedding-Invitation/
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme colors, gold borders & animations
│   │   ├── layout.tsx          # Fonts & OpenGraph metadata
│   │   └── page.tsx            # Main page assembly
│   ├── components/
│   │   ├── CoupleProfile.tsx   # Bride & Groom cards
│   │   ├── EventTimeline.tsx   # Celebrations & calendar links
│   │   ├── Footer.tsx          # Family blessings & footer
│   │   ├── InvitationIntro.tsx # Envelope animation & Ganesha
│   │   ├── LanguageSelector.tsx# English/Telugu toggle
│   │   ├── MusicPlayer.tsx     # Shehnai audio player
│   │   ├── PhotoGallery.tsx    # Lightbox gallery
│   │   ├── RSVPForm.tsx        # Guest RSVP form
│   │   ├── TraditionalMotifs.tsx # Ganesha & Toran SVGs
│   │   ├── VenueSection.tsx    # Address & embedded map
│   │   ├── WeddingCountdown.tsx# Live Muhurtham timer
│   │   ├── WeddingHero.tsx     # Main hero card
│   │   ├── WeddingVideo.tsx    # Video player
│   │   └── WhatsAppShare.tsx   # WhatsApp share & copy link
│   ├── config/
│   │   ├── translations.ts     # English & Telugu dictionaries
│   │   └── wedding.ts          # Centralized wedding details
│   ├── lib/
│   │   ├── calendar.ts         # Google Calendar & .ics generator
│   │   ├── validation.ts       # RSVP form validation
│   │   └── whatsapp.ts         # WhatsApp URL builder
│   └── types/
│       └── wedding.ts          # TypeScript interfaces
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 📝 How to Customize Details

All wedding information is centralized in a single file:
👉 [src/config/wedding.ts](file:///c:/Users/brame/OneDrive/Desktop/Digi-Wedding-Invitation/src/config/wedding.ts)

You can easily edit:
- **Bride & Groom Details**: Names, Telugu names, parents' names, photos, and bios.
- **Wedding Date & Muhurtham**: `weddingDate: 'YYYY-MM-DDTHH:mm:ss'`, `muhurthamTime`.
- **Venue**: Kalyana Mandapam name, full address, and Google Maps links.
- **Events**: Add, remove, or modify ceremonies (Haldi, Mehendi, Sangeet, Reception).
- **Gallery Photos**: Replace URLs with your personal couple photos.
- **Background Music**: Replace `music.src` with any audio link or file placed in `/public/music/`.
- **WhatsApp Message**: Customize `social.whatsappShareText`.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your desktop or phone browser (via your local Wi-Fi IP).

---

## 🌐 How to Deploy Publicly for Free (Vercel & GitHub)

To make your wedding invitation publicly accessible to anyone worldwide on phones, tablets, and desktops:

### Option 1: Deploy with Vercel (Recommended - 2 Minutes)
1. Push your repository to **GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your repository.
4. Click **"Deploy"**.
5. Within 60 seconds, Vercel will provide you with a live public URL (e.g. `https://karthik-weds-sravani.vercel.app`) that you can share directly via WhatsApp!

### Option 2: Deploy with Vercel CLI (Direct from Terminal)
```bash
npx vercel
```
Follow the quick prompts in your terminal to publish immediately without needing GitHub.
