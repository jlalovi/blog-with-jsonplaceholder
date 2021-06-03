import PropTypes from 'prop-types';
import Router from 'next/router';
import { SWRConfig } from 'swr';
import Head from 'next/head';
import globalStyles from 'styles/globalStyles';
import NavBar from 'components/NavBar';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        /* refreshInterval: 60000, */
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <Head>
        <title>JPH Blog</title>
        <meta
          name="description"
          content="Testing nextjs/swr with jsonplaceholder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </SWRConfig>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
