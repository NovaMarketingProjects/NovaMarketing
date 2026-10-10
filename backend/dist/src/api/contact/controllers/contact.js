"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const openai_ads_1 = require("../../../utils/openai-ads");
// Escapa un valor para interpolarlo con seguridad en el cuerpo HTML del correo.
const escapeHtml = (value) => String(value !== null && value !== void 0 ? value : '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
// Escapa y convierte saltos de línea en <br> para posiciones de texto HTML.
const escapeHtmlBlock = (value) => escapeHtml(value).replace(/\r?\n/g, '<br>');
// Una sola dirección de correo: sin separadores de lista, ángulos ni espacios,
// para que nodemailer no reciba nunca una lista de destinatarios controlada
// por el emisor.
const SINGLE_EMAIL = /^[^\s@,;:<>"]{1,64}@[^\s@,;:<>"]{1,253}\.[A-Za-z]{2,}$/;
// Devuelve el string recortado si es un string no vacío dentro del límite, o null.
const boundedString = (value, max) => {
    if (typeof value !== 'string')
        return null;
    const trimmed = value.trim();
    return trimmed.length > 0 && trimmed.length <= max ? trimmed : null;
};
function buildTransporter() {
    return nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: true,
        auth: {
            user: process.env.SMTP_USER || '',
            pass: process.env.SMTP_PASS || '',
        },
    });
}
exports.default = {
    // Smoke-test SMTP. La ruta GET /contact/test se ha retirado de la tabla de
    // rutas (hacía login + envío reales y filtraba configuración a cualquier
    // anónimo); si se reexpone, debe ser tras auth de admin. La respuesta nunca
    // lleva configuración ni texto de error de la dependencia.
    async test(ctx) {
        const SMTP_USER = process.env.SMTP_USER || '';
        if (!SMTP_USER || !process.env.SMTP_PASS) {
            strapi.log.error('[Contact] SMTP_USER or SMTP_PASS env vars are not set');
            ctx.status = 500;
            ctx.body = { ok: false };
            return;
        }
        const transporter = buildTransporter();
        try {
            await transporter.verify();
            await transporter.sendMail({
                from: `"nova. test" <${SMTP_USER}>`,
                to: process.env.CONTACT_TO || 'hola@novamarketing.es',
                subject: '[TEST] SMTP contact form check',
                text: 'Test OK',
            });
        }
        catch (err) {
            strapi.log.error(`[Contact] SMTP test failed: ${err === null || err === void 0 ? void 0 : err.message} (code=${(err === null || err === void 0 ? void 0 : err.code) || ''})`);
            ctx.status = 500;
            ctx.body = { ok: false };
            return;
        }
        ctx.status = 200;
        ctx.body = { ok: true };
    },
    async send(ctx) {
        const { name, email, url, phone, msg, source, eventId } = ctx.request.body;
        // Validación: nombre no vacío y UNA sola dirección de correo válida. El
        // valor validado es el único que llega a `to`/`replyTo`, de modo que
        // nodemailer nunca parsea una lista de destinatarios del emisor.
        const safeName = boundedString(name, 120);
        const safeEmail = boundedString(email, 254);
        if (!safeName || !safeEmail || !SINGLE_EMAIL.test(safeEmail)) {
            ctx.status = 400;
            ctx.body = { error: 'Name and a single valid email address are required' };
            return;
        }
        const safeUrl = boundedString(url, 500);
        const safePhone = boundedString(phone, 40);
        const safeMsg = boundedString(msg, 5000);
        const SMTP_USER = process.env.SMTP_USER || '';
        const CONTACT_TO = process.env.CONTACT_TO || 'hola@novamarketing.es';
        const transporter = buildTransporter();
        const now = new Date().toLocaleString('en-GB', {
            timeZone: 'Europe/Madrid',
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit',
        });
        // El valor de `source`/`referer` se trunca y se usa solo como texto plano.
        const pageSource = boundedString(source, 500) || boundedString(ctx.request.headers['referer'], 500) || '-';
        const adminText = [
            'NUEVA CONSULTA - Nova Marketing',
            '================================',
            `Nombre:   ${safeName}`,
            `Email:    ${safeEmail}`,
            safeUrl ? `Web:      ${safeUrl}` : null,
            safePhone ? `Telefono: ${safePhone}` : null,
            safeMsg ? `Mensaje:  ${safeMsg}` : null,
            `Pagina:   ${pageSource}`,
            `Fecha:    ${now}`,
        ].filter(Boolean).join('\n');
        // Admin notification — plain text, no encoding issues
        try {
            await transporter.sendMail({
                from: `"nova." <${SMTP_USER}>`,
                to: CONTACT_TO,
                subject: 'Nueva consulta en Nova Marketing',
                text: adminText,
                replyTo: safeEmail,
            });
        }
        catch (err) {
            // No devolvemos el texto del error de la dependencia al llamante anónimo.
            strapi.log.error(`[Contact] Admin email error: ${err === null || err === void 0 ? void 0 : err.message}`);
            ctx.status = 500;
            ctx.body = { error: 'Failed to send notification' };
            return;
        }
        // Conversión de OpenAI Ads: en paralelo, sin bloquear la respuesta. Lleva
        // el email cifrado, que el píxel del navegador no puede aportar porque la
        // página de gracias no contiene datos del usuario.
        if (eventId) {
            void (0, openai_ads_1.sendOpenAiConversion)({
                eventId,
                sourceUrl: pageSource,
                email: safeEmail,
                phone: safePhone !== null && safePhone !== void 0 ? safePhone : undefined,
                ipAddress: ctx.request.ip,
                userAgent: ctx.request.headers['user-agent'],
            });
        }
        // User confirmation — HTML, best-effort
        const confirmationHtml = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#f4f4f5;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
      <tr>
        <td style="background:#000000;padding:28px 40px;">
          <span style="font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:28px;letter-spacing:-0.04em;color:#ffffff;line-height:1;">nova.</span>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;padding:48px 40px;">
          <h2 style="font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:26px;text-transform:uppercase;letter-spacing:-0.03em;color:#09090b;margin:0 0 20px 0;line-height:1.1;">
            &#161;Hemos recibido<br>tu consulta!
          </h2>
          <p style="font-family:'Inter',Arial,sans-serif;font-size:16px;color:#52525b;line-height:1.7;margin:0 0 32px 0;">
            Hola <strong style="color:#09090b;">${escapeHtml(safeName)}</strong>, gracias por contactar con nosotros.<br>
            Nos pondremos en contacto contigo en menos de <strong style="color:#09090b;">24 horas</strong>.
          </p>
          ${safeMsg ? `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;border-radius:6px;margin-bottom:36px;">
            <tr><td style="padding:20px 24px;">
              <p style="font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:9px;text-transform:uppercase;letter-spacing:0.2em;color:#71717a;margin:0 0 8px 0;">Tu mensaje</p>
              <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#3f3f46;line-height:1.6;margin:0;">${escapeHtmlBlock(safeMsg)}</p>
            </td></tr>
          </table>` : ''}
        </td>
      </tr>
      <tr>
        <td style="background:#f4f4f5;padding:20px 40px;border-top:1px solid #e4e4e7;">
          <p style="font-family:'Inter',Arial,sans-serif;font-size:12px;color:#a1a1aa;margin:0;">
            &copy; Nova Marketing &middot; <a href="mailto:hola@novamarketing.es" style="color:#a1a1aa;text-decoration:none;">hola@novamarketing.es</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
        try {
            await transporter.sendMail({
                from: `"nova." <${SMTP_USER}>`,
                to: safeEmail,
                subject: '¡Hemos recibido tu consulta! - nova.',
                html: confirmationHtml,
            });
        }
        catch (err) {
            strapi.log.error(`[Contact] User confirmation email error: ${err === null || err === void 0 ? void 0 : err.message}`);
        }
        ctx.status = 200;
        ctx.body = { ok: true };
    },
};
