const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.post('/boyfriends',controllers.createBoyfriend)
router.post('/songs', controllers.createSong)

module.exports = router