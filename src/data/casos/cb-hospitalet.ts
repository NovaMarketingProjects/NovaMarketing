/**
 * Contenido del caso de éxito del CB L'Hospitalet (hardcodeado, no viene de Strapi).
 *
 * Web del 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet (18-20 dic 2025),
 * desarrollada en WordPress en otoño de 2025. Solo en catalán.
 *
 * Fuentes de las cifras (Google Analytics 4, diciembre 2025):
 *  - Páginas vistas: 18 dic 4.019 (home 1.737), 19 dic 4.211 (home 1.645),
 *    20 dic 2.958 (home 1.216). Total en los tres días: 11.188. Total del mes:
 *    18.000 (cifra facilitada por el cliente).
 *  - Páginas de equipo más vistas el 18 dic: Real Madrid 189, Baskonia 170,
 *    FC Barcelona 158, KK Mega 121.
 *
 * Pendiente: tabla de PageSpeed (el cliente enviará capturas). Las capturas de
 * la página de partido, la galería y la gráfica de GA sí están incluidas.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  grups: '/casos/cb-hospitalet/grups-torneig-junior-hospitalet.webp',
  equipo: '/casos/cb-hospitalet/pagina-equipo-real-madrid-torneig-junior.webp',
  partido: '/casos/cb-hospitalet/pagina-partido-torneig-junior-hospitalet.webp',
  galeria: '/casos/cb-hospitalet/galeria-fotos-partido-torneig-junior.webp',
  visitas: '/casos/cb-hospitalet/visitas-web-torneig-junior-diciembre-2025.webp',
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/cb-hospitalet/torneig-junior-hospitalet-web.webp';

export const CB_HOSPITALET_CASE = {
  paths: { es: '/casos-exito/cb-hospitalet/', ca: '/ca/casos-exit/cb-hospitalet/' },
  cover: COVER,
  coverSize: { w: 1888, h: 907 },
  slug: 'cb-hospitalet',
  company: "CB L'Hospitalet",
  // Entrada equivalente en Strapi (no pública): sus datos se sustituyen por
  // estos en todo el sitio (ver applyStaticOverrides en src/data/casos/index.ts).
  strapiSlugs: { es: 'caso-de-exito-cb-hospitalet', ca: 'cas-d-exit-cb-hospitalet' },
  categorySlug: 'diseno-web',
  listingCategories: {
    es: [
      { name: 'Diseño web', slug: 'diseno-web' },
      { name: 'Marketing Digital', slug: 'marketing-digital' },
    ],
    ca: [
      { name: 'Disseny web', slug: 'disseny-web' },
      { name: 'Marketing Digital', slug: 'marketing-digital' },
    ],
  },

  es: {
    metaTitle: "Caso de éxito: CB L'Hospitalet, 18.000 visitas en la web del torneo",
    metaDescription:
      "Diseñamos y desarrollamos en WordPress la web del 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet: grupos, calendario, páginas de equipo, marcadores en directo y patrocinadores. 18.000 páginas vistas en diciembre.",
    title: "Caso de éxito: CB L'Hospitalet, 18.000 visitas en la web del torneo",
    description:
      "Sustituir la web anticuada del Torneig de Bàsquet Junior Ciutat de L'Hospitalet por una web a la altura de las canteras de Real Madrid, FC Barcelona o Zalgiris, lista para la 46ª edición. Otoño 2025, entregada a tiempo.",
    categories: ['Diseño web', 'Marketing digital'],
    date: 'Diciembre 2025',
    facts: {
      sector: { label: 'Clubes y eventos deportivos' },
      services: [
        { label: 'Diseño y desarrollo web', href: '/diseno-web-para-pymes/' },
        { label: 'Marketing digital en Barcelona', href: '/agencia-de-marketing-digital-en-barcelona/' },
      ],
      milestone: '18.000 páginas vistas en diciembre, 4.211 en un solo día de torneo',
      tech: 'WordPress a medida, en catalán',
    },
    cardTitle: "Caso de éxito: CB L'Hospitalet, 18.000 visitas en la web del torneo",
    cardDescription:
      "Web en WordPress para el 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet: grupos, calendario, equipos, marcadores y patrocinadores. 18.000 páginas vistas en diciembre.",

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p>El <strong>CB L'Hospitalet</strong> organiza cada diciembre el <strong>Torneig de Bàsquet Junior Ciutat de L'Hospitalet</strong>, uno de los torneos de cantera con más historia de Europa. En 2025 llegaba a su 46ª edición con un cartel de primer nivel: Real Madrid, FC Barcelona, BC Zalgiris Kaunas, Valencia Basket, KK Mega Superbet, Baskonia, Joventut Badalona y el propio CB L'Hospitalet.</p>
<p>La web del torneo, en cambio, no estaba a esa altura. Tenía un diseño anticuado, funcionaba mal en el móvil, que es desde donde consulta los horarios el 90 % del público que está en el pabellón, era lenta y cada cambio en grupos o calendario necesitaba un técnico.</p>
<p>El club nos encargó en otoño de 2025 una web nueva para la 46ª edición. Con una fecha que no se movía (el torneo se jugaba del 18 al 20 de diciembre) y un objetivo claro: que la web transmitiera el nivel del torneo y sirviera de verdad a aficionados, familias, equipos y patrocinadores durante los tres días. Como <a href="/agencia-de-marketing-digital-en-barcelona/">agencia de marketing digital en Barcelona</a>, el <a href="/diseno-web-para-pymes/">diseño y desarrollo web</a> para un evento con fecha fija es un encargo que conocemos bien.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'La web durante el torneo (18 a 20 de diciembre de 2025)',
        items: [
          { value: '18.000', label: 'Páginas vistas en diciembre' },
          { value: '11.188', label: 'Páginas vistas en los 3 días de torneo' },
          { value: '4.211', label: 'Páginas vistas el día de más tráfico' },
          { value: '8', label: 'Equipos con página propia' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué tenía que hacer la web</h2>
<p>Un torneo de tres días tiene un público muy concreto y con prisa: quiere saber a qué hora juega su equipo, dónde está el pabellón, cómo va el partido y cómo comprar la entrada. Todo desde el móvil. A partir de eso definimos la estructura:</p>
<ul>
  <li><strong>Grupos y calendario.</strong> Los dos grupos de cuatro equipos y todos los partidos con hora, fase y pista, a dos toques desde la home.</li>
  <li><strong>Una página por equipo.</strong> Foto oficial, plantilla y partidos de cada uno de los ocho equipos, con el escudo en la home como acceso directo.</li>
  <li><strong>Página de partido.</strong> Marcador, fase, hora, árbitros y oficiales de mesa, acta del partido, estadísticas y galería de fotos.</li>
  <li><strong>Entradas y abonos.</strong> Un botón de compra siempre visible en la cabecera y una página de abonos.</li>
  <li><strong>Patrocinadores.</strong> Los equipos en la home y los patrocinadores en un espacio propio, presentes también en cada página de partido.</li>
  <li><strong>Pabellón.</strong> Cómo llegar y la información práctica para las familias que vienen de fuera.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Antes',
        before_content:
          'Web anticuada, lenta y poco usable en móvil, con la información del torneo dispersa y cambios que dependían de un técnico. No transmitía el nivel de un torneo con las canteras de Real Madrid, Barça o Zalgiris.',
        after_label: '46ª edición (diciembre 2025)',
        after_content:
          'Web nueva en WordPress, rápida en móvil, con grupos, calendario, ocho páginas de equipo, páginas de partido con marcador, acta, estadísticas y fotos, botón de entradas y patrocinadores. 18.000 páginas vistas en el mes del torneo.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>El plazo era el que marcaba el calendario del torneo, así que trabajamos por fases cortas y con el club validando cada entrega.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Estructura y contenidos',
            desc: 'Definimos con el club las secciones (grupos, calendario, pabellón, equipos, abonos) y recopilamos escudos, fotos oficiales, plantillas y patrocinadores de los ocho equipos.',
          },
          {
            title: 'Diseño a la altura del cartel',
            desc: 'Fondo oscuro, fotografía de juego a pantalla completa, tipografía condensada para los nombres de equipo y marcadores grandes, al estilo de las webs de competiciones profesionales. Los escudos de los ocho equipos y los logos de los patrocinadores, en la home.',
          },
          {
            title: 'Desarrollo en WordPress a medida',
            desc: 'Plantillas propias para equipo, grupo y partido, de forma que añadir un resultado o cambiar una hora sea rellenar un campo, sin tocar diseño. Pensado para que el club actualice el torneo por sí mismo.',
          },
          {
            title: 'Páginas de partido',
            desc: 'Cada partido tiene su página con marcador, fase y hora, árbitros y oficiales de mesa, acta, estadísticas y galería de fotos. Es donde se concentra el tráfico mientras se juega.',
          },
          {
            title: 'Rendimiento en móvil',
            desc: 'Imágenes optimizadas, carga ligera y navegación pensada para el pulgar: horarios y marcadores visibles sin hacer scroll desde la grada.',
          },
          {
            title: 'Patrocinadores y entradas',
            desc: 'Espacio de patrocinadores en la home y en las páginas de partido, y botón de compra de entradas fijo en la cabecera.',
          },
          {
            title: 'Entrega y soporte durante el torneo',
            desc: 'Web publicada antes del torneo y acompañamiento los tres días de competición para que marcadores, actas y fotos estuvieran al día.',
          },
        ],
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.grups, local: true, alternativeText: "Sección de grupos de la web del 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet, con los ocho equipos repartidos en dos grupos" },
        caption: 'Grupos del torneo: Real Madrid, CB L\'Hospitalet, Valencia Basket y Zalgiris en el A; FC Barcelona, KK Mega Superbet, Baskonia y Joventut en el B.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.equipo, local: true, alternativeText: 'Página del Real Madrid en la web del torneo, con la foto oficial de la plantilla junior' },
        caption: 'Cada equipo tiene su página con foto oficial, plantilla y partidos.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.partido, local: true, alternativeText: "Página de partido CB L'Hospitalet 49 - Real Madrid 127 en la web del torneo, con marcador, fase, hora, acta, estadísticas, árbitros y patrocinadores" },
        caption: 'Página de partido: marcador, fase y hora, acceso al acta y a las estadísticas, árbitros y oficiales de mesa, y los patrocinadores al pie.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.galeria, local: true, alternativeText: "Galería de fotos de un partido del torneo en la web del CB L'Hospitalet" },
        caption: 'Cada partido tiene su galería de fotos, que se publica el mismo día.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Los resultados: 18.000 páginas vistas en el mes del torneo</h2>
<p>Una web de torneo se mide en tres días. Estos son los datos de Google Analytics durante la competición:</p>
<table>
  <thead>
    <tr><th>Día</th><th>Páginas vistas</th><th>De ellas, en la home</th></tr>
  </thead>
  <tbody>
    <tr><td>Jueves 18 de diciembre</td><td><strong>4.019</strong></td><td>1.737</td></tr>
    <tr><td>Viernes 19 de diciembre</td><td><strong>4.211</strong></td><td>1.645</td></tr>
    <tr><td>Sábado 20 de diciembre</td><td><strong>2.958</strong></td><td>1.216</td></tr>
    <tr><td><strong>Total del torneo</strong></td><td><strong>11.188</strong></td><td>4.598</td></tr>
  </tbody>
</table>
<p>En el conjunto de diciembre, entre la semana previa y los días de competición, la web superó las <strong>18.000 páginas vistas</strong>. Y más de la mitad del tráfico fue a secciones interiores: las páginas de equipo más visitadas fueron las del Real Madrid, Baskonia, FC Barcelona y KK Mega, además del calendario y las páginas de partido.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.visitas, local: true, alternativeText: 'Gráfica de Google Analytics con las páginas vistas por día de la web del torneo en diciembre de 2025, con el pico del 18 al 20' },
        caption: 'Páginas vistas por día en diciembre de 2025 (Google Analytics). El pico coincide con los tres días de torneo.',
      },
      {
        __component: 'blocks.big-stat',
        value: '18.000',
        label: 'páginas vistas en diciembre de 2025',
        description: 'Con 11.188 concentradas en los tres días de torneo y un pico de 4.211 el viernes 19, según Google Analytics.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Una web que se usó desde la grada',
        content:
          'El tráfico se concentra en las horas de partido y en las páginas de equipo, calendario y partido. Es la señal de que la web cumplió su función: informar en tiempo real a quien está en el pabellón o siguiendo el torneo desde casa.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Lo que viene ahora</h2>
<p>La web está preparada para las siguientes ediciones: cambiar equipos, grupos y calendario es cuestión de horas, no de un proyecto nuevo. El siguiente paso natural es trabajar el <a href="/agencia-seo-para-pymes/">posicionamiento</a> del torneo durante todo el año, para que quien busque "torneo junior baloncesto" o el nombre de cualquiera de los equipos participantes llegue a la web del CB L'Hospitalet, y no solo a redes.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Organizas un evento o diriges un club?',
        description:
          'Diseñamos webs que están a la altura de tu evento y funcionan cuando más tráfico hay. Cuéntanos la fecha y te decimos cómo llegamos. Sin compromiso.',
        button_text: 'Hablemos de tu web',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: CB L'Hospitalet, 18.000 visites al web del torneig",
    metaDescription:
      "Dissenyem i desenvolupem en WordPress el web del 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet: grups, calendari, pàgines d'equip, marcadors en directe i patrocinadors. 18.000 pàgines vistes el desembre.",
    title: "Cas d'èxit: CB L'Hospitalet, 18.000 visites al web del torneig",
    description:
      "Substituir el web antiquat del Torneig de Bàsquet Junior Ciutat de L'Hospitalet per un web a l'altura dels planters del Real Madrid, el FC Barcelona o el Zalgiris, a punt per a la 46a edició. Tardor 2025, lliurat a temps.",
    categories: ['Disseny web', 'Màrqueting digital'],
    date: 'Desembre 2025',
    facts: {
      sector: { label: 'Clubs i esdeveniments esportius' },
      services: [
        { label: 'Disseny i desenvolupament web', href: '/ca/disseny-web-per-pimes/' },
        { label: 'Màrqueting digital a Barcelona', href: '/ca/agencia-de-marketing-digital-a-barcelona/' },
      ],
      milestone: '18.000 pàgines vistes el desembre, 4.211 en un sol dia de torneig',
      tech: 'WordPress a mida, en català',
    },
    cardTitle: "Cas d'èxit: CB L'Hospitalet, 18.000 visites al web del torneig",
    cardDescription:
      "Web en WordPress per al 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet: grups, calendari, equips, marcadors i patrocinadors. 18.000 pàgines vistes el desembre.",

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p>El <strong>CB L'Hospitalet</strong> organitza cada desembre el <strong>Torneig de Bàsquet Junior Ciutat de L'Hospitalet</strong>, un dels tornejos de planter amb més història d'Europa. El 2025 arribava a la 46a edició amb un cartell de primer nivell: Real Madrid, FC Barcelona, BC Zalgiris Kaunas, València Basket, KK Mega Superbet, Baskonia, Joventut Badalona i el mateix CB L'Hospitalet.</p>
<p>El web del torneig, en canvi, no era a aquesta altura. Tenia un disseny antiquat, funcionava malament al mòbil, que és des d'on consulta els horaris el 90 % del públic que és al pavelló, era lent i cada canvi de grups o calendari necessitava un tècnic.</p>
<p>El club ens va encarregar la tardor de 2025 un web nou per a la 46a edició. Amb una data que no es movia (el torneig es jugava del 18 al 20 de desembre) i un objectiu clar: que el web transmetés el nivell del torneig i servís de debò a aficionats, famílies, equips i patrocinadors durant els tres dies. Com a <a href="/ca/agencia-de-marketing-digital-a-barcelona/">agència de màrqueting digital a Barcelona</a>, el <a href="/ca/disseny-web-per-pimes/">disseny i desenvolupament web</a> per a un esdeveniment amb data fixa és un encàrrec que coneixem bé.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'El web durant el torneig (18 a 20 de desembre de 2025)',
        items: [
          { value: '18.000', label: 'Pàgines vistes el desembre' },
          { value: '11.188', label: 'Pàgines vistes els 3 dies de torneig' },
          { value: '4.211', label: 'Pàgines vistes el dia de més trànsit' },
          { value: '8', label: 'Equips amb pàgina pròpia' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què havia de fer el web</h2>
<p>Un torneig de tres dies té un públic molt concret i amb pressa: vol saber a quina hora juga el seu equip, on és el pavelló, com va el partit i com comprar l'entrada. Tot des del mòbil. A partir d'això vam definir l'estructura:</p>
<ul>
  <li><strong>Grups i calendari.</strong> Els dos grups de quatre equips i tots els partits amb hora, fase i pista, a dos tocs des de la home.</li>
  <li><strong>Una pàgina per equip.</strong> Foto oficial, plantilla i partits de cadascun dels vuit equips, amb l'escut a la home com a accés directe.</li>
  <li><strong>Pàgina de partit.</strong> Marcador, fase, hora, àrbitres i oficials de taula, acta del partit, estadístiques i galeria de fotos.</li>
  <li><strong>Entrades i abonaments.</strong> Un botó de compra sempre visible a la capçalera i una pàgina d'abonaments.</li>
  <li><strong>Patrocinadors.</strong> Els equips a la home i els patrocinadors en un espai propi, presents també a cada pàgina de partit.</li>
  <li><strong>Pavelló.</strong> Com arribar-hi i la informació pràctica per a les famílies que vénen de fora.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Abans',
        before_content:
          "Web antiquat, lent i poc usable al mòbil, amb la informació del torneig dispersa i canvis que depenien d'un tècnic. No transmetia el nivell d'un torneig amb els planters del Real Madrid, el Barça o el Zalgiris.",
        after_label: '46a edició (desembre 2025)',
        after_content:
          "Web nou en WordPress, ràpid al mòbil, amb grups, calendari, vuit pàgines d'equip, pàgines de partit amb marcador, acta, estadístiques i fotos, botó d'entrades i patrocinadors. 18.000 pàgines vistes el mes del torneig.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>El termini era el que marcava el calendari del torneig, així que vam treballar per fases curtes i amb el club validant cada lliurament.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Estructura i continguts',
            desc: 'Vam definir amb el club les seccions (grups, calendari, pavelló, equips, abonaments) i vam recopilar escuts, fotos oficials, plantilles i patrocinadors dels vuit equips.',
          },
          {
            title: "Disseny a l'altura del cartell",
            desc: "Fons fosc, fotografia de joc a pantalla completa, tipografia condensada per als noms d'equip i marcadors grans, a l'estil dels webs de competicions professionals. Els escuts dels vuit equips i els logos dels patrocinadors, a la home.",
          },
          {
            title: 'Desenvolupament en WordPress a mida',
            desc: "Plantilles pròpies per a equip, grup i partit, de manera que afegir un resultat o canviar una hora sigui omplir un camp, sense tocar disseny. Pensat perquè el club actualitzi el torneig per si mateix.",
          },
          {
            title: 'Pàgines de partit',
            desc: "Cada partit té la seva pàgina amb marcador, fase i hora, àrbitres i oficials de taula, acta, estadístiques i galeria de fotos. És on es concentra el trànsit mentre es juga.",
          },
          {
            title: 'Rendiment al mòbil',
            desc: 'Imatges optimitzades, càrrega lleugera i navegació pensada per al polze: horaris i marcadors visibles sense fer scroll des de la grada.',
          },
          {
            title: 'Patrocinadors i entrades',
            desc: "Espai de patrocinadors a la home i a les pàgines de partit, i botó de compra d'entrades fix a la capçalera.",
          },
          {
            title: 'Lliurament i suport durant el torneig',
            desc: 'Web publicat abans del torneig i acompanyament els tres dies de competició perquè marcadors, actes i fotos estiguessin al dia.',
          },
        ],
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.grups, local: true, alternativeText: "Secció de grups del web del 46è Torneig de Bàsquet Junior Ciutat de L'Hospitalet, amb els vuit equips repartits en dos grups" },
        caption: "Grups del torneig: Real Madrid, CB L'Hospitalet, València Basket i Zalgiris a l'A; FC Barcelona, KK Mega Superbet, Baskonia i Joventut al B.",
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.equipo, local: true, alternativeText: 'Pàgina del Real Madrid al web del torneig, amb la foto oficial de la plantilla júnior' },
        caption: 'Cada equip té la seva pàgina amb foto oficial, plantilla i partits.',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.partido, local: true, alternativeText: "Pàgina de partit CB L'Hospitalet 49 - Real Madrid 127 al web del torneig, amb marcador, fase, hora, acta, estadístiques, àrbitres i patrocinadors" },
        caption: "Pàgina de partit: marcador, fase i hora, accés a l'acta i a les estadístiques, àrbitres i oficials de taula, i els patrocinadors al peu.",
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.galeria, local: true, alternativeText: "Galeria de fotos d'un partit del torneig al web del CB L'Hospitalet" },
        caption: 'Cada partit té la seva galeria de fotos, que es publica el mateix dia.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Els resultats: 18.000 pàgines vistes el mes del torneig</h2>
<p>Un web de torneig es mesura en tres dies. Aquestes són les dades de Google Analytics durant la competició:</p>
<table>
  <thead>
    <tr><th>Dia</th><th>Pàgines vistes</th><th>D'elles, a la home</th></tr>
  </thead>
  <tbody>
    <tr><td>Dijous 18 de desembre</td><td><strong>4.019</strong></td><td>1.737</td></tr>
    <tr><td>Divendres 19 de desembre</td><td><strong>4.211</strong></td><td>1.645</td></tr>
    <tr><td>Dissabte 20 de desembre</td><td><strong>2.958</strong></td><td>1.216</td></tr>
    <tr><td><strong>Total del torneig</strong></td><td><strong>11.188</strong></td><td>4.598</td></tr>
  </tbody>
</table>
<p>En el conjunt del desembre, entre la setmana prèvia i els dies de competició, el web va superar les <strong>18.000 pàgines vistes</strong>. I més de la meitat del trànsit va anar a seccions interiors: les pàgines d'equip més visitades van ser les del Real Madrid, el Baskonia, el FC Barcelona i el KK Mega, a més del calendari i les pàgines de partit.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.visitas, local: true, alternativeText: 'Gràfica de Google Analytics amb les pàgines vistes per dia del web del torneig el desembre de 2025, amb el pic del 18 al 20' },
        caption: 'Pàgines vistes per dia el desembre de 2025 (Google Analytics). El pic coincideix amb els tres dies de torneig.',
      },
      {
        __component: 'blocks.big-stat',
        value: '18.000',
        label: 'pàgines vistes el desembre de 2025',
        description: 'Amb 11.188 concentrades en els tres dies de torneig i un pic de 4.211 el divendres 19, segons Google Analytics.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Un web que es va fer servir des de la grada',
        content:
          "El trànsit es concentra a les hores de partit i a les pàgines d'equip, calendari i partit. És el senyal que el web va complir la seva funció: informar en temps real qui és al pavelló o segueix el torneig des de casa.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>El que ve ara</h2>
<p>El web està preparat per a les edicions següents: canviar equips, grups i calendari és qüestió d'hores, no d'un projecte nou. El pas natural següent és treballar el <a href="/ca/agencia-seo-per-pimes/">posicionament</a> del torneig durant tot l'any, perquè qui cerqui "torneig júnior bàsquet" o el nom de qualsevol dels equips participants arribi al web del CB L'Hospitalet, i no només a xarxes.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'Organitzes un esdeveniment o dirigeixes un club?',
        description:
          "Dissenyem webs que són a l'altura del teu esdeveniment i funcionen quan hi ha més trànsit. Explica'ns la data i et diem com hi arribem. Sense compromís.",
        button_text: 'Parlem del teu web',
        open_modal: true,
      },
    ],
  },
};
