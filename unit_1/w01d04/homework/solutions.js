// Parameters are the "aliases" of a variable within a function.
// For example, example(a, b) both a and b are aliases. In order to give those aliases true value, or name, you would need an argument.
// For example:
//         const example = (a, b) => {
//           const total = a + b;
//           return total;
//         }
//         console.log(example(2, 5));
// The 2 and 5 in the example above are the true values for this function. These values are called Arguments.

// console.log(); is used for when you want to save data within the console. return is used otherwise.







// const checkPalindrome = (str) => {
//   if (str === "Palindrome") {
//     console.log(str === "Palindrome");
//   }
//   else {
//     console.log("Something is wrong.");
//   }
// }
// checkPalindrome("Palindrome")





// const sumArray = (start, end) => {
//   for (let i = 0; i <= 6; i++) {
//     return sumArray();
//   }
// }

// I CANNOT FIGURE THIS ONE OUT. MULTIPLE ATTEMPTS HAVE BEEN MADE. WHAT I WAS WANTING TO DO WAS
// CREATE A WAY TO RETRIEVE MY ARGUMENTS AND CREATE AN ARRAY BASED ON SAID ARGUMENTS. FROM THAT POINT I
// WOULD USE SOME MATH FUNCTION TO ADD THE ARRAY TOGETHER. THIS WOULD HAVE BEEN PLACED WITHIN MY FOR LOOP.
// Array.from(Array(10).keys());

// function range(start, end) {
//   return Array(end - start + 1).fill().map((_, idx) => start + idx)
// }
// var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
// console.log(result);

// return Array.from(Array(10, 24).keys()));
// console.log(Array.from(Array(10, 24).keys()));

// let test = range(10, 25);
// console.log(test);




// const sumArray = (arr) => {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i]
//   }
//   return sum
// }
//
// console.log(sumArray([1,2,3,4,5,6]));




// const checkPrime = (num) => {
//   if (num === 0 || num === 1) {
//     return num + " is an exception to the rule and is not a prime number";
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkPrime(144));



// COULD NOT GET THE GAME BELOW TO FUNCTION PROPERLY. I WANTED TO CREATE THE FUNCTION GAME() THAT HELD
// OTHER FUNCTIONS INSIDE OF IT. YOURMOVE WAS SUPPOSED TO RETRIEVED FROM THE ARGUMENT AND PLACED THROUGHOUT THE REST
// OF THE FUNCTIONS THAT ARE NESTED. IT WOULD THEN BE RETRIEVED WITHIN THE FOR LOOP TO RETRIEVE THE PROPER OUTPUT. ALL OF
// THE OUTPUTS ARE THE SAME FOR TESTING PURPOSES, BUT, AS STATED, IT IS NOT FUNCTIONING PROPERLY AND COULD NOT RETRIEVE ANY OUTPUT.
// THE OUTPUT PRIVDED IS AN "UNDEFINED"

const game = (yourMove) => {
  let arr = ["rock", "paper", "scissors"]
  
  const randomMove = (cpuMove) => {
    let arrRandom = arr[Math.floor(Math.random() * arr.length)]
    return arrRandom;
  }

  const rockPaperScissors = (yourMove, arrRandom) => {
    if ("scissors", "rock") {
      console.log("THIS IS A TEST");
    }
    if ("scissors", "paper") {
      console.log("THIS IS A TEST");
    }
    if ("scissors", "scissors") {
      console.log("THIS IS A TEST");
    }
  }
}


// const randomMove = (cpuMove) => {
//   let arr = ["rock", "paper", "scissors"]
//   let arrRandom = arr[Math.floor(Math.random() * arr.length)]
//   return arrRandom;
// }
//
// const rockPaperScissors = (yourMove, arrRandom) => {
//   if ("scissors", "rock") {
//     console.log("THIS IS A TEST");
//   }
// }

console.log(game("scissors"));
