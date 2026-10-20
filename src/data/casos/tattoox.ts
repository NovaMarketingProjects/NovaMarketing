/**
 * Contenido del caso de éxito de Tattoox (hardcodeado, no viene de Strapi).
 *
 * Fuentes de las cifras:
 *  - Semrush, dominio tattoox.es: 20 oct 2025 → 25 sep / 18 oct 2026.
 *  - PageSpeed Insights (móvil): antes del proyecto y a octubre de 2026.
 *
 * Los bloques siguen el mismo esquema que los componentes de Strapi
 * (`__component: 'blocks.*'`) para que PageBlocks los pinte igual que en el blog.
 */

// Las imágenes de los bloques llevan URL absoluta: PageBlocks antepone la URL
// del CMS a cualquier ruta relativa (en el resto de casos son imágenes de Strapi).
const SITE = 'https://novamarketing.es';
const IMG = {
  trafico: `${SITE}/casos/tattoox/trafico-organico-tattoox-semrush.webp`,
  keywords: `${SITE}/casos/tattoox/keywords-tattoox-semrush.webp`,
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/tattoox/tattoox-web.webp';

// Búsquedas en las que tattoox.es aparece citada en las respuestas generadas
// por IA (AI Overviews de Google), según Semrush a octubre de 2026.
const AI_QUERIES = [
  'curso de tatuador online',
  'curso tatuador online',
  'curso tatuaje online',
  'curso de tatuaje online',
  'curso tatuajes online',
  'cursos tatuaje online',
  'curso tattoo online',
  'curso online para aprender a tatuar',
];

const aiList = AI_QUERIES.map((q) => `<li>${q}</li>`).join('');

export const TATTOOX_CASE = {
  paths: { es: '/casos-exito/tattoox/', ca: '/ca/casos-exit/tattoox/' },
  cover: COVER,
  slug: 'tattoox',
  company: 'Tattoox',
  coverSize: { w: 1899, h: 858 },
  categorySlug: 'seo',

  es: {
    metaTitle: 'Caso de éxito: Tattoox +156% de tráfico orgánico',
    metaDescription:
      'Cómo llevamos a Tattoox de 158.000 a 404.000 visitas orgánicas al mes en 12 meses: velocidad web, hreflang, indexación, contenido y presencia en respuestas de IA.',
    title: 'Caso de éxito: Tattoox +156% de tráfico orgánico',
    description:
      'Multiplicar la visibilidad orgánica de una escuela online de tatuaje con una web WordPress lenta y con problemas técnicos. Oct 2025 – oct 2026, proyecto en curso.',
    categories: ['SEO', 'GEO'],
    date: 'Octubre 2026',
    // Ficha bajo el hero: sector (con enlace si tenemos página de sector),
    // servicios trabajados, hito y tecnología.
    facts: {
          "sector": {
                "label": "Formación online"
          },
          "services": [
                {
                      "label": "Posicionamiento SEO",
                      "href": "/agencia-seo-para-pymes/"
                },
                {
                      "label": "Posicionamiento GEO",
                      "href": "/agencia-geo-para-pymes/"
                },
                {
                      "label": "Optimización web",
                      "href": "/diseno-web-para-pymes/"
                }
          ],
          "milestone": "+156 % de tráfico orgánico y x2,4 keywords en Top 3 en 12 meses",
          "tech": "WordPress"
    },
    cardTitle: 'Caso de éxito: Tattoox +156% de tráfico orgánico',
    cardDescription:
      'Escuela online de tatuaje. Velocidad, hreflang, indexación, contenido y GEO: de 158.000 a 404.000 visitas al mes.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Tattoox</strong> es un centro de formación online para tatuadores. Ofrece cursos y especializaciones para aprender a tatuar desde cero o perfeccionar la técnica, con alumnos en España y en mercados de habla inglesa.</p>
<p>Cuando empezamos a trabajar juntos, en octubre de 2025, la web ya tenía tráfico y contenido. El problema era que ese contenido estaba sobre una base técnica que lo frenaba: un <strong>WordPress</strong> lento, con errores de indexación, un hreflang mal resuelto entre la versión en español y la versión en inglés, y decenas de páginas que competían entre sí por las mismas búsquedas.</p>
<p>El objetivo fue claro desde el primer día: convertir el <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> en el canal principal de captación de alumnos. Un año después, estos son los números.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados en 12 meses (octubre 2025 → octubre 2026)',
        items: [
          { value: '+156%', label: 'Tráfico orgánico mensual' },
          { value: 'x2,4', label: 'Keywords en Top 3 de Google' },
          { value: '96', label: 'PageSpeed en móvil (antes 51)' },
          { value: 'x12', label: 'Apariciones en AI Overviews' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué nos encontramos en la auditoría</h2>
<p>Antes de tocar nada hicimos una <a href="/agencia-seo-para-pymes/">auditoría SEO</a> completa de la web. Estos fueron los frenos principales:</p>
<ul>
  <li><strong>Velocidad crítica en móvil.</strong> El contenido principal tardaba 19,4 segundos en pintarse (LCP). PageSpeed daba un 51 sobre 100.</li>
  <li><strong>Errores de indexación.</strong> URLs rastreables que no debían estarlo, páginas importantes con señales contradictorias y un sitemap que no reflejaba la web real.</li>
  <li><strong>Hreflang ES/EN roto.</strong> Google no entendía qué versión mostrar en cada país y las dos versiones se pisaban en los resultados.</li>
  <li><strong>Contenido pobre y canibalizado.</strong> Varias páginas atacaban la misma intención de búsqueda, y ninguna de ellas terminaba de posicionar bien.</li>
  <li><strong>Arquitectura poco clara.</strong> Los cursos, las especializaciones y el blog no estaban conectados entre sí, y la autoridad no fluía hacia las páginas que venden.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Octubre 2025',
        before_content:
          'WordPress lento (LCP de 19,4 s en móvil), hreflang ES/EN incorrecto, errores de indexación, contenido duplicado y canibalizado, 1.271 keywords en Top 3 y 157.944 visitas orgánicas al mes.',
        after_label: 'Octubre 2026',
        after_content:
          'Web optimizada (LCP de 2,2 s y 96 de PageSpeed), hreflang corregido, indexación limpia, arquitectura por silos, 2.998 keywords en Top 3, 404.177 visitas orgánicas al mes y presencia en más de 2.300 respuestas de IA.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>No fue un único cambio sino un trabajo continuado durante doce meses, por fases y siempre midiendo. Este fue el orden:</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Auditoría técnica y de contenidos',
            desc: 'Rastreo completo de la web, análisis de logs, revisión de Search Console y mapa de keywords por curso y especialización. De aquí salió la hoja de ruta.',
          },
          {
            title: 'Velocidad y Core Web Vitals',
            desc: 'Optimización de WordPress: imágenes, caché, carga de scripts y CSS, fuentes y plugins innecesarios. El LCP pasó de 19,4 s a 2,2 s en móvil.',
          },
          {
            title: 'Indexación y errores técnicos',
            desc: 'Limpieza de URLs sin valor, corrección de canónicos, redirecciones 301, sitemap XML real y robots.txt coherente con lo que queríamos que Google rastrease.',
          },
          {
            title: 'Hreflang español / inglés',
            desc: 'Implementación correcta de las etiquetas hreflang entre ambas versiones, con sus x-default y las URLs alternas verificadas página a página.',
          },
          {
            title: 'Arquitectura y enlazado interno',
            desc: 'Reorganización en silos: cada curso como pilar con sus especializaciones y artículos de apoyo enlazados, para que la autoridad llegue a las páginas que matriculan.',
          },
          {
            title: 'Contenido y SEO on-page',
            desc: 'Fusión de páginas canibalizadas, reescritura de los cursos principales, nuevos contenidos para intenciones de búsqueda sin cubrir y optimización de títulos, encabezados y datos estructurados.',
          },
          {
            title: 'GEO, posicionamiento en respuestas de IA',
            desc: 'Contenido estructurado para que los motores generativos citen a Tattoox: respuestas directas, FAQs, datos verificables y marcado schema. Hoy aparece en las respuestas de IA de Google para las búsquedas principales del sector.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocidad en móvil, de rojo a verde</h2>
<p>La velocidad era el freno más visible. Una web que tarda casi 20 segundos en mostrar el contenido principal pierde alumnos antes de que lleguen a leer el temario. Estos son los datos de PageSpeed Insights en móvil, antes y después:</p>
<table>
  <thead>
    <tr><th>Mejora del Page Speed</th><th style="color:#fca5a5">Antes</th><th style="color:#86efac">Después</th></tr>
  </thead>
  <tbody>
    <tr><td>Puntuación de rendimiento</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">51</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">96</td></tr>
    <tr><td>First Contentful Paint (FCP)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">3,1 s</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">1,1 s</td></tr>
    <tr><td>Largest Contentful Paint (LCP)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">19,4 s</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">2,2 s</td></tr>
    <tr><td>Total Blocking Time (TBT)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">430 ms</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">20 ms</td></tr>
    <tr><td>Cumulative Layout Shift (CLS)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">0</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">0</td></tr>
  </tbody>
</table>
<p>Además del rendimiento, la web pasó a puntuar 95 en accesibilidad, 96 en buenas prácticas y 100 en SEO. Este tipo de optimización forma parte de nuestro servicio de <a href="/diseno-web-para-pymes/">diseño y optimización web</a>.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'El LCP bajó de 19,4 s a 2,2 s en móvil',
        content:
          'Las Core Web Vitals pasaron de rojo a verde sin cambiar de CMS ni rehacer la web. Fue un trabajo de optimización sobre el WordPress existente.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Más keywords y, sobre todo, mejor colocadas</h2>
<p>El número total de keywords creció un 25 %, pero lo importante es dónde están. Las posiciones que generan clics (Top 3 y Top 10) subieron, y las que no sirven para nada (de la 21 a la 100) se vaciaron porque esas páginas subieron de posición.</p>
<table>
  <thead>
    <tr><th>Keywords por posición en Google</th><th>Oct 2025</th><th>Oct 2026</th><th>Variación</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td>1.271</td><td><strong>2.998</strong></td><td><strong>+136 %</strong></td></tr>
    <tr><td>Posiciones 4 a 10</td><td>6.843</td><td>7.241</td><td>+6 %</td></tr>
    <tr><td>Posiciones 11 a 20</td><td>4.841</td><td>3.285</td><td>-32 %</td></tr>
    <tr><td>Posiciones 21 a 50</td><td>5.484</td><td>1.788</td><td>-67 %</td></tr>
    <tr><td>Posiciones 51 a 100</td><td>1.789</td><td>199</td><td>-89 %</td></tr>
    <tr><td><strong>Total keywords</strong></td><td>26.424</td><td><strong>33.065</strong></td><td><strong>+25 %</strong></td></tr>
  </tbody>
</table>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.keywords, alternativeText: 'Evolución de las keywords de Tattoox por posición en Google según Semrush, octubre 2025 a octubre 2026' },
        caption: 'Keywords orgánicas de tattoox.es por rango de posición (Semrush). El bloque de Top 3 crece mientras se vacían las posiciones lejanas.',
      },
      {
        __component: 'blocks.html',
        content: `
<h3>Las búsquedas que más matriculan, en Top 3</h3>
<p>Las tres búsquedas con más intención comercial del sector están hoy en las tres primeras posiciones de Google:</p>
<ul>
  <li><strong>curso de tatuaje</strong></li>
  <li><strong>curso tatuador online</strong></li>
  <li><strong>aprender a tatuar</strong></li>
</ul>`,
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De 158.000 a 404.000 visitas orgánicas al mes</h2>
<p>La suma de todo lo anterior se ve en el tráfico. Las visitas orgánicas mensuales pasaron de 157.944 en octubre de 2025 a 404.177 en octubre de 2026, con el tráfico de marca creciendo también (de 3.262 a 4.239 búsquedas de "tattoox" al mes) y sin inversión en publicidad.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.trafico, alternativeText: 'Gráfica de tráfico orgánico mensual de tattoox.es en Semrush, de octubre de 2025 a octubre de 2026' },
        caption: 'Tráfico orgánico de tattoox.es (Semrush). La curva arranca con las correcciones técnicas y acelera con el contenido y el enlazado interno.',
      },
      {
        __component: 'blocks.big-stat',
        value: '+156 %',
        label: 'de tráfico orgánico mensual en 12 meses',
        description: '157.944 visitas en octubre de 2025 frente a 404.177 en octubre de 2026, según Semrush.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Tattoox aparece en las respuestas de la IA</h2>
<p>Cada vez más alumnos no buscan en Google: preguntan. Por eso, en paralelo al SEO clásico, trabajamos el <a href="/agencia-geo-para-pymes/"><strong>posicionamiento GEO</strong></a> (Generative Engine Optimization): estructurar el contenido para que los motores generativos lo entiendan, lo citen y recomienden a Tattoox.</p>
<p>El trabajo consistió en responder de forma directa a las preguntas que se hace alguien que quiere aprender a tatuar, añadir bloques de preguntas frecuentes en los cursos, aportar datos verificables (duración, temario, salidas) y reforzar el marcado schema de la escuela y de cada curso.</p>
<p>El resultado es que las respuestas generadas por IA de Google citan hoy a Tattoox en las búsquedas principales del sector, entre ellas:</p>
<ul>${aiList}</ul>
<p>En octubre de 2025 la web aparecía en 186 resultados con AI Overview. En octubre de 2026, en 2.312. Y el resto de elementos destacados de la página de resultados (fragmentos, imágenes, vídeos, preguntas relacionadas) pasaron de 6.010 a 15.242.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'De 186 a 2.312 apariciones en AI Overviews',
        content:
          'El SEO y el GEO se refuerzan: el mismo contenido claro, estructurado y bien enlazado que sube posiciones en Google es el que los motores de IA eligen para construir sus respuestas.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Y lo que importa, más alumnos</h2>
<p>El tráfico es un medio. Lo que buscaba Tattoox eran matrículas, y el aumento de solicitudes de información y de inscripciones en los cursos durante este año ha sido <strong>significativo</strong>, con el SEO consolidado como el canal principal de captación de la escuela.</p>
<p>El proyecto sigue en curso: ahora el trabajo se centra en la versión en inglés, en ampliar la cobertura de las especializaciones y en seguir ganando presencia en los motores de respuesta por IA.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Quieres que te echemos una mano con el SEO de tu negocio?',
        description:
          'Analizamos gratis tu web, te decimos qué la está frenando y qué haríamos para que crezca como Tattoox. Sin compromiso.',
        button_text: 'Hablemos de tu negocio',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: Tattoox +156% de trànsit orgànic",
    metaDescription:
      'Com vam portar Tattoox de 158.000 a 404.000 visites orgàniques al mes en 12 mesos: velocitat web, hreflang, indexació, contingut i presència a les respostes d’IA.',
    title: "Cas d'èxit: Tattoox +156% de trànsit orgànic",
    description:
      "Multiplicar la visibilitat orgànica d'una escola online de tatuatge amb una web WordPress lenta i amb problemes tècnics. Oct 2025 – oct 2026, projecte en curs.",
    categories: ['SEO', 'GEO'],
    date: 'Octubre 2026',
    // Ficha bajo el hero: sector (con enlace si tenemos página de sector),
    // servicios trabajados, hito y tecnología.
    facts: {
          "sector": {
                "label": "Formació online"
          },
          "services": [
                {
                      "label": "Posicionament SEO",
                      "href": "/ca/agencia-seo-per-pimes/"
                },
                {
                      "label": "Posicionament GEO",
                      "href": "/ca/agencia-geo-per-pimes/"
                },
                {
                      "label": "Optimització web",
                      "href": "/ca/disseny-web-per-pimes/"
                }
          ],
          "milestone": "+156 % de trànsit orgànic i x2,4 keywords al Top 3 en 12 mesos",
          "tech": "WordPress"
    },
    cardTitle: "Cas d'èxit: Tattoox +156% de trànsit orgànic",
    cardDescription:
      'Escola online de tatuatge. Velocitat, hreflang, indexació, contingut i GEO: de 158.000 a 404.000 visites al mes.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Tattoox</strong> és un centre de formació online per a tatuadors. Ofereix cursos i especialitzacions per aprendre a tatuar des de zero o perfeccionar la tècnica, amb alumnes a Espanya i en mercats de parla anglesa.</p>
<p>Quan vam començar a treballar junts, l'octubre de 2025, la web ja tenia trànsit i contingut. El problema era que aquest contingut estava sobre una base tècnica que el frenava: un <strong>WordPress</strong> lent, amb errors d'indexació, un hreflang mal resolt entre la versió en castellà i la versió en anglès, i desenes de pàgines que competien entre elles per les mateixes cerques.</p>
<p>L'objectiu va ser clar des del primer dia: convertir el <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> en el canal principal de captació d'alumnes. Un any després, aquests són els números.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats en 12 mesos (octubre 2025 → octubre 2026)',
        items: [
          { value: '+156%', label: 'Trànsit orgànic mensual' },
          { value: 'x2,4', label: 'Keywords al Top 3 de Google' },
          { value: '96', label: 'PageSpeed en mòbil (abans 51)' },
          { value: 'x12', label: 'Aparicions a AI Overviews' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què ens vam trobar a l'auditoria</h2>
<p>Abans de tocar res vam fer una <a href="/ca/agencia-seo-per-pimes/">auditoria SEO</a> completa de la web. Aquests van ser els frens principals:</p>
<ul>
  <li><strong>Velocitat crítica en mòbil.</strong> El contingut principal trigava 19,4 segons a pintar-se (LCP). PageSpeed donava un 51 sobre 100.</li>
  <li><strong>Errors d'indexació.</strong> URL rastrejables que no ho havien de ser, pàgines importants amb senyals contradictoris i un sitemap que no reflectia la web real.</li>
  <li><strong>Hreflang ES/EN trencat.</strong> Google no entenia quina versió mostrar a cada país i les dues versions es trepitjaven als resultats.</li>
  <li><strong>Contingut pobre i canibalitzat.</strong> Diverses pàgines atacaven la mateixa intenció de cerca, i cap no acabava de posicionar bé.</li>
  <li><strong>Arquitectura poc clara.</strong> Els cursos, les especialitzacions i el blog no estaven connectats entre si, i l'autoritat no fluïa cap a les pàgines que venen.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Octubre 2025',
        before_content:
          'WordPress lent (LCP de 19,4 s en mòbil), hreflang ES/EN incorrecte, errors d’indexació, contingut duplicat i canibalitzat, 1.271 keywords al Top 3 i 157.944 visites orgàniques al mes.',
        after_label: 'Octubre 2026',
        after_content:
          'Web optimitzada (LCP de 2,2 s i 96 de PageSpeed), hreflang corregit, indexació neta, arquitectura per sitges, 2.998 keywords al Top 3, 404.177 visites orgàniques al mes i presència en més de 2.300 respostes d’IA.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>No va ser un únic canvi sinó una feina continuada durant dotze mesos, per fases i sempre mesurant. Aquest va ser l'ordre:</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Auditoria tècnica i de continguts',
            desc: "Rastreig complet de la web, anàlisi de logs, revisió de Search Console i mapa de keywords per curs i especialització. D'aquí va sortir el full de ruta.",
          },
          {
            title: 'Velocitat i Core Web Vitals',
            desc: "Optimització de WordPress: imatges, memòria cau, càrrega d'scripts i CSS, fonts i plugins innecessaris. L'LCP va passar de 19,4 s a 2,2 s en mòbil.",
          },
          {
            title: 'Indexació i errors tècnics',
            desc: 'Neteja d’URL sense valor, correcció de canòniques, redireccions 301, sitemap XML real i robots.txt coherent amb el que volíem que Google rastregés.',
          },
          {
            title: 'Hreflang castellà / anglès',
            desc: 'Implementació correcta de les etiquetes hreflang entre totes dues versions, amb els x-default i les URL alternes verificades pàgina a pàgina.',
          },
          {
            title: 'Arquitectura i enllaçat intern',
            desc: "Reorganització en sitges: cada curs com a pilar amb les seves especialitzacions i articles de suport enllaçats, perquè l'autoritat arribi a les pàgines que matriculen.",
          },
          {
            title: 'Contingut i SEO on-page',
            desc: 'Fusió de pàgines canibalitzades, reescriptura dels cursos principals, nous continguts per a intencions de cerca sense cobrir i optimització de títols, encapçalaments i dades estructurades.',
          },
          {
            title: "GEO, posicionament a les respostes d'IA",
            desc: "Contingut estructurat perquè els motors generatius citin Tattoox: respostes directes, FAQ, dades verificables i marcatge schema. Avui apareix a les respostes d'IA de Google per a les cerques principals del sector.",
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocitat en mòbil, de vermell a verd</h2>
<p>La velocitat era el fre més visible. Una web que triga gairebé 20 segons a mostrar el contingut principal perd alumnes abans que arribin a llegir el temari. Aquestes són les dades de PageSpeed Insights en mòbil, abans i després:</p>
<table>
  <thead>
    <tr><th>Millora del Page Speed</th><th style="color:#fca5a5">Abans</th><th style="color:#86efac">Després</th></tr>
  </thead>
  <tbody>
    <tr><td>Puntuació de rendiment</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">51</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">96</td></tr>
    <tr><td>First Contentful Paint (FCP)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">3,1 s</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">1,1 s</td></tr>
    <tr><td>Largest Contentful Paint (LCP)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">19,4 s</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">2,2 s</td></tr>
    <tr><td>Total Blocking Time (TBT)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">430 ms</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">20 ms</td></tr>
    <tr><td>Cumulative Layout Shift (CLS)</td><td style="color:#b91c1c;background:#fef2f2;font-weight:600">0</td><td style="color:#15803d;background:#f0fdf4;font-weight:800">0</td></tr>
  </tbody>
</table>
<p>A més del rendiment, la web va passar a puntuar 95 en accessibilitat, 96 en bones pràctiques i 100 en SEO. Aquest tipus d'optimització forma part del nostre servei de <a href="/ca/disseny-web-per-pimes/">disseny i optimització web</a>.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: "L'LCP va baixar de 19,4 s a 2,2 s en mòbil",
        content:
          'Les Core Web Vitals van passar de vermell a verd sense canviar de CMS ni refer la web. Va ser una feina d’optimització sobre el WordPress existent.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Més keywords i, sobretot, més ben col·locades</h2>
<p>El nombre total de keywords va créixer un 25 %, però el que importa és on són. Les posicions que generen clics (Top 3 i Top 10) van pujar, i les que no serveixen per a res (de la 21 a la 100) es van buidar perquè aquelles pàgines van pujar de posició.</p>
<table>
  <thead>
    <tr><th>Keywords per posició a Google</th><th>Oct 2025</th><th>Oct 2026</th><th>Variació</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td>1.271</td><td><strong>2.998</strong></td><td><strong>+136 %</strong></td></tr>
    <tr><td>Posicions 4 a 10</td><td>6.843</td><td>7.241</td><td>+6 %</td></tr>
    <tr><td>Posicions 11 a 20</td><td>4.841</td><td>3.285</td><td>-32 %</td></tr>
    <tr><td>Posicions 21 a 50</td><td>5.484</td><td>1.788</td><td>-67 %</td></tr>
    <tr><td>Posicions 51 a 100</td><td>1.789</td><td>199</td><td>-89 %</td></tr>
    <tr><td><strong>Total keywords</strong></td><td>26.424</td><td><strong>33.065</strong></td><td><strong>+25 %</strong></td></tr>
  </tbody>
</table>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.keywords, alternativeText: "Evolució de les keywords de Tattoox per posició a Google segons Semrush, d'octubre de 2025 a octubre de 2026" },
        caption: 'Keywords orgàniques de tattoox.es per rang de posició (Semrush). El bloc de Top 3 creix mentre es buiden les posicions llunyanes.',
      },
      {
        __component: 'blocks.html',
        content: `
<h3>Les cerques que més matriculen, al Top 3</h3>
<p>Les tres cerques amb més intenció comercial del sector són avui a les tres primeres posicions de Google:</p>
<ul>
  <li><strong>curso de tatuaje</strong></li>
  <li><strong>curso tatuador online</strong></li>
  <li><strong>aprender a tatuar</strong></li>
</ul>`,
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De 158.000 a 404.000 visites orgàniques al mes</h2>
<p>La suma de tot l'anterior es veu al trànsit. Les visites orgàniques mensuals van passar de 157.944 l'octubre de 2025 a 404.177 l'octubre de 2026, amb el trànsit de marca creixent també (de 3.262 a 4.239 cerques de "tattoox" al mes) i sense inversió en publicitat.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.trafico, alternativeText: "Gràfica de trànsit orgànic mensual de tattoox.es a Semrush, d'octubre de 2025 a octubre de 2026" },
        caption: 'Trànsit orgànic de tattoox.es (Semrush). La corba arrenca amb les correccions tècniques i accelera amb el contingut i l’enllaçat intern.',
      },
      {
        __component: 'blocks.big-stat',
        value: '+156 %',
        label: 'de trànsit orgànic mensual en 12 mesos',
        description: "157.944 visites l'octubre de 2025 davant de 404.177 l'octubre de 2026, segons Semrush.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Tattoox apareix a les respostes de la IA</h2>
<p>Cada cop més alumnes no cerquen a Google: pregunten. Per això, en paral·lel al SEO clàssic, vam treballar el <a href="/ca/agencia-geo-per-pimes/"><strong>posicionament GEO</strong></a> (Generative Engine Optimization): estructurar el contingut perquè els motors generatius l'entenguin, el citin i recomanin Tattoox.</p>
<p>La feina va consistir a respondre de manera directa les preguntes que es fa algú que vol aprendre a tatuar, afegir blocs de preguntes freqüents als cursos, aportar dades verificables (durada, temari, sortides) i reforçar el marcatge schema de l'escola i de cada curs.</p>
<p>El resultat és que les respostes generades per IA de Google citen avui Tattoox a les cerques principals del sector, entre elles:</p>
<ul>${aiList}</ul>
<p>L'octubre de 2025 la web apareixia en 186 resultats amb AI Overview. L'octubre de 2026, en 2.312. I la resta d'elements destacats de la pàgina de resultats (fragments, imatges, vídeos, preguntes relacionades) van passar de 6.010 a 15.242.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'De 186 a 2.312 aparicions a AI Overviews',
        content:
          "El SEO i el GEO es reforcen: el mateix contingut clar, estructurat i ben enllaçat que puja posicions a Google és el que els motors d'IA trien per construir les seves respostes.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>I el que importa, més alumnes</h2>
<p>El trànsit és un mitjà. El que buscava Tattoox eren matrícules, i l'augment de sol·licituds d'informació i d'inscripcions als cursos durant aquest any ha estat <strong>significatiu</strong>, amb el SEO consolidat com el canal principal de captació de l'escola.</p>
<p>El projecte continua en curs: ara la feina se centra en la versió en anglès, a ampliar la cobertura de les especialitzacions i a continuar guanyant presència als motors de resposta per IA.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'Vols que et donem un cop de mà amb el SEO del teu negoci?',
        description:
          "Analitzem gratis la teva web, et diem què la frena i què faríem perquè creixi com Tattoox. Sense compromís.",
        button_text: 'Parlem del teu negoci',
        open_modal: true,
      },
    ],
  },
};
