import type { APIRoute } from 'astro';
import { strapiClient } from '../lib/strapi';

const SITE = 'https://novamarketing.es';

// Páginas estáticas CA. lastmod = fecha real del último commit que tocó el
// fichero fuente (git log), NO la fecha de build. Las páginas legales CA
// están en noindex,nofollow → no se listan aquí en absoluto.
const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '/ca/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-seo-per-pimes/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-sem-per-pimes/', lastmod: '2026-07-23' },
  { path: '/ca/disseny-web-per-pimes/', lastmod: '2026-07-23' },
  { path: '/ca/casos-exit/', lastmod: '2026-07-20' },
  { path: '/ca/blog/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-de-marketing-digital-a-barcelona/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-de-marketing-digital-a-sabadell/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-de-marketing-digital-a-sant-cugat/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-de-marketing-digital-a-terrassa/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-seo-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-seo-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-seo-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-seo-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-sem-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-sem-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-sem-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-sem-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-geo-per-pimes/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-geo-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-geo-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-geo-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-geo-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { path: '/ca/disseny-web-per-pimes/barcelona/', lastmod: '2026-07-23' },
  { path: '/ca/disseny-web-per-pimes/sabadell/', lastmod: '2026-07-20' },
  { path: '/ca/disseny-web-per-pimes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/ca/disseny-web-per-pimes/terrassa/', lastmod: '2026-07-20' },
  { path: '/ca/agencia-ecommerce/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-ecommerce/diseno-web/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-ecommerce/seo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-ecommerce/google-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-ecommerce/meta-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-ecommerce/email-marketing/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-ecommerce/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/diseno-web/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/seo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/google-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/meta-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/email-marketing/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/wordpress/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-inmobiliarias/desarrollo-propio/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/diseno-web/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/seo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/google-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/meta-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/email-marketing/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/wordpress/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/desarrollo-propio/', lastmod: '2026-07-23' },
];

function e(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function entry(path: string, lastmod: string): string {
  return `  <url>
    <loc>${e(SITE + path)}</loc>
    <lastmod>${lastmod.split('T')[0]}</lastmod>
  </url>`;
}

export const GET: APIRoute = async () => {
  const entries: string[] = [];

  // Páginas estáticas
  for (const p of STATIC_PAGES) {
    entries.push(entry(p.path, p.lastmod));
  }

  // Blog posts
  try {
    const res = await strapiClient.getBlogPosts('ca', { limit: 500 });
    for (const item of (res.data ?? []) as any[]) {
      const post = item.attributes ?? item;
      const lastmod = post.publishedAt || post.publishedDate;
      if (!post.slug || !lastmod) continue;
      entries.push(entry(`/ca/blog/${post.slug}/`, lastmod));
    }
  } catch {}

  // Casos d'èxit (solo isPublic)
  try {
    const res = await strapiClient.getCaseStudies('ca');
    for (const item of (res.data ?? []) as any[]) {
      const cs = item.attributes ?? item;
      if (!cs.slug || !cs.isPublic || !cs.publishedAt) continue;
      entries.push(entry(`/ca/casos-exit/${cs.slug}/`, cs.publishedAt));
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
      const lastmod = (posts[0].attributes ?? posts[0]).publishedAt;
      if (!lastmod) continue;
      entries.push(entry(`/ca/blog/${cat.slug}/`, lastmod));
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
      entries.push(entry(`/ca/casos-exit/${cat.slug}/`, lastmod));
    }
  } catch {}

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
