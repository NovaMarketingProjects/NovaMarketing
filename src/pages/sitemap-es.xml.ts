import type { APIRoute } from 'astro';
import { strapiClient } from '../lib/strapi';

const SITE = 'https://novamarketing.es';

// Páginas estáticas ES ↔ CA. lastmod = fecha real del último commit que tocó
// el fichero fuente (git log), NO la fecha de build. caPath = null cuando la
// página no tiene equivalente CA indexable (p.ej. legales, que en catalán
// están en noindex).
const STATIC_PAGES: { es: string; ca: string | null; lastmod: string }[] = [
  { es: '/', ca: '/ca/', lastmod: '2026-07-23' },
  { es: '/agencia-seo-para-pymes/', ca: '/ca/agencia-seo-per-pimes/', lastmod: '2026-07-23' },
  { es: '/agencia-sem-para-pymes/', ca: '/ca/agencia-sem-per-pimes/', lastmod: '2026-07-23' },
  { es: '/diseno-web-para-pymes/', ca: '/ca/disseny-web-per-pimes/', lastmod: '2026-07-23' },
  { es: '/casos-exito/', ca: '/ca/casos-exit/', lastmod: '2026-07-20' },
  { es: '/blog/', ca: '/ca/blog/', lastmod: '2026-07-20' },
  { es: '/agencia-de-marketing-digital-en-barcelona/', ca: '/ca/agencia-de-marketing-digital-a-barcelona/', lastmod: '2026-07-23' },
  { es: '/agencia-de-marketing-digital-en-sabadell/', ca: '/ca/agencia-de-marketing-digital-a-sabadell/', lastmod: '2026-07-20' },
  { es: '/agencia-de-marketing-digital-en-sant-cugat/', ca: '/ca/agencia-de-marketing-digital-a-sant-cugat/', lastmod: '2026-07-20' },
  { es: '/agencia-de-marketing-digital-en-terrassa/', ca: '/ca/agencia-de-marketing-digital-a-terrassa/', lastmod: '2026-07-20' },
  { es: '/agencia-seo-para-pymes/barcelona/', ca: '/ca/agencia-seo-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { es: '/agencia-seo-para-pymes/sabadell/', ca: '/ca/agencia-seo-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { es: '/agencia-seo-para-pymes/sant-cugat/', ca: '/ca/agencia-seo-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { es: '/agencia-seo-para-pymes/terrassa/', ca: '/ca/agencia-seo-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { es: '/agencia-sem-para-pymes/barcelona/', ca: '/ca/agencia-sem-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { es: '/agencia-sem-para-pymes/sabadell/', ca: '/ca/agencia-sem-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { es: '/agencia-sem-para-pymes/sant-cugat/', ca: '/ca/agencia-sem-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { es: '/agencia-sem-para-pymes/terrassa/', ca: '/ca/agencia-sem-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { es: '/agencia-geo-para-pymes/', ca: '/ca/agencia-geo-per-pimes/', lastmod: '2026-07-23' },
  { es: '/agencia-geo-para-pymes/barcelona/', ca: '/ca/agencia-geo-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { es: '/agencia-geo-para-pymes/sabadell/', ca: '/ca/agencia-geo-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { es: '/agencia-geo-para-pymes/sant-cugat/', ca: '/ca/agencia-geo-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { es: '/agencia-geo-para-pymes/terrassa/', ca: '/ca/agencia-geo-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { es: '/diseno-web-para-pymes/barcelona/', ca: '/ca/disseny-web-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { es: '/diseno-web-para-pymes/sabadell/', ca: '/ca/disseny-web-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { es: '/diseno-web-para-pymes/sant-cugat/', ca: '/ca/disseny-web-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { es: '/diseno-web-para-pymes/terrassa/', ca: '/ca/disseny-web-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { es: '/agencia-ecommerce/', ca: '/ca/agencia-ecommerce/', lastmod: '2026-07-23' },
  { es: '/agencia-ecommerce/diseno-web/', ca: '/ca/agencia-ecommerce/diseno-web/', lastmod: '2026-07-23' },
  { es: '/agencia-ecommerce/seo/', ca: '/ca/agencia-ecommerce/seo/', lastmod: '2026-07-23' },
  { es: '/agencia-ecommerce/google-ads/', ca: '/ca/agencia-ecommerce/google-ads/', lastmod: '2026-07-23' },
  { es: '/agencia-ecommerce/meta-ads/', ca: '/ca/agencia-ecommerce/meta-ads/', lastmod: '2026-07-23' },
  { es: '/agencia-ecommerce/email-marketing/', ca: '/ca/agencia-ecommerce/email-marketing/', lastmod: '2026-07-23' },
  { es: '/agencia-ecommerce/posicionamiento-geo/', ca: '/ca/agencia-ecommerce/posicionamiento-geo/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/', ca: '/ca/agencia-inmobiliarias/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/diseno-web/', ca: '/ca/agencia-inmobiliarias/diseno-web/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/seo/', ca: '/ca/agencia-inmobiliarias/seo/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/google-ads/', ca: '/ca/agencia-inmobiliarias/google-ads/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/meta-ads/', ca: '/ca/agencia-inmobiliarias/meta-ads/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/email-marketing/', ca: '/ca/agencia-inmobiliarias/email-marketing/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/posicionamiento-geo/', ca: '/ca/agencia-inmobiliarias/posicionamiento-geo/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/wordpress/', ca: '/ca/agencia-inmobiliarias/wordpress/', lastmod: '2026-07-23' },
  { es: '/agencia-inmobiliarias/desarrollo-propio/', ca: '/ca/agencia-inmobiliarias/desarrollo-propio/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/', ca: '/ca/agencia-restaurantes/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/diseno-web/', ca: '/ca/agencia-restaurantes/diseno-web/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/seo/', ca: '/ca/agencia-restaurantes/seo/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/google-ads/', ca: '/ca/agencia-restaurantes/google-ads/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/meta-ads/', ca: '/ca/agencia-restaurantes/meta-ads/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/email-marketing/', ca: '/ca/agencia-restaurantes/email-marketing/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/posicionamiento-geo/', ca: '/ca/agencia-restaurantes/posicionamiento-geo/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/wordpress/', ca: '/ca/agencia-restaurantes/wordpress/', lastmod: '2026-07-23' },
  { es: '/agencia-restaurantes/desarrollo-propio/', ca: '/ca/agencia-restaurantes/desarrollo-propio/', lastmod: '2026-07-23' },
  // Legales: la versión CA está en noindex,nofollow → sin alternate CA aquí.
  { es: '/aviso-legal/', ca: null, lastmod: '2026-07-20' },
  { es: '/privacidad/', ca: null, lastmod: '2026-07-20' },
  { es: '/cookies/', ca: null, lastmod: '2026-07-20' },
  { es: '/terminos-y-condiciones/', ca: null, lastmod: '2026-07-20' },
];

// Categorías de blog/casos de éxito cuyo slug difiere entre ES y CA
// (verificado en vivo: el resto de categorías comparten el mismo slug).
const CA_CATEGORY_SLUG: Record<string, string> = {
  'diseno-web': 'disseny-web',
  'Consultoria-de-marketing': 'consultoria-de-marketing',
};

function e(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function entry(esPath: string, caPath: string | null, lastmod: string): string {
  const esUrl = e(SITE + esPath);
  const caUrl = caPath ? e(SITE + caPath) : null;
  return `  <url>
    <loc>${esUrl}</loc>
    <lastmod>${lastmod.split('T')[0]}</lastmod>
    <xhtml:link rel="alternate" hreflang="es-ES" href="${esUrl}"/>
    ${caUrl ? `<xhtml:link rel="alternate" hreflang="ca-ES" href="${caUrl}"/>` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}"/>
  </url>`;
}

export const GET: APIRoute = async () => {
  const entries: string[] = [];

  // Páginas estáticas
  for (const p of STATIC_PAGES) {
    entries.push(entry(p.es, p.ca, p.lastmod));
  }

  // Blog posts: cruzar documentId para obtener slug CA
  try {
    const [resEs, resCa] = await Promise.all([
      strapiClient.getBlogPosts('es', { limit: 500 }),
      strapiClient.getBlogPosts('ca', { limit: 500 }),
    ]);
    const caSlugMap: Record<string, string> = {};
    for (const item of (resCa.data ?? []) as any[]) {
      const p = item.attributes ?? item;
      if (item.documentId && p.slug) caSlugMap[item.documentId] = p.slug;
    }
    for (const item of (resEs.data ?? []) as any[]) {
      const post = item.attributes ?? item;
      if (!post.slug) continue;
      const lastmod = post.publishedAt || post.publishedDate;
      if (!lastmod) continue;
      const caSlug = item.documentId && caSlugMap[item.documentId];
      entries.push(entry(`/blog/${post.slug}/`, caSlug ? `/ca/blog/${caSlug}/` : null, lastmod));
    }
  } catch {}

  // Casos de éxito: cruzar documentId para obtener slug CA (solo isPublic)
  try {
    const [resEs, resCa] = await Promise.all([
      strapiClient.getCaseStudies('es'),
      strapiClient.getCaseStudies('ca'),
    ]);
    const caSlugMap: Record<string, string> = {};
    for (const item of (resCa.data ?? []) as any[]) {
      const c = item.attributes ?? item;
      if (item.documentId && c.slug) caSlugMap[item.documentId] = c.slug;
    }
    for (const item of (resEs.data ?? []) as any[]) {
      const cs = item.attributes ?? item;
      if (!cs.slug || !cs.isPublic || !cs.publishedAt) continue;
      const caSlug = item.documentId && caSlugMap[item.documentId];
      entries.push(entry(`/casos-exito/${cs.slug}/`, caSlug ? `/ca/casos-exit/${caSlug}/` : null, cs.publishedAt));
    }
  } catch {}

  // Páginas de categoría de blog (archivo por categoría): solo si tienen
  // al menos un post publicado; lastmod = post más reciente de la categoría.
  try {
    const catsRes = await strapiClient.getBlogCategories('es');
    for (const item of (catsRes.data ?? []) as any[]) {
      const cat = item.attributes ?? item;
      if (!cat.slug) continue;
      const postsRes = await strapiClient.getBlogPosts('es', { category: cat.slug });
      const posts = (postsRes.data ?? []) as any[];
      if (!posts.length) continue; // categoría vacía → fuera del sitemap
      const first = posts[0].attributes ?? posts[0];
      const lastmod = first.publishedAt;
      if (!lastmod) continue;
      const caSlug = CA_CATEGORY_SLUG[cat.slug] || cat.slug;
      entries.push(entry(`/blog/${cat.slug}/`, `/ca/blog/${caSlug}/`, lastmod));
    }
  } catch {}

  // Páginas de categoría de casos de éxito: mismas reglas, filtrando por isPublic.
  try {
    const catsRes = await strapiClient.getCaseStudyCategories('es');
    for (const item of (catsRes.data ?? []) as any[]) {
      const cat = item.attributes ?? item;
      if (!cat.slug) continue;
      const casesRes = await strapiClient.getCaseStudies('es', { category: cat.slug });
      const cases = ((casesRes.data ?? []) as any[])
        .map(i => i.attributes ?? i)
        .filter((c: any) => c.isPublic);
      if (!cases.length) continue; // categoría sin casos públicos → fuera del sitemap
      const lastmod = cases[0].publishedAt;
      if (!lastmod) continue;
      const caSlug = CA_CATEGORY_SLUG[cat.slug] || cat.slug;
      entries.push(entry(`/casos-exito/${cat.slug}/`, `/ca/casos-exit/${caSlug}/`, lastmod));
    }
  } catch {}

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
