"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'POST',
            path: '/contact',
            handler: 'api::contact.contact.send',
            // El array middlewares, antes vacío, era el punto de enganche que faltaba
            // para el limitador de tasa del endpoint anónimo.
            config: { auth: false, policies: [], middlewares: ['global::contact-rate-limit'] },
        },
        // GET /contact/test retirado: para cualquier anónimo hacía un login SMTP y
        // un envío reales, y devolvía smtp_user / contact_to (y texto de error SMTP)
        // en el cuerpo. Si se necesita un smoke test, exponerlo como POST tras auth
        // de admin con una respuesta que no lleve configuración.
    ],
};
