export interface WeddingConfig {
  bride: {
    name: string;
    teluguName: string;
    parents: string;
    teluguParents: string;
    about: string;
    photo: string;
  };
  groom: {
    name: string;
    teluguName: string;
    parents: string;
    teluguParents: string;
    about: string;
    photo: string;
  };
  weddingDate: string; // ISO date format: YYYY-MM-DDTHH:mm:ss
  timezone: string;
  muhurthamTime: string;
  teluguMuhurthamTime: string;
  venue: {
    name: string;
    teluguName: string;
    address: string;
    city: string;
    googleMapsUrl: string;
    mapEmbedUrl?: string;
  };
  events: WeddingEvent[];
  gallery: {
    id: number;
    url: string;
    caption: string;
    alt: string;
  }[];
  music: {
    title: string;
    src: string;
  };
  video?: {
    enabled: boolean;
    title: string;
    url: string;
    poster: string;
  };
  social: {
    invitationUrl: string;
    whatsappShareText: string;
  };
  rsvp: {
    enabled: boolean;
    useSupabase: boolean;
    supabaseUrl?: string;
    supabaseAnonKey?: string;
  };
}

export interface WeddingEvent {
  id: string;
  name: string;
  teluguName: string;
  date: string;
  displayDate: string;
  teluguDisplayDate: string;
  time: string;
  teluguTime: string;
  venueName: string;
  venueAddress: string;
  description: string;
  teluguDescription: string;
  iconName: 'Sparkles' | 'Music' | 'HeartHandshake' | 'GlassWater' | 'Calendar';
  googleMapsUrl: string;
  calendarData: {
    startDateTime: string; // ISO format
    endDateTime: string;   // ISO format
    title: string;
    location: string;
    description: string;
  };
}

export interface RSVPSubmission {
  guestName: string;
  phoneNumber?: string;
  attendeesCount: number;
  attendingStatus: 'attending' | 'not_attending' | 'tentative';
  message?: string;
  submittedAt?: string;
}
