import { createHash } from 'crypto';

const ENDPOINT = 'https://bzr.openai.com/v1/events';

function sha256(value: string): string {
  return createHash('sha256').update(value, 'utf8').digest('hex');
}

/** OpenAI exige el email normalizado (sin espacios y en minúsculas) antes del hash. */
function hashEmail(email?: string): string | null {
  const normalized = (email || '').trim().toLowerCase();
  return normalized ? sha256(normalized) : null;
}

/** El teléfono va solo en dígitos y con prefijo de país; aquí se asume 34 si falta. */
function hashPhone(phone?: string): string | null {
  let digits = (phone || '').replace(/\D/g, '');
  if (!digits) return null;
  if (digits.length === 9) digits = `34${digits}`;
  if (digits.length < 8 || digits.length > 15) return null;
  return sha256(digits);
}

export interface ConversionEventInput {
  eventId: string;
  sourceUrl: string;
  email?: string;
  phone?: string;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Envía la conversión a la Conversions API de OpenAI Ads.
 *
 * El eventId debe ser el mismo que envía el píxel desde el navegador: OpenAI
 * deduplica por (pixel, tipo de evento, id) y se queda con el primero que
 * llega, así que un mismo formulario nunca cuenta dos veces.
 *
 * Nunca lanza: un fallo de OpenAI no debe afectar al envío del formulario.
 */
export async function sendOpenAiConversion(input: ConversionEventInput): Promise<void> {
  const apiKey = process.env.OPENAI_ADS_API_KEY;
  const pixelId = process.env.OPENAI_ADS_PIXEL_ID;
  if (!apiKey || !pixelId) return;

  const emailHash = hashEmail(input.email);
  const phoneHash = hashPhone(input.phone);

  const user: Record<string, any> = {};
  if (emailHash) user.emails_sha256 = [emailHash];
  if (phoneHash) user.phone_numbers_sha256 = [phoneHash];
  if (input.ipAddress) user.ip_address = input.ipAddress;
  if (input.userAgent) user.user_agent = input.userAgent;

  const event: Record<string, any> = {
    id: input.eventId,
    type: 'page_viewed',
    timestamp_ms: Date.now(),
    source_url: input.sourceUrl,
    action_source: 'web',
    data: { type: 'contents' },
  };
  if (Object.keys(user).length > 0) event.user = user;

  try {
    const res = await fetch(`${ENDPOINT}?pid=${encodeURIComponent(pixelId)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ validate_only: false, events: [event] }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error('[OpenAI Ads] Conversion rejected:', res.status, detail);
    }
  } catch (err: any) {
    console.error('[OpenAI Ads] Conversion failed:', err.message);
  }
}
