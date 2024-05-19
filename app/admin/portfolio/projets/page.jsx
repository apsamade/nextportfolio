'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const Projets = () => {
    const [projets, setProjets] = useState([])
    const [charged, setCharged] = useState(false)
    const [erreur, setErreur] = useState('')

    useEffect(() => {
        const fetchProjet = async () => {
            try {
                const response = await fetch('/api/projets', {
                    method: 'GET'
                })
                if (response.ok) {
                    const data = await response.json()
                    setProjets(data)
                    setCharged(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjet()
    }, [])

    return (
        <main className="min-h-[75vh]">
            {charged ? (
                <div className="projets p-4 xl:mt-16 mb-24 gap-4 max-w-[1200px] mx-auto">
                    {projets?.map(projet =>
                        <div href={projet.link} key={projet._id} className="relative hover:scale-105 duration-200 min-h-[155px] overflow-hidden rounded-md">
                            <Image
                                alt={projet.name}
                                src={projet.image}
                                width={300}
                                height={200}
                                className="absolute shadow-2xl object-top w-full object-cover h-full rounded-md top-0 right-0 bottom-0 left-0"
                            />
                            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#000000AA] hover:bg-[#00000033] duration-200 flex flex-col items-center justify-center">
                                <p className="bg-black p-3 rounded-md m-2">{projet.name}</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <Link className="bg-sky-600 hover:px-6 duration-200 p-3 rounded-md m-2 block" href={`/admin/portfolio/projets/${projet._id}/modifier`}>Modifier</Link>
                                    <Link className="bg-red-600 hover:px-6 duration-200 p-3 rounded-md m-2 block" href={`/admin/portfolio/projets/${projet._id}/supprimer`}>Supprimer</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h3 className="text-center p-4 mx-auto">Chargement des projets en cours ...</h3>
                </div>
            )}
        </main>
    )
}

export default Projets