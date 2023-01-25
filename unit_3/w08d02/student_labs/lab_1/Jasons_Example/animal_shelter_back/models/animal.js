const mongoose = require('mongoose');

const animal = new mongoose.Schema({
  name: String,
  species: String,
  image: String,
  reservedForAdoption: { type: Boolean, default: false },
})

const Animal = mongoose.model('Animal', animal)

module.exports = Animal
