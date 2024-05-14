'use client'

import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react";

function Search() {
    const searchParams = useSearchParams();
    const err = searchParams.get('error')
    if (err) setErreur('Une erreur est survenue lors de la connexion')
    console.log(err)
}
const ButtonGoogle = ({ type }) => {
    const [erreur, setErreur] = useState("")

    const handleConnect = () => {
        signIn("google", { callbackUrl: '/dashboard', redirect: false })
    }
    return (
        <>
            <button
                className='bg-black duration-300 hover:bg-green-50 hover:text-black mt-12 text-white flex items-center justify-center p-3 m-1 shadow-lg rounded-lg basis-full flex-grow'
                type="button"
                onClick={handleConnect}
            >
                <FcGoogle
                    className='text-3xl mx-2'
                />
                {type}
            </button>
            <Suspense>
                <Search />
            </Suspense>
            {erreur &&
                <p className="text-red-500 mt-2 p-3">{erreur}</p>
            }
        </>
    )
}

export default ButtonGoogle