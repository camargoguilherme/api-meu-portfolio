const express = require('express'); 
const routes = express.Router();

const UserController = require('../controllers/UserController');


// Routes para User
routes.get('/user', UserController.findAll);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user', UserController.deleteAll);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;