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
import { VOLTURA_PROJECTS_CASE } from './voltura-projects';
import { CB_HOSPITALET_CASE } from './cb-hospitalet';
import { CLUSTAG_CASE } from './clustag';
import { VILLAZON_MERCE_CASE } from './villazon-merce-abogados';
import { DIPOLE_RFID_CASE } from './dipole-rfid';

export const STATIC_CASES = [DIPOLE_RFID_CASE, VILLAZON_MERCE_CASE, CLUSTAG_CASE, CB_HOSPITALET_CASE, VOLTURA_PROJECTS_CASE, PALACIO_DEL_BEBE_CASE, TATTOOX_CASE];

/**
 * Sustituye, en la respuesta de Strapi, las entradas que tienen un caso
 * estático equivalente (por `strapiSlugs`) por los datos del caso estático:
 * slug, título, descripción, portada y isPublic=true, marcadas con
 * `_static: true`. Así las 200+ páginas que listan casos desde Strapi
 * (sectores, servicios, home, landings) muestran el texto correcto y enlazan a
 * la página estática. Los listados, sitemaps y rutas dinámicas que ya inyectan
 * los casos estáticos por su cuenta deben descartar las entradas `_static`.
 */
export function applyStaticOverrides<T extends { attributes?: any }>(items: T[], locale: 'es' | 'ca'): T[] {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://novamarketing.es';
  const sectorsOf = (sc: any) => (sc.sectorSlugs ?? []).map((slug: string) => ({ slug, name: slug }));
  const matched = new Set<any>();
  const overridden = items.map((item: any) => {
    const c = item?.attributes ?? item;
    if (!c?.slug) return item;
    const sc: any = STATIC_CASES.find((s: any) => s.strapiSlugs?.[locale] === c.slug);
    if (!sc) return item;
    matched.add(sc);
    const t = sc[locale];
    const merged = {
      ...c,
      slug: staticSlug(sc, locale),
      title: t.cardTitle,
      description: t.cardDescription,
      company: sc.company,
      isPublic: true,
      cover_image: { url: sc.cover, local: true, alternativeText: t.cardTitle },
      // Categorías del caso estático (si las define) para que las páginas de
      // sector lo recojan aunque la entrada de Strapi tenga otras.
      categories: resolveCategories(sc.listingCategories, locale) ?? c.categories,
      sectors: [...(c.sectors ?? []), ...sectorsOf(sc)],
      _static: true,
    };
    return item?.attributes ? { ...item, attributes: merged } : merged;
  });
  // Casos estáticos sin entrada en Strapi: se añaden como entradas sintéticas
  // (también _static) para que las páginas de sector, servicios y home los
  // muestren. Van primero, como en los listados.
  const synthesized = STATIC_CASES.filter((sc: any) => !matched.has(sc)).map((sc: any) => {
    const t = sc[locale];
    return {
      id: `static-${sc.slug}`,
      slug: staticSlug(sc, locale),
      title: t.cardTitle,
      description: t.cardDescription,
      company: sc.company,
      isPublic: true,
      cover_image: { url: sc.cover, local: true, alternativeText: t.cardTitle },
      categories: resolveCategories(sc.listingCategories, locale) ?? [{ name: 'SEO', slug: sc.categorySlug }],
      sectors: sectorsOf(sc),
      _static: true,
    } as any;
  });
  return [...synthesized, ...overridden];
}

/** Slug de la página en cada idioma: `slugs.{es,ca}` si el caso lo define, si no `slug`. */
export function staticSlug(sc: any, locale: 'es' | 'ca'): string {
  return sc.slugs?.[locale] ?? sc.slug;
}

function resolveCategories(lc: any, locale: 'es' | 'ca') {
  if (!lc) return undefined;
  return Array.isArray(lc) ? lc : lc[locale];
}

/** Tarjetas con la misma forma que una entrada de Strapi, para SuccessCard. */
export function staticCaseCards(locale: 'es' | 'ca', siteUrl: string) {
  return STATIC_CASES.map((c) => {
    const t = c[locale];
    return {
      slug: staticSlug(c, locale),
      title: t.cardTitle,
      description: t.cardDescription,
      company: c.company,
      isPublic: true,
      // listingCategories puede ser un array (mismos slugs en ES y CA) o un
      // objeto { es, ca } cuando los slugs de categoría cambian por idioma.
      categories: resolveCategories((c as any).listingCategories, locale) ?? [{ name: 'SEO', slug: c.categorySlug }],
      // Ruta relativa marcada como local: getStrapiImageUrl no le antepone la URL del CMS.
      cover_image: { url: c.cover, local: true, alternativeText: t.cardTitle },
    };
  });
}
