import { WeddingConfig } from '@/types/wedding';
import { s } from 'framer-motion/client';

/**
 * WEDDING CONFIGURATION FILE
 * All names, dates, venues, photos, events, and texts can be edited here!
 */
export const weddingConfig: WeddingConfig = {
  bride: {
    name: 'Kethavath Saraswathi ',
    teluguName: 'కేతావత్ సరస్వతి',
    parents: 'D/o Smt. Hemi Bai & Sri Kishan',
    teluguParents: 'శ్రీమతి హేమి బాయి మరియు శ్రీ కిషన్ గారి కుమార్తె ',
    about: 'A graceful and kind-hearted soul who values family, culture, and the beautiful traditions of our heritage.',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
  },
  groom: {
    name: 'Bannoth Srinivas ',
    teluguName: ' బానోత్ శ్రీనివాస్ ',
    parents: 'S/o Smt. Kesli Bai & Hanmanthu  ',
    teluguParents: 'శ్శ్రీమతి కేస్లీ బాయి మరియు శ్రీ హన్మంతు గారి కుమారుడు ',
    about: 'A humble and warm-hearted person who cherishes family bonds and honors the beautiful traditions of our culture.',
    photo: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  },
  weddingDate: '2026-12-10T11:48:00',
  timezone: 'Asia/Kolkata',
  muhurthamTime: 'Thursday, 10th Dec 2026 at 11:48 AM (Dhanur Lagnam)',
  teluguMuhurthamTime: 'గురువారం, 10వ డిసెంబర్ 2026, ఉదయం 11:48 గంటలకు (ధనుర్ లగ్నం).',
  venue: {
    name: 'Star Function Hall ',
    teluguName: 'స్టార్ ఫంక్షన్ హాల్',
    address: 'Near Vikarabad - Tandur Road, Dharur, Vikarabad District',
    city: 'Dharur, Telangana 501140',
    googleMapsUrl: 'https://maps.app.goo.gl/23pXJ3o6vBfK6M7A6',
    mapEmbedUrl: 'https://maps.app.goo.gl/23pXJ3o6vBfK6M7A6'
  },
  events: [
    {
      id: 'haldi',
      name: 'Haldi & Pasupu Ceremony',
      teluguName: 'పసుపు వేడుక / నలుగు',
      date: '2026-12-09',
      displayDate: 'Wednesday, December 09, 2026',
      teluguDisplayDate: 'బుధవారం, 09 డిసెంబర్ 2026',
      time: '6:00 PM onwards',
      teluguTime: 'సాయంత్రం 6:00 గంటల నుండి',
      venueName: 'Groom’s Residence',
      venueAddress: 'PCM THANDA ,Dharur,Vikrabad,Telangana 501121',
      description: 'An auspicious evening filled with laughter, music, and the beautiful tradition of applying turmeric paste to the groom',
      teluguDescription: 'నవ్వులు,సంగీతం,వినోదం తో కూడిన వేడుకలో వరుడికి పసుపు పూస్తారు',
      iconName: 'Sparkles',
      googleMapsUrl: 'https://maps.app.goo.gl/PyZY9mLJEAzDKKVLA',
      calendarData: {
        startDateTime: '2026-12-09T18:00:00+05:30',
        endDateTime: '2026-12-09T22:00:00+05:30',
        title: 'Haldi Ceremony - Sravani & Karthik',
        location: 'PCM THANDA ,Dharur,Vikrabad,Telangana 501121',
        description: 'Join us for the vibrant Haldi celebrations!'
      }
    },
    {
      id: 'mehendi-sangeet',
      name: 'Mehendi & Musical Sangeet',
      teluguName: 'మెహందీ మరియు సంగీత్ రజనీ',
      date: '2026-12-09',
      displayDate: 'Thursday, December 09, 2026',
      teluguDisplayDate: 'గురువారం, 09 డిసెంబర్ 2026',
      time: '05:00 PM onwards',
      teluguTime: 'సాయంత్రం 5:00 గంటల నుండి',
      venueName: "Groom's Residence",
      venueAddress: 'PCM THANDA ,Dharur,Vikrabad,Telangana 501121',
      description: 'An evening of soulful melodies, dazzling dance performances, intricate henna patterns, and gourmet dining.',
      teluguDescription: 'గోరింటాకు అందాలు, సంగీత నృత్యాలు, వినోదభరిత వేడుకలతో కూడిన సంగీత్ సంబరం.',
      iconName: 'Music',
      googleMapsUrl: 'https://maps.app.goo.gl/PyZY9mLJEAzDKKVLA',
      calendarData: {
        startDateTime: '2026-12-09T17:00:00+05:30',
        endDateTime: '2026-12-09T23:00:00+05:30',
        title: 'Mehendi & Sangeet - Srinivas & Swaravathi',
        location: 'PCM THANDA ,Dharur,Vikrabad,Telangana 501121',
        description: 'An evening full of dance, music, and celebration!'
      }
    },
    {
      id: 'wedding-ceremony',
      name: 'Kalyanam (Wedding Ceremony)',
      teluguName: 'కళ్యాణ మహోత్సవం (సుముహూర్తం)',
      date: '2026-12-10',
      displayDate: 'Thursday, December 10, 2026',
      teluguDisplayDate: 'గురువారం, 10 డిసెంబర్ 2026',
      time: 'Sumuhurtham: 11:48 AM (Dhanur Lagnam)',
      teluguTime: 'సుముహూర్తం: ఉదయం 11:48 నిమిషాలకు',
      venueName: 'Star Function Hall',
      venueAddress: 'Near Vikarabad - Tandur Road, Dharur, Vikarabad District, Telangana 501121',
      description: 'Sacred Telugu Vedic marriage rites: Jeelakarra-Bellam, Kanyadanam, Mangalasutra Dharana, and Sapthapadi.',
      teluguDescription: 'జీలకర్ర బెల్లం, కన్యాదానం, మంగళసూత్ర ధారణ, సప్తపది తదితర వైదిక విధులతో కూడిన శుభ వివాహం.',
      iconName: 'HeartHandshake',
      googleMapsUrl: 'https://maps.app.goo.gl/JDD8xwWvSEtoarLM6',
      calendarData: {
        startDateTime: '2026-12-10T08:30:00+05:30',
        endDateTime: '2026-12-10T13:30:00+05:30',
        title: 'Wedding Ceremony - Srinivas & Swaravathi',
        location: 'Star Function Hall, Near Vikarabad - Tandur Road, Dharur, Vikarabad District, Telangana 501121',
        description: 'Join us for the sacred wedding ceremony and blessings.'
      }
    },
    {
      id: 'reception',
      name: 'Grand Wedding Reception',
      teluguName: 'వివాహ విందు & సత్కారం',
      date: '2026-12-11',
      displayDate: 'Friday, December 11, 2026',
      teluguDisplayDate: 'శుక్రవారం, 11 డిసెంబర్ 2026',
      time: '1:00 PM onwards',
      teluguTime: 'మధ్యాహ్నం 1:00 గంటల నుండి',
      venueName: 'At Home of Groom ',
      venueAddress: 'PCM THANDA ,Dharur,Vikrabad,Telangana 501121',
      description: 'Celebrate the newlywed couple with congratulations, photo sessions, fellowship, and a sumptuous Telugu royal feast.',
      teluguDescription: 'నూతన దంపతులను ఆశీర్వదించి శుభాకాంక్షలు తెలుపుతూ జరిగే ఘనమైన విందు సత్కారం.',
      iconName: 'GlassWater',
      googleMapsUrl: 'https://maps.app.goo.gl/PyZY9mLJEAzDKKVLA',
      calendarData: {
        startDateTime: '2026-12-11T19:00:00+05:30',
        endDateTime: '2026-12-11T23:30:00+05:30',
        title: 'Grand Reception - Srinivas & Saraswathi ',
        location: 'PCM THANDA ,Dharur,Vikrabad,Telangana 501121',
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
