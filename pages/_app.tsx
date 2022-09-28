import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import Nprogress from 'nprogress'
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
Nprogress.configure({ showSpinner: true });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());


function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
      <SessionProvider session={session}>
        <Navbar/>
        <Component {...pageProps} />
      </SessionProvider>
  );
}

export default MyApp
