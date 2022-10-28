const Boyfriend = require('../models/boyfriends');
const Song = require('../models/songs')


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
const getBoyfriendById = async (req,res) => {
    try {
        const boyfriend = await Boyfriend.findById(req.params.id)
        return res.status(201).json(boyfriend);
} catch (error) {
    return res.status(500).json({ error: error.message })
}
}
const getAllBoyfriends = async (req,res) => {
    try {
        const boyfriends = await Boyfriend.find()
        return res.status(201).json(boyfriends);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllSongs = async (req,res) => {
    try {
        const songs = await Song.find()
        return res.status(201).json(songs);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getSongById = async (req,res) => {
    try {
        const song = await Song.findById(req.params.id)
        return res.status(201).json(song);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getSongsByBoyfriend = async (req,res) => {
    try {
        const song = await Song.find({boyfriend:req.params.id})
        return res.status(201).json(song);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(song)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteSong = async (req, res) => {
   res.set(
    'Access-Control-Allow-Origin','*'
   )
    try {
        const { id } = req.params;
        const deleted = await Song.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Song deleted");
        }
        throw new Error("Song not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updateBoyfriend = async (req, res) => {
    try {
        const boyfriend = await Boyfriend.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(boyfriend)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteBoyfriend = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Boyfriend.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Boyfriend deleted");
        }
        throw new Error("Boyfriend not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const songs = async


module.exports = {
    createBoyfriend,
    createSong,
    getAllSongs,
    getSongById,
    getBoyfriendById,
    getAllBoyfriends,
    getSongsByBoyfriend,
    updateSong,
    deleteSong,
    updateBoyfriend,
    deleteBoyfriend
}