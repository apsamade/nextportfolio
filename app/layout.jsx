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
                <title>Portfolio Bouderga Abdel-samade Développeur web</title>
                <meta name="description" content="Je suis Abdel-Samade Bouderga, un développeur web spécialisé en JavaScript, React.js et Next.js. À la recherche d'une alternance, passionné et performant. Découvrez mon portfolio ici." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />
                <link rel="shortcut icon" href="/logo/logo_ab_transparent.png" type="image/x-icon" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta property="og:title" content="Portfolio Bouderga Abdel-samade Développeur web" />
                <meta property="og:description" content="Je suis Abdel-Samade Bouderga, un développeur web spécialisé en JavaScript, React.js et Next.js. À la recherche d'une alternance, passionné et performant. Découvrez mon portfolio ici." />
                <meta property="og:image" content="/assets/elements/photo_presentation_2.jpg" />
                <meta property="og:url" content="https://portfolio-bouderga.vercel.app/" />
            </head>

            <body className={pathname.startsWith('/dashboard') ? 'bg-fond text-white' : 'bg-fond text-white'}>
                <Provider>
                    <Nav />
                    {children}
                    <Footer />
                </Provider>
            </body>

        </html>

    )
}
export default RootLayout