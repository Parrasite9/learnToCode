console.log('hai')

$(() => {
    const $topDiv = $('<div>').attr('id','top-container')
    $('body').append($topDiv)
    const $h1 =$('<h1>').text('Trois coleurs: rouge, blanc, et blue')
    const $div1 = $('<div>').addClass('couleur').attr('id', 'red')
    const $div2 = $('<div>').addClass('couleur').attr('id','white')
    const $div3 = $('<div>').addClass('couleur').attr('id','blue')
    $topDiv.append($h1)
    $topDiv.append($div1)
    $topDiv.append($div2)
    $topDiv.append($div3)
    $h1.text('Three colors: red, white and blue')
    $div2.css('background-color', 'black')
    $div3.css('background-color', 'orange')
    $h1.text("Three colors: red, black and orange")
    const $bottomDiv = $('<div>').attr('id','bottom-container')
    $('body').append($bottomDiv)
    const $h2 =$('<h1>').text('Lumpy Space Princess')
    const $div4 = $('<div>').attr('id', 'img-container')
    const $img = $('<img>').attr('src','https://i.imgur.com/EsIExgT.gif')
    // console.log($('body'))
    $bottomDiv.append($h2)
    $bottomDiv.append($div4)
    $div4.append($img)
    $('body').prepend($bottomDiv)
    // const $video = $('<video>').attr('src', 'https://i.imgur.com/vB9swNz.mp4')
    // $bottomDiv.append($video)
    // $h2.text("The Ice King")
    // $img.attr('src', 'https://i.imgur.com/O6bd6If.gif')
    // $bottomDiv.remove()
    // $topDiv.remove()
    // const $p = $('<p>').text("the Ice King waz here")
    // $('body').append($p)
})
