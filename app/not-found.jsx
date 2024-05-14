'use client'

import '@styles/global.css'
import Image from 'next/image'
import NavUser from '@components/NavUser'
import { usePathname } from 'next/navigation'

const notFound = ({ children }) => {
    const pathname = usePathname()
    if (pathname.startsWith('/dashboard')) {
        return (
            <>
                <section className='flex w-full'>
                    <NavUser />
                    <main className='flex h-screen grow flex-col justify-center items-center'>
                        <p className='uppercase text-xl lg:text-2xl font-light text-center'>Erreur 404 | Ouppss page non trouvée éspèce de gros BEAU GOSSE</p>
                        <Image
                            unoptimized
                            src="/assets/elements/tk-404.gif"
                            alt="oupsi 404 not found"
                            width={500}
                            height={500}
                            className='object-contain block rounded-lg mt-24'
                        />
                    </main>
                </section>

            </>
        )
    }
    return (
        <>
            <main className='flex h-screen grow flex-col justify-center items-center'>
                <p className='uppercase text-xl lg:text-2xl font-light text-center'>Erreur 404 | Ouppss page non trouvée éspèce de gros BEAU GOSSE</p>
                <Image
                    src="/assets/elements/tk-404.gif"
                    alt=""
                    width={500}
                    height={500}
                    className='object-contain block rounded-lg mt-24'
                />
            </main>
        </>

    )
}
export default notFound