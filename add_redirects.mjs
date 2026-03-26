

const STRAPI_URL = 'http://localhost:1337';
const STRAPI_TOKEN = '3ae60308103abd892e70f257b58d7907f15512a631afff3b8652eaa290f1acb3d779c51e439b27f9079cee5cc959749b99f93d14417c932c1dfe7c0938db4663e2fab5dd504395119cd412890a2af1158dc520fab5de11ee67d8ea5ec557c1d36ab8be8b0b5205fee0f4dc3cab84bbb9510794a4e64852942eee2309cbe82032';

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
