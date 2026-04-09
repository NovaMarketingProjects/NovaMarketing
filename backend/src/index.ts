import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Captura errores no manejados a nivel de proceso
    process.on('unhandledRejection', (reason: any) => {
      strapi.log.error('[UNHANDLED] ' + (reason?.message || String(reason)));
      strapi.log.error('[UNHANDLED] stack: ' + (reason?.stack || ''));
    });

    // Hooks a nivel de BD para case-study (captura admin + API)
    (strapi.db as any).lifecycles.subscribe({
      models: ['api::case-study.case-study'],

      async beforeCreate(event: any) {
        strapi.log.info('[CS:beforeCreate] locale=' + event.params?.data?.locale + ' slug=' + event.params?.data?.slug);
      },
      async afterCreate(event: any) {
        strapi.log.info('[CS:afterCreate] id=' + event.result?.id + ' documentId=' + event.result?.documentId);
      },
      async beforeUpdate(event: any) {
        strapi.log.info('[CS:beforeUpdate] locale=' + event.params?.data?.locale + ' where=' + JSON.stringify(event.params?.where));
      },
      async afterUpdate(event: any) {
        strapi.log.info('[CS:afterUpdate] id=' + event.result?.id);
      },
    });
  },
};
