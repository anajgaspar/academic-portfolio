import ejs from "ejs";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "views", "sobre.ejs");
  const template = fs.readFileSync(filePath, "utf-8");

  const html = ejs.render(template, {
    titulo: "Sobre mim"
  });

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
