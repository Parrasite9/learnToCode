const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
const Shelter = require('./models/animalSchema.js')

const cors = require('cors')
app.use(cors())



// CREATE
app.get('/animal', (req, res) => {
    Shelter.find({}, (err, addedAnimal) => {
        res.json(addedAnimal)
    })
})

// READ
app.post('/animal', (req, res) => {
    Shelter.create(req.body, (err, createAnimal) => {
        res.json(createAnimal)
    })
})

// UPDATE
app.put('/animal/:id', (req, res) => {
    Shelter.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal) => {
        res.json(updatedAnimal)
    })
})

// DELETE
app.delete('/animal/:id', (req, res) => {
    Shelter.findByIdAndDelete(req.params.id, (err, deletedAnimal) => {
        res.json(deletedAnimal)
    })
})



mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongo...');
})

app.listen(3000, () => {
    console.log('listening...');
})

