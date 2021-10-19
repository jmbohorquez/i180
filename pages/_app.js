import Head from 'next/head'
import Layout from '../components/Layout';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <>
        <Head>
            <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
            <link rel="alternate icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon180X180.png" />
            <link rel="mask-icon" href="/favicon.svg" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default MyApp
