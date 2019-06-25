const express = require('express'); 
const routes = express.Router();

const AboutController = require('../controllers/AboutController');
const AuthServices = require('../auth/AuthServices');

// Routes para About
routes.get('/about', AboutController.findAll);
routes.get('/about/:id', AboutController.show);
routes.post('/about', AuthServices.isAuthenticate, AboutController.store);
routes.put('/about/:id', AuthServices.isAuthenticate, AboutController.update);
routes.delete('/about/:id', AuthServices.isAdmin, AboutController.delete);

module.exports = routes;