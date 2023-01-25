const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema ({
    date: String,
    name: String,
    from: String,
    amount: Number,
    tags: Array
})