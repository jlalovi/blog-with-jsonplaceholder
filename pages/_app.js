import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import Head from 'next/head';
import globalStyles from 'styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60000, // Refresh every 1m (New posts, users, etc.)
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
