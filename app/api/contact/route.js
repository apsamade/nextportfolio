import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const monMail = process.env.MONMAIL
const monMdp = process.env.MONMDP

export const POST = async (req) => {
    const { email, nom, prenom, message } = await req.json()
    
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: monMail,
                pass: monMdp
            },
            tls: true
        });
        let mailOptions = {
            from: email,
            to: monMail,
            subject: `Message de ${prenom} ${nom} / ${email}`,
            text: message
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            if(info.accepted.length >= 1){
                console.log('Message envoyé: ' + info.response + ' contenu du message : ' + message + ' email : ' + email);
                return NextResponse.json({ message: 'Message envoyé avec succès !' }, { status: 200 });
            }else{
                console.error('Erreur lors de l\'envoi du message :', error);
                return NextResponse.json({ message: 'Une erreur est survenue lors de l\'envoi du message.' }, { status: 500 });
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message :', error);
            return NextResponse.json({ message: 'Une erreur est survenue lors de l\'envoi du message.' }, { status: 500 });
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Une erreur inattendue est survenue lors de l'envoi du mail." }, { status: 500 })
    }
}