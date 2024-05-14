const mongoose = require('mongoose')

// projet
const articleSchema = new mongoose.Schema({
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

const Article = mongoose.model('Article', articleSchema, 'articles');
module.exports = Article;