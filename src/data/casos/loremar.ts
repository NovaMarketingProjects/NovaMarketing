/**
 * Contenido del caso de éxito del Restaurante Loremar (hardcodeado; sustituye a
 * la entrada pública de Strapi con el mismo slug en cada idioma).
 *
 * Arrocería y cocina de mercado en el centro de Sabadell. Rediseño completo: de
 * una web antigua a un desarrollo propio en Next.js (solo castellano) con carta
 * autogestionable, enfoque UI/UX a la reserva y SEO local. Primavera 2026,
 * proyecto entregado.
 *
 * Fuentes: PageSpeed Insights de la web nueva (escritorio): 94 / 96 / 100 / 92,
 * FCP 0,3 s, LCP 1,5 s, TBT 70 ms, CLS 0, SI 1,2 s. No hay PageSpeed de la web
 * antigua. Las cifras de visitas y conversión del texto anterior de Strapi no se
 * publican (no confirmadas); el caso es cualitativo más rendimiento.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true.
const IMG = {
  antesHome: '/casos/loremar/antes-home-loremar.webp',
  pagespeed: '/casos/loremar/pagespeed-loremar.webp',
};
// Portada (hero, tarjeta del listado y og:image): home nueva.
const COVER = '/casos/loremar/loremar-web.webp';

const G = (v: string) => `<td style="color:#15803d;background:#f0fdf4;font-weight:800">${v}</td>`;
const psTable = (h: [string, string], rows: [string, string][]) => `<table>
  <thead>
    <tr><th>${h[0]}</th><th style="color:#86efac">${h[1]}</th></tr>
  </thead>
  <tbody>
${rows.map((r) => `    <tr><td>${r[0]}</td>${G(r[1])}</tr>`).join('\n')}
  </tbody>
</table>`;

export const LOREMAR_CASE = {
  paths: { es: '/casos-exito/restaurante-loremar/', ca: '/ca/casos-exit/restaurant-loremar/' },
  cover: COVER,
  coverSize: { w: 1903, h: 902 },
  // Se mantienen las URL ya indexadas de la entrada de Strapi (distintas por idioma).
  slug: 'restaurante-loremar',
  slugs: { es: 'restaurante-loremar', ca: 'restaurant-loremar' },
  company: 'Restaurante Loremar',
  strapiSlugs: { es: 'restaurante-loremar', ca: 'restaurant-loremar' },
  categorySlug: 'diseno-web',
  sectorSlugs: ['restaurantes'],
  listingCategories: {
    es: [
      { name: 'Diseño web', slug: 'diseno-web' },
      { name: 'SEO Local', slug: 'seo-local' },
      { name: 'SEO', slug: 'seo' },
    ],
    ca: [
      { name: 'Disseny web', slug: 'disseny-web' },
      { name: 'Seo Local', slug: 'seo-local' },
      { name: 'SEO', slug: 'seo' },
    ],
  },

  es: {
    metaTitle: '▷ Caso de éxito: Restaurante Loremar, web y SEO local',
    metaDescription:
      'Rediseño web para un restaurante de Sabadell: carga rápida, carta autogestionable y SEO local para salir cuando buscan dónde comer en Sabadell.',
    title: 'Caso de éxito: Restaurante Loremar, rediseño web y SEO local',
    description:
      'Pasar de una web antigua, lenta y difícil de actualizar a un desarrollo propio con diseño premium, carta autogestionable y SEO local, pensado para que cada visita acabe en una reserva. Primavera 2026.',
    categories: ['Diseño web', 'SEO Local'],
    date: 'Primavera 2026',
    facts: {
      sector: { label: 'Marketing para restaurantes', href: '/agencia-restaurantes/' },
      services: [
        { label: 'Diseño y desarrollo web', href: '/diseno-web-para-pymes/' },
        { label: 'Posicionamiento SEO local', href: '/agencia-seo-para-pymes/' },
        { label: 'Marketing digital en Sabadell', href: '/agencia-de-marketing-digital-en-sabadell/' },
      ],
      milestone: 'Web propia con 94 en PageSpeed y carta que gestiona el propio restaurante',
      period: 'Primavera 2026, entregado',
      tech: 'Next.js a medida con carta autogestionable',
    },
    cardTitle: 'Caso de éxito: Restaurante Loremar, rediseño web y SEO local',
    cardDescription:
      'Arrocería en el centro de Sabadell. De una web antigua a un desarrollo propio con diseño premium, carta autogestionable y SEO local, con 94 en PageSpeed.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Loremar</strong> es una arrocería y restaurante de cocina de mercado en el centro de Sabadell. Necesitaba algo más que una web bonita: una presencia digital capaz de transmitir la calidad de su cocina, aparecer en las búsquedas locales y facilitar que cualquiera pudiera consultar la carta, descubrir el restaurante y reservar sin fricción.</p>
<p>La web que tenía no reflejaba la experiencia gastronómica del restaurante. Era un desarrollo antiguo, cargaba lento, tenía una estructura poco clara y no estaba preparada para competir en Google por búsquedas como "restaurante en Sabadell". Y el problema no era solo estético: la web no funcionaba como herramienta de venta. Los usuarios navegaban sin una dirección clara y no encontraban un camino fluido de la visita a la reserva.</p>
<p>Además, el restaurante no podía gestionar nada por su cuenta. Cambiar un plato, un precio o el menú de temporada dependía de terceros, una barrera importante en un negocio donde la carta cambia con el producto. El encargo fue convertir esa web lenta, poco visible y difícil de gestionar en una plataforma propia, rápida y orientada a generar reservas, combinando <a href="/diseno-web-para-pymes/">diseño y desarrollo web</a> a medida con <a href="/agencia-seo-para-pymes/">SEO local</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'La web nueva en cifras',
        items: [
          { value: '94', label: 'PageSpeed en escritorio' },
          { value: '0,3 s', label: 'Hasta ver el primer contenido' },
          { value: '100%', label: 'Carta gestionada por el propio restaurante' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué fallaba en la web antigua</h2>
<ul>
  <li><strong>No transmitía la cocina.</strong> Iconos genéricos, tipografías decorativas y bloques de texto largos. Nada hacía que apeteciera ir a comer.</li>
  <li><strong>Lenta y anticuada.</strong> Un desarrollo antiguo, poco optimizado y pensado para escritorio, cuando la mayoría busca dónde comer desde el móvil.</li>
  <li><strong>Sin camino a la reserva.</strong> La reserva era un enlace más del menú, sin llamadas a la acción claras.</li>
  <li><strong>Invisible en Google.</strong> Sin estructura ni contenido para las búsquedas locales con intención de comer o reservar.</li>
  <li><strong>Sin autonomía.</strong> Cada cambio en la carta dependía de un tercero.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Antes',
        before_content:
          'Desarrollo antiguo, lento y poco visual, sin camino claro a la reserva, sin presencia en búsquedas locales y con una carta que solo podía cambiar un tercero.',
        after_label: 'Después',
        after_content:
          'Desarrollo propio en Next.js con diseño premium y fotografía gastronómica, botones de reserva siempre visibles, SEO local para Sabadell, 94 en PageSpeed y una carta que el restaurante actualiza por su cuenta.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Antes y después</h2>
<p>Arrastra la línea para pasar de la web antigua a la nueva.</p>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesHome, local: true, alternativeText: 'Web antigua del Restaurante Loremar: iconos genéricos, títulos en tipografía caligráfica y bloques de texto' },
        after: { url: COVER, local: true, alternativeText: 'Web nueva del Restaurante Loremar: fotografía de cocina a pantalla completa, "Arroces y tapas en el corazón de Sabadell" y botones de ver menú y reservar' },
        before_label: 'Antes',
        after_label: 'Después',
        aria_label: 'Comparar la web antigua y la nueva de Loremar',
        caption: 'La home antigua, con iconos genéricos y texto, frente a la nueva: fotografía de cocina a pantalla completa, propuesta clara ("Arroces y tapas en el corazón de Sabadell") y dos acciones, ver el menú o reservar.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>La estrategia combinó tres áreas: diseño visual, conversión y rendimiento técnico. No se trataba de hacer una web únicamente elegante, sino una experiencia coherente con el restaurante y pensada para acompañar al usuario hacia la reserva.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Estrategia y estructura',
            desc: 'Definimos qué busca quien quiere comer en Sabadell (carta, menús, ubicación, reserva) y organizamos la web en ese orden: experiencia, cartas, galería y contacto.',
          },
          {
            title: 'Diseño premium',
            desc: 'Estética oscura y elegante con acentos dorados, tipografía serif, mucho aire y fotografía gastronómica a pantalla completa, para que la comida sea la protagonista.',
          },
          {
            title: 'UI/UX orientado a la reserva',
            desc: 'Primero la propuesta gastronómica, después platos y menús, y siempre una llamada clara a reservar. Botones visibles, jerarquía limpia y lectura cómoda en el móvil.',
          },
          {
            title: 'Desarrollo propio en Next.js',
            desc: 'Sustituimos el desarrollo antiguo por uno a medida, con imágenes optimizadas y una carga ligera. Es lo que da el 94 de PageSpeed y la carga del primer contenido en 0,3 segundos.',
          },
          {
            title: 'Carta autogestionable',
            desc: 'Un sistema de menús dinámicos para que el equipo cambie platos, precios, descripciones y categorías sin depender de nadie.',
          },
          {
            title: 'SEO local en Sabadell',
            desc: 'Títulos y textos orientados a búsquedas locales, datos de contacto visibles, enlaces a la reserva y coherencia con la ficha de Google Business Profile.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Diseño UI/UX enfocado a la conversión</h2>
<p>La interfaz evita distracciones y prioriza lo que influye en la reserva: botones visibles, jerarquía clara, lectura cómoda en el móvil y una presentación visual que genera deseo. En restauración la estética no es un detalle secundario: una buena fotografía, un diseño limpio y una carta bien presentada marcan la diferencia entre una visita informativa y una reserva real.</p>
<h2>Rendimiento, una web que carga al instante</h2>
<p>Quien busca dónde comer, mira la carta o quiere reservar desde el móvil no espera. Por eso el rendimiento fue un pilar del proyecto, y estos son los datos de PageSpeed Insights de la web nueva:</p>
${psTable(['PageSpeed Insights (escritorio)', 'Web nueva'], [
  ['Rendimiento', '94'],
  ['First Contentful Paint (FCP)', '0,3 s'],
  ['Largest Contentful Paint (LCP)', '1,5 s'],
  ['Total Blocking Time (TBT)', '70 ms'],
  ['Speed Index', '1,2 s'],
  ['Cumulative Layout Shift (CLS)', '0'],
  ['Accesibilidad', '96'],
  ['Prácticas recomendadas', '100'],
  ['SEO', '92'],
])}`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.pagespeed, local: true, alternativeText: 'PageSpeed Insights de la web nueva de Loremar: 94 de rendimiento, 96 de accesibilidad, 100 en prácticas recomendadas y 92 en SEO' },
        caption: 'PageSpeed Insights de la web nueva: 94 de rendimiento, con el primer contenido en 0,3 segundos.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Una carta que el restaurante gestiona por su cuenta</h2>
<p>Uno de los avances más importantes fue el sistema de menús dinámicos. Ahora el equipo de Loremar modifica platos, precios, descripciones y categorías de forma sencilla, y adapta la web a la realidad diaria del restaurante: cambios de temporada, platos fuera de carta, nuevos menús o promociones puntuales.</p>
<p>El beneficio es directo: el restaurante gana autonomía y deja de abrir una petición técnica cada vez que quiere cambiar un precio. La web pasa de ser un escaparate rígido a una herramienta viva, al ritmo real del negocio.</p>
<h2>Visibilidad en las búsquedas locales</h2>
<p>El trabajo técnico, la arquitectura de contenidos y la optimización on-page se centraron en las búsquedas con intención local, como "restaurante en Sabadell", reforzadas por la coherencia entre la web y la ficha de Google Business Profile. Es el mismo enfoque que aplicamos como <a href="/agencia-de-marketing-digital-en-sabadell/">agencia de marketing digital en Sabadell</a> y en nuestra propuesta de <a href="/agencia-restaurantes/">marketing para restaurantes</a>: más visibilidad local y una web preparada para convertirla en visitas, llamadas y reservas.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Una web que trabaja para el restaurante',
        content:
          'Más rápida, más visual y pensada para reservar desde el móvil, con una carta que el propio equipo mantiene al día. La web deja de ser un gasto y pasa a ser un canal de captación.',
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tu restaurante necesita una web que llene mesas?',
        description:
          'Diseñamos webs para restaurantes rápidas, visuales y con carta autogestionable, y las posicionamos en tu ciudad. Cuéntanos tu proyecto. Sin compromiso.',
        button_text: 'Hablemos de tu restaurante',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "▷ Cas d'èxit: Restaurant Loremar, web i SEO local",
    metaDescription:
      'Redisseny web per a un restaurant de Sabadell: càrrega ràpida, carta autogestionable i SEO local per sortir quan busquen on menjar a Sabadell.',
    title: "Cas d'èxit: Restaurant Loremar, redisseny web i SEO local",
    description:
      "Passar d'un web antic, lent i difícil d'actualitzar a un desenvolupament propi amb disseny prèmium, carta autogestionable i SEO local, pensat perquè cada visita acabi en una reserva. Primavera 2026.",
    categories: ['Disseny web', 'SEO Local'],
    date: 'Primavera 2026',
    facts: {
      sector: { label: 'Màrqueting per a restaurants', href: '/ca/agencia-restaurantes/' },
      services: [
        { label: 'Disseny i desenvolupament web', href: '/ca/disseny-web-per-pimes/' },
        { label: 'Posicionament SEO local', href: '/ca/agencia-seo-per-pimes/' },
        { label: 'Màrqueting digital a Sabadell', href: '/ca/agencia-de-marketing-digital-a-sabadell/' },
      ],
      milestone: 'Web pròpia amb 94 a PageSpeed i carta que gestiona el mateix restaurant',
      period: 'Primavera 2026, lliurat',
      tech: 'Next.js a mida amb carta autogestionable',
    },
    cardTitle: "Cas d'èxit: Restaurant Loremar, redisseny web i SEO local",
    cardDescription:
      'Arrosseria al centre de Sabadell. D’un web antic a un desenvolupament propi amb disseny prèmium, carta autogestionable i SEO local, amb 94 a PageSpeed.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Loremar</strong> és una arrosseria i restaurant de cuina de mercat al centre de Sabadell. Necessitava alguna cosa més que un web bonic: una presència digital capaç de transmetre la qualitat de la seva cuina, aparèixer a les cerques locals i facilitar que qualsevol pogués consultar la carta, descobrir el restaurant i reservar sense fricció.</p>
<p>El web que tenia no reflectia l'experiència gastronòmica del restaurant. Era un desenvolupament antic, carregava lent, tenia una estructura poc clara i no estava preparat per competir a Google per cerques com "restaurante en Sabadell". I el problema no era només estètic: el web no funcionava com a eina de venda. Els usuaris navegaven sense una direcció clara i no trobaven un camí fluid de la visita a la reserva.</p>
<p>A més, el restaurant no podia gestionar res pel seu compte. Canviar un plat, un preu o el menú de temporada depenia de tercers, una barrera important en un negoci on la carta canvia amb el producte. L'encàrrec va ser convertir aquest web lent, poc visible i difícil de gestionar en una plataforma pròpia, ràpida i orientada a generar reserves, combinant <a href="/ca/disseny-web-per-pimes/">disseny i desenvolupament web</a> a mida amb <a href="/ca/agencia-seo-per-pimes/">SEO local</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'El web nou en xifres',
        items: [
          { value: '94', label: 'PageSpeed en escriptori' },
          { value: '0,3 s', label: 'Fins a veure el primer contingut' },
          { value: '100%', label: 'Carta gestionada pel mateix restaurant' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què fallava al web antic</h2>
<ul>
  <li><strong>No transmetia la cuina.</strong> Icones genèriques, tipografies decoratives i blocs de text llargs. Res no feia venir ganes d'anar-hi a menjar.</li>
  <li><strong>Lent i antiquat.</strong> Un desenvolupament antic, poc optimitzat i pensat per a escriptori, quan la majoria cerca on menjar des del mòbil.</li>
  <li><strong>Sense camí a la reserva.</strong> La reserva era un enllaç més del menú, sense crides a l'acció clares.</li>
  <li><strong>Invisible a Google.</strong> Sense estructura ni contingut per a les cerques locals amb intenció de menjar o reservar.</li>
  <li><strong>Sense autonomia.</strong> Cada canvi a la carta depenia d'un tercer.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Abans',
        before_content:
          "Desenvolupament antic, lent i poc visual, sense camí clar a la reserva, sense presència a les cerques locals i amb una carta que només podia canviar un tercer.",
        after_label: 'Després',
        after_content:
          'Desenvolupament propi en Next.js amb disseny prèmium i fotografia gastronòmica, botons de reserva sempre visibles, SEO local per a Sabadell, 94 a PageSpeed i una carta que el restaurant actualitza pel seu compte.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Abans i després</h2>
<p>Arrossega la línia per passar del web antic al nou.</p>`,
      },
      {
        __component: 'blocks.image-compare',
        before: { url: IMG.antesHome, local: true, alternativeText: 'Web antic del Restaurant Loremar: icones genèriques, títols en tipografia cal·ligràfica i blocs de text' },
        after: { url: COVER, local: true, alternativeText: 'Web nou del Restaurant Loremar: fotografia de cuina a pantalla completa, "Arroces y tapas en el corazón de Sabadell" i botons de veure el menú i reservar' },
        before_label: 'Abans',
        after_label: 'Després',
        aria_label: 'Comparar el web antic i el nou de Loremar',
        caption: 'La home antiga, amb icones genèriques i text, davant de la nova: fotografia de cuina a pantalla completa, proposta clara ("Arroces y tapas en el corazón de Sabadell") i dues accions, veure el menú o reservar.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>L'estratègia va combinar tres àrees: disseny visual, conversió i rendiment tècnic. No es tractava de fer un web únicament elegant, sinó una experiència coherent amb el restaurant i pensada per acompanyar l'usuari cap a la reserva.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Estratègia i estructura',
            desc: 'Vam definir què cerca qui vol menjar a Sabadell (carta, menús, ubicació, reserva) i vam organitzar el web en aquest ordre: experiència, cartes, galeria i contacte.',
          },
          {
            title: 'Disseny prèmium',
            desc: "Estètica fosca i elegant amb accents daurats, tipografia serif, molt d'aire i fotografia gastronòmica a pantalla completa, perquè el menjar sigui el protagonista.",
          },
          {
            title: 'UI/UX orientat a la reserva',
            desc: 'Primer la proposta gastronòmica, després plats i menús, i sempre una crida clara a reservar. Botons visibles, jerarquia neta i lectura còmoda al mòbil.',
          },
          {
            title: 'Desenvolupament propi en Next.js',
            desc: "Vam substituir el desenvolupament antic per un de mida, amb imatges optimitzades i una càrrega lleugera. És el que dona el 94 de PageSpeed i la càrrega del primer contingut en 0,3 segons.",
          },
          {
            title: 'Carta autogestionable',
            desc: "Un sistema de menús dinàmics perquè l'equip canviï plats, preus, descripcions i categories sense dependre de ningú.",
          },
          {
            title: 'SEO local a Sabadell',
            desc: 'Títols i textos orientats a cerques locals, dades de contacte visibles, enllaços a la reserva i coherència amb la fitxa de Google Business Profile.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Disseny UI/UX enfocat a la conversió</h2>
<p>La interfície evita distraccions i prioritza el que influeix en la reserva: botons visibles, jerarquia clara, lectura còmoda al mòbil i una presentació visual que genera desig. En restauració l'estètica no és un detall secundari: una bona fotografia, un disseny net i una carta ben presentada marquen la diferència entre una visita informativa i una reserva real.</p>
<h2>Rendiment, un web que carrega a l'instant</h2>
<p>Qui cerca on menjar, mira la carta o vol reservar des del mòbil no espera. Per això el rendiment va ser un pilar del projecte, i aquestes són les dades de PageSpeed Insights del web nou:</p>
${psTable(['PageSpeed Insights (escriptori)', 'Web nou'], [
  ['Rendiment', '94'],
  ['First Contentful Paint (FCP)', '0,3 s'],
  ['Largest Contentful Paint (LCP)', '1,5 s'],
  ['Total Blocking Time (TBT)', '70 ms'],
  ['Speed Index', '1,2 s'],
  ['Cumulative Layout Shift (CLS)', '0'],
  ['Accessibilitat', '96'],
  ['Pràctiques recomanades', '100'],
  ['SEO', '92'],
])}`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.pagespeed, local: true, alternativeText: 'PageSpeed Insights del web nou de Loremar: 94 de rendiment, 96 d’accessibilitat, 100 en pràctiques recomanades i 92 en SEO' },
        caption: 'PageSpeed Insights del web nou: 94 de rendiment, amb el primer contingut en 0,3 segons.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Una carta que el restaurant gestiona pel seu compte</h2>
<p>Un dels avenços més importants va ser el sistema de menús dinàmics. Ara l'equip de Loremar modifica plats, preus, descripcions i categories de manera senzilla, i adapta el web a la realitat diària del restaurant: canvis de temporada, plats fora de carta, nous menús o promocions puntuals.</p>
<p>El benefici és directe: el restaurant guanya autonomia i deixa d'obrir una petició tècnica cada vegada que vol canviar un preu. El web passa de ser un aparador rígid a una eina viva, al ritme real del negoci.</p>
<h2>Visibilitat a les cerques locals</h2>
<p>La feina tècnica, l'arquitectura de continguts i l'optimització on-page es van centrar en les cerques amb intenció local, com "restaurante en Sabadell", reforçades per la coherència entre el web i la fitxa de Google Business Profile. És el mateix enfocament que apliquem com a <a href="/ca/agencia-de-marketing-digital-a-sabadell/">agència de màrqueting digital a Sabadell</a> i en la nostra proposta de <a href="/ca/agencia-restaurantes/">màrqueting per a restaurants</a>: més visibilitat local i un web preparat per convertir-la en visites, trucades i reserves.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Un web que treballa per al restaurant',
        content:
          "Més ràpid, més visual i pensat per reservar des del mòbil, amb una carta que el mateix equip manté al dia. El web deixa de ser una despesa i passa a ser un canal de captació.",
      },
      {
        __component: 'blocks.cta',
        headline: 'El teu restaurant necessita un web que ompli taules?',
        description:
          "Dissenyem webs per a restaurants ràpides, visuals i amb carta autogestionable, i les posicionem a la teva ciutat. Explica'ns el teu projecte. Sense compromís.",
        button_text: 'Parlem del teu restaurant',
        open_modal: true,
      },
    ],
  },
};
