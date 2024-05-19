'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const EditProjet = ({ params }) => {
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

    const handleSubmitEditProjet = async (e) => {
        e.preventDefault()
        setCharged(false)
        const name = e.target.name.value
        const link = e.target.link.value

        const image = e.target.image.files[0];
        const formData = new FormData();

        try {
            const requestBody = {name, link}
            if (image) {
                formData.append('image', image);

                const imgBbResponse = await fetch('https://api.imgbb.com/1/upload?key=7e355e2fd9ded33cc639b35053eba9b4', {
                    method: 'POST',
                    body: formData,
                });
                const imgData = await imgBbResponse.json();

                if (imgData.success) {
                    requestBody.image = imgData.data.url;
                    setProjet({ image: imgData.data.url })
                } else {
                    setErreur('Une erreur est survenue lors du téléchargement de l\'image');
                    return;  // Arrêter la fonction ici si l'image est obligatoire pour continuer
                }
            }
            const response = await fetch(`/api/admin/portfolio/${params.id}`, {
                method: 'PATCH',
                body: JSON.stringify(requestBody)
            })
            const data = await response.json()
            if (response.ok) {
                setProjet(data)
                setCharged(true)
            }
        } catch (error) {
            console.log(error)
            setErreur('Une erreur est survenue lors de la suppression du projet.')
        }
    }
    return (
        <main className="min-h-[75vh]">
            {charged ? (
                <form onSubmit={handleSubmitEditProjet} className="p-4 bg-fond-3 flex items-center justify-center flex-wrap rounded-md mx-auto max-w-[800px] my-4">
                    <h1 className="text-center basis-full uppercase my-5 text-2xl">Modifier : {projet.name}</h1>
                    <Image
                        alt={projet.name}
                        src={projet.image}
                        width={1200}
                        height={900}
                        className="w-auto basis-full object-contain max-h-[500px] rounded-md shadow-2xl"
                    />
                    <input type="text" name="link" className="p-3 rounded-md bg-transparent outline outline-2 outline-white focus:outline-sky-500 duration-200 my-3 basis-full grow" id="link" placeholder={projet.link} />
                    <input type="text" name="name" id="name" className="p-3 rounded-md bg-transparent outline outline-2 outline-white focus:outline-sky-500 duration-200 my-3 basis-full grow" placeholder={projet.name} />
                    <input type="file" name="image" id="image" className="p-3 rounded-md bg-transparent outline outline-2 outline-white focus:outline-sky-500 duration-200 my-3 basis-full grow" />
                    <button className="p-3 bg-sky-500 rounded-md block uppercase px-12 hover:px-24 mx-auto my-4 duration-200" type="submit">Modifier</button>
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

export default EditProjet