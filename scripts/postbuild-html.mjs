/**
 * critical-css.mjs — post-build
 *
 * 1. Extrae el CSS crítico del above-the-fold de cada página (header + hero)
 *    usando Beasties sobre una versión truncada del documento.
 * 2. Inyecta ese CSS inline en la página completa.
 * 3. Convierte las hojas de estilo en carga asíncrona (media swap + noscript).
 * 4. Elimina los comentarios HTML decorativos para aligerar el código.
 *
 * Resultado: sin peticiones CSS que bloqueen el renderizado y con un HTML
 * ligero que mantiene una buena relación texto/código.
 */
import fs from 'node:fs';
import path from 'node:path';
import Beasties from 'beasties';

const dist = 'dist';

const beasties = new Beasties({
  path: dist,
  publicPath: '/',
  // los links del doc truncado los transforma beasties, pero usamos solo su <style>
  preload: 'media',
  inlineFonts: true,
  preloadFonts: false,
  pruneSource: false,
  reduceInlineStyles: false,
  logLevel: 'error',
});

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

/** Deja solo el above-the-fold: todo hasta el final de la 1ª <section> del main
 *  (el hero). Si la plantilla no usa secciones (blog), corta a 20 KB de main.
 *  Quita además los paneles ocultos del header (dropdowns y menú móvil), cuyos
 *  estilos no hacen falta para el primer pintado. */
function truncateAboveFold(html) {
  const mainIdx = html.indexOf('<main');
  if (mainIdx === -1) return html;
  // dos secciones: hero + marquee de logos (visible en el primer pintado; sin sus
  // estilos críticos los logos parpadean y generan CLS)
  let idx = mainIdx;
  const cap = mainIdx + 24000;
  for (let i = 0; i < 2; i++) {
    const close = html.indexOf('</section>', idx);
    if (close === -1 || close > cap) { idx = Math.min(cap, html.length); break; }
    idx = close + '</section>'.length;
  }
  let t = html.slice(0, idx) + '</main></body></html>';
  // dropdowns del menú (invisible group-hover) y menú móvil: fuera del crítico
  t = t.replace(/<div class="absolute top-8[^"]*invisible[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
  t = t.replace(/<div class="hidden md:hidden[^"]*"[^>]*id="mobile-menu"[\s\S]*?<\/div>\s*<\/header>/, '</header>');
  return t;
}

/** Reglas mínimas para que los elementos excluidos del crítico no parpadeen
 *  mientras llega el CSS completo asíncrono. */
const SAFETY = '.hidden{display:none}.invisible{visibility:hidden}.opacity-0{opacity:0}';

/** Sustituye los <path> repetidos 4+ veces por una definición única y <use>.
 *  Los iconos (check, estrella, logo de Google…) se repiten decenas de veces
 *  por página y pesan hasta 20 KB de HTML duplicado. */
function dedupeSvgPaths(html) {
  const counts = new Map();
  for (const m of html.matchAll(/<path[^>]*>(?:<\/path>)?/g)) {
    counts.set(m[0], (counts.get(m[0]) || 0) + 1);
  }
  const defs = [];
  let i = 0;
  for (const [p, n] of counts) {
    if (n < 4 || p.includes(' id=')) continue;
    const id = `svg-p${i++}`;
    const def = p.replace('<path', `<path id="${id}"`);
    defs.push(def.endsWith('</path>') ? def : def.replace(/>$/, '/>'));
    html = html.split(p).join(`<use href="#${id}"/>`);
  }
  if (!defs.length) return html;
  const sprite = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${defs.join('')}</defs></svg>`;
  return html.replace(/(<body[^>]*>)/, `$1${sprite}`);
}

/** Extrae el contenido de los <style> que Beasties inyectó en el doc truncado. */
function extractCritical(processed) {
  const styles = processed.match(/<style>[\s\S]*?<\/style>/g) || [];
  return styles.map(s => s.slice(7, -8)).join('');
}

const files = walk(dist);
let ok = 0;
let inlineTotal = 0;
for (const f of files) {
  let html = fs.readFileSync(f, 'utf8');
  try {
    // 1-2. CSS crítico del above-the-fold
    const truncated = truncateAboveFold(html);
    const processed = await beasties.process(truncated);
    const critical = extractCritical(processed);
    inlineTotal += critical.length;

    // 3. links de CSS → asíncronos, con fallback noscript
    html = html.replace(/<link rel="stylesheet" href="([^"]+)"\s*\/?>(?!<\/noscript>)/g,
      (m, href) => `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`);

    // inyectar el crítico antes del primer link de CSS (o al final del head)
    const styleTag = `<style>${critical}${SAFETY}</style>`;
    if (html.includes('<link rel="stylesheet"')) {
      html = html.replace(/<link rel="stylesheet"/, `${styleTag}<link rel="stylesheet"`);
    } else {
      html = html.replace('</head>', `${styleTag}</head>`);
    }

    // 4. quitar comentarios HTML (no hay condicionales IE en el sitio)
    html = html.replace(/<!--[\s\S]*?-->/g, '');

    // 5. deduplicar SVG repetidos (checks, estrellas, logos): definición única + <use>
    html = dedupeSvgPaths(html);

    fs.writeFileSync(f, html);
    ok++;
  } catch (err) {
    console.error('critical-css: fallo en', f, err.message);
    process.exitCode = 1;
  }
}
console.log(`critical-css: ${ok}/${files.length} páginas | crítico medio: ${(inlineTotal / ok / 1024).toFixed(1)} KB`);
