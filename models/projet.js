import {Schema, model, models} from "mongoose"

// projet
const projetSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    link: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });
// enregistrement du mot de passe hashé

const Projet = models.Projet || model('Projet', projetSchema, 'projets');
export default Projet;