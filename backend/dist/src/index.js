"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    register({ strapi }) { },
    bootstrap({ strapi }) {
        // Captura errores no manejados a nivel de proceso
        process.on('unhandledRejection', (reason) => {
            strapi.log.error('[UNHANDLED] ' + ((reason === null || reason === void 0 ? void 0 : reason.message) || String(reason)));
            strapi.log.error('[UNHANDLED] stack: ' + ((reason === null || reason === void 0 ? void 0 : reason.stack) || ''));
        });
        // Hooks a nivel de BD para case-study (captura admin + API)
        strapi.db.lifecycles.subscribe({
            models: ['api::case-study.case-study'],
            async beforeCreate(event) {
                strapi.log.info('[CS:beforeCreate] locale=' + event.params?.data?.locale + ' slug=' + event.params?.data?.slug);
            },
            async afterCreate(event) {
                strapi.log.info('[CS:afterCreate] id=' + event.result?.id + ' documentId=' + event.result?.documentId);
            },
            async beforeUpdate(event) {
                strapi.log.info('[CS:beforeUpdate] locale=' + event.params?.data?.locale + ' where=' + JSON.stringify(event.params?.where));
            },
            async afterUpdate(event) {
                strapi.log.info('[CS:afterUpdate] id=' + event.result?.id);
            },
        });
    },
};
