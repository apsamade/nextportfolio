import { NextResponse } from "next/server";
import Projet from "@models/projet";
import { connectToDB } from "@utils/connectToDB";

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        const projet = await Projet.findById(params.id)
        return NextResponse.json(projet, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ erreur: 'Une erreur est survenue depuis le serveur lors de la récupération du projet.' }, { status: 500 })
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB()
        await Projet.findByIdAndDelete(params.id)
        return NextResponse.json({ message: 'Projet supprimer avec succès.' }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ erreur: 'Une erreur est survenue depuis le serveur lors de la récupération du projet.' }, { status: 500 })
    }
}

export const PATCH = async (req, { params }) => {
    const body = await req.json()
    try {
        await connectToDB()

        if (body.image) {
            await Projet.findByIdAndUpdate(params.id, {
                $set: {
                    image: body.image
                }
            })
        }
        if (body.name) {
            await Projet.findByIdAndUpdate(params.id, {
                $set: {
                    name: body.name
                }
            })
        }
        if (body.link) {
            await Projet.findByIdAndUpdate(params.id, {
                $set: {
                    link: body.link
                }
            })
        }
        const projet = await Projet.findById(params.id)
        console.log(projet, 'maj effectué')
        return NextResponse.json(projet, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ erreur: 'Une erreur est survenue depuis le serveur lors de la récupération du projet.' }, { status: 500 })
    }
}