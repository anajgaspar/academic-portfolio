import nodemailer from 'nodemailer';

async function parseBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on && req.on('data', (chunk) => { raw += chunk.toString(); });
    req.on && req.on('end', () => {
      const ct = (req.headers && req.headers['content-type']) || '';
      if (ct.includes('application/json')) {
        try { resolve(JSON.parse(raw)); } catch (e) { resolve({}); }
        return;
      }
      const obj = {};
      raw.split('&').forEach(pair => {
        if (!pair) return;
        const [k,v] = pair.split('=');
        try { obj[decodeURIComponent(k)] = decodeURIComponent((v||'').replace(/\+/g,' ')); } catch(e) { obj[k]=v; }
      });
      resolve(obj);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = (req.body && Object.keys(req.body).length) ? req.body : await parseBody(req);
  const { nome, email, msg } = body || {};

  if (!process.env.email_user || !process.env.email_pass) {
    console.error('Missing email credentials (email_user/email_pass)');
    res.writeHead(302, { Location: '/contato?erro=env' });
    res.end();
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.email_user, pass: process.env.email_pass }
  });

  const mailOptions = {
    from: email,
    to: 'anagaspar0527@gmail.com',
    subject: 'Mensagem do portfólio',
    text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${msg}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.writeHead(302, { Location: '/contato?enviado=true' });
    res.end();
  } catch (err) {
    console.error('sendMail error', err);
    res.writeHead(302, { Location: '/contato?erro=send' });
    res.end();
  }
}
