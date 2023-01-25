const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];

const populateData = () => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);  
        const $infoContainer = $('<div>').attr("class", "info-container").appendTo('body')
        const $nameDiv = $('<div>').attr("class", "name").text(data[i].name).appendTo($infoContainer)

        const $addressDiv = $('<div>').attr("class", "address").text(data[i].address).appendTo($infoContainer)

}
}


const addData = (nameParam, addressParam) => {
    data.push(
        {
            name: nameParam,
            address: addressParam
        }
    )
    const $infoContainer = $('<div>').addClass("info-container").appendTo('body')
    const $nameDiv = $('<div>').addClass("name").appendTo("info-container").text(nameParam)
    const $addressDiv = $('<div>').addClass("address").appendTo("info-container").text(addressParam)


}

$(() => {
    $("#submit").on("click", () => {
        const newName = $("#name").val();
        const newAddress = $("#address").val();
        console.log(newName, newAddress);

    })

    populateData();
    addData("Bilbo", "Shire");
    console.log(data);
})


