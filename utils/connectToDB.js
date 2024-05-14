import mongoose from "mongoose";

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);
    try {
        mongoose.connect(process.env.MONGODB_URI).then(()=> {
            console.log('MongoDB connected')
        }).catch((err)=> {
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }
}