import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>DY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=6kbpgfbf8d"
        ></Script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
