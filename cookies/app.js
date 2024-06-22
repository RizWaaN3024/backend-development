const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')


app.use(cookieParser())


app.get("/", (req, res) => {
    res.cookie("name", "Rizwaan")
    res.send("Done")
})
app.get("/read", (req, res) => {
    console.log(req.cookies)
    res.send("READ PAGE")
})

app.listen(3000)