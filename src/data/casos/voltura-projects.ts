/**
 * Contenido del caso de éxito de Voltura Projects (hardcodeado, no viene de Strapi).
 *
 * Fuentes de las cifras:
 *  - Semrush, dominio volturaprojects.es, 10 oct 2026: 122 keywords orgánicas
 *    (Top 3: 3, 4-10: 9, 11-20: 11, 21-50: 43, 51-100: 50) y 6 apariciones en
 *    AI Overviews. Primeras keywords en marzo de 2026 (lanzamiento de la web).
 *  - Posiciones concretas (Semrush): instalación fontanería reformas 3, trabajos
 *    en fachadas sin andamios 3, trabajo vertical sin andamios 3, trabajos sin
 *    andamios 4, trabajos verticales sin andamios 4, subvenciones reforma
 *    vivienda cataluña 2026 5, instalaciones de fontanería 6. Citada en AI
 *    Overview: reformas de bares, ayudas rehabilitación vivienda generalitat
 *    catalunya 2026, ayudas rehabilitación fachadas cataluña (2026 y sin año).
 *  - PageSpeed Insights (oct 2026). Móvil: 94 / 91 / 100 / 100, FCP 1,4 s, LCP
 *    2,6 s, TBT 0 ms, CLS 0. Escritorio: 100 / 96 / 100 / 100, FCP 0,2 s, LCP
 *    0,6 s, TBT 0 ms, CLS 0,001.
 *  - Web: Next.js a medida, ES + CA, 17 landings de ciudad, panel de administración.
 *
 * Por acuerdo con el cliente no se mencionan leads ni presupuestos.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  keywords: '/casos/voltura-projects/keywords-voltura-projects-semrush.webp',
  psMovil: '/casos/voltura-projects/pagespeed-movil-voltura-projects.webp',
  psEscritorio: '/casos/voltura-projects/pagespeed-escritorio-voltura-projects.webp',
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/voltura-projects/voltura-projects-web.webp';

const G = (v: string) => `<td style="color:#15803d;background:#f0fdf4;font-weight:800">${v}</td>`;

const pageSpeedTable = (h: [string, string, string], rows: [string, string, string][]) => `<table>
  <thead>
    <tr><th>${h[0]}</th><th style="color:#86efac">${h[1]}</th><th style="color:#86efac">${h[2]}</th></tr>
  </thead>
  <tbody>
${rows.map((r) => `    <tr><td>${r[0]}</td>${G(r[1])}${G(r[2])}</tr>`).join('\n')}
  </tbody>
</table>`;

const PS_ROWS_ES: [string, string, string][] = [
  ['Rendimiento', '94', '100'],
  ['First Contentful Paint (FCP)', '1,4 s', '0,2 s'],
  ['Largest Contentful Paint (LCP)', '2,6 s', '0,6 s'],
  ['Total Blocking Time (TBT)', '0 ms', '0 ms'],
  ['Cumulative Layout Shift (CLS)', '0', '0,001'],
  ['Accesibilidad', '91', '96'],
  ['Prácticas recomendadas', '100', '100'],
  ['SEO', '100', '100'],
];
const PS_ROWS_CA: [string, string, string][] = [
  ['Rendiment', '94', '100'],
  ['First Contentful Paint (FCP)', '1,4 s', '0,2 s'],
  ['Largest Contentful Paint (LCP)', '2,6 s', '0,6 s'],
  ['Total Blocking Time (TBT)', '0 ms', '0 ms'],
  ['Cumulative Layout Shift (CLS)', '0', '0,001'],
  ['Accessibilitat', '91', '96'],
  ['Pràctiques recomanades', '100', '100'],
  ['SEO', '100', '100'],
];

export const VOLTURA_PROJECTS_CASE = {
  paths: { es: '/casos-exito/voltura-projects/', ca: '/ca/casos-exit/voltura-projects/' },
  cover: COVER,
  coverSize: { w: 1901, h: 907 },
  slug: 'voltura-projects',
  company: 'Voltura Projects',
  // Entrada equivalente en Strapi (no pública): sus datos se sustituyen por
  // estos en todo el sitio (ver applyStaticOverrides en src/data/casos/index.ts).
  strapiSlugs: { es: 'caso-de-exito-voltura-projects', ca: 'cas-d-exit-voltura-projects' },
  categorySlug: 'diseno-web',
  // Páginas de sector en las que aparece (slugs de SECTOR_SLUGS de esas páginas).
  sectorSlugs: ['constructoras'],
  // Filtros del listado por idioma (el primero es la etiqueta de la tarjeta).
  listingCategories: {
    es: [
      { name: 'Diseño web', slug: 'diseno-web' },
      { name: 'SEO', slug: 'seo' },
      { name: 'SEO Local', slug: 'seo-local' },
    ],
    ca: [
      { name: 'Disseny web', slug: 'disseny-web' },
      { name: 'SEO', slug: 'seo' },
      { name: 'Seo Local', slug: 'seo-local' },
    ],
  },

  es: {
    metaTitle: 'Caso de éxito: Voltura Projects, web a medida y 122 keywords en 7 meses',
    metaDescription:
      'Diseñamos y desarrollamos desde cero la web de Voltura Projects, empresa de reformas y rehabilitación en Barcelona: Next.js con 94/100 en PageSpeed, ES + CA, 17 landings de ciudad y 122 keywords en 7 meses.',
    title: 'Caso de éxito: Voltura Projects, web a medida y 122 keywords en 7 meses',
    description:
      'Diseñar y desarrollar desde cero la web de una empresa de reformas y rehabilitación de Barcelona que trabajaba solo por recomendación, y posicionarla en Google y en las respuestas de IA en sus primeros siete meses. Lanzamiento marzo 2026, en curso.',
    categories: ['Diseño web', 'SEO', 'GEO'],
    date: 'Octubre 2026',
    // Ficha bajo el hero: sector (con enlace si tenemos página de sector),
    // servicios trabajados, hito y tecnología.
    facts: {
          "sector": {
                "label": "Marketing para constructoras",
                "href": "/agencia-constructoras/"
          },
          "services": [
                {
                      "label": "Diseño y desarrollo web",
                      "href": "/diseno-web-para-pymes/"
                },
                {
                      "label": "Posicionamiento SEO",
                      "href": "/agencia-seo-para-pymes/"
                },
                {
                      "label": "Posicionamiento GEO",
                      "href": "/agencia-geo-para-pymes/"
                }
          ],
          "milestone": "De 0 a 122 keywords en 7 meses y 100 en PageSpeed",
          "tech": "Next.js a medida, ES + CA, panel propio"
    },
    cardTitle: 'Caso de éxito: Voltura Projects, web a medida y 122 keywords en 7 meses',
    cardDescription:
      'Empresa de reformas y rehabilitación en Barcelona sin web. Diseño y desarrollo Next.js, ES + CA, 17 landings de ciudad y SEO desde cero: 122 keywords y 94/100 en PageSpeed.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Voltura Projects</strong> es una empresa de reformas integrales, instalaciones y rehabilitación de edificios y activos inmobiliarios con sede en Barcelona. Trabaja para particulares, comunidades e inversores en toda el área metropolitana, con un nivel de acabado alto y proyectos que van desde una cocina hasta la rehabilitación completa de una fachada.</p>
<p>Cuando llegaron a nosotros, a principios de 2026, la empresa ya funcionaba y tenía clientes. Lo que no tenía era web. Todo el negocio entraba por recomendación, y cuando alguien buscaba el nombre en Google no encontraba nada. Tampoco aparecían, lógicamente, para ninguna búsqueda de reformas o rehabilitación en Barcelona.</p>
<p>El encargo fue doble: una web a la altura de sus proyectos y una base SEO para que, con el tiempo, Google se convirtiera en un canal de captación propio. Lo que sigue es lo que hicimos como <a href="/agencia-de-marketing-digital-en-barcelona/">agencia de marketing digital en Barcelona</a>, con el <a href="/diseno-web-para-pymes/">diseño web</a> y el <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> pensados desde el mismo día, y los resultados de los primeros siete meses.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados a los 7 meses del lanzamiento (marzo → octubre 2026)',
        items: [
          { value: '122', label: 'Keywords posicionadas, partiendo de cero' },
          { value: '12', label: 'Búsquedas en el Top 10 de Google' },
          { value: '6', label: 'Citas en las respuestas de IA de Google' },
          { value: '100', label: 'PageSpeed en escritorio (94 en móvil)' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué necesitaba la web</h2>
<p>Antes de diseñar nada definimos con el cliente qué tenía que conseguir la web, porque de eso dependía la estructura:</p>
<ul>
  <li><strong>Transmitir nivel.</strong> Voltura compite en reformas y rehabilitaciones de gama alta. La web tenía que parecerlo desde el primer segundo, con una estética premium y fotografía de proyectos reales.</li>
  <li><strong>Posicionar por servicio y por zona.</strong> Reformas integrales, baños, cocinas, instalaciones, energía fotovoltaica, trabajos verticales y rehabilitación de activos, cada uno con su página. Y presencia en las ciudades del área metropolitana donde trabajan.</li>
  <li><strong>Dos idiomas.</strong> Español y catalán, con hreflang correcto desde el lanzamiento.</li>
  <li><strong>Velocidad real.</strong> Nada de plantillas pesadas: una web rápida en móvil, que es donde busca quien tiene una avería o quiere un presupuesto.</li>
  <li><strong>Autonomía.</strong> Un panel propio para publicar noticias, gestionar las imágenes y los proyectos sin depender de nadie.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Marzo 2026',
        before_content:
          'Sin web ni presencia en Google. Ninguna keyword posicionada, ninguna búsqueda de marca, todo el negocio por recomendación.',
        after_label: 'Octubre 2026',
        after_content:
          'Web a medida en Next.js, ES + CA, con 94 en móvil y 100 en escritorio en PageSpeed, 17 landings de ciudad, 122 keywords posicionadas, 12 en el Top 10 y citada en las respuestas de IA de Google en 6 búsquedas.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>El proyecto se hizo en siete fases. La clave fue que la estrategia SEO se definió antes de dibujar la primera pantalla, así que el diseño y el desarrollo ya nacieron con la estructura que Google necesita.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Estrategia y arquitectura SEO',
            desc: 'Estudio de las búsquedas por servicio y por ciudad, análisis de la competencia en Barcelona y definición de la arquitectura: siete áreas de servicio con sus páginas, una sección de noticias y 17 landings de ciudad (Sant Cugat, Terrassa, Badalona, Sitges, Castelldefels y otras del área metropolitana).',
          },
          {
            title: 'Diseño premium',
            desc: 'Identidad en azul marino y dorado, tipografía serif para los titulares, mucho aire y fotografía de proyectos a pantalla completa. Un diseño pensado para que el cliente de una rehabilitación de alto nivel se sienta en el sitio adecuado.',
          },
          {
            title: 'Desarrollo a medida en Next.js',
            desc: 'Nada de WordPress ni plantillas: desarrollo propio con Next.js y Tailwind, páginas generadas de forma estática, imágenes optimizadas y despliegue en Vercel. Es lo que permite el 100 en escritorio y el 94 en móvil de PageSpeed.',
          },
          {
            title: 'Español y catalán con hreflang',
            desc: 'Toda la web en los dos idiomas, con URLs propias en catalán y etiquetas hreflang verificadas página a página, para competir también en las búsquedas en catalán del área metropolitana.',
          },
          {
            title: 'Panel de administración propio',
            desc: 'Un panel a medida para que el equipo de Voltura publique noticias, gestione la galería de imágenes y los proyectos, y reciba los formularios de contacto, sin tocar código ni depender de nosotros.',
          },
          {
            title: 'Contenidos de servicio y guías',
            desc: 'Redactamos el contenido de cada página de servicio y las guías de la sección de noticias que responden a lo que busca el cliente: las ayudas a la rehabilitación de fachadas y viviendas en Cataluña en 2026, o los trabajos verticales sin andamios. Son las páginas que mejor posicionan hoy.',
          },
          {
            title: 'GEO, posicionamiento en respuestas de IA',
            desc: 'Las guías y las páginas de servicio se estructuraron con respuestas directas, preguntas frecuentes y datos estructurados para que los motores generativos las entiendan y las citen. A los pocos meses Google ya mostraba a Voltura en sus respuestas con IA.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocidad desde el primer día</h2>
<p>En una web nueva no hay un "antes" que mejorar, pero sí un listón: el de las webs de reformas con las que compite, casi todas sobre WordPress y con puntuaciones de PageSpeed en rojo en móvil. Estos son los datos de Voltura Projects en PageSpeed Insights en octubre de 2026:</p>
${pageSpeedTable(['PageSpeed Insights', 'Móvil', 'Escritorio'], PS_ROWS_ES)}
<p>Esto es parte del trabajo de <a href="/diseno-web-para-pymes/">diseño y desarrollo web</a> que hacemos en cualquier proyecto: la velocidad no se "optimiza" al final, se diseña desde el principio eligiendo bien la tecnología.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psMovil, local: true, alternativeText: 'PageSpeed Insights de volturaprojects.es en móvil: 94 de rendimiento, 91 de accesibilidad, 100 en prácticas recomendadas y 100 en SEO' },
        caption: 'PageSpeed Insights en móvil, octubre de 2026: 94 de rendimiento y 100 en SEO.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: '100 en escritorio y 94 en móvil con 0 ms de bloqueo',
        content:
          'Una web que carga en 0,6 segundos en escritorio y en 2,6 en móvil, con 100 en SEO y en prácticas recomendadas. La base técnica perfecta para empezar a posicionar.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De cero a 122 keywords en siete meses</h2>
<p>La web se lanzó en marzo de 2026 sin una sola keyword posicionada. En octubre, Semrush detecta 122 búsquedas en las que volturaprojects.es aparece en Google, y la curva sigue subiendo mes a mes. Así se reparten:</p>
<table>
  <thead>
    <tr><th>Posición en Google (octubre 2026)</th><th>Keywords</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td><strong>3</strong></td></tr>
    <tr><td>Posiciones 4 a 10</td><td><strong>9</strong></td></tr>
    <tr><td>Posiciones 11 a 20</td><td>11</td></tr>
    <tr><td>Posiciones 21 a 50</td><td>43</td></tr>
    <tr><td>Posiciones 51 a 100</td><td>50</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>122</strong></td></tr>
    <tr><td>Citas en respuestas de IA (AI Overviews)</td><td><strong>6</strong></td></tr>
  </tbody>
</table>
<p>Lo importante de este reparto es la tendencia: la mayor parte de las keywords están todavía entre la posición 11 y la 100, que es justo donde están las páginas nuevas antes de subir. Es la "sala de espera" del Top 10, y es lo que trabajamos ahora.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.keywords, local: true, alternativeText: 'Gráfica de Semrush con la evolución de las keywords orgánicas de volturaprojects.es por posición, de marzo a octubre de 2026' },
        caption: 'Keywords orgánicas de volturaprojects.es por rango de posición (Semrush). Antes de marzo de 2026 no existía la web.',
      },
      {
        __component: 'blocks.big-stat',
        value: '122',
        label: 'keywords posicionadas en 7 meses',
        description: 'De ninguna presencia en Google en marzo de 2026 a 122 búsquedas en las que aparece la web en octubre, según Semrush.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Las búsquedas que ya traen clientes</h2>
<p>Siete meses es poco tiempo en SEO, y aun así hay búsquedas con intención clara de contratar que ya están en la primera página:</p>
<table>
  <thead>
    <tr><th>Búsqueda</th><th>Posición</th><th>Página que posiciona</th></tr>
  </thead>
  <tbody>
    <tr><td>instalación fontanería reformas</td><td><strong>3</strong></td><td>Instalaciones de fontanería</td></tr>
    <tr><td>trabajos en fachadas sin andamios</td><td><strong>3</strong></td><td>Guía de trabajos verticales</td></tr>
    <tr><td>trabajo vertical sin andamios</td><td><strong>3</strong></td><td>Guía de trabajos verticales</td></tr>
    <tr><td>trabajos sin andamios</td><td>4</td><td>Guía de trabajos verticales</td></tr>
    <tr><td>trabajos verticales sin andamios</td><td>4</td><td>Guía de trabajos verticales</td></tr>
    <tr><td>subvenciones reforma vivienda Cataluña 2026</td><td>5</td><td>Guía de ayudas a la rehabilitación</td></tr>
    <tr><td>instalaciones de fontanería</td><td>6</td><td>Instalaciones de fontanería</td></tr>
  </tbody>
</table>
<p>Fíjate en el patrón: posicionan tanto las páginas de servicio (fontanería) como las guías. Las guías atraen a quien está informándose sobre una ayuda o una técnica, y la página de servicio recoge a quien ya quiere contratar.</p>`,
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Voltura aparece en las respuestas de la IA de Google</h2>
<p>Cada vez más búsquedas se responden con un resumen generado por IA antes de los resultados clásicos. Por eso, además del SEO, trabajamos el <a href="/agencia-geo-para-pymes/">posicionamiento GEO</a> (Generative Engine Optimization) desde el lanzamiento: las guías y las páginas de servicio se escribieron con respuestas directas, preguntas frecuentes y datos estructurados, que es lo que los motores generativos necesitan para citar una fuente.</p>
<p>En octubre de 2026 Google ya cita a Voltura Projects en sus respuestas con IA para seis búsquedas, entre ellas:</p>
<ul>
  <li>reformas de bares</li>
  <li>ayudas rehabilitación vivienda Generalitat Catalunya 2026</li>
  <li>ayudas rehabilitación fachadas Cataluña 2026</li>
  <li>ayudas rehabilitación fachadas Cataluña</li>
</ul>
<p>Para una web con siete meses de vida, aparecer citada por la IA de Google en búsquedas de ayudas públicas, que son de las más consultadas del sector en Cataluña, es la señal de que el contenido está bien planteado.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'Citada en 6 respuestas de IA con 7 meses de vida',
        content:
          'El mismo contenido claro y estructurado que sube posiciones en Google es el que los motores de IA eligen para construir sus respuestas. SEO y GEO se trabajan juntos.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Lo que viene ahora</h2>
<p>Una web nueva tarda entre seis y doce meses en coger velocidad en Google, y Voltura Projects está justo en ese tramo con la base técnica resuelta. El trabajo ahora es de <a href="/agencia-seo-para-pymes/">SEO</a> continuado: empujar las decenas de keywords que están entre la posición 11 y la 50 hacia la primera página, ampliar las guías de la sección de noticias, reforzar las landings de ciudad y seguir ganando presencia en las respuestas de IA.</p>
<p>Y, sobre todo, la empresa tiene ya algo que en marzo no tenía: una web que trabaja para ella las 24 horas y que es suya, con su panel, sin depender de nadie para publicar.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tu empresa necesita una web que además posicione?',
        description:
          'Diseñamos y desarrollamos webs a medida con el SEO pensado desde el primer día. Cuéntanos tu proyecto y te decimos cómo lo haríamos. Sin compromiso.',
        button_text: 'Hablemos de tu proyecto',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: Voltura Projects, web a mida i 122 keywords en 7 mesos",
    metaDescription:
      "Dissenyem i desenvolupem des de zero la web de Voltura Projects, empresa de reformes i rehabilitació a Barcelona: Next.js amb 94/100 a PageSpeed, ES + CA, 17 landings de ciutat i 122 keywords en 7 mesos.",
    title: "Cas d'èxit: Voltura Projects, web a mida i 122 keywords en 7 mesos",
    description:
      "Dissenyar i desenvolupar des de zero la web d'una empresa de reformes i rehabilitació de Barcelona que treballava només per recomanació, i posicionar-la a Google i a les respostes d'IA en els seus primers set mesos. Llançament març 2026, en curs.",
    categories: ['Disseny web', 'SEO', 'GEO'],
    date: 'Octubre 2026',
    // Ficha bajo el hero: sector (con enlace si tenemos página de sector),
    // servicios trabajados, hito y tecnología.
    facts: {
          "sector": {
                "label": "Màrqueting per a constructores",
                "href": "/ca/agencia-constructores/"
          },
          "services": [
                {
                      "label": "Disseny i desenvolupament web",
                      "href": "/ca/disseny-web-per-pimes/"
                },
                {
                      "label": "Posicionament SEO",
                      "href": "/ca/agencia-seo-per-pimes/"
                },
                {
                      "label": "Posicionament GEO",
                      "href": "/ca/agencia-geo-per-pimes/"
                }
          ],
          "milestone": "De 0 a 122 keywords en 7 mesos i 100 a PageSpeed",
          "tech": "Next.js a mida, ES + CA, panell propi"
    },
    cardTitle: "Cas d'èxit: Voltura Projects, web a mida i 122 keywords en 7 mesos",
    cardDescription:
      'Empresa de reformes i rehabilitació a Barcelona sense web. Disseny i desenvolupament Next.js, ES + CA, 17 landings de ciutat i SEO des de zero: 122 keywords i 94/100 a PageSpeed.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Voltura Projects</strong> és una empresa de reformes integrals, instal·lacions i rehabilitació d'edificis i actius immobiliaris amb seu a Barcelona. Treballa per a particulars, comunitats i inversors a tota l'àrea metropolitana, amb un nivell d'acabat alt i projectes que van des d'una cuina fins a la rehabilitació completa d'una façana.</p>
<p>Quan van arribar a nosaltres, a principis de 2026, l'empresa ja funcionava i tenia clients. El que no tenia era web. Tot el negoci entrava per recomanació, i quan algú cercava el nom a Google no trobava res. Tampoc no apareixien, lògicament, per a cap cerca de reformes o rehabilitació a Barcelona.</p>
<p>L'encàrrec va ser doble: una web a l'altura dels seus projectes i una base SEO perquè, amb el temps, Google es convertís en un canal de captació propi. El que segueix és el que vam fer com a <a href="/ca/agencia-de-marketing-digital-a-barcelona/">agència de màrqueting digital a Barcelona</a>, amb el <a href="/ca/disseny-web-per-pimes/">disseny web</a> i el <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> pensats des del mateix dia, i els resultats dels primers set mesos.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats als 7 mesos del llançament (març → octubre 2026)',
        items: [
          { value: '122', label: 'Keywords posicionades, partint de zero' },
          { value: '12', label: 'Cerques al Top 10 de Google' },
          { value: '6', label: "Cites a les respostes d'IA de Google" },
          { value: '100', label: 'PageSpeed en escriptori (94 en mòbil)' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què necessitava la web</h2>
<p>Abans de dissenyar res vam definir amb el client què havia d'aconseguir la web, perquè d'això en depenia l'estructura:</p>
<ul>
  <li><strong>Transmetre nivell.</strong> Voltura competeix en reformes i rehabilitacions de gamma alta. La web ho havia de semblar des del primer segon, amb una estètica prèmium i fotografia de projectes reals.</li>
  <li><strong>Posicionar per servei i per zona.</strong> Reformes integrals, banys, cuines, instal·lacions, energia fotovoltaica, treballs verticals i rehabilitació d'actius, cadascun amb la seva pàgina. I presència a les ciutats de l'àrea metropolitana on treballen.</li>
  <li><strong>Dos idiomes.</strong> Castellà i català, amb hreflang correcte des del llançament.</li>
  <li><strong>Velocitat real.</strong> Res de plantilles pesades: una web ràpida en mòbil, que és on cerca qui té una avaria o vol un pressupost.</li>
  <li><strong>Autonomia.</strong> Un panell propi per publicar notícies i gestionar les imatges i els projectes sense dependre de ningú.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Març 2026',
        before_content:
          'Sense web ni presència a Google. Cap keyword posicionada, cap cerca de marca, tot el negoci per recomanació.',
        after_label: 'Octubre 2026',
        after_content:
          "Web a mida en Next.js, ES + CA, amb 94 en mòbil i 100 en escriptori a PageSpeed, 17 landings de ciutat, 122 keywords posicionades, 12 al Top 10 i citada a les respostes d'IA de Google en 6 cerques.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>El projecte es va fer en set fases. La clau va ser que l'estratègia SEO es va definir abans de dibuixar la primera pantalla, així que el disseny i el desenvolupament ja van néixer amb l'estructura que Google necessita.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Estratègia i arquitectura SEO',
            desc: "Estudi de les cerques per servei i per ciutat, anàlisi de la competència a Barcelona i definició de l'arquitectura: set àrees de servei amb les seves pàgines, una secció de notícies i 17 landings de ciutat (Sant Cugat, Terrassa, Badalona, Sitges, Castelldefels i altres de l'àrea metropolitana).",
          },
          {
            title: 'Disseny prèmium',
            desc: "Identitat en blau marí i daurat, tipografia serif per als titulars, molt d'aire i fotografia de projectes a pantalla completa. Un disseny pensat perquè el client d'una rehabilitació d'alt nivell se senti al lloc adequat.",
          },
          {
            title: 'Desenvolupament a mida en Next.js',
            desc: "Res de WordPress ni plantilles: desenvolupament propi amb Next.js i Tailwind, pàgines generades de manera estàtica, imatges optimitzades i desplegament a Vercel. És el que permet el 100 en escriptori i el 94 en mòbil de PageSpeed.",
          },
          {
            title: 'Castellà i català amb hreflang',
            desc: "Tota la web en els dos idiomes, amb URL pròpies en català i etiquetes hreflang verificades pàgina a pàgina, per competir també a les cerques en català de l'àrea metropolitana.",
          },
          {
            title: "Panell d'administració propi",
            desc: "Un panell a mida perquè l'equip de Voltura publiqui notícies, gestioni la galeria d'imatges i els projectes, i rebi els formularis de contacte, sense tocar codi ni dependre de nosaltres.",
          },
          {
            title: 'Continguts de servei i guies',
            desc: "Vam redactar el contingut de cada pàgina de servei i les guies de la secció de notícies que responen al que cerca el client: les ajudes a la rehabilitació de façanes i habitatges a Catalunya el 2026, o els treballs verticals sense bastides. Són les pàgines que millor posicionen avui.",
          },
          {
            title: "GEO, posicionament a les respostes d'IA",
            desc: "Les guies i les pàgines de servei es van estructurar amb respostes directes, preguntes freqüents i dades estructurades perquè els motors generatius les entenguin i les citin. Al cap de pocs mesos Google ja mostrava Voltura a les seves respostes amb IA.",
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocitat des del primer dia</h2>
<p>En una web nova no hi ha un "abans" a millorar, però sí un llistó: el de les webs de reformes amb què competeix, gairebé totes sobre WordPress i amb puntuacions de PageSpeed en vermell en mòbil. Aquestes són les dades de Voltura Projects a PageSpeed Insights l'octubre de 2026:</p>
${pageSpeedTable(['PageSpeed Insights', 'Mòbil', 'Escriptori'], PS_ROWS_CA)}
<p>Això forma part de la feina de <a href="/ca/disseny-web-per-pimes/">disseny i desenvolupament web</a> que fem en qualsevol projecte: la velocitat no s'"optimitza" al final, es dissenya des del principi triant bé la tecnologia.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psMovil, local: true, alternativeText: 'PageSpeed Insights de volturaprojects.es en mòbil: 94 de rendiment, 91 d’accessibilitat, 100 en pràctiques recomanades i 100 en SEO' },
        caption: "PageSpeed Insights en mòbil, octubre de 2026: 94 de rendiment i 100 en SEO.",
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: '100 en escriptori i 94 en mòbil amb 0 ms de bloqueig',
        content:
          'Una web que carrega en 0,6 segons en escriptori i en 2,6 en mòbil, amb 100 en SEO i en pràctiques recomanades. La base tècnica perfecta per començar a posicionar.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De zero a 122 keywords en set mesos</h2>
<p>La web es va llançar el març de 2026 sense cap keyword posicionada. L'octubre, Semrush detecta 122 cerques en què volturaprojects.es apareix a Google, i la corba continua pujant mes a mes. Així es reparteixen:</p>
<table>
  <thead>
    <tr><th>Posició a Google (octubre 2026)</th><th>Keywords</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td><strong>3</strong></td></tr>
    <tr><td>Posicions 4 a 10</td><td><strong>9</strong></td></tr>
    <tr><td>Posicions 11 a 20</td><td>11</td></tr>
    <tr><td>Posicions 21 a 50</td><td>43</td></tr>
    <tr><td>Posicions 51 a 100</td><td>50</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>122</strong></td></tr>
    <tr><td>Cites a respostes d'IA (AI Overviews)</td><td><strong>6</strong></td></tr>
  </tbody>
</table>
<p>L'important d'aquest repartiment és la tendència: la major part de les keywords són encara entre la posició 11 i la 100, que és just on són les pàgines noves abans de pujar. És la "sala d'espera" del Top 10, i és el que treballem ara.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.keywords, local: true, alternativeText: "Gràfica de Semrush amb l'evolució de les keywords orgàniques de volturaprojects.es per posició, de març a octubre de 2026" },
        caption: 'Keywords orgàniques de volturaprojects.es per rang de posició (Semrush). Abans de març de 2026 no existia la web.',
      },
      {
        __component: 'blocks.big-stat',
        value: '122',
        label: 'keywords posicionades en 7 mesos',
        description: 'De cap presència a Google el març de 2026 a 122 cerques en què apareix la web l’octubre, segons Semrush.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Les cerques que ja porten clients</h2>
<p>Set mesos és poc temps en SEO, i tot i així hi ha cerques amb intenció clara de contractar que ja són a la primera pàgina:</p>
<table>
  <thead>
    <tr><th>Cerca</th><th>Posició</th><th>Pàgina que posiciona</th></tr>
  </thead>
  <tbody>
    <tr><td>instalación fontanería reformas</td><td><strong>3</strong></td><td>Instal·lacions de fontaneria</td></tr>
    <tr><td>trabajos en fachadas sin andamios</td><td><strong>3</strong></td><td>Guia de treballs verticals</td></tr>
    <tr><td>trabajo vertical sin andamios</td><td><strong>3</strong></td><td>Guia de treballs verticals</td></tr>
    <tr><td>trabajos sin andamios</td><td>4</td><td>Guia de treballs verticals</td></tr>
    <tr><td>trabajos verticales sin andamios</td><td>4</td><td>Guia de treballs verticals</td></tr>
    <tr><td>subvenciones reforma vivienda Cataluña 2026</td><td>5</td><td>Guia d'ajudes a la rehabilitació</td></tr>
    <tr><td>instalaciones de fontanería</td><td>6</td><td>Instal·lacions de fontaneria</td></tr>
  </tbody>
</table>
<p>Fixa't en el patró: posicionen tant les pàgines de servei (fontaneria) com les guies. Les guies atrauen qui s'està informant sobre una ajuda o una tècnica, i la pàgina de servei recull qui ja vol contractar.</p>`,
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Voltura apareix a les respostes de la IA de Google</h2>
<p>Cada cop més cerques es responen amb un resum generat per IA abans dels resultats clàssics. Per això, a més del SEO, vam treballar el <a href="/ca/agencia-geo-per-pimes/">posicionament GEO</a> (Generative Engine Optimization) des del llançament: les guies i les pàgines de servei es van escriure amb respostes directes, preguntes freqüents i dades estructurades, que és el que els motors generatius necessiten per citar una font.</p>
<p>L'octubre de 2026 Google ja cita Voltura Projects a les seves respostes amb IA per a sis cerques, entre elles:</p>
<ul>
  <li>reformas de bares</li>
  <li>ayudas rehabilitación vivienda Generalitat Catalunya 2026</li>
  <li>ayudas rehabilitación fachadas Cataluña 2026</li>
  <li>ayudas rehabilitación fachadas Cataluña</li>
</ul>
<p>Per a una web amb set mesos de vida, aparèixer citada per la IA de Google en cerques d'ajudes públiques, que són de les més consultades del sector a Catalunya, és el senyal que el contingut està ben plantejat.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: "Citada en 6 respostes d'IA amb 7 mesos de vida",
        content:
          "El mateix contingut clar i estructurat que puja posicions a Google és el que els motors d'IA trien per construir les seves respostes. SEO i GEO es treballen junts.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>El que ve ara</h2>
<p>Una web nova triga entre sis i dotze mesos a agafar velocitat a Google, i Voltura Projects és just en aquest tram amb la base tècnica resolta. La feina ara és de <a href="/ca/agencia-seo-per-pimes/">SEO</a> continuat: empènyer les desenes de keywords que són entre la posició 11 i la 50 cap a la primera pàgina, ampliar les guies de la secció de notícies, reforçar les landings de ciutat i continuar guanyant presència a les respostes d'IA.</p>
<p>I, sobretot, l'empresa ja té una cosa que el març no tenia: una web que treballa per a ella les 24 hores i que és seva, amb el seu panell, sense dependre de ningú per publicar.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'La teva empresa necessita una web que a més posicioni?',
        description:
          "Dissenyem i desenvolupem webs a mida amb el SEO pensat des del primer dia. Explica'ns el teu projecte i et diem com ho faríem. Sense compromís.",
        button_text: 'Parlem del teu projecte',
        open_modal: true,
      },
    ],
  },
};
