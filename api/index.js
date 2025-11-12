import ejs from "ejs";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "views", "inicio.ejs");
  const template = fs.readFileSync(filePath, "utf-8");

  const html = ejs.render(template, {
    nome: "Ana Gaspar",
    cargo: "Desenvolvedora Full-stack"
  });

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
