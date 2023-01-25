const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Animal = require('./models/animal.js');

const app = express();

app.use(express.json())
app.use(cors())

//-----------------------------------------------
//      NEW ANIMAL
//-----------------------------------------------
app.post('/animals', (req, res) => {
  Animal.create(req.body, (err, createdAnimal) => {
    res.json(createdAnimal)
  })
})


//-----------------------------------------------
//      GET ALL ANIMALS
//-----------------------------------------------
app.get('/animals', (req, res) => {
  Animal.find({}, (err, foundAnimals) => {
    res.json(foundAnimals)
  })
})

//-----------------------------------------------
//      DELETE ANIMAL
//-----------------------------------------------
app.delete('/animals/:id', (req, res) => {
  Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
    res.json(deletedAnimal)
  })
})

//-----------------------------------------------
//      EDIT ANIMAL
//-----------------------------------------------
app.put('/animals/:id', (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAnimal) => {
    res.json(updatedAnimal)
  })
})

//-----------------------------------------------
//      CONNECTIONS
//-----------------------------------------------
//  CONNECT TO NODEMON
app.listen(3000, () => {
  console.log('Listening...')
});


// CONNECT TO MONGO AND NAME SUBDATABASE
mongoose.connect('mongodb://localhost:27017/shelter')
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
})
