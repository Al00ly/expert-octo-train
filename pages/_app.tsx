import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Portfolio - Full Stack Developer</title>
        <meta name="description" content="تجربتي في تطوير الويب الحديث" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}