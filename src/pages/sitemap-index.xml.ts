import type { APIRoute } from 'astro';

// lastmod = fecha del build (fecha, no timestamp completo, para ser
// consistente con sitemap-es.xml y sitemap-ca.xml). Es correcto que este
// valor sea "hoy": el índice describe cuándo se regeneró la lista de
// sitemaps, no el contenido de cada URL individual.
export const GET: APIRoute = () => {
  const site = 'https://novamarketing.es';
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}/sitemap-es.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${site}/sitemap-ca.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
