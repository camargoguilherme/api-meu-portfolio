const express = require('express'); 
const routes = express.Router();

const MenuController = require('../controllers/MenuController');

// Routes para Menu
routes.get('/menu', MenuController.findAll);
routes.get('/menu/:id', MenuController.show);
routes.post('/menu', MenuController.store);
routes.put('/menu/:id', MenuController.update);
routes.delete('/menu/:id', MenuController.delete);

module.exports = routes;