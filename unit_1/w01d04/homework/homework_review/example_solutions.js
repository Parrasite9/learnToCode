//================Palindrome================//
// const checkPalindrome =(string)=>{
//     let stringReversed = string.split('').reverse().join('')
//     if(string.toUpperCase() === stringReversed.toUpperCase()){
//         return true
//     }else{
//        return false
//     }
// }

// console.log(checkPalindrome('Borscht'))


//================Sum Array================//
//     const sumArray = (arr) =>{
//         let sum = 0
//         for(let i = 0; i < arr.length; i++){
//             sum+=arr[i]
//         }
//         return sum
//     }
// console.log(sumArray([1,2,3,4,5,6]))
//================Prime Numbers================//

///STEP ONE.

//     const checkPrime = (number) =>{
//         if(number <=1){
//             return false
//         }else if (number === 2){
//             return true
//         } else {
//             for ( let i = 2; i < number; i++){
//                 if (number % i === 0){
//                     return false
//                 }
//             }return true
//         }
//     }

//     // console.log(checkPrime(15))

//     //STEP TWO.

//     const printPrimes =(number)=>{
//         for (let i = 2; i < number; i++){
//             if(checkPrime(i)){
//                 console.log(`${i} is  a Prime Number`)
//             }
//         }
//     }
// printPrimes(97)

//================Rock/Paper/Scissors================//

// let choices = ['rock' , 'paper' , 'scissors']

// const randomMove =()=>{
//     return (choices[Math.floor(Math.random() * choices.length)])
// }

// // console.log(randomMove())

// let computersMove = randomMove()
// let usersMove = randomMove()

// console.log(computersMove,usersMove)

// let choices = ['rock', 'paper', 'scissors']
// const randomMove = () =>{
    
//     return (choices[Math.floor(Math.random() * choices.length)])
// }

// // randomMove()

// let machine = randomMove()
// let human = randomMove()

// const RockPaperScissors = () =>{
//     if(machine === human){
//         console.log(`Machine chose ${machine} and Human chose ${human}.It's a tie! `)
//     }else if (machine === choices[0] && human === choices[1]){
//         console.log(`Machine chose - ${machine} and Human chose - ${human}. Paper beats rock!`)
//       }else if(machine === choices[1] && human === choices[2]){
//         console.log(`Machine chose - ${machine} and Human chose - ${human}. Scissors beat Paper - Human wins`)
//       }else if(machine === choices[2] && human === choices[1]){
//         console.log(`Machine chose - ${machine} and Human chose - ${human}. Scissors beat Paper - Machine wins`)
//       }else if(machine === choices[2] && human === choices[0]){
//         console.log(`Computer chose - ${machine} and Human chose - ${human}.  Paper beats rock!`)
//       }

// }

// RockPaperScissors()
