const express = require("express");
const app = express();

const userModel = require("./usermodel");
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "Rizwaan",
        email: "rizwaanans786@gmail.com",
        username: "rizwaan"
    })
    res.send(createdUser)
})
// update
app.get("/update", async (req, res) => {
    let updatedUser = await usermodel.findOneAndUpdate({username: "rizwaan"}, {name: "Rizwaan Ansari"}, {new: true})
    res.send(updatedUser)
})

// read
app.get("/read", async (req, res) => {
    let users = await usermodel.find();
    res.send(users)
})
// delete
app.get("/delete", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({username: "rizwaan"})
    res.send(deletedUser)
})
app.listen(3000)