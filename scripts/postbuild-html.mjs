/**
 * postbuild-html.mjs — post-build
 *
 * Aligera el HTML generado para mejorar la relación texto/código:
 * 1. Deduplica los SVG repetidos (checks, estrellas, logos): definición única
 *    en un sprite + <use>. Ahorra hasta 18 KB por página.
 * 2. Elimina los comentarios HTML de producción.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

/** Sustituye los <path> repetidos 4+ veces por una definición única y <use>. */
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

const files = walk(dist);
let ok = 0;
for (const f of files) {
  let html = fs.readFileSync(f, 'utf8');
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  html = dedupeSvgPaths(html);
  fs.writeFileSync(f, html);
  ok++;
}
console.log(`postbuild-html: ${ok}/${files.length} páginas optimizadas`);
