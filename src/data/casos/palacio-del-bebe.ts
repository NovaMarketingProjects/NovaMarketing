/**
 * Contenido del caso de éxito de Palacio del Bebé (hardcodeado, no viene de Strapi).
 *
 * Fuentes de las cifras (Semrush, dominio palaciodelbebe.com, 20 oct 2025 → 18 oct 2026):
 *  - Tráfico orgánico mensual: ~4.500 → 6.635 (+47 %). Tráfico de marca: 0 → 2.586.
 *  - Keywords en Top 3: 149 → 183 (+23 %). Posiciones 4-10: 739 → 479 (bajan, por
 *    eso NO se afirma un aumento del Top 10).
 *  - Posición 1 en: tiendas puericultura cerca de mi, ropa bebé mamá, tienda de
 *    bebé Barcelona (desde jul 2026), cunas de diseño (desde sep 2026), tienda
 *    online bebé, carricoches de bebé (de la 24 a la 1, oct 2026).
 *
 * Por acuerdo con el cliente solo se publican porcentajes y el dato de marca
 * "de cero a más de 2.500", nunca el tráfico absoluto. Por eso no se incluye
 * la gráfica de tráfico de Semrush (su eje muestra valores absolutos).
 */

// Imágenes de los bloques: ruta relativa al sitio con local: true, para que
// PageBlocks no les anteponga la URL del CMS.
const IMG = {
  carricoches: '/casos/palacio-del-bebe/carricoches-de-bebe-posicion-1-semrush.webp',
  tiendaBcn: '/casos/palacio-del-bebe/tienda-de-bebe-barcelona-posicion-1-semrush.webp',
};
// Portada (hero, tarjeta del listado y og:image): ruta relativa al sitio.
const COVER = '/casos/palacio-del-bebe/palacio-del-bebe-web.webp';

export const PALACIO_DEL_BEBE_CASE = {
  paths: { es: '/casos-exito/palacio-del-bebe/', ca: '/ca/casos-exit/palacio-del-bebe/' },
  cover: COVER,
  coverSize: { w: 1895, h: 834 },
  slug: 'palacio-del-bebe',
  company: 'Palacio del Bebé',
  // Entrada equivalente en Strapi (no pública): sus datos se sustituyen por
  // estos en todo el sitio (ver applyStaticOverrides en src/data/casos/index.ts).
  strapiSlugs: { es: 'caso-de-exito-palacio-del-bebe', ca: 'cas-d-exit-palacio-del-bebe' },
  categorySlug: 'seo',
  // Filtros del listado en los que aparece (el primero es la etiqueta de la tarjeta).
  listingCategories: [
    { name: 'SEO', slug: 'seo' },
    { name: 'e-commerce', slug: 'e-commerce' },
    { name: 'Google Ads', slug: 'google-ads' },
    { name: 'SEO Local', slug: 'seo-local' },
  ],

  es: {
    metaTitle: 'Caso de éxito: Palacio del Bebé +47% de tráfico orgánico',
    metaDescription:
      'Cómo una tienda de puericultura de Barcelona con ecommerce creció un 47 % en tráfico orgánico en un año: SEO técnico sobre un desarrollo externo, categorías con contenido y Google Shopping en paralelo.',
    title: 'Caso de éxito: Palacio del Bebé +47% de tráfico orgánico',
    description:
      'Convertir a una tienda de puericultura de Barcelona, con tienda física y ecommerce, en referente orgánico de su sector trabajando sobre una web desarrollada por un tercero. Nov 2025 – oct 2026, proyecto en curso.',
    categories: ['SEO', 'E-commerce', 'Google Ads', 'SEO Local'],
    date: 'Octubre 2026',
    // Ficha bajo el hero: sector (con enlace si tenemos página de sector),
    // servicios trabajados, hito y tecnología.
    facts: {
          "sector": {
                "label": "Ecommerce",
                "href": "/agencia-ecommerce/"
          },
          "services": [
                {
                      "label": "Posicionamiento SEO",
                      "href": "/agencia-seo-para-pymes/"
                },
                {
                      "label": "Google Ads y Shopping",
                      "href": "/agencia-sem-para-pymes/"
                },
                {
                      "label": "Optimización web",
                      "href": "/diseno-web-para-pymes/"
                }
          ],
          "milestone": "+47 % de tráfico orgánico y posición 1 en las búsquedas clave del sector",
          "tech": "Ecommerce a medida (desarrollo externo)"
    },
    cardTitle: 'Caso de éxito: Palacio del Bebé +47% de tráfico orgánico',
    cardDescription:
      'Tienda de puericultura en Barcelona con ecommerce. SEO técnico, categorías con contenido y Shopping: +47 % de tráfico orgánico y posición 1 en las búsquedas clave.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punto de partida</h2>
<p><strong>Palacio del Bebé</strong> es una tienda de puericultura con décadas de historia en Barcelona. Vende cochecitos, sillas de coche, cunas, mobiliario infantil y ropa de bebé, tanto en su tienda física como en su tienda online, y trabaja con las principales marcas del sector.</p>
<p>Cuando empezamos, en noviembre de 2025, la tienda online tenía catálogo y marcas, pero casi ninguna visibilidad propia en Google. Las categorías no tenían texto, las fichas repetían la descripción del fabricante, la web era lenta y arrastraba errores técnicos. Y había un dato que lo resumía todo: las búsquedas de la marca en Google eran prácticamente cero.</p>
<p>Un condicionante más: la web la desarrolla y mantiene un <strong>equipo externo</strong>. Cada cambio técnico había que documentarlo, priorizarlo y validarlo con ese equipo, así que el plan tenía que ser muy concreto desde el principio.</p>
<p>Como <a href="/agencia-de-marketing-digital-en-barcelona/">agencia de marketing digital en Barcelona</a> conocemos bien el comercio local de la ciudad, y el objetivo fue claro: que el <a href="/agencia-seo-para-pymes/">posicionamiento SEO</a> se convirtiera en la principal fuente de tráfico cualificado de la tienda, con Google Shopping como apoyo para los productos de más margen.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultados en 12 meses (noviembre 2025 → octubre 2026)',
        items: [
          { value: '+47%', label: 'Tráfico orgánico mensual' },
          { value: '+23%', label: 'Keywords en Top 3 de Google' },
          { value: '#1', label: 'En seis búsquedas clave del sector' },
          { value: '+2.500', label: 'Búsquedas de marca al mes, partiendo de cero' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué nos encontramos en la auditoría</h2>
<p>Antes de proponer nada hicimos una <a href="/agencia-seo-para-pymes/">auditoría SEO</a> completa de la tienda. Estos eran los frenos principales:</p>
<ul>
  <li><strong>Web lenta.</strong> Core Web Vitals en rojo en móvil, que es desde donde compra la mayoría de padres y madres. Es lo primero que miramos en cualquier trabajo de <a href="/diseno-web-para-pymes/">optimización web</a>, porque sin velocidad el resto del SEO rinde menos.</li>
  <li><strong>Errores técnicos.</strong> URLs duplicadas por filtros y variantes de producto, canónicos incorrectos, páginas sin valor indexadas y productos agotados que seguían respondiendo con error.</li>
  <li><strong>Categorías sin contenido.</strong> Las páginas de cochecitos, sillas o cunas eran solo un listado de productos, sin un texto que explicara a Google (ni al cliente) qué se vende y para quién.</li>
  <li><strong>Fichas copiadas del fabricante.</strong> Las mismas descripciones que decenas de tiendas, así que ninguna razón para posicionar la de Palacio del Bebé.</li>
  <li><strong>Sin blog ni contenido de ayuda.</strong> Nada que respondiera a las dudas de quien compra por primera vez un cochecito o una silla de coche.</li>
  <li><strong>Desarrollo externo.</strong> Sin acceso directo al código: cada corrección dependía de un tercero.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Noviembre 2025',
        before_content:
          'Tienda online lenta, con errores técnicos, categorías sin texto, fichas copiadas del fabricante, sin blog y sin búsquedas de marca. Visibilidad orgánica limitada a unas pocas búsquedas.',
        after_label: 'Octubre 2026',
        after_content:
          'Web optimizada y limpia de errores, categorías y fichas con contenido propio, posición 1 en las búsquedas clave del sector en Barcelona, +47 % de tráfico orgánico y más de 2.500 búsquedas de marca al mes.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Qué hicimos</h2>
<p>Trabajamos por fases, siempre coordinados con el equipo de desarrollo externo del cliente: nosotros definíamos y priorizábamos los cambios, ellos los implementaban y nosotros los validábamos antes de pasar al siguiente bloque.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Plan de trabajo',
        steps: [
          {
            title: 'Auditoría técnica y mapa de keywords',
            desc: 'Rastreo completo de la tienda, análisis de Search Console y estudio de las búsquedas por categoría de producto, marca y ciudad. De aquí salió la hoja de ruta priorizada.',
          },
          {
            title: 'Correcciones técnicas con el desarrollador externo',
            desc: 'Documentamos cada cambio con ejemplos y prioridad: canónicos, filtros y variantes, redirecciones de productos descatalogados, sitemap y robots. El equipo externo lo implementó y nosotros lo verificamos.',
          },
          {
            title: 'Velocidad y Core Web Vitals',
            desc: 'Optimización de imágenes del catálogo, carga de scripts de terceros, caché y fuentes. Pasamos de rojo a verde en móvil, parte del trabajo de optimización web que hacemos en cualquier ecommerce.',
          },
          {
            title: 'Arquitectura y categorías',
            desc: 'Reorganización de las categorías principales (paseo, viaje, descanso, mobiliario, ropa) y enlazado interno entre categorías, subcategorías y marcas para que la autoridad llegue a las páginas que venden.',
          },
          {
            title: 'Contenido en categorías y fichas',
            desc: 'Textos propios para cada categoría y para las fichas de los productos más buscados, con las dudas reales de compra resueltas: edades, homologaciones, compatibilidades y comparativas.',
          },
          {
            title: 'Búsquedas locales y de marca',
            desc: 'Trabajo específico para las búsquedas de "tienda de bebé en Barcelona" y "cerca de mí", conectando la tienda física con el ecommerce. Hoy Palacio del Bebé está en posición 1 en ambas.',
          },
          {
            title: 'Google Shopping en paralelo',
            desc: 'Campañas de Google Ads y Shopping para los productos de más margen, que aportan ventas desde el primer mes mientras el SEO va ganando terreno.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Posición 1 en las búsquedas que importan</h2>
<p>Lo más valioso de este año no es el número total de keywords, sino cuáles están arriba. Estas son algunas de las búsquedas en las que Palacio del Bebé ocupa hoy la <strong>primera posición de Google</strong>:</p>
<table>
  <thead>
    <tr><th>Búsqueda</th><th>Posición en octubre 2026</th><th>Desde</th></tr>
  </thead>
  <tbody>
    <tr><td>carricoches de bebé</td><td><strong>1</strong></td><td>Octubre 2026 (estaba en la 24)</td></tr>
    <tr><td>tienda de bebé Barcelona</td><td><strong>1</strong></td><td>Julio 2026</td></tr>
    <tr><td>tiendas puericultura cerca de mí</td><td><strong>1</strong></td><td>Posición mantenida todo el año</td></tr>
    <tr><td>cunas de diseño</td><td><strong>1</strong></td><td>Septiembre 2026</td></tr>
    <tr><td>tienda online bebé</td><td><strong>1</strong></td><td>Subió desde la 3 en octubre 2026</td></tr>
    <tr><td>ropa bebé mamá</td><td><strong>1</strong></td><td>Desde mayo 2026</td></tr>
  </tbody>
</table>
<p>Y el conjunto de keywords en Top 3 creció un 23 % en el mismo periodo.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.carricoches, local: true, alternativeText: 'Evolución en Semrush de la búsqueda "carricoches de bebé": de la posición 24 a la 1 para la categoría de cochecitos de Palacio del Bebé' },
        caption: 'La categoría de cochecitos pasa de la posición 24 a la 1 para "carricoches de bebé" tras reescribir el contenido y reforzar el enlazado interno (Semrush).',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.tiendaBcn, local: true, alternativeText: 'Evolución en Semrush de la búsqueda "tienda de bebé Barcelona": posición 1 desde julio de 2026' },
        caption: '"Tienda de bebé Barcelona": posición 1 desde julio de 2026 (Semrush).',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: '+23 % de keywords en Top 3',
        content:
          'Las posiciones que generan clics son las tres primeras. En un año, Palacio del Bebé tiene un 23 % más de búsquedas ahí, incluidas las de más intención de compra de su sector.',
      },
      {
        __component: 'blocks.big-stat',
        value: '+47%',
        label: 'de tráfico orgánico mensual en 12 meses',
        description: 'Visitas orgánicas de noviembre de 2025 frente a octubre de 2026, según Semrush, sin contar el tráfico de pago.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De cero a más de 2.500 búsquedas de marca al mes</h2>
<p>El dato que más nos gusta de este caso es el de marca. En noviembre de 2025 casi nadie buscaba "Palacio del Bebé" en Google. En octubre de 2026 lo hacen más de 2.500 personas al mes.</p>
<p>Eso no lo consigue el SEO solo. Es la suma de aparecer en la primera posición para las búsquedas del sector, de las campañas de <a href="/agencia-sem-para-pymes/">Google Shopping</a> que ponen los productos delante de quien compara precios, y de una tienda física con nombre en Barcelona. Cuando alguien ve la marca tres veces, la cuarta la busca directamente, y ese tráfico es el que mejor convierte.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'SEO y Shopping se refuerzan',
        content:
          'Shopping aporta ventas desde el primer mes y da visibilidad de marca; el SEO convierte esa visibilidad en tráfico gratuito y sostenido. Por eso los trabajamos juntos, no como canales separados.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Y lo que importa, más pedidos y más visitas a tienda</h2>
<p>El tráfico y las posiciones son el medio. Lo que buscaba Palacio del Bebé eran pedidos online y clientes en la tienda, y los dos han crecido de forma sostenida durante el año, con el canal orgánico como principal fuente de visitas cualificadas.</p>
<p>El proyecto sigue en curso: ahora trabajamos la cobertura de las marcas, el contenido de ayuda a la compra y la ampliación de las campañas de Shopping a nuevas categorías.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: '¿Tienes un ecommerce que no despega en Google?',
        description:
          'Analizamos gratis tu tienda online, te decimos qué la está frenando y qué haríamos para que crezca como Palacio del Bebé. Sin compromiso.',
        button_text: 'Hablemos de tu tienda',
        open_modal: true,
      },
    ],
  },

  ca: {
    metaTitle: "Cas d'èxit: Palacio del Bebé +47% de trànsit orgànic",
    metaDescription:
      "Com una botiga de puericultura de Barcelona amb ecommerce va créixer un 47 % en trànsit orgànic en un any: SEO tècnic sobre un desenvolupament extern, categories amb contingut i Google Shopping en paral·lel.",
    title: "Cas d'èxit: Palacio del Bebé +47% de trànsit orgànic",
    description:
      "Convertir una botiga de puericultura de Barcelona, amb botiga física i ecommerce, en referent orgànic del seu sector treballant sobre una web desenvolupada per un tercer. Nov 2025 – oct 2026, projecte en curs.",
    categories: ['SEO', 'E-commerce', 'Google Ads', 'SEO Local'],
    date: 'Octubre 2026',
    // Ficha bajo el hero: sector (con enlace si tenemos página de sector),
    // servicios trabajados, hito y tecnología.
    facts: {
          "sector": {
                "label": "Ecommerce",
                "href": "/ca/agencia-ecommerce/"
          },
          "services": [
                {
                      "label": "Posicionament SEO",
                      "href": "/ca/agencia-seo-per-pimes/"
                },
                {
                      "label": "Google Ads i Shopping",
                      "href": "/ca/agencia-sem-per-pimes/"
                },
                {
                      "label": "Optimització web",
                      "href": "/ca/disseny-web-per-pimes/"
                }
          ],
          "milestone": "+47 % de trànsit orgànic i posició 1 a les cerques clau del sector",
          "tech": "Ecommerce a mida (desenvolupament extern)"
    },
    cardTitle: "Cas d'èxit: Palacio del Bebé +47% de trànsit orgànic",
    cardDescription:
      'Botiga de puericultura a Barcelona amb ecommerce. SEO tècnic, categories amb contingut i Shopping: +47 % de trànsit orgànic i posició 1 a les cerques clau.',

    blocks: [
      {
        __component: 'blocks.html',
        content: `
<h2>El punt de partida</h2>
<p><strong>Palacio del Bebé</strong> és una botiga de puericultura amb dècades d'història a Barcelona. Ven cotxets, cadires de cotxe, bressols, mobiliari infantil i roba de nadó, tant a la botiga física com a la botiga online, i treballa amb les principals marques del sector.</p>
<p>Quan vam començar, el novembre de 2025, la botiga online tenia catàleg i marques, però gairebé cap visibilitat pròpia a Google. Les categories no tenien text, les fitxes repetien la descripció del fabricant, la web era lenta i arrossegava errors tècnics. I hi havia una dada que ho resumia tot: les cerques de la marca a Google eren pràcticament zero.</p>
<p>Un condicionant més: la web la desenvolupa i manté un <strong>equip extern</strong>. Cada canvi tècnic s'havia de documentar, prioritzar i validar amb aquest equip, així que el pla havia de ser molt concret des del principi.</p>
<p>Com a <a href="/ca/agencia-de-marketing-digital-a-barcelona/">agència de màrqueting digital a Barcelona</a> coneixem bé el comerç local de la ciutat, i l'objectiu va ser clar: que el <a href="/ca/agencia-seo-per-pimes/">posicionament SEO</a> es convertís en la principal font de trànsit qualificat de la botiga, amb Google Shopping com a suport per als productes de més marge.</p>`,
      },
      {
        __component: 'blocks.metrics-row',
        title: 'Resultats en 12 mesos (novembre 2025 → octubre 2026)',
        items: [
          { value: '+47%', label: 'Trànsit orgànic mensual' },
          { value: '+23%', label: 'Keywords al Top 3 de Google' },
          { value: '#1', label: 'En sis cerques clau del sector' },
          { value: '+2.500', label: 'Cerques de marca al mes, partint de zero' },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què ens vam trobar a l'auditoria</h2>
<p>Abans de proposar res vam fer una <a href="/ca/agencia-seo-per-pimes/">auditoria SEO</a> completa de la botiga. Aquests eren els frens principals:</p>
<ul>
  <li><strong>Web lenta.</strong> Core Web Vitals en vermell en mòbil, que és des d'on compra la majoria de pares i mares. És el primer que mirem en qualsevol feina d'<a href="/ca/disseny-web-per-pimes/">optimització web</a>, perquè sense velocitat la resta del SEO rendeix menys.</li>
  <li><strong>Errors tècnics.</strong> URL duplicades per filtres i variants de producte, canòniques incorrectes, pàgines sense valor indexades i productes esgotats que continuaven responent amb error.</li>
  <li><strong>Categories sense contingut.</strong> Les pàgines de cotxets, cadires o bressols eren només un llistat de productes, sense cap text que expliqués a Google (ni al client) què es ven i per a qui.</li>
  <li><strong>Fitxes copiades del fabricant.</strong> Les mateixes descripcions que desenes de botigues, així que cap raó per posicionar la de Palacio del Bebé.</li>
  <li><strong>Sense blog ni contingut d'ajuda.</strong> Res que respongués als dubtes de qui compra per primera vegada un cotxet o una cadira de cotxe.</li>
  <li><strong>Desenvolupament extern.</strong> Sense accés directe al codi: cada correcció depenia d'un tercer.</li>
</ul>`,
      },
      {
        __component: 'blocks.comparison',
        before_label: 'Novembre 2025',
        before_content:
          'Botiga online lenta, amb errors tècnics, categories sense text, fitxes copiades del fabricant, sense blog i sense cerques de marca. Visibilitat orgànica limitada a unes poques cerques.',
        after_label: 'Octubre 2026',
        after_content:
          "Web optimitzada i neta d'errors, categories i fitxes amb contingut propi, posició 1 a les cerques clau del sector a Barcelona, +47 % de trànsit orgànic i més de 2.500 cerques de marca al mes.",
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Què vam fer</h2>
<p>Vam treballar per fases, sempre coordinats amb l'equip de desenvolupament extern del client: nosaltres definíem i prioritzàvem els canvis, ells els implementaven i nosaltres els validàvem abans de passar al bloc següent.</p>`,
      },
      {
        __component: 'blocks.timeline',
        title: 'Pla de treball',
        steps: [
          {
            title: 'Auditoria tècnica i mapa de keywords',
            desc: "Rastreig complet de la botiga, anàlisi de Search Console i estudi de les cerques per categoria de producte, marca i ciutat. D'aquí va sortir el full de ruta prioritzat.",
          },
          {
            title: 'Correccions tècniques amb el desenvolupador extern',
            desc: "Vam documentar cada canvi amb exemples i prioritat: canòniques, filtres i variants, redireccions de productes descatalogats, sitemap i robots. L'equip extern ho va implementar i nosaltres ho vam verificar.",
          },
          {
            title: 'Velocitat i Core Web Vitals',
            desc: "Optimització d'imatges del catàleg, càrrega d'scripts de tercers, memòria cau i fonts. Vam passar de vermell a verd en mòbil, part de la feina d'optimització web que fem a qualsevol ecommerce.",
          },
          {
            title: 'Arquitectura i categories',
            desc: "Reorganització de les categories principals (passeig, viatge, descans, mobiliari, roba) i enllaçat intern entre categories, subcategories i marques perquè l'autoritat arribi a les pàgines que venen.",
          },
          {
            title: 'Contingut a categories i fitxes',
            desc: 'Textos propis per a cada categoria i per a les fitxes dels productes més buscats, amb els dubtes reals de compra resolts: edats, homologacions, compatibilitats i comparatives.',
          },
          {
            title: 'Cerques locals i de marca',
            desc: 'Feina específica per a les cerques de "tienda de bebé en Barcelona" i "cerca de mí", connectant la botiga física amb l\'ecommerce. Avui Palacio del Bebé és a la posició 1 en totes dues.',
          },
          {
            title: 'Google Shopping en paral·lel',
            desc: 'Campanyes de Google Ads i Shopping per als productes de més marge, que aporten vendes des del primer mes mentre el SEO va guanyant terreny.',
          },
        ],
      },
      {
        __component: 'blocks.html',
        content: `
<h2>Posició 1 a les cerques que importen</h2>
<p>El més valuós d'aquest any no és el nombre total de keywords, sinó quines són a dalt. Aquestes són algunes de les cerques en què Palacio del Bebé ocupa avui la <strong>primera posició de Google</strong>:</p>
<table>
  <thead>
    <tr><th>Cerca</th><th>Posició l'octubre de 2026</th><th>Des de</th></tr>
  </thead>
  <tbody>
    <tr><td>carricoches de bebé</td><td><strong>1</strong></td><td>Octubre 2026 (era a la 24)</td></tr>
    <tr><td>tienda de bebé Barcelona</td><td><strong>1</strong></td><td>Juliol 2026</td></tr>
    <tr><td>tiendas puericultura cerca de mí</td><td><strong>1</strong></td><td>Posició mantinguda tot l'any</td></tr>
    <tr><td>cunas de diseño</td><td><strong>1</strong></td><td>Setembre 2026</td></tr>
    <tr><td>tienda online bebé</td><td><strong>1</strong></td><td>Va pujar des de la 3 l'octubre de 2026</td></tr>
    <tr><td>ropa bebé mamá</td><td><strong>1</strong></td><td>Des de maig 2026</td></tr>
  </tbody>
</table>
<p>I el conjunt de keywords al Top 3 va créixer un 23 % en el mateix període.</p>`,
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.carricoches, local: true, alternativeText: 'Evolució a Semrush de la cerca "carricoches de bebé": de la posició 24 a la 1 per a la categoria de cotxets de Palacio del Bebé' },
        caption: 'La categoria de cotxets passa de la posició 24 a la 1 per a "carricoches de bebé" després de reescriure el contingut i reforçar l\'enllaçat intern (Semrush).',
      },
      {
        __component: 'blocks.image',
        image: { url: IMG.tiendaBcn, local: true, alternativeText: 'Evolució a Semrush de la cerca "tienda de bebé Barcelona": posició 1 des de juliol de 2026' },
        caption: '"Tienda de bebé Barcelona": posició 1 des de juliol de 2026 (Semrush).',
      },
      {
        __component: 'blocks.callout',
        type: 'resultado',
        title: '+23 % de keywords al Top 3',
        content:
          'Les posicions que generen clics són les tres primeres. En un any, Palacio del Bebé té un 23 % més de cerques allà, incloses les de més intenció de compra del seu sector.',
      },
      {
        __component: 'blocks.big-stat',
        value: '+47%',
        label: 'de trànsit orgànic mensual en 12 mesos',
        description: 'Visites orgàniques de novembre de 2025 davant d\'octubre de 2026, segons Semrush, sense comptar el trànsit de pagament.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>De zero a més de 2.500 cerques de marca al mes</h2>
<p>La dada que més ens agrada d'aquest cas és la de marca. El novembre de 2025 gairebé ningú cercava "Palacio del Bebé" a Google. L'octubre de 2026 ho fan més de 2.500 persones al mes.</p>
<p>Això no ho aconsegueix el SEO sol. És la suma d'aparèixer a la primera posició per a les cerques del sector, de les campanyes de <a href="/ca/agencia-sem-per-pimes/">Google Shopping</a> que posen els productes davant de qui compara preus, i d'una botiga física amb nom a Barcelona. Quan algú veu la marca tres vegades, la quarta la cerca directament, i aquest trànsit és el que millor converteix.</p>`,
      },
      {
        __component: 'blocks.callout',
        type: 'dato',
        title: 'SEO i Shopping es reforcen',
        content:
          'Shopping aporta vendes des del primer mes i dona visibilitat de marca; el SEO converteix aquesta visibilitat en trànsit gratuït i sostingut. Per això els treballem junts, no com a canals separats.',
      },
      {
        __component: 'blocks.html',
        content: `
<h2>I el que importa, més comandes i més visites a la botiga</h2>
<p>El trànsit i les posicions són el mitjà. El que buscava Palacio del Bebé eren comandes online i clients a la botiga, i tots dos han crescut de manera sostinguda durant l'any, amb el canal orgànic com a principal font de visites qualificades.</p>
<p>El projecte continua en curs: ara treballem la cobertura de les marques, el contingut d'ajuda a la compra i l'ampliació de les campanyes de Shopping a noves categories.</p>`,
      },
      {
        __component: 'blocks.cta',
        headline: 'Tens un ecommerce que no arrenca a Google?',
        description:
          'Analitzem gratis la teva botiga online, et diem què la frena i què faríem perquè creixi com Palacio del Bebé. Sense compromís.',
        button_text: 'Parlem de la teva botiga',
        open_modal: true,
      },
    ],
  },
};
