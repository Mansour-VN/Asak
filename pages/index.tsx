import Head from 'next/head';
import HomePage from './HomePage/HomePage';
export default function Home() {
  return (
    <>
      <Head>
        <title>Asack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mainContainer">
        <HomePage/>
      </main>
    </>
  )
}
