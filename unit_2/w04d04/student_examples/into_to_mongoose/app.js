const mongoose = require('mongoose')
const tweet = require('./tweet.js')

const mongoURI = 'mongodb://localhost:27017/' + 'tweets';
const db = mongoose.connection;

mongoose.connect(mongoURI)