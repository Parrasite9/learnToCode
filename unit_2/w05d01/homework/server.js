// const { log } = require('console')

// ===========================================
//              EXPRESS SETUP
// ===========================================


const express = require('express')
const app = express()

// EXPRESS STATIC
app.use(express.urlencoded({extended:true})) // THIS ALLOWS YOU TO USE REQ.BODY 




// ===========================================
//              MONGO(OSE) SETUP
// ===========================================

const mongoose = require('mongoose')

// ===========================================
//          OTHER MISC. DEPENDENCIES
// ===========================================

// IMPORTED FROM SCHEMA.JS
const Budget = require('./models/schema.js')
const seed = require('./models/budget.js') 
const { get } = require('http')

// ===========================================
//                  ROUTES
// ===========================================

// SEED DATA
app.get('/budgets/seed', (req, res) => {
    Budget.create(seed, (error, data) => {

    })
    res.redirect('/budgets')
})

// New
// GET /budgets/new

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})

// Create
// POST /budgets

// app.post('/budgets', (req, res) => {
//     // res.send(req.body)
//     Budget.create(req.body, (err, createdBudget) => {
//         res.redirect('index.ejs')
//     })
// }) 

app.post('/budgets', (req, res) => {
    Collection.create(req.body, (err, createdItem) => {
        res.redirect('/budgets')
    })
})

// Index
// GET /budgets

app.get('/budgets', (req, res) => {
    Budget.find({}, (err, allbudgets) => {
        res.render('index.ejs', {
            budgets: allbudgets
        })
    })
})

// Show
// GET /budgets/:index

// app.get('/budgets/:id', (req, res) => {
//     Budget.findById(req.params.id, (err, foundItem) => {
//         res.render('show.ejs', {
//             budgets: foundItem
//         })
//     })
// })

app.get('/budgets/:id', (req, res) => {
    Budget.findById(req.params.id, (err, foundItem) => {
        res.render('show.ejs', {
            collections: foundItem
        })
    })
})

// get.app('/budgets/:index', (req, res) => {
//     res.render('show.ejs', {ledger: Budget[req.params.index]})
// })


<ul >
<% for(let i=0; i < game.length; i++){ %>
    <li class="nav-item">
        <a href="/game/<%=game[i]._id; %>">
            <%=game[i].title; %>
        </a>
        <a href="/game/<%=game[i]._id; %>/edit">Edit</a>
        <form action="/game/<%=game[i]._id; %>?_method=DELETE" method="POST">
            <input class="delete" type="submit" value="DELETE" />
        </form>
    </li>
    <% } %>
</ul>











// ===========================================
//              PORT SETUP
// ===========================================
app.listen(3001, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/' + 'budget', () => {
    console.log('The conection with mongod is established');
})