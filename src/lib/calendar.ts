interface CalendarOptions {
  title: string;
  description: string;
  location: string;
  startDateTime: string; // ISO 8601 string: 2026-11-28T09:15:00+05:30
  endDateTime: string;   // ISO 8601 string: 2026-11-28T13:30:00+05:30
}

function formatUtcDateTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

export function generateGoogleCalendarUrl(options: CalendarOptions): string {
  const start = formatUtcDateTime(options.startDateTime);
  const end = formatUtcDateTime(options.endDateTime);
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: options.title,
    dates: `${start}/${end}`,
    details: options.description,
    location: options.location,
    sf: 'true',
    output: 'xml'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(options: CalendarOptions, filename = 'wedding-invitation.ics'): void {
  const start = formatUtcDateTime(options.startDateTime);
  const end = formatUtcDateTime(options.endDateTime);
  const now = formatUtcDateTime(new Date().toISOString());

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Digital Wedding Invitation//Telugu Hindu Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@weddinginvitation.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${options.title.replace(/[,;]/g, ' ')}`,
    `DESCRIPTION:${options.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${options.location.replace(/[,;]/g, ' ')}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
