import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {

    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;1,300;1,400&family=Roboto:ital,wght@0,300;0,500;0,900;1,300;1,400;1,900&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            <main>
                { children }
            </main>

            <Footer />
        </>
    )

}

export default Layout;