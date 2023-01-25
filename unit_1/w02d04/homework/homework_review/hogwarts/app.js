// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(()=>{


    //********///////////////******** Year 1 ********////////////////********//
      
  const  $container = $('#container')
  //   console.log($container)
  const $h1 = $('<h1>').text('Hogwards').appendTo($container)

    //********///////////////******** Year 2 ********////////////////********//
  

    const $h2 = $('<h2>').text('Yulia').appendTo($container)
    const $h3 = $('<h3>').text('Gryffindor').appendTo($container)
    const $h4 = $('<h4>').text('Cat').addClass('cat').appendTo($container)
    const $wand = $('<h4>').text("Hornbeam Wand with Dragon Heartstring Core").appendTo($container)
    
    
    //********///////////////******** Year 3 ********////////////////********//
    
    
    const $ul = $('<ul>').attr('storage', 'trunk').appendTo($container)
    const $li1 = $('<li>').text('butter beer').appendTo($ul)
    const $li2 = $("<li>").text('invisibility cloak').addClass('secret').appendTo($ul)
    const $li3 = $('<li>').text('magic map').attr('class', 'secret').appendTo($ul)
    const $li4 = $('<li>').text('time turner').attr('class', 'secret').appendTo($ul)
    const $li5 = $('<li>').text('leash').attr('class', 'cat').appendTo($ul)
    const $li6 = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans").appendTo($ul)
   
   
   
   
   
    //********///////////////******** Year 4 ********////////////////********//
    const $p = $('<p>').appendTo($container)
    const $table = $('<table>').appendTo($container)
    const $h5 = $('<h5>').text('Spring 2023').appendTo($p)
    const $thead = $('<thead>').appendTo($table)
    const $th1 = $('<th>').text('Day').appendTo($thead)
    const $th2 = $('<th>').text('Classes').appendTo($thead)
    const $tr = $('<tr>').appendTo($table)
    const $td1 = $('<td>').text('Monday').appendTo($tr)
    const $tr2 = $('<tr>').appendTo($table)
    const $td2 = $('<td>').text('Tuesday').appendTo($tr2)
    const $tr3 = $('<tr>').appendTo($table)
    const $td3 = $('<td>').text('Wednesday').appendTo($tr3)
    const $tr4 = $('<tr>').appendTo($table)
    const $td4 = $('<td>').text('Thursday').appendTo($tr4)
    const $tr5 = $('<tr>').appendTo($table)
    const $td5 = $('<td>').text('Friday').appendTo($tr5)
    const $tdClass = $('<td>').text('Herbology History of Magic').appendTo($tr)
    const $tdClass2 = $('<td>').text('Divination, Charms').appendTo($tr2)
    const $tdClass3 = $('<td>').text('Potions').appendTo($tr3)
    const $tdClass4 = $('<td>').text('Transfiguration, Defense Against the Dark Arts').appendTo($tr4)
    const $tdClass5 = $('<td>').text(' Quidditch practice').appendTo($tr5)
    
    
    //********///////////////******** Year 5 ********////////////////********//

      $wand.remove()
      $li1.remove()
       const $wand2= $('<h4>').text('Cypress wand with a unicorn hair core').insertAfter($h4).css('color', 'magenta')
      // $h4.appendTo($td5)
      $h4.insertAfter($h3)

    //********///////////////******** Year 6 ********////////////////********//

    $('.secret').hide('slow').delay(2000).show('slow')
    // $li5.addClass('cabbage').css('color', 'chartreuse' )
    $li1.removeClass('cabbage')
    //********///////////////******** Year 7 ********////////////////********//
    $h5.text('Fall 2023')
    $li1.text('Butter Beer').prependTo($ul)
    $li1.attr('id','trunk')
    $('body').css('background-image', 'url(https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)')
    $("body").css("font-size", "20px")
    

})
