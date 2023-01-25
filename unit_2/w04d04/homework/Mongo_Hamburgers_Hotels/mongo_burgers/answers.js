db.createCollection('burgers')
// create 5 burgers (at least 3 should be beef)

db.burgers.insert(
    {
        name: 'Double Quarter Pounder',
        meat: 'Beef',
        toppings: ['ketchup', 'mayo', 'onion', 'lettuce', 'tomatoes', 'pickles']
    },

    {
        name: 'CheeseBurger',
        meat: 'Beef',
        toppings: ['mustard', 'lettuce', 'onion', 'tomatoes', 'pickles']
    },

    {
        name: 'Bacon Cheeseburger',
        meat: 'Beef',
        toppings: false
    },

    {
        name: 'Fish sandwhich',
        meat: 'Fish',
        toppings: ['mayo', 'lettuce', 'tomatoes']
    },

    {
        name: 'BLT',
        meat: 'Idk, Not Beef',
        toppings: ['mayo', 'lettuce', 'tomatoes']
    }

)


// find all the burgers

db.burgers.find()

// show just the meat of each burger

db.burgers.find({},
    {meat: 1}
    )
// show just the toppings of each burger

db.burgers.find({},
    {toppings: 1}
    )

// show everything but the cheese

db.burgers.find({
    cheese: {$ne: false}
})

// find all the burgers with beef

db.burgers.find({},
    {meat: 'Beef'}
    )

// find all the burgers that are not beef

db.burgers.find({
    meat: {$ne: 'Beef'}
})

// find the first burger with cheese

db.burgers.find({
    cheese: true}, 1
)

// find one and update the first burger with cheese to have a property of 'double cheese'

db.burgers.update(
    {cheese: false},
    {$set: {cheese: 'double'}
})

// find the burger you updated to have double cheese

db.burgers.find({
    cheese: 'double'
})

// find and update all the beef burgers to be 'veggie'

db.burgers.updateMany(
    {meat: 'Beef'},
    {$set: {meat: 'veggie'}
})

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

db.burgers.remove(
    {meat: 'veggie'}, true
)

// drop the collection
//Expected Output
//true

db.burgers.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

db.dropDatabase()

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 