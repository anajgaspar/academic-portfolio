import ejs from "ejs";
import fs from "fs";
import path from "path";

import projetos from "../../data/projetos.js";

export default async function handler(req, res) {
  const { id } = req.query;
  const projeto = projetos.find(p => p.id === Number(id));

  if (!projeto) {
    res.status(404).send("Projeto não encontrado");
    return;
  }

  const filePath = path.join(process.cwd(), "views", "projetos-detalhes.ejs");
  const template = fs.readFileSync(filePath, "utf-8");

  const html = ejs.render(template, {
    titulo: projeto.titulo,
    projeto
  });

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
