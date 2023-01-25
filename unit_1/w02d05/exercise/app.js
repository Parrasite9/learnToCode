// console.log("Hello World");

// const $button = $('<button>').text("About the Game").attr("id", "openModal").appendTo('body')

//   const $anchor = $('<a>').attr("id", "close").text("close").appendTo($div)

// const $h1 = $('<h1>').text("Learn to Play Bridge").appendTo($modalTextbox)

// const $p1 = $('<p>').text("Bridge is played with four people sitting at a card table using a standard deck of 52 cards (no jokers). The players across from each other form partnerships as North‑South and East‑West.").appendTo($modalTextbox)
// const $p2 = $('<p>').text("Draw cards to select the person to deal the cards (the dealer). This person distributes the cards face down, in clockwise rotation one at a time, until each player at the table has a hand consisting of 13 cards.").appendTo($modalTextbox)
// const $p3 = $('<p>').text("After the play of each deal is completed, the opportunity to deal moves around the table clockwise so that each person has a turn to deal out the cards.").appendTo($modalTextbox)

// const $modalTextbox = $('<div>').attr("id", "model-textbox").appendTo($div)



$(() => {

    const $openBtn = $('#openModal')

    const $modal = $('#modal')

    const $closeBtn = $('#close')

    const openModal = () => {
        $modal.css('display', 'block')
    }

    const closeModal = () => {
        $modal.css('display', 'none')
    }



    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)

});