import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JPH Blog</title>
        <meta
          name="description"
          content="Testing nextjs/swr with jsonplaceholder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
}
