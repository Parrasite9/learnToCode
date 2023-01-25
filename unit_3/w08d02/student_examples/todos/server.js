const express = require('express')
const mongoose = require('mongoose')
const Todos = require('./models/todos.js')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

// READ
app.post('/todos', (req, res) => {
    Todos.create(req.body, (err, createdTodo) => {
        res.json(createdTodo)
    })
})

// CREATE
app.get('/todos', (req, res) => {
    Todos.find({}, (err, foundTodos) => {
        res.json(foundTodos)
    })
})

// DELETE
app.delete('/todos/:id', (req, res) => {
    Todos.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
        res.json(deletedTodo)
    })
})

app.put('/todos/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo) => {
        res.json(updatedTodo)
    })
})

mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongo...');
})
app.listen(3000, () => {
    console.log('listening...');
})