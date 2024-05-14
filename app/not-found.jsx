'use client'

import '@styles/global.css'
import Image from 'next/image'

const notFound = ({ children }) => {
    return (
        <>
            <main className='flex h-screen grow flex-col justify-center items-center'>
                <p className='uppercase text-xl lg:text-2xl font-light text-center'>Erreur 404 | Ouppss page non trouvée éspèce de gros BEAU GOSSE</p>
                <Image
                    unoptimized
                    src="/assets/elements/tk-404.gif"
                    alt="page non trouvé"
                    width={500}
                    height={500}
                    className='object-contain block rounded-lg mt-24'
                />
            </main>
        </>

    )
}
export default notFound