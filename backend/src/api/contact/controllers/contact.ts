import { Context } from 'koa';
import nodemailer from 'nodemailer';

export default {
  async send(ctx: Context) {
    const { name, email, url, phone, msg } = ctx.request.body as any;

    if (!name || !email) {
      ctx.status = 400;
      ctx.body = { error: 'Name and email are required' };
      return;
    }

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465');
    const SMTP_USER = process.env.SMTP_USER || '';
    const SMTP_PASS = process.env.SMTP_PASS || '';
    const CONTACT_TO = process.env.CONTACT_TO || 'hola@novamarketing.es';

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Email interno a Nova Marketing
    const internalHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;">
        <h2 style="font-size:24px;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">
          Nueva consulta de contacto
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:700;width:120px;">Nombre</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Email</td><td style="padding:8px 0;">${email}</td></tr>
          ${url ? `<tr><td style="padding:8px 0;font-weight:700;">Web</td><td style="padding:8px 0;">${url}</td></tr>` : ''}
          ${phone ? `<tr><td style="padding:8px 0;font-weight:700;">Teléfono</td><td style="padding:8px 0;">${phone}</td></tr>` : ''}
          ${msg ? `<tr><td style="padding:8px 0;font-weight:700;vertical-align:top;">Mensaje</td><td style="padding:8px 0;">${msg}</td></tr>` : ''}
        </table>
      </div>
    `;

    // Email de confirmación al usuario
    const confirmationHtml = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  body { margin:0; padding:0; background:#f4f4f5; }
  * { box-sizing:border-box; }
</style>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- Header -->
      <tr>
        <td style="background:#000000;padding:32px 40px;">
          <span style="font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:26px;text-transform:uppercase;letter-spacing:-0.03em;color:#ffffff;line-height:1;">
            nova.<span style="color:#f97316;">marketing</span>
          </span>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#ffffff;padding:48px 40px;">
          <h2 style="font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:26px;text-transform:uppercase;letter-spacing:-0.03em;color:#09090b;margin:0 0 20px 0;line-height:1.1;">
            ¡HEMOS RECIBIDO<br>TU CONSULTA!
          </h2>
          <p style="font-family:'Inter',Arial,sans-serif;font-size:16px;color:#52525b;line-height:1.7;margin:0 0 32px 0;">
            Hola <strong style="color:#09090b;">${name}</strong>, gracias por contactar con nosotros.<br>
            En breve uno de nuestros especialistas se pondrá en contacto contigo.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;border-radius:8px;margin-bottom:36px;">
            <tr>
              <td style="padding:24px;">
                <p style="font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#71717a;margin:0 0 10px 0;">TU MENSAJE</p>
                <p style="font-family:'Inter',Arial,sans-serif;font-size:15px;color:#3f3f46;line-height:1.6;margin:0;">${msg || 'Sin mensaje adicional'}</p>
              </td>
            </tr>
          </table>
          <a href="https://novamarketing.es" style="display:inline-block;background:#f97316;color:#ffffff;font-family:'Montserrat',Arial Black,sans-serif;font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;padding:16px 32px;text-decoration:none;border-radius:4px;">
            VISITAR LA WEB →
          </a>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f4f4f5;padding:20px 40px;border-top:1px solid #e4e4e7;">
          <p style="font-family:'Inter',Arial,sans-serif;font-size:12px;color:#a1a1aa;margin:0;">
            © Nova Marketing · <a href="mailto:hola@novamarketing.es" style="color:#a1a1aa;text-decoration:none;">hola@novamarketing.es</a>
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

    try {
      await Promise.all([
        transporter.sendMail({
          from: `"Nova Marketing Web" <${SMTP_USER}>`,
          to: CONTACT_TO,
          subject: `Nueva consulta de ${name}`,
          html: internalHtml,
          replyTo: email,
        }),
        transporter.sendMail({
          from: `"Nova Marketing" <${SMTP_USER}>`,
          to: email,
          subject: '¡Hemos recibido tu consulta! - Nova Marketing',
          html: confirmationHtml,
        }),
      ]);

      ctx.status = 200;
      ctx.body = { ok: true };
    } catch (err: any) {
      console.error('[Contact] Email error:', err.message);
      ctx.status = 500;
      ctx.body = { error: 'Failed to send email' };
    }
  },
};
