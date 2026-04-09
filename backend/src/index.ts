import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Middleware Koa: intercepta TODOS los errores HTTP (admin + API)
    strapi.server.use(async (ctx: any, next: any) => {
      try {
        await next();
      } catch (err: any) {
        const msg = err?.message || String(err);
        const code = err?.code || err?.errno || '';
        strapi.log.error(`[HTTP-ERROR] ${ctx.method} ${ctx.url} → ${msg} (code=${code})`);
        if (err?.stack) strapi.log.error('[HTTP-ERROR] stack: ' + err.stack);

        // Devuelve el mensaje real al admin en lugar de "Internal Server Error"
        ctx.status = err?.status || err?.statusCode || 500;
        ctx.body = {
          data: null,
          error: {
            status: ctx.status,
            name: err?.name || 'InternalError',
            message: msg + (code ? ` [${code}]` : ''),
            details: err?.details || {},
          },
        };
      }
    });
  },

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    process.on('unhandledRejection', (reason: any) => {
      strapi.log.error('[UNHANDLED] ' + (reason?.message || String(reason)));
      strapi.log.error('[UNHANDLED] stack: ' + (reason?.stack || ''));
    });

    (strapi.db as any).lifecycles.subscribe({
      models: ['api::case-study.case-study'],
      async beforeCreate(event: any) {
        strapi.log.info('[CS:beforeCreate] locale=' + event.params?.data?.locale + ' slug=' + event.params?.data?.slug);
      },
      async afterCreate(event: any) {
        strapi.log.info('[CS:afterCreate] id=' + event.result?.id);
      },
      async beforeUpdate(event: any) {
        strapi.log.info('[CS:beforeUpdate] where=' + JSON.stringify(event.params?.where));
      },
      async afterUpdate(event: any) {
        strapi.log.info('[CS:afterUpdate] id=' + event.result?.id);
      },
    });
  },
};
