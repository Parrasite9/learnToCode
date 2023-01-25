// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

const $div = $('<div>');
console.log($div);

console.log($('body'));

$(() => {
  const $div = $('<div>')
  console.log($div);
  $('body').append($div);
  $div.addClass('meat');
  const $h3 = $('<h3>');
  $h3.text('Ostrich');
  $div.append($h3);

  const $divs = $('div');
  console.log($divs);
  $divs.hide()
})