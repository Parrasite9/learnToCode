const prompt = require('prompt-sync')();

//ourShip properties
const ourShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: .5,
}
const alienSpaceships = []
for (let i = 0; i < 6; i++) {
    alienSpaceships.push (
        {
            name: "Enemy Spaceship",
            hull: Math.floor(Math.random() * (7-3) + 3),
            firepower: Math.floor(Math.random() * (5-2) + 2),
            accuracy: Math.random() * (.8-.6) + .6
        }
    )
}

for (i=0;i<alienSpaceships.length;i++) {


//user battle function
const userHit = () => {
    if (ourShip.accuracy >= Math.random()) { // if the accuracy is above random number
        alienSpaceships[i].hull -= 5; // this is the hit value
        console.log(`You hit the target. Target has ${alienSpaceships[i].hull} hitpoints\n`)
        if (alienSpaceships[i].hull <= 0) { // in the case that the enemy spaceship runs out of hitpoints
            console.log("You defeated the enemy"); //tells that enemy has been defeated
              const goOn = prompt('Continue? Y/N ') //Would you like to fight the next target
                if (goOn.toUpperCase() === 'Y') { //if you select continue, find a way to go fight the next target
                  if(i == 5) { //if we get to the end of the enemy spaceship array
                    console.log("You defeated all the enemies! You win!") //tell that we won
                    return gameEnd(); //run the game closing function
                  }else { // otherwise
                    i += 1 //go to the next index of the array
                    userAttack(); //run the attack function
                  }
                }else { //if you decide not to continue
                    console.log("Game over, Play again\n"); //tell that game is over
                    return gameEnd(); //run the game closing function
                }
        }else { // if you attack and enemy doesn't die
          return enemyAttack(); //run the enemy attack function
      }
    }else { //if you somehow miss
        console.log("You missed the target\n") //tell that you missed
        return enemyAttack(); //run the enemy attack function
    }
}


//LOGS HOW MANY ENEMY SHIP

const npcAttack = () => {
    if (alienSpaceships[i].accuracy >= .6) { //if the alien ship accuracy is more than .6
        ourShip.hull -= alienSpaceships[i].firepower //make the damage register
        console.log(`You have been hit with ${alienSpaceships[i].firepower} damage! You have ${ourShip.hull} hitpoints \n`); // tell player that you have been hit by alienship
        //USER HP REDUCTION
        if(ourShip.hull <= 0){ //if we don't have any more hit points
            console.log("You died") //tell that we lost
            return gameEnd(); //run the game ending function
        }
        return userAttack(); //if we survive, run the attacking function

    }
    else { //if they miss
        console.log("HE MISSED!\n"); //tell that enemy miss
        return userAttack(); //run attacking function
    }
}



//Game start Code
const gameRound = () => {
    const startGame = prompt('Welcome to budget Space Defenders.\nClick Enter to play')
    return userAttack(); //start attack
}

//user attack prompt
const userAttack = () => {
    const startUserAttack = prompt('It\'s our turn. We attack\n' )
    return userHit();
}


//enemy attack prompt
const enemyAttack = () => {
    const startEnemyAttack = prompt('It\'s the enemy\'s turn. They attack.\n')
    return npcAttack();
}

const gameEnd = () => {
  i += 6;
}

gameRound();
}
