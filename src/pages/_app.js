import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/normalize.css'


import packageJson from '../../package.json';

function MyApp({ Component, pageProps }) {

    const versionLayout = () => {
        if (process.env.NEXT_PUBLIC_ISDIST != "true") {
            return <div className="version" >{packageJson.version}</div>
        }
    }

    return (
        <>
            <Head>
                <meta charSet="Unicode/UTF-8" />
                <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 viewport-fit=cover" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            {versionLayout()}

            <Component {...pageProps} />
        </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp