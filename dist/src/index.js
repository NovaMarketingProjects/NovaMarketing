"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    register({ strapi }) {
        // Middleware Koa: intercepta TODOS los errores HTTP (admin + API)
        strapi.server.use(async (ctx, next) => {
            try {
                await next();
            }
            catch (err) {
                const msg = (err === null || err === void 0 ? void 0 : err.message) || String(err);
                const code = (err === null || err === void 0 ? void 0 : err.code) || (err === null || err === void 0 ? void 0 : err.errno) || '';
                strapi.log.error(`[HTTP-ERROR] ${ctx.method} ${ctx.url} → ${msg} (code=${code})`);
                if (err === null || err === void 0 ? void 0 : err.stack)
                    strapi.log.error('[HTTP-ERROR] stack: ' + err.stack);
                ctx.status = (err === null || err === void 0 ? void 0 : err.status) || (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
                ctx.body = {
                    data: null,
                    error: {
                        status: ctx.status,
                        name: (err === null || err === void 0 ? void 0 : err.name) || 'InternalError',
                        message: msg + (code ? ` [${code}]` : ''),
                        details: (err === null || err === void 0 ? void 0 : err.details) || {},
                    },
                };
            }
        });
    },
    bootstrap({ strapi }) {
        process.on('unhandledRejection', (reason) => {
            strapi.log.error('[UNHANDLED] ' + ((reason === null || reason === void 0 ? void 0 : reason.message) || String(reason)));
            strapi.log.error('[UNHANDLED] stack: ' + ((reason === null || reason === void 0 ? void 0 : reason.stack) || ''));
        });
        strapi.db.lifecycles.subscribe({
            models: ['api::case-study.case-study'],
            async beforeCreate(event) {
                strapi.log.info('[CS:beforeCreate] locale=' + event.params?.data?.locale + ' slug=' + event.params?.data?.slug);
            },
            async afterCreate(event) {
                strapi.log.info('[CS:afterCreate] id=' + event.result?.id);
            },
            async beforeUpdate(event) {
                strapi.log.info('[CS:beforeUpdate] where=' + JSON.stringify(event.params?.where));
            },
            async afterUpdate(event) {
                strapi.log.info('[CS:afterUpdate] id=' + event.result?.id);
            },
        });
    },
};
