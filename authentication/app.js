const express = require("express")
const app = express()
const userModel = require("./models/user")


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
            res.send(createdUser)
        })
    })
    

})

app.listen(3000)