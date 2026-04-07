export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    // Autor por defecto: Sergio García (solo si no está asignado)
    if (!data.author) {
      try {
        const authors = await (strapi.documents as any)('api::author.author').findMany({
          filters: { name: { $containsi: 'Sergio' } },
          limit: 1,
        });
        const list = Array.isArray(authors) ? authors : [];
        if (list.length > 0) {
          data.author = list[0].documentId ?? list[0].id;
        }
      } catch {}
    }
  },
  beforeUpdate() {
    // No-op: slug is managed by Strapi's uid field natively
  },
};
