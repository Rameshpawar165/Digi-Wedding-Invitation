export type Language = 'en' | 'te';

export interface TranslationStrings {
  ganeshaBlessing: string;
  ganeshaShlokaSanskrit: string;
  ganeshaShlokaTelugu: string;
  blessingHeader: string;
  blessingSubHeader: string;
  openInvitation: string;
  skipIntro: string;
  cordiallyInvited: string;
  weddingInvitation: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  countdownHeading: string;
  countdownSubheading: string;
  weddingStarted: string;
  weddingCelebrated: string;
  meetCouple: string;
  meetCoupleSub: string;
  brideTitle: string;
  groomTitle: string;
  eventsSchedule: string;
  eventsScheduleSub: string;
  venueAndMap: string;
  venueAndMapSub: string;
  getDirections: string;
  addToCalendar: string;
  googleCalendar: string;
  downloadIcs: string;
  photoGallery: string;
  photoGallerySub: string;
  weddingVideo: string;
  weddingVideoSub: string;
  rsvpHeading: string;
  rsvpSubheading: string;
  yourName: string;
  phoneNumber: string;
  attendeesCount: string;
  attendingStatus: string;
  yesAttending: string;
  noUnableToAttend: string;
  notSureYet: string;
  blessingsMessage: string;
  submitRsvp: string;
  rsvpSuccessTitle: string;
  rsvpSuccessDesc: string;
  rsvpDuplicateAlert: string;
  shareOnWhatsApp: string;
  copyLink: string;
  linkCopied: string;
  musicPlaying: string;
  musicPaused: string;
  musicPrompt: string;
  footerBlessing: string;
  footerFamilyNote: string;
}

export const translations: Record<Language, TranslationStrings> = {
  en: {
    ganeshaBlessing: 'Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada',
    ganeshaShlokaSanskrit: '॥ श्री गणेशाय नमః ॥',
    ganeshaShlokaTelugu: '॥ శ్రీ గణేశాయ నమః ॥',
    blessingHeader: 'With the divine blessings of Lord Ganesha and our elders',
    blessingSubHeader: 'We joyfully invite you to celebrate the wedding of',
    openInvitation: 'Open Wedding Invitation',
    skipIntro: 'Skip to Invitation',
    cordiallyInvited: 'You Are Cordially Invited',
    weddingInvitation: 'Wedding Invitation',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Mins',
    seconds: 'Secs',
    countdownHeading: 'Auspicious Muhurtham Countdown',
    countdownSubheading: 'Counting every sacred second until two souls become one',
    weddingStarted: 'The auspicious wedding ceremony is currently taking place!',
    weddingCelebrated: 'The wedding ceremonies have been blissfully celebrated with love and blessings.',
    meetCouple: 'The Bride & Groom',
    meetCoupleSub: 'Two hearts, one beautiful journey, and a lifetime of togetherness',
    brideTitle: 'The Graceful Bride',
    groomTitle: 'The Dashing Groom',
    eventsSchedule: 'Wedding Celebrations & Events',
    eventsScheduleSub: 'Join us in each auspicious ritual and joyful celebration',
    venueAndMap: 'Auspicious Wedding Venue',
    venueAndMapSub: 'We eagerly look forward to welcoming you with traditional hospitality',
    getDirections: 'Get Google Maps Directions',
    addToCalendar: 'Save Date to Calendar',
    googleCalendar: 'Google Calendar',
    downloadIcs: 'Download Calendar (.ics)',
    photoGallery: 'Moments of Love & Joy',
    photoGallerySub: 'A glimpse into our cherished memories and romantic journey',
    weddingVideo: 'Our Wedding Film',
    weddingVideoSub: 'A special glimpse into our memories and hearts',
    rsvpHeading: 'Kindly Confirm Your Presence (RSVP)',
    rsvpSubheading: 'Your presence and blessings will make our special day complete',
    yourName: 'Full Name *',
    phoneNumber: 'Phone Number (Optional)',
    attendeesCount: 'Number of Guests Attending *',
    attendingStatus: 'Will you be joining us? *',
    yesAttending: 'Yes, with pleasure! 🎉',
    noUnableToAttend: 'Sorry, unable to attend 💐',
    notSureYet: 'Not sure yet 🤔',
    blessingsMessage: 'Your Warm Wishes & Blessings (Optional)',
    submitRsvp: 'Send RSVP Response',
    rsvpSuccessTitle: 'Thank you for your RSVP!',
    rsvpSuccessDesc: 'Your response has been lovingly recorded. We look forward to seeing you!',
    rsvpDuplicateAlert: 'You have already submitted your RSVP. Thank you for your warmth!',
    shareOnWhatsApp: 'Share on WhatsApp',
    copyLink: 'Copy Invitation Link',
    linkCopied: 'Link Copied to Clipboard!',
    musicPlaying: 'Playing Auspicious Shehnai / Nadaswaram',
    musicPaused: 'Music Paused',
    musicPrompt: 'Click to play auspicious wedding melody',
    footerBlessing: 'May Lord Venkateswara shower eternal health, prosperity and joy upon all our families.',
    footerFamilyNote: 'With warm regards & blessings from the bride & groom families.'
  },
  te: {
    ganeshaBlessing: 'వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ, నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా',
    ganeshaShlokaSanskrit: '॥ श्री गणेशाय नमः ॥',
    ganeshaShlokaTelugu: '॥ శ్రీ గణేశాయ నమః ॥',
    blessingHeader: 'శ్రీ విఘ్నేశ్వర మరియు పెద్దల దివ్య ఆశీస్సులతో',
    blessingSubHeader: 'శుభ వివాహ మహోత్సవమునకు మిమ్ములను సకుటుంబ సపరివార సమేతంగా ఆహ్వానించుచున్నాము',
    openInvitation: 'వివాహ ఆహ్వాన పత్రికను తెరవండి',
    skipIntro: 'నేరుగా ఆహ్వానం చూడండి',
    cordiallyInvited: 'మీరు సాదరంగా ఆహ్వానితులు',
    weddingInvitation: 'శుభ వివాహ ఆహ్వాన పత్రిక',
    days: 'రోజులు',
    hours: 'గంటలు',
    minutes: 'నిమిషాలు',
    seconds: 'సెకన్లు',
    countdownHeading: 'సుముహూర్త సమయ కౌంట్‌డౌన్',
    countdownSubheading: 'పవిత్ర బంధం ముడిపడే శుభ ముహూర్తం కోసం ఎదురుచూపులు',
    weddingStarted: 'శుభ వివాహ మహోత్సవం ప్రస్తుతం వైభవంగా జరుగుతోంది!',
    weddingCelebrated: 'వివాహ వేడుకలు బంధుమిత్రుల దివ్యాశీస్సులతో వైభవంగా పూర్తయినవి.',
    meetCouple: 'వధూవరుల పరిచయం',
    meetCoupleSub: 'రెండు హృదయాలు, ఒక పవిత్ర ప్రయాణం, కలకాలం తోడునీడగా',
    brideTitle: 'వధువు',
    groomTitle: 'వరుడు',
    eventsSchedule: 'శుభకార్యముల వివరాలు & సమయములు',
    eventsScheduleSub: 'ప్రతి వేడుకలో పాల్గొని నూతన దంపతులను ఆశీర్వదించగలరు',
    venueAndMap: 'కళ్యాణ వేదిక & చిరునామా',
    venueAndMapSub: 'సాంప్రదాయ ఆత్మీయతతో మీ రాకకై ఎదురుచూస్తున్నాము',
    getDirections: 'గూగుల్ మ్యాప్స్ మార్గం చూడండి',
    addToCalendar: 'క్యాలెండర్‌లో తేదీని సేవ్ చేసుకోండి',
    googleCalendar: 'గూగుల్ క్యాలెండర్',
    downloadIcs: 'క్యాలెండర్ ఫైల్ (.ics) డౌన్‌లోడ్',
    photoGallery: 'మధుర జ్ఞాపకాల ఛాయాచిత్రాలు',
    photoGallerySub: 'మా అనుబంధానికి ప్రతీకగా నిలిచిన కొన్ని అందమైన క్షణాలు',
    weddingVideo: 'మా ప్రేమ ప్రయాణ వీడియో',
    weddingVideoSub: 'ఈ శుభ సందర్భానికి ప్రత్యేక ఆహ్వాన దృశ్యమాలిక',
    rsvpHeading: 'మీ రాకను ధృవీకరించండి (RSVP)',
    rsvpSubheading: 'మీ సమక్షం మరియు శుభాశీస్సులు మాకు ఎంతో అమూల్యం',
    yourName: 'మీ పూర్తి పేరు *',
    phoneNumber: 'ఫోన్ నంబర్ (ఐచ్ఛికం)',
    attendeesCount: 'హాజరయ్యే వారి సంఖ్య *',
    attendingStatus: 'మీరు హాజరవుతున్నారా? *',
    yesAttending: 'తప్పకుండా హాజరవుతున్నాము 🎉',
    noUnableToAttend: 'క్షమించండి, రాలేకపోతున్నాము 💐',
    notSureYet: 'ఇంకా నిర్ణయించుకోలేదు 🤔',
    blessingsMessage: 'మీ ఆశీస్సులు & శుభాకాంక్షలు (ఐచ్ఛికం)',
    submitRsvp: 'వివరాలు పంపండి',
    rsvpSuccessTitle: 'మీ స్పందనకు ధన్యవాదాలు!',
    rsvpSuccessDesc: 'మీ వివరాలు నమోదైనవి. మీ రాకకై ఎదురుచూస్తున్నాము!',
    rsvpDuplicateAlert: 'మీరు ఇప్పటికే స్పందించారు. మీ ఆత్మీయతకు ధన్యవాదాలు!',
    shareOnWhatsApp: 'వాట్సాప్‌లో పంపండి',
    copyLink: 'ఆహ్వాన లింక్ కాపీ చేయండి',
    linkCopied: 'లింక్ కాపీ చేయబడింది!',
    musicPlaying: 'మంగళ వాయిద్యాల శ్రావ్య నాదం',
    musicPaused: 'సంగీతం నిలిపివేయబడింది',
    musicPrompt: 'శుభ మంగళ వాయిద్యాలను వినడానికి క్లిక్ చేయండి',
    footerBlessing: 'శ్రీ వేంకటేశ్వర స్వామి వారి కృపాకటాక్షములు మీ కుటుంబంపై ఎల్లప్పుడూ ఉండుగాక.',
    footerFamilyNote: 'వధూవరుల కుటుంబ సభ్యుల వినమ్ర నమస్కారములతో.'
  }
};
