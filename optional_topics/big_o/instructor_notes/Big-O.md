# Big O

Big O is a way to describe the efficiency of of an algorithm: how much time and/or space it needs to run (usually time)

It focuses on worst case scenarios (i.e. what's the longest amount of time an algorithm could take to run?).  There are other classifications like Big O for best case and average case scenarios, but most of the time we want to keep people's expectations low and then hopefully outperform those expectations.

It doesn't use seconds, minutes, hours, etc. as a unit of measure, though.  Instead, we measure time in number of instructions run.  For instance:

```javascript
console.log('hi');
```

The previous code is one instruction

```javascript
const foo = 'bar';
console.log(foo);
```

The previous code is two instructions

```javascript
const foo = [1,5,6,9,10];
for(let i = 0; i < foo.length; i++){
  console.log(foo[i]);
}
```

The previous code is six instructions.  One for assigning an array to a variable, and one for each time `console.log(foo[i])` is called within the loop (for a total of five instructions).

## Constant Complexity

Big O isn't really concerned with an exact number of instructions, though.  Instead, it's interested in how the number of instructions grow as the amount of data in your code grows.  Here's our first example:

```javascript
const logFirstElem = (arrayParam)=>{
  console.log(arrayParam[0]);
}
```

This function assumes that its caller will pass in an array parameter and logs the array's first element.  Let's pass an array with one element into it:

```javascript
const logFirstElem = (arrayParam)=>{
  console.log(arrayParam[0]);
}
logFirstElem(['foo']);
```

This has three instructions: one for assigning a function to a variable, one for calling the function, and one for logging the array element.  Let's do it again but with an array of five elements:

```javascript
const logFirstElem = (arrayParam)=>{
  console.log(arrayParam[0]);
}
logFirstElem([1,3,5,8,0]);
```

It still has three instructions.  You can imagine if we passed in an array with 1,000 elements, it would still only run three instructions.  As our dataset increases, the speed with which our function runs remains constant (unchanging).  We say this has **Constant Complexity**.  How can we visualize this?  Remember graphs in algebra?  It could look something like this:

![https://www.desmos.com/calculator](https://i.imgur.com/xHks87Z.png)

The function for this would be `y=3`.  Notice that no matter how big x (the amount of data) gets, y (the number of instructions run) remains 3.  Big O notation looks a lot like this kind of algebraic notation.  We'd write it as `O(3)`.  In fact, we don't even need to worry what the number is.  Big O is just an estimate.  Even if our array was was massive, the number of instructions would be negligable.  We might as well just write it as `O(1)` since there's basically no difference in speed between 3 instructions and 1 instruction.  In fact, even if there were 1,000 lines of code (`O(1000)`), that's relatively quick compared to some of the other algorithms we'll see.  Basically, any time you have a function that has **Constant Complexity** you can just estimate as `O(1)`.

## Linear Complexity

Let's create a function that logs every element in the array now:

```javascript
const logAllElems = (arrayParam) => {
  for(let i = 0; i < arrayParam.length; i++){
    console.log(arrayParam[i]);
  }
}
```

Let's call that function in and pass in an array containing one element:

```javascript
const logAllElems = (arrayParam) => {
  for(let i = 0; i < arrayParam.length; i++){
    console.log(arrayParam[i]);
  }
}
logAllElems(['foo']);
```

This runs three instructions: one for assigning a function to a variable, one for calling the function, and one for logging the single element in the array.  Let's do the same thing, but let's pass in an array of five elements:

```javascript
const logAllElems = (arrayParam) => {
  for(let i = 0; i < arrayParam.length; i++){
    console.log(arrayParam[i]);
  }
}
logAllElems([1,3,5,8,0]);
```

This runs seven instructions: one for assigning a function to a variable, one for calling the function, and one for each time we log an element from the array (for a total of five instructions).  If the array contained eight elements, the total number of instructions would ten.  If it contained 1,000 elements, there would be 1002 instructions.  For each new element in the array, the number of instructions increases by one.  This is called **Linear Complexity** and it's notated `O(N)`.  The `N` means that the number of instructions run corresponds directly to the number of elements in the data set.

We could notate this `O(N+2)` since technically there are two extra instructions in addition to the ones created by the loop (one for assigning a function to a variable and one for calling the function), but as the number of elements gets bigger and bigger, that extra two instructions becomes insignificant.  Is there really a noticible difference in speed between 100000000000 instructions and 100000000002 instructions?  Not really.  So we can drop the `+2` and just notate it `O(N)`.

Let's create a function that logs the elements of the array twice:

```javascript
const logAllElemsTwice = (arrayParam) => {
  for(let i = 0; i < arrayParam.length; i++){
    console.log(arrayParam[i]);
    console.log(arrayParam[i]);
  }
}
```

If we passed in an array containing one element...

```javascript
const logAllElemsTwice = (arrayParam) => {
  for(let i = 0; i < arrayParam.length; i++){
    console.log(arrayParam[i]);
    console.log(arrayParam[i]);
  }
}
logAllElemsTwice(['foo']);
```

it would have four instructions: one for assigning a function to a variable, one for calling the function, and one for each of the logs (for a total of two).  If we passed in an array containing five elements:

```javascript
const logAllElemsTwice = (arrayParam) => {
  for(let i = 0; i < arrayParam.length; i++){
    console.log(arrayParam[i]);
    console.log(arrayParam[i]);
  }
}
logAllElemsTwice([1,3,5,8,0]);
```

it would have 12 instructions: one for assigning a function to a variable, one for calling the function, and one each of the logs.  Since there are 2 logs inside the loop, and we loop 5 times, the number of `console.log` instructions is 10 (`2*5=10`).  If we had an array of 1,000 elements, we would have 2,002 instructions.  We could notate this as `O(2N+2)`.  As with before, that `+2` becomes negligable with sufficiently large arrays, so we can drop it.  In fact, `O(2N)` can just be written as `O(N)`.  If that coefficient before the `N` was really high (like `O(1000N)`) it really won't make a difference for significantly large data sets.

The graph of `O(N)` looks like this:

![](https://i.imgur.com/AQU8ihQ.png)

## Quadratic Complexity

Let's look at the following code:

```javascript
const compareElems = (arrayParam) => {
    for(let i = 0; i < arrayParam.length; i++){
        for(let j = 0; j < arrayParam.length; j++){
            console.log(arrayParam[i], arrayParam[j]);
        }
    }
}
compareElems(['a','b','c','d'])
```

This loops through the array and then, for each element, loops through the array again printing out each possible pair.  It basically matches each element in the array with every other element in the array and itself.

For an array of 2 elements, there are 4 pairs.  For an array of 3 elements, there are 9 pairs.  For an array of 4 elements, there are 6 pairs.  This is called **Quadratic Complexity**, and it's by far the slowest of these different types of Big O.

Here's what a graph of it looks like:

![](https://i.imgur.com/VTOVvV6.png)

## Summary

More or less, you can summarize the previous Big-O types as follows:

- Quadratic - nested loops
- Linear - non-nested loops
- Constant - no loops
