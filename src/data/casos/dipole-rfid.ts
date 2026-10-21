/**
 * Contenido del caso de éxito de Dipole RFID (hardcodeado; sustituye a la
 * entrada pública de Strapi con el mismo slug en cada idioma).
 *
 * Dipole RFID: distribuidor e integrador de tecnología RFID en España. Trabajo
 * de SEO y contenidos desde 2019 sobre una web a medida con CMS propio del
 * cliente (nosotros no hicimos la web ni la velocidad). Por decisión del
 * cliente no se menciona fecha de fin del proyecto.
 *
 * Fuentes de las cifras:
 *  - Semrush, serie "todo el tiempo". Inicio 2019: unas 450 keywords y unas
 *    1.500 visitas orgánicas al mes (lectura de la gráfica). Julio 2024: 6.390
 *    visitas orgánicas, 518 de marca; 1.126 keywords (Top 3: 89, 4-10: 169,
 *    11-20: 169, 21-50: 291, 51-100: 218) y 190 SERP features.
 *  - Semrush, octubre 2026 (posiciones actuales): nº 1 en etiqueta rfid (720),
 *    cómo funciona rfid (590), tag rfid (390), rfid etiquetas (110), rfid
 *    tipos, etiquetas robustas, impinj r420, cronometraje rfid, agrident, arco
 *    rfid, smartrac web; citada en AI Overviews para trazabilidad por rfid,
 *    identificación por radiofrecuencia, rfid bibliotecas, rfid significado,
 *    qué es la tecnología rfid, rfid alcance, qué significa rfid, avery
 *    dennison rfid, rfid para logística.
 *  - Afirmaciones validadas por el cliente: más del 80 % de las keywords
 *    estratégicas en el Top 3; posiciona por encima de las webs de los
 *    fabricantes; leads de otros países europeos; primera página para la
 *    práctica totalidad del catálogo.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  serie: '/casos/dipole-rfid/trafico-y-keywords-dipole-rfid-semrush.webp',
  julio2024: '/casos/dipole-rfid/keywords-dipole-rfid-julio-2024-semrush.webp',
  posiciones1: '/casos/dipole-rfid/posiciones-dipole-rfid-2026-semrush-1.webp',
  posiciones2: '/casos/dipole-rfid/posiciones-dipole-rfid-2026-semrush-2.webp',
};
// Portada: la misma imagen que ya tenía la entrada de Strapi (Cloudinary).
const COVER = 'https://res.cloudinary.com/dejmjx6rb/image/upload/v1775049867/Caso_de_exito_Dipole_RFID_176f90e71c.webp';

export const DIPOLE_RFID_CASE = {
  paths: { es: '/casos-exito/caso-de-exito-dipole-rfid/', ca: '/ca/casos-exit/cas-d-exit-dipole-rfid/' },
  cover: COVER,
  coverSize: { w: 2000, h: 830 },
  // Se mantienen las URL ya indexadas de la entrada de Strapi (distintas por idioma).
  slug: 'caso-de-exito-dipole-rfid',
  slugs: { es: 'caso-de-exito-dipole-rfid', ca: 'cas-d-exit-dipole-rfid' },
  company: 'Dipole RFID',
  // Entrada equivalente en Strapi (pública): se sustituye por este contenido.
  strapiSlugs: { es: 'caso-de-exito-dipole-rfid', ca: 'cas-d-exit-dipole-rfid' },
  categorySlug: 'seo',
  sectorSlugs: ['industrial', 'b2b'],
  listingCategories: {
    es: [
      { name: 'SEO', slug: 'seo' },
      { name: 'Consultoría SEO', slug: 'consultoria-seo' },
    ],
    ca: [
      { name: 'SEO', slug: 'seo' },
      { name: 'Consultoria SEO', slug: 'consultoria-seo' },
    ],
  },

  es: {
    metaTitle: 'Caso de éxito: Dipole RFID, líder orgánico del RFID en España',
    metaDescription:
      'Cómo convertimos a Dipole RFID en la referencia orgánica del RFID en España: de 450 a 1.126 keywords y 6.390 visitas al mes, primera página para todo el catálogo y nº 1 por delante de los fabricantes. Hoy sigue en cabeza.',
    title: 'Caso de éxito: Dipole RFID, líder orgánico del RFID en España',
    description:
      'Trasladar a Google el liderazgo que Dipole RFID ya tenía en el mercado: primera página para todo su catálogo, por delante de los fabricantes, y convertir la web en el punto de consulta del sector. SEO y contenidos desde 2019.',
    categories: ['SEO', 'Consultoría SEO'],
    date: 'Octubre 2026',
    facts: {
      sectors: [
        { label: 'Empresas industriales', href: '/agencia-industrial/' },
        { label: 'B2B', href: '/agencia-b2b/' },
      ],
      services: [
        { label: 'Posicionamiento SEO', href: '/agencia-seo-para-pymes/' },
        { label: 'Posicionamiento GEO', href: '/agencia-geo-para-pymes/' },
      ],
      milestone: 'De 450 a 1.126 keywords y 6.390 visitas orgánicas al mes; nº 1 por delante de los fabricantes',
      tech: 'Desarrollo a medida con CMS propio del cliente',
    },
    cardTitle: 'Caso de éxito: Dipole RFID, líder orgánico del RFID en España',
    cardDescription:
      'Distribuidor e integrador RFID. Consultoría SEO, arquitectura y contenidos: de 450 a 1.126 keywords, 6.390 visitas al mes y primera página para todo el catálogo, por delante de los fabricantes.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Dipole RFID</strong> es referente en soluciones de identificación por radiofrecuencia en España: etiquetas, lectores, antenas, impresoras y software RFID para logística, textil, bibliotecas, sanidad, eventos deportivos y gestión de activos, con las principales marcas del sector en catálogo (Impinj, Zebra, Avery Dennison, Smartrac, HID…).</p>
<p>Su reto era trasladar ese liderazgo físico al entorno digital. En un mercado muy especializado y técnico, la web no captaba la demanda que existía: tenía autoridad de dominio, pero una arquitectura de contenidos deficiente, y el tráfico orgánico era residual. Lo más crítico es que ese tráfico no correspondía a cómo buscan su <em>buyer persona</em>, que son ingenieros, responsables de logística y directores de IT. Las oportunidades se las llevaban competidores y los propios fabricantes internacionales.</p>
<p>Cuando empezamos, en 2019, la web posicionaba para unas 450 keywords y recibía alrededor de 1.500 visitas orgánicas al mes. Lo que sigue es cómo, con una <a href="/agencia-seo-para-pymes/">consultoría SEO</a> profunda y una ejecución técnica y de contenidos constante, la convertimos en la principal autoridad del sector RFID en español. Es el tipo de proyecto que define nuestro trabajo con <a href="/agencia-industrial/">empresas industriales</a> y de venta <a href="/agencia-b2b/">B2B</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados (2019 → julio 2024)',
        items: [
          { value: '6.390', label: 'Visitas orgánicas al mes, desde unas 1.500' },
          { value: '1.126', label: 'Keywords posicionadas, desde unas 450' },
          { value: '+80%', label: 'De las keywords estratégicas en el Top 3' },
          { value: 'Nº 1', label: 'Por delante de los fabricantes en sus propios productos' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Análisis de situación y objetivos</h2>
<p>La auditoría inicial dejó claro que no faltaba autoridad, faltaba estructura: Google no entendía qué vendía Dipole ni para qué sectores. Con el cliente fijamos cuatro objetivos medibles:</p>
<ul>
  <li><strong>Liderazgo en las SERPs.</strong> Alcanzar la primera página para el 100 % del catálogo de productos y servicios.</li>
  <li><strong>Desplazar a la competencia.</strong> Superar en visibilidad a los propios fabricantes oficiales de hardware RFID en las búsquedas de sus productos.</li>
  <li><strong>Captación full-funnel.</strong> Una estrategia de contenidos que cubriera desde la fase informativa ("qué es RFID") hasta la decisión técnica ("lector Impinj R420").</li>
  <li><strong>Proyección internacional.</strong> Usar el liderazgo en el mercado español como palanca para captar leads de otros países europeos.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: '2019',
        before_content:
          'Web con autoridad de dominio pero sin arquitectura de contenidos: unas 450 keywords, alrededor de 1.500 visitas orgánicas al mes y tráfico que no correspondía a lo que busca un responsable de logística o de IT. Los fabricantes se llevaban las búsquedas de producto.',
        after_label: 'Julio 2024',
        after_content:
          '1.126 keywords, 6.390 visitas orgánicas al mes, primera página para la práctica totalidad del catálogo, más del 80 % de las keywords estratégicas en el Top 3 y Dipole por delante de los fabricantes en las búsquedas de sus propios productos.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Metodología SEO de alta precisión</h2>
<p>La estrategia no se limitó a la optimización básica. Se dividió en tres ejes de actuación, pedagógica y técnica, que se han mantenido a lo largo de todo el proyecto.</p>
<h3>Keyword research y segmentación de intenciones</h3>
<p>Hicimos una auditoría semántica exhaustiva para desglosar cómo busca el sector industrial. No nos limitamos a las palabras de más volumen: segmentamos el estudio de keywords en tres niveles de profundidad.</p>
<table>
  <thead>
    <tr><th>Nivel de búsqueda</th><th>Enfoque estratégico</th><th>Ejemplos</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Técnico y de proveedor</strong></td><td>Productos y marcas concretas. Que cuando un profesional busque un componente, Dipole sea la opción de suministro.</td><td>"lector Impinj R420", "tags Smartrac", "Avery Dennison RFID"</td></tr>
    <tr><td><strong>Soluciones verticales</strong></td><td>Necesidades por sector, con páginas de aterrizaje que hablan el idioma del problema del cliente.</td><td>"RFID para logística", "RFID textil", "RFID bibliotecas"</td></tr>
    <tr><td><strong>Educacional</strong></td><td>Consultas de alto volumen para captar al mercado antes de que compre y posicionar a Dipole como el experto que educa.</td><td>"qué es RFID", "cómo funciona RFID", "tipos de etiquetas RFID"</td></tr>
  </tbody>
</table>
<h3>Arquitectura web y contenidos on-page</h3>
<p>Con el mapa de palabras clave definido, reestructuramos el sitio por completo bajo principios de relevancia y jerarquía, trabajando sobre el desarrollo a medida con CMS propio del cliente:</p>
<ul>
  <li><strong>Silos de contenido.</strong> Agrupamos la información en categorías lógicas (productos por tipo y marca, soluciones por sector, blog educativo) que facilitan tanto la navegación como el rastreo de Google, con URLs semánticas y limpias.</li>
  <li><strong>Metadatos y datos estructurados.</strong> Implementamos Schema para que Google entendiera la naturaleza de cada producto y solución, mejorando la apariencia en resultados (rich snippets) y el CTR. En julio de 2024 la web aparecía en 190 funcionalidades de la SERP.</li>
  <li><strong>Contenido de valor industrial.</strong> Textos que cumplen la doble función de ser detectables por el algoritmo y útiles para un perfil técnico: cada página de producto con descripción detallada, especificaciones y aplicaciones prácticas, y una serie de guías ("qué es RFID", "etiquetas RFID y aplicaciones", "tipos de sistemas RFID") que hoy siguen en el nº 1.</li>
</ul>
<h3>Optimización técnica</h3>
<p>En el sector industrial la eficiencia es clave. Trabajamos con el equipo de desarrollo del cliente la indexación, el rastreo, los canónicos y la adaptabilidad móvil, para que cualquier profesional, desde una planta de producción o una oficina, tuviera una experiencia fluida y profesional.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Auditoría y keyword research por niveles',
            desc: 'Rastreo completo, análisis de Search Console y estudio semántico del sector en tres niveles: técnico y de proveedor, soluciones verticales y educacional.',
          },
          {
            title: 'Arquitectura por silos',
            desc: 'Reestructuración del sitio en productos por tipo y marca, soluciones por sector y blog, con URLs limpias y enlazado interno que reparte la autoridad hacia las páginas de producto.',
          },
          {
            title: 'Contenido de producto y de marca',
            desc: 'Reescritura de las fichas con especificaciones y aplicaciones, y páginas por fabricante representado (Impinj, Smartrac, Avery Dennison, Agrident…), que hoy posicionan por delante de las webs oficiales.',
          },
          {
            title: 'Páginas de solución por sector',
            desc: 'Landings para logística, textil, bibliotecas, sanidad, eventos deportivos y gestión de activos, que convierten una búsqueda de problema en una consulta comercial.',
          },
          {
            title: 'Blog educativo',
            desc: 'Guías que responden a las dudas de quien empieza con RFID. Son las páginas con más tráfico del sitio y las que Google cita en sus respuestas con IA.',
          },
          {
            title: 'Datos estructurados y SERP features',
            desc: 'Schema de producto, organización y preguntas frecuentes para ganar fragmentos destacados, imágenes y preguntas relacionadas: 190 funcionalidades de la SERP en julio de 2024.',
          },
          {
            title: 'Seguimiento y ampliación continua',
            desc: 'Revisión mensual de posiciones, nuevas keywords y nuevos contenidos según lo que muestran los datos, durante todo el proyecto.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Los resultados: de 450 a 1.126 keywords y 6.390 visitas al mes</h2>
<p>La serie de Semrush muestra dos escalones claros, ambos dentro del proyecto: el primero, en 2019-2020, con la nueva arquitectura y los contenidos de producto; el segundo, en 2023-2024, con las páginas de solución, las guías y los datos estructurados. En julio de 2024 el reparto era este:</p>
<table>
  <thead>
    <tr><th>Keywords por posición en Google</th><th>2019</th><th>Julio 2024</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td>—</td><td><strong>89</strong></td></tr>
    <tr><td>Posiciones 4 a 10</td><td>—</td><td><strong>169</strong></td></tr>
    <tr><td>Posiciones 11 a 20</td><td>—</td><td>169</td></tr>
    <tr><td>Posiciones 21 a 50</td><td>—</td><td>291</td></tr>
    <tr><td>Posiciones 51 a 100</td><td>—</td><td>218</td></tr>
    <tr><td><strong>Total keywords</strong></td><td>unas 450</td><td><strong>1.126</strong></td></tr>
    <tr><td>Funcionalidades de la SERP</td><td>—</td><td><strong>190</strong></td></tr>
    <tr><td><strong>Tráfico orgánico mensual</strong></td><td>unas 1.500 visitas</td><td><strong>6.390 visitas</strong></td></tr>
  </tbody>
</table>
<p>Y detrás de las cifras, los cuatro objetivos cumplidos:</p>
<ul>
  <li><strong>Dominio de la primera página.</strong> Dipole RFID ocupa la primera página de resultados para la práctica totalidad de sus productos estratégicos.</li>
  <li><strong>Más del 80 % de las keywords estratégicas en el Top 3.</strong> El "efecto monopolio" en las búsquedas que más importan.</li>
  <li><strong>Por delante del fabricante.</strong> Un hito SEO complejo: posicionar al distribuidor e integrador por encima de la web oficial del fabricante en las búsquedas de sus propios productos. Eso da a Dipole el control del tráfico de compra en su zona de influencia.</li>
  <li><strong>Referente de información y mercados internacionales.</strong> El posicionamiento en términos educacionales convirtió la marca en el punto de consulta obligatorio para implantar RFID, multiplicando el tráfico cualificado y las consultas comerciales, y la visibilidad atrajo leads de otros países europeos sin depender de inversión publicitaria.</li>
</ul>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.serie, local: true, alternativeText: 'Gráficas de Semrush con el tráfico orgánico y las keywords de dipolerfid.es desde 2013 hasta 2026, con los dos saltos de 2019-2020 y 2023-2024' },
        caption: 'Tráfico orgánico y keywords por posición de dipolerfid.es, serie completa (Semrush). Los dos escalones de crecimiento corresponden a las dos grandes fases del proyecto.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.julio2024, local: true, alternativeText: 'Detalle de Semrush de julio de 2024: 6.390 visitas orgánicas, 518 de marca y 1.126 keywords, 89 de ellas en el Top 3' },
        caption: 'Julio de 2024: 6.390 visitas orgánicas al mes y 1.126 keywords, 89 en el Top 3 y 169 entre la 4 y la 10 (Semrush).',
      },
      {
        __component: 'blocks.big-stat',
        value: '6.390',
        label: 'visitas orgánicas al mes en julio de 2024',
        description: 'Frente a unas 1.500 al inicio del proyecto en 2019, según Semrush. Más de cuatro veces el tráfico, sin inversión publicitaria.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Octubre de 2026: sigue en el nº 1</h2>
<p>La prueba de que un trabajo SEO está bien hecho es que aguanta. En octubre de 2026 Dipole RFID sigue en la <strong>primera posición de Google</strong> para las búsquedas genéricas y de producto más importantes del sector, y su blog es una de las fuentes que Google cita en sus respuestas generadas por IA:</p>
<table>
  <thead>
    <tr><th>Búsqueda</th><th>Volumen mensual</th><th>Posición hoy</th><th>Página</th></tr>
  </thead>
  <tbody>
    <tr><td>etiqueta rfid</td><td>720</td><td><strong>1</strong></td><td>Guía de etiquetas RFID y aplicaciones</td></tr>
    <tr><td>cómo funciona rfid</td><td>590</td><td><strong>1</strong></td><td>Guía "qué es RFID"</td></tr>
    <tr><td>tag rfid</td><td>390</td><td><strong>1</strong></td><td>Guía de etiquetas RFID y aplicaciones</td></tr>
    <tr><td>rfid etiquetas</td><td>110</td><td><strong>1</strong></td><td>Guía de etiquetas RFID y aplicaciones</td></tr>
    <tr><td>rfid tipos</td><td>40</td><td><strong>1</strong></td><td>Tipos de sistemas RFID</td></tr>
    <tr><td>impinj r420</td><td>40</td><td><strong>1</strong></td><td>Ficha del lector Impinj Speedway Revolution</td></tr>
    <tr><td>etiquetas robustas</td><td>40</td><td><strong>1</strong></td><td>Categoría de etiquetas RFID robustas</td></tr>
    <tr><td>cronometraje rfid</td><td>40</td><td><strong>1</strong></td><td>Solución para eventos deportivos</td></tr>
    <tr><td>smartrac web / agrident / arco rfid</td><td>40-70</td><td><strong>1</strong></td><td>Páginas de marca y de producto</td></tr>
  </tbody>
</table>
<p>Además, Google cita a Dipole en sus respuestas con IA (AI Overviews) para búsquedas como "trazabilidad por RFID", "identificación por radiofrecuencia", "RFID bibliotecas", "RFID significado", "qué es la tecnología RFID" o "RFID para logística". Es la consecuencia natural de un contenido educativo bien estructurado, el mismo principio que aplicamos hoy en el <a href="/agencia-geo-para-pymes/">posicionamiento GEO</a>: el contenido claro y fiable es el que los motores generativos eligen para responder.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.posiciones1, local: true, alternativeText: 'Listado de Semrush de octubre de 2026 con posiciones nº 1 y citas en respuestas de IA de dipolerfid.es para búsquedas de RFID' },
        caption: 'Posiciones en octubre de 2026 (Semrush): nº 1 en "tag rfid", "etiquetas robustas" o "smartrac web" y citas en respuestas de IA para "trazabilidad por rfid" o "rfid bibliotecas".',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.posiciones2, local: true, alternativeText: 'Segundo listado de Semrush de octubre de 2026 con posiciones nº 1 de dipolerfid.es: cómo funciona rfid, etiqueta rfid, rfid tipos, impinj r420' },
        caption: '"Etiqueta rfid" (720 búsquedas al mes), "cómo funciona rfid" (590), "rfid tipos" o "impinj r420": todas en la posición 1 en octubre de 2026.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Por delante del fabricante',
        content:
          'Que un distribuidor posicione por encima de Impinj, Smartrac o Avery Dennison en las búsquedas de sus propios productos no es habitual. Se consigue con fichas más útiles que las del fabricante, en el idioma del cliente, y con una arquitectura que concentra la autoridad donde se vende.',
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'Lo que enseña este caso',
        content:
          'En sectores B2B muy técnicos, la combinación de un análisis de datos quirúrgico y una ejecución de contenido orientada al usuario permite liderar mercados complejos y desplazar a competidores globales de forma orgánica y sostenible.',
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tu empresa industrial no aparece en Google para lo que vende?',
        description:
          'Analizamos gratis tu web y tu catálogo, te decimos qué búsquedas se llevan los fabricantes y la competencia y cómo las recuperaríamos. Sin compromiso.',
        button_text: 'Hablemos de tu negocio',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: Dipole RFID, líder orgànic de l'RFID a Espanya",
    metaDescription:
      "Com vam convertir Dipole RFID en la referència orgànica de l'RFID a Espanya: de 450 a 1.126 keywords i 6.390 visites al mes, primera pàgina per a tot el catàleg i núm. 1 per davant dels fabricants. Avui continua al capdavant.",
    title: "Cas d'èxit: Dipole RFID, líder orgànic de l'RFID a Espanya",
    description:
      "Traslladar a Google el lideratge que Dipole RFID ja tenia al mercat: primera pàgina per a tot el seu catàleg, per davant dels fabricants, i convertir el web en el punt de consulta del sector. SEO i continguts des de 2019.",
    categories: ['SEO', 'Consultoria SEO'],
    date: 'Octubre 2026',
    facts: {
      sectors: [
        { label: 'Empreses industrials', href: '/ca/agencia-industrial/' },
        { label: 'B2B', href: '/ca/agencia-b2b/' },
      ],
      services: [
        { label: 'Posicionament SEO', href: '/ca/agencia-seo-per-pimes/' },
        { label: 'Posicionament GEO', href: '/ca/agencia-geo-per-pimes/' },
      ],
      milestone: 'De 450 a 1.126 keywords i 6.390 visites orgàniques al mes; núm. 1 per davant dels fabricants',
      tech: 'Desenvolupament a mida amb CMS propi del client',
    },
    cardTitle: "Cas d'èxit: Dipole RFID, líder orgànic de l'RFID a Espanya",
    cardDescription:
      'Distribuïdor i integrador RFID. Consultoria SEO, arquitectura i continguts: de 450 a 1.126 keywords, 6.390 visites al mes i primera pàgina per a tot el catàleg, per davant dels fabricants.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Dipole RFID</strong> és referent en solucions d'identificació per radiofreqüència a Espanya: etiquetes, lectors, antenes, impressores i programari RFID per a logística, tèxtil, biblioteques, sanitat, esdeveniments esportius i gestió d'actius, amb les principals marques del sector al catàleg (Impinj, Zebra, Avery Dennison, Smartrac, HID…).</p>
<p>El seu repte era traslladar aquest lideratge físic a l'entorn digital. En un mercat molt especialitzat i tècnic, el web no captava la demanda que existia: tenia autoritat de domini, però una arquitectura de continguts deficient, i el trànsit orgànic era residual. El més crític és que aquest trànsit no corresponia a com cerquen el seu <em>buyer persona</em>, que són enginyers, responsables de logística i directors d'IT. Les oportunitats se les enduien competidors i els mateixos fabricants internacionals.</p>
<p>Quan vam començar, el 2019, el web posicionava per a unes 450 keywords i rebia al voltant de 1.500 visites orgàniques al mes. El que segueix és com, amb una <a href="/ca/agencia-seo-per-pimes/">consultoria SEO</a> profunda i una execució tècnica i de continguts constant, el vam convertir en la principal autoritat del sector RFID en castellà. És el tipus de projecte que defineix la nostra feina amb <a href="/ca/agencia-industrial/">empreses industrials</a> i de venda <a href="/ca/agencia-b2b/">B2B</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats (2019 → juliol 2024)',
        items: [
          { value: '6.390', label: 'Visites orgàniques al mes, des d’unes 1.500' },
          { value: '1.126', label: 'Keywords posicionades, des d’unes 450' },
          { value: '+80%', label: 'De les keywords estratègiques al Top 3' },
          { value: 'Núm. 1', label: 'Per davant dels fabricants en els seus propis productes' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Anàlisi de situació i objectius</h2>
<p>L'auditoria inicial va deixar clar que no faltava autoritat, faltava estructura: Google no entenia què venia Dipole ni per a quins sectors. Amb el client vam fixar quatre objectius mesurables:</p>
<ul>
  <li><strong>Lideratge a les SERP.</strong> Arribar a la primera pàgina per al 100 % del catàleg de productes i serveis.</li>
  <li><strong>Desplaçar la competència.</strong> Superar en visibilitat els mateixos fabricants oficials de maquinari RFID a les cerques dels seus productes.</li>
  <li><strong>Captació full-funnel.</strong> Una estratègia de continguts que cobrís des de la fase informativa ("què és RFID") fins a la decisió tècnica ("lector Impinj R420").</li>
  <li><strong>Projecció internacional.</strong> Fer servir el lideratge al mercat espanyol com a palanca per captar leads d'altres països europeus.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: '2019',
        before_content:
          "Web amb autoritat de domini però sense arquitectura de continguts: unes 450 keywords, al voltant de 1.500 visites orgàniques al mes i trànsit que no corresponia al que cerca un responsable de logística o d'IT. Els fabricants s'enduien les cerques de producte.",
        after_label: 'Juliol 2024',
        after_content:
          '1.126 keywords, 6.390 visites orgàniques al mes, primera pàgina per a la pràctica totalitat del catàleg, més del 80 % de les keywords estratègiques al Top 3 i Dipole per davant dels fabricants a les cerques dels seus propis productes.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Metodologia SEO d'alta precisió</h2>
<p>L'estratègia no es va limitar a l'optimització bàsica. Es va dividir en tres eixos d'actuació, pedagògica i tècnica, que s'han mantingut al llarg de tot el projecte.</p>
<h3>Keyword research i segmentació d'intencions</h3>
<p>Vam fer una auditoria semàntica exhaustiva per desglossar com cerca el sector industrial. No ens vam limitar a les paraules de més volum: vam segmentar l'estudi de keywords en tres nivells de profunditat.</p>
<table>
  <thead>
    <tr><th>Nivell de cerca</th><th>Enfocament estratègic</th><th>Exemples</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Tècnic i de proveïdor</strong></td><td>Productes i marques concretes. Que quan un professional cerqui un component, Dipole sigui l'opció de subministrament.</td><td>"lector Impinj R420", "tags Smartrac", "Avery Dennison RFID"</td></tr>
    <tr><td><strong>Solucions verticals</strong></td><td>Necessitats per sector, amb pàgines d'aterratge que parlen l'idioma del problema del client.</td><td>"RFID para logística", "RFID textil", "RFID bibliotecas"</td></tr>
    <tr><td><strong>Educacional</strong></td><td>Consultes d'alt volum per captar el mercat abans que compri i posicionar Dipole com l'expert que educa.</td><td>"qué es RFID", "cómo funciona RFID", "tipos de etiquetas RFID"</td></tr>
  </tbody>
</table>
<h3>Arquitectura web i continguts on-page</h3>
<p>Amb el mapa de paraules clau definit, vam reestructurar el lloc per complet sota principis de rellevància i jerarquia, treballant sobre el desenvolupament a mida amb CMS propi del client:</p>
<ul>
  <li><strong>Sitges de contingut.</strong> Vam agrupar la informació en categories lògiques (productes per tipus i marca, solucions per sector, blog educatiu) que faciliten tant la navegació com el rastreig de Google, amb URL semàntiques i netes.</li>
  <li><strong>Metadades i dades estructurades.</strong> Vam implementar Schema perquè Google entengués la naturalesa de cada producte i solució, millorant l'aparença als resultats (rich snippets) i el CTR. El juliol de 2024 el web apareixia en 190 funcionalitats de la SERP.</li>
  <li><strong>Contingut de valor industrial.</strong> Textos que compleixen la doble funció de ser detectables per l'algoritme i útils per a un perfil tècnic: cada pàgina de producte amb descripció detallada, especificacions i aplicacions pràctiques, i una sèrie de guies ("qué es RFID", "etiquetas RFID y aplicaciones", "tipos de sistemas RFID") que avui continuen al núm. 1.</li>
</ul>
<h3>Optimització tècnica</h3>
<p>Al sector industrial l'eficiència és clau. Vam treballar amb l'equip de desenvolupament del client la indexació, el rastreig, les canòniques i l'adaptabilitat mòbil, perquè qualsevol professional, des d'una planta de producció o una oficina, tingués una experiència fluida i professional.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Auditoria i keyword research per nivells',
            desc: 'Rastreig complet, anàlisi de Search Console i estudi semàntic del sector en tres nivells: tècnic i de proveïdor, solucions verticals i educacional.',
          },
          {
            title: 'Arquitectura per sitges',
            desc: "Reestructuració del lloc en productes per tipus i marca, solucions per sector i blog, amb URL netes i enllaçat intern que reparteix l'autoritat cap a les pàgines de producte.",
          },
          {
            title: 'Contingut de producte i de marca',
            desc: 'Reescriptura de les fitxes amb especificacions i aplicacions, i pàgines per fabricant representat (Impinj, Smartrac, Avery Dennison, Agrident…), que avui posicionen per davant dels webs oficials.',
          },
          {
            title: 'Pàgines de solució per sector',
            desc: "Landings per a logística, tèxtil, biblioteques, sanitat, esdeveniments esportius i gestió d'actius, que converteixen una cerca de problema en una consulta comercial.",
          },
          {
            title: 'Blog educatiu',
            desc: "Guies que responen als dubtes de qui comença amb RFID. Són les pàgines amb més trànsit del lloc i les que Google cita a les seves respostes amb IA.",
          },
          {
            title: 'Dades estructurades i SERP features',
            desc: "Schema de producte, organització i preguntes freqüents per guanyar fragments destacats, imatges i preguntes relacionades: 190 funcionalitats de la SERP el juliol de 2024.",
          },
          {
            title: 'Seguiment i ampliació contínua',
            desc: 'Revisió mensual de posicions, noves keywords i nous continguts segons el que mostren les dades, durant tot el projecte.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Els resultats: de 450 a 1.126 keywords i 6.390 visites al mes</h2>
<p>La sèrie de Semrush mostra dos esglaons clars, tots dos dins del projecte: el primer, el 2019-2020, amb la nova arquitectura i els continguts de producte; el segon, el 2023-2024, amb les pàgines de solució, les guies i les dades estructurades. El juliol de 2024 el repartiment era aquest:</p>
<table>
  <thead>
    <tr><th>Keywords per posició a Google</th><th>2019</th><th>Juliol 2024</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td>—</td><td><strong>89</strong></td></tr>
    <tr><td>Posicions 4 a 10</td><td>—</td><td><strong>169</strong></td></tr>
    <tr><td>Posicions 11 a 20</td><td>—</td><td>169</td></tr>
    <tr><td>Posicions 21 a 50</td><td>—</td><td>291</td></tr>
    <tr><td>Posicions 51 a 100</td><td>—</td><td>218</td></tr>
    <tr><td><strong>Total keywords</strong></td><td>unes 450</td><td><strong>1.126</strong></td></tr>
    <tr><td>Funcionalitats de la SERP</td><td>—</td><td><strong>190</strong></td></tr>
    <tr><td><strong>Trànsit orgànic mensual</strong></td><td>unes 1.500 visites</td><td><strong>6.390 visites</strong></td></tr>
  </tbody>
</table>
<p>I darrere de les xifres, els quatre objectius complerts:</p>
<ul>
  <li><strong>Domini de la primera pàgina.</strong> Dipole RFID ocupa la primera pàgina de resultats per a la pràctica totalitat dels seus productes estratègics.</li>
  <li><strong>Més del 80 % de les keywords estratègiques al Top 3.</strong> L'"efecte monopoli" a les cerques que més importen.</li>
  <li><strong>Per davant del fabricant.</strong> Una fita SEO complexa: posicionar el distribuïdor i integrador per sobre del web oficial del fabricant a les cerques dels seus propis productes. Això dona a Dipole el control del trànsit de compra a la seva zona d'influència.</li>
  <li><strong>Referent d'informació i mercats internacionals.</strong> El posicionament en termes educacionals va convertir la marca en el punt de consulta obligatori per implantar RFID, multiplicant el trànsit qualificat i les consultes comercials, i la visibilitat va atreure leads d'altres països europeus sense dependre d'inversió publicitària.</li>
</ul>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.serie, local: true, alternativeText: 'Gràfiques de Semrush amb el trànsit orgànic i les keywords de dipolerfid.es des de 2013 fins a 2026, amb els dos salts de 2019-2020 i 2023-2024' },
        caption: 'Trànsit orgànic i keywords per posició de dipolerfid.es, sèrie completa (Semrush). Els dos esglaons de creixement corresponen a les dues grans fases del projecte.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.julio2024, local: true, alternativeText: 'Detall de Semrush de juliol de 2024: 6.390 visites orgàniques, 518 de marca i 1.126 keywords, 89 d’elles al Top 3' },
        caption: 'Juliol de 2024: 6.390 visites orgàniques al mes i 1.126 keywords, 89 al Top 3 i 169 entre la 4 i la 10 (Semrush).',
      },
      {
        __component: 'blocks.big-stat',
        value: '6.390',
        label: 'visites orgàniques al mes el juliol de 2024',
        description: "Davant d'unes 1.500 a l'inici del projecte el 2019, segons Semrush. Més de quatre vegades el trànsit, sense inversió publicitària.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Octubre de 2026: continua al núm. 1</h2>
<p>La prova que una feina SEO està ben feta és que aguanta. L'octubre de 2026 Dipole RFID continua a la <strong>primera posició de Google</strong> per a les cerques genèriques i de producte més importants del sector, i el seu blog és una de les fonts que Google cita a les seves respostes generades per IA:</p>
<table>
  <thead>
    <tr><th>Cerca</th><th>Volum mensual</th><th>Posició avui</th><th>Pàgina</th></tr>
  </thead>
  <tbody>
    <tr><td>etiqueta rfid</td><td>720</td><td><strong>1</strong></td><td>Guia d'etiquetes RFID i aplicacions</td></tr>
    <tr><td>cómo funciona rfid</td><td>590</td><td><strong>1</strong></td><td>Guia "qué es RFID"</td></tr>
    <tr><td>tag rfid</td><td>390</td><td><strong>1</strong></td><td>Guia d'etiquetes RFID i aplicacions</td></tr>
    <tr><td>rfid etiquetas</td><td>110</td><td><strong>1</strong></td><td>Guia d'etiquetes RFID i aplicacions</td></tr>
    <tr><td>rfid tipos</td><td>40</td><td><strong>1</strong></td><td>Tipus de sistemes RFID</td></tr>
    <tr><td>impinj r420</td><td>40</td><td><strong>1</strong></td><td>Fitxa del lector Impinj Speedway Revolution</td></tr>
    <tr><td>etiquetas robustas</td><td>40</td><td><strong>1</strong></td><td>Categoria d'etiquetes RFID robustes</td></tr>
    <tr><td>cronometraje rfid</td><td>40</td><td><strong>1</strong></td><td>Solució per a esdeveniments esportius</td></tr>
    <tr><td>smartrac web / agrident / arco rfid</td><td>40-70</td><td><strong>1</strong></td><td>Pàgines de marca i de producte</td></tr>
  </tbody>
</table>
<p>A més, Google cita Dipole a les seves respostes amb IA (AI Overviews) per a cerques com "trazabilidad por RFID", "identificación por radiofrecuencia", "RFID bibliotecas", "RFID significado", "qué es la tecnología RFID" o "RFID para logística". És la conseqüència natural d'un contingut educatiu ben estructurat, el mateix principi que apliquem avui al <a href="/ca/agencia-geo-per-pimes/">posicionament GEO</a>: el contingut clar i fiable és el que els motors generatius trien per respondre.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.posiciones1, local: true, alternativeText: "Llistat de Semrush d'octubre de 2026 amb posicions núm. 1 i cites a respostes d'IA de dipolerfid.es per a cerques d'RFID" },
        caption: "Posicions l'octubre de 2026 (Semrush): núm. 1 a \"tag rfid\", \"etiquetas robustas\" o \"smartrac web\" i cites a respostes d'IA per a \"trazabilidad por rfid\" o \"rfid bibliotecas\".",
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.posiciones2, local: true, alternativeText: "Segon llistat de Semrush d'octubre de 2026 amb posicions núm. 1 de dipolerfid.es: cómo funciona rfid, etiqueta rfid, rfid tipos, impinj r420" },
        caption: '"Etiqueta rfid" (720 cerques al mes), "cómo funciona rfid" (590), "rfid tipos" o "impinj r420": totes a la posició 1 l\'octubre de 2026.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Per davant del fabricant',
        content:
          "Que un distribuïdor posicioni per sobre d'Impinj, Smartrac o Avery Dennison a les cerques dels seus propis productes no és habitual. S'aconsegueix amb fitxes més útils que les del fabricant, en l'idioma del client, i amb una arquitectura que concentra l'autoritat on es ven.",
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'El que ensenya aquest cas',
        content:
          "En sectors B2B molt tècnics, la combinació d'una anàlisi de dades quirúrgica i una execució de contingut orientada a l'usuari permet liderar mercats complexos i desplaçar competidors globals de manera orgànica i sostenible.",
      },
      {
        __component: 'blocks.cta',
        headline: 'La teva empresa industrial no apareix a Google pel que ven?',
        description:
          'Analitzem gratis el teu web i el teu catàleg, et diem quines cerques se les enduen els fabricants i la competència i com les recuperaríem. Sense compromís.',
        button_text: 'Parlem del teu negoci',
        open_modal: true,
      },
    ],
  },
};
