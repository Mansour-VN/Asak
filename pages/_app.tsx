import Layout from '@/components/Layout/layout';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./../styles/globals.scss";
import ThemingContext  from '../Context/theme';

export default function App({ Component, pageProps }: AppProps) {

//   useEffect(()=>{
//     import("bootstrap/dist/js/bootstrap");
// },[])
useEffect (()=>{
      import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <ThemingContext.Provider value={{darkMode:false}}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
</ThemingContext.Provider>

)
}
