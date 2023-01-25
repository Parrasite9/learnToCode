// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, () => {
  console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//


const hotel = require('hotel.js')

// BELOW IS THE ERROR RECEIVED

// isaiahjohnson@Isaiahs-MacBook-Pro hotels_app % node app.js
// /Users/isaiahjohnson/dev/SEIR-Ewoks/unit_2/w04d04/homework/Mongo_Hamburgers_Hotels/hotels_app/models/node_modules/mongoose/lib/schema.js:1338
//     throw new TypeError(`Invalid schema configuration: \`${name}\` is not ` +
//     ^

// TypeError: Invalid schema configuration: `True` is not a valid type at path `timestamps`. See https://bit.ly/mongoose-schematypes for a list of valid schema types.
//     at Schema.interpretAsType (/Users/isaiahjohnson/dev/SEIR-Ewoks/unit_2/w04d04/homework/Mongo_Hamburgers_Hotels/hotels_app/models/node_modules/mongoose/lib/schema.js:1338:11)
//     at Schema.path (/Users/isaiahjohnson/dev/SEIR-Ewoks/unit_2/w04d04/homework/Mongo_Hamburgers_Hotels/hotels_app/models/node_modules/mongoose/lib/schema.js:964:27)
//     at Schema.add (/Users/isaiahjohnson/dev/SEIR-Ewoks/unit_2/w04d04/homework/Mongo_Hamburgers_Hotels/hotels_app/models/node_modules/mongoose/lib/schema.js:635:12)
//     at new Schema (/Users/isaiahjohnson/dev/SEIR-Ewoks/unit_2/w04d04/homework/Mongo_Hamburgers_Hotels/hotels_app/models/node_modules/mongoose/lib/schema.js:133:10)
//     at Object.<anonymous> (/Users/isaiahjohnson/dev/SEIR-Ewoks/unit_2/w04d04/homework/Mongo_Hamburgers_Hotels/hotels_app/models/hotel.js:3:21)
//     at Module._compile (node:internal/modules/cjs/loader:1155:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
//     at Module.load (node:internal/modules/cjs/loader:1033:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:868:12)
//     at Module.require (node:internal/modules/cjs/loader:1057:19)
// isaiahjohnson@Isaiahs-MacBook-Pro hotels_app % 


// ASSUMING I DID NOT RECEIVE THE ERROR ABOVE. 
// THE FOLLOWING CODE WOULD HAVE BEEN EXECUTED.ABOVE

// db.hotels.insertMany({
//     ()
// })

