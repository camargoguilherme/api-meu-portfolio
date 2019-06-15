const express = require('express'); 
const routes = express.Router();

const AboutController = require('../controllers/AboutController');

// Routes para About
routes.get('/about', AboutController.findAll);
routes.get('/about/:id', AboutController.show);
routes.post('/about', AboutController.store);
routes.put('/about/:id', AboutController.update);
routes.delete('/about/:id', AboutController.delete);

module.exports = routes;