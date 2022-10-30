const db = require('../db')
const Boyfriends = require('../models/boyfriends')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const boyfriends = [
        { name: 'Jake Gyllenhaal', stats: ' Much older ', image: 'https://akns-images.eonline.com/eol_images/Entire_Site/2012925/634.Jake.Swift.mh.102512.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top' },
    ]

    await Boyfriends.insertMany(boyfriends)
    console.log("Here's the boy!")
}
const run = async () => {
    await main()
    db.close()
}

run()