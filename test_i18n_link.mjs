const baseUrl = `${process.env.STRAPI_URL || 'http://localhost:1337'}/api/services`;
const token = process.env.STRAPI_TOKEN;
if (!token) { console.error('STRAPI_TOKEN no definido. Cárgalo del .env (gitignored), p.ej. node --env-file=.env <script>.'); process.exit(1); }

async function test() {
    // 1. Create Base item (es-ES)
    const resEs = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            data: {
                title: "Test ES-Link",
                slug: "test-es-link",
                locale: "es-ES" // use exactly what subagent added
            }
        })
    });
    const dataEs = await resEs.json();
    console.log("ES Creation:", JSON.stringify(dataEs, null, 2));

    if (dataEs.data && dataEs.data.documentId) {
        const docId = dataEs.data.documentId;
        console.log(`Linking CA translation to documentId: ${docId}`);

        const resCa = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({
                data: {
                    documentId: docId, // LINKING TRIGGER for Strapi 5!
                    title: "Test CA-Linked",
                    slug: "test-ca-linked",
                    locale: "ca"
                }
            })
        });
        const dataCa = await resCa.json();
        console.log("CA Response:", JSON.stringify(dataCa, null, 2));
    }
}

test();
