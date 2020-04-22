const express = require("express");
const sequelize = require("../config/database.js");
const Gig = require("../models/Gig.js");


const router = express.Router();

//get gig list
router.get("/", (req, res) => {
    Gig.findAll()
        .then(gigs => {
            console.log(gigs);
            res.sendStatus(200);
        })
        .catch(err => console.log("Error Occured " + err));
});


//add gig
router.get("/add", (req, res) => {
    const data = {
        title : "Looking for C++ dev",
        technologies : "C++ and boost libraries",
        budget : "$8000",
        description : "Lorem Ipsum is simply dummy",
        contact_email : "hellouser@gmail.com"
    };

    let {title, technologies, budget, description, contact_email} = data;
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log("Error" + err));
});

module.exports = router;