/**
 * lib/schema.ts
 * Generadores de JSON-LD Schema markup
 * Se usa en SchemaOrg.astro de cada página
 */

import type { GlobalSettings, BlogPost, Service, CaseStudy, AuthorSettings, StrapiImage } from './strapi';
import { getStrapiImageUrl } from './strapi';

const SITE_URL = import.meta.env.SITE_URL || 'https://novamarketing.es';

// ── Organización + Local Business ─────────────────────────
export function organizationSchema(settings: GlobalSettings) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Nova Marketing',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: getStrapiImageUrl(settings.logo as StrapiImage) || `${SITE_URL}/og-default.jpg`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: settings.phone,
          contactType: 'customer service',
          availableLanguage: ['Spanish', 'Catalan'],
        },
        sameAs: [
          settings.socialLinks?.linkedin,
          settings.socialLinks?.instagram,
          settings.socialLinks?.twitter,
          settings.socialLinks?.facebook,
        ].filter(Boolean),
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Nova Marketing',
        description: settings.defaultMetaDescription || 'Agencia de marketing digital para pymes',
        url: SITE_URL,
        telephone: settings.phone,
        email: settings.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: settings.address,
          addressLocality: settings.city || 'Sabadell',
          postalCode: settings.postalCode,
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.543, // Sabadell
          longitude: 2.109,
        },
        areaServed: ['ES', 'Sabadell', 'Barcelona', 'Cataluña'],
        priceRange: '€€',
        openingHours: 'Mo-Fr 09:00-18:00',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Nova Marketing',
        inLanguage: ['es-ES', 'ca-ES'],
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

// ── Landing local de agencia (grafo completo interconectado) ──
// Un único @graph con Organization, Person, WebSite, WebPage,
// LocalBusiness/ProfessionalService, Service[], BreadcrumbList y FAQPage.
export function localAgencySchema(opts: {
  pageUrl: string;               // URL absoluta con barra final
  lang: 'es' | 'ca';
  cityName: string;              // p.ej. "Sabadell"
  postalCode: string;            // p.ej. "08201"
  geo: { lat: number; lng: number };
  areaServed: string[];          // ciudades/comarcas servidas
  title: string;                 // <title> de la página
  description: string;           // meta description
  datePublished: string;         // ISO yyyy-mm-dd
  dateModified: string;          // ISO yyyy-mm-dd
  faqs: { question: string; answer: string }[];
  streetAddress?: string;        // dirección de la ficha de GBP
  hasMap?: string;               // URL de la ficha de Google Business Profile
  aggregateRating?: { ratingValue: string; reviewCount: string }; // datos reales de GBP
  reviews?: { author: string; date: string; body: string }[];     // reseñas literales de GBP (todas 5★)
}) {
  const { pageUrl, lang, cityName, postalCode, geo, areaServed, title, description, datePublished, dateModified, faqs, streetAddress, hasMap, aggregateRating, reviews } = opts;
  const orgId = `${SITE_URL}/#organization`;
  const personId = `${SITE_URL}/#sergio-garcia`;
  const logoId = `${SITE_URL}/#logo`;
  const websiteId = `${SITE_URL}/#website`;
  const lbId = `${pageUrl}#localbusiness`;
  const inLang = lang === 'ca' ? 'ca-ES' : 'es-ES';
  const t = (es: string, ca: string) => (lang === 'ca' ? ca : es);

  const services = [
    { id: 'servicio-seo', type: 'Posicionamiento SEO', es: `Posicionamiento SEO en ${cityName}`, ca: `Posicionament SEO a ${cityName}` },
    { id: 'servicio-sem', type: 'SEM / Google Ads', es: `Campañas de Google Ads en ${cityName}`, ca: `Campanyes de Google Ads a ${cityName}` },
    { id: 'servicio-web', type: 'Diseño web', es: `Diseño web en ${cityName}`, ca: `Disseny web a ${cityName}` },
    { id: 'servicio-social', type: 'Redes sociales', es: `Gestión de redes sociales en ${cityName}`, ca: `Gestió de xarxes socials a ${cityName}` },
    { id: 'servicio-email', type: 'Email marketing', es: `Email marketing en ${cityName}`, ca: `Email marketing a ${cityName}` },
    { id: 'servicio-geo', type: 'GEO / AEO', es: `Visibilidad en buscadores con IA (GEO/AEO) en ${cityName}`, ca: `Visibilitat en cercadors amb IA (GEO/AEO) a ${cityName}` },
  ];

  const sameAs = [
    'https://www.linkedin.com/company/nova-marketing-pymes/',
    'https://www.instagram.com/nova_marketing_pymes/',
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'Nova Marketing',
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': logoId,
          url: `${SITE_URL}/agencia-marketing-pymes-nova-marketing-favicon.png`,
          caption: 'Nova Marketing',
        },
        image: { '@id': logoId },
        email: 'sgarcia@novamarketing.es',
        telephone: '+34644738270',
        founder: { '@id': personId },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+34644738270',
          email: 'sgarcia@novamarketing.es',
          contactType: 'sales',
          areaServed: 'ES',
          availableLanguage: ['es', 'ca', 'en'],
        },
        sameAs,
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Sergio García López',
        alternateName: "Sergio Galo's",
        jobTitle: t('Consultor de Marketing Digital', 'Consultor de Marketing Digital'),
        worksFor: { '@id': orgId },
        knowsAbout: [
          'SEO técnico',
          'SEO local',
          'Google Ads',
          'Estrategia de contenidos',
          'GEO y AEO',
          'Marketing digital para PYMEs',
        ],
        sameAs: ['https://www.linkedin.com/in/sergiogarcialopez/'],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: 'Nova Marketing',
        inLanguage: ['es-ES', 'ca-ES'],
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: inLang,
        datePublished,
        dateModified,
        isPartOf: { '@id': websiteId },
        about: { '@id': lbId },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': lbId,
        name: t(`Nova Marketing - Agencia de Marketing Digital en ${cityName}`, `Nova Marketing - Agència de Marketing Digital a ${cityName}`),
        description,
        url: pageUrl,
        image: { '@id': logoId },
        logo: { '@id': logoId },
        telephone: '+34644738270',
        email: 'sgarcia@novamarketing.es',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: t('Transferencia bancaria, Tarjeta de crédito', 'Transferència bancària, Targeta de crèdit'),
        parentOrganization: { '@id': orgId },
        founder: { '@id': personId },
        employee: { '@id': personId },
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
        address: {
          '@type': 'PostalAddress',
          ...(streetAddress ? { streetAddress } : {}),
          addressLocality: cityName,
          addressRegion: 'Barcelona',
          postalCode,
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.lat,
          longitude: geo.lng,
        },
        ...(hasMap ? { hasMap } : {}),
        ...(aggregateRating ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
            bestRating: '5',
            worstRating: '1',
          },
        } : {}),
        ...(reviews?.length ? {
          review: reviews.map(r => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.author },
            datePublished: r.date,
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: r.body,
          })),
        } : {}),
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        areaServed: areaServed.map(name =>
          ['Vallès Occidental', 'Cataluña', 'Catalunya'].includes(name)
            ? { '@type': 'AdministrativeArea', name }
            : { '@type': 'City', name }
        ),
        knowsLanguage: ['es', 'ca', 'en'],
        sameAs,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t(`Servicios de marketing digital en ${cityName}`, `Serveis de marketing digital a ${cityName}`),
          itemListElement: services.map(s => ({
            '@type': 'Offer',
            itemOffered: { '@id': `${pageUrl}#${s.id}` },
          })),
        },
      },
      ...services.map(s => ({
        '@type': 'Service',
        '@id': `${pageUrl}#${s.id}`,
        name: t(s.es, s.ca),
        serviceType: s.type,
        provider: { '@id': lbId },
        areaServed: areaServed.map(name => ({ '@type': 'Place', name })),
      })),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('Inicio', 'Inici'),
            item: lang === 'ca' ? `${SITE_URL}/ca/` : `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t(`Agencia de marketing digital en ${cityName}`, `Agència de marketing digital a ${cityName}`),
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}

// ── Artículo de Blog ──────────────────────────────────────
export function articleSchema(post: BlogPost, author: AuthorSettings, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': canonicalUrl,
    headline: post.title,
    description: post.excerpt,
    image: getStrapiImageUrl(post.featuredImage),
    url: canonicalUrl,
    datePublished: post.publishedDate,
    dateModified: post.updatedAt || post.publishedDate,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.jobTitle,
      image: getStrapiImageUrl(author.photo),
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Nova Marketing',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    inLanguage: canonicalUrl.includes('/ca/') ? 'ca-ES' : 'es-ES',
  };
}

// ── Servicio ──────────────────────────────────────────────
export function serviceSchema(service: Service, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.excerpt,
    url: canonicalUrl,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Nova Marketing',
    },
    areaServed: 'ES',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: canonicalUrl,
    },
  };
}

// ── Caso de éxito ─────────────────────────────────────────
export function caseStudySchema(caseStudy: CaseStudy, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleSection: 'Case Study',
    name: caseStudy.title,
    description: caseStudy.excerpt,
    url: canonicalUrl,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Nova Marketing',
    },
  };
}

// ── Breadcrumb ────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── FAQ ───────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
