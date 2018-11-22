const mongoPath = "mongodb://localhost/nodekb";
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = mongoose.connection;
const bp = require("body-parser");
const em = require("express-messages");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
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


// load bodyparser middleware
app.use(bp.urlencoded({
    extended: false
}));
app.use(bp.json());

// load express session middleware
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// load express-messages middleware
app.use(require('connect-flash')());
app.use((req, res, next) => {
    res.locals.messages = require("express-messages")(req, res);
    next();
});

// set public folder
app.use(express.static(path.join(__dirname, "public")));

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

// route file
let articles = require("./routes/articles");
app.use("/articles", articles);

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})