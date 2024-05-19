'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

const AddProjet = () => {
  const [submitting, setSubmitting] = useState(false)
  const [erreur, setErreur] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmitAddProjet = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const name = e.target.name.value
    const link = e.target.link.value

    console.log(e.target)
    if (e.target.image == undefined) return setErreur('Tu dois téléchargé une image.')
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=7e355e2fd9ded33cc639b35053eba9b4', {
        method: 'POST',
        body: formData,
      });

      const imgbbResponse = await response.json();

      if (imgbbResponse) {
        const res = await fetch('/api/admin/portfolio/add-projet', {
          method: 'POST',
          body: JSON.stringify({ name, link, image: imgbbResponse.data.url })
        })
        const data = await res.json()
        if (res.ok) {
          e.target.reset();
          setMessage('Jeu Ajouter !')
          setTimeout(() => {
            setSubmitting(false)
            setMessage('Ajouter')
          }, 12000)
        } else {
          setErreur(data.erreur)
          setSubmitting(false)
          setTimeout(() => {
            setErreur('')
          }, 12000)
        }
      } else {
        setErreur('Une erreur est survenue lors du téléchargement de l\'image.')
      }

    } catch (error) {
      console.log(error)
      setErreur('Une erreur est survenue lors de l\'envoie du formulaire.')
    }
  }
  return (
    <main className='min-h-[75vh]'>
      <h1 className='text-center py-8 text-3xl uppercase'>Ajout d'un projet</h1>
      <form onSubmit={handleSubmitAddProjet} className="flex items-center justify-center flex-wrap my-4 p-3 rounded-md bg-fond-3 shadow-2xl max-w-[800px] mx-auto">
        <input required placeholder="Nom du projet" className="grow basis-[300px] focus:outline-sky-500 duration-200 p-3 bg-transparent outline outline-2 outline-white rounded-md m-2" type="text" name="name" id="name" />
        <input required placeholder="Lien du projet" className="grow basis-[300px] focus:outline-sky-500 duration-200 p-3 bg-transparent outline outline-2 outline-white rounded-md m-2" type="text" name="link" id="link" />
        <input className="grow basis-full focus:outline-sky-500 duration-200 p-3 bg-transparent outline outline-2 outline-white rounded-md m-2" type="file" name="image" id="image" />
        <button className="grow basis-[300px] hover:bg-sky-500 hover:outline-sky-500 duration-200 p-3 bg-transparent outline outline-2 outline-white rounded-md m-2" type="submit">Ajouter</button>
        {erreur &&
          <p className="grow basis-full text-center py-4 text-red-500">{erreur}</p>
        }
      </form>
    </main>
  )
}

export default AddProjet