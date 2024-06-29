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

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello",
        user: "66807c260e5b0c7080fb52b3"
    })

    let user = await userModel.findOne({_id: "66807c260e5b0c7080fb52b3"})
    user.posts.push(post._id)
    await user.save()

    res.send({post, user})
})

app.listen(3000)