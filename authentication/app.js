const express = require("express")
const app = express()
const path = require("path")
const cookoeParser = require("cookie-parser")
const cookieParser = require("cookie-parser")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello")
})


app.listen(3000)