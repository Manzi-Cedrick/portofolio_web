import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nprogress from  'nprogress';
import { Router } from 'next/router';

Nprogress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
