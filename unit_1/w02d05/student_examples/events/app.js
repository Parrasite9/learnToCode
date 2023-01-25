const addText = () => {
    // $btn.text("This is working on click").appendTo('body')
    $('body').append("It seems to work")
}

const changeClass = () => {
    $('body').toggleClass('black');
}

$(() => {
    const $btn = $('#btn')
    console.log($btn);

    // .on(whats the user does, the effect) <-- parameters
    // $btn.on('click', () => {
    //     // $btn.text("This is working on click").appendTo('body')
    //     $('body').append("It seems to work")
    // })

    // $btn.on('click', addText)

    $btn.on("click", changeClass)
})
