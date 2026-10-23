/**
 * lead-source — clasifica el origen de un contacto a partir del campo
 * `attribution` que añade el script LeadAttribution de la web, y del
 * User-Agent de la petición, y devuelve las líneas para el email al admin.
 *
 * Canales:
 *  - Google Ads: gclid / gbraid / wbraid / gad_source, o utm google + cpc.
 *  - ChatGPT Ads: oppref / olref (los añade OpenAI), o utm_source chatgpt|openai con medium de pago.
 *  - Meta Ads (fbclid o utm facebook/instagram de pago), Microsoft Ads (msclkid),
 *    TikTok/LinkedIn/X Ads por sus click IDs.
 *  - IA (orgánico): referrer o utm de chatgpt.com, perplexity, gemini, copilot…
 *  - Orgánico (buscador), Redes sociales, Email, Referencia (otra web), Directo.
 */

type Touch = {
  ts?: string;
  landing?: string;
  referrer?: string;
  utm?: Record<string, string>;
  ids?: Record<string, string>;
};

type Attribution = {
  first?: Touch;
  session?: Touch;
  pages?: number;
  secondsOnSite?: number;
  visits?: number;
  device?: { w?: number; h?: number; vw?: number; dpr?: number; touch?: boolean; lang?: string; tz?: string };
};

const PAID = /^(cpc|ppc|paid|paidsearch|paid_search|paid-search|ads?|display|cpm|sem|retargeting|remarketing)$/i;
const AI_HOSTS: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)openai\.com$/i, 'ChatGPT'],
  [/(^|\.)perplexity\.ai$/i, 'Perplexity'],
  [/(^|\.)gemini\.google\.com$|(^|\.)bard\.google\.com$/i, 'Gemini'],
  [/(^|\.)copilot\.microsoft\.com$/i, 'Copilot'],
  [/(^|\.)claude\.ai$/i, 'Claude'],
  [/(^|\.)deepseek\.com$/i, 'DeepSeek'],
];
const SEARCH_HOSTS: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/i, 'Google'],
  [/(^|\.)bing\.com$/i, 'Bing'],
  [/(^|\.)duckduckgo\.com$/i, 'DuckDuckGo'],
  [/(^|\.)search\.yahoo\.com$|(^|\.)yahoo\.com$/i, 'Yahoo'],
  [/(^|\.)ecosia\.org$/i, 'Ecosia'],
  [/(^|\.)search\.brave\.com$/i, 'Brave'],
];
const SOCIAL_HOSTS: [RegExp, string][] = [
  [/(^|\.)facebook\.com$|(^|\.)fb\.com$|(^|\.)l\.facebook\.com$/i, 'Facebook'],
  [/(^|\.)instagram\.com$/i, 'Instagram'],
  [/(^|\.)linkedin\.com$|(^|\.)lnkd\.in$/i, 'LinkedIn'],
  [/(^|\.)t\.co$|(^|\.)twitter\.com$|(^|\.)x\.com$/i, 'X (Twitter)'],
  [/(^|\.)tiktok\.com$/i, 'TikTok'],
  [/(^|\.)youtube\.com$/i, 'YouTube'],
  [/(^|\.)pinterest\.[a-z.]+$/i, 'Pinterest'],
];

const clean = (v: unknown, max = 150): string => (typeof v === 'string' ? v.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max) : '');
const hostOf = (u?: string): string => { try { return u ? new URL(u).host.replace(/^www\./, '') : ''; } catch { return ''; } };
const match = (host: string, list: [RegExp, string][]) => list.find(([re]) => re.test(host))?.[1];

/** Canal legible de un "touch" (primera visita o visita actual). */
export function classifyTouch(t?: Touch): string {
  if (!t) return 'Desconocido';
  const utm = t.utm || {}, ids = t.ids || {};
  const source = clean(utm.source).toLowerCase(), medium = clean(utm.medium).toLowerCase();
  const refHost = hostOf(t.referrer);

  if (ids.gclid || ids.gbraid || ids.wbraid || ids.gad_source || (/google/.test(source) && PAID.test(medium))) return 'Google Ads';
  // ChatGPT Ads añade oppref y olref a la URL de destino de sus anuncios.
  if (ids.oppref || ids.olref || (/chatgpt|openai/.test(source) && PAID.test(medium))) return 'ChatGPT Ads';
  if (ids.fbclid && (PAID.test(medium) || /facebook|instagram|meta|fb|ig/.test(source))) return 'Meta Ads';
  if (/facebook|instagram|meta|^fb$|^ig$/.test(source) && PAID.test(medium)) return 'Meta Ads';
  if (ids.msclkid || (/bing|microsoft/.test(source) && PAID.test(medium))) return 'Microsoft Ads (Bing)';
  if (ids.ttclid) return 'TikTok Ads';
  if (ids.li_fat_id) return 'LinkedIn Ads';
  if (ids.twclid) return 'X Ads';
  if (source && PAID.test(medium)) return `Publicidad (${clean(utm.source, 60)})`;

  const aiFromUtm = AI_HOSTS.find(([re]) => re.test(source))?.[1] || (/chatgpt|openai/.test(source) ? 'ChatGPT' : /perplexity/.test(source) ? 'Perplexity' : '');
  const ai = aiFromUtm || match(refHost, AI_HOSTS);
  if (ai) return `IA orgánico (${ai})`;

  if (/^e?-?mail|newsletter/.test(medium) || /newsletter|mailchimp|brevo/.test(source)) return 'Email';
  if (ids.fbclid) return 'Redes sociales (Facebook/Instagram)';

  const social = match(refHost, SOCIAL_HOSTS) || (/^(social|social-media|rrss)$/.test(medium) ? clean(utm.source, 40) : '');
  if (social) return `Redes sociales (${social})`;

  const search = match(refHost, SEARCH_HOSTS) || (medium === 'organic' ? clean(utm.source, 40) : '');
  if (search) return `Orgánico (${search})`;

  if (source) return `Campaña (${clean(utm.source, 50)}${medium ? ' / ' + clean(utm.medium, 30) : ''})`;
  if (refHost) return `Referencia (${refHost})`;
  return 'Directo';
}

/** Dispositivo a partir del User-Agent y de los datos de pantalla del navegador. */
export function describeDevice(ua: string, d?: Attribution['device']): string {
  const u = ua || '';
  const tablet = /iPad|Tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(u) || (/Macintosh/.test(u) && d?.touch);
  const mobile = !tablet && /Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(u);
  const type = tablet ? 'Tablet' : mobile ? 'Móvil' : 'Escritorio';
  const os = /iPhone|iPad|iPod/.test(u) || (/Macintosh/.test(u) && d?.touch) ? 'iOS'
    : /Android/.test(u) ? 'Android'
    : /Windows/.test(u) ? 'Windows'
    : /Mac OS X|Macintosh/.test(u) ? 'macOS'
    : /CrOS/.test(u) ? 'ChromeOS'
    : /Linux/.test(u) ? 'Linux' : 'Otro SO';
  const browser = /Edg\//.test(u) ? 'Edge' : /OPR\//.test(u) ? 'Opera' : /SamsungBrowser/.test(u) ? 'Samsung Internet'
    : /Firefox|FxiOS/.test(u) ? 'Firefox' : /Chrome|CriOS/.test(u) ? 'Chrome' : /Safari/.test(u) ? 'Safari' : 'Otro navegador';
  const screen = d?.w && d?.h ? ` · pantalla ${Math.round(d.w)}x${Math.round(d.h)}` : '';
  return `${type} · ${os} · ${browser}${screen}`;
}

// Parámetros de seguimiento que ya se muestran aparte (UTM, click IDs).
const TRACKING_PARAM = /^(utm_[a-z]+|gclid|gbraid|wbraid|gad_source|gad_campaignid|fbclid|msclkid|ttclid|li_fat_id|twclid|oppref|olref)$/i;

/** Página de entrada sin los parámetros de seguimiento, que se listan en sus propias líneas. */
function cleanLanding(landing?: string): string {
  const l = clean(landing, 300);
  if (!l) return '-';
  try {
    const u = new URL(l, 'https://novamarketing.es');
    [...u.searchParams.keys()].forEach((k) => { if (TRACKING_PARAM.test(k)) u.searchParams.delete(k); });
    return u.pathname + (u.searchParams.toString() ? `?${u.searchParams}` : '');
  } catch {
    return l;
  }
}

function touchLines(label: string, t?: Touch): string[] {
  if (!t) return [];
  const utm = t.utm || {}, ids = Object.keys(t.ids || {});
  const date = t.ts ? new Date(t.ts).toLocaleString('es-ES', { timeZone: 'Europe/Madrid', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
  const lines = [
    `${label}: ${classifyTouch(t)}${date ? ` (${date})` : ''}`,
    `  Entrada:   ${cleanLanding(t.landing)}`,
    `  Referrer:  ${clean(t.referrer, 300) || '(ninguno)'}`,
  ];
  const utmParts = ['source', 'medium', 'campaign', 'term', 'content'].filter((k) => utm[k]).map((k) => `${k}=${clean(utm[k], 120)}`);
  if (utmParts.length) lines.push(`  UTM:       ${utmParts.join(' · ')}`);
  if (ids.length) lines.push(`  Click ID:  ${ids.join(', ')}`);
  return lines;
}

/** Bloque de texto "ORIGEN DEL CONTACTO" para el email del administrador. */
export function leadSourceBlock(rawAttribution: unknown, userAgent: string, acceptLanguage?: string): string[] {
  let a: Attribution = {};
  if (typeof rawAttribution === 'string' && rawAttribution.length <= 8000) {
    try { a = JSON.parse(rawAttribution) || {}; } catch { a = {}; }
  }
  const session = a.session, first = a.first;
  const canal = session ? classifyTouch(session) : 'Desconocido (sin datos del navegador)';
  const lines = [
    '',
    'ORIGEN DEL CONTACTO',
    '-------------------',
    `Canal:        ${canal}`,
    `Dispositivo:  ${describeDevice(clean(userAgent, 400), a.device)}`,
  ];
  if (a.device?.lang || acceptLanguage) lines.push(`Idioma:       ${clean(a.device?.lang || acceptLanguage, 40)}${a.device?.tz ? ` · ${clean(a.device.tz, 40)}` : ''}`);
  if (typeof a.pages === 'number' || typeof a.secondsOnSite === 'number') {
    const mins = typeof a.secondsOnSite === 'number' ? Math.max(0, Math.round(a.secondsOnSite / 60)) : null;
    lines.push(`Esta visita:  ${a.pages ?? '?'} páginas vistas${mins !== null ? ` · ${mins} min en la web` : ''}`);
  }
  if (typeof a.visits === 'number') lines.push(`Visitas:      ${a.visits}${a.visits > 1 ? ' (ha vuelto a la web)' : ' (primera visita)'}`);
  lines.push('', ...touchLines('Visita actual', session));
  const sameAsFirst = first && session && first.ts === session.ts;
  if (first && !sameAsFirst) lines.push('', ...touchLines('Primera visita', first));
  return lines;
}
