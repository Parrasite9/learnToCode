// =============================
//         EXPRESS SETUP
// =============================

const express = require('express')
const app = express()

app.get('/fruits/new', (req, res) => {
    res.send('new')
})

// vvv MUST BE BEFORE ROUTES vvv
app.use(express.urlencoded({extended: true}))




// =============================
//         ROUTES SETUP
// =============================

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/fruits/', (req, res) => {
    res.send('received')
})

// app.post('/fruits/', (req, res) => {
//     if (req.body.readyToEat ===) {
        
//     }
// })














// =============================
//         PORT SETUP
// =============================
app.listen(3000, () => {
    console.log('listening...');
})