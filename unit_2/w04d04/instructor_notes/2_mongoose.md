# Intro to Mongoose

## Lesson Objectives

1. Explain what an ODM is
1. Connect to Mongo via text editor
1. Create a Schema for a collection
1. Create a model and save it
1. Find a specific model
1. Update a model already in the database
1. Remove a model already in the database
1. Combine actions

## Explain what is an ODM/ Intro to Mongoose

https://media.git.generalassemb.ly/user/1611/files/92b4d471-6edd-4cae-8d59-9048747a811d

ODM stand for Object Document Model. It translates the documents in Mongo into upgraded JavaScript Objects that have more helpful methods and properties when used in conjunction with express.

Rather than use the Mongo shell to create, read, update and delete documents, we'll use an npm package called `mongoose`. Mongoose will allow us to create schemas, do validations and make it easier to interact with Mongo inside an express app.

![Mongoose Visual](Client_Server.png)

## Make a Schema

https://media.git.generalassemb.ly/user/1611/files/3ccfa3fc-c1bf-476c-a6a7-8a1275cfeb28

A schema will allow us to set specific keys in our objects. So if we have a key of `name`, we won't be able to insert other keys that don't match like `firstName` or `names`. This helps keep our data more organized and reduces the chance of errors.

We can also specify the datatypes.  We can set the datatype of `name` to a `string`, `age` to a `number`, `dateOfBirth` to a Date, `bff` to a Boolean etc.

We can also make some fields required and we can set default values as well.

Here is a sample Schema, with many options. We'll be making a smaller variation of this

```js
const articleSchema = new Schema({
	title:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
	author: { type: String, required: true },
	body:   String,
	comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
	publishDate: { type: Date, default: Date.now }, // can set defaults for properties
	hidden: Boolean,
	meta: { // can have properties that are objects
		votes: Number,
		favs:  Number
	}
}, {timestamps: true});
```

## Basic Set Up

https://media.git.generalassemb.ly/user/1611/files/b66ea8fb-c010-4ea7-88e4-69f7dc11b974

In `student_examples`
- `mkdir intro_to_mongoose`
- `cd intro_to_mongoose`
- `touch app.js`
- `npm init -y` and go through the prompts
- `npm i mongoose`
- `touch tweet.js`
- `atom .`

## Set Up Mongoose

https://media.git.generalassemb.ly/user/1611/files/65835b84-eed3-4337-b49d-4cc51af6ac18

Inside `app.js`

- require mongoose

```js
// Dependencies
const mongoose = require('mongoose');
const Tweet = require('./tweet.js')
```

- tell Mongoose where to connect with Mongo and have it connect with the sub-database `tweets` (if it doesn't exist, it will be created)
- set `mongoose.connection` to a shorter variable name

```js
// Global configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'tweets';
 const db = mongoose.connection;
```

- Connect to mongo
```js
// Connect to Mongo
mongoose.connect( mongoURI );
```


Getting a warning like this?
![depreciation](https://i.imgur.com/47eb1oo.png)

Warnings are ok, it'll still work, for now. But in later versions it may stop working and you'll have to update your code.

https://media.git.generalassemb.ly/user/1611/files/f9b5fe3d-6c3f-4bfe-b172-45722ba173ec

This should clear up the errors:
```js
mongoose.connect(mongoURI, () => {
	console.log('the connection with mongod is established')
})
```

- **OPTIONAL**  provide error/success messages about the connections

```js
// Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))
```

- While the connection is open, we won't have control of our terminal. If we want to regain control, we have to close the connection.
Let's set leave the connection open for 5 seconds to demonstrate that the app will hang and then we'll get our close message.

Otherwise we have to press `control c`. When we run an express app, we typically want to leave the connection open, we don't need to get control of terminal back, we just let the app run.  

```js
// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
setTimeout(()=>{db.close()}, 5000)
```


- The entire configuration for mongoose:
- Don't memorize it, just set a bookmark and refer back to this as you need it.
- note the setTimeout was just to demonstrate what `db.close()` does, you don't always need it

```js
// dependencies
const mongoose = require('mongoose')
const Tweet = require('./tweet.js')
console.log(Tweet)

// configuration
// Tell mongoose WHERE to connect to Mongo
// protocol, location, port, which subdb, if doesn't exist, it will be created
const mongoURI = 'mongodb://localhost:27017/' + 'tweets'
// do less typing
const db = mongoose.connection

// actually make the connection
mongoose.connect(mongoURI, () => {
  console.log('the connection with mongod is established')
})

// Connection Error/Success
// Define callback functions for various events
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

```

## Set Up Tweet Schema

https://media.git.generalassemb.ly/user/1611/files/cfc4dc2e-6775-4569-b148-845030f1cea9

In `tweet.js`

```js
const mongoose = require('mongoose');// require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

// create a new Schema
// This will define the shape of the documents in the collection
// https://mongoosejs.com/docs/guide.html
const tweetSchema = new Schema({
  title: String,
  body: String,
  author: String,
  likes:{ type: Number, default: 0},
  sponsored: {type: Boolean, default: false}
}, {timestamps: true});

// Creating Tweet model : We need to convert our schema into a model-- will be stored in 'tweets' collection.  Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
const Tweet = mongoose.model('Tweet', tweetSchema);

//make this exportable to be accessed in `app.js`
module.exports = Tweet;

```

## Create a Document with Mongoose

https://media.git.generalassemb.ly/user/1611/files/b11f7589-e8b3-4b8b-9d85-2ae8282a9284

In `app.js`

Let's make ourselves an object to insert into our database. When we connect with an express app, our data will be coming in as an object from the browser.

```js
const myFirstTweet = {
  title: 'First Tweet',
  body: 'This is my first tweet!',
  author: 'Brendan'
}
```

```js
Tweet.create(myFirstTweet , (error, tweet) => {
  if(error){ //if there is an error console log it
    console.log(error);
  } else { // else show us the created tweet
    console.log(tweet);
  }
	// get control of terminal back
	// else just use control c
  db.close();
});
```

Let's run this with
`node app.js`

We should see:

![created via mongoose](https://i.imgur.com/I0EbPuu.png)

Timestamps, deleted, and likes had default values, a unique _id has been generated

https://media.git.generalassemb.ly/user/1611/files/62f92172-3db6-4d09-b015-25c223a77c30

Every time we run `node app.js` it will run the code, and thus insert this object over and over again.  Let's not do that. Let's comment it out.

Let's insert many more tweets

```js
const manyTweets = [
  {
    title: 'First Tweet',
    body: 'This is my first tweet!',
    author: 'Brendan'
  },
  {
    title: 'Advice',
    body: 'Code Everyday!',
    author: 'Brendan',
    likes: 20
  },
  {
    title: 'WholeFoods',
    body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Brendan',
    likes: 40
  },
  {
    title: 'Organic',
    body: 'I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Brendan',
    likes: 162
  },
  {
    title: 'Confusion',
    body: 'Why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    author: 'Brendan',
    likes: -100
  },
  {
    title: 'Vespa',
    body: 'My Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Brendan',
    likes: 2
  },
  {
    title: 'Licensed',
    body: 'I am now officially licensed to teach yoga. Like this to get 10% off a private lesson',
    author: 'Brendan',
    likes: 3
  },
  {
    title: 'Water',
    body: 'I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Brendan',
  },
];
```

Let's insert all these tweets:

```js
Tweet.insertMany(manyTweets, (error, tweets )=>{
  if(error){
    console.log(error)
  } else {
    console.log(tweets);
  } db.close()
});
```
- `node app.js`

and let's comment it out so we don't insert duplicates

## Find Documents with Mongoose

https://media.git.generalassemb.ly/user/1611/files/624ea095-2162-4fb8-8749-af93739ed64a

- Mongoose has 4 methods for this
 - `find` - generic
 - `findById` - finds by ID - great for Show routes!
 - `findOne` - limits the search to the first document found
 - [`where`](http://mongoosejs.com/docs/queries.html) - allows you to build queries, we won't cover this today

Let's find all

```js
Tweet.find((err, tweets)=>{
  console.log(tweets);
  db.close()
  })  
```

Let's limit the fields returned, the second argument allows us to pass a string with the fields we are interested in:
```js
Tweet.find({}, 'title body', (err, tweets)=>{
  console.log(tweets);
  db.close();
  })
```

https://media.git.generalassemb.ly/user/1611/files/a20b11b8-2fa7-45df-9706-3b23c69db71e

Let's look for a specific tweet:

```js
Tweet.find({title:'Water'}, (err, tweet)=>{
  console.log(tweet);
  db.close();
  })
```

We can also use advanced query options. Let's find the tweets that have 20 or more likes

```js
Tweet.find({ likes: { $gte:20 }}, (err, tweets)=>{
  console.log(tweets);
  db.close();
});
```

### Delete Documents with Mongoose

https://media.git.generalassemb.ly/user/1611/files/cdf192ad-90db-4545-8193-28b0dfd4580a

We have two copies of our first tweet and a few options to delete it
- `remove()` danger! Will remove all instances
- `findOneAndRemove()` - this seems like a great choice
- `.findByIdAndRemove()`- finds by ID - great for delete routes in an express app!

```js
Tweet.findOneAndRemove({title:'First Tweet'}, (err, tweet)=>{
  if (err){
    console.log(err);
  } else {
    console.log('This is the deleted tweet:', tweet);
  }
  db.close()
  })
```


### Update Documents with Mongoose

https://media.git.generalassemb.ly/user/1611/files/abdb29ce-ae06-440f-aea5-51e36089dc29

Finally, we have a few options for updating

- `update()` - the most generic one
- `findOneAndUpdate()`- Let's us find one and update it
- `findByIdAndUpdate()` - Let's us find by ID and update - great for update/put routes in an express app!

If we want to have our updated document returned to us in the callback, we have to set an option of `{new: true}` as the third argument

```js
Tweet.findOneAndUpdate({title:'Vespa'},{sponsored: true}, {new: true},(err, tweet)=>{
  if (err){
    console.log(err);
  } else {
    console.log(tweet);
  }
  db.close()
  })
```

We'll see the console.logged tweet will have the value of sponsored updated to true. Without `{new: true}` we would get the original unaltered tweet back.


### Intermediate

We can count how many tweets we have with likes greater than 20
```js
Tweet.countDocuments({likes:{$gte:20}}, (err, tweetCount)=>{
  console.log('the number of tweets with more than 19 likes is', tweetCount)
  db.close();
});
```
We can check out all the things we can do at the [Mongoose API docs](http://mongoosejs.com/docs/api.html)
