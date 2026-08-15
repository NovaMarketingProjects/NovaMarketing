import type { APIRoute } from 'astro';
import { strapiClient } from '../lib/strapi';

const SITE = 'https://novamarketing.es';

// Páginas estáticas ES. lastmod = fecha real del último commit que tocó el
// fichero fuente (git log), NO la fecha de build.
const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '/', lastmod: '2026-07-23' },
  { path: '/agencia-seo-para-pymes/', lastmod: '2026-07-23' },
  { path: '/agencia-sem-para-pymes/', lastmod: '2026-07-23' },
  { path: '/diseno-web-para-pymes/', lastmod: '2026-07-23' },
  { path: '/casos-exito/', lastmod: '2026-07-20' },
  { path: '/blog/', lastmod: '2026-07-20' },
  { path: '/agencia-de-marketing-digital-en-barcelona/', lastmod: '2026-07-23' },
  { path: '/agencia-de-marketing-digital-en-sabadell/', lastmod: '2026-07-20' },
  { path: '/agencia-de-marketing-digital-en-sant-cugat/', lastmod: '2026-07-20' },
  { path: '/agencia-de-marketing-digital-en-terrassa/', lastmod: '2026-07-20' },
  { path: '/agencia-seo-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { path: '/agencia-seo-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { path: '/agencia-seo-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/agencia-seo-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { path: '/agencia-sem-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { path: '/agencia-sem-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { path: '/agencia-sem-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/agencia-sem-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { path: '/agencia-geo-para-pymes/', lastmod: '2026-07-23' },
  { path: '/agencia-geo-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { path: '/agencia-geo-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { path: '/agencia-geo-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/agencia-geo-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { path: '/diseno-web-para-pymes/barcelona/', lastmod: '2026-07-23' },
  { path: '/diseno-web-para-pymes/sabadell/', lastmod: '2026-07-20' },
  { path: '/diseno-web-para-pymes/sant-cugat/', lastmod: '2026-07-20' },
  { path: '/diseno-web-para-pymes/terrassa/', lastmod: '2026-07-20' },
  { path: '/agencia-ecommerce/', lastmod: '2026-07-23' },
  { path: '/agencia-ecommerce/diseno-web/', lastmod: '2026-07-23' },
  { path: '/agencia-ecommerce/seo/', lastmod: '2026-07-23' },
  { path: '/agencia-ecommerce/google-ads/', lastmod: '2026-07-23' },
  { path: '/agencia-ecommerce/meta-ads/', lastmod: '2026-07-23' },
  { path: '/agencia-ecommerce/email-marketing/', lastmod: '2026-07-23' },
  { path: '/agencia-ecommerce/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/diseno-web/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/seo/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/google-ads/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/meta-ads/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/email-marketing/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/wordpress/', lastmod: '2026-07-23' },
  { path: '/agencia-inmobiliarias/desarrollo-propio/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/diseno-web/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/seo/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/google-ads/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/meta-ads/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/email-marketing/', lastmod: '2026-07-23' },
  { path: '/agencia-restaurantes/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/agencia-psicologos/', lastmod: '2026-08-15' },
  { path: '/agencia-psicologos/diseno-web/', lastmod: '2026-08-15' },
  { path: '/agencia-psicologos/seo/', lastmod: '2026-08-15' },
  { path: '/agencia-psicologos/google-ads/', lastmod: '2026-08-15' },
  { path: '/agencia-psicologos/meta-ads/', lastmod: '2026-08-15' },
  { path: '/agencia-psicologos/email-marketing/', lastmod: '2026-08-15' },
  { path: '/agencia-psicologos/posicionamiento-geo/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/diseno-web/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/seo/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/google-ads/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/meta-ads/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/email-marketing/', lastmod: '2026-08-15' },
  { path: '/agencia-terapeutas/posicionamiento-geo/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/diseno-web/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/seo/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/google-ads/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/meta-ads/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/email-marketing/', lastmod: '2026-08-15' },
  { path: '/agencia-dentistas/posicionamiento-geo/', lastmod: '2026-08-15' },
  { path: '/aviso-legal/', lastmod: '2026-07-20' },
  { path: '/privacidad/', lastmod: '2026-07-20' },
  { path: '/cookies/', lastmod: '2026-07-20' },
  { path: '/terminos-y-condiciones/', lastmod: '2026-07-20' },
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
    const res = await strapiClient.getBlogPosts('es', { limit: 500 });
    for (const item of (res.data ?? []) as any[]) {
      const post = item.attributes ?? item;
      const lastmod = post.publishedAt || post.publishedDate;
      if (!post.slug || !lastmod) continue;
      entries.push(entry(`/blog/${post.slug}/`, lastmod));
    }
  } catch {}

  // Casos de éxito (solo isPublic)
  try {
    const res = await strapiClient.getCaseStudies('es');
    for (const item of (res.data ?? []) as any[]) {
      const cs = item.attributes ?? item;
      if (!cs.slug || !cs.isPublic || !cs.publishedAt) continue;
      entries.push(entry(`/casos-exito/${cs.slug}/`, cs.publishedAt));
    }
  } catch {}

  // Páginas de categoría de blog: solo si tienen al menos un post publicado;
  // lastmod = post más reciente de la categoría.
  try {
    const catsRes = await strapiClient.getBlogCategories('es');
    for (const item of (catsRes.data ?? []) as any[]) {
      const cat = item.attributes ?? item;
      if (!cat.slug) continue;
      const postsRes = await strapiClient.getBlogPosts('es', { category: cat.slug });
      const posts = (postsRes.data ?? []) as any[];
      if (!posts.length) continue; // categoría vacía → fuera del sitemap
      const lastmod = (posts[0].attributes ?? posts[0]).publishedAt;
      if (!lastmod) continue;
      entries.push(entry(`/blog/${cat.slug}/`, lastmod));
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
      entries.push(entry(`/casos-exito/${cat.slug}/`, lastmod));
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
