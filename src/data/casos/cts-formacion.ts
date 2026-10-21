/**
 * Contenido del caso de éxito de CTS Formación (hardcodeado, no viene de Strapi).
 *
 * CTS – Institut Metropolità: centro de formación en Barcelona, más de 20 años,
 * más de 200 cursos online, presenciales y semipresenciales para particulares,
 * autónomos y empresas (formación bonificada y certificados de profesionalidad).
 * Rediseño completo: la web antigua estaba en una plataforma de un proveedor
 * externo (no se nombra). Web nueva a medida en Next.js, en castellano, catalán,
 * inglés y chino, con panel propio para cursos, categorías y blog. Lanzada en
 * 2026 (mes no facilitado); proyecto en curso.
 *
 * Fuentes de las cifras:
 *  - PageSpeed Insights. Antes (móvil): 46 / 97 / 100 / 85, FCP 9,9 s, LCP 14,0 s,
 *    TBT 410 ms, CLS 0, SI 9,9 s. Después (móvil): 100 / 100 / 100 / 100, FCP
 *    0,3 s, LCP 0,6 s, TBT 30 ms, CLS 0, SI 0,8 s. Después (escritorio): 98 / 93 /
 *    100 / 92, FCP 0,3 s, LCP 0,8 s, TBT 30 ms, CLS 0, SI 1,5 s.
 *  - Leads: +25 % en los primeros meses tras el lanzamiento (dato del cliente).
 *  - Cifras del cliente (home): +200 cursos, +20 años, +5.000 alumnos, 98 % satisfacción.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  antesHome: '/casos/cts-formacion/antes-home-cts-formacion.webp',
  antesCatalogo: '/casos/cts-formacion/antes-catalogo-cts-formacion.webp',
  antesFicha: '/casos/cts-formacion/antes-ficha-curso-cts-formacion.webp',
  despuesCategoria: '/casos/cts-formacion/despues-categoria-cts-formacion.webp',
  despuesFicha: '/casos/cts-formacion/despues-ficha-curso-cts-formacion.webp',
  psAntesMovil: '/casos/cts-formacion/pagespeed-antes-movil-cts-formacion.webp',
  psDespuesMovil: '/casos/cts-formacion/pagespeed-despues-movil-cts-formacion.webp',
  psDespuesEscritorio: '/casos/cts-formacion/pagespeed-despues-escritorio-cts-formacion.webp',
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/cts-formacion/cts-formacion-web.webp';
const IMG_DESPUES_HOME = COVER;

const R = (v: string) => `<td style="color:#b91c1c;background:#fef2f2;font-weight:600">${v}</td>`;
const G = (v: string) => `<td style="color:#15803d;background:#f0fdf4;font-weight:800">${v}</td>`;
const psTable = (h: [string, string, string], rows: [string, string, string][]) => `<table>
  <thead>
    <tr><th>${h[0]}</th><th style="color:#fca5a5">${h[1]}</th><th style="color:#86efac">${h[2]}</th></tr>
  </thead>
  <tbody>
${rows.map((r) => `    <tr><td>${r[0]}</td>${R(r[1])}${G(r[2])}</tr>`).join('\n')}
  </tbody>
</table>`;
const PS_ES: [string, string, string][] = [
  ['Puntuación de rendimiento', '46', '100'],
  ['First Contentful Paint (FCP)', '9,9 s', '0,3 s'],
  ['Largest Contentful Paint (LCP)', '14,0 s', '0,6 s'],
  ['Total Blocking Time (TBT)', '410 ms', '30 ms'],
  ['Speed Index', '9,9 s', '0,8 s'],
  ['Cumulative Layout Shift (CLS)', '0', '0'],
  ['Accesibilidad', '97', '100'],
  ['SEO', '85', '100'],
];
const PS_CA: [string, string, string][] = [
  ['Puntuació de rendiment', '46', '100'],
  ['First Contentful Paint (FCP)', '9,9 s', '0,3 s'],
  ['Largest Contentful Paint (LCP)', '14,0 s', '0,6 s'],
  ['Total Blocking Time (TBT)', '410 ms', '30 ms'],
  ['Speed Index', '9,9 s', '0,8 s'],
  ['Cumulative Layout Shift (CLS)', '0', '0'],
  ['Accessibilitat', '97', '100'],
  ['SEO', '85', '100'],
];

export const CTS_FORMACION_CASE = {
  paths: { es: '/casos-exito/cts-formacion/', ca: '/ca/casos-exit/cts-formacion/' },
  cover: COVER,
  coverSize: { w: 1901, h: 784 },
  slug: 'cts-formacion',
  company: 'CTS – Institut Metropolità',
  categorySlug: 'diseno-web',
  listingCategories: {
    es: [
      { name: 'Diseño web', slug: 'diseno-web' },
      { name: 'SEO', slug: 'seo' },
      { name: 'Marketing Digital', slug: 'marketing-digital' },
    ],
    ca: [
      { name: 'Disseny web', slug: 'disseny-web' },
      { name: 'SEO', slug: 'seo' },
      { name: 'Marketing Digital', slug: 'marketing-digital' },
    ],
  },

  es: {
    metaTitle: 'Caso de éxito: CTS Formación, rediseño web de 46 a 100 en PageSpeed y +25 % de leads',
    metaDescription:
      'Rediseñamos la web de CTS Formación, centro de formación en Barcelona con más de 200 cursos: Next.js a medida en cuatro idiomas, catálogo con buscador y filtros, panel propio y SEO. De 46 a 100 en PageSpeed móvil y +25 % de leads en los primeros meses.',
    title: 'Caso de éxito: CTS Formación, rediseño web con +25 % de leads',
    description:
      'Sustituir la web de un centro de formación con más de 200 cursos, lenta, anticuada y sin SEO, por una web a medida en cuatro idiomas con catálogo navegable, panel propio y 100 en PageSpeed. Lanzada en 2026, proyecto en curso.',
    categories: ['Diseño web', 'SEO'],
    date: 'Octubre 2026',
    facts: {
      sector: { label: 'Marketing para centros de formación' },
      services: [
        { label: 'Diseño y desarrollo web', href: '/diseno-web-para-pymes/' },
        { label: 'Posicionamiento SEO', href: '/agencia-seo-para-pymes/' },
        { label: 'Marketing digital en Barcelona', href: '/agencia-de-marketing-digital-en-barcelona/' },
      ],
      milestone: 'De 46 a 100 en PageSpeed móvil y +25 % de leads en los primeros meses',
      tech: 'Next.js a medida, 4 idiomas, panel propio de cursos y blog',
    },
    cardTitle: 'Caso de éxito: CTS Formación, rediseño web con +25 % de leads',
    cardDescription:
      'Centro de formación en Barcelona con +200 cursos. Rediseño a medida en Next.js, cuatro idiomas, catálogo con buscador y filtros y panel propio: de 46 a 100 en PageSpeed y +25 % de leads.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>CTS – Institut Metropolità</strong> es un centro de formación de Barcelona con más de 20 años de trayectoria, más de 5.000 alumnos formados y un catálogo de más de 200 cursos online, presenciales y semipresenciales: sanidad y sociosanitario, hostelería, inmobiliaria, limpieza, estética, idiomas, prevención de riesgos, habilidades… para particulares, autónomos y empresas, con formación bonificada y certificados de profesionalidad.</p>
<p>Su web no estaba a la altura de ese catálogo. Estaba montada sobre la plataforma de un proveedor externo, con un diseño anticuado que no transmitía confianza, un catálogo presentado como tienda con títulos numerados y filtros poco útiles, ninguna página de categoría con contenido que Google pudiera posicionar, y una velocidad crítica en móvil: 46 de rendimiento en PageSpeed y 14 segundos hasta pintar el contenido principal.</p>
<p>El encargo fue un rediseño completo: una web propia, rápida, en cuatro idiomas, con un catálogo que ayude a encontrar el curso adecuado y una estructura que posicione cada tipo de búsqueda. Lo abordamos como hacemos cualquier proyecto de <a href="/diseno-web-para-pymes/">diseño y desarrollo web</a>: con el <a href="/agencia-seo-para-pymes/">SEO</a> definido antes de la primera pantalla, y desde Barcelona, como <a href="/agencia-de-marketing-digital-en-barcelona/">agencia de marketing digital en Barcelona</a> que conoce el sector de la formación.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados del rediseño',
        items: [
          { value: '100', label: 'PageSpeed en móvil (antes 46)' },
          { value: '+25%', label: 'Leads en los primeros meses' },
          { value: '+200', label: 'Cursos migrados y reescritos' },
          { value: '4', label: 'Idiomas: castellano, catalán, inglés y chino' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué fallaba en la web antigua</h2>
<ul>
  <li><strong>Diseño anticuado.</strong> Cabecera roja de aviso, tipografía en mayúsculas, fotos de stock sin jerarquía. Nada decía "centro de formación serio con 20 años de historia".</li>
  <li><strong>Catálogo difícil de navegar.</strong> Los cursos se mostraban como productos de tienda, con títulos numerados ("1. Atención sociosanitaria…") y un filtro de precio como único criterio útil. Encontrar el curso adecuado entre 200 era cuestión de paciencia.</li>
  <li><strong>Sin SEO.</strong> Ninguna página de categoría con texto, fichas sin estructura, títulos y descripciones genéricos. Google no sabía qué cursos ofrecía ni para quién.</li>
  <li><strong>Lenta y mal en móvil.</strong> 46 de rendimiento, 9,9 segundos hasta el primer contenido y 14 hasta el principal. Un alumno que busca un curso desde el móvil no espera tanto.</li>
  <li><strong>Dependencia de un proveedor externo.</strong> La plataforma no era suya: cada cambio dependía de un tercero y el centro no controlaba su propia web.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Antes',
        before_content:
          'Plataforma de un proveedor externo, diseño anticuado, catálogo como tienda con títulos numerados, sin páginas de categoría ni SEO, un solo idioma y 46 en PageSpeed móvil con un LCP de 14 segundos.',
        after_label: 'Después',
        after_content:
          'Web propia a medida en Next.js, en castellano, catalán, inglés y chino, con buscador y filtros por modalidad, categoría, público y precio, páginas de categoría con contenido, fichas de curso reescritas, panel propio y 100 en PageSpeed móvil. +25 % de leads en los primeros meses.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Antes y después, pantalla a pantalla</h2>
<p>La mejor forma de entender el rediseño es comparar las tres pantallas que más usa un alumno: la home, el catálogo y la ficha de curso. Arrastra la línea de cada imagen para pasar de la web antigua a la nueva.</p>
<h3>La home</h3>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesHome, local: true, alternativeText: 'Home antigua de CTS Formación: cabecera roja, menú en mayúsculas, imágenes circulares de stock y un bloque de texto con llamada a la acción' },
        after: { url: IMG_DESPUES_HOME, local: true, alternativeText: 'Home nueva de CTS Formación: buscador de cursos protagonista, categorías como accesos directos y cifras del centro' },
        before_label: 'Antes',
        after_label: 'Después',
        aria_label: 'Comparar la home antigua y la nueva',
        caption: 'La home antigua, con cabecera roja, menú en mayúsculas y fotos de stock, frente a la nueva: buscador de cursos en el centro, categorías como accesos directos, cifras del centro y botón de "Pedir info" siempre visible.',
      },
      {
        __component: 'blocks.html',
        content: `
<h3>El catálogo</h3>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesCatalogo, local: true, alternativeText: 'Catálogo antiguo de CTS Formación: listado de categorías a la izquierda, filtro de precio y cursos presentados como productos con títulos numerados' },
        after: { url: IMG.despuesCategoria, local: true, alternativeText: 'Página de categoría nueva de CTS Formación, Sociosanitario y Sanidad: texto introductorio, 24 cursos disponibles, buscador y filtros por modalidad, categoría, público y precio, y tarjetas con horas, modalidad y precio' },
        before_label: 'Antes',
        after_label: 'Después',
        aria_label: 'Comparar el catálogo antiguo y la página de categoría nueva',
        caption: 'El catálogo como tienda, con títulos numerados y el precio como único filtro, frente a la página de categoría nueva: texto propio, contador de cursos, buscador, filtros por modalidad, público y precio, y tarjetas con horas, modalidad y precio.',
      },
      {
        __component: 'blocks.html',
        content: `
<h3>La ficha de curso</h3>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesFicha, local: true, alternativeText: 'Ficha de curso antigua de CTS Formación: título numerado en mayúsculas, precio, texto legal del certificado y formulario de contacto' },
        after: { url: IMG.despuesFicha, local: true, alternativeText: 'Ficha de curso nueva de CTS Formación, curso homologado de agente inmobiliario: etiquetas de categoría, modalidad y homologación, resumen, precio, duración, tutorías, certificado y botón de matrícula' },
        before_label: 'Antes',
        after_label: 'Después',
        aria_label: 'Comparar la ficha de curso antigua y la nueva',
        caption: 'La ficha antigua, con título numerado, precio y referencia legal, frente a la nueva: etiquetas de categoría, modalidad y homologación, resumen del curso y tarjeta lateral con precio, duración, tutorías, certificado y botón de matrícula.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>El rediseño se planificó por fases, con el SEO y el catálogo como columna vertebral y el cliente validando cada entrega.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Estrategia y arquitectura SEO',
            desc: 'Estudio de cómo se busca formación: por categoría (sanidad, hostelería, inmobiliaria…), por modalidad (online, presencial, semipresencial), por público (empresas, autónomos) y por curso concreto. De ahí salió la estructura: categorías con texto, páginas por modalidad, páginas para empresas y autónomos, acreditación y blog.',
          },
          {
            title: 'Diseño pensado para elegir curso',
            desc: 'Identidad granate sobre fondo claro, tipografía moderna, buscador protagonista y tarjetas de curso con la información que decide una matrícula: horas, modalidad, precio y si está homologado.',
          },
          {
            title: 'Desarrollo a medida en Next.js',
            desc: 'Sin plantillas ni plataformas de terceros: desarrollo propio con páginas estáticas, imágenes optimizadas, buscador instantáneo y filtros combinables. Es lo que permite el 100 en móvil y el 98 en escritorio de PageSpeed.',
          },
          {
            title: 'Migración y reescritura de más de 200 cursos',
            desc: 'Cada curso migrado a una ficha estructurada (descripción, duración, modalidad, público, certificado, precio) y con el título limpio de numeraciones, pensado para la búsqueda y para el alumno.',
          },
          {
            title: 'Cuatro idiomas',
            desc: 'Castellano, catalán, inglés y chino, con URLs propias por idioma y hreflang, para el alumnado internacional del centro.',
          },
          {
            title: 'Panel propio para el centro',
            desc: 'Un panel a medida para crear y editar cursos, categorías y artículos del blog sin depender de nadie. La web vuelve a ser del centro.',
          },
          {
            title: 'Blog y contenidos de apoyo',
            desc: 'Estrategia de contenidos para las dudas de quien elige formación (bonificaciones, certificados de profesionalidad, salidas de cada curso) que apoya al catálogo y alimenta el SEO.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocidad en móvil, de 46 a 100</h2>
<p>La web antigua tardaba 14 segundos en mostrar el contenido principal en móvil. La nueva, 0,6. Estos son los datos de PageSpeed Insights en móvil, antes y después:</p>
${psTable(['Mejora del Page Speed (móvil)', 'Antes', 'Después'], PS_ES)}
<p>En escritorio, la web nueva puntúa 98 de rendimiento, con el contenido principal en 0,8 segundos y 30 milisegundos de bloqueo.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psAntesMovil, local: true, alternativeText: 'PageSpeed Insights de la web antigua de CTS Formación en móvil: 46 de rendimiento, FCP 9,9 s, LCP 14,0 s, TBT 410 ms' },
        caption: 'Antes: 46 de rendimiento en móvil, con 9,9 segundos hasta el primer contenido y 14 hasta el principal.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psDespuesMovil, local: true, alternativeText: 'PageSpeed Insights de la web nueva de CTS Formación en móvil: 100 de rendimiento, accesibilidad, prácticas recomendadas y SEO, FCP 0,3 s, LCP 0,6 s' },
        caption: 'Después: 100 en rendimiento, accesibilidad, prácticas recomendadas y SEO en móvil, con el contenido principal en 0,6 segundos.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'De 14 segundos a 0,6 en móvil',
        content:
          'El rendimiento no se "optimizó" al final: se decidió al elegir la tecnología. Una web a medida con páginas estáticas e imágenes optimizadas carga en menos de un segundo aunque tenga más de 200 cursos.',
      },
      {
        __component: 'blocks.big-stat',
        value: '+25%',
        label: 'de leads en los primeros meses tras el lanzamiento',
        description: 'Solicitudes de información y matrícula desde la web, según los datos del centro, con el mismo catálogo y sin inversión adicional en publicidad.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Y lo que importa, más solicitudes de información</h2>
<p>Una web de formación se mide en solicitudes de información y matrículas. En los primeros meses tras el lanzamiento, los leads desde la web han crecido un <strong>25 %</strong> respecto a la web anterior: el buscador y los filtros llevan al alumno al curso adecuado, la ficha responde a lo que necesita saber y el botón de información está siempre a mano.</p>
<p>El proyecto sigue en curso: ahora el trabajo es de <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> continuado sobre la nueva estructura (categorías, modalidades, empresas y autónomos), ampliación del blog y seguimiento de las conversiones por curso.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tu centro de formación necesita una web que convierta?',
        description:
          'Diseñamos webs con catálogo, buscador y SEO pensados desde el primer día, y migramos tus cursos sin perder nada. Cuéntanos tu proyecto y te decimos cómo lo haríamos. Sin compromiso.',
        button_text: 'Hablemos de tu web',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: CTS Formació, redisseny web de 46 a 100 a PageSpeed i +25 % de leads",
    metaDescription:
      "Redissenyem el web de CTS Formació, centre de formació a Barcelona amb més de 200 cursos: Next.js a mida en quatre idiomes, catàleg amb cercador i filtres, panell propi i SEO. De 46 a 100 a PageSpeed mòbil i +25 % de leads els primers mesos.",
    title: "Cas d'èxit: CTS Formació, redisseny web amb +25 % de leads",
    description:
      "Substituir el web d'un centre de formació amb més de 200 cursos, lent, antiquat i sense SEO, per un web a mida en quatre idiomes amb catàleg navegable, panell propi i 100 a PageSpeed. Llançat el 2026, projecte en curs.",
    categories: ['Disseny web', 'SEO'],
    date: 'Octubre 2026',
    facts: {
      sector: { label: 'Màrqueting per a centres de formació' },
      services: [
        { label: 'Disseny i desenvolupament web', href: '/ca/disseny-web-per-pimes/' },
        { label: 'Posicionament SEO', href: '/ca/agencia-seo-per-pimes/' },
        { label: 'Màrqueting digital a Barcelona', href: '/ca/agencia-de-marketing-digital-a-barcelona/' },
      ],
      milestone: 'De 46 a 100 a PageSpeed mòbil i +25 % de leads els primers mesos',
      tech: 'Next.js a mida, 4 idiomes, panell propi de cursos i blog',
    },
    cardTitle: "Cas d'èxit: CTS Formació, redisseny web amb +25 % de leads",
    cardDescription:
      'Centre de formació a Barcelona amb +200 cursos. Redisseny a mida en Next.js, quatre idiomes, catàleg amb cercador i filtres i panell propi: de 46 a 100 a PageSpeed i +25 % de leads.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>CTS – Institut Metropolità</strong> és un centre de formació de Barcelona amb més de 20 anys de trajectòria, més de 5.000 alumnes formats i un catàleg de més de 200 cursos online, presencials i semipresencials: sanitat i sociosanitari, hostaleria, immobiliària, neteja, estètica, idiomes, prevenció de riscos, habilitats… per a particulars, autònoms i empreses, amb formació bonificada i certificats de professionalitat.</p>
<p>El seu web no era a l'altura d'aquest catàleg. Estava muntat sobre la plataforma d'un proveïdor extern, amb un disseny antiquat que no transmetia confiança, un catàleg presentat com a botiga amb títols numerats i filtres poc útils, cap pàgina de categoria amb contingut que Google pogués posicionar, i una velocitat crítica al mòbil: 46 de rendiment a PageSpeed i 14 segons fins a pintar el contingut principal.</p>
<p>L'encàrrec va ser un redisseny complet: un web propi, ràpid, en quatre idiomes, amb un catàleg que ajudi a trobar el curs adequat i una estructura que posicioni cada tipus de cerca. Ho vam abordar com fem qualsevol projecte de <a href="/ca/disseny-web-per-pimes/">disseny i desenvolupament web</a>: amb el <a href="/ca/agencia-seo-per-pimes/">SEO</a> definit abans de la primera pantalla, i des de Barcelona, com a <a href="/ca/agencia-de-marketing-digital-a-barcelona/">agència de màrqueting digital a Barcelona</a> que coneix el sector de la formació.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats del redisseny',
        items: [
          { value: '100', label: 'PageSpeed en mòbil (abans 46)' },
          { value: '+25%', label: 'Leads els primers mesos' },
          { value: '+200', label: 'Cursos migrats i reescrits' },
          { value: '4', label: 'Idiomes: castellà, català, anglès i xinès' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què fallava al web antic</h2>
<ul>
  <li><strong>Disseny antiquat.</strong> Capçalera vermella d'avís, tipografia en majúscules, fotos d'estoc sense jerarquia. Res no deia "centre de formació seriós amb 20 anys d'història".</li>
  <li><strong>Catàleg difícil de navegar.</strong> Els cursos es mostraven com a productes de botiga, amb títols numerats ("1. Atención sociosanitaria…") i un filtre de preu com a únic criteri útil. Trobar el curs adequat entre 200 era qüestió de paciència.</li>
  <li><strong>Sense SEO.</strong> Cap pàgina de categoria amb text, fitxes sense estructura, títols i descripcions genèrics. Google no sabia quins cursos oferia ni per a qui.</li>
  <li><strong>Lent i malament al mòbil.</strong> 46 de rendiment, 9,9 segons fins al primer contingut i 14 fins al principal. Un alumne que cerca un curs des del mòbil no espera tant.</li>
  <li><strong>Dependència d'un proveïdor extern.</strong> La plataforma no era seva: cada canvi depenia d'un tercer i el centre no controlava el seu propi web.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Abans',
        before_content:
          "Plataforma d'un proveïdor extern, disseny antiquat, catàleg com a botiga amb títols numerats, sense pàgines de categoria ni SEO, un sol idioma i 46 a PageSpeed mòbil amb un LCP de 14 segons.",
        after_label: 'Després',
        after_content:
          'Web propi a mida en Next.js, en castellà, català, anglès i xinès, amb cercador i filtres per modalitat, categoria, públic i preu, pàgines de categoria amb contingut, fitxes de curs reescrites, panell propi i 100 a PageSpeed mòbil. +25 % de leads els primers mesos.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Abans i després, pantalla a pantalla</h2>
<p>La millor manera d'entendre el redisseny és comparar les tres pantalles que més fa servir un alumne: la home, el catàleg i la fitxa de curs. Arrossega la línia de cada imatge per passar del web antic al nou.</p>
<h3>La home</h3>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesHome, local: true, alternativeText: "Home antiga de CTS Formació: capçalera vermella, menú en majúscules, imatges circulars d'estoc i un bloc de text amb crida a l'acció" },
        after: { url: IMG_DESPUES_HOME, local: true, alternativeText: 'Home nova de CTS Formació: cercador de cursos protagonista, categories com a accessos directes i xifres del centre' },
        before_label: 'Abans',
        after_label: 'Després',
        aria_label: 'Comparar la home antiga i la nova',
        caption: "La home antiga, amb capçalera vermella, menú en majúscules i fotos d'estoc, davant de la nova: cercador de cursos al centre, categories com a accessos directes, xifres del centre i botó de \"Pedir info\" sempre visible.",
      },
      {
        __component: 'blocks.html',
        content: `
<h3>El catàleg</h3>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesCatalogo, local: true, alternativeText: "Catàleg antic de CTS Formació: llistat de categories a l'esquerra, filtre de preu i cursos presentats com a productes amb títols numerats" },
        after: { url: IMG.despuesCategoria, local: true, alternativeText: 'Pàgina de categoria nova de CTS Formació, Sociosanitari i Sanitat: text introductori, 24 cursos disponibles, cercador i filtres per modalitat, categoria, públic i preu, i targetes amb hores, modalitat i preu' },
        before_label: 'Abans',
        after_label: 'Després',
        aria_label: 'Comparar el catàleg antic i la pàgina de categoria nova',
        caption: 'El catàleg com a botiga, amb títols numerats i el preu com a únic filtre, davant de la pàgina de categoria nova: text propi, comptador de cursos, cercador, filtres per modalitat, públic i preu, i targetes amb hores, modalitat i preu.',
      },
      {
        __component: 'blocks.html',
        content: `
<h3>La fitxa de curs</h3>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesFicha, local: true, alternativeText: 'Fitxa de curs antiga de CTS Formació: títol numerat en majúscules, preu, text legal del certificat i formulari de contacte' },
        after: { url: IMG.despuesFicha, local: true, alternativeText: "Fitxa de curs nova de CTS Formació, curs homologat d'agent immobiliari: etiquetes de categoria, modalitat i homologació, resum, preu, durada, tutories, certificat i botó de matrícula" },
        before_label: 'Abans',
        after_label: 'Després',
        aria_label: 'Comparar la fitxa de curs antiga i la nova',
        caption: 'La fitxa antiga, amb títol numerat, preu i referència legal, davant de la nova: etiquetes de categoria, modalitat i homologació, resum del curs i targeta lateral amb preu, durada, tutories, certificat i botó de matrícula.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>El redisseny es va planificar per fases, amb el SEO i el catàleg com a columna vertebral i el client validant cada lliurament.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Estratègia i arquitectura SEO',
            desc: "Estudi de com es cerca formació: per categoria (sanitat, hostaleria, immobiliària…), per modalitat (online, presencial, semipresencial), per públic (empreses, autònoms) i per curs concret. D'aquí va sortir l'estructura: categories amb text, pàgines per modalitat, pàgines per a empreses i autònoms, acreditació i blog.",
          },
          {
            title: 'Disseny pensat per triar curs',
            desc: 'Identitat granat sobre fons clar, tipografia moderna, cercador protagonista i targetes de curs amb la informació que decideix una matrícula: hores, modalitat, preu i si està homologat.',
          },
          {
            title: 'Desenvolupament a mida en Next.js',
            desc: "Sense plantilles ni plataformes de tercers: desenvolupament propi amb pàgines estàtiques, imatges optimitzades, cercador instantani i filtres combinables. És el que permet el 100 en mòbil i el 98 en escriptori de PageSpeed.",
          },
          {
            title: 'Migració i reescriptura de més de 200 cursos',
            desc: "Cada curs migrat a una fitxa estructurada (descripció, durada, modalitat, públic, certificat, preu) i amb el títol net de numeracions, pensat per a la cerca i per a l'alumne.",
          },
          {
            title: 'Quatre idiomes',
            desc: "Castellà, català, anglès i xinès, amb URL pròpies per idioma i hreflang, per a l'alumnat internacional del centre.",
          },
          {
            title: 'Panell propi per al centre',
            desc: 'Un panell a mida per crear i editar cursos, categories i articles del blog sense dependre de ningú. El web torna a ser del centre.',
          },
          {
            title: 'Blog i continguts de suport',
            desc: 'Estratègia de continguts per als dubtes de qui tria formació (bonificacions, certificats de professionalitat, sortides de cada curs) que dona suport al catàleg i alimenta el SEO.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocitat al mòbil, de 46 a 100</h2>
<p>El web antic trigava 14 segons a mostrar el contingut principal al mòbil. El nou, 0,6. Aquestes són les dades de PageSpeed Insights en mòbil, abans i després:</p>
${psTable(['Millora del Page Speed (mòbil)', 'Abans', 'Després'], PS_CA)}
<p>En escriptori, el web nou puntua 98 de rendiment, amb el contingut principal en 0,8 segons i 30 mil·lisegons de bloqueig.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psAntesMovil, local: true, alternativeText: 'PageSpeed Insights del web antic de CTS Formació en mòbil: 46 de rendiment, FCP 9,9 s, LCP 14,0 s, TBT 410 ms' },
        caption: 'Abans: 46 de rendiment al mòbil, amb 9,9 segons fins al primer contingut i 14 fins al principal.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psDespuesMovil, local: true, alternativeText: 'PageSpeed Insights del web nou de CTS Formació en mòbil: 100 de rendiment, accessibilitat, pràctiques recomanades i SEO, FCP 0,3 s, LCP 0,6 s' },
        caption: 'Després: 100 en rendiment, accessibilitat, pràctiques recomanades i SEO al mòbil, amb el contingut principal en 0,6 segons.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'De 14 segons a 0,6 al mòbil',
        content:
          'El rendiment no es va "optimitzar" al final: es va decidir en triar la tecnologia. Un web a mida amb pàgines estàtiques i imatges optimitzades carrega en menys d’un segon encara que tingui més de 200 cursos.',
      },
      {
        __component: 'blocks.big-stat',
        value: '+25%',
        label: 'de leads els primers mesos després del llançament',
        description: "Sol·licituds d'informació i matrícula des del web, segons les dades del centre, amb el mateix catàleg i sense inversió addicional en publicitat.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>I el que importa, més sol·licituds d'informació</h2>
<p>Un web de formació es mesura en sol·licituds d'informació i matrícules. Els primers mesos després del llançament, els leads des del web han crescut un <strong>25 %</strong> respecte del web anterior: el cercador i els filtres porten l'alumne al curs adequat, la fitxa respon al que necessita saber i el botó d'informació és sempre a mà.</p>
<p>El projecte continua en curs: ara la feina és de <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> continuat sobre la nova estructura (categories, modalitats, empreses i autònoms), ampliació del blog i seguiment de les conversions per curs.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'El teu centre de formació necessita un web que converteixi?',
        description:
          "Dissenyem webs amb catàleg, cercador i SEO pensats des del primer dia, i migrem els teus cursos sense perdre res. Explica'ns el teu projecte i et diem com ho faríem. Sense compromís.",
        button_text: 'Parlem del teu web',
        open_modal: true,
      },
    ],
  },
};
