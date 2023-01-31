import Layout from '@/components/Layout/layout';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./../styles/globals.scss";
import { AppWrapper } from '@/Context/theme';


export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        typeof document !== undefined
            ? require('bootstrap/dist/js/bootstrap')
            : null
    }, [])

  return (
    <AppWrapper>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </AppWrapper>
)
}
