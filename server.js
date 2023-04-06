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

// new
app.get('/pokemon/new', (req, res) => {
    res.render("new.ejs");
})

//edit
app.get('/:id/edit', (req, res) => {
	const pokemon = pokemon.findById(req.params.id);
	res.render("pokemon/edit.ejs", {pokemon})
})

// show single pokemon
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = pokemon.find(p => p.id === id);
    res.render('show.ejs', { pokemon: selectedPokemon });
  });

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
      }}
      pokemon.push(newPokemon);
      res.redirect("/pokemon");
    });
  

// delete
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon');
})

// listening
app.listen(3000, () => {
    console.log('listening on port 3000');
})
