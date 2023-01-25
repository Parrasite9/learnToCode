const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Hello, Seattle. Im listening...");
})

app.get('/frasier', (request, response) => {
    response.send('Once in prep school, the Existentialist Club once named me "most likely to Be."')
})

app.get('/niles', (request, response) => {
    response.send("You know, sometimes I wonder if Im not just in psychiatry for the money.")
})

app.get('/daphne', (request, response) => {
        response.send("it should send a response of 'Well, have fun. Im off to stick my ehad in the oven.'")
})

app.get('/roz', (request, response) => {
    response.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!'")
})

app.get('/martin', (request, response) => {
    response.send("You may think it's tough being middle-aged, but think about me. I got a son whos middle-aged.")
})

app.get('/Scrappy', (request, response) => {
    response.send("woof")
})

// /FILE IS NOT CASE SENSITIVE

