const mongoose = require('mongoose')

const hotelSchema =  new mongoose.Schema({
    name: String,
    location: String,
    rating: Number,
    vacancies: Boolean,
    rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ],
    },
    {timestamps: true}
)

const Hotel = mongoose.model('hotel', hotelSchema)

module.exports = Hotel