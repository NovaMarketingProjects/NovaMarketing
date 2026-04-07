/**
 * Sanitiza un slug: elimina acentos, ñ, ç, espacios y caracteres no ASCII.
 * Solo permite a-z, 0-9 y guiones.
 */
function sanitizeSlug(raw: string): string {
  return raw
    .normalize('NFD')                          // descompone acentos: á → a + ́
    .replace(/[\u0300-\u036f]/g, '')           // elimina diacríticos
    .replace(/[ñÑ]/g, 'n')
    .replace(/[çÇ]/g, 'c')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')             // elimina símbolos
    .trim()
    .replace(/\s+/g, '-')                      // espacios → guiones
    .replace(/-+/g, '-');                      // guiones múltiples → uno
}

/**
 * Lifecycle hook: asigna Sergio García como autor por defecto
 * y sanitiza el slug (sin acentos, ñ, ç ni espacios).
 */
export default {
  async beforeCreate(event: any) {
    const { data } = event.params;

    // Sanitizar slug
    if (data.slug) {
      data.slug = sanitizeSlug(data.slug);
    }

    // Autor por defecto
    if (!data.author) {
      const authors = await (strapi.documents as any)('api::author.author').findMany({
        filters: { name: { $containsi: 'Sergio' } },
        limit: 1,
      });
      const list = Array.isArray(authors) ? authors : [];
      if (list.length > 0) {
        data.author = list[0].documentId ?? list[0].id;
      }
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.slug) {
      data.slug = sanitizeSlug(data.slug);
    }
  },
};
