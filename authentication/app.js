const express = require("express")
const app = express()
const userModel = require("./models/user")
const jwt = require("jsonwebtoken")


const path = require("path")
const cookoeParser = require("cookie-parser")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/create", (req, res) => {
    let {username, email, password, age} = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })
            let token = jwt.sign({email}, "secret")
            res.cookie("token", token)
            res.send(createdUser)
        })
    })
    

})

// logout
app.get("/logout", (req, res) => {
    res.cookie("token", "")
    res.redirect("/")
})

// Login
app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})
    if (!user) return res.send("Something Went Wrong")

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({email: user.email}, "secret")
            res.cookie("token", token)
            res.send("Login Successful")
        } else {
            res.send("Something Wetn Wrong")
        }
    })

})

app.listen(3000)