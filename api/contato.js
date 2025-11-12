import ejs from "ejs";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "views", "contato.ejs");
  const template = fs.readFileSync(filePath, "utf-8");

  if (req.method === "POST") {
    const { nome, email, msg } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email_user,
        pass: process.env.email_pass
      }
    });

    const mailOptions = {
      from: email,
      to: "anagaspar0527@gmail.com",
      subject: "Mensagem do portfólio",
      text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${msg}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ enviado: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ enviado: false });
    }

  } else { // GET
    const html = ejs.render(template, {
      enviado: false,
      titulo: "Contato",
      descricao: "Abaixo estão os meus links de contato. Sinta-se à vontade para me enviar uma mensagem!"
    });

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  }
}
