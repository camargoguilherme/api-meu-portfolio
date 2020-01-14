const express = require('express'); 
const routes = express.Router();

const MenuController = require('../controllers/MenuController');
const AuthServices = require('../auth/AuthServices');

// Routes para Menu
routes.get('/menu', MenuController.findAll);
routes.get('/menu/:id', MenuController.show);
routes.post('/menu', AuthServices.isAuthenticate, MenuController.store);
routes.put('/menu/:id', AuthServices.isAuthenticate, MenuController.update);
routes.delete('/menu/:id', AuthServices.isAuthenticate, MenuController.delete);

module.exports = routes;