const express = require("express");
const router = express.Router();

// bring in Article model
let Article = require("../models/article");



// add route
router.get("/add", (req, res) => {
    res.render("add_article", {
        title: "Add Article "
    });
});



// add edit by id
router.get("/edit/:id", (req, res) => {
    let id = req.params.id;
    Article.findById(id, (err, article) => {
        res.render("edit_article", {
            title: "Edit Article",
            article: article
        });

    });
});

// add POST article route for ADD
router.post("/add", (req, res) => {
    console.log("submitted");
    console.log(req.body);

    let articleToInsert = Article({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    })

    articleToInsert.save(err => {
        if (err) {
            console.log(err);
            return;
        } else {
            req.flash("success", "article added");
            res.redirect("/");
        }
    })

    return;
});

// add POST article route for EDIT
router.post("/edit/:id", (req, res) => {
    console.log("edit submitted");

    let articleToEdit = {};
    articleToEdit.title = req.body.title;
    articleToEdit.author = req.body.author;
    articleToEdit.body = req.body.body;

    let query = {
        _id: req.params.id
    };

    //use model to update

    Article.update(query, articleToEdit, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            req.flash("success", "Article updated");
            res.redirect("/");
        }
    })
});

// add DELETE route
router.delete("/:id", (req, res) => {
    console.log("delete requested for " + req.params.id);
    let query = {
        _id: req.params.id
    }
    Article.remove(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send("Success")
    })
});

// add route by id
router.get("/:id", (req, res) => {
    let id = req.params.id;
    Article.findById(id, (err, article) => {
        res.render("article", {
            article: article
        });
    });
});

module.exports = router;