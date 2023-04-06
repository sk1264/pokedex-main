const express = require('express');
const app = express();

const pokemon = require("./models/pokemon");
const methodOverride = require('method-override');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

// setup
app.get('/', (req, res) => {
    res.send("App is working")
})

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
app.get('/pokemon/:id', (req,res) => {
    res.render('edit.ejs');
})

// create

app.post('/pokemon', (req, res) => {
    const newPokemon = {
      name: req.body.name,
      img: req.body.img,
      type: req.body.type,
      stats: {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
      }}
      pokemon.push(newPokemon);
      res.redirect("/pokemon");
    });
  

// update

// delete
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon');
})

// listening
app.listen(3000, () => {
    console.log('listening on port 3000');
})
