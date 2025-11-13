import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import competencias from '../data/competencias.js';

export default function Habilidades({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getServerSideProps(ctx) {
  const filePath = path.join(process.cwd(), 'views', 'habilidades.ejs');
  const template = fs.readFileSync(filePath, 'utf8');

  let headerCss = '';
  let pageCss = '';
  try { headerCss = fs.readFileSync(path.join(process.cwd(), 'public', 'css', 'header.css'), 'utf8'); } catch(e){}
  try { pageCss = fs.readFileSync(path.join(process.cwd(), 'public', 'css', 'habilidades.css'), 'utf8'); } catch(e){}

  function embed(p) {
    try {
      if (!p) return '';
      if (/^https?:\/\//.test(p)) return p;
      const rel = p.replace(/^\//, '');
      const fp = path.join(process.cwd(), 'public', rel);
      if (!fs.existsSync(fp)) return p;
      const buf = fs.readFileSync(fp);
      const ext = path.extname(fp).toLowerCase().slice(1);
      const mime = ext === 'svg' ? 'image/svg+xml' : (ext === 'jpg' ? 'image/jpeg' : `image/${ext}`);
      return `data:${mime};base64,${buf.toString('base64')}`;
    } catch (e) { return p; }
  }

  const html = ejs.render(template, {
    titulo: 'Competências',
    competencias,
    headerCss,
    pageCss,
    embed
  }, {
    root: path.join(process.cwd(), 'views'),
    filename: filePath
  });

  return { props: { html } };
}
