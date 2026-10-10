/**
 * contact-rate-limit — limitador por IP para el endpoint anónimo de contacto.
 *
 * Referenciado como 'global::contact-rate-limit' en la ruta POST /contact.
 * Sin esto, cualquier anónimo puede disparar envíos de correo de marca sin
 * límite. Los contadores son en memoria del proceso; para despliegues
 * multi-instancia o tras proxy conviene un almacén compartido y una fuente de
 * IP de cliente de confianza.
 */

const PER_IP_MAX = 5;        // envíos por IP y ventana
const GLOBAL_MAX = 200;      // envíos de todos los llamantes por ventana
const WINDOW_MS = 60 * 60 * 1000;

const hits = new Map<string, number[]>();
let globalHits: number[] = [];

const prune = (list: number[], now: number) => list.filter((t) => now - t < WINDOW_MS);

export default (_config: unknown, { strapi }: { strapi: any }) => {
  return async (ctx: any, next: any) => {
    const now = Date.now();
    const ip = ctx.request.ip || 'unknown';

    globalHits = prune(globalHits, now);
    const ipHits = prune(hits.get(ip) ?? [], now);

    if (ipHits.length >= PER_IP_MAX || globalHits.length >= GLOBAL_MAX) {
      strapi.log.warn(`[contact] rate limit hit for ${ip}`);
      ctx.status = 429;
      ctx.body = { error: 'Too many requests' };
      return;
    }

    ipHits.push(now);
    globalHits.push(now);
    hits.set(ip, ipHits);

    await next();
  };
};
