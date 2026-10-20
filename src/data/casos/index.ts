/**
 * Casos de éxito hardcodeados (no vienen de Strapi).
 *
 * Cada caso vive en src/data/casos/<slug>.ts y se renderiza con
 * src/components/casos/StaticCase.astro desde dos páginas finas
 * (src/pages/casos-exito/<slug>.astro y src/pages/ca/casos-exit/<slug>.astro).
 * Aquí se listan para inyectar su tarjeta en los listados de casos; el orden
 * es el de aparición (el primero sale primero).
 */
import { TATTOOX_CASE } from './tattoox';
import { PALACIO_DEL_BEBE_CASE } from './palacio-del-bebe';

export const STATIC_CASES = [PALACIO_DEL_BEBE_CASE, TATTOOX_CASE];

/** Tarjetas con la misma forma que una entrada de Strapi, para SuccessCard. */
export function staticCaseCards(locale: 'es' | 'ca', siteUrl: string) {
  return STATIC_CASES.map((c) => {
    const t = c[locale];
    return {
      slug: c.slug,
      title: t.cardTitle,
      description: t.cardDescription,
      company: c.company,
      isPublic: true,
      categories: (c as any).listingCategories ?? [{ name: 'SEO', slug: c.categorySlug }],
      // URL absoluta: getStrapiImageUrl antepone la URL del CMS a las relativas.
      cover_image: { url: siteUrl + c.cover, alternativeText: t.cardTitle },
    };
  });
}
