const express = require('express'); 
const routes = express.Router();

const ProfileController = require('../controllers/ProfileController');

// Routes para Profile
routes.get('/profile', ProfileController.findAll);
routes.get('/profile/:id', ProfileController.show);
routes.post('/profile', ProfileController.store);
routes.put('/profile/:id', ProfileController.update);
routes.delete('/profile/:id', ProfileController.delete);

module.exports = routes;