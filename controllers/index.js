const Boyfriend = require('../models/boyfriend');
const Song = require('../models/song')


const createBoyfriend = async (req, res) => {
    try {
        const boyfriend = await Boyfriend.create(req.body)
        return res.status(201).json(boyfriend);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body)
        return res.status(201).json(song);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const readBoyfriend = async (req,res) => {
    try {
        // const boyfriend = await Boyfriend.find({name:req.Boyfriend.})
    }
}

module.exports = {
    createBoyfriend,
    createSong
}