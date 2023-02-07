import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>App Projects Portal: jamesfm.dev</title>
        <meta name="description" content="App projects of jamesfm.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-8 my-8">
        <h1 className="text-center text-4xl">
          App Projects Portal: jamesfm.dev
        </h1>
      </main>
    </>
  );
}
