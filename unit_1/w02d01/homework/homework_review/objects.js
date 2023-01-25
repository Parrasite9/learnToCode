// //-----------------------------------------------
// //            Part 1: Object Practice
// //-----------------------------------------------
//
// //  1. Create an object based on your desk setup. You can call this "setup". Be as discriptive as possible. Include how many screens you have, if you have a mouse, type of chair, laptop size.
//
// const setup = {
//   numberOfMonitors: 1,
//   monitor1: 'Asus Vg246',
//   speakers: 'Bose',
//   toDoList: ['code', 'eat', 'fly a kite', 'sleep'],
//   computer: {
//     brand: 'Apple',
//     model: 'MacBook Pro',
//     year: 2020,
//     refurbished: false,
//   },
//   drink1: 'Water',
//   drink2: 'Kombucha',
// }
// console.log(setup)
//
// //  2. Let's say you have upgraded your setup and have added another screen. Let's update that screen property on the object to have one more than before.​
//
// setup.numberOfMonitors = 2
// setup.monitor2 = 'Asus Vg246'
// console.log(setup)
//
// //  3. Let's create an array of any random items on your desk you don't consider part of your setup now! Without hard coding it into the original object, add said array to the object as a new property. Let's call this array "clutter" (If you don't have any random things or clutter, make some stuff up!).​
//
// let clutter = ['book', 'cables', 'pens', 'random index cards']
// setup.junk = clutter
// console.log(setup)
//
// //  4. Now let's say we want to list all of the things in that array out in a list so we can see just how messy/cluttered it is at the moment. Iterate over the array we added in the previous step and list out all items!​
//
// console.log('Look at all this junk cluttering up your workspace!')
// for (let i = 0; i < clutter.length; i++) {
//   console.log((i + 1) + ': ' + clutter[i])
// }
//
// //  5. Now that we have an array in the object, let's also add an object into our object called "computer" (remember do not touch the original object directly). Give it keys of "screenSize" and "OS" (operating system).​
//
// Object.assign(setup.computer, {screenSize: '2560 × 1600', os: 'Big Sur 11.6.6'} )
// console.log(setup)
//
//
// //  6. Let's now use dot notation to pull out both of those keys in the "computer" object and print them to the console
//
// console.log('Screen Size: ' + setup.computer.screenSize)
// console.log('Operating System: ' + setup.computer.os)
//
// //  7. Again without touching the original object in your code, let's add an array to that "coomputer" object we added in the previous step. Let's call this "files" and have it be a list of random file names. (These don't have to be real. Make up some file names to put in this array as strings.)​
//
// setup.computer.files = [`myJunk`, `myStuff`, `everyThingElse`]
// console.log(setup)
//
//
// //  8. Now let's do a little repeat of step 4, but now we have to dive a little deeper into the original object and loop over the array we added in the last step that is nested in the object "computer" that is nested inside of the original object.​
//
// console.log(`Look at all these files!`)
// for (let i = 0; i < setup.computer.files.length; i++) {
//   console.log((i + 1) + ': ' + setup.computer.files[i])
// }
//
// //  9. Given the array of objects below, loop through the array and print out both the title and author for each book.
//
// const books = [{
//   title: 'Pragmatic Programmer', author: 'David Thomas + Andrew Hunt'}, {title: 'Clean Code', author: 'Robert Martin'}, {title: 'You Don\'t Know JS', author: 'Kyle Simpson'}]
//
// console.log('Checkout these cool books!')
// for (let i = 0; i < books.length; i++) {
//   console.log((i + 1) + ': ' + books[i].title + ' --- ' + books[i].author)
// }


//-----------------------------------------------
//                Hero? vs. Goblin
//-----------------------------------------------


//  1. Create an object for your hero and call this "hero". The hero object should have a name, hitPoints (set this to 50), attack (set this to 10).​

const hero = {
  name: `Johnny`,
  hitPoints: 50,
  attack: 10,
}

//  2. Create an object for an enemy goblin and call this "goblin". The goblin object should have a name, hitPoints(set this to 20), and attack (set this to 5).​

const goblin = {
  name: `Harrold`,
  hitPoints: 20,
  attack: 5,
}


//  3. Let's have the goblin get a sneak attack in and hit the hero first. Subtract the goblin's attack from the hero's hitPoints and console log the hero's hit points after.​

hero.hitPoints = hero.hitPoints - goblin.attack
console.log(`Watch out ${hero.name}!`)
console.log(`A goblin named ${goblin.name} blindsided ${hero.name}! ${hero.name} now has ${hero.hitPoints} hitPoints`)
console.log(``)
console.log(`Not cool ${goblin.name}, you can be such a jerk sometimes!`)
console.log(``)

// 4. Now it's the hero's turn! Have the hero attack the goblin in the same way the goblin attacked the hero and log the goblin's hp after.​

goblin.hitPoints = goblin.hitPoints - hero.attack
console.log(`The hero ${hero.name} doesn\'t tollerate that kind of behavior and smacked ${goblin.name} back`)
console.log(`${goblin.name}\'s hit points are now ${goblin.hitPoints}`)
console.log(``)
console.log(`${hero.name}, I know that ${goblin.name} was being a jerk and you are in pain.`)
console.log(`Please consider your actions, This is a great opprotunity to show ${goblin.name} that there is a way other than violence`)
console.log(``)


//  5. Now both are locked into a battle! Let's write some logic here that will allow the goblin and hero to fight until one of their hitPoints values reaches 0 or below.​

// console.log(`Unfortunately, a scuffle between ${hero.name} and ${goblin.name} erupts and they start taking blows at eachother`)
// console.log(``)
// while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
//   console.log(`${goblin.name} swings at ${hero.name}`)
//   hero.hitPoints = hero.hitPoints - goblin.attack
//   console.log(`${hero.name}\'s hit points are ${hero.hitPoints}`)
//   console.log(``)
//   console.log(`${hero.name} swings at ${goblin.name}`)
//   goblin.hitPoints = goblin.hitPoints - hero.attack
//   console.log(`${goblin.name}\'s hit points are ${goblin.hitPoints}`)
//   console.log(``)
//   if (hero.hitPoints === 0){
//     console.log(`Our hero ${hero.name} has been slain by the villionous ${goblin.name}`)
//   }
//   if (goblin.hitPoints === 0){
//     console.log(`${hero.name} has killed the goblin ${goblin.name}`)
//     console.log(``)
//     console.log(`Dang, ${hero.name}! You may consider taking it down a notch next time`)
//     console.log(`An eye for an eye leaves the world blind`)
//   }
// }
// console.log(``)


//  6. Let's do some refactoring! Let's have these two objects interact with each other using methods. Give both the hero and goblin a method called attackEnemy which will accept a parameter called "enemy" (this will be the other object when you pass an argument to it). The method should subtract the attack of the attacker from the hitPoints of the enemy.​

const damage = (victim, attacker) => {
  victim.hitPoints = victim.hitPoints - attacker.attack
}

console.log(`Unfortunately, a scuffle between ${hero.name} and ${goblin.name} erupts and they start taking blows at eachother`)
console.log(``)
while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
  console.log(`${goblin.name} swings at ${hero.name}`)
  damage(hero, goblin)
  console.log(`${hero.name}\'s hit points are ${hero.hitPoints}`)
  console.log(``)
  console.log(`${hero.name} swings at ${goblin.name}`)
  damage(goblin, hero)
  console.log(`${goblin.name}\'s hit points are ${goblin.hitPoints}`)
  console.log(``)
  if (hero.hitPoints === 0){
    console.log(`Our hero ${hero.name} has been slain by the villionous ${goblin.name}`)
  }
  if (goblin.hitPoints === 0){
    console.log(`${hero.name} has killed the goblin ${goblin.name}`)
    console.log(``)
    console.log(`Dang, ${hero.name}!  You may consider taking it down a notch next time`)
    console.log(`An eye for an eye leaves the world blind`)
  }
}
console.log(``)


//-----------------------------------------------
//              Hungry for more!
//-----------------------------------------------

//  The hero has defeated the goblin! But wait! They see in the distance 10 goblins running straight for him looking for revenge! Create a way for the hero to continuously battle all 10 goblins (1 at a time they're not so smart and don't coordinate at all).


let goblinNames = ['Larry', 'Curly', 'Mona', 'The Dude', 'Louis', 'Steve', 'Susan', 'Tom', 'Gerrald', 'Jessica']

let goblinHorde = []
let fallenGoblins = ['Harrold']

for (let i = 0; i < goblinNames.length; i++) {
  const goblin = {
    name: goblinNames[i],
    hitPoints: 20,
    attack: 5,
  }
  goblinHorde.push(goblin)
}
console.log(`${goblinNames} surround ${hero.name} seeking revenge for their fallen comrade ${fallenGoblins}`)
console.log('')
while (goblinNames.length > 0) {

  for (let i = 0; i < goblinNames.length; i++) {

    while (hero.hitPoints > 0 && goblinHorde[i].hitPoints > 0) {

      console.log(`${goblinHorde[i].name} steps up to ${hero.name}.`)
      console.log(`${hero.name} attacks ${goblinHorde[i].name} instictively`)
      damage(goblinHorde[i], hero)
      console.log(`${goblinHorde[i].name}\'s hit points are ${goblinHorde[i].hitPoints}`)
      console.log(``)
      console.log(`${goblinHorde[i].name} swings at ${hero.name}`)
      damage(hero, goblinHorde[i])
      console.log(`${hero.name}\'s hit points are ${hero.hitPoints}`)
      console.log(``)
      if (hero.hitPoints === 0){
        console.log(`Our hero ${hero.name} has been slain by ${goblinHorde[i].name}`)
        console.log(``)
        return
      }
      if (goblinHorde[i].hitPoints === 0){
        console.log(`${hero.name} has killed the goblin ${goblinHorde[i].name}`)
        console.log(`It is a sad day for goblin and human alike`)
      }
    }
    fallenGoblins.push(goblinNames.shift())
  }


}
