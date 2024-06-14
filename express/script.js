const express = require('express')
const app = express()

// middleware
app.use(function(req, res, next) {
    console.log("Middleware code got executed");
    next();
})

// Creating Routes
// Syntax app.get(route, requestHandler, )
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/profile", function (req, res) {
    res.send("New Profile Page")
})

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke')
})

app.listen(3000)