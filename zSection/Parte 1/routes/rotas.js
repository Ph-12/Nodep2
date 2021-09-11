var express = require('express');
var rotas = express.Router();
const db = require('../services/db')
// define the home page route
rotas.get('/list', (req, res) => {
     res.send('Chegou no list');
});

module.exports = rotas;