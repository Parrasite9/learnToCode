const prompt = require('prompt-sync')();

//ourShip properties
const ourShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: Math.random(),
}

//user battle function
const userHit = () => {
    let i = alienSpaceships
    let hp = alienSpaceships.hull

    if (ourShip.accuracy >= .8) { // if the accuracy is above .8
        console.log("You hit the target");

        while (alienSpaceships[i]) {
            hp -= alienSpaceships[i]
        }














        alienSpaceships.hull -= 5; // this is the hit value
        if (alienSpaceships.hull <= 0 ) { // in the case that the enemy spaceship runs out of hitpoints
            console.log("You defeated the enemy"); //tells that enemy has been defeated
            const goOn = prompt('Would you like to move to the next target? ') //Would you like to fight the next target 
                if (goOn.toUpperCase() === 'CONTINUE') { //if you select continue, find a way to go fight the next target
                   
                    console.log(''); //FIX THIS

                }else if (goOn.toUpperCase() === 'RETREAT') { // if they say retreat, game is over
                    console.log("Game over, Play again")
                }else {
                    return goOn();
                }
            return;
        }
    }else {
        console.log("You missed the target")
        return enemyAttack();
    }
}


// LOGS HOW MANY ENEMY SHIPSß
let alienSpaceships = []
for (let i = 1; i <= 6; i++) {
    alienSpaceships.push (
        {
            name: "Enemy Spaceship",
            hull: Math.floor(Math.random() * (7-3) + 3),
            firepower: Math.floor(Math.random() * (5-2) + 2),
            accuracy: Math.random() * (.8-.6) + .6        
        }
    )
}


const npcAttack = () => {
    // let alienSpaceships = []
    // for (let i = 0; i <= 5; i++) {
    //     alienSpaceships.push ({
    //         name: "Enemy Spaceship",
    //         hull: Math.floor(Math.random() * (7-3) + 3),
    //         firepower: Math.floor(Math.random() * (5-2) + 2),
    //         accuracy: Math.random() * (.8-.6) + .6
    //     })
    // }


    for (let i = 0; i <= alienSpaceships.length; i++) {
        // let alienSpaceships = []
        // for (let i = 0; i <= 5; i++) {
        //     alienSpaceships.push ({
        //         name: "Enemy Spaceship",
        //         hull: Math.floor(Math.random() * (7-3) + 3),
        //         firepower: Math.floor(Math.random() * (5-2) + 2),
        //         accuracy: Math.random() * (.8-.6) + .6
        //     })
        // }
        
        
    if (alienSpaceships[i].accuracy >= .6) { //if the alien ship accuracy is more than .6
        console.log("You have been hit with " + alienSpaceships.accuracy + " damage!"); // tell player that you have been hit by alienship
        //USER HP REDUCTION
        ourShip.hull -= alienSpaceships[i].firepower //make the damage register
        console.log(ourShip.hull);

    }
    else {
        console.log("HE MISSED!");
        gameRound();
    }

}

}

//user attack prompt
const userAttack = () => {
    const startUserAttack = prompt('It\'s our turn. We attack' )
    return userHit();
}

//enemy attack prompt
const enemyAttack = () => {
    const startEnemyAttack = prompt('It\'s the enemy\'s turn. They attack. ') 
    return npcAttack();
}

const startGame = prompt('Welcome to budget Space Defenders. \nPress Enter to start ')

//Game start Code
const gameRound = () => {

    userAttack();
    enemyAttack();
    gameRound();

    
}



//attempting a way to make the battle loop until there are no spaceships
// for (i=0;i<alienSpaceships.length;i++) {
    
// }

// console.log(alienSpaceships);
gameRound();