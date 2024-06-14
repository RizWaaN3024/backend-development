const express = require('express')
const app = express()

// Creating Routes
// Syntax app.get(route, requestHandler, )
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/profile", function (req, res) {
    res.send("New Profile Page")
})

app.listen(3000)