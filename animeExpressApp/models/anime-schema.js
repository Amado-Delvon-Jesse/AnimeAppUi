const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let animeSchema = new Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    alternativeTitles: {
        type: [String]
    },
    ranking: {
        type: Number
    },
    genres: {
        type: [String]
    },
    episodes: {
        type: Number
    },
    hasEpisode: {
        type: Boolean
    },
    hasRanking: {
        type: Boolean
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    status: {
        type: String
    },
    synopsis: {
        type: String
    },
    thumb: {
        type: String
    },
    type: {
        type: String
    }
}, {
        collection: 'Anime'
    })

module.exports = mongoose.model('Anime', animeSchema)