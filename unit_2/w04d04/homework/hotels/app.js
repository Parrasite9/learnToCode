const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/' + 'hotel'
const db = mongoose.connection
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

mongoose.connect(mongoURI, () => {
    console.log('The connection with mongod is established');
})



db.on('error', (err) => console.log(err.message + 'is Mongod not running?'))
db.on('connected', () => console.log('mongo connected:',  mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


// Hotel.create(hotelSeed, (err, data) => {
//     if (err) console.log(err.message)
//     console.log("added provided hotel data");
// })

Hotel.count({}, (err, data) => {
    if (err) console.log(err.message);
    console.log(`There are ${data} hotels in this database`);
})

// CREATE HOTEL 
Hotel.create({
    name: 'One Room Hotel',
    location: '123 Main St.',
    rating: 5,
    vacancies: false,
    tags: ['wifi', 'continential breakfast'],
    rooms: [
        {
            "roomNumber": 205,
            "size": "king suite",
            "price": 50000,
            "booked": true
        }
    ]
}), (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}



// Hotel.find({}, (err, Hotel) => {
//     console.log(Hotel);
// })

// Hotel.find({}, {name: 1, _id: 0}, (err, name) => {
//     console.log(name);
// }) 

// Hotel.find({name: 'One Room Hotel'}, (err, ORH) => {
//     console.log(ORH);
// })

// Hotel.find({vacancies: true}, {rating: 0}, (err, data) => {
//     console.log(data);
// })

// Hotel.deleteOne({name: 'Hotelicopter'}, (err, data) => {
//     console.log(data);
// })

// Hotel.deleteOne({name: "Hivert's Hotel"}, (err, data) => {
//     console.log(data);
// })

// Hotel.findOneAndRemove({location: "Colorado Rockies"}, (err, data) => {
//     console.log(data);
// })

// Hotel.update({ name: 'The Great Northern'},
// {$set: {rating: 5}},
// (err, data) => {
//     console.log(data);
// })

// Hotel.find({name: 'The Great Northern'}, (err, data) => {
//     console.log(data);
// })

// Hotel.findOneAndUpdate({name: 'Motel Bambi'},
//     {$set: {vacancies: false}},
//     (err, data) => {
//         console.log(data);
//     }

// )

// Hotel.updateOne({location: 'White Bay, Oregon'},
// {$set: {rating: 2}},
// (err, data) => {
//     console.log(data);
// })