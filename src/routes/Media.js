const express = require('express'); 
const routes = express.Router();

const MediaController = require('../controllers/MediaController');
const AuthServices = require('../auth/AuthServices');

// Routes para Media
routes.get('/media', MediaController.findAll);
routes.get('/media/:id', MediaController.show);
routes.post('/media', AuthServices.isAuthenticate, MediaController.store);
routes.put('/media/:id', AuthServices.isAuthenticate, MediaController.update);
routes.delete('/media/:id', AuthServices.isAdmin, MediaController.delete);

module.exports = routes;