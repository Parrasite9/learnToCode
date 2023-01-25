const mongoose = require('mongoose')

const shelterSchema = mongoose.Schema ({
    name: String,
    species: String,
    image: String,
    reservedForAdoption: Boolean
})

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter