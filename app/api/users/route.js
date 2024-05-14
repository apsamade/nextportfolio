import { connectToDB } from "@utils/connectToDB";
import User from "@models/user"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connectToDB();
        const users = await User.find()
        return NextResponse.json(users, {status : 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Erreur inattendu lors de la verification des emails"}, {status: 500})
    }
}