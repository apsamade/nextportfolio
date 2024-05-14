"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { redirect } from "next/navigation"

const Profile = () => {
    const { data: session, status } = useSession()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [openDelete, setOpenDelete] = useState(false)

    if (status === 'unauthenticated') return redirect('/connexion')

    const deleteAccount = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/profile', {
                method: 'DELETE',
                body: JSON.stringify({ userId: session?.user._id })
            })
            console.log(res)
            if (res.ok) {
                signOut({ redirect: false })
            } else {
                console.log(res)
            }
        } catch (error) {
            console.log('erreur coté serveur ? ', error)
            setError(error)
        }
    }
    if (status === 'loading') {
        return (
            <section className="min-h-[60vh]">
                <h1 className='text-center flex items-center justify-center h-full uppercase font-light text-4xl absolute top-0 left-0 bottom-0 right-0 '>Chargement en cours ...</h1>
            </section>
        )
    }
    return (
        <>
            <div className="fixed -z-50 top-0 right-0 left-0 bottom-0 bg-profile-bg bg-cover bg-fixed"></div>

            <section className="min-h-[75vh]">
                <h1 className="p-8 text-3xl text-center uppercase">Mon Profile</h1>

                {/* information perso */}
                <section className="bg-black my-3 p-5 max-w-3xl mx-auto rounded-md shadow-2xl">
                    <h2 className="text-xl uppercase text-center py-4">Informations personnelles</h2>
                    <ul>
                        <li className="py-3">Nom : <span className="text-sm sm:text-base sm:font-normal font-light">{session?.user.name}</span></li>
                        <li className="py-3">Email : <span className="text-sm sm:text-base sm:font-normal font-light">{session?.user.email}</span></li>
                    </ul>
                </section>

                <button
                    onClick={() => signOut({ redirect: true })}
                    className="text-center min-w-[325px] my-5 block shadow-2xl mx-auto p-4 px-12 hover:px-16 hover:bg-red-700 duration-200 bg-red-500 rounded-lg"
                    type="button"
                >
                    Déconnexion
                </button>
                <button
                    onClick={() => { setOpenDelete(!openDelete) }}
                    className={`text-center min-w-[325px] my-5 block shadow-2xl mx-auto p-4 px-12 hover:px-16 ${openDelete ? 'hover:bg-sky-700 bg-sky-500' : 'hover:bg-red-700 bg-red-500'} duration-200 rounded-lg`}
                    type="button"
                >
                    {openDelete ? 'Annuler' : 'Supprimer mon compte'}
                </button>
                {openDelete &&
                    <form onSubmit={deleteAccount} className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000d6] z-50  flex items-center justify-center flex-col">
                        <div className="bg-fond-3 m-3 p-6 rounded-md shadow-2xl">
                            <p className="text-center">Êtes vous sur de vouloir supprimer votre compte ?</p>
                            <div className="flex items-center justify-center flex-wrap">
                                <button
                                    className="text-center mx-2 min-w-[325px] my-5 block shadow-2xl p-4 px-12 hover:px-16 hover:bg-red-700 duration-200 bg-red-500 rounded-lg"
                                    type="submit"
                                >
                                    Supprimer mon compte
                                </button>
                                <button
                                    onClick={() => { setOpenDelete(!openDelete) }}
                                    className={`text-center min-w-[325px] my-5 block shadow-2xl mx-2 p-4 px-12 hover:px-16 ${openDelete ? 'hover:bg-sky-700 bg-sky-500' : 'hover:bg-red-700 bg-red-500'} duration-200 rounded-lg`}
                                    type="button"
                                >
                                    {openDelete ? 'Annuler' : 'Supprimer mon compte'}
                                </button>
                            </div>

                        </div>
                    </form>
                }

            </section>
        </>
    )
}

export default Profile