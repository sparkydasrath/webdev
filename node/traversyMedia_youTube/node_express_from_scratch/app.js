const express = require("express");
const path = require("path");

// init app
const app = express();
const port = 3000;

// load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// home route
app.get("/", (req, res) => {
    let articles = [{
            id: 1,
            title: "Article 1",
            author: "me",
            body: "this is art 1"
        },
        {
            id: 2,
            title: "Article 2",
            author: "me",
            body: "this is art 2"
        },

        {
            id: 3,
            title: "Article 3",
            author: "me",
            body: "this is art 3"
        },
    ]
    res.render("index", {
        title: "Articles",
        articles: articles,
    });
});

// add route
app.get("/articles/add", (req, res) => {
    res.render("add_article", {
        title: "Add Article "
    });
});


// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})