'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const DeleteProjet = ({ params }) => {
    const router = useRouter()
    const [projet, setProjet] = useState({})
    const [erreur, setErreur] = useState('')
    const [charged, setCharged] = useState(false)

    useEffect(() => {
        const fetchProjet = async () => {
            try {
                const response = await fetch(`/api/admin/portfolio/${params.id}`, {
                    method: 'GET'
                })
                const data = await response.json()
                if (response.ok) {
                    setProjet(data)
                    setCharged(true)
                }
            } catch (error) {
                console.log(error)
                setErreur('Une erreur est survenue lors du fetch du projet.')
            }
        }
        fetchProjet()
    }, [params.id])

    const handleSubmitDeleteProjet = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`/api/admin/portfolio/${params.id}`, {
                method: 'DELETE'
            })
            const data = await response.json()
            if(response.ok){
                router.push('/admin/portfolio/projets/')
            }
        } catch (error) {
            console.log(error)
            setErreur('Une erreur est survenue lors de la suppression du projet.')
        }
    }
    return (
        <main className="min-h-[75vh]">
            {charged ? (
                <form onSubmit={handleSubmitDeleteProjet} className="p-4 bg-fond-3 rounded-md mx-auto max-w-[800px] my-4">
                    <h1 className="text-center uppercase my-5 text-2xl">Supprimer : {projet.name}</h1>
                    <Image
                        alt={projet.name}
                        src={projet.image}
                        width={1200}
                        height={900}
                        className="w-full rounded-md shadow-2xl"
                    />
                    <p>Lien : {projet.link}</p>
                    <button className="p-3 bg-red-500 rounded-md block uppercase px-12 hover:px-24 mx-auto my-4 duration-200" type="submit">Supprimer</button>
                </form>
            ) : (
                <div className="p-4 text-center bg-fond-3 rounded-md mx-auto max-w-[800px] my-4">
                    <p>Chargement du projet en cours ...</p>
                    {erreur &&
                        <p className="text-red-500 text-center py-4">{erreur}</p>
                    }
                </div>

            )}

        </main>
    )
}

export default DeleteProjet