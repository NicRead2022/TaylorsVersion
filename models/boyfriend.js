const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Boyfriend = new Schema(
    {
        name: { type: String, required: true },
        stats: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Boyfriend', Boyfriend)