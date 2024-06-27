const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const bcrypt = require("bcrypt");

// JWT
var jwt = require('jsonwebtoken')


app.use(cookieParser())


app.get("/", (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("myPlainTextPassword", salt, function(err, hash) {
            // Store hash in your password DB
            // console.log(hash)
        })
    })

    let token = jwt.sign({email: "rizwaanans786@gmail.com"}, "secret")
    res.cookie("token", token)
    console.log(token)
    res.send("Working")
})
app.get("/read", (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})

app.listen(3000)