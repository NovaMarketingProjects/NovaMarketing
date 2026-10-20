/**
 * Contenido del caso de éxito de Villazón Mercé Abogados (hardcodeado, no viene de Strapi).
 *
 * Bufete penalista en Barcelona. Web antigua anticuada, lenta, sin páginas por
 * delito y sin visibilidad en Google. Web nueva a medida en Next.js (ES + CA)
 * lanzada a mediados de agosto de 2026, con SEO, SEO local y Google Ads para
 * urgencias penales en paralelo. Contenido redactado por Nova con revisión del
 * abogado. Proyecto en curso.
 *
 * Fuentes de las cifras:
 *  - Semrush, 19 oct 2026: 191 keywords (Top 3: 1, 4-10: 10, 11-20: 31, 21-50: 88,
 *    51-100: 58), 2 apariciones en AI Overviews, 1 SERP feature. Antes de
 *    agosto de 2026: 0 keywords. Tráfico orgánico 53/mes (no se publica, es
 *    demasiado pronto para que sea significativo).
 *  - Posiciones (Semrush): abogado apropiación indebida barcelona 3; abogados
 *    especialistas en delitos sexuales barcelona 4; asesinato abogados barcelona
 *    5; 520 lecrim 7 (blog); abogado blanqueo fraude barcelona 9 (+AI); bufete
 *    homicidio 9 (+AI); advocat tràfic de drogues barcelona 9 (CA); despacho
 *    abogados delito societario 10; abogado falsedad barcelona 10; abogado
 *    juicio rápido barcelona 10; administración desleal abogado barcelona 10;
 *    violencia doméstica abogados barcelona en el pack local.
 *  - PageSpeed Insights (oct 2026). Escritorio: 98 / 93 / 96 / 100, FCP 0,3 s,
 *    LCP 0,6 s, TBT 10 ms, CLS 0,001, SI 1,6 s. Móvil: 92 / 93 / 96 / 100,
 *    FCP 1,1 s, LCP 3,2 s, TBT 50 ms, CLS 0,011, SI 3,7 s.
 *
 * Leads: "primeras consultas desde la web en las primeras semanas", sin cifra.
 * Google Ads: mencionado como complemento para urgencias, sin cifras.
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  keywords: '/casos/villazon-merce-abogados/keywords-villazon-merce-semrush.webp',
  posiciones: '/casos/villazon-merce-abogados/posiciones-villazon-merce-semrush.webp',
  psEscritorio: '/casos/villazon-merce-abogados/pagespeed-escritorio-villazon-merce.webp',
  psMovil: '/casos/villazon-merce-abogados/pagespeed-movil-villazon-merce.webp',
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/villazon-merce-abogados/villazon-merce-abogados-web.webp';

const G = (v: string) => `<td style="color:#15803d;background:#f0fdf4;font-weight:800">${v}</td>`;
const psTable = (h: [string, string, string], rows: [string, string, string][]) => `<table>
  <thead>
    <tr><th>${h[0]}</th><th style="color:#86efac">${h[1]}</th><th style="color:#86efac">${h[2]}</th></tr>
  </thead>
  <tbody>
${rows.map((r) => `    <tr><td>${r[0]}</td>${G(r[1])}${G(r[2])}</tr>`).join('\n')}
  </tbody>
</table>`;
const PS_ES: [string, string, string][] = [
  ['Rendimiento', '92', '98'],
  ['First Contentful Paint (FCP)', '1,1 s', '0,3 s'],
  ['Largest Contentful Paint (LCP)', '3,2 s', '0,6 s'],
  ['Total Blocking Time (TBT)', '50 ms', '10 ms'],
  ['Cumulative Layout Shift (CLS)', '0,011', '0,001'],
  ['Accesibilidad', '93', '93'],
  ['Prácticas recomendadas', '96', '96'],
  ['SEO', '100', '100'],
];
const PS_CA: [string, string, string][] = [
  ['Rendiment', '92', '98'],
  ['First Contentful Paint (FCP)', '1,1 s', '0,3 s'],
  ['Largest Contentful Paint (LCP)', '3,2 s', '0,6 s'],
  ['Total Blocking Time (TBT)', '50 ms', '10 ms'],
  ['Cumulative Layout Shift (CLS)', '0,011', '0,001'],
  ['Accessibilitat', '93', '93'],
  ['Pràctiques recomanades', '96', '96'],
  ['SEO', '100', '100'],
];

export const VILLAZON_MERCE_CASE = {
  paths: { es: '/casos-exito/villazon-merce-abogados/', ca: '/ca/casos-exit/villazon-merce-abogados/' },
  cover: COVER,
  coverSize: { w: 1896, h: 904 },
  slug: 'villazon-merce-abogados',
  company: 'Villazón Mercé Abogados',
  categorySlug: 'diseno-web',
  // Páginas de sector en las que aparece (slugs de SECTOR_SLUGS de esas páginas).
  sectorSlugs: ['abogados'],
  listingCategories: {
    es: [
      { name: 'Diseño web', slug: 'diseno-web' },
      { name: 'SEO', slug: 'seo' },
      { name: 'SEO Local', slug: 'seo-local' },
      { name: 'Google Ads', slug: 'google-ads' },
    ],
    ca: [
      { name: 'Disseny web', slug: 'disseny-web' },
      { name: 'SEO', slug: 'seo' },
      { name: 'Seo Local', slug: 'seo-local' },
      { name: 'Google Ads', slug: 'google-ads' },
    ],
  },

  es: {
    metaTitle: 'Caso de éxito: Villazón Mercé Abogados, 191 keywords en dos meses con una web nueva',
    metaDescription:
      'Diseñamos y desarrollamos a medida la web de Villazón Mercé Abogados, bufete penalista en Barcelona: Next.js con 98 en PageSpeed, ES + CA, una página por delito, SEO local y Google Ads para urgencias. 191 keywords en dos meses.',
    title: 'Caso de éxito: Villazón Mercé Abogados, 191 keywords en dos meses con una web nueva',
    description:
      'Sustituir la web anticuada de un bufete penalista de Barcelona por una web a medida que transmita confianza y posicione cada delito, con SEO local y Google Ads para urgencias. Lanzamiento agosto 2026, en curso.',
    categories: ['Diseño web', 'SEO', 'SEO Local', 'Google Ads'],
    date: 'Octubre 2026',
    facts: {
      sectors: [{ label: 'Abogados', href: '/agencia-abogados/' }],
      services: [
        { label: 'Diseño y desarrollo web', href: '/diseno-web-para-pymes/' },
        { label: 'Posicionamiento SEO', href: '/agencia-seo-para-pymes/' },
        { label: 'Google Ads', href: '/agencia-sem-para-pymes/' },
        { label: 'Marketing digital en Barcelona', href: '/agencia-de-marketing-digital-en-barcelona/' },
      ],
      milestone: 'De 0 a 191 keywords en dos meses y 98 en PageSpeed',
      tech: 'Next.js a medida, ES + CA',
    },
    cardTitle: 'Caso de éxito: Villazón Mercé Abogados, 191 keywords en dos meses con una web nueva',
    cardDescription:
      'Bufete penalista en Barcelona. Web a medida en Next.js, una página por delito, SEO local y Google Ads para urgencias: de 0 a 191 keywords en dos meses y 98 en PageSpeed.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Villazón Mercé Abogados</strong> es un bufete de derecho penal en Barcelona dirigido por Jordi Villazón Mercé. Defensa en todo tipo de procedimientos penales: delitos económicos, blanqueo, delitos sexuales, homicidio, tráfico de drogas, violencia doméstica, juicios rápidos y asistencia al detenido las 24 horas.</p>
<p>El despacho tenía una web, pero no le servía. El diseño era anticuado y no transmitía la confianza que necesita alguien que acaba de ser detenido o citado a declarar. No tenía una página por delito, solo una lista genérica de servicios, así que Google no la mostraba para ninguna búsqueda concreta. Era lenta y funcionaba mal en el móvil, que es desde donde llega casi toda urgencia penal. Y el resultado era el que cabía esperar: <strong>cero keywords posicionadas</strong>.</p>
<p>En derecho penal el cliente decide en minutos, con miedo y desde el móvil. La web tenía que resolver eso. El encargo fue una web nueva a medida con el SEO integrado desde el primer día, presencia local en Barcelona y campañas de Google Ads para las urgencias, que no esperan a que el SEO madure. Es el tipo de proyecto para el que tenemos una propuesta específica como <a href="/agencia-abogados/">agencia de marketing para abogados</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados a los dos meses del lanzamiento (agosto → 19 de octubre de 2026)',
        items: [
          { value: '191', label: 'Keywords posicionadas, partiendo de cero' },
          { value: '11', label: 'Búsquedas en el Top 10 de Google' },
          { value: '98', label: 'PageSpeed en escritorio (92 en móvil)' },
          { value: '2', label: 'Citas en las respuestas de IA de Google' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué tenía que hacer la web</h2>
<p>Antes de diseñar definimos con el abogado qué tenía que conseguir la web, porque en penal no vale una web de despacho "general":</p>
<ul>
  <li><strong>Transmitir confianza en segundos.</strong> Tono sobrio, el nombre del abogado visible, teléfono y WhatsApp siempre a la vista, y un botón de asistencia urgente 24 horas.</li>
  <li><strong>Una página por delito.</strong> Blanqueo, apropiación indebida, delitos sexuales, homicidio, tráfico de drogas, falsedad documental, delitos societarios, juicio rápido… Cada área penal con su página, porque así busca quien tiene un problema concreto.</li>
  <li><strong>Buscador de especialidad.</strong> Un buscador en la portada ("alcoholemia, estafa, robo…") que lleva directo a la página del delito.</li>
  <li><strong>Español y catalán.</strong> Dos versiones completas con hreflang, porque en Barcelona una parte de las búsquedas se hace en catalán.</li>
  <li><strong>Rápida en móvil.</strong> Quien llama desde una comisaría no espera a que cargue una web.</li>
  <li><strong>Blog con las dudas reales.</strong> Qué hacer si te detiene la policía, qué es un juicio rápido, cuándo prescribe un delito. Contenido que capta a quien busca información antes de buscar abogado.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Antes (julio 2026)',
        before_content:
          'Web anticuada, lenta y mal en móvil, con una lista genérica de servicios y sin páginas por delito. Cero keywords posicionadas y ninguna consulta desde Google.',
        after_label: 'Octubre 2026',
        after_content:
          'Web a medida en Next.js, ES + CA, con 98 en escritorio y 92 en móvil en PageSpeed, una página por área penal, buscador de especialidad, 191 keywords posicionadas, 11 en el Top 10, pack local de Google y campañas de Ads para urgencias.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>La estrategia SEO se definió antes del diseño, para que la web naciera con la estructura que Google y el cliente necesitan. Estas fueron las fases:</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Estrategia y arquitectura SEO',
            desc: 'Estudio de las búsquedas penales en Barcelona, por delito y por intención (urgencia, información, contratación), y definición de la arquitectura: una página por área penal, blog y versión en catalán.',
          },
          {
            title: 'Diseño pensado para la confianza',
            desc: 'Verde oscuro y dorado, tipografía serif para el nombre del despacho, fotografía de la justicia y jerarquía clara: quién es el abogado, qué hace y cómo contactar ahora. Botones de asistencia urgente y WhatsApp en la cabecera y fijos en móvil.',
          },
          {
            title: 'Desarrollo a medida en Next.js',
            desc: 'Sin WordPress ni plantillas: desarrollo propio, páginas estáticas, imágenes optimizadas y buscador de especialidades. Es lo que da el 98 en escritorio y el 92 en móvil.',
          },
          {
            title: 'Contenido por delito, con revisión jurídica',
            desc: 'Redactamos cada página de área penal y los artículos del blog respondiendo a lo que pregunta el cliente, y el abogado revisa cada texto para que sea jurídicamente exacto. El artículo sobre el artículo 520 de la LECrim ya está en la primera página.',
          },
          {
            title: 'SEO local en Barcelona',
            desc: 'Optimización de la ficha de Google Business, datos de contacto coherentes en toda la web y páginas orientadas a las búsquedas "abogado + delito + Barcelona". Ya aparece en el pack local de Google para "violencia doméstica abogados barcelona".',
          },
          {
            title: 'Google Ads para urgencias',
            desc: 'Campañas de búsqueda para las consultas que no pueden esperar al SEO: detenciones, citaciones, asistencia urgente. Con horario ampliado y llamada directa desde el anuncio, para captar desde el primer día.',
          },
          {
            title: 'Seguimiento quincenal',
            desc: 'Revisión de posiciones, rastreo, llamadas y formularios cada dos semanas durante el arranque, con nuevas páginas y artículos según lo que muestran los datos.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocidad desde el primer día</h2>
<p>Una web de urgencias penales tiene que cargar al instante en móvil. Estos son los datos de PageSpeed Insights de la web nueva en octubre de 2026, en móvil y en escritorio:</p>
${psTable(['PageSpeed Insights', 'Móvil', 'Escritorio'], PS_ES)}
<p>Esto es parte del trabajo de <a href="/diseno-web-para-pymes/">diseño y desarrollo web</a> que hacemos en cualquier proyecto: la velocidad se decide eligiendo bien la tecnología, no optimizando al final.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psMovil, local: true, alternativeText: 'PageSpeed Insights de villazonmerceabogados.com en móvil: 92 de rendimiento, 93 de accesibilidad, 96 en prácticas recomendadas y 100 en SEO' },
        caption: 'PageSpeed Insights en móvil, octubre de 2026: 92 de rendimiento y 100 en SEO.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: '98 en escritorio y 92 en móvil, con 100 en SEO',
        content:
          'Contenido principal visible en 0,6 segundos en escritorio y 10 milisegundos de bloqueo. La base técnica perfecta para que las páginas de cada delito empiecen a posicionar.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De cero a 191 keywords en dos meses</h2>
<p>La web se lanzó a mediados de agosto de 2026 sin una sola keyword. El 19 de octubre, Semrush detecta 191 búsquedas en las que la web aparece en Google, y la curva sigue subiendo semana a semana. Así se reparten:</p>
<table>
  <thead>
    <tr><th>Posición en Google (19 de octubre de 2026)</th><th>Keywords</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td><strong>1</strong></td></tr>
    <tr><td>Posiciones 4 a 10</td><td><strong>10</strong></td></tr>
    <tr><td>Posiciones 11 a 20</td><td>31</td></tr>
    <tr><td>Posiciones 21 a 50</td><td>88</td></tr>
    <tr><td>Posiciones 51 a 100</td><td>58</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>191</strong></td></tr>
    <tr><td>Citas en respuestas de IA (AI Overviews)</td><td><strong>2</strong></td></tr>
  </tbody>
</table>
<p>Lo más interesante de este reparto es que 119 keywords están entre la posición 11 y la 50: es la "sala de espera" del Top 10, donde están las páginas nuevas antes de subir, y es lo que trabajamos ahora.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.keywords, local: true, alternativeText: 'Gráfica de Semrush con la evolución de las keywords orgánicas de villazonmerceabogados.com de agosto a octubre de 2026' },
        caption: 'Keywords orgánicas por rango de posición (Semrush). Antes de agosto de 2026 la web antigua no posicionaba para ninguna búsqueda.',
      },
      {
        __component: 'blocks.big-stat',
        value: '191',
        label: 'keywords posicionadas en dos meses',
        description: 'De ninguna presencia en Google en julio de 2026 a 191 búsquedas en las que aparece la web el 19 de octubre, según Semrush.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Las búsquedas que ya traen consultas</h2>
<p>Dos meses es muy poco tiempo en SEO, y aun así las páginas de delito ya están en la primera página de Google para búsquedas con intención clara de contratar en Barcelona:</p>
<table>
  <thead>
    <tr><th>Búsqueda</th><th>Posición</th><th>Página que posiciona</th></tr>
  </thead>
  <tbody>
    <tr><td>abogado apropiación indebida barcelona</td><td><strong>3</strong></td><td>Delitos económicos</td></tr>
    <tr><td>abogados especialistas en delitos sexuales barcelona</td><td><strong>4</strong></td><td>Delitos sexuales</td></tr>
    <tr><td>asesinato abogados barcelona</td><td><strong>5</strong></td><td>Homicidio</td></tr>
    <tr><td>520 lecrim</td><td><strong>7</strong></td><td>Blog: qué hacer si me detiene la policía</td></tr>
    <tr><td>abogado blanqueo fraude barcelona</td><td><strong>9</strong></td><td>Blanqueo de capitales (citada también en la respuesta de IA)</td></tr>
    <tr><td>bufete homicidio</td><td><strong>9</strong></td><td>Homicidio (citada también en la respuesta de IA)</td></tr>
    <tr><td>advocat tràfic de drogues barcelona</td><td><strong>9</strong></td><td>Tràfic de drogues (versión en catalán)</td></tr>
    <tr><td>despacho abogados delito societario</td><td>10</td><td>Delitos societarios</td></tr>
    <tr><td>abogado falsedad barcelona</td><td>10</td><td>Falsedad documental</td></tr>
    <tr><td>abogado juicio rápido barcelona</td><td>10</td><td>Juicio rápido</td></tr>
    <tr><td>violencia doméstica abogados barcelona</td><td><strong>Pack local</strong></td><td>Ficha de Google Business</td></tr>
  </tbody>
</table>
<p>Fíjate en tres cosas. Posiciona la página de cada delito, no la home, que es exactamente lo que buscábamos con la arquitectura. Posiciona también la versión en catalán. Y el blog ya capta a quien busca información antes de buscar abogado, como el artículo sobre el artículo 520 de la Ley de Enjuiciamiento Criminal.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.posiciones, local: true, alternativeText: 'Listado de Semrush con las posiciones de villazonmerceabogados.com en Google para búsquedas de abogado penalista en Barcelona' },
        caption: 'Posiciones en Google a 19 de octubre de 2026 (Semrush): páginas de delito en el Top 10 y pack local para "violencia doméstica abogados barcelona".',
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'SEO, SEO local y Ads, cada uno a su ritmo',
        content:
          'Las campañas de Google Ads captan las urgencias desde el primer día. La ficha de Google Business trae las búsquedas "abogados barcelona" de la zona. Y el SEO de cada página de delito va ganando posiciones semana a semana. Juntos cubren todo el recorrido del cliente.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Y lo que importa, las primeras consultas</h2>
<p>Las primeras consultas desde la web llegaron en las primeras semanas tras el lanzamiento, por teléfono, WhatsApp y formulario, con el apoyo de las campañas de <a href="/agencia-sem-para-pymes/">Google Ads</a> mientras el <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> coge velocidad.</p>
<p>El proyecto sigue en curso: ahora el trabajo se centra en empujar las 119 keywords que están entre la posición 11 y la 50 hacia la primera página, ampliar el blog con las dudas más buscadas y reforzar la presencia local en Barcelona como <a href="/agencia-de-marketing-digital-en-barcelona/">agencia de marketing digital en Barcelona</a> que conoce el mercado.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tu despacho no aparece en Google?',
        description:
          'Diseñamos webs para abogados con el SEO pensado desde el primer día y campañas para las consultas que no pueden esperar. Cuéntanos tu caso y te decimos cómo lo haríamos. Sin compromiso.',
        button_text: 'Hablemos de tu despacho',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: Villazón Mercé Abogados, 191 keywords en dos mesos amb un web nou",
    metaDescription:
      "Dissenyem i desenvolupem a mida el web de Villazón Mercé Abogados, bufet penalista a Barcelona: Next.js amb 98 a PageSpeed, ES + CA, una pàgina per delicte, SEO local i Google Ads per a urgències. 191 keywords en dos mesos.",
    title: "Cas d'èxit: Villazón Mercé Abogados, 191 keywords en dos mesos amb un web nou",
    description:
      "Substituir el web antiquat d'un bufet penalista de Barcelona per un web a mida que transmeti confiança i posicioni cada delicte, amb SEO local i Google Ads per a urgències. Llançament agost 2026, en curs.",
    categories: ['Disseny web', 'SEO', 'SEO Local', 'Google Ads'],
    date: 'Octubre 2026',
    facts: {
      sectors: [{ label: 'Advocats', href: '/ca/agencia-advocats/' }],
      services: [
        { label: 'Disseny i desenvolupament web', href: '/ca/disseny-web-per-pimes/' },
        { label: 'Posicionament SEO', href: '/ca/agencia-seo-per-pimes/' },
        { label: 'Google Ads', href: '/ca/agencia-sem-per-pimes/' },
        { label: 'Màrqueting digital a Barcelona', href: '/ca/agencia-de-marketing-digital-a-barcelona/' },
      ],
      milestone: 'De 0 a 191 keywords en dos mesos i 98 a PageSpeed',
      tech: 'Next.js a mida, ES + CA',
    },
    cardTitle: "Cas d'èxit: Villazón Mercé Abogados, 191 keywords en dos mesos amb un web nou",
    cardDescription:
      'Bufet penalista a Barcelona. Web a mida en Next.js, una pàgina per delicte, SEO local i Google Ads per a urgències: de 0 a 191 keywords en dos mesos i 98 a PageSpeed.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Villazón Mercé Abogados</strong> és un bufet de dret penal a Barcelona dirigit per Jordi Villazón Mercé. Defensa en tota mena de procediments penals: delictes econòmics, blanqueig, delictes sexuals, homicidi, tràfic de drogues, violència domèstica, judicis ràpids i assistència al detingut les 24 hores.</p>
<p>El despatx tenia un web, però no li servia. El disseny era antiquat i no transmetia la confiança que necessita algú que acaba de ser detingut o citat a declarar. No tenia una pàgina per delicte, només una llista genèrica de serveis, així que Google no el mostrava per a cap cerca concreta. Era lent i funcionava malament al mòbil, que és des d'on arriba gairebé tota urgència penal. I el resultat era el que calia esperar: <strong>zero keywords posicionades</strong>.</p>
<p>En dret penal el client decideix en minuts, amb por i des del mòbil. El web havia de resoldre això. L'encàrrec va ser un web nou a mida amb el SEO integrat des del primer dia, presència local a Barcelona i campanyes de Google Ads per a les urgències, que no esperen que el SEO maduri. És el tipus de projecte per al qual tenim una proposta específica com a <a href="/ca/agencia-advocats/">agència de màrqueting per a advocats</a>.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: "Resultats als dos mesos del llançament (agost → 19 d'octubre de 2026)",
        items: [
          { value: '191', label: 'Keywords posicionades, partint de zero' },
          { value: '11', label: 'Cerques al Top 10 de Google' },
          { value: '98', label: 'PageSpeed en escriptori (92 en mòbil)' },
          { value: '2', label: "Cites a les respostes d'IA de Google" },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què havia de fer el web</h2>
<p>Abans de dissenyar vam definir amb l'advocat què havia d'aconseguir el web, perquè en penal no serveix un web de despatx "general":</p>
<ul>
  <li><strong>Transmetre confiança en segons.</strong> To sobri, el nom de l'advocat visible, telèfon i WhatsApp sempre a la vista, i un botó d'assistència urgent 24 hores.</li>
  <li><strong>Una pàgina per delicte.</strong> Blanqueig, apropiació indeguda, delictes sexuals, homicidi, tràfic de drogues, falsedat documental, delictes societaris, judici ràpid… Cada àrea penal amb la seva pàgina, perquè així cerca qui té un problema concret.</li>
  <li><strong>Cercador d'especialitat.</strong> Un cercador a la portada ("alcoholèmia, estafa, robatori…") que porta directe a la pàgina del delicte.</li>
  <li><strong>Castellà i català.</strong> Dues versions completes amb hreflang, perquè a Barcelona una part de les cerques es fa en català.</li>
  <li><strong>Ràpid al mòbil.</strong> Qui truca des d'una comissaria no espera que carregui un web.</li>
  <li><strong>Blog amb els dubtes reals.</strong> Què fer si et deté la policia, què és un judici ràpid, quan prescriu un delicte. Contingut que capta qui cerca informació abans de cercar advocat.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Abans (juliol 2026)',
        before_content:
          'Web antiquat, lent i malament al mòbil, amb una llista genèrica de serveis i sense pàgines per delicte. Zero keywords posicionades i cap consulta des de Google.',
        after_label: 'Octubre 2026',
        after_content:
          "Web a mida en Next.js, ES + CA, amb 98 en escriptori i 92 en mòbil a PageSpeed, una pàgina per àrea penal, cercador d'especialitat, 191 keywords posicionades, 11 al Top 10, pack local de Google i campanyes d'Ads per a urgències.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>L'estratègia SEO es va definir abans del disseny, perquè el web nasqués amb l'estructura que Google i el client necessiten. Aquestes van ser les fases:</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Estratègia i arquitectura SEO',
            desc: "Estudi de les cerques penals a Barcelona, per delicte i per intenció (urgència, informació, contractació), i definició de l'arquitectura: una pàgina per àrea penal, blog i versió en català.",
          },
          {
            title: 'Disseny pensat per a la confiança',
            desc: "Verd fosc i daurat, tipografia serif per al nom del despatx, fotografia de la justícia i jerarquia clara: qui és l'advocat, què fa i com contactar ara. Botons d'assistència urgent i WhatsApp a la capçalera i fixos al mòbil.",
          },
          {
            title: 'Desenvolupament a mida en Next.js',
            desc: "Sense WordPress ni plantilles: desenvolupament propi, pàgines estàtiques, imatges optimitzades i cercador d'especialitats. És el que dona el 98 en escriptori i el 92 en mòbil.",
          },
          {
            title: 'Contingut per delicte, amb revisió jurídica',
            desc: "Vam redactar cada pàgina d'àrea penal i els articles del blog responent al que pregunta el client, i l'advocat revisa cada text perquè sigui jurídicament exacte. L'article sobre l'article 520 de la LECrim ja és a la primera pàgina.",
          },
          {
            title: 'SEO local a Barcelona',
            desc: 'Optimització de la fitxa de Google Business, dades de contacte coherents a tot el web i pàgines orientades a les cerques "abogado + delicte + Barcelona". Ja apareix al pack local de Google per a "violencia doméstica abogados barcelona".',
          },
          {
            title: 'Google Ads per a urgències',
            desc: "Campanyes de cerca per a les consultes que no poden esperar el SEO: detencions, citacions, assistència urgent. Amb horari ampliat i trucada directa des de l'anunci, per captar des del primer dia.",
          },
          {
            title: 'Seguiment quinzenal',
            desc: "Revisió de posicions, rastreig, trucades i formularis cada dues setmanes durant l'arrencada, amb noves pàgines i articles segons el que mostren les dades.",
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Velocitat des del primer dia</h2>
<p>Un web d'urgències penals ha de carregar a l'instant al mòbil. Aquestes són les dades de PageSpeed Insights del web nou l'octubre de 2026, en mòbil i en escriptori:</p>
${psTable(['PageSpeed Insights', 'Mòbil', 'Escriptori'], PS_CA)}
<p>Això forma part de la feina de <a href="/ca/disseny-web-per-pimes/">disseny i desenvolupament web</a> que fem en qualsevol projecte: la velocitat es decideix triant bé la tecnologia, no optimitzant al final.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.psMovil, local: true, alternativeText: "PageSpeed Insights de villazonmerceabogados.com en mòbil: 92 de rendiment, 93 d'accessibilitat, 96 en pràctiques recomanades i 100 en SEO" },
        caption: 'PageSpeed Insights en mòbil, octubre de 2026: 92 de rendiment i 100 en SEO.',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: '98 en escriptori i 92 en mòbil, amb 100 en SEO',
        content:
          'Contingut principal visible en 0,6 segons en escriptori i 10 mil·lisegons de bloqueig. La base tècnica perfecta perquè les pàgines de cada delicte comencin a posicionar.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De zero a 191 keywords en dos mesos</h2>
<p>El web es va llançar a mitjan agost de 2026 sense cap keyword. El 19 d'octubre, Semrush detecta 191 cerques en què el web apareix a Google, i la corba continua pujant setmana a setmana. Així es reparteixen:</p>
<table>
  <thead>
    <tr><th>Posició a Google (19 d'octubre de 2026)</th><th>Keywords</th></tr>
  </thead>
  <tbody>
    <tr><td>Top 3</td><td><strong>1</strong></td></tr>
    <tr><td>Posicions 4 a 10</td><td><strong>10</strong></td></tr>
    <tr><td>Posicions 11 a 20</td><td>31</td></tr>
    <tr><td>Posicions 21 a 50</td><td>88</td></tr>
    <tr><td>Posicions 51 a 100</td><td>58</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>191</strong></td></tr>
    <tr><td>Cites a respostes d'IA (AI Overviews)</td><td><strong>2</strong></td></tr>
  </tbody>
</table>
<p>El més interessant d'aquest repartiment és que 119 keywords són entre la posició 11 i la 50: és la "sala d'espera" del Top 10, on són les pàgines noves abans de pujar, i és el que treballem ara.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.keywords, local: true, alternativeText: "Gràfica de Semrush amb l'evolució de les keywords orgàniques de villazonmerceabogados.com d'agost a octubre de 2026" },
        caption: "Keywords orgàniques per rang de posició (Semrush). Abans d'agost de 2026 el web antic no posicionava per a cap cerca.",
      },
      {
        __component: 'blocks.big-stat',
        value: '191',
        label: 'keywords posicionades en dos mesos',
        description: "De cap presència a Google el juliol de 2026 a 191 cerques en què apareix el web el 19 d'octubre, segons Semrush.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Les cerques que ja porten consultes</h2>
<p>Dos mesos és molt poc temps en SEO, i tot i així les pàgines de delicte ja són a la primera pàgina de Google per a cerques amb intenció clara de contractar a Barcelona:</p>
<table>
  <thead>
    <tr><th>Cerca</th><th>Posició</th><th>Pàgina que posiciona</th></tr>
  </thead>
  <tbody>
    <tr><td>abogado apropiación indebida barcelona</td><td><strong>3</strong></td><td>Delictes econòmics</td></tr>
    <tr><td>abogados especialistas en delitos sexuales barcelona</td><td><strong>4</strong></td><td>Delictes sexuals</td></tr>
    <tr><td>asesinato abogados barcelona</td><td><strong>5</strong></td><td>Homicidi</td></tr>
    <tr><td>520 lecrim</td><td><strong>7</strong></td><td>Blog: què fer si em deté la policia</td></tr>
    <tr><td>abogado blanqueo fraude barcelona</td><td><strong>9</strong></td><td>Blanqueig de capitals (citada també a la resposta d'IA)</td></tr>
    <tr><td>bufete homicidio</td><td><strong>9</strong></td><td>Homicidi (citada també a la resposta d'IA)</td></tr>
    <tr><td>advocat tràfic de drogues barcelona</td><td><strong>9</strong></td><td>Tràfic de drogues (versió en català)</td></tr>
    <tr><td>despacho abogados delito societario</td><td>10</td><td>Delictes societaris</td></tr>
    <tr><td>abogado falsedad barcelona</td><td>10</td><td>Falsedat documental</td></tr>
    <tr><td>abogado juicio rápido barcelona</td><td>10</td><td>Judici ràpid</td></tr>
    <tr><td>violencia doméstica abogados barcelona</td><td><strong>Pack local</strong></td><td>Fitxa de Google Business</td></tr>
  </tbody>
</table>
<p>Fixa't en tres coses. Posiciona la pàgina de cada delicte, no la home, que és exactament el que buscàvem amb l'arquitectura. Posiciona també la versió en català. I el blog ja capta qui cerca informació abans de cercar advocat, com l'article sobre l'article 520 de la Llei d'Enjudiciament Criminal.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.posiciones, local: true, alternativeText: "Llistat de Semrush amb les posicions de villazonmerceabogados.com a Google per a cerques d'advocat penalista a Barcelona" },
        caption: "Posicions a Google a 19 d'octubre de 2026 (Semrush): pàgines de delicte al Top 10 i pack local per a \"violencia doméstica abogados barcelona\".",
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'SEO, SEO local i Ads, cadascun al seu ritme',
        content:
          "Les campanyes de Google Ads capten les urgències des del primer dia. La fitxa de Google Business porta les cerques \"abogados barcelona\" de la zona. I el SEO de cada pàgina de delicte va guanyant posicions setmana a setmana. Junts cobreixen tot el recorregut del client.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>I el que importa, les primeres consultes</h2>
<p>Les primeres consultes des del web van arribar les primeres setmanes després del llançament, per telèfon, WhatsApp i formulari, amb el suport de les campanyes de <a href="/ca/agencia-sem-per-pimes/">Google Ads</a> mentre el <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> agafa velocitat.</p>
<p>El projecte continua en curs: ara la feina se centra a empènyer les 119 keywords que són entre la posició 11 i la 50 cap a la primera pàgina, ampliar el blog amb els dubtes més cercats i reforçar la presència local a Barcelona com a <a href="/ca/agencia-de-marketing-digital-a-barcelona/">agència de màrqueting digital a Barcelona</a> que coneix el mercat.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'El teu despatx no apareix a Google?',
        description:
          "Dissenyem webs per a advocats amb el SEO pensat des del primer dia i campanyes per a les consultes que no poden esperar. Explica'ns el teu cas i et diem com ho faríem. Sense compromís.",
        button_text: 'Parlem del teu despatx',
        open_modal: true,
      },
    ],
  },
};
