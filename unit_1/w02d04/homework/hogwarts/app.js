$(() => {
    ///////////////////// YEAR 1 ////////////////////////////////

	const $container = $('<div>').appendTo('body') //.attr("id", "container");
    $container.attr("id", "container");
    console.log($container);

    const $h1 = $("<h1>").appendTo($container)
    console.log($h1);
    $h1.text("Hogwarts")

    ///////////////////// YEAR 2 ////////////////////////////////

    const $h2 = $("<h2>").appendTo('div')
    $h2.text("Isaiah") //.appendTo('div')

    const $h3 = $("<h3>").appendTo('div')
    $h3.text("Ravenclaw")

    const $h4 = $("<h4>").appendTo('div').attr("class", "Owl")
    $h4.text("Syrius")

    const $wand = $('<h4>').appendTo('div').attr("id", "test")
    $wand.text("Holly Wand with Unicorn Hair Core").appendTo('div')

    ///////////////////// YEAR 3 ////////////////////////////////

    const $ul = $("<ul>").attr("storage", "trunk").appendTo('body')
    const $li = $("<li>") //.appendTo($ul)
    const $li1 = $("<li>")
    const $li2 = $("<li>")
    const $li3 = $("<li>")
    const $li4 = $("<li>").attr("class", "Owl")
    
    $ul.text("List Of Items")
    $li.text("butter beer")
    $ul.append($li)
    $li1.text("invisibility cloak").attr("class", "secret")
    $ul.append($li1)
    $li2.text("magic map").attr("class", "secret")
    $ul.append($li2)
    $li3.text("time turner").attr("class", "secret")
    $ul.append($li3)
    $li4.text("leash")
    $ul.append($li4)
    $li5.text("Bertie Bott's Every Flavor [Jelly] Beans.")
    $ul.append($li5)


    ///////////////////// YEAR 4 ////////////////////////////////

    // COULD NOT GET A TABLE TO PRINT. TRIED VARIOUS METHODS. 

    const $thead = ("<thead>").appendTo('body')

    const $h5 = ("<h5>").appendTo('body')
    $h5.text("Spring 2022")

    const $table = ("<table>").appendTo('body')
    const $th1 = ("<th>").appendTo($table)
    const $th2 = ("<th>").appendTo($table)

    $th1.text("Day")
    $th2.text("Classes")

    const $tr = ("<tr>").appendTo($table)
    const $td1 = ("<td>").appendTo($tr)
    const $td2 = ("<td>").appendTo($tr)

    $td1.text("Monday")
    $td2.text("Herbology")

    ///////////////////// YEAR 5 ////////////////////////////////

    // ($wand).remove();
    // ($wand).detach();

    //Had to give it a class to remove it.
    $('#test').remove();


    //IT DOES NOT REMOVE
    // $li.remove();
    // $(li).remove
    // ($li).remove();
    // $('<li>').remove()


    
    const $newWand = $('<h4>').appendTo('div')
    $newWand.text("This is a new wand.")





});

  