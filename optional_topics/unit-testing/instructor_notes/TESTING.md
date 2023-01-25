# UNIT TESTING

## Lesson Objectives

1. Describe Unit Testing
1. Create Unit Tests Using Node
1. Create Unit Tests Using Mocha

## Describe Unit Testing

Unit testing allows us to ensure that code we write today remains functional after it's been altered by us or others in the future

### How it works

- Write a separate chunk of code that tests the code that you just wrote
- Think of all the possible ways your code could be used.  Write "testing" code that checks to make sure your code works as expected in each of these scenarios

## Create Unit Tests Using Node

To start, cd into the `unit_testing` directory inside of `optional_topics` and we are going to need to make a directory to hold our code:

```
mkdir unit_test_example
```

Let's create a fake library that only has one function `add` that takes two parameters and returns their sum. Create `add.js` and add an empty function:

```javascript
module.exports = (param1, param2) => {

}
```

Now create a separate chunk of code (we'll put it in a separate file for ease of organization) that will test our "library" (unit_tests.js):

```javascript
const add = require('./add.js');
```

Let's think of all the possible scenarios in which our `add` function could be used

- user passes two numbers in as parameters
- user passes two numbers in as parameters, but they are strings

Now let's write test code for those two scenarios in `unit_tests.js`:

```javascript
const add = require('./add.js');

//scenario 1: user passes two numbers in as parameters
console.log('add() should return the sum of two numbers when passed integers as parameters');
if(add(1,1) === 2){
    console.log(' - success');
} else {
    console.log(' - fail');
}

//create a blank space for readibility in the terminal
console.log('');

//scenario 2: user passes two numbers in as parameters, but they are strings
console.log('add() should return the sum of two numbers when passed strings as parameters');
if(add("1","1") === 2){
    console.log(' - success');
} else {
    console.log(' - fail');
}
```

If we run `node unit_tests.js`, we'll see that our code runs, but our tests fail.  Let's adjust our `add.js` code so that the first test passes:


```javascript
module.exports = (param1, param2) => {
    return param1 + param2
}
```

If we run `node unit_tests.js`, we'll see that first test passes, but our second test fails.  Let's adjust our `add.js` code so that the second test passes:

```javascript
module.exports = (param1, param2) => {
    return parseInt(param1) + parseInt(param2)
}
```

Now both of our tests pass.

Fiddle around with the `add.js` code.  You'll notice that if the code is updated in a way that breaks the tests, you'll be notified when the tests are run.  See how unit tests prevent people from breaking your code?

## Create Unit Tests Using Mocha

Set up a node project:

```
npm init
npm install mocha
```

Create a new testing file that will use our old `add.js` library:

```
touch test.js
```

In `test.js` set up some mocha tests:

```javascript
const add = require('./add.js');

const assert = require('assert');

describe('add()', () => {
    it('should return 2 when passed integer values 1 and 1 as parameters', () => {
        assert.equal(add(1,1), 2);
    });
    it('should return 2 when passed string values "1" and "1" as parameters', () => {
      assert.equal(add("1","1"), 2);
    });    
});
```

Now run `./node_modules/mocha/bin/mocha` and you'll see the tests pass and you have some nice formatting and colors!  Mocha knows to run `test.js` automatically. If you want, you can even make a shortcut with npm by adjusting your `package.json` file:

```
  "scripts": {
    "test": "mocha"
  },
```

Now run `npm test`

Fiddle around with the `add.js` code.  You'll notice that if the code is updated in a way that breaks the tests, you'll be notified when the tests are run.  See how unit tests prevent people from breaking your code?

## Unit Testing Resources

[Mocha](https://mochajs.org/)<br>
[Testing in React](https://reactjs.org/docs/testing.html)<br>
[Extra Unit Testing Info](https://www.guru99.com/unit-testing-guide.html#5)<br>