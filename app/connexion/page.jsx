'use client'

import Link from 'next/link'
import { useState } from 'react'
import ButtonGoogle from '@components/ButtonGoogle';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Connexion = () => {
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handlErr = () => {
        setSubmitting(false)
        setTimeout(() => {
            setError('')
        }, 3000)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        const email = e.target.email.value;
        const mdp = e.target.mdp.value;

        const credentials = { email, mdp }

        if (!email || !mdp) {
            setError('Identifiants manquant.')
            handlErr();
        } else {

            try {
                const response = await signIn('credentials', {
                    ...credentials,
                    callbackUrl: '/dashboard',
                    redirect: false,
                });
                console.log(response)
                if (response.status == 403) {
                    setError('Mot de passe incorrect.')
                    handlErr();
                }
                if (response.status == 401) {
                    setError('Utilisateur non existant.')
                    handlErr();
                }
                if(response.ok) return router.push(response.url)
            } catch (error) {
                console.log('Erreur inattendu lors de l\'envoie de formulaire', error)
                setError('Erreur inattendu lors de l\'envoie de formulaire')
                handlErr();
            }
        }

    }
    return (
        <main className='min-h-screen bg-from bg-cover bg-center flex flex-col justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='max-w-4xl m-2 p-5 bg-white text-black rounded-md shadow-xl'
            >
                <h2 className='uppercase bg-gradient-to-r pt-5 lg:text-3xl text-2xl pb-8 text-center'>Connexion</h2>
                <div className='flex flex-wrap items-center justify-center'>
                    <input className='rounded-md p-3 m-2 bg-sky-200 basis-full flex-grow duration-300 outline-transparent focus:outline focus:outline-sky-600' type="email" placeholder='E-mail' name='email' />
                    <input className='rounded-md p-3 m-2 bg-sky-200 basis-2/5 flex-grow duration-300 outline-transparent focus:outline focus:outline-sky-600' type="password" name="mdp" id="mdp" placeholder='Mot de passe' />
                    <button
                        disabled={submitting}
                        className={submitting ?
                            'p-3 m-2 flex-grow rounded-3xl outline outline-1 outline-sky-600 bg-sky-600 text-white duration-300'
                            : 'p-3 m-2 flex-grow rounded-3xl outline outline-1 outline-black hover:bg-black hover:text-white duration-300'}
                        type="submit"
                    >
                        Connexion
                    </button>
                    {error &&
                        <p className='message text-center xl:text-left basis-full p-2 text-red-600 font-normal'>
                            {error}
                        </p>
                    }
                    <ButtonGoogle type='Se connecter avec Google' />
                </div>
            </form>
            <Link
                href="/inscription"
                className='pt-2 pb-1 m-2 border-b border-white hover:px-3 duration-300'
            >
                S'inscrire
            </Link>
        </main>
    )
}

export default Connexion