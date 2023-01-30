import Layout from '@/components/Layout/layout';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {

//   useEffect(()=>{
//     import("bootstrap/dist/js/bootstrap");
// },[])
    useEffect(() => {
        typeof document !== undefined
            ? require('bootstrap/dist/js/bootstrap')
            : null
    }, [])
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
}
