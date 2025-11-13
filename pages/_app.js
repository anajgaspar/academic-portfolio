import Head from 'next/head';
import '../public/css/header.css';
import '../public/css/inicio.css';
import '../public/css/projetos.css';
import '../public/css/projetos-detalhes.css';
import '../public/css/sobre.css';
import '../public/css/habilidades.css';
import '../public/css/contato.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
