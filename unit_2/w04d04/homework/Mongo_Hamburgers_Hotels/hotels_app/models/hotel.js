const mongoose = require('mongoose')

const hotelSchema = new Schema({
    name: String,
    location: String,
    rating: Number,
    vacancies: Boolean,
    tags: Array,
    date: {type: Date,
                default: Date.now},
    rooms: [{ 
        roomNumber: Number, 
        size: String, 
        price: Number,
        booked: Boolean  
    }],
},
{timestamps: true})

// BELOW IS COPY PASTE FROM THE LESSON AND IT IS PROVIDING THE SAME ERROR

// const articleSchema = new Schema({
// 	title:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
// 	author: { type: String, required: true },
// 	body:   String,
// 	comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
// 	publishDate: { type: Date, default: Date.now }, // can set defaults for properties
// 	hidden: Boolean,
// 	meta: { // can have properties that are objects
// 		votes: Number,
// 		favs:  Number
// 	}
// }, {timestamps: true});


module.exports = Hotels
