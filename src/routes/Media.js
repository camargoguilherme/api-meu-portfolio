const express = require('express'); 
const routes = express.Router();

const MediaController = require('../controllers/MediaController');

// Routes para Media
routes.get('/media', MediaController.findAll);
routes.get('/media/:id', MediaController.show);
routes.post('/media', MediaController.store);
routes.put('/media/:id', MediaController.update);
routes.delete('/media/:id', MediaController.delete);

module.exports = routes;