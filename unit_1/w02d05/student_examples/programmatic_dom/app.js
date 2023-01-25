// $(() => {
//     const addH2 = () => {
//         const $h2 = $('<h2>').text("Just getting started").appendTo('body')
    
//     }
    
//     addH2();

//     const changeH2 = () => {
//         $('h2').text("Getting warmed up")
//     }

//     changeH2();
// })

const randColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const generateSquares = (numberOfSquares) => {
    for (let i = 1; i <= numberOfSquares; i++) {
        const $square = $('<div>').attr("class", "square").appendTo('body')
        const color = randColorRGB();
        console.log(color);
        $square.css('background-color', color).appendTo('body')
        $square.text(i).attr("id", "square" + i)

    }
}

$(() => {
    generateSquares(100);
})