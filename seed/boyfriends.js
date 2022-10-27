// const db = require('../db')
// const Boyfriends = require('../models/boyfriends')

// // Connect to the database
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//     const boyfriends = [
//         { name: 'Jake Gyllenhaal', datingStats: 'Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
//     ]

//     await Boyfriends.insertMany(boyfriends)
//     console.log("Here's the boy!")
// }
// const run = async () => {
//     await main()
//     db.close()
// }

// run()