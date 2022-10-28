const mongoose = require('mongoose')
const Schema = mongoose.Schema

const song = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        boyfriend: { type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('song', song)