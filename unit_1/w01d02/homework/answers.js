// ////////////////////////////////
// // Easy Going
// // Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
// ////////////////////////////////


// ////////////////////////////////
// // Get Even
// // Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// ////////////////////////////////


// ////////////////////////////////
// // Fizz Buzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("Fizz Buzz");
//   }
//   else if (i % 5 === 0) {
//     console.log("buzz");
//   }
//   else if (i % 3 === 0) {
//     console.log("fizz");
//   }
//   else {
//     console.log(i);
//   }
// }
// ////////////////////////////////


// ////////////////////////////////
// // Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//
// plantee[2] = 5001
// console.log(plantee);
//
// wolfy[3] = "Gotham City"
// console.log(wolfy);
//
// dart.push("Hawkins (Hometown)")
// console.log(dart);
//
// wolfy[0] = "Gameboy"
// console.log(wolfy);
// ////////////////////////////////


// ////////////////////////////////
// // Yell at the Ninja Turtles
//
// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// let name = ""
//
// for (let name of ninjaTurtles) {
//   console.log(name.toUpperCase());
// }
// ////////////////////////////////


// ////////////////////////////////
// // Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
// console.log(favMovies[8]);
// // the followig log alphabatizes the array sequence. It is only permanent if I allow this .sort to continue globally.
// console.log(favMovies.sort());
// // the following log removes the last element of sequence then shows the array. If i had console.log(array.pop()) (array being the actual name of array) it would display only what had been removed.
// favMovies.pop();
// console.log(favMovies);
// // the following log adds the last element of sequence then shows the array. If i had console.log(array.push()) (array being the actual name of array) it would display only what had been added.
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies);
// // alphabatizes and displays from Z-A
// console.log(favMovies.reverse());
// // displays how many are in the array, in this case: 19
// console.log(favMovies.unshift());
// // replaces array element with another elment(s)
// favMovies.splice(3, 0, "Avatar");
// console.log(favMovies);
// // I can create a new variable and using .slice(start, finish) and logging that new variable. You can also use .unshift() to determine how many is in your array that way you can calculate accordingly. No this is not a permanent alter.
// let firstHalf = favMovies.slice(0, 10)
// let secondHalf = favMovies.slice(11, 20)
// // log will display the new variable only
// console.log(secondHalf);
//
// // Yes, we should have used let for our declaration because if we go outside of this "house", changes will not follow accordingly.
// ////////////////////////////////


////////////////////////////////
// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// // .pop() is not working. I have tried blank, 0, 1, 2, 3 and it is providing same value for each. Also tried console.log(whereIsWaldo.pop()); at multiple values as well.
// whereIsWaldo.pop(1, 1)
// console.log(whereIsWaldo);

// // Cannot access "Neff"
// whereIsWaldo.splice(1, 2, 500)
// console.log(whereIsWaldo);

////////////////////////////////


////////////////////////////////
//  Excited Kitten
// // Attempt 1 to pull a random string from array
// let designatedNumber = ["meow meow meow", "test 1", "test 2"]
// let randomString = designatedNumber.random(designatedNumber)
//
// console.log(randomString);

// // Attempt 2 to pull random string
// let randomStrings = ["test1", "test2", "test3"]
// let randomString = randomStrings[Math.floor(Math.random()*items.length)];
//
// console.log(randomString);

// let randomStrings = ["test1", "test2", "test3"]
// console.log(randomStrings[1]);

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log("...human... why you taking pictures of me?...");
//   }
// }
////////////////////////////////


// ////////////////////////////////
// //  Find the Median
// On the cool im not even 100% sure what this code is doing lol
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// function median(arr){
//   let len = arr.length;
//   let mid = Math.floor(len/2);
//   if (len % 2 != 0) {
//     return arr[mid];
//   }
//   else {
//     return (arr[mid - 1] + arr[mid]) / 2.0
//   }
// }
//
// console.log(median);
// // console.log(Math.floor(median(nums)));
// ////////////////////////////////

// Rank your comfort with HTML/CSS on a scale of 0 - 5:
// 5
