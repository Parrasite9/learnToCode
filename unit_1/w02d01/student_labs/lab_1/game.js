const prompt = require('prompt-sync')();

const adventurer = {
  name: "David",
  hp: 10,
  age: 13,
  weapon: "slingshot",
  // pet: {
  //   name: "Atlas",
  //   hp: 8,
  //   age: 2,
  //   type: "Guard Dog"
  // }
}

const ogre = {
  name: "Goliath",
  hp: 30,
  weapon: "Giant Sword"
}

//USER INPUT INVALID ANSWER
function invalidNumber() {
  const userInput = prompt("Select a number 1-6 ");
  if (userInput > 6 || userInput < 1) {
    console.log("Please select a valid number");
    invalidNumber();
  }
}

function invalidCriticalStrikeRoll() {
  const userInput = prompt("Select a number 1-6 ");
  if (userInput > 6 || userInput < 1) {
    console.log("Please select a valid number");
    invalidCriticalStrikeRoll();
  }
}

function invalidUserInput() {
  const userInput = prompt("Select a number 1-6 ");
  if (userInput > 6 || userInput < 1) {
    console.log("Please select a valid number");
    invalidUserInput();
  }
}

function invalidDodgeDie() {
  const userInput = prompt("Select a number 1-6 ");
  if (userInput > 6 || userInput < 1) {
    console.log("Please select a valid number");
    invalidDodgeDie();
  }
}


function invalidCSChance() {
  console.log("Please choose a valid option.");
  const criticalStrikeChance = prompt("YES or NO ")
  if (criticalStrikeChance !== "YES" || criticalStrikeChance !== "NO") {
    invalidCSChance();
  }
}

function invalidParryDie() {
  const parryDie = prompt("Select a number 1-6 ");
  if (parryDie > 6 || parryDie < 1) {
    console.log("Please select a valid number");
}
}


//GOLIATH HP
let npcHP = ogre.hp
let userHP = adventurer.hp

// const gameStatus = () => {
//   if (userHP <= 0) {
//     console.log("You are dead!");
//     return;
//   }
//   else if (npcHP <= 0) {
//     console.log("Congratulations! Goliath is Dead!");
//     return;
//   }
//   else {
//     startGame();
//   };
// }


function goliathHP() {
  for (let i = npcHP; i > 0; i--) {
    console.log("Goliath's health is now " [i] + "!");
  }
  startGame();
  if (npcHP <= 0) {
    console.log("Congratulations! Goliath is Dead!");
    return;
  }
}

function goliathHPCrit() {
  for (var i = npcHP; i > 0; i-=5) {
    console.log("Goliath's health is now " [i] + "!");
  }
  if (npcHP <= 0) {
    console.log("Congratulations! Goliath is Dead!");
    return;
  }
}

function davidHP() {
  for (let i = userHP; i > 0; i--) {
    console.log("Your health is now " + [i] + "!");
  }
  if (userHP <= 0) {
    console.log("You are dead!");
    return;
  }
}

function davidHPCrit() {
  for (let i = userHP; i > 0; i-=5) {
    console.log("Your health is now " + [i] + "!");
  }
  if (userHP <= 0) {
    console.log("You are dead!");
    return;
  }
}

function dodgeParry() {
  const tieMove = prompt("DODGE or PARRY")

  if (tieMove !== "DODGE" && tieMove !== "PARRY") {
  console.log("Please enter a valid option");
  dodgeParry();
}

}

////////////////////// START OF GAME /////////////////////////////

const startGame = () => {
  const npcMove = Math.floor(Math.random() * 6) + 1;

  const userInput = prompt("Select a number 1-6 ");
  if (userInput > 6 || userInput < 1) {
    console.log("Please select a valid number");
    invalidNumber();
  }
  else {
    console.log(`You chose ${userInput}.`);
    // const npcMove = Math.floor(Math.random() * 6) + 1;
    console.log("Goliath has chosen " + npcMove); 
  }
  
  
  if (userInput > npcMove) {
    console.log("Your have a clear shot to hit Goliath! Do you want a chance to hit critial strike? (Goliath has a chance to dodge!!)");
    const criticalStrikeChance = prompt("YES or NO  ");

    ///////////////////////////////////
    if (criticalStrikeChance !== "YES" && criticalStrikeChance !== "NO") {
        invalidCSChance();
      }
    else if (criticalStrikeChance === "YES") {
      const criticalStrikeRoll = prompt("Select a number 1-6  ");
      const criticalStrikeDie = Math.floor(Math.random());

      ////////////////////////
      if (criticalStrikeRoll > 6 && criticalStrikeRoll < 1) {
        console.log("Please select a valid number");
        invalidCriticalStrikeRoll();
      }
      else if (criticalStrikeRoll > criticalStrikeDie) {
        console.log(`Your ${criticalStrikeRoll} is higher than Goliath's ${criticalStrikeDie}! IT'S A CRITICAL HIT!`);
        goliathHPCrit();
        startGame();
      }
      else if (criticalStrikeRoll <= criticalStrikeRoll) {
        console.log(`Your roll of ${criticalStrikeRoll} was not higher than Goliath's ${criticalStrikeDie}. HE DODGED YOUR ATTACK!`);
        startGame();
      }
    }
    else if (criticalStrikeChance === "NO") {
        goliathHP();
      } 
  }


////////////////// NPC HAS HIGHER NUMBER //////////////////

  else if (userInput < npcMove) {
    console.log(`Your ${userInput} is less than Goliath's ${npcMove}!`);
    const npcCriticalStrike = Math.floor(Math.random() * 6) + 1;

    if (npcCriticalStrike >= 4) {
        console.log("You are vulnerable and Goliath is coming in with a critcal strike! Get ready to dodge!!");
        const defence = prompt("Select a number 1-6  ");
        if (defence > 6 && defence < 1) {
            invalidUserInput();
        }
        else if (defence > npcCriticalStrike) {
            console.log("You were able to dodge Goliath's attack!");
            startGame();
        }
        else if (defence < npcCriticalStrike) {
            console.log(`Your roll of ${defence} is lower than Goliath's ${npcCriticalStrike}!`);
            davidHPCrit();
            startGame();
        }
    }
  }

  ////// TIE MOVE ///////////

  else {
    console.log(`Your ${userInput} tied with Goliath's ${npcMove}! Attacks are coming in at the same time! What will you do?!`);
    const tieMove = prompt("DODGE or PARRY")
    const npcAttack = Math.floor(Math.random() * 6) + 1;

    if (tieMove !== "DODGE" && tieMove !== "PARRY") {
        console.log("Please enter a valid option");
        dodgeParry();
    }
    else if (tieMove === "DODGE") {
        const dodgeDie = prompt("Get ready to dodge! Select a number 1-6  ");

        if (dodgeDie > 6 && dodgeDie < 1) {
            console.log("Please select a valid number");
            invalidDodgeDie();
        }
        else if (dodgeDie > npcAttack) {
            console.log(`Your ${dodgeDie} is higher than Goliath's ${npcAttack}! You successfully dodged!`);
            startGame();
        }
        else if (dodgeDie < npcAttack) {
            console.log(`Your ${dodgeDie} is lower than Goliath's ${npcAttack}! You did not dodge in time!`);
            davidHP();   
        }
    }
    else if (tieMove === "PARRY") {
        const parryDie = prompt("Get ready to parry! Select a number 1-6  !");

        if (parryDie > 6 && parryDie < 1) {
            console.log("Please select a valid number");
            invalidParryDie();
            startGame();
        }
        else if (parryDie > npcAttack) {
            console.log(`Your ${parryDie} is higher than Goliath's ${npcAttack}! You successfully parried this attack!`);
            goliathHP();
            startGame();
        }
        else if (parryDie < npcAttack) {
            console.log(`Your ${parryDie} is lower than Goliath's ${npcAttack}! You were attacked!`);
            davidHP();
            startGame();
        }
    }
  }












































}

startGame();