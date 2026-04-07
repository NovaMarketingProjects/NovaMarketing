import type { APIRoute } from 'astro';
import { strapiClient } from '../lib/strapi';

const SITE = 'https://novamarketing.es';

// Mapeo ES ↔ CA para páginas estáticas
const STATIC_PAGES: { es: string; ca: string; priority: string; changefreq: string }[] = [
  { es: '/',                                               ca: '/ca/',                                                  priority: '1.0', changefreq: 'weekly'  },
  { es: '/agencia-seo-para-pymes/',                        ca: '/ca/agencia-seo-per-pimes/',                            priority: '0.9', changefreq: 'monthly' },
  { es: '/agencia-sem-para-pymes/',                        ca: '/ca/agencia-sem-per-pimes/',                            priority: '0.9', changefreq: 'monthly' },
  { es: '/diseno-web-para-pymes/',                         ca: '/ca/disseny-web-per-pimes/',                            priority: '0.9', changefreq: 'monthly' },
  { es: '/consultoria-marketing-para-pymes/',              ca: '/ca/consultoria-marketing-per-pimes/',                  priority: '0.9', changefreq: 'monthly' },
  { es: '/casos-exito/',                                   ca: '/ca/casos-exit/',                                       priority: '0.8', changefreq: 'weekly'  },
  { es: '/blog/',                                          ca: '/ca/blog/',                                             priority: '0.8', changefreq: 'daily'   },
  { es: '/agencia-de-marketing-digital-en-barcelona/',     ca: '/ca/agencia-de-marketing-digital-a-barcelona/',         priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-de-marketing-digital-en-sabadell/',      ca: '/ca/agencia-de-marketing-digital-a-sabadell/',          priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-de-marketing-digital-en-sant-cugat/',    ca: '/ca/agencia-de-marketing-digital-a-sant-cugat/',        priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-de-marketing-digital-en-terrassa/',      ca: '/ca/agencia-de-marketing-digital-a-terrassa/',          priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-seo-en-barcelona/',                      ca: '/ca/agencia-seo-a-barcelona/',                          priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-seo-en-sabadell/',                       ca: '/ca/agencia-seo-a-sabadell/',                           priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-seo-en-sant-cugat/',                     ca: '/ca/agencia-seo-a-sant-cugat/',                         priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-seo-en-terrassa/',                       ca: '/ca/agencia-seo-a-terrassa/',                           priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-google-ads-barcelona/',                  ca: '/ca/agencia-google-ads-barcelona/',                     priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-google-ads-sabadell/',                   ca: '/ca/agencia-google-ads-sabadell/',                      priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-google-ads-sant-cugat/',                 ca: '/ca/agencia-google-ads-sant-cugat/',                    priority: '0.7', changefreq: 'monthly' },
  { es: '/agencia-google-ads-terrassa/',                   ca: '/ca/agencia-google-ads-terrassa/',                      priority: '0.7', changefreq: 'monthly' },
];

function e(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function entry(
  esPath: string,
  caPath: string | null,
  lastmod: string,
  priority: string,
  changefreq: string,
): string {
  const esUrl = e(SITE + esPath);
  const caUrl = caPath ? e(SITE + caPath) : null;
  return `  <url>
    <loc>${esUrl}</loc>
    <lastmod>${lastmod.split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="es-ES" href="${esUrl}"/>
    ${caUrl ? `<xhtml:link rel="alternate" hreflang="ca-ES" href="${caUrl}"/>` : ''}
    <xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}"/>
  </url>`;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  const entries: string[] = [];

  // Páginas estáticas
  for (const p of STATIC_PAGES) {
    entries.push(entry(p.es, p.ca, today, p.priority, p.changefreq));
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
      const lastmod = post.publishedAt || post.publishedDate || today;
      const caSlug = item.documentId && caSlugMap[item.documentId];
      entries.push(entry(
        `/blog/${post.slug}/`,
        caSlug ? `/ca/blog/${caSlug}/` : null,
        lastmod, '0.7', 'monthly',
      ));
    }
  } catch {}

  // Casos de éxito: cruzar documentId para obtener slug CA
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
      if (!cs.slug || !cs.isPublic) continue;
      const lastmod = cs.publishedAt || today;
      const caSlug = item.documentId && caSlugMap[item.documentId];
      entries.push(entry(
        `/casos-exito/${cs.slug}/`,
        caSlug ? `/ca/casos-exit/${caSlug}/` : null,
        lastmod, '0.7', 'monthly',
      ));
    }
  } catch {}

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
