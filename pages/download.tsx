import Head from 'next/head'

export default function DownloadRedirect() {
  return (
    <Head>
      <meta httpEquiv="refresh" content="0;url=/#download" />
    </Head>
  )
}
