const { response } = require('express');
const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log("listening...");
})

app.get('/homer', (request, response) => {
    response.send("This is homer")
})

app.get('/marge', (request, response) => {
    response.send("This is Marge")
})

app.get('/bart', (request, response) => {
    response.send("This is bart") 
})

app.get('/lisa', (request, response) => {
    response.send("This is Lisa")
})

app.get("/maggie", (request, response) => {
    response.send("This is maggie")
})

app.get('/snowball-II', (request, response) => {
    response.send("This is snowball II")
})

app.get('/santas-little-helper', (request, response) => {
    response.send("This is santas little hper route")
})

app.get(["/1", "/2", "/3"], (request, response) => {
    response.send(`
                <html>
                    <body>
                        <h1>Hello World</h1>
                    </body>
                </html>`)
})
