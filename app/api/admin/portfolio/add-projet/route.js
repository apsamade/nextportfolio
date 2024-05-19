import Projet from "@models/projet";
import { connectToDB } from "@utils/connectToDB";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const {name, link, image} = await req.json()
    console.log(name, link, image)
    try {
        await connectToDB();
        if(name && link && image){
            const newProjet = new Projet({ link, name, image })

            await newProjet.save()
            console.log(newProjet)
            return NextResponse.json(newProjet, {status: 200})
        }else{
            return NextResponse.json({erreur: 'Éléments manquants.'}, {status: 400})
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({erreur: 'Une erreur est survenue depuis le serveur.'}, {status: 500})
    }
}