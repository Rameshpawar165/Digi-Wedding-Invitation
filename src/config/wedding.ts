import { WeddingConfig } from '@/types/wedding';

/**
 * WEDDING CONFIGURATION FILE
 * All names, dates, venues, photos, events, and texts can be edited here!
 */
export const weddingConfig: WeddingConfig = {
  bride: {
    name: 'Sravani Devi',
    teluguName: 'శ్రావణి దేవి',
    parents: 'D/o Smt. Lakshmi & Sri Venkata Ramana Rao',
    teluguParents: 'శ్రీమతి లక్ష్మి మరియు శ్రీ వెంకట రమణారావు గార్ల సుపుత్రి',
    about: 'An artistic soul with deep devotion for classical Carnatic music, Telugu traditions, and cherished family values.',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
  },
  groom: {
    name: 'Karthik Varma',
    teluguName: 'కార్తీక్ వర్మ',
    parents: 'S/o Smt. Sarada & Sri Ananda Murthy',
    teluguParents: 'శ్రీమతి శారద మరియు శ్రీ ఆనంద మూర్తి గార్ల సుపుత్రుడు',
    about: 'A technology innovator and avid traveler grounded in timeless heritage and warmth of togetherness.',
    photo: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  },
  weddingDate: '2026-11-28T09:15:00',
  timezone: 'Asia/Kolkata',
  muhurthamTime: 'Saturday, 28th Nov 2026 at 9:15 AM (Dhanur Lagnam)',
  teluguMuhurthamTime: 'శనివారం, 28 నవంబర్ 2026 ఉదయం 9:15 నిమిషాలకు (ధనుర్లగ్న పుష్కరాంశమందు)',
  venue: {
    name: 'Sri Venkateswara Kalyana Mandapam',
    teluguName: 'శ్రీ వేంకటేశ్వర కళ్యాణ మండపం',
    address: 'Near Jubilee Hills Check Post, Road No. 36, Jubilee Hills',
    city: 'Hyderabad, Telangana 500033',
    googleMapsUrl: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Jubilee%20Hills%2C%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed'
  },
  events: [
    {
      id: 'haldi',
      name: 'Haldi & Pasupu Ceremony',
      teluguName: 'పసుపు వేడుక / నలుగు',
      date: '2026-11-26',
      displayDate: 'Thursday, November 26, 2026',
      teluguDisplayDate: 'గురువారం, 26 నవంబర్ 2026',
      time: '9:00 AM onwards',
      teluguTime: 'ఉదయం 9:00 గంటల నుండి',
      venueName: 'Bride’s Residence & Groom’s Residence',
      venueAddress: 'Plot No. 120, Kakatiya Hills, Madhapur, Hyderabad',
      description: 'An auspicious morning drenched in fragrant turmeric, vibrant yellow marigolds, laughter, and traditional folk songs.',
      teluguDescription: 'పసుపు, పూల సువాసనలతో సాంప్రదాయబద్ధంగా జరిగే పవిత్రమైన నలుగు కార్యక్రమం.',
      iconName: 'Sparkles',
      googleMapsUrl: 'https://maps.google.com/?q=Madhapur+Hyderabad',
      calendarData: {
        startDateTime: '2026-11-26T09:00:00+05:30',
        endDateTime: '2026-11-26T12:30:00+05:30',
        title: 'Haldi Ceremony - Sravani & Karthik',
        location: 'Plot No. 120, Kakatiya Hills, Madhapur, Hyderabad',
        description: 'Join us for the vibrant Haldi celebrations!'
      }
    },
    {
      id: 'mehendi-sangeet',
      name: 'Mehendi & Musical Sangeet',
      teluguName: 'మెహందీ మరియు సంగీత్ రజనీ',
      date: '2026-11-27',
      displayDate: 'Friday, November 27, 2026',
      teluguDisplayDate: 'శుక్రవారం, 27 నవంబర్ 2026',
      time: '6:00 PM onwards',
      teluguTime: 'సాయంత్రం 6:00 గంటల నుండి',
      venueName: 'The Palm Lawns, Financial District',
      venueAddress: 'Gachibowli, Nanakramguda, Hyderabad, Telangana',
      description: 'An evening of soulful melodies, dazzling dance performances, intricate henna patterns, and gourmet dining.',
      teluguDescription: 'గోరింటాకు అందాలు, సంగీత నృత్యాలు, వినోదభరిత వేడుకలతో కూడిన సంగీత్ సంబరం.',
      iconName: 'Music',
      googleMapsUrl: 'https://maps.google.com/?q=Financial+District+Hyderabad',
      calendarData: {
        startDateTime: '2026-11-27T18:00:00+05:30',
        endDateTime: '2026-11-27T23:00:00+05:30',
        title: 'Mehendi & Sangeet - Sravani & Karthik',
        location: 'The Palm Lawns, Financial District, Hyderabad',
        description: 'An evening full of dance, music, and celebration!'
      }
    },
    {
      id: 'wedding-ceremony',
      name: 'Kalyanam (Wedding Ceremony)',
      teluguName: 'కళ్యాణ మహోత్సవం (సుముహూర్తం)',
      date: '2026-11-28',
      displayDate: 'Saturday, November 28, 2026',
      teluguDisplayDate: 'శనివారం, 28 నవంబర్ 2026',
      time: 'Sumuhurtham: 9:15 AM (Dhanur Lagnam)',
      teluguTime: 'సుముహూర్తం: ఉదయం 9:15 నిమిషాలకు',
      venueName: 'Sri Venkateswara Kalyana Mandapam',
      venueAddress: 'Near Jubilee Hills Check Post, Road No. 36, Jubilee Hills, Hyderabad',
      description: 'Sacred Telugu Vedic marriage rites: Jeelakarra-Bellam, Kanyadanam, Mangalasutra Dharana, and Sapthapadi.',
      teluguDescription: 'జీలకర్ర బెల్లం, కన్యాదానం, మంగళసూత్ర ధారణ, సప్తపది తదితర వైదిక విధులతో కూడిన శుభ వివాహం.',
      iconName: 'HeartHandshake',
      googleMapsUrl: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad',
      calendarData: {
        startDateTime: '2026-11-28T08:30:00+05:30',
        endDateTime: '2026-11-28T13:30:00+05:30',
        title: 'Wedding Ceremony - Sravani & Karthik',
        location: 'Sri Venkateswara Kalyana Mandapam, Jubilee Hills, Hyderabad',
        description: 'Join us for the sacred wedding ceremony and blessings.'
      }
    },
    {
      id: 'reception',
      name: 'Grand Wedding Reception',
      teluguName: 'వివాహ విందు & సత్కారం',
      date: '2026-11-28',
      displayDate: 'Saturday, November 28, 2026',
      teluguDisplayDate: 'శనివారం, 28 నవంబర్ 2026',
      time: '7:00 PM onwards',
      teluguTime: 'సాయంత్రం 7:00 గంటల నుండి',
      venueName: 'Royal Palace Grand Ballroom',
      venueAddress: 'Banjara Hills, Road No. 1, Hyderabad',
      description: 'Celebrate the newlywed couple with congratulations, photo sessions, fellowship, and a sumptuous Telugu royal feast.',
      teluguDescription: 'నూతన దంపతులను ఆశీర్వదించి శుభాకాంక్షలు తెలుపుతూ జరిగే ఘనమైన విందు సత్కారం.',
      iconName: 'GlassWater',
      googleMapsUrl: 'https://maps.google.com/?q=Banjara+Hills+Hyderabad',
      calendarData: {
        startDateTime: '2026-11-28T19:00:00+05:30',
        endDateTime: '2026-11-28T23:30:00+05:30',
        title: 'Grand Reception - Sravani & Karthik',
        location: 'Royal Palace Grand Ballroom, Banjara Hills, Hyderabad',
        description: 'Dinner and celebrations with the newlyweds!'
      }
    }
  ],
  gallery: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
      caption: 'Together Forever in Love',
      alt: 'Couple Portrait 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
      caption: 'Shared Laughter & Cherished Dreams',
      alt: 'Couple Portrait 2'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200',
      caption: 'Traditional Splendor & Auspicious Glow',
      alt: 'Couple Portrait 3'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
      caption: 'The Graceful Bride',
      alt: 'Bride Portrait'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
      caption: 'The Dashing Groom',
      alt: 'Groom Portrait'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
      caption: 'A Journey of a Thousand Smiles',
      alt: 'Couple in Nature'
    }
  ],
  music: {
    title: 'Traditional Mangalya Nadaswaram & Shehnai Raga',
    src: 'https://cdn.freesound.org/previews/518/518428_6142149-lq.mp3'
  },
  video: {
    enabled: true,
    title: 'Our Journey of Love - Save the Date Film',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-bride-and-groom-holding-each-other-42880-large.mp4',
    poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'
  },
  social: {
    invitationUrl: 'https://digi-wedding-invitation.vercel.app',
    whatsappShareText: 'Namaskaram! 🙏 With the divine blessings of Lord Ganesha, we cordially invite you to celebrate the wedding of Karthik Varma & Sravani Devi on 28th November 2026. Please view our digital wedding invitation here:'
  },
  rsvp: {
    enabled: true,
    useSupabase: false,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  }
};
