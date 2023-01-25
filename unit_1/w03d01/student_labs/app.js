$(() => {
const A = 1
const J = 11
const Q = 12
const K = 13

let suits = ['Hearts', 'Clubs', 'Diamond', 'Spades']
let values = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];
let deck = []

for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
	for (let valueCounter = 0; valueCounter < values.length; valueCounter++) {
		deck.push(values[valueCounter] + " " + suits[suitCounter]);
	}
	
}



var shuffle = () => {
		deck.sort((a,b) => Math.random() - 0.5);
        // console.log(deck);
	}

    shuffle();
    console.log(deck);

	let player2 = deck.slice(0, 26)
	let player1 = deck.slice(26)
   
    // console.log(player1);
    // console.log(player2);

	// console.log(player1);
	// console.log(player2);

	let playerOneDraw = player1.shift()
	let playerTwoDraw = player2.shift()

	let x = 0
	let y = 0
	
   	let playerscore = x 
   	let computerscore = y 

// function draw() {
// 	while(player1[0] !== 0){
// 		compare();
// 		if (player1[0] === 0) {
// 			console.log("Player two wins");
// 		}
// 		else {
// 			console.log("Player one wins");
// 		}
// 	}
// }	


const winCondition = () => {
	if (player1[0] === undefined || player2[0] === undefined) {
		if (playerscore > computerscore) {
			const $playerOneWin = $('<h1>').text("You are the Winner!!").appendTo('#winbox').addClass("animate-charcter")
            $userButton.remove();
			return;
		}
		else if (playerscore < computerscore) {
			const $playerTwoWin = $('<h1>').text("CPU is the Winner").appendTo('#winbox').addClass("animate-charcter")
            $userButton.remove();
			return;
		}
		else if (playerscore === computerscore) {
			alert("There are no ties in war. PREPARE FOR SUDDEN DEATH!")
		}
	}


}



const compare = () => {
	let playerOneDraw = player1.shift()
	let playerTwoDraw = player2.shift()


    // BELOW DISPLAYS CARD FOR THE ROUND
    let $playerCard = $('<h2>').appendTo('.playerCard').text(playerOneDraw)
    let $cpuCard = $('<h2>').appendTo('.cpuCard').text(playerTwoDraw)

	winCondition();

	if (playerOneDraw > playerTwoDraw) {
        playerscore +=1;
        const $playerScoreUpdate = $("#playerScore").text(`${playerscore}`)
        console.log(playerOneDraw + playerTwoDraw);	
	}
	else if (playerTwoDraw > playerOneDraw) {
        computerscore +=1;
        console.log(playerTwoDraw + playerOneDraw);
        console.log("Player two wins");
		const $cpuScore = $("#cpuScore").text(`${computerscore}`)
	}
	else {
		
	}
}


// GAME BUTTON
const $userButton = $('<button>').attr("id", "userButton").appendTo('.grid-container3').text("Player Random Card").on("click", compare);

// const $2ndUserButton = $('<button>').attr("id", "userButton").appendTo('body').text("CPU Random Card").on("click", compare);


// GAME POINT DISPLAY
const $playerScore = $('<h4>').appendTo('.playerScore').text(`${playerscore}`).attr("id", "playerScore")
const $cpuScore = $('<h4>').appendTo('.cpuScore').text(`${computerscore}`).attr("id", "cpuScore")

});