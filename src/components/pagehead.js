import Head from 'next/head'
//import {GoogleFonts} from 'next-google-fonts'

const PageHead = ({ children, title }) => {
    return (
        <>
            {/**TODO:FIXME: Remove the fonts if custom fonts are needed. Also uncomment in tailwind.config.js and globals.css */}
            {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" /> */}
            <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta charset="utf-8" />
                <title>{title}</title>
                {children}
            </Head>
        </>
    )
}

export default PageHead
