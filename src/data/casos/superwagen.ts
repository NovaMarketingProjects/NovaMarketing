/**
 * Contenido del caso de éxito de Superwagen (hardcodeado; sustituye a la entrada
 * pública de Strapi con el mismo slug en cada idioma).
 *
 * Superwagen: concesionario oficial Audi y Volkswagen en Sabadell y Sant Cugat del
 * Vallès. SEO local con páginas por ciudad y marca, SEO por modelos y Google Ads
 * para vehículos de ocasión. Diciembre 2023 – abril 2025, proyecto terminado.
 *
 * Fuentes de las cifras:
 *  - Semrush, diciembre 2023: tráfico orgánico 2.793 (marca 2.181), pago 5;
 *    keywords 3.297 (Top 3: 83, 4-10: 143, 11-20: 365, 21-50: 1.249,
 *    51-100: 1.422), 35 SERP features, 0 AI Overviews.
 *  - Semrush, abril 2025: tráfico orgánico 11.809 (marca 10.701), pago 2.792;
 *    keywords 3.303 (Top 3: 79, 4-10: 248, 11-20: 370, 21-50: 1.647,
 *    51-100: 756), 202 SERP features, 1 AI Overview.
 *  - Datos del cliente: leads desde SEO de 10-15 a más de 50 al mes; un 40 %
 *    menos de inversión publicitaria necesaria.
 * El +213 % del texto anterior se ha sustituido por las cifras de Semrush.
 */

// Portada (hero, tarjeta del listado y og:image): captura de la home, ruta relativa al sitio.
const COVER = '/casos/superwagen/superwagen-web.webp';

const G = (v: string) => `<td style="color:#15803d;background:#f0fdf4;font-weight:800">${v}</td>`;
const R = (v: string) => `<td style="color:#b91c1c;background:#fef2f2;font-weight:600">${v}</td>`;

export const SUPERWAGEN_CASE = {
  paths: { es: '/casos-exito/caso-de-exito-superwagen/', ca: '/ca/casos-exit/cas-d-exit-superwagen/' },
  cover: COVER,
  coverSize: { w: 1893, h: 727 },
  // Se mantienen las URL ya indexadas de la entrada de Strapi (distintas por idioma).
  slug: 'caso-de-exito-superwagen',
  slugs: { es: 'caso-de-exito-superwagen', ca: 'cas-d-exit-superwagen' },
  company: 'Superwagen',
  // Entrada equivalente en Strapi (pública): se sustituye por este contenido.
  strapiSlugs: { es: 'caso-de-exito-superwagen', ca: 'cas-d-exit-superwagen' },
  categorySlug: 'consultoria-seo',
  listingCategories: {
    es: [
      { name: 'Consultoría SEO', slug: 'consultoria-seo' },
      { name: 'Google Ads', slug: 'google-ads' },
      { name: 'SEO Local', slug: 'seo-local' },
      { name: 'Consultoría de marketing', slug: 'Consultoria-de-marketing' },
    ],
    ca: [
      { name: 'Consultoria SEO', slug: 'consultoria-seo' },
      { name: 'Google Ads', slug: 'google-ads' },
      { name: 'Seo Local', slug: 'seo-local' },
      { name: 'Consultoria de marketing', slug: 'consultoria-de-marketing' },
    ],
  },

  es: {
    metaTitle: 'Caso de éxito: Superwagen, +323 % de tráfico orgánico y más de 50 leads al mes',
    metaDescription:
      'SEO local, SEO por modelos y Google Ads para Superwagen, concesionario oficial Audi y Volkswagen en Sabadell y Sant Cugat: +323 % de tráfico orgánico, Top 10 +45 % y de 10-15 a más de 50 leads al mes con un 40 % menos de inversión publicitaria.',
    title: 'Caso de éxito: Superwagen, +323 % de tráfico orgánico y más de 50 leads al mes',
    description:
      'Alinear la visibilidad en Google de un concesionario oficial Audi y Volkswagen con su peso real en Sabadell y Sant Cugat: SEO local, SEO por modelos y Google Ads de vehículos de ocasión. Diciembre 2023 – abril 2025.',
    categories: ['SEO Local', 'SEO', 'Google Ads'],
    date: 'Abril 2025',
    facts: {
      period: "Diciembre 2023 – abril 2025",
      sector: { label: 'Marketing para concesionarios' },
      services: [
        { label: 'Posicionamiento SEO', href: '/agencia-seo-para-pymes/' },
        { label: 'Google Ads', href: '/agencia-sem-para-pymes/' },
        { label: 'Marketing digital en Sabadell', href: '/agencia-de-marketing-digital-en-sabadell/' },
        { label: 'Marketing digital en Sant Cugat', href: '/agencia-de-marketing-digital-en-sant-cugat/' },
      ],
      milestone: '+323 % de tráfico orgánico y de 10-15 a más de 50 leads al mes desde SEO',
      tech: 'Web del concesionario, Google Business Profile y Google Ads',
    },
    cardTitle: 'Caso de éxito: Superwagen, +323 % de tráfico orgánico y más de 50 leads al mes',
    cardDescription:
      'Concesionario oficial Audi y Volkswagen en Sabadell y Sant Cugat. SEO local, SEO por modelos y Google Ads de ocasión: +323 % de tráfico orgánico y de 10-15 a más de 50 leads al mes.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Superwagen</strong>, concesionario oficial de Audi y Volkswagen con presencia en Sabadell y Sant Cugat del Vallès, partía de una situación muy común en empresas consolidadas. Tenía marca, instalaciones y reputación, pero su visibilidad en Google no estaba alineada con su posicionamiento real en el mercado.</p>
<p>Eso provocaba una pérdida constante de oportunidades. Quien buscaba un concesionario, un modelo concreto o un servicio en la zona acababa en la competencia, simplemente porque estaba mejor posicionada. Y la captación dependía cada vez más de una publicidad de pago que salía cada vez más cara.</p>
<p>Entre diciembre de 2023 y abril de 2025 trabajamos tres frentes a la vez: <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> local y por modelos, y campañas de <a href="/agencia-sem-para-pymes/">Google Ads</a> centradas en vehículos de ocasión, con el conocimiento del mercado local que da trabajar como <a href="/agencia-de-marketing-digital-en-sabadell/">agencia de marketing digital en Sabadell</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados (diciembre 2023 → abril 2025)',
        items: [
          { value: '+323%', label: 'Tráfico orgánico mensual' },
          { value: '+50', label: 'Leads al mes desde SEO (antes 10-15)' },
          { value: '-40%', label: 'Inversión publicitaria necesaria' },
          { value: '+45%', label: 'Keywords en el Top 10 de Google' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué nos encontramos</h2>
<p>Antes de empezar, el ecosistema digital del concesionario tenía varios problemas que afectaban directamente a la captación de clientes:</p>
<ul>
  <li><strong>Escasa visibilidad en búsquedas locales.</strong> Búsquedas como "concesionario Audi Sabadell" o "taller Volkswagen Sant Cugat" no mostraban a Superwagen donde le correspondía.</li>
  <li><strong>Tráfico orgánico bajo y poco cualificado.</strong> 2.793 visitas orgánicas al mes en diciembre de 2023, la mayoría de gente que ya conocía la marca.</li>
  <li><strong>Modelos sin posicionamiento.</strong> Quien buscaba un Audi o un Volkswagen concreto no encontraba la web del concesionario.</li>
  <li><strong>Campañas de pago cada vez menos rentables.</strong> Una fuerte dependencia de la publicidad y una baja capacidad de generar contactos desde el canal orgánico.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Diciembre 2023',
        before_content:
          'Apenas visible en búsquedas locales, 2.793 visitas orgánicas al mes, 226 keywords en el Top 10, modelos sin posicionar, 10-15 contactos al mes desde SEO y fuerte dependencia de la publicidad.',
        after_label: 'Abril 2025',
        after_content:
          'Entre los primeros resultados en las búsquedas locales, 11.809 visitas orgánicas al mes, 327 keywords en el Top 10, páginas por modelo posicionadas, más de 50 contactos al mes desde SEO y un 40 % menos de inversión publicitaria necesaria.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Objetivos del proyecto</h2>
<p>La estrategia se planteó con un enfoque totalmente orientado a negocio. No se trataba de generar más tráfico sin criterio, sino de atraer usuarios con intención real de compra y convertir esa visibilidad en oportunidades comerciales.</p>
<table>
  <thead>
    <tr><th>Objetivo</th><th>Enfoque</th></tr>
  </thead>
  <tbody>
    <tr><td>Mejorar la visibilidad local</td><td>SEO geolocalizado por ciudad y por marca</td></tr>
    <tr><td>Captar tráfico cualificado</td><td>SEO por modelos de vehículo</td></tr>
    <tr><td>Reducir el coste por lead</td><td>Campañas de Google Ads centradas en vehículos de ocasión</td></tr>
  </tbody>
</table>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Auditoría y mapa de búsquedas',
            desc: 'Análisis de cómo se busca un concesionario en el Vallès: por marca y ciudad, por modelo, por servicio (taller, ocasión, financiación) y por intención de compra.',
          },
          {
            title: 'Google Business Profile',
            desc: 'Optimización completa de las fichas de Sabadell y Sant Cugat: categorías, servicios, horarios, fotos y reseñas, para aparecer en el mapa cuando alguien busca cerca.',
          },
          {
            title: 'Páginas por ciudad y marca',
            desc: 'Páginas específicas para Audi y Volkswagen en Sabadell y en Sant Cugat, con contenido adaptado a las búsquedas locales reales y mejoras técnicas para que Google las asocie a cada ubicación.',
          },
          {
            title: 'SEO por modelos',
            desc: 'Una página optimizada por cada modelo de Audi y Volkswagen, orientada a la compra, con keywords long tail de alta intención y enlazado interno entre modelo, marca y ciudad.',
          },
          {
            title: 'Google Ads de vehículos de ocasión',
            desc: 'En lugar de invertir más, redefinimos las campañas: promoción del stock real disponible, segmentación geográfica precisa, anuncios con las ofertas del mes y visibilidad inmediata.',
          },
          {
            title: 'SEO y SEM coordinados',
            desc: 'El SEO generaba tráfico constante y cualificado, y las campañas reforzaban la captación en los momentos clave. Ambos canales se planificaban juntos cada mes.',
          },
          {
            title: 'Medición y ajuste',
            desc: 'Seguimiento mensual de posiciones, llamadas, formularios y coste por contacto, con ajustes de páginas y campañas según los datos.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>SEO local, donde se decide la compra</h2>
<p>Gran parte de las búsquedas en automoción tienen una intención geográfica clara. Quien busca "concesionario Audi Sabadell" o "taller Volkswagen cerca" está en una fase avanzada de la decisión. Por eso el SEO local fue uno de los pilares: fichas de Google Business optimizadas, páginas por ciudad y marca, y contenido pensado para las búsquedas reales de cada zona, también en <a href="/agencia-de-marketing-digital-en-sant-cugat/">Sant Cugat</a>.</p>
<h2>SEO por modelos, tráfico que viene a comprar</h2>
<p>Uno de los cambios más importantes fue entender cómo busca el usuario. Muchas búsquedas incluyen directamente el coche que se quiere comprar, así que se desarrolló una estructura de catálogo donde cada modelo de Audi y Volkswagen tiene su propia página optimizada. El efecto fue directo en la calidad del tráfico: la mayoría de los nuevos usuarios llegaban con una necesidad concreta, no en fase de exploración.</p>
<h2>Google Ads, menos inversión y más contactos</h2>
<p>En lugar de aumentar el presupuesto, se redefinió la estrategia de <a href="/agencia-sem-para-pymes/">Google Ads</a>. El foco se puso en los vehículos de ocasión, donde la conversión es más directa y el retorno más rápido: stock real disponible, segmentación geográfica precisa y ofertas activas del mes. El resultado fue reducir un <strong>40 %</strong> la inversión publicitaria necesaria.</p>`,
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Los resultados en cifras</h2>
<p>Estos son los datos de Semrush al inicio y al final del proyecto:</p>
<table>
  <thead>
    <tr><th>Métrica (Semrush)</th><th style="color:#fca5a5">Diciembre 2023</th><th style="color:#86efac">Abril 2025</th></tr>
  </thead>
  <tbody>
    <tr><td>Tráfico orgánico mensual</td>${R('2.793')}${G('11.809')}</tr>
    <tr><td>De ellas, búsquedas de marca</td>${R('2.181')}${G('10.701')}</tr>
    <tr><td>Keywords en el Top 3</td>${R('83')}${G('79')}</tr>
    <tr><td>Keywords en posiciones 4 a 10</td>${R('143')}${G('248')}</tr>
    <tr><td>Keywords en el Top 10 (total)</td>${R('226')}${G('327')}</tr>
    <tr><td>Keywords en posiciones 51 a 100</td>${R('1.422')}${G('756')}</tr>
    <tr><td>Funcionalidades de la SERP</td>${R('35')}${G('202')}</tr>
  </tbody>
</table>
<p>Tres lecturas. El tráfico orgánico se multiplicó por cuatro, y el grueso del crecimiento son búsquedas de la propia marca: cada vez más gente busca "Superwagen" directamente, señal de que la visibilidad local y las campañas han hecho crecer el reconocimiento. Las keywords se movieron hacia arriba: las posiciones 51 a 100 se redujeron casi a la mitad mientras el Top 10 crecía un 45 %. Y la web pasó a ocupar mucho más espacio en la página de resultados, de 35 a 202 funcionalidades (mapa, fragmentos, imágenes).</p>`,
      },
      {
        __component: 'blocks.big-stat',
        value: '+50',
        label: 'contactos al mes desde el canal orgánico',
        description: 'Frente a 10-15 al inicio del proyecto, según los datos del concesionario, y con un 40 % menos de inversión publicitaria necesaria.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Más leads con menos inversión',
        content:
          'El SEO local y por modelos aportó tráfico constante y con intención de compra, y las campañas de ocasión captaban en los momentos clave. Juntos multiplicaron los contactos sin aumentar el presupuesto.',
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'Qué demuestra este caso',
        content:
          'El crecimiento digital no depende de invertir más, sino de trabajar mejor la estrategia. Cuando el SEO se alinea con cómo busca el cliente y la publicidad se centra en lo que convierte, los resultados llegan de forma sostenible.',
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tu concesionario no aparece cuando buscan en tu zona?',
        description:
          'Analizamos gratis tu visibilidad local, tus modelos y tus campañas, y te decimos dónde estás perdiendo clientes frente a la competencia. Sin compromiso.',
        button_text: 'Hablemos de tu concesionario',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: Superwagen, +323 % de trànsit orgànic i més de 50 leads al mes",
    metaDescription:
      "SEO local, SEO per models i Google Ads per a Superwagen, concessionari oficial Audi i Volkswagen a Sabadell i Sant Cugat: +323 % de trànsit orgànic, Top 10 +45 % i de 10-15 a més de 50 leads al mes amb un 40 % menys d'inversió publicitària.",
    title: "Cas d'èxit: Superwagen, +323 % de trànsit orgànic i més de 50 leads al mes",
    description:
      "Alinear la visibilitat a Google d'un concessionari oficial Audi i Volkswagen amb el seu pes real a Sabadell i Sant Cugat: SEO local, SEO per models i Google Ads de vehicles d'ocasió. Desembre 2023 – abril 2025.",
    categories: ['SEO Local', 'SEO', 'Google Ads'],
    date: 'Abril 2025',
    facts: {
      period: "Desembre 2023 – abril 2025",
      sector: { label: 'Màrqueting per a concessionaris' },
      services: [
        { label: 'Posicionament SEO', href: '/ca/agencia-seo-per-pimes/' },
        { label: 'Google Ads', href: '/ca/agencia-sem-per-pimes/' },
        { label: 'Màrqueting digital a Sabadell', href: '/ca/agencia-de-marketing-digital-a-sabadell/' },
        { label: 'Màrqueting digital a Sant Cugat', href: '/ca/agencia-de-marketing-digital-a-sant-cugat/' },
      ],
      milestone: '+323 % de trànsit orgànic i de 10-15 a més de 50 leads al mes des del SEO',
      tech: 'Web del concessionari, Google Business Profile i Google Ads',
    },
    cardTitle: "Cas d'èxit: Superwagen, +323 % de trànsit orgànic i més de 50 leads al mes",
    cardDescription:
      "Concessionari oficial Audi i Volkswagen a Sabadell i Sant Cugat. SEO local, SEO per models i Google Ads d'ocasió: +323 % de trànsit orgànic i de 10-15 a més de 50 leads al mes.",

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Superwagen</strong>, concessionari oficial d'Audi i Volkswagen amb presència a Sabadell i Sant Cugat del Vallès, partia d'una situació molt comuna en empreses consolidades. Tenia marca, instal·lacions i reputació, però la seva visibilitat a Google no estava alineada amb el seu posicionament real al mercat.</p>
<p>Això provocava una pèrdua constant d'oportunitats. Qui cercava un concessionari, un model concret o un servei a la zona acabava a la competència, simplement perquè estava més ben posicionada. I la captació depenia cada cop més d'una publicitat de pagament que sortia cada cop més cara.</p>
<p>Entre el desembre de 2023 i l'abril de 2025 vam treballar tres fronts alhora: <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> local i per models, i campanyes de <a href="/ca/agencia-sem-per-pimes/">Google Ads</a> centrades en vehicles d'ocasió, amb el coneixement del mercat local que dona treballar com a <a href="/ca/agencia-de-marketing-digital-a-sabadell/">agència de màrqueting digital a Sabadell</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats (desembre 2023 → abril 2025)',
        items: [
          { value: '+323%', label: 'Trànsit orgànic mensual' },
          { value: '+50', label: 'Leads al mes des del SEO (abans 10-15)' },
          { value: '-40%', label: 'Inversió publicitària necessària' },
          { value: '+45%', label: 'Keywords al Top 10 de Google' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què ens vam trobar</h2>
<p>Abans de començar, l'ecosistema digital del concessionari tenia diversos problemes que afectaven directament la captació de clients:</p>
<ul>
  <li><strong>Poca visibilitat a les cerques locals.</strong> Cerques com "concesionario Audi Sabadell" o "taller Volkswagen Sant Cugat" no mostraven Superwagen on li corresponia.</li>
  <li><strong>Trànsit orgànic baix i poc qualificat.</strong> 2.793 visites orgàniques al mes el desembre de 2023, la majoria de gent que ja coneixia la marca.</li>
  <li><strong>Models sense posicionament.</strong> Qui cercava un Audi o un Volkswagen concret no trobava el web del concessionari.</li>
  <li><strong>Campanyes de pagament cada cop menys rendibles.</strong> Una forta dependència de la publicitat i una capacitat baixa de generar contactes des del canal orgànic.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Desembre 2023',
        before_content:
          'Gairebé invisible a les cerques locals, 2.793 visites orgàniques al mes, 226 keywords al Top 10, models sense posicionar, 10-15 contactes al mes des del SEO i forta dependència de la publicitat.',
        after_label: 'Abril 2025',
        after_content:
          "Entre els primers resultats a les cerques locals, 11.809 visites orgàniques al mes, 327 keywords al Top 10, pàgines per model posicionades, més de 50 contactes al mes des del SEO i un 40 % menys d'inversió publicitària necessària.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Objectius del projecte</h2>
<p>L'estratègia es va plantejar amb un enfocament totalment orientat a negoci. No es tractava de generar més trànsit sense criteri, sinó d'atraure usuaris amb intenció real de compra i convertir aquesta visibilitat en oportunitats comercials.</p>
<table>
  <thead>
    <tr><th>Objectiu</th><th>Enfocament</th></tr>
  </thead>
  <tbody>
    <tr><td>Millorar la visibilitat local</td><td>SEO geolocalitzat per ciutat i per marca</td></tr>
    <tr><td>Captar trànsit qualificat</td><td>SEO per models de vehicle</td></tr>
    <tr><td>Reduir el cost per lead</td><td>Campanyes de Google Ads centrades en vehicles d'ocasió</td></tr>
  </tbody>
</table>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Auditoria i mapa de cerques',
            desc: "Anàlisi de com es cerca un concessionari al Vallès: per marca i ciutat, per model, per servei (taller, ocasió, finançament) i per intenció de compra.",
          },
          {
            title: 'Google Business Profile',
            desc: 'Optimització completa de les fitxes de Sabadell i Sant Cugat: categories, serveis, horaris, fotos i ressenyes, per aparèixer al mapa quan algú cerca a prop.',
          },
          {
            title: 'Pàgines per ciutat i marca',
            desc: 'Pàgines específiques per a Audi i Volkswagen a Sabadell i a Sant Cugat, amb contingut adaptat a les cerques locals reals i millores tècniques perquè Google les associï a cada ubicació.',
          },
          {
            title: 'SEO per models',
            desc: "Una pàgina optimitzada per a cada model d'Audi i Volkswagen, orientada a la compra, amb keywords long tail d'alta intenció i enllaçat intern entre model, marca i ciutat.",
          },
          {
            title: "Google Ads de vehicles d'ocasió",
            desc: "En lloc d'invertir més, vam redefinir les campanyes: promoció de l'estoc real disponible, segmentació geogràfica precisa, anuncis amb les ofertes del mes i visibilitat immediata.",
          },
          {
            title: 'SEO i SEM coordinats',
            desc: 'El SEO generava trànsit constant i qualificat, i les campanyes reforçaven la captació en els moments clau. Tots dos canals es planificaven junts cada mes.',
          },
          {
            title: 'Mesura i ajust',
            desc: 'Seguiment mensual de posicions, trucades, formularis i cost per contacte, amb ajustos de pàgines i campanyes segons les dades.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>SEO local, on es decideix la compra</h2>
<p>Gran part de les cerques en automoció tenen una intenció geogràfica clara. Qui cerca "concesionario Audi Sabadell" o "taller Volkswagen cerca" és en una fase avançada de la decisió. Per això el SEO local va ser un dels pilars: fitxes de Google Business optimitzades, pàgines per ciutat i marca, i contingut pensat per a les cerques reals de cada zona, també a <a href="/ca/agencia-de-marketing-digital-a-sant-cugat/">Sant Cugat</a>.</p>
<h2>SEO per models, trànsit que ve a comprar</h2>
<p>Un dels canvis més importants va ser entendre com cerca l'usuari. Moltes cerques inclouen directament el cotxe que es vol comprar, així que es va desenvolupar una estructura de catàleg on cada model d'Audi i Volkswagen té la seva pròpia pàgina optimitzada. L'efecte va ser directe en la qualitat del trànsit: la majoria dels nous usuaris arribaven amb una necessitat concreta, no en fase d'exploració.</p>
<h2>Google Ads, menys inversió i més contactes</h2>
<p>En lloc d'augmentar el pressupost, es va redefinir l'estratègia de <a href="/ca/agencia-sem-per-pimes/">Google Ads</a>. El focus es va posar en els vehicles d'ocasió, on la conversió és més directa i el retorn més ràpid: estoc real disponible, segmentació geogràfica precisa i ofertes actives del mes. El resultat va ser reduir un <strong>40 %</strong> la inversió publicitària necessària.</p>`,
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Els resultats en xifres</h2>
<p>Aquestes són les dades de Semrush a l'inici i al final del projecte:</p>
<table>
  <thead>
    <tr><th>Mètrica (Semrush)</th><th style="color:#fca5a5">Desembre 2023</th><th style="color:#86efac">Abril 2025</th></tr>
  </thead>
  <tbody>
    <tr><td>Trànsit orgànic mensual</td>${R('2.793')}${G('11.809')}</tr>
    <tr><td>D'aquestes, cerques de marca</td>${R('2.181')}${G('10.701')}</tr>
    <tr><td>Keywords al Top 3</td>${R('83')}${G('79')}</tr>
    <tr><td>Keywords en posicions 4 a 10</td>${R('143')}${G('248')}</tr>
    <tr><td>Keywords al Top 10 (total)</td>${R('226')}${G('327')}</tr>
    <tr><td>Keywords en posicions 51 a 100</td>${R('1.422')}${G('756')}</tr>
    <tr><td>Funcionalitats de la SERP</td>${R('35')}${G('202')}</tr>
  </tbody>
</table>
<p>Tres lectures. El trànsit orgànic es va multiplicar per quatre, i el gruix del creixement són cerques de la mateixa marca: cada cop més gent cerca "Superwagen" directament, senyal que la visibilitat local i les campanyes han fet créixer el reconeixement. Les keywords es van moure cap amunt: les posicions 51 a 100 es van reduir gairebé a la meitat mentre el Top 10 creixia un 45 %. I el web va passar a ocupar molt més espai a la pàgina de resultats, de 35 a 202 funcionalitats (mapa, fragments, imatges).</p>`,
      },
      {
        __component: 'blocks.big-stat',
        value: '+50',
        label: 'contactes al mes des del canal orgànic',
        description: "Davant de 10-15 a l'inici del projecte, segons les dades del concessionari, i amb un 40 % menys d'inversió publicitària necessària.",
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: 'Més leads amb menys inversió',
        content:
          "El SEO local i per models va aportar trànsit constant i amb intenció de compra, i les campanyes d'ocasió captaven en els moments clau. Junts van multiplicar els contactes sense augmentar el pressupost.",
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'Què demostra aquest cas',
        content:
          "El creixement digital no depèn d'invertir més, sinó de treballar millor l'estratègia. Quan el SEO s'alinea amb com cerca el client i la publicitat se centra en el que converteix, els resultats arriben de manera sostenible.",
      },
      {
        __component: 'blocks.cta',
        headline: 'El teu concessionari no apareix quan cerquen a la teva zona?',
        description:
          'Analitzem gratis la teva visibilitat local, els teus models i les teves campanyes, i et diem on estàs perdent clients davant la competència. Sense compromís.',
        button_text: 'Parlem del teu concessionari',
        open_modal: true,
      },
    ],
  },
};
