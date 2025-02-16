import Projet from "@models/projet";
import { connectToDB } from "@utils/connectToDB";
import { NextResponse } from "next/server";

export const GET = async(req) =>{
    try {
        await connectToDB()
        const projets = await Projet.find()
        if(!projets) return NextResponse.json({error: "aucun projets trouver."}, {status: 400})
        return NextResponse.json(projets, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({erreur: "Une erreur est survenue lors de la récupération des projets."}, {status: 500})
    }
}