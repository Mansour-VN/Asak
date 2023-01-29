import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Lalezar&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body style={{ direction: "rtl", backgroundColor:"whitesmoke"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
