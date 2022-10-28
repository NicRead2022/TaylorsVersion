const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        boyfriend: { type: Schema.Types.ObjectId, ref:'Boyfriend'}
    },
    { timestamps: true },
)

module.exports = mongoose.model('song', song)