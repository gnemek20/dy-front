import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>DY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
