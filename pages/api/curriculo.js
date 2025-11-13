import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const pdfPath = path.join(process.cwd(), 'public', 'img', 'CurriculoPT.pdf');
  if (!fs.existsSync(pdfPath)) {
    res.status(404).json({ error: 'Arquivo não encontrado' });
    return;
  }
  const stat = fs.statSync(pdfPath);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', 'inline; filename=CurriculoPT.pdf');
  const stream = fs.createReadStream(pdfPath);
  stream.pipe(res);
}
