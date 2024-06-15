const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index");
})
// Dynamic Routing
app.get("/profile/:username", (req, res) => {
    // req.params.username
    res.send("Running")
})

app.listen(3000, () => {
    console.log("Its running")
});