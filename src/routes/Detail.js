const express = require('express'); 
const routes = express.Router();

const DetailController = require('../controllers/DetailController');

// Routes para Detail
routes.get('/detail', DetailController.findAll);
routes.get('/detail/:id', DetailController.show);
routes.post('/detail', DetailController.store);
routes.put('/detail/:id', DetailController.update);
routes.delete('/detail/:id', DetailController.delete);

module.exports = routes;