const prompt = require('prompt-sync')();

            //////////////////////// = = = = = SPACE BATTLE = = = = = //////////////////////// 
            //////////////////////// = = = = = = = = = = = = = = = = /////////////////////////

const breakLine =()=>{
    console.log("*********************************************")
}                        

///STEP 1. Create a function for calculating random firepower and hull
///= = = = = = = = = = = = = = = == = = = = = = = = = = = = = = =///

const random = (max, min)=>{
    return Math.floor(Math.random() * (max-min) + min)
}

///STEP 2. Create a function for calculating random accuracy
///= = = = = = = = = = = = = = = == = = = = = = = = = = = = = = =///

const randomAccuracy =(max, min)=>{
    return (Math.random() *(max-min)+min).toFixed(1)
}  

///STEP 3. Define our CHARACTERS as OBJECTS
///= = = = = = = = = = = = = = = == = = = = = = = = = = = = = = =///

const heroShip = {
    name : 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy:0.7
}

const alienShip = [{
    name: 'red',
    hull: random(7, 4),
    firepower: random(5, 2),
    accuracy: parseFloat(randomAccuracy(0.8, 0.4))

},
    {name: 'green',
    hull: random(7, 4),
    firepower: random(5, 2),
    accuracy: parseFloat(randomAccuracy(0.8, 0.4))},
    {
    name: 'blue',
    hull: random(7, 4),
    firepower: random(5, 2),
    accuracy: parseFloat(randomAccuracy(0.8, 0.4))
},
    {
    name: 'orange',
    hull: random(7, 4),
    firepower: random(5, 2),
    accuracy: parseFloat(randomAccuracy(0.8, 0.4))

    },
    {
    name: 'purple',
    hull: random(7, 4),
    firepower: random(5, 2),
    accuracy: parseFloat(randomAccuracy(0.8, 0.4))
    },
    {
    name: 'yellow',
    hull: random(7, 4),
    firepower: random(5, 2),
    accuracy: parseFloat(randomAccuracy(0.8, 0.4))
    }
]
///STEP 5. BATTLE
///= = = = = = = = = = = = = = = == = = = = = = = = = = = = = = =///
const battle=(enemy)=>{

    console.log(`${enemy.name} is against ${heroShip.name}`)
    while(heroShip.hull > 0 && enemy.hull > 0){
        if(Math.random()<=heroShip.accuracy){
            enemy.hull -= heroShip.firepower;
            console.log(`Your attack was successful ${heroShip.name}. ${enemy.name} health is at ${enemy.hull} now`)
            breakLine()
        }else if(Math.random()>heroShip.accuracy){
            console.log(`You missed`)
        }
        if (enemy.hull > 0 && Math.random() <= enemy.accuracy) {
            heroShip.hull -= enemy.firepower
            console.log(`${enemy.name} attack hit you. Your health now at ${heroShip.hull}`)
        } else if (Math.random() > enemy.accuracy) {
            console.log(`${enemy.name} missed`)
        }
        if (enemy.hull <= 0) {
            breakLine()
            console.log(`${enemy.name} is destroyed`)

        }
    }
}  

 ///STEP 6. EXIT TICKET
 ///= = = = = = = = = = = = = = = == = = = = = = = = = = = = = = =///

const retreat= ()=>{
    const quitter = prompt("You destroyed this ship. Do you want to retreat? y/n")
    if(quitter.toLocaleLowerCase() ==="y" || quitter.toLocaleLowerCase() === "yes" ){
        const startOver = prompt("Start your battle from the beginning? y/n")
            if(startOver.toLocaleLowerCase() ==="y" || startOver.toLocaleLowerCase()=== "yes"){
                start()
            }else {
                process.exit(1)
            }
        }
    }

const shipRoaster = ()=>{
    for(let i = 0; i <alienShip.length; i++) {
        battle(alienShip[i])
        retreat()
}
}
 // STEP 4. INITIATION
 ///= = = = = = = = = = = = = = = == = = = = = = = = = = = = = = =///
 
const start = () =>{
         console.log(`
//   \\ \\_____              \\ \\_____      |--- SPACE BATTLE ---|
// ###[==_____>   --  -- ###[==_____>
//    /_/                   /_/
//         \\ \\_____                               \\ \\_____
//       ###[==_____>  --      --     --    -   ###[==_____>
//          /_/                                    /_/              `);
        breakLine()
        console.log(`Welcome ${heroShip.name}! Let's begin!  y/n`)
        const attack = prompt("")
        if (attack.toLocaleLowerCase() ==="y" || attack.toLocaleLowerCase() === "yes" || attack === ""){
            shipRoaster()
        }else if(attack.toLocaleLowerCase() === "n" || attack.toLocaleLowerCase() === "no" || attack !== ""){
                    return
            }
        }

          
start()

