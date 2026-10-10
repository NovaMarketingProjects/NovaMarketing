/**
 * url.ts — helpers de saneamiento para contenido del CMS que se renderiza en HTML.
 *
 * El contenido del CMS es datos, no markup de confianza: cualquier persona con
 * permiso de escritura por debajo del propietario del sitio (un editor, un token
 * de API con scope de escritura, o el rol Public si la BD concede create/update)
 * puede influir en estos valores, y la web pública no tiene Content-Security-Policy.
 */

/** Esquemas permitidos para URLs del CMS que acaban en un href. */
const SAFE_SCHEMES = ['http:', 'https:', 'mailto:', 'tel:'];

/**
 * Devuelve la URL si su esquema es seguro (o es una ruta relativa al sitio),
 * y `undefined` en caso contrario. Astro escapa los metacaracteres HTML del
 * atributo, pero no inspecciona el esquema, así que `javascript:`/`data:`
 * sobrevivirían sin este filtro.
 */
export function safeHref(u?: string | null): string | undefined {
  if (!u || typeof u !== 'string') return undefined;
  const v = u.trim();
  if (v === '') return undefined;
  if (v.startsWith('/') && !v.startsWith('//')) return v; // relativa al sitio
  if (v.startsWith('#')) return v; // ancla
  try {
    return SAFE_SCHEMES.includes(new URL(v, 'https://novamarketing.es').protocol) ? v : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Escapa un valor para interpolarlo con seguridad en HTML (texto o atributo).
 * Cubre & < > " ', que es lo necesario tanto en posición de texto como de
 * atributo entre comillas dobles o simples.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
