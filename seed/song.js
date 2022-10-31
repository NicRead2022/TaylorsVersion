const db = require('../db')
const Songs = require('../models/songs')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const songs = [
        { name: 'All Too Well',
         description: '10 minute version', 
         image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png',
         boyfriend: 'Jake Gyllanhaal' }
        ]

    await Songs.insertMany(songs)
    console.log("Here's the song!")
}
const run = async () => {
    await main()
    db.close()
}

run()