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

module.exports = {
    createBoyfriend,
    createSong,
    getAllSongs,
    getSongById,
    getBoyfriendById,
    getAllBoyfriends,
    getSongsByBoyfriend,
}