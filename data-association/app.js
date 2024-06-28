const express = require("express")
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Rizwaan",
        age: "21",
        email: "rizwaanans786@gmail.com"
    })
    res.send(user)
})

app.listen(3000)