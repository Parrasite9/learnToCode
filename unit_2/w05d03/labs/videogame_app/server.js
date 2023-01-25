// ===========================
//      EXPRESS SETUP
// ===========================

const express = require('express')
const app = express()

//EXPRESS STATIC
app.use(express.urlencoded({extended:true}))

// ===========================
//      MONGOOSE SETUP
// ===========================

const mongoose = require('mongoose')

// ===========================
//  OTHER MISC. DEPENDENCIES
// ===========================
const XYZ = require('./models/gameSchema.js')
const seed = require('./models/gameseed.js')

// ===========================
//           ROUTES
// ===========================

//SEED DATA
app.get('/game/seed', (req,res) => {
    XYZ.create(seed, (err, data) => {

    })
    res.redirect('/game')
})

// NEW
app.get('/')



// INDEX
app.get('/game', (req, res) => {
    XYZ.find({}, (err, allGames) => {
        res.render('index.ejs', {
            games: allGames
        })
    })
})

// SHOW







