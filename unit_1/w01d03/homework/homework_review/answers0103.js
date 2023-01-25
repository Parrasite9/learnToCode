////////////////////////////////
// Easy Going
////////////////////////////////
// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (i = 2; i <= 200; i += 2) {
//   console.log(i)
// }


// Another way...

// for (let i = 0; i <= 200; i++) {   // MODULUS IN PLAIN ENGLISH:
//   if (i % 2 === 0){                // IF (i DIVIDED BY 2 HAS A REMANDER OF 0)
//     console.log(i);                // THIS IS HOW WE FIND MULTIPLES OF 2
//   }
// };
//
// // BONUS MODULUS EXAMPLE
// for (let i = 0; i <= 200; i++) {   // MODULUS IN PLAIN ENGLISH:
//   if (i % 5 !== 0){                // IF (i DIVIDED BY 5 DOESN'T HAVE A REMANDER OF 0)
//     console.log(i);                // THIS IS HOW WE EXCLUDE MULTIPLES OF 5
//   }
// };

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {   // START WITH THE STRICTEST CONDITION
//     console.log('FizzBuzz')
//   }  else if (i % 5 === 0) {
//     console.log('Buzz')
//   }  else if (i % 3 === 0) {
//     console.log('Fizz')
//   } else {                            // DOWN TO THE MOST GENERAL
//     console.log(i)
//   }
// }
//
// for (i = 1; i <= 100; i++) {
//   switch (0) {
//     case (i % 3 || i % 5):
//       console.log('FizzBuzz')
//       break
//     case (i % 5):
//       console.log('Buzz')
//       break
//     case (i % 3):
//       console.log('Fizz')
//       break
//     default:
//       console.log(i)
//   }
// }


////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee's Birthday
// plantee[2] += 1
// console.log(plantee)

// Wolfie's Move
// wolfy[3] = 'Gotham City'
// console.log(wolfy)
//
// Dart's Dual Citizenship
// dart.push("Hawkins")
// console.log(dart)
//
// Wofly's Name Change
// wolfy[0] = 'Gameboy'
// console.log(wolfy)
//


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
//
// console.log('For loop:')
// console.log('---------')
//
//
// for (let i = 0; i < turtles.length ; i++) {
//   console.log(turtles[i].toUpperCase())
// }
//
// console.log()
// console.log('For of loop:')
// console.log('------------')
//
// // BONUS: FOR OF LOOP
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for (let turtle of turtles) {
//   console.log(turtle.toUpperCase())
// }
// //
// console.log()
// console.log('No loop:')
// console.log('--------')
//
// // HARD CODE -- NOT DRY!
// console.log(turtles[0].toUpperCase())
// console.log(turtles[1].toUpperCase())
// console.log(turtles[2].toUpperCase())
// console.log(turtles[3].toUpperCase())

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
// // Console log index of Titanic
// // console.log(favMovies.indexOf('Titanic'))
//
// //use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies.sort())
//
// //Use pop Method
// favMovies.pop()
// console.log(favMovies)
//
//
// //push 'Gaurdians of the Galaxy'
// favMovies.push('Gaurdians of the Galaxy')
// console.log(favMovies);
//
// //Reverse the array
// console.log(favMovies.reverse())
//
// //Use the shift method
// favMovies.shift()
// console.log(favMovies)
//
// //unshift - what does it return?
// console.log(favMovies.unshift())
//
// //splice "Django Unchained" and add "Avatar" Thought question: did this permanently alter our array?
// favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')
// console.log(favMovies)

////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Egbert
// whereIsWaldo.splice(1, 1)  // AT INDEX 1 REMOVE ONE ELEMENT
// console.log(whereIsWaldo)

 // Change "Neff" to "No One"
// whereIsWaldo[3].splice(2, 1, "No One") // AT INDEX 2 OF THE ARRAY AT INDEX 3 of whereIsWaldo
// console.log(whereIsWaldo)              // REPLACE 1 ELEMENT WITH 'no one'

// Access and console.log "Waldo"
// console.log(whereIsWaldo[3][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
// const catQuotes = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
//
// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0) {                                    // IF i IS AN EVEN NUMBER
//     console.log(catQuotes[Math.floor(Math.random()*3)]) // LOG RANDOM INDEX OF catQuotes
//   } else {                                              // ELSE
//     console.log("love me, pet me! HSSSSSS!")            // LOG THIS STRING
//   }
// }

////////////////////////////////
//  Find the Median
////////////////////////////////
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]
//
// nums.sort()
// let median = nums[Math.floor(nums.length/2)] //Math.floor ACCOUNTS FOR ODD LENGTHED ARRAYS
// console.log(median);


//----------------------
// Hungry for More?
//----------------------

// Return of the Closets
//
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// Alien Attire
// let kristensShoe = kristynsCloset.shift()
// thomsCloset[2].push(kristensShoe)
//
// console.log('Kristyn\'s Closet:')
// console.log(kristynsCloset)
// console.log('Thom\'s Closet:')
// console.log(thomsCloset)


// Dress Us Up
// console.log('Outfit one: ' + thomsCloset[0][0] + ', ' + thomsCloset[1][0] + ', ' + kristynsCloset[kristynsCloset.length-1])
//
// console.log('Outfit two: ' + thomsCloset[0][3] + ', ' + thomsCloset[1][2] + ', ' + kristynsCloset[kristynsCloset.length-2])
//
// console.log('Outfit three: ' + thomsCloset[0][2] + ', ' + thomsCloset[1][1] + ', ' + kristynsCloset[0])

// Dirty Laundry

// for (let i = 0; i < kristynsCloset.length; i++) {
//   console.log(`~~WHIRR~~ Now washing: ${kristynsCloset[i]}`)
// }
//
// //Inventory
// console.log('Shirts: ' + thomsCloset[0])
// console.log('Pants: ' + thomsCloset[1])
// console.log('Accessories: ' + thomsCloset[2])




function palindrome(str) {
  let clean = str.split('')
  for (let i = 0; i < clean.length; i++) {
    if (clean[i] === '_') {
      delete clean[i]
     } else if (clean[i] === ',') {
       delete clean[i]
     } else if (clean[i] === ' ') {
       delete clean[i]
     } else if (clean[i] === '.') {
       delete clean[i]
     } else {}
  }
  let reverse = clean.reverse()
  console.log(`REVERSE => ${reverse.join()}`)
  console.log(`CLEAN => ${clean.join()}`)
  if (reverse.join('').toUpperCase() === clean.join('').toUpperCase()) {
    console.log(`1: ${reverse.join('')} 2: ${clean.join('')}`)
     return true
   } else {
       console.log(`1: ${clean.reverse().join('')} 2: ${clean.join('')}`)
     return false
   }
}

console.log(palindrome('_eye'))
console.log(palindrome('race car'))
console.log(palindrome('A man, a plan, a canal. Panama'))
console.log(palindrome("not a palindrome"))
console.log(palindrome('level'))




















//
