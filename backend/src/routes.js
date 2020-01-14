// Externas
const { Router } = require('express');
const axios = require('axios');
// Internas
const Dev = require('./models/Dev');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
// Ultilizada
const routes = Router();


//
routes.post('/devs', DevController.store);
routes.get('/devs',DevController.index);

routes.get('/search',SearchController.index);
module.exports = routes;