const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const bcrypt = require("bcrypt");


app.use(cookieParser())


app.get("/", (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("myPlainTextPassword", salt, function(err, hash) {
            // Store hash in your password DB
            console.log(hash)
        })
    })
    res.send("Working")
})
app.get("/read", (req, res) => {
    console.log(req.cookies)
    res.send("READ PAGE")
})

app.listen(3000)