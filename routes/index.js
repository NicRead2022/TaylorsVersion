const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.post('/boyfriends', controllers.createBoyfriend)
router.post('/songs', controllers.createSong)
router.get('/boyfriends', controllers.getAllBoyfriends)
router.get('/boyfriends/:id', controllers.getBoyfriendById)
router.get('/songs', controllers.getAllSongs)
router.get('/songs/:id', controllers.getSongById)
router.get('/boyfriends/:id/songs', controllers.getSongsByBoyfriend)

module.exports = router