const prompt = require('prompt-sync')()

//-------------------
//  Landscaper Game!
//-------------------

const player = {      //  Make a player object
  name: '',           //  Get name from the prompt
  funds: 0,
  toolInUse: {
    tool: `teeth`,
    profit: 1,
  }
}

// Make an array of tools as objects
 const tools = [
   {
     tool: `Teeth`,
     profit: 1,
   },
   {
     tool: `Rusty Scissors`,
     profit: 3,
     price: 3,
   },
   {
     tool: `Old Push Mower`,
     profit: 10,
     price: 15,
   },
   {
     tool: `Fancy Lawnmower`,
     profit: 25,
     price: 50
   },
   {
     tool: `Precision Flamethrower`,
     profit: 50,
     price: 100,
   },
   {
     tool: `Lawnmower Drone`,
     profit: 100,
     price: 150,
   }
 ]

//  Intro
console.log()
console.log()
console.log(`Welcome to LANDSCAPER! Today is a beautiful day to cut grass`)
console.log(`------------------------------------------------------------`)
console.log()

//  Ask to start game
let answer = false
while (answer === false) {
  console.log(`Would you like to play?`)
  console.log(`-----------------------`)
  console.log(`1. Yes`)
  console.log(`2. No`)
  console.log()
  start = prompt(`Type 1 or 2: `)
  if (start === '1') {
    player.name = prompt('Please enter your name to begin: ')
    answer = true
    playGame()
  } else if (start === '2') {
    console.log()
    console.log(`Maybe Next Time`)
    answer = true
    return
  } else {
    console.log()
    console.log(`'${start}' is not a valid response.  Please type 1 or 2`)
    console.log()
    continue
  }
}

//  Game Function
function playGame () {
  while (player.funds <= 1000 || player.toolInUse.tool !== 'Lawnmower Drone') {
    if (player.funds >= 1000 && player.toolInUse.tool === 'Lawnmower Drone') {
      console.log()
      console.log(`Congratulations ${player.name } you are the best landcaper in the land!`)
      console.log(`You have a $${player.funds} stack of cash and are using the ${player.toolInUse.tool}`)
      return
    } else {
    console.log()
    console.log(`Good morning ${player.name}, you have $${player.funds}`)
    console.log(`How would you like to start your day?`)
    console.log()
    console.log(`1. Check tool prices`)
    console.log(`2. Go to work`)
    console.log(`3. Purchase and upgrade tool`)
    console.log(`4. Go back to bed`)
    console.log(`5. End game`)
    console.log()
    const dailyChoice = prompt('Type 1, 2, 3, 4 or 5: ' )
    console.log()

    if (dailyChoice === '1') {             //check tool prices (console log tool price array)
      console.log(`TOOL PRICES:`)
      console.log(`------------`)
      for (let i = 1; i < tools.length; i++) {
        console.log(`${i}: ${tools[i].tool} --- $${tools[i].price}`)
      }
      continue
    } else if (dailyChoice === '2') {      // Mow the lawn
        player.funds += player.toolInUse.profit
        console.log(`${player.name}, you earned $${player.toolInUse.profit} for all your hard work with your ${player.toolInUse.tool} today!`)
        continue
      } else if (dailyChoice == 3) {       //purchase and upgrade tool
        let selection = false
        while (selection === false) {
          console.log(`TOOL PRICES:`)
          console.log(`------------`)
          for (let i = 1; i < tools.length; i++) {
            console.log(`${i}: ${tools[i].tool} --- $${tools[i].price}`)
          }
          console.log()
          console.log(`6: Exit Shop`)
          console.log()
          console.log(`You have $${player.funds}`)
          const buyTool = prompt('Type a number to purchace tool: ' )//used for array index
         //Make sure player has enough money
          if (buyTool == 1 || buyTool == 2 || buyTool == 3 || buyTool == 4 || buyTool == 5) {
            if (buyTool == tools[buyTool].tool || player.funds >= tools[buyTool].price) {
            player.toolInUse.profit = tools[buyTool].profit
            console.log()
            console.log(`You purchased the ${tools[buyTool].tool} and will now earn $${tools[buyTool].profit} per day!`)
            player.funds -= tools[buyTool].price //deduct tool price from funds
            player.toolInUse.tool = tools[buyTool].tool  //update tool
            tools.splice(buyTool, 1)
            selection = true
            continue
           } else if (buyTool == tools[buyTool].tool || player.funds < tools[buyTool].price) { //message if insufficient funds
               console.log()
             console.log(`Sorry ${player.name}, it looks like you are $${tools[buyTool].price - player.funds} short on the ${tools[buyTool].tool}.`)
             console.log()
             selection = false
             continue
           }
          }
          else if (buyTool == 6 ) {
            console.log()
            console.log(`See you later!`)
            selection = true
          }
          else {
            console.log()
            console.log(`'${buyTool}' is not a valid response.  Please type: 1, 2, 3, 4, 5 or 6: `)
            console.log()
            selection = false
            continue
              // continue//revisit to re ask question
          }
        }

       } else if (dailyChoice == 4) {//go back to bed
         console.log(`You have chosen to go back to sleep`)
         console.log(`Get some rest for mowing lawns tomorrow`)
         continue
       } else if (dailyChoice === '5') {      //Exit Game
          console.log(`Thanks for playing`)
          return
        } else {
           console.log(`'${dailyChoice}' is not a valid response.  Please type: 1, 2, 3, 4 or 5: `)
           continue//revisit to re ask question
        }
    }
  }
  console.log()
  console.log(`Congratulations ${player.name } you are the best landcaper in the land!`)
  console.log(`You have a $${player.funds} stack of cash and are using the ${player.toolInUse.tool}`)
}




























//
