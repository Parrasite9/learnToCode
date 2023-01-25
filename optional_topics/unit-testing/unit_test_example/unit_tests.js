const add = require('./add');


//scenario 1: user passes two numbers, numbers are integers
console.log('add() should return the sum of two numbers when passed integers as parameters');
if(add(1,1) === 2){
    console.log(' - success');
} else {
    console.log(' - fail');
}


//scenario 1: user passes two numbers, numbers are strings

console.log('add() should return the sum of two numbers when passed strings as parameters');
if(add("1","1") === 2){
    console.log(' - success');
} else {
    console.log(' - fail');
}