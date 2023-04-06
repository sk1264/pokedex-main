const express = require('express');
const app = express();

const pokemon = require("./models/pokemon");
const methodOverride = require('method-override');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

// index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon, pokemon})
})

// show


// new
app.get('/pokemon/new', (req, res) => {
    res.render("new.ejs");
})

// edit
app.get('/:id/edit', (req,res) => {
    res.render("edit.ejs")
})

// create

// update

// destroy

// listening
app.listen(3000, () => {
    console.log('listening on port 3000');
})
