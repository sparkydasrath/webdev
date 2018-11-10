const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();

//MIDDLEWARE
// MW - custom
// const logger = (req, res, next) => {
//     console.log("logging...");
//     next();
// }
// app.use(logger);


// MW - view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// set static path
app.use(express.static(path.join(__dirname, "public")));


const users = [{
        fname: "f name 1",
        lname: "l anme 1"
    },
    {
        fname: "f name 2",
        lname: "l anme 2"
    },
];

app.get("/", (req, res) => {
    // res.json(person);
    res.render("index", {
        title: "users",
        users: users
    });

});

app.post("/users/add", (req, res) => {
    console.log("submitted");
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("server startd on port 3000 express....");
});