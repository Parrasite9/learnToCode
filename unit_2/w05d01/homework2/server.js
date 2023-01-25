// const { log } = require('console')
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/' + '', () => {
    console.log("The connection with mongod is established.");
})
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log("Server is at http://localhost:3000");
})

// app.listen(3000, () => {
//     console.log('listening...');
// })

// app.get('/view/index', (req, res) => {
//     res.render('./views/index.ejs')
// })

