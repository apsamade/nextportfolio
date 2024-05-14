'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Nav = () => {
    const pathname = usePathname()
    const { data: session, status } = useSession()
    const [openMenu, setOpenMenu] = useState(false)
    const handleNav = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <>
            <nav className={`link ${pathname === '/' || pathname === '/evenements' || pathname === '/contact' || pathname === '/decouvrir' ? 'lg:flex z-50 w-full hidden justify-between items-center absolute p-3'
                : 'lg:flex z-50 w-full hidden bg-black justify-between items-center p-3'}`}>
                <Link
                    href='/'
                >
                    <Image
                        src='/logo/logo_brigade_2.png'
                        alt='Logo Brigade Fantôme'
                        width={75}
                        height={75}
                        className='rounded-[100%] p-2 hover:scale-110 duration-200'
                    />
                </Link>
                <ul className='flex justify-center items-center'>
                    <li>
                        <Link
                            href='/decouvrir'
                            className='p-4 border-b border-transparent hover:border-white duration-200'
                        >
                            Découvrir
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/blog'
                            className='p-4 border-b border-transparent hover:border-white duration-200'
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/evenements'
                            className='p-4 border-b border-transparent hover:border-white duration-200'
                        >
                            Évenements
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/contact'
                            className='p-4 border-b border-transparent hover:border-white duration-200'
                        >
                            Contact & Support
                        </Link>
                    </li>
                </ul>

                <ul className='flex justify-center items-center'>
                    <li>
                        {status === 'loading' && (
                            <p className='bg-fond p-4 rounded-md'>loading ...</p>
                        )}
                        {status === 'authenticated' && (
                            <Link
                                onClick={handleNav}
                                href='/dashboard'
                            >
                                <Image
                                    src={session?.user.image}
                                    alt='Photo de profile'
                                    width={50}
                                    height={50}
                                    className='block hover:scale-110 duration-200 rounded-[100%] mr-2'
                                />
                            </Link>
                        )}
                        {status === 'unauthenticated' && (
                            <Link
                                onClick={handleNav}
                                href='/connexion'
                                className='p-4 rounded-full hover:bg-emerald-700 px-8 bg-red-600 duration-200'
                            >
                                Connexion
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
            <div
                onClick={handleNav}
                className='fixed z-50 top-0 hover:px-6 duration-200 right-0 lg:hidden cursor-pointer p-1'
            >
                <AiOutlineMenu size={45} className='text-sky-300' />
            </div>
            <aside
                className={openMenu ? 'fixed z-20 top-0 right-0 bottom-0 max-w-[350px] w-[70%] lg:hidden duration-200 p-2 bg-black ease-out justify-center flex-col flex items-center'
                    : 'fixed z-20 top-0 right-[-101%] bottom-0 max-w-[400px] w-[70%] lg:hidden duration-300 p-2 bg-black ease-out justify-center flex-col flex items-center'}
            >
                <Link
                    href='/'
                    className='p-4 mb-4'
                    onClick={handleNav}
                >
                    <Image
                        src='/logo/logo_brigade_2.png'
                        alt='Logo Brigade Fantôme'
                        width={75}
                        height={75}
                        className='rounded-[100%] p-2 hover:scale-110 duration-200'
                    />
                </Link>
                <ul className='flex px-4 my-4 w-full justify-center flex-col items-start'>
                    <li>
                        <Link
                            onClick={handleNav}
                            href='/decouvrir'
                            className='p-4 py-2 my-2 block border-b border-transparent hover:border-white duration-200'
                        >
                            Découvrir
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleNav}
                            href='/blog'
                            className='p-4 py-2 my-2 block border-b border-transparent hover:border-white duration-200'
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleNav}
                            href='/evenements'
                            className='p-4 py-2 my-2 block border-b border-transparent hover:border-white duration-200'
                        >
                            Évenements
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleNav}
                            href='/contact'
                            className='p-4 py-2 my-2 block border-b border-transparent hover:border-white duration-200'
                        >
                            Contact & Support
                        </Link>
                    </li>
                </ul>

                <ul className='flex m-4 mt-16 flex-col justify-center items-center'>
                    <li>
                        {session?.user ? (
                            <Link
                                onClick={handleNav}
                                href='/dashboard'
                                className='rounded-md flex items-end justify-center hover:bg-white hover:text-black duration-200 p-2'
                            >
                                <Image
                                    src={session?.user.image}
                                    alt='Photo de profile'
                                    width={50}
                                    height={50}
                                    className='block rounded-[100%] mr-2'
                                />
                                {session?.user.pseudo}
                            </Link>
                        ) : (
                            <Link
                                onClick={handleNav}
                                href='/connexion'
                                className='p-4 rounded-full hover:bg-emerald-700 px-8 bg-red-600 duration-200'
                            >
                                Connexion
                            </Link>
                        )}
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Nav