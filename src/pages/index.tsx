import Head from "next/head";
import { Form, Header } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>App Projects Portal: jamesfm.dev</title>
        <meta name="description" content="App projects of jamesfm.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="container mx-auto grid md:grid-cols-2">
          <section>
            <Form />
          </section>
        </div>
      </main>
    </>
  );
}
