/**
 * Metas SEO de casos de éxito que siguen viniendo de Strapi y que no se pueden
 * editar desde aquí (el token del sitio es de solo lectura). Las plantillas
 * dinámicas los usan antes que el metatitle/metadescription del CMS.
 * Clave: slug de la entrada en cada idioma.
 */
export const CASE_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  'restaurante-loremar': { title: "▷ Caso de éxito: Restaurante Loremar, web y SEO local", description: "Rediseño web para un restaurante de Sabadell: carga rápida, carta autogestionable y SEO local para salir cuando buscan dónde comer en Sabadell." },
  'restaurant-loremar': { title: "▷ Cas d'èxit: Restaurant Loremar, web i SEO local", description: "Redisseny web per a un restaurant de Sabadell: càrrega ràpida, carta autogestionable i SEO local per sortir quan busquen on menjar a Sabadell." },
};
