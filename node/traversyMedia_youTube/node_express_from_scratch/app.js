const mongoPath = "mongodb://localhost/nodekb";
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;
const bodyParser = require("body-parser");
mongoose.connect(mongoPath);

// init app
const app = express();
const port = 3000;

// bring in models
let Article = require("./models/article");

// check connection
db.on("open", () => {
    console.log("connected to mongo db : nodekb");
})

// check for db errors
db.on("error", err => {
    console.log(err);
});

// load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// home route
app.get("/", (req, res) => {
    // articles from db
    Article.find({}, (err, articles) => {

        console.log(err);

        res.render("index", {
            title: "Articles",
            articles: articles,
        });
    });


});

// add route
app.get("/articles/add", (req, res) => {
    res.render("add_article", {
        title: "Add Article "
    });
});

// add POST article route
app.post("/articles/add", (req, res) => {
    console.log("submitted");
    console.log(req.body);

    return;
});

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})