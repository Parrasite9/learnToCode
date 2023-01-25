# Javascript Shortcuts

## Intro

You now are familiar with the basics of JavaScript.  In this unit, we'll be using some more advanced syntax that will provide some shortcuts to some common tasks.  None do anything that normal JS can't do, but they can make your life a little easier.

## Ternary Operator

Here's some if/else code:

```javascript
let age = 22;
let access;

if(age > 21){
	access = 'yes'
} else {
	access = 'no';
}
console.log(access);//yes
```

We can shorten this up like so:

```javascript
let age = 22;
let access = (age > 21) ? 'yes' :  'no'
console.log(access); //yes
```

There's three parts to a ternary:

- The boolean expression is inside the `()`
- If the boolean express evaluates to `true` then the variable on the left of the `=` is set to whatever comes after the `?`
- If the boolean express evaluates to `false` then the variable on the left of the `=` is set to whatever comes after the `:`

## Map

Let's say we wanted to duplicate an array, but change the values ever so slightly.  Normally we'd have to do something like this:

```javascript
const arr1 = ['vanilla', 'chocolate', 'strawberry']
const arr2 = []

for(let i = 0; i < arr1.length; i++){
	arr2.push(arr1[i] + ' ice cream')
}
console.log(arr2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
```

We can shorten this up a bit by doing:

```javascript
const arr1 = ['vanilla', 'chocolate', 'strawberry']
const arr2 = arr1.map((currentElement)=>{
	return currentElement + ' ice cream'
})

console.log(arr2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
```

The `.map()` property of arrays will loop through the entire array and return a new array with each value in the original array altered somehow.  The way each element is altered is determined by what is returned by the callback function that is passed to map.  Within that callback function, you'll notice the `currentElement` parameter passed to the callback function.  This variable could be called anything, but the value is always the value of the current element in the array as we loop through it.

## Destructuring

### Arrays

Let's say we wanted to do something like this:

```javascript
const x = [1, 2, 3, 4, 5];
const y = x[0]
const z = x[1]
console.log(y); // 1
console.log(z); // 2
```

We can simplify this a bit:

```javascript
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Basically, the `const [y, z] = x` will create a variable `y` and assign it to the first element in `x`.  It will also create a variable `z` and assign it to the second element in `x`

### Objects

We can something similar with objects.  Let's say we wanted to do something like this:

```javascript
const obj = { a: 1, b: 2 };
const a = obj.a;
const b = obj.b;
console.log(a); // 1
console.log(b); // 2
```

We can rewrite this as:

```javascript
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a); // 1
console.log(b); // 2
```

The main thing to note here is that `const { a, b } = obj` will create a variable `a` and assign it the value of the property in `obj` that has the same name (`a`).  It will do the same thing with `b`.

The important thing to note is that the variables being created `const {a, b}` must match properties that exist in the object.  `const {foo, bar} = obj` wouldn't work because `obj` doesn't have the properties `foo` and `bar`

## Spread Operator

### Arrays

Let's duplicate an array:

```javascript
const arr = [1,2,3]
const arr2 = []

for(let i = 0; i < arr.length; i++){
	arr2.push(arr[i])
}
```

This can be simplified like so:

```javascript
const arr = [1,2,3]
const arr2 = [...arr]
```

This "spreads the values of `arr` into `arr2`.  The thing to note is that you can't simply do:

```javascript
const arr = [1,2,3]
const arr2 = arr
```

The reason for this is that in this last scenario, `arr2` is set to a reference to `arr`.  This means that it doesn't duplicate the values, it instead points to the same place in memory that `arr` is stored.  If you manipulate one, you'll see the same changes on the other:

```javascript
const arr = [1,2,3]
const arr2 = arr
arr2.push(4)
console.log(arr);
```

Because of this, we need to manually duplicate the original array.  This is where the spread (`...`) operator comes in.

### Objects

Objects also need to be manually duplicated, just like arrays.  The following won't work as expected:

```javascript
const obj1 = { foo: 'bar', x: 42 };
const clonedObj = obj1;
clonedObj.x = 43;
console.log(obj1.x); //42
```

In the previous example, `obj1` is affected when we alter `clonedObj`.  We can easily duplicate objects like so:

```javascript
const obj1 = { foo: 'bar', x: 42 };
const clonedObj = {...obj1}
```

We could do the previous code, using a "for in" loop, but it's kind of a pain.  This is easier

## Dynamic Keys

We can use variables when creating keys for our objects like so:

```javascript
const key = 'DYNAMIC_KEY';
const obj = {
    [key]: 'ES6!'
};

console.log(obj); // > { 'DYNAMIC_KEY': 'ES6!' }
```

Note that if didn't put the `[]` around `key` the following would happen:

```javascript
const key = 'DYNAMIC_KEY';
const obj = {
    key: 'ES6!'
};

console.log(obj); // > { key: 'ES6!' }
```

Before a relatively recent  version of JS (caled ES6 or ECMAScript 6), we'd have to do the following:

```javascript
const key = 'DYNAMIC_KEY';
const obj = {}
obj[key] = 'ES6!'
console.log(obj); // > { 'DYNAMIC_KEY': 'ES6!' }
```

Objects in JS allow for array style access, so `obj.foo = 'bar'` is the same as `obj['foo'] = 'bar'`.  The advantage here is that you can use variables for keys.  This is fine too, but I like the first example.

## Import/Export in the Browser

The concepts for including one file's code into another is very similar, when working in the browser, to working in node.

In node we would do the following to export:

```javascript
//this is in test.js
const k = 12;
module.exports = k;
```

to include the code you do:

```javascript
const m = require('./test.js')
console.log(m); //12
```

Note that the varialbe name in test.js is `k`, but in the including file, we rename it to `m`.  `module.exports` is set to the value of `k` (12), not the variable itself.  The result of `require('./test.js')` is 12, which then gets set the varaible `m`.

We can do something very similar in the browser:

```javascript
//this is in test.js
const k = 12;
export default k;
```

To include the code we do:

```javascript
import m from './test'
console.log(m); //12
```

The other cool thing that we can do in the browser is export multiple values:

```javascript
//this is in test.js
const i = 10;
const j = 11;
const k = 12;
export { i, j, k };
```

Now we can include that code like so:

```javascript
import { i, j, k } from './test.js'
console.log(i); //10
console.log(j); //11
console.log(k); //12
```

The thing to note here is that the variable names **DO** need to match those being exported
