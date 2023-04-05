const express = require('express');
const app = express();

const pokemon = require("./models/pokemon");

app.get('/pokemon/', (req, res) => {
    res.render('index.ejs', {pokemon, pokemon})
})



app.listen(3000, () => {
    console.log('listening on port 3000');
})