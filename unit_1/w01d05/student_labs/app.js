const locations = ['LOBBY', 'MAIN CORRIDOR', 'MAIN OFFICE', 'LIBRARY', 'CLASSROOM']
const simpleAnswers = ['YES', 'NO', 'MAYBE', 'HI', 'BYE', 'LIE', 'TRUTH']
const simpleActions = ['FIGHT', 'RUN', 'TALK', 'HIDE', 'LOOK', 'EXAMINE', 'SCREAM']
const simpleDirections = ['LEFT', 'RIGHT', 'STRAIGHT', 'BACK']
const toBeContinued = ["To be continued..."]

const prompt = require('prompt-sync')();

//BASEMENT
const basement = () => {
    console.log(`You wake up in a dark room and the smell of rotten flesh imediately makes you vomit. You hear the sound of deep laughter in front of you. Do you ask who is there?`);
    const reaction = prompt(`YES or NO `)
    // ANY RESPONSE THAT IS NOT YES OR NO
    if (reaction !== simpleAnswers[0] && reaction !== simpleAnswers[1]) {
        basement();
    }
    //IF REACTION IS YES
    else if (reaction === simpleAnswers[0]) {
        console.log(`Who is there?!`);
        console.log("Do You get a response?");
        const response = prompt("YES or NO ")
        console.log("Out of the shadow steps the principal, or atleast it looked like the principal");

        //IF RESPONSE IS NOT YES OR NO
        if (response !== simpleAnswers[0] && response !== simpleAnswers[1]) {
            console.log("the principal's mouth starts to open to the point you hear his jaw dislocate.");
            console.log("The skin from his mouth begins to rips up towards his ears as his mouth opens beyond the human capabilities");
            console.log("Your back is against the wall and you have nowhere to go.");
            console.log("You watch as two long tongues exit the beasts mouth. The tongues appear to be about a foot long. They were drenched in spit to the point of drooling.");
            console.log('The beast: Time to feed...');
            console.log(`${toBeContinued[0]}`);
            return;
        }
        //IF RESPONSE IS YES
        else if (response === simpleAnswers[0]) {
            console.log("You are terrified at what you see. The principal bends over backwards at the waist. The speed at which this has happened was so fast, and with so much force, no human would survive the spinal damage. It sounded like the perfect cracked knuckles.");
            console.log("You look at his stomach as you can see probing and bulging from the inside. Shortly, the body was impaled from the inside out.");
            console.log("Two claws reach out of the wound and rips the body open. Out comes a creatue with a fur body and the skull of a deer with large antlers. It stood on all fours like a deer, but unlike the two claws it had for hands, it had two hoof feet.");
            console.log(`${toBeContinued[0]}`);
            return;
        }
        //IF RESPONSE IS NO
        else if (response === simpleAnswers[1]) {
            //INSERT CODE
            console.log(`There was ${simpleAnswers[1]} respose. You You begin to think you were just hearing things.`);
            console.log(`You begin to ${simpleActions[6]} for help.`);
            console.log("Kid: Don't bother, noone can hear you in The Alcove.");
            console.log(`${toBeContinued[0]}`);
            return;
        }
    } //IF REACTION IS NO
    else if (reaction === simpleAnswers[1]) {
        ///////////////////// INSERT STORY ///////////////////////////////////////////////////////
        console.log("The principle steps out of the shadows and is standing face to face with you.");
        console.log("His mouth begins to open horizontally and black drool begins dropping from his mouth.");
        console.log("His tongue appears to be split in two like a snake. He leans towards you and licks your entire face. The smell of his mouth is horrendous.");
        console.log("Principle: Soon you will be dead.");
        console.log(`${toBeContinued[0]}`);
        return;
    }
}

//LIBRARY
const classroom = () => {
    console.log(`You are now in the ${locations[4]}, in front of you, you see a closet. will you open it?`)
    const classResponse = prompt(`YES/NO`)
    if (classResponse !== simpleAnswers[0] && classResponse !== simpleAnswers[1]) {
        // if type in the wrong thing, TRY AGAIN
        console.log("Try AGAIN. You can't fool me with your terrible spelling!! ");
        //send back to the classroom
        classroom();
    } // if they choose YES
    else if (classResponse === simpleAnswers[0]) {
        console.log("You open the door to a clown holding a knife. He stabs you and you are dead.");
        return;
    } // IF THEY CHOOSE NO
    else (classResponse === simpleAnswers[1])
    console.log("Good choice, who knows what's in there. You're going back to the hallway");
    return corridorOptions();
}

const library = () => {
    let newCorridor = prompt(`Would you like to go into the ${locations[3]} or into the ${locations[4]} `);
    // typing an incorrect answer and returning bacj to the main corridor to make a choice
    if (newCorridor !== locations[3] && newCorridor !== locations[4]) {
        console.log("WRONG ANSWER. TRY AGAIN")
        library();
    } else if (newCorridor === locations[3]) {
        // choosing library
        console.log(`You are now in the ${locations[3]}, You get an umbrella, and now you can leave this horrid place for good and face the storm. Congratulations!`);
        return;
    } else (newCorridor === locations[4])
    // console.log(`You are now in the ${locations[4]}`)
    classroom();
}


//MAIN OFFICE
const principalOffice = () => {
    const dumbChild = "Just like a typical child, you are dumb "
    const throatGrab = "The principal lifts you off the ground by your throat. He then pulls a syringe and injects you in the shoulder."

    console.log("Principal: What are you doing outside of class??");
    const response = prompt("LIE or TRUTH ");

    // IF STATEMENT IS INVALID
    if (response !== simpleAnswers[5] && response !== simpleAnswers[6]) {
        console.log("Principal: You want to act like an idiot??");
        console.log("With a dumb look on your face, you turn around walk to the library");
        console.log('As you walk away you hear the principal whisper "I cant wait to eat that kid."');
        console.log("Now you walk away looking dumb AND scared");
        library();
    }
    else if (response === simpleAnswers[5]) { // LIE IF STATMENT
        console.log("I need to see the nurse, I dont feel well...");
        console.log(`Principal: Children who ${simpleAnswers[5]} must be punished!`);
        console.log("Since you insist on being sick, how about a shot?!");
        console.log("The principal pulls a syringe and tries to inject you.");
        const fightOrFlight = prompt("Do you FIGHT or RUN ")

        // IF INVALID INPUT HAS BEEN ENTERED
        if (fightOrFlight !== simpleActions[0] && fightOrFlight !== simpleActions[1]) {
            console.log(dumbChild + "and you could not even process your options correctly, nor react fast enough");
            console.log(throatGrab);
        } // IF USER TRIES TO RUN
        else if (fightOrFlight === simpleActions[1]) {
            console.log(dumbChild + "and you try to run. As you turn around to sprint out the door, you bash your face into the door frame knocking you unconcious.");
            console.log(throatGrab);
        } // IF USER TRIES TO FIGHT
        else if (fightOrFlight === simpleActions[0]) {
            console.log(dumbChild + "you give a pathetic attempt at fighting.");
            console.log(throatGrab);
        }
        basement();

    } else if (response === simpleAnswers[6]) { // TRUTH IF STATMENT
        console.log("I dont feel too well...");
        console.log(`Principal: If that's the ${simpleAnswers[6]}, drink this.`);
        console.log("The principal pulls a vial out of his pocket and pours a weird substance into an already weird looking drink.");
        const response = prompt("The drink is bubbling and looks very suspicious, do you drink it? Yes/No ");
        if (response !== simpleAnswers[0] && response !== simpleAnswers[1]) {
            console.log("You took to long to give a proper reponse. The principal has a ZERO TOLERANCE policy on stupidity.");
            console.log("The principal grabs you by the throat, lifts you off the ground, and squeezes to the point it snaps your neck.");
            console.log("You are now dead.");
            return;
        }
        else if (response === simpleAnswers[0]) {
            console.log("The drink was poisoned. You are now dead.");
            return;
        }
        else if (response === simpleAnswers[1]) {
            console.log("On second thought, I think I should just go to class.");
            console.log("principal: I thought so.");
            lobbyOptions();
        }
    }
}


//CORRIDOR
const corridorOptions = () => {
    console.log(`You progress down the corridor, passing an open LOCKER. You think it is strange that the locker is open, as that goes against its very reason for exisitng. The locker's owner is either negligent, has nothing to hide, or wants someone to look into it. All of these possibilities are troubling in their own way. To the LEFT and RIGHT, just beyond, are two doors standing ajar. STRAIGHT down the corridor, you see a staircase with one flight leading up and another down. Choose your direction.`)
    const corridor = prompt(`Choose LEFT, RIGHT, LOCKER, or STRAIGHT.`);
    if (corridor !== 'LEFT' && corridor !== 'RIGHT' && corridor !== 'STRAIGHT' && corridor !== 'LOCKER') {
        console.log('Please choose LEFT, RIGHT, LOCKER, or STRAIGHT.');
        return corridorOptions()
    } else if (corridor === 'RIGHT') {
        console.log(`You find yourself in the library. It's dark and there are many tattered books strewn across the warped tiles. This room clearly does not get used often, at least not for reading. Judging from the trophy case in the lobby, and the rank smell of the place, it's more likely a dumping ground. Or maybe the wrestling team spars in here.`)
        corridorOptions();
    } else if (corridor === 'LEFT') {
        classroom();
    } else if (corridor === 'STRAIGHT') {
        console.log(`You approach the staircase. It leads to a floor below. The first flight is only about six steps; it reaches a short landing before proceeding further down into an unremitting darkness. You walk down the first flight cautiously, turn around the landing and stare into the abyss below. You begin your descent, and soon lose your sense of self as the stygian stairwell envelopes you. You lose your footing, and fall forward into oblivion.`)
        basement();
    } else {
        console.log(`You examine the locker. It must have belonged to a student with particularly challenging ideas about cleanliness and hygiene. The top shelf, where one would normally store textbooks and other learning materials, is a mass of unwashed clothing. It looks damp. Acting beyond reason, you lean in to look more closely. It appears to be...writhing.`)
        function lockerOptions() {
            let laundry = Math.floor(Math.random() * 3);
            return laundry
        }
        if (laundry = lockerOptions()) {
            console.log(`The laundry is indeed writhing, and the odor is overpowering. Your eyes start to water as bring your hand to cover your nose and mouth. You watch as the clothes tie and untie from one another like snakes. A sock comes out of a shirt sleeve and disappears into the leg of a pair of sweatpants. The undulations grow in speed until you cannot discern one piece of clothing from another. Suddenly, it comes to rest. The legs of the sweatpants lay atop one another, with a sock lolling out the mouth like a dog's tongue. A bundled hoodie cascades from above, its sleeves wrapped aroung it's back coming over the top, the wrist holes looking back at you like a pair of hollowed eyesockets. The tongue-sock moves across the top pantleg, like Tom looking at Jerry. The pant legs part, and the sock slides back. A low gurgle emerges from within. The pant legs expand and contract. The lips part again, and the sock lunges out, dragging a rolled up shirt with it. The sock-togue slides over your shoulder and wraps around your neck. You reach up to pull it apart, to create some space between your neck and the foul reeking fabric. The sock ties itself in a knot at the back of your neck. You struggled to breathe, but this is not the end. You feel a tug back towards the locker. You see the shirt start to disappear back between the pantleg-mouth of the laundry creature. Your face is pulled closer to this profane creation and you brace yourself against the adjacent locker. You cannot take in any air, and your attempts at breathing resemble little more than stifled grunts. Your feel the fabric of the mouth over your forehead and ears. The blackness inside is overwhelming and infinite. Shortly, it's all you know. GAME OVER.`)
            return;
        } else if (laundry = lockerOptions) {
            console.log(`The laundry is indeed writhing, and the odor is overpowering. Your eyes start to water as bring your hand to cover your nose and mouth. You watch as the clothes tie and untie from one another like snakes. A sock comes out of a shirt sleeve and disappears into the leg of a pair of sweatpants. The undulations grow in speed until you cannot discern one piece of clothing from another. Suddenly, it comes to rest. The legs of the sweatpants lay atop one another, with a sock lolling out the mouth like a dog's tongue. A bundled hoodie cascades from above, its sleeves wrapped aroung it's back coming over the top, the wrist holes looking back at you like a pair of hollowed eyesockets. The tongue-sock moves across the top pantleg, like Tom looking at Jerry. The pant legs part, and the sock slides back. A low gurgle emerges from within. The pant legs expand and contract. Soon the gurgles become clearer. "It's not fourth period yet. That's when Finbar has gym. Who are you? What do you want?" Your eyes widen in terror. You slam the locker door closed. There's something deeply wrong with this place.`)
            corridorOptions();
        }
    }
}


//LOBBY
const lobbyOptions = () => {
    const lobby = prompt('Decide: proceed LEFT or STRAIGHT ');
    if (lobby !== 'LEFT' && lobby !== 'STRAIGHT') {
        console.log('Please choose LEFT or STRAIGHT');
        return lobbyOptions()
    }
    else if (lobby === 'STRAIGHT') {
        corridorOptions();
    } else {
        principalOffice();
    }
}


//START
const username = prompt(`Are you ready? Press Enter. `);
console.log(`You are a student, attending a high school with problems beyond the limits of your imagination. You are looking to cut class, but it's raining too hard for you to leave without your umbrell. Unfortunately, you can't remember where you left it. Right now, you are in the lobby. Along the wall to your right is a trophy case displaying the past triumphs of the school's athletics program. You spy in the corner of the bottom shelf a county spelling bee aware from decades ago. You start to question the quality of this institution, but you decide instead to take stock of your surroundings. To your LEFT is a large office, and STRAIGHT ahead is a wide corridor.`);

lobbyOptions();