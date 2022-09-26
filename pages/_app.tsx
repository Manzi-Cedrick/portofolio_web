import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import Nprogress from 'nprogress'

Nprogress.configure({ showSpinner: true });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
