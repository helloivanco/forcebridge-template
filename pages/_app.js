import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Force Bridge</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
