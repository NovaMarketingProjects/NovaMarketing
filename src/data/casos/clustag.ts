/**
 * Contenido del caso de éxito de Clustag (hardcodeado, no viene de Strapi).
 *
 * Clustag (fabricante de soluciones RFID para intralogística) lanzó una web
 * nueva en WordPress en un dominio nuevo con las redirecciones desde el dominio
 * anterior mal hechas, y perdió prácticamente toda su visibilidad orgánica. Entramos a mediados de 2025 para recuperarla sobre esa
 * misma WordPress: técnico, redirecciones, arquitectura, contenido y velocidad.
 * Web en inglés y español. Proyecto en curso.
 *
 * Fuentes de las cifras:
 *  - Semrush, 31 mar 2025 → 16 oct 2026. Tráfico orgánico mensual: 0 → 678.
 *    (El tráfico de marca, 0 → 649, no se publica por decisión del cliente.) Keywords: 4 (11-20: 3, 21-50: 1) → 44 (Top 3: 3,
 *    4-10: 5, 11-20: 7, 21-50: 18, 51-100: 5), 2 apariciones en AI Overviews y
 *    4 SERP features.
 *  - PageSpeed Insights. Antes: móvil 37 (FCP 5,0 s, LCP 8,6 s, TBT 550 ms,
 *    CLS 0,162, SI 9,2 s) y escritorio 53 (FCP 1,0 s, LCP 2,8 s, TBT 560 ms,
 *    CLS 0,037, SI 2,9 s). Después (escritorio): 98 (FCP 0,5 s, LCP 1,1 s,
 *    TBT 40 ms, CLS 0,041, SI 1,1 s). Accesibilidad 91, prácticas 96, SEO 92.
 *
 * Leads: solo "aumento significativo", sin cifra.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  trafico: '/casos/clustag/trafico-organico-clustag-semrush.webp',
  traficoKeywords: '/casos/clustag/trafico-y-keywords-clustag-semrush.webp',
  psAntes: '/casos/clustag/pagespeed-antes-clustag.webp',
  psDespues: '/casos/clustag/pagespeed-despues-clustag-escritorio.webp',
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/clustag/clustag-web.webp';

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
  ['Puntuación de rendimiento', '53', '98'],
  ['First Contentful Paint (FCP)', '1,0 s', '0,5 s'],
  ['Largest Contentful Paint (LCP)', '2,8 s', '1,1 s'],
  ['Total Blocking Time (TBT)', '560 ms', '40 ms'],
  ['Speed Index', '2,9 s', '1,1 s'],
  ['Cumulative Layout Shift (CLS)', '0,037', '0,041'],
];
const PS_CA: [string, string, string][] = [
  ['Puntuació de rendiment', '53', '98'],
  ['First Contentful Paint (FCP)', '1,0 s', '0,5 s'],
  ['Largest Contentful Paint (LCP)', '2,8 s', '1,1 s'],
  ['Total Blocking Time (TBT)', '560 ms', '40 ms'],
  ['Speed Index', '2,9 s', '1,1 s'],
  ['Cumulative Layout Shift (CLS)', '0,037', '0,041'],
];

export const CLUSTAG_CASE = {
  paths: { es: '/casos-exito/clustag/', ca: '/ca/casos-exit/clustag/' },
  cover: COVER,
  coverSize: { w: 1893, h: 907 },
  slug: 'clustag',
  company: 'Clustag',
  categorySlug: 'seo',
  // Páginas de sector en las que aparece (slugs de SECTOR_SLUGS de esas páginas).
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
    metaTitle: "▷ Caso de éxito: Clustag, SEO recuperado tras migrar",
    metaDescription:
      "Clustag perdió su tráfico al cambiar de dominio con redirecciones mal hechas. Lo recuperamos: de 4 a 44 keywords y PageSpeed de 53 a 98.",
    title: 'Caso de éxito: Clustag, de 0 a 678 visitas orgánicas al mes',
    description:
      'Recuperar la visibilidad orgánica que un fabricante de soluciones RFID perdió al lanzar una web nueva con las redirecciones del dominio anterior mal hechas, trabajando sobre esa misma WordPress. Mediados de 2025 – octubre 2026, proyecto en curso.',
    categories: ['SEO', 'Consultoría SEO'],
    date: 'Octubre 2026',
    facts: {
      period: "Mediados de 2025 – actualidad, en curso",
      sectors: [
        { label: 'Marketing para empresas industriales', href: '/agencia-industrial/' },
        { label: 'Marketing para B2B', href: '/agencia-b2b/' },
      ],
      services: [
        { label: 'Posicionamiento SEO', href: '/agencia-seo-para-pymes/' },
        { label: 'Optimización web', href: '/diseno-web-para-pymes/' },
        { label: 'Marketing B2B', href: '/agencia-b2b/' },
      ],
      milestone: 'De 0 a 678 visitas orgánicas al mes y PageSpeed de 53 a 98',
      tech: 'WordPress del cliente, en inglés y español',
    },
    cardTitle: 'Caso de éxito: Clustag, de 0 a 678 visitas orgánicas al mes',
    cardDescription:
      'Fabricante de soluciones RFID que perdió su SEO al cambiar de dominio con las redirecciones mal hechas. Recuperación técnica, de arquitectura y de contenido sobre su WordPress: de 4 a 44 keywords y PageSpeed de 53 a 98.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Clustag</strong> fabrica soluciones RFID para intralogística: túneles de lectura, estaciones y software para que fábricas, almacenes y retailers controlen su inventario prenda a prenda, caja a caja. Vende a empresas de medio mundo, con una web en inglés y español, y un ciclo de venta largo en el que el comprador técnico investiga mucho antes de contactar.</p>
<p>A principios de 2025 lanzaron una web nueva en WordPress, en un dominio nuevo. Más bonita, más moderna, pero con un error de migración que vemos a menudo: <strong>las redirecciones desde el dominio anterior no se hicieron bien</strong>. Las URLs antiguas no apuntaban a sus equivalentes nuevas, Google no traspasó la autoridad acumulada y la estructura nueva tampoco respondía a lo que buscaba su cliente. El resultado fue que el tráfico orgánico acumulado durante años desapareció. En marzo de 2025 la web posicionaba para 4 keywords y el tráfico orgánico era, a efectos prácticos, cero.</p>
<p>Llegaron a nosotros a mediados de 2025 con un objetivo claro: recuperar la visibilidad perdida sin volver a rehacer la web. Es el tipo de encargo en el que el <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> tiene que trabajar sobre lo que hay, y en el que una <a href="/agencia-industrial/">empresa industrial</a> con ventas <a href="/agencia-b2b/">B2B</a> necesita, más que volumen, aparecer en las pocas búsquedas técnicas que hace quien decide una compra.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados (marzo 2025 → octubre 2026)',
        items: [
          { value: '678', label: 'Visitas orgánicas al mes, partiendo de 0' },
          { value: '4 → 44', label: 'Keywords posicionadas' },
          { value: '53 → 98', label: 'PageSpeed en escritorio' },
          { value: '2', label: 'Citas en las respuestas de IA de Google' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué nos encontramos en la auditoría</h2>
<p>Antes de tocar nada auditamos la web nueva y la comparamos con lo que había posicionado la antigua. Los frenos eran estos:</p>
<ul>
  <li><strong>Redirecciones de dominio mal hechas.</strong> Las URLs del dominio anterior no redirigían a sus equivalentes en el nuevo, o lo hacían a la home o en cadena. Google había perdido el rastro de las páginas que posicionaban, y con ellas la autoridad acumulada.</li>
  <li><strong>Arquitectura pensada para el diseño, no para la búsqueda.</strong> Productos y soluciones agrupados de una forma que no coincidía con cómo busca un responsable de logística o de retail.</li>
  <li><strong>Contenido escaso.</strong> Páginas de producto con poco texto y sin responder a las preguntas técnicas del comprador: compatibilidades, rendimiento de lectura, integración.</li>
  <li><strong>Velocidad baja.</strong> PageSpeed de 37 en móvil y 53 en escritorio, con un LCP de 8,6 segundos en móvil y más de medio segundo de bloqueo por scripts.</li>
  <li><strong>Dos idiomas sin señalizar.</strong> Inglés y español sin hreflang correcto, compitiendo entre sí en algunos resultados.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Marzo 2025',
        before_content:
          'Web nueva en WordPress en un dominio nuevo, con las redirecciones desde el dominio anterior mal hechas: 4 keywords posicionadas, tráfico orgánico cero, PageSpeed de 37 en móvil y 53 en escritorio.',
        after_label: 'Octubre 2026',
        after_content:
          'Misma WordPress, optimizada: redirecciones, arquitectura y contenido recuperados, 44 keywords (8 en el Top 10), 678 visitas orgánicas al mes, PageSpeed de 98 en escritorio y presencia en las respuestas de IA de Google.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>No rehicimos la web. Trabajamos sobre la WordPress que el cliente acababa de lanzar, por fases y con prioridades claras: primero parar la pérdida, luego recuperar y después crecer.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Auditoría y mapa de la web antigua',
            desc: 'Recuperamos el inventario de URLs y keywords de la web anterior y lo cruzamos con la nueva para saber exactamente qué se había perdido y qué valía la pena recuperar.',
          },
          {
            title: 'Redirecciones y SEO técnico',
            desc: 'Mapeo completo de las URLs del dominio anterior a sus equivalentes en el nuevo, con redirecciones 301 directas, corrección de canónicos, sitemap, robots y limpieza de errores de rastreo. Es la fase que frena la caída.',
          },
          {
            title: 'Arquitectura por soluciones',
            desc: 'Reorganización de productos y soluciones según cómo busca el cliente: por aplicación (fábrica, almacén, tienda) y por tipo de dispositivo, con enlazado interno entre ellas.',
          },
          {
            title: 'Contenido técnico de producto',
            desc: 'Reescritura de las páginas de producto y solución con las preguntas reales del comprador técnico, en inglés y en español, y hreflang correcto entre ambas versiones.',
          },
          {
            title: 'Velocidad y Core Web Vitals',
            desc: 'Optimización de WordPress sin cambiar de plantilla: imágenes, caché, scripts de terceros y fuentes. De 53 a 98 en escritorio, con el tiempo de bloqueo de 560 a 40 milisegundos.',
          },
          {
            title: 'Contenido para respuestas de IA',
            desc: 'Respuestas directas y preguntas frecuentes en las páginas clave, con datos estructurados, para que los motores generativos citen a Clustag. Hoy aparece en las respuestas de IA de Google para dos búsquedas del sector.',
          },
          {
            title: 'Seguimiento mensual',
            desc: 'Revisión mensual de posiciones, rastreo y conversiones, con nuevas páginas y mejoras según lo que muestran los datos. El proyecto sigue en curso.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocidad, de rojo a verde sin cambiar la web</h2>
<p>La web nueva era lenta, sobre todo en móvil (37 de rendimiento y un LCP de 8,6 segundos), pero también en escritorio, que es desde donde navega la mayoría de compradores B2B. Esta es la comparativa en escritorio según PageSpeed Insights:</p>
${psTable(['Mejora del Page Speed (escritorio)', 'Antes', 'Después'], PS_ES)}
<p>Las puntuaciones de accesibilidad (91), prácticas recomendadas (96) y SEO (92) se mantuvieron. La mejora se consiguió sobre la misma plantilla, como parte del trabajo de <a href="/diseno-web-para-pymes/">optimización web</a> que aplicamos a cualquier WordPress.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psDespues, local: true, alternativeText: 'PageSpeed Insights de la web de Clustag en escritorio tras la optimización: 98 de rendimiento, FCP 0,5 s, LCP 1,1 s, TBT 40 ms' },
        caption: 'PageSpeed Insights en escritorio tras la optimización: 98 de rendimiento con un LCP de 1,1 segundos.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'De 53 a 98 en escritorio',
        content:
          'El tiempo de bloqueo pasó de 560 a 40 milisegundos y el contenido principal se pinta en 1,1 segundos. Sin rehacer la web: solo optimizando lo que ya había.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De 4 a 44 keywords y de cero a 678 visitas al mes</h2>
<p>La recuperación no fue una línea recta. Semrush muestra el primer salto en junio de 2025, con las redirecciones y las primeras correcciones; un segundo en enero de 2026, con la arquitectura y el contenido nuevo; un retroceso en marzo tras un cambio de algoritmo, y un crecimiento sostenido desde abril de 2026 hasta hoy.</p>
<table>
  <thead>
    <tr><th>Keywords por posición en Google</th><th>Marzo 2025</th><th>Octubre 2026</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td>0</td><td><strong>3</strong></td></tr>
    <tr><td>Posiciones 4 a 10</td><td>0</td><td><strong>5</strong></td></tr>
    <tr><td>Posiciones 11 a 20</td><td>3</td><td>7</td></tr>
    <tr><td>Posiciones 21 a 50</td><td>1</td><td>18</td></tr>
    <tr><td>Posiciones 51 a 100</td><td>0</td><td>5</td></tr>
    <tr><td><strong>Total keywords</strong></td><td>4</td><td><strong>44</strong></td></tr>
    <tr><td>Citas en respuestas de IA (AI Overviews)</td><td>0</td><td><strong>2</strong></td></tr>
  </tbody>
</table>
<p>En un sector tan específico como el RFID industrial, 44 keywords no es un número pequeño: son las búsquedas técnicas que hace un responsable de logística antes de pedir una demo.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.traficoKeywords, local: true, alternativeText: 'Gráficas de Semrush con el tráfico orgánico y las keywords de la web de Clustag de marzo de 2025 a octubre de 2026' },
        caption: 'Tráfico orgánico y keywords por posición de la web de Clustag (Semrush). De 4 keywords y tráfico cero en marzo de 2025 a 44 keywords y 678 visitas en octubre de 2026.',
      },
      {
        __component: 'blocks.big-stat',
        value: '678',
        label: 'visitas orgánicas al mes, partiendo de cero',
        description: 'Tráfico orgánico mensual de la web de Clustag en octubre de 2026 según Semrush, tras perder toda la visibilidad con la web nueva.',
      },
      {
        __component: 'blocks.callout',
        type: 'atencion',
        title: 'La lección: una web nueva sin plan SEO cuesta años de trabajo',
        content:
          'Cambiar de web o de dominio sin mapear bien las redirecciones es la causa más frecuente de pérdida de tráfico que vemos. Recuperarlo es posible, pero lleva meses; evitarlo cuesta unos días de planificación antes del lanzamiento.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Y lo que importa, más solicitudes de demo</h2>
<p>El tráfico es un medio. Lo que necesita Clustag son contactos cualificados de empresas que quieren implantar RFID, y el aumento de solicitudes de información y de demo desde la web durante este periodo ha sido <strong>significativo</strong>, con el canal orgánico recuperado como fuente de contactos.</p>
<p>El proyecto sigue en curso: ahora el trabajo se centra en empujar las 25 keywords que están entre la posición 11 y la 100 hacia la primera página, ampliar el contenido técnico en inglés y seguir ganando presencia en las respuestas de IA.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Has cambiado de web y has perdido tráfico?',
        description:
          'Analizamos gratis qué se perdió en la migración y te decimos cómo recuperarlo sin rehacer la web. Sin compromiso.',
        button_text: 'Hablemos de tu web',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "▷ Cas d'èxit: Clustag, SEO recuperat després de migrar",
    metaDescription:
      "Clustag va perdre el trànsit en canviar de domini amb redireccions mal fetes. El vam recuperar: de 4 a 44 keywords i PageSpeed de 53 a 98.",
    title: "Cas d'èxit: Clustag, de 0 a 678 visites orgàniques al mes",
    description:
      "Recuperar la visibilitat orgànica que un fabricant de solucions RFID va perdre en llançar un web nou amb les redireccions del domini anterior mal fetes, treballant sobre aquesta mateixa WordPress. Mitjan 2025 – octubre 2026, projecte en curs.",
    categories: ['SEO', 'Consultoria SEO'],
    date: 'Octubre 2026',
    facts: {
      period: "Mitjan 2025 – actualitat, en curs",
      sectors: [
        { label: 'Màrqueting per a empreses industrials', href: '/ca/agencia-industrial/' },
        { label: 'Màrqueting per a B2B', href: '/ca/agencia-b2b/' },
      ],
      services: [
        { label: 'Posicionament SEO', href: '/ca/agencia-seo-per-pimes/' },
        { label: 'Optimització web', href: '/ca/disseny-web-per-pimes/' },
        { label: 'Màrqueting B2B', href: '/ca/agencia-b2b/' },
      ],
      milestone: 'De 0 a 678 visites orgàniques al mes i PageSpeed de 53 a 98',
      tech: 'WordPress del client, en anglès i castellà',
    },
    cardTitle: "Cas d'èxit: Clustag, de 0 a 678 visites orgàniques al mes",
    cardDescription:
      'Fabricant de solucions RFID que va perdre el SEO en canviar de domini amb les redireccions mal fetes. Recuperació tècnica, d’arquitectura i de contingut sobre la seva WordPress: de 4 a 44 keywords i PageSpeed de 53 a 98.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Clustag</strong> fabrica solucions RFID per a intralogística: túnels de lectura, estacions i programari perquè fàbriques, magatzems i retailers controlin l'inventari peça a peça, caixa a caixa. Ven a empreses de mig món, amb un web en anglès i castellà, i un cicle de venda llarg en què el comprador tècnic investiga molt abans de contactar.</p>
<p>A principis de 2025 van llançar un web nou en WordPress, en un domini nou. Més bonic, més modern, però amb un error de migració que veiem sovint: <strong>les redireccions des del domini anterior no es van fer bé</strong>. Les URL antigues no apuntaven a les seves equivalents noves, Google no va traspassar l'autoritat acumulada i l'estructura nova tampoc no responia al que cercava el seu client. El resultat va ser que el trànsit orgànic acumulat durant anys va desaparèixer. El març de 2025 el web posicionava per a 4 keywords i el trànsit orgànic era, a efectes pràctics, zero.</p>
<p>Van arribar a nosaltres a mitjan 2025 amb un objectiu clar: recuperar la visibilitat perduda sense tornar a refer el web. És el tipus d'encàrrec en què el <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> ha de treballar sobre el que hi ha, i en què una <a href="/ca/agencia-industrial/">empresa industrial</a> amb vendes <a href="/ca/agencia-b2b/">B2B</a> necessita, més que volum, aparèixer a les poques cerques tècniques que fa qui decideix una compra.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats (març 2025 → octubre 2026)',
        items: [
          { value: '678', label: 'Visites orgàniques al mes, partint de 0' },
          { value: '4 → 44', label: 'Keywords posicionades' },
          { value: '53 → 98', label: 'PageSpeed en escriptori' },
          { value: '2', label: "Cites a les respostes d'IA de Google" },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què ens vam trobar a l'auditoria</h2>
<p>Abans de tocar res vam auditar el web nou i el vam comparar amb el que havia posicionat l'antic. Els frens eren aquests:</p>
<ul>
  <li><strong>Redireccions de domini mal fetes.</strong> Les URL del domini anterior no redirigien a les seves equivalents al nou, o ho feien a la home o en cadena. Google havia perdut el rastre de les pàgines que posicionaven, i amb elles l'autoritat acumulada.</li>
  <li><strong>Arquitectura pensada per al disseny, no per a la cerca.</strong> Productes i solucions agrupats d'una manera que no coincidia amb com cerca un responsable de logística o de retail.</li>
  <li><strong>Contingut escàs.</strong> Pàgines de producte amb poc text i sense respondre les preguntes tècniques del comprador: compatibilitats, rendiment de lectura, integració.</li>
  <li><strong>Velocitat baixa.</strong> PageSpeed de 37 en mòbil i 53 en escriptori, amb un LCP de 8,6 segons en mòbil i més de mig segon de bloqueig per scripts.</li>
  <li><strong>Dos idiomes sense senyalitzar.</strong> Anglès i castellà sense hreflang correcte, competint entre si en alguns resultats.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Març 2025',
        before_content:
          'Web nou en WordPress en un domini nou, amb les redireccions des del domini anterior mal fetes: 4 keywords posicionades, trànsit orgànic zero, PageSpeed de 37 en mòbil i 53 en escriptori.',
        after_label: 'Octubre 2026',
        after_content:
          "Mateixa WordPress, optimitzada: redireccions, arquitectura i contingut recuperats, 44 keywords (8 al Top 10), 678 visites orgàniques al mes, PageSpeed de 98 en escriptori i presència a les respostes d'IA de Google.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>No vam refer el web. Vam treballar sobre la WordPress que el client acabava de llançar, per fases i amb prioritats clares: primer aturar la pèrdua, després recuperar i després créixer.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Auditoria i mapa del web antic',
            desc: "Vam recuperar l'inventari d'URL i keywords del web anterior i el vam creuar amb el nou per saber exactament què s'havia perdut i què valia la pena recuperar.",
          },
          {
            title: 'Redireccions i SEO tècnic',
            desc: "Mapatge complet de les URL del domini anterior a les seves equivalents al nou, amb redireccions 301 directes, correcció de canòniques, sitemap, robots i neteja d'errors de rastreig. És la fase que frena la caiguda.",
          },
          {
            title: 'Arquitectura per solucions',
            desc: "Reorganització de productes i solucions segons com cerca el client: per aplicació (fàbrica, magatzem, botiga) i per tipus de dispositiu, amb enllaçat intern entre elles.",
          },
          {
            title: 'Contingut tècnic de producte',
            desc: 'Reescriptura de les pàgines de producte i solució amb les preguntes reals del comprador tècnic, en anglès i en castellà, i hreflang correcte entre totes dues versions.',
          },
          {
            title: 'Velocitat i Core Web Vitals',
            desc: 'Optimització de WordPress sense canviar de plantilla: imatges, memòria cau, scripts de tercers i fonts. De 53 a 98 en escriptori, amb el temps de bloqueig de 560 a 40 mil·lisegons.',
          },
          {
            title: "Contingut per a respostes d'IA",
            desc: "Respostes directes i preguntes freqüents a les pàgines clau, amb dades estructurades, perquè els motors generatius citin Clustag. Avui apareix a les respostes d'IA de Google per a dues cerques del sector.",
          },
          {
            title: 'Seguiment mensual',
            desc: 'Revisió mensual de posicions, rastreig i conversions, amb noves pàgines i millores segons el que mostren les dades. El projecte continua en curs.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocitat, de vermell a verd sense canviar el web</h2>
<p>El web nou era lent, sobretot en mòbil (37 de rendiment i un LCP de 8,6 segons), però també en escriptori, que és des d'on navega la majoria de compradors B2B. Aquesta és la comparativa en escriptori segons PageSpeed Insights:</p>
${psTable(['Millora del Page Speed (escriptori)', 'Abans', 'Després'], PS_CA)}
<p>Les puntuacions d'accessibilitat (91), pràctiques recomanades (96) i SEO (92) es van mantenir. La millora es va aconseguir sobre la mateixa plantilla, com a part de la feina d'<a href="/ca/disseny-web-per-pimes/">optimització web</a> que apliquem a qualsevol WordPress.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psDespues, local: true, alternativeText: "PageSpeed Insights del web de Clustag en escriptori després de l'optimització: 98 de rendiment, FCP 0,5 s, LCP 1,1 s, TBT 40 ms" },
        caption: "PageSpeed Insights en escriptori després de l'optimització: 98 de rendiment amb un LCP d'1,1 segons.",
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'De 53 a 98 en escriptori',
        content:
          'El temps de bloqueig va passar de 560 a 40 mil·lisegons i el contingut principal es pinta en 1,1 segons. Sense refer el web: només optimitzant el que ja hi havia.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De 4 a 44 keywords i de zero a 678 visites al mes</h2>
<p>La recuperació no va ser una línia recta. Semrush mostra el primer salt el juny de 2025, amb les redireccions i les primeres correccions; un segon el gener de 2026, amb l'arquitectura i el contingut nou; un retrocés el març després d'un canvi d'algoritme, i un creixement sostingut des de l'abril de 2026 fins avui.</p>
<table>
  <thead>
    <tr><th>Keywords per posició a Google</th><th>Març 2025</th><th>Octubre 2026</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td>0</td><td><strong>3</strong></td></tr>
    <tr><td>Posicions 4 a 10</td><td>0</td><td><strong>5</strong></td></tr>
    <tr><td>Posicions 11 a 20</td><td>3</td><td>7</td></tr>
    <tr><td>Posicions 21 a 50</td><td>1</td><td>18</td></tr>
    <tr><td>Posicions 51 a 100</td><td>0</td><td>5</td></tr>
    <tr><td><strong>Total keywords</strong></td><td>4</td><td><strong>44</strong></td></tr>
    <tr><td>Cites a respostes d'IA (AI Overviews)</td><td>0</td><td><strong>2</strong></td></tr>
  </tbody>
</table>
<p>En un sector tan específic com l'RFID industrial, 44 keywords no és un nombre petit: són les cerques tècniques que fa un responsable de logística abans de demanar una demo.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.traficoKeywords, local: true, alternativeText: "Gràfiques de Semrush amb el trànsit orgànic i les keywords del web de Clustag de març de 2025 a octubre de 2026" },
        caption: 'Trànsit orgànic i keywords per posició del web de Clustag (Semrush). De 4 keywords i trànsit zero el març de 2025 a 44 keywords i 678 visites l’octubre de 2026.',
      },
      {
        __component: 'blocks.big-stat',
        value: '678',
        label: 'visites orgàniques al mes, partint de zero',
        description: "Trànsit orgànic mensual del web de Clustag l'octubre de 2026 segons Semrush, després de perdre tota la visibilitat amb el web nou.",
      },
      {
        __component: 'blocks.callout',
        type: 'atencion',
        title: "La lliçó: un web nou sense pla SEO costa anys de feina",
        content:
          "Canviar de web o de domini sense mapar bé les redireccions és la causa més freqüent de pèrdua de trànsit que veiem. Recuperar-lo és possible, però triga mesos; evitar-ho costa uns dies de planificació abans del llançament.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>I el que importa, més sol·licituds de demo</h2>
<p>El trànsit és un mitjà. El que necessita Clustag són contactes qualificats d'empreses que volen implantar RFID, i l'augment de sol·licituds d'informació i de demo des del web durant aquest període ha estat <strong>significatiu</strong>, amb el canal orgànic recuperat com a font de contactes.</p>
<p>El projecte continua en curs: ara la feina se centra a empènyer les 25 keywords que són entre la posició 11 i la 100 cap a la primera pàgina, ampliar el contingut tècnic en anglès i continuar guanyant presència a les respostes d'IA.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'Has canviat de web i has perdut trànsit?',
        description:
          'Analitzem gratis què es va perdre a la migració i et diem com recuperar-ho sense refer el web. Sense compromís.',
        button_text: 'Parlem del teu web',
        open_modal: true,
      },
    ],
  },
};
