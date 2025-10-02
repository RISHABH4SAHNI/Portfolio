import '../styles/globals.css'
import '../styles/myname.css'
import '../styles/contactme.css'
import '../styles/projects.css'
import '../styles/myimage.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rishabh Sahni - Software Engineer Portfolio</title>
        <meta name="description" content="Personal portfolio of Rishabh Sahni - Software Engineer specializing in web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp