

const STRAPI_URL = (process.env.STRAPI_URL || 'http://localhost:1337');
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
if (!STRAPI_TOKEN) { console.error('STRAPI_TOKEN no definido. Cárgalo del .env (gitignored), p.ej. node --env-file=.env <script>.'); process.exit(1); }

async function addRedirect(from, to) {
    const payload = {
        data: {
            fromUrl: from,
            toUrl: to,
            statusCode: '301',
            isActive: true
        }
    };

    const res = await fetch(`${STRAPI_URL}/api/seo-redirects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${STRAPI_TOKEN}`
        },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        console.log(`✅ Redirect added: ${from} -> ${to}`);
    } else {
        const err = await res.text();
        console.log(`❌ Failed: ${from}`, err);
    }
}

async function run() {
    await addRedirect('/ca/casos-exito/', '/ca/casos-exit/');
    await addRedirect('/ca/casos-exito', '/ca/casos-exit/');
}

run();
