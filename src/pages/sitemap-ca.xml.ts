import type { APIRoute } from 'astro';
import { strapiClient } from '../lib/strapi';

const SITE = 'https://novamarketing.es';

// Páginas estáticas CA ↔ ES. lastmod = fecha real del último commit que tocó
// el fichero fuente (git log), NO la fecha de build. Las páginas legales CA
// están en noindex,nofollow → no se listan aquí en absoluto.
const STATIC_PAGES: { ca: string; es: string; lastmod: string }[] = [
  { ca: '/ca/', es: '/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-seo-per-pimes/', es: '/agencia-seo-para-pymes/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-sem-per-pimes/', es: '/agencia-sem-para-pymes/', lastmod: '2026-07-23' },
  { ca: '/ca/disseny-web-per-pimes/', es: '/diseno-web-para-pymes/', lastmod: '2026-07-23' },
  { ca: '/ca/casos-exit/', es: '/casos-exito/', lastmod: '2026-07-20' },
  { ca: '/ca/blog/', es: '/blog/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-de-marketing-digital-a-barcelona/', es: '/agencia-de-marketing-digital-en-barcelona/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-de-marketing-digital-a-sabadell/', es: '/agencia-de-marketing-digital-en-sabadell/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-de-marketing-digital-a-sant-cugat/', es: '/agencia-de-marketing-digital-en-sant-cugat/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-de-marketing-digital-a-terrassa/', es: '/agencia-de-marketing-digital-en-terrassa/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-seo-per-pimes/barcelona/', es: '/agencia-seo-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-seo-per-pimes/sabadell/', es: '/agencia-seo-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-seo-per-pimes/sant-cugat/', es: '/agencia-seo-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-seo-per-pimes/terrassa/', es: '/agencia-seo-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-sem-per-pimes/barcelona/', es: '/agencia-sem-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-sem-per-pimes/sabadell/', es: '/agencia-sem-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-sem-per-pimes/sant-cugat/', es: '/agencia-sem-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-sem-per-pimes/terrassa/', es: '/agencia-sem-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-geo-per-pimes/', es: '/agencia-geo-para-pymes/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-geo-per-pimes/barcelona/', es: '/agencia-geo-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-geo-per-pimes/sabadell/', es: '/agencia-geo-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-geo-per-pimes/sant-cugat/', es: '/agencia-geo-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-geo-per-pimes/terrassa/', es: '/agencia-geo-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { ca: '/ca/disseny-web-per-pimes/barcelona/', es: '/diseno-web-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { ca: '/ca/disseny-web-per-pimes/sabadell/', es: '/diseno-web-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { ca: '/ca/disseny-web-per-pimes/sant-cugat/', es: '/diseno-web-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { ca: '/ca/disseny-web-per-pimes/terrassa/', es: '/diseno-web-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { ca: '/ca/agencia-ecommerce/', es: '/agencia-ecommerce/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-ecommerce/diseno-web/', es: '/agencia-ecommerce/diseno-web/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-ecommerce/seo/', es: '/agencia-ecommerce/seo/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-ecommerce/google-ads/', es: '/agencia-ecommerce/google-ads/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-ecommerce/meta-ads/', es: '/agencia-ecommerce/meta-ads/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-ecommerce/email-marketing/', es: '/agencia-ecommerce/email-marketing/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-ecommerce/posicionamiento-geo/', es: '/agencia-ecommerce/posicionamiento-geo/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/', es: '/agencia-inmobiliarias/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/diseno-web/', es: '/agencia-inmobiliarias/diseno-web/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/seo/', es: '/agencia-inmobiliarias/seo/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/google-ads/', es: '/agencia-inmobiliarias/google-ads/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/meta-ads/', es: '/agencia-inmobiliarias/meta-ads/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/email-marketing/', es: '/agencia-inmobiliarias/email-marketing/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/posicionamiento-geo/', es: '/agencia-inmobiliarias/posicionamiento-geo/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/wordpress/', es: '/agencia-inmobiliarias/wordpress/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-inmobiliarias/desarrollo-propio/', es: '/agencia-inmobiliarias/desarrollo-propio/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/', es: '/agencia-restaurantes/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/diseno-web/', es: '/agencia-restaurantes/diseno-web/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/seo/', es: '/agencia-restaurantes/seo/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/google-ads/', es: '/agencia-restaurantes/google-ads/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/meta-ads/', es: '/agencia-restaurantes/meta-ads/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/email-marketing/', es: '/agencia-restaurantes/email-marketing/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/posicionamiento-geo/', es: '/agencia-restaurantes/posicionamiento-geo/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/wordpress/', es: '/agencia-restaurantes/wordpress/', lastmod: '2026-07-23' },
  { ca: '/ca/agencia-restaurantes/desarrollo-propio/', es: '/agencia-restaurantes/desarrollo-propio/', lastmod: '2026-07-23' },
];

// Categorías de blog/casos de éxito cuyo slug difiere entre ES y CA
// (verificado en vivo: el resto de categorías comparten el mismo slug).
const ES_CATEGORY_SLUG: Record<string, string> = {
  'disseny-web': 'diseno-web',
  'consultoria-de-marketing': 'Consultoria-de-marketing',
};

function e(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function entry(caPath: string, esPath: string | null, lastmod: string): string {
  const caUrl = e(SITE + caPath);
  const esUrl = esPath ? e(SITE + esPath) : null;
  const defaultUrl = esUrl ?? caUrl;
  return `  <url>
    <loc>${caUrl}</loc>
    <lastmod>${lastmod.split('T')[0]}</lastmod>
    <xhtml:link rel="alternate" hreflang="ca-ES" href="${caUrl}"/>
    ${esUrl ? `<xhtml:link rel="alternate" hreflang="es-ES" href="${esUrl}"/>` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>
  </url>`;
}

export const GET: APIRoute = async () => {
  const entries: string[] = [];

  // Páginas estáticas
  for (const p of STATIC_PAGES) {
    entries.push(entry(p.ca, p.es, p.lastmod));
  }

  // Blog posts: cruzar documentId para obtener slug ES
  try {
    const [resCa, resEs] = await Promise.all([
      strapiClient.getBlogPosts('ca', { limit: 500 }),
      strapiClient.getBlogPosts('es', { limit: 500 }),
    ]);
    const esSlugMap: Record<string, string> = {};
    for (const item of (resEs.data ?? []) as any[]) {
      const p = item.attributes ?? item;
      if (item.documentId && p.slug) esSlugMap[item.documentId] = p.slug;
    }
    for (const item of (resCa.data ?? []) as any[]) {
      const post = item.attributes ?? item;
      if (!post.slug) continue;
      const lastmod = post.publishedAt || post.publishedDate;
      if (!lastmod) continue;
      const esSlug = item.documentId && esSlugMap[item.documentId];
      entries.push(entry(`/ca/blog/${post.slug}/`, esSlug ? `/blog/${esSlug}/` : null, lastmod));
    }
  } catch {}

  // Casos d'èxit: cruzar documentId para obtener slug ES (solo isPublic)
  try {
    const [resCa, resEs] = await Promise.all([
      strapiClient.getCaseStudies('ca'),
      strapiClient.getCaseStudies('es'),
    ]);
    const esSlugMap: Record<string, string> = {};
    for (const item of (resEs.data ?? []) as any[]) {
      const c = item.attributes ?? item;
      if (item.documentId && c.slug) esSlugMap[item.documentId] = c.slug;
    }
    for (const item of (resCa.data ?? []) as any[]) {
      const cs = item.attributes ?? item;
      if (!cs.slug || !cs.isPublic || !cs.publishedAt) continue;
      const esSlug = item.documentId && esSlugMap[item.documentId];
      entries.push(entry(`/ca/casos-exit/${cs.slug}/`, esSlug ? `/casos-exito/${esSlug}/` : null, cs.publishedAt));
    }
  } catch {}

  // Páginas de categoría de blog: solo si tienen al menos un post publicado.
  try {
    const catsRes = await strapiClient.getBlogCategories('ca');
    for (const item of (catsRes.data ?? []) as any[]) {
      const cat = item.attributes ?? item;
      if (!cat.slug) continue;
      const postsRes = await strapiClient.getBlogPosts('ca', { category: cat.slug });
      const posts = (postsRes.data ?? []) as any[];
      if (!posts.length) continue;
      const first = posts[0].attributes ?? posts[0];
      const lastmod = first.publishedAt;
      if (!lastmod) continue;
      const esSlug = ES_CATEGORY_SLUG[cat.slug] || cat.slug;
      entries.push(entry(`/ca/blog/${cat.slug}/`, `/blog/${esSlug}/`, lastmod));
    }
  } catch {}

  // Páginas de categoría de casos de éxito: mismas reglas, filtrando por isPublic.
  try {
    const catsRes = await strapiClient.getCaseStudyCategories('ca');
    for (const item of (catsRes.data ?? []) as any[]) {
      const cat = item.attributes ?? item;
      if (!cat.slug) continue;
      const casesRes = await strapiClient.getCaseStudies('ca', { category: cat.slug });
      const cases = ((casesRes.data ?? []) as any[])
        .map(i => i.attributes ?? i)
        .filter((c: any) => c.isPublic);
      if (!cases.length) continue;
      const lastmod = cases[0].publishedAt;
      if (!lastmod) continue;
      const esSlug = ES_CATEGORY_SLUG[cat.slug] || cat.slug;
      entries.push(entry(`/ca/casos-exit/${cat.slug}/`, `/casos-exito/${esSlug}/`, lastmod));
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
