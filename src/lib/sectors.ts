/**
 * lib/sectors.ts
 * Fuente única de verdad de los sectores verticales del sitio (agencia-X).
 * Al añadir un sector nuevo, se añade aquí UNA vez y los enlaces cruzados
 * "Otros sectores" se actualizan solos en todas las páginas existentes,
 * sin tener que editar cada landing.
 */

export interface SectorDef {
  key: string;
  silo: { es: string; ca: string };
  name: { es: string; ca: string };
  /** H2 de la sección "Más sectores" en la landing pilar de este sector */
  crossTitle: { es: string; ca: string };
}

export const SECTORS: SectorDef[] = [
  {
    key: 'ecommerce',
    silo: { es: 'agencia-ecommerce', ca: 'agencia-ecommerce' },
    name: { es: 'Ecommerce', ca: 'Ecommerce' },
    crossTitle: { es: 'Ecommerce no es el único sector en el que somos especialistas', ca: 'Ecommerce no és l’únic sector en què som especialistes' },
  },
  {
    key: 'inmobiliarias',
    silo: { es: 'agencia-inmobiliarias', ca: 'agencia-inmobiliarias' },
    name: { es: 'Inmobiliarias', ca: 'Immobiliàries' },
    crossTitle: { es: 'Inmobiliarias no es el único sector en el que somos especialistas', ca: 'Immobiliàries no és l’únic sector en què som especialistes' },
  },
  {
    key: 'restaurantes',
    silo: { es: 'agencia-restaurantes', ca: 'agencia-restaurantes' },
    name: { es: 'Restaurantes', ca: 'Restaurants' },
    crossTitle: { es: 'Restaurantes no es el único sector en el que somos especialistas', ca: 'Restaurants no és l’únic sector en què som especialistes' },
  },
  {
    key: 'psicologos',
    silo: { es: 'agencia-psicologos', ca: 'agencia-psicolegs' },
    name: { es: 'Psicólogos', ca: 'Psicòlegs' },
    crossTitle: { es: 'Psicólogos no es el único sector en el que somos especialistas', ca: 'Psicòlegs no és l’únic sector en què som especialistes' },
  },
  {
    key: 'terapeutas',
    silo: { es: 'agencia-terapeutas', ca: 'agencia-terapeutes' },
    name: { es: 'Terapeutas', ca: 'Terapeutes' },
    crossTitle: { es: 'Terapeutas no es el único sector en el que somos especialistas', ca: 'Terapeutes no és l’únic sector en què som especialistes' },
  },
  {
    key: 'dentistas',
    silo: { es: 'agencia-dentistas', ca: 'agencia-dentistes' },
    name: { es: 'Dentistas', ca: 'Dentistes' },
    crossTitle: { es: 'Dentistas no es el único sector en el que somos especialistas', ca: 'Dentistes no és l’únic sector en què som especialistes' },
  },
  {
    key: 'gimnasios',
    silo: { es: 'agencia-gimnasios', ca: 'agencia-gimnasos' },
    name: { es: 'Gimnasios', ca: 'Gimnasos' },
    crossTitle: { es: 'Gimnasios no es el único sector en el que somos especialistas', ca: 'Gimnasos no és l’únic sector en què som especialistes' },
  },
  {
    key: 'constructoras',
    silo: { es: 'agencia-constructoras', ca: 'agencia-constructores' },
    name: { es: 'Constructoras', ca: 'Constructores' },
    crossTitle: { es: 'Constructoras no es el único sector en el que somos especialistas', ca: 'Constructores no és l’únic sector en què som especialistes' },
  },
  {
    key: 'abogados',
    silo: { es: 'agencia-abogados', ca: 'agencia-advocats' },
    name: { es: 'Abogados', ca: 'Advocats' },
    crossTitle: { es: 'Abogados no es el único sector en el que somos especialistas', ca: 'Advocats no és l’únic sector en què som especialistes' },
  },
  {
    key: 'industrial',
    silo: { es: 'agencia-industrial', ca: 'agencia-industrial' },
    name: { es: 'Empresas Industriales', ca: 'Empreses Industrials' },
    crossTitle: { es: 'Empresas Industriales no es el único sector en el que somos especialistas', ca: 'Empreses Industrials no és l’únic sector en què som especialistes' },
  },
  {
    key: 'hoteles',
    silo: { es: 'agencia-hoteles', ca: 'agencia-hotels' },
    name: { es: 'Hoteles', ca: 'Hotels' },
    crossTitle: { es: 'Hoteles no es el único sector en el que somos especialistas', ca: 'Hotels no és l’únic sector en què som especialistes' },
  },
  {
    key: 'b2b',
    silo: { es: 'agencia-b2b', ca: 'agencia-b2b' },
    name: { es: 'Empresas B2B', ca: 'Empreses B2B' },
    crossTitle: { es: 'B2B no es el único sector en el que somos especialistas', ca: 'B2B no és l’únic sector en què som especialistes' },
  },
];

export interface ServiceDef {
  key: string;
  label: { es: string; ca: string };
  /** H2 de la sección "Otros sectores" en las páginas de subservicio de este servicio */
  crossTitle: { es: string; ca: string };
}

export const SERVICES: ServiceDef[] = [
  {
    key: 'seo',
    label: { es: 'SEO', ca: 'SEO' },
    crossTitle: { es: 'Otros sectores en los que trabajamos el SEO', ca: 'Altres sectors en què treballem el SEO' },
  },
  {
    key: 'google-ads',
    label: { es: 'Google Ads', ca: 'Google Ads' },
    crossTitle: { es: 'Otros sectores en los que trabajamos Google Ads', ca: 'Altres sectors en què treballem Google Ads' },
  },
  {
    key: 'meta-ads',
    label: { es: 'Meta Ads', ca: 'Meta Ads' },
    crossTitle: { es: 'Otros sectores en los que trabajamos Meta Ads', ca: 'Altres sectors en què treballem Meta Ads' },
  },
  {
    key: 'email-marketing',
    label: { es: 'Email Marketing', ca: 'Email Màrqueting' },
    crossTitle: { es: 'Otros sectores en los que trabajamos el email marketing', ca: 'Altres sectors en què treballem l’email marketing' },
  },
  {
    key: 'diseno-web',
    label: { es: 'Diseño Web', ca: 'Disseny Web' },
    crossTitle: { es: 'Otros sectores en los que trabajamos el diseño web', ca: 'Altres sectors en què treballem el disseny web' },
  },
  {
    key: 'posicionamiento-geo',
    label: { es: 'GEO y Visibilidad en IA', ca: 'GEO i Visibilitat en IA' },
    crossTitle: { es: 'Otros sectores en los que trabajamos el GEO y la visibilidad en IA', ca: 'Altres sectors en què treballem el GEO i la visibilitat en IA' },
  },
];
