// using Global native fetch Node triggers
async function test() {

    const baseUrl = `${process.env.STRAPI_URL || 'http://localhost:1337'}/api/services`;
    const token = process.env.STRAPI_TOKEN;
if (!token) { console.error('STRAPI_TOKEN no definido. Cárgalo del .env (gitignored), p.ej. node --env-file=.env <script>.'); process.exit(1); }
    
    // 1. Create ES entry
    const resEs = await fetch(baseUrl, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            data: {
                title: "Test ES",
                slug: "test-es",
                locale: "es"
            }
        })
    });
    
    const dataEs = await resEs.json();
    console.log("ES Response:", JSON.stringify(dataEs, null, 2));
    
    if (dataEs.data && dataEs.data.documentId) {
        const docId = dataEs.data.documentId;
        console.log(`\nNow linking CA translation to documentId: ${docId}`);
        
        // Let's test providing documentId + locale in payload
        const resCa = await fetch(baseUrl, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                data: {
                    title: "Test CA",
                    slug: "test-ca",
                    locale: "ca"
                }
            })
         });
         const dataCa = await resCa.json();
         console.log("CA Response directly:", JSON.stringify(dataCa, null, 2));

         // Test linking endpoint (often /api/services/:id/localizations in v4, and in v5 might be different)
         const resLink = await fetch(`${baseUrl}/${docId}/localizations`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                data: {
                    title: "Test CA Linked",
                    slug: "test-ca-linked",
                    locale: "ca"
                }
            })
         });
         console.log("CA Sub-endpoint Response:", await resLink.text());
    }
}

test();

