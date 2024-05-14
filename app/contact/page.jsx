'use client'

import { useState } from "react"

const Contact = () => {
    const [submitting, setSubmitting] = useState(false)
    const [message, setMessage] = useState('Envoyer')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        const email = e.target.email.value
        const nom = e.target.nom.value
        const prenom = e.target.prenom.value
        const message = e.target.message.value

        try {

            if (email && nom && prenom && message) {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify({ email, nom, prenom, message })
                })
                console.log(res)
                if (res.ok) {
                    setMessage('Message envoyer !')
                    setTimeout(() => {
                        setSubmitting(false)
                        setMessage('Envoyer')
                    }, 12000)
                } else {
                    setError(res.error)
                    setSubmitting(false)
                    setTimeout(() => {
                        setError('')
                    }, 12000)

                }

            } else {
                setError('Veuillez remplir tous les champs.')
                setSubmitting(false)
                setTimeout(() => {
                    setError('')
                }, 12000)
            }


        } catch (error) {
            setError(error)
            console.log(error)
            setTimeout(() => {
                setError('')
            }, 12000)
        }
    }

    return (
        <main className='min-h-[85vh] px-3 xl:px-0 bg-contact-bg bg-cover pt-12 xl:pt-24 pb-8'>
            <section>
                <h2 className="text-center md:-mx-0 -mx-3 py-4 uppercase text-3xl">Contact & Support</h2>
                <p className='py-5 text-md font-extralight text-center uppercase'>Envoyer nous un message ça nous fera extrèmement plaisir !</p>
                <form
                    onSubmit={handleSubmit}
                    className="border text-black bg-white m-3 flex-wrap rounded-md py-12 px-4 shadow-2xl my-4 flex justify-center items-center mx-auto max-w-[800px]"
                >
                    <input className="basis-full focus:outline-sky-500 outline-1 outline outline-offset-1 outline-transparent grow border border-slate-200 shadow-md focus:shadow-xl duration-200 p-4 rounded-md m-2" type="email" name="email" id="email" required placeholder="Email" />
                    <input type="text" name="nom" id="nom" required placeholder="Nom" className="basis-[250px] rounded-lg shadow-md focus:outline-sky-500 duration-200 outline-1 focus:shadow-xl outline outline-offset-1 outline-transparent border border-slate-200 p-4 m-2 grow" />
                    <input type="text" name="prenom" id="prenom" required placeholder="Prénom" className="basis-[250px] m-2 shadow-md p-4 rounded-lg border duration-200 border-slate-200 focus:shadow-xl focus:outline-sky-500 outline-1 outline outline-offset-1 outline-transparent grow" />
                    <textarea className="basis-full text-black focus:outline-sky-500 outline-1 outline outline-offset-1 outline-transparent grow border border-slate-200 shadow-md focus:shadow-xl duration-200 p-4 rounded-md m-2" name="message" required id="message" placeholder="Message"></textarea>
                    <button
                        type="submit"
                        disabled={submitting}
                        className={message == 'Message envoyer !' ?
                            "w-ful shadow-md hover:shadow-xll p-4 uppercase text-center bg-green-600 basis-full grow text-white m-2 rounded-lg mt-8"
                            : "w-ful shadow-md hover:shadow-xll p-4 uppercase text-center bg-black basis-full grow text-white m-2 rounded-lg hover:bg-sky-500 hover:text-white duration-200 mt-8"}
                    >
                        {message}
                    </button>
                    {error &&
                        <p className='message text-center xl:text-left basis-full p-2 text-red-600 font-normal'>
                            {error}
                        </p>
                    }
                </form>
            </section>
        </main>
    )
}

export default Contact