'use client'

import '@styles/global.css'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { usePathname } from 'next/navigation'

const RootLayout = ({ children }) => {
    const pathname = usePathname()
    
    return (
        <html lang="fr">
            <head>
                <meta name="author" content="Abdel-Samade Bouderga" />
                <meta name="robots" content="index, follow" />
                <title>Portfolio Bouderga Abdel-samade</title>
                <meta name="description" content="Site officiel de la Brigade Fantôme organisation de tournoi de jeux vidéo compétitif tel que Warzone / League of Legends / NBA et autre." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />
                <link rel="shortcut icon" href="/logo/logo_brigade_2.png" type="image/x-icon" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta property="og:title" content="Tournoi de la Brigade Fantôme" />
                <meta property="og:description" content="Site officiel de la Brigade Fantôme organisation de tournoi de jeux vidéo compétitif tel que Warzone / League of Legends / NBA et autre." />
                <meta property="og:image" content="/logo/logo_brigade_2.png" />
                <meta property="og:url" content="https://brigadefantome.vercel.app/" />
            </head>

            <body className={pathname.startsWith('/dashboard') ? 'bg-fond text-white flex p-4' : 'bg-fond text-white'}>
                <Provider>
                    {!pathname.startsWith('/dashboard') && <Nav />}
                    {children}
                    {!pathname.startsWith('/dashboard') && <Footer />}
                </Provider>
            </body>

        </html>

    )
}
export default RootLayout