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
  { path: '/ca/agencia-restaurantes/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/diseno-web/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/seo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/google-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/meta-ads/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/email-marketing/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-restaurantes/posicionamiento-geo/', lastmod: '2026-07-23' },
  { path: '/ca/agencia-psicolegs/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-psicolegs/diseno-web/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-psicolegs/seo/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-psicolegs/google-ads/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-psicolegs/meta-ads/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-psicolegs/email-marketing/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-psicolegs/posicionamiento-geo/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/diseno-web/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/seo/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/google-ads/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/meta-ads/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/email-marketing/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-terapeutes/posicionamiento-geo/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/diseno-web/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/seo/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/google-ads/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/meta-ads/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/email-marketing/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-dentistes/posicionamiento-geo/', lastmod: '2026-08-15' },
  { path: '/ca/agencia-gimnasos/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-gimnasos/diseno-web/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-gimnasos/seo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-gimnasos/google-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-gimnasos/meta-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-gimnasos/email-marketing/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-gimnasos/posicionamiento-geo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/diseno-web/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/seo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/google-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/meta-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/email-marketing/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-constructores/posicionamiento-geo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/diseno-web/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/seo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/google-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/meta-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/email-marketing/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-advocats/posicionamiento-geo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/diseno-web/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/seo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/google-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/meta-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/email-marketing/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-industrial/posicionamiento-geo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/diseno-web/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/seo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/google-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/meta-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/email-marketing/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-hotels/posicionamiento-geo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/diseno-web/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/seo/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/google-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/meta-ads/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/email-marketing/', lastmod: '2026-08-17' },
  { path: '/ca/agencia-b2b/posicionamiento-geo/', lastmod: '2026-08-17' },
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

  // Les pàgines de categoria de blog i de casos d'èxit ja no existeixen:
  // el filtratge és en client sobre /ca/blog/ i /ca/casos-exit/.

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
