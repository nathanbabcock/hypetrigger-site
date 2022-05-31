import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { GA_TRACKING_ID } from '../src/config'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hypetrigger: Automatic highlight clips</title>
        <meta
          name="keywords"
          content="clip, record gameplay, save clips, automatic highlights, automatic clips, montage creator, computer vision, gpu accelerated, obs, ffmpeg"
        />
        <meta
          name="description"
          content="Automatically detect gaming highlights. GPU accelerated and powered by computer vision AI."
        />
        <meta name="generator" content="NextJS 12.1.6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.svg" type="image/svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* eslint-disable-next-line @next/next/next-script-for-ga */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="ga-script"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />

      <Script
        src="//instant.page/5.1.0"
        type="module"
        integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
