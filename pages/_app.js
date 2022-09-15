import { Footer, Nav } from '../components';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
