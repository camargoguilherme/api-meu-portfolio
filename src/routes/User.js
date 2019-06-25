const express = require('express'); 
const routes = express.Router();

const UserController = require('../controllers/UserController');
const AuthServices = require('../auth/AuthServices');


// Routes para User
routes.get('/user', AuthServices.isAdmin, UserController.findAll);
routes.get('/user/:id', AuthServices.isAdmin, UserController.show);
routes.post('/user', AuthServices.isAdmin, UserController.store);
routes.put('/user/:id', AuthServices.isAdmin, UserController.update);
routes.delete('/user', AuthServices.isAdmin, UserController.deleteAll);
routes.delete('/user/:id', AuthServices.isAdmin, UserController.delete);

module.exports = routes;