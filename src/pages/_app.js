//import Auth0ProviderWithHistory from '@lib/auth0-provider'
import Head from 'next/head'
import Router from 'next/router'
import { Auth0Provider } from '@auth0/auth0-react'

import '@styles/globals.css'

const onRedirectCallback = (appState) => {
    console.log(
        'OnRedirectCallback()::: ',
        appState,
        'origin: ',
        window.location.origin
    )

    if (appState && appState.returnTo) {
        console.log('OnRedirectCallback() -> returnTo')
        Router.replace(appState.returnTo)
        //Router.push('/tesla')
    } else {
        console.log('Call via origin, ', window.location.origin)
        Router.replace(window.location.origin)
    }
}

function MyApp({ Component, pageProps }) {
    // if (process.env.NODE_ENV === 'production') {
    //     console.log = () => {}
    // }

    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
            redirectUri={
                typeof window !== 'undefined' && window.location.origin
            }
            onRedirectCallback={onRedirectCallback}
            useRefreshTokens={true}
        >
            <Head>
                <meta name="viewport" content="width=device-width" />
                <meta charSet="utf-8" />
            </Head>

            <Component {...pageProps} />
        </Auth0Provider>
    )
}

export default MyApp
