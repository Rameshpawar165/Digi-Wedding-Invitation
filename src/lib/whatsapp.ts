export function generateWhatsAppShareUrl(text: string, url: string): string {
  const fullMessage = `${text}\n\n👉 ${url}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMessage)}`;
}

export async function shareInvitation(title: string, text: string, url: string): Promise<'shared' | 'copied' | 'failed'> {
  if (typeof window !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return 'shared';
    } catch {
      // Fallback
    }
  }

  if (typeof window !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      return 'copied';
    } catch {
      return 'failed';
    }
  }

  return 'failed';
}
