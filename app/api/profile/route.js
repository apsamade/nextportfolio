import User from "@models/user";
import { connectToDB } from "@utils/connectToDB";
import { NextResponse } from "next/server";

export const DELETE = async (req) =>{
    const { userId } = await req.json()
    try {
        await connectToDB()
        if(userId){
            await User.findByIdAndDelete(userId)
            console.log('compte supprimer avec succès')
            return NextResponse.json({message: 'Suppression du compte effectué avec succès.'}, {status: 201})
        }else{
            console.log('que dallle ???')
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: 'Une erreur est survenue lors de la suppression du compte.'}, {status: 500})
    }
}