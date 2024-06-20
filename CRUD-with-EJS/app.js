const express = require("express");
const app = express();
const path = require("path")
const userModel = require("./models/user")

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
    res.render("index")
})

// read route
app.get('/read', async (req, res) => {
    let allUser = await userModel.find();

    res.render("read", {allUser})
})
// post route
app.post("/create", async (req, res) => {
    let {name, email, image} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        image
    })

    res.redirect("/read")
})

// Delete User
app.get("/delete/:id", async (req, res) => {
    let user = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})
app.listen(3000)