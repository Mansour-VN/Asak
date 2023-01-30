import Head from 'next/head';
import { useState, useContext } from 'react';
import HomePage from './HomePage/HomePage';
import Theme from "./../Context/theme";

export default function Home() {

    const theme = useContext(Theme);
    
    const {darkMode} = theme;

    console.log("darkMode is : ", darkMode)
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
