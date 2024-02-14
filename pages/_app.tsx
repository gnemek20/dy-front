import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>DY</title>
        <meta name="viewport" content="user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
